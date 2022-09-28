import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useCartContext } from "../context/cart";
import { Container, Product, ButtonCotainer, Title, Total } from "./styles";
import { Link } from "react-router-dom";

export function Carrinho() {
  const {
    selectedProducts,
    addProducts,
    deleteProducts,
    deleteProduct,
    handleSetValorImposto,
    amountTotal,
  } = useCartContext();

  async function handleNewRequest() {
    try {
      const newRequest = selectedProducts.map((product) => ({
        nome: product.name,
        preco: product.valor,
        codigo: product.codigo,
        embalagem: product.embalagem,
        multiplo: product.multiplo,
        ipi: product.ipi,
        quantidade: product.quantity,
      }));

      const response = await axios.post<{
        message: string;
        valorComImposto: number;
        valorSemImposto: number;
      }>("https://guarani-back.herokuapp.com/pedido", [...newRequest]);

      if (response.data) {
        const { message, valorComImposto, valorSemImposto } = response.data;
        handleSetValorImposto({
          valorComImposto,
          valorSemImposto,
        });
        toast.success(
          `${message} e os valores são: com imposto ${valorComImposto.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "BRL" }
          )} e sem imposto: ${valorSemImposto.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "BRL" }
          )}`
        );
      }
    } catch (err) {
      toast.warn("Aconteceu um erro inesperado");
      console.error(err);
    }
  }

  return (
    <Container>
      <Total>Total em compras: {amountTotal}</Total>
      <Title>
        <section>
          Carrinho de compras
          <Link to="/list">
            <button>Voltar para a listagem</button>
          </Link>
        </section>
        <button
          disabled={selectedProducts.length === 0}
          onClick={handleNewRequest}
        >
          Enviar pedido
        </button>
      </Title>
      {selectedProducts.map((product) => (
        <Product key={product.codigo}>
          <div>
            <button
              onClick={() => {
                deleteProduct(product.codigo);
              }}
            >
              Excluir
            </button>
            <ButtonCotainer>
              <button
                onClick={() => {
                  deleteProducts(product.codigo);
                }}
              >
                -
              </button>
              <span> {product.quantity} </span>
              <button
                onClick={() => {
                  addProducts(product.codigo);
                }}
              >
                +
              </button>
            </ButtonCotainer>
          </div>
          <div>
            <p> {product.name} </p>
          </div>
        </Product>
      ))}
    </Container>
  );
}
