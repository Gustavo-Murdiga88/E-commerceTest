import { ChangeEvent, FormEvent, useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios, { AxiosError } from "axios";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  FormContainer,
  Button,
} from "./styles";
import { toast } from "react-toastify";

export function CadastroProdutos() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [codigo, setCodigo] = useState("");
  const [embalagem, setEmbalagem] = useState("");
  const [multiplo, setMultiplo] = useState("");
  const [ipi, setIpi] = useState<number>();

  useEffect(() => {
    document.title = 'Cadastro de Produtos';
  },
  [])

  async function handleSubmit(
    form: FormEvent<{ nome?: string; multiplo: number }>
  ) {
    form.preventDefault();
    try {
      const data = {
        nome,
        preco: +preco,
        codigo,
        embalagem,
        multiplo: +multiplo,
        ipi,
      };

      const response = await axios.post(
        "https://guarani-back.herokuapp.com/produtos",
        {
          ...data,
        }
      );

      if (response.data) {
        toast.success(response.data.message);
        setNome('');
        setCodigo('');
        setIpi(0)
        setEmbalagem('');
        setPreco(''); 
        setMultiplo('');
      }
    } catch (err) {
      toast.warn(
        (err as AxiosError<{ message: string }>)?.response?.data?.message ??
          "Ocorreu um erro inesperado"
      );
    }
  }

  function handleInvalidInput(inputValue: ChangeEvent<HTMLInputElement>){
    inputValue.target.setCustomValidity('Preencha o campo!')
  }

  const embalagemIsRequired = !!multiplo;
  const multiploIsRequired = !!+embalagem;

  return (
    <Form onSubmit={handleSubmit as any}>
      <Title> 
        Cadastro de produtos 
        
        <Link to='/list'>
          Ir para listagem de produtos
        </Link>
      </Title>
      <Container>
        <FormContainer>
          <Label htmlFor='nome' >Nome:</Label>
          <Input
          onInvalid={handleInvalidInput}
            type="text"
            name="nome"
            id="nome"
            required
            value={nome}
            onChange={(e) => {
              setNome(e.target.value)
              e.target.setCustomValidity('')
            }
          }
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor='preco'>Preço:</Label>
          <Input  
          onInvalid={handleInvalidInput}
            type="text"
            name="preco"
            required
            id="preco"
            value={preco}
            onChange={(e) => {
              setPreco(e.target.value)
              e.target.setCustomValidity('')
            }}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor='codigo'>Código:</Label>
          <Input
          onInvalid={handleInvalidInput}
            type="text"
            name="codigo"
            id="codigo"
            required
            value={codigo}
            onChange={(e) => {
              setCodigo(e.target.value);
              e.target.setCustomValidity('')
            }}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor='embalagem'>Embalagem:</Label>
          <Input
          onInvalid={handleInvalidInput}
            type="text"
            name="embalagem"
            id="embalagem"
            value={embalagem}
            onChange={(e) => {
              setEmbalagem(e.target.value)
              e.target.setCustomValidity('')
            }}
            required={embalagemIsRequired}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="multiplo">Múltiplo:</Label>
          <Input
          onInvalid={handleInvalidInput}
            type="number"
            inputMode='numeric'
            name="multiplo"
            id="multiplo"
            required={multiploIsRequired}
            value={multiplo}
            onChange={(e) => {
              setMultiplo(e.target.value)
              e.target.setCustomValidity('')
            }}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor='ipi'>IPI:</Label>
          <Input
          inputMode='numeric'
            type="number"
            name="ipi"
            id="ipi"
            value={ipi}
            min={0}
            max={100}
            onChange={(e) => {
              setIpi(Number(e.target.value))
              e.target.setCustomValidity('')
            }}
          />
        </FormContainer>
      </Container>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}
