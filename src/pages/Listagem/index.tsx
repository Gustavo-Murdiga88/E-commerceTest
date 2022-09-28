import { useCartContext } from "../context/cart";
import { Link } from 'react-router-dom'
import {
  Card,
  Container,
  ContainerButton,
  Pagination,
  ContainerCards,
  Title,
  Tag,
  Total,
} from "./styles";
import { useRef } from "react";

export function ListProduct() {
  const indexPage = useRef<number>(0)
  const {
    products,
    getListOfTheProduct,
    addProducts,
    deleteProducts,
    selectedProducts,
    amountTotal
  } = useCartContext();

  return (
    <Container>
      <Total>
      Total em compras: { amountTotal }
      </Total>
      <Title>
        <div>
          <p> Listagem de produtos</p>
          <Link to='/'>
            <button>Voltar para o cadastro de produtos</button>
          </Link>
        </div>
        <div>
            <Link to='/carrinho' >
          <button disabled={!selectedProducts?.length}>
            Carrinho
          { selectedProducts?.length > 0 && (<Tag>
            {selectedProducts?.length}
          </Tag>
          )}
          </button>
          </Link>
        </div>
      </Title>
      <ContainerCards>
        {products.content?.length > 0 &&
          products?.content.map((product) => {
            const amount = selectedProducts?.find((productAmount) => productAmount.codigo === product.codigo);
          return(
          <Card key={product._id}>
              <header>{product.nome}</header>
              <footer>
                <aside>
                <span>
                  {product.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <span>
                  Embalagem: {product.embalagem}
                </span>
                <span>
                  Múltiplo: {product.multiplo}
                </span>
                <span>
                  IPI: {product.ipi}
                </span>
                <span>
                  cod: {product.codigo}
                </span>
                </aside>
                <ContainerButton>
                  <button disabled={amount ? amount.quantity === 0 : true} onClick={() => {deleteProducts(product.codigo)}}> - </button>
                  <span>{amount ? amount.quantity : 0}</span>
                  <button onClick={() => {addProducts(product.codigo)}}> + </button>
                </ContainerButton>
              </footer>
            </Card>
          )
        })}
      </ContainerCards>
      <Pagination>
        {products.totalPages &&
          Array.from({ length: products.totalPages }).map((_, index) => (
            <button key={index} disabled={index === indexPage.current} 
            onClick={() => { getListOfTheProduct(index)
              indexPage.current = index
            }}>
              {index + 1}
            </button>
          ))}
      </Pagination>
    </Container>
  );
}
