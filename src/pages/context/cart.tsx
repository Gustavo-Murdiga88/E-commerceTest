import axios from "axios";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { toast } from "react-toastify";

interface CartProviderProps {
  children: ReactNode;
}

type Product = {
  codigo: string;
  embalagem: string;
  ipi: number;
  multiplo: number;
  nome: string;
  preco: number;
  __v: number;
  _id: string;
  quantity: number;
};

type AmountProducts = {
  codigo: string;
  valor: number;
  embalagem: string;
  multiplo: number;
  ipi: number;
  name: string;
  quantity: number;
};

type Products = {
  content: Product[];
  totalItems: number;
  totalPages: number;
};

type ImpostoProps = {
  valorComImposto: number;
  valorSemImposto: number;
}

interface CartContext {
  selectedProducts: AmountProducts[];
  products: Products;
  addProducts(cod: string): void;
  deleteProducts(cod: string): void;
  deleteProduct(cod: string): void;
  getListOfTheProduct(index: number): void;
  valorImposto: ImpostoProps;
  handleSetValorImposto(value: ImpostoProps): void;
  amountTotal: string;
}

const CartContext = createContext<CartContext>({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Products>({} as Products);
  const [valorImposto, setValorImposto] = useState<ImpostoProps>({} as ImpostoProps );

  const [selectedProducts, dispatch] = useReducer(
    (state: AmountProducts[], action: any) => {
      switch (action.type) {
        case "ADD_PRODUCT_ON_CART": {
          const product = products.content.find(
            (p) => p.codigo === action.payload.cod
          )!;

          if (state.length > 0) {
            const productSelected = state.map((item) => {
              if (item.codigo === action.payload.cod) {
                return {
                  ...item,
                  name: product.nome,
                  embalagem: product.embalagem,
                  ipi: product.ipi,
                  multiplo: product.multiplo,
                  valor: product.preco,
                  quantity: item.quantity + product.multiplo,
                };
              }
              return {
                ...item,
              };
            });
            const newProduct = state.findIndex((item) => item.codigo === action.payload.cod);
            if(newProduct < 0) {
              const selectedProducts = [...state, {
                codigo: product.codigo,
                name: product.nome,
                embalagem: product.embalagem,
                multiplo: product.multiplo,
                ipi: product.ipi,
                quantity: product.multiplo,
                valor: product.preco,
              }]
              return selectedProducts; 
            }
            

            return productSelected;
          }

          return [
            {
              codigo: product.codigo,
              valor: product.preco,
              name: product.nome,
              embalagem: product.embalagem,
              multiplo: product.multiplo,
              ipi: product.ipi,
              quantity: product.multiplo
            },
          ];
        }
        case "DELETE_PRODUCT_ON_CART": {
          const product = state.find(
            (item) => item.codigo === action.payload.cod
          )!;
          if (product && product?.quantity - product.multiplo === 0) {
            const products = state.filter(
              (product) => product.codigo !== action.payload.cod
            );

            return products;
          }

          const productSelected = state.map((item) => {
            if (item.codigo === action.payload.cod) {
              return {
                ...item,
                quantity: item.quantity - product.multiplo,
              };
            }
            return {
              ...item,
            };
          });

          return productSelected;
        }
        case "DELETE_ONE_PRODUCT": {
          const restProducts = state.filter((product) => product.codigo !== action.payload.cod)

          return restProducts; 
        }
        default: {
          return [];
        }
      }
    },
    [] as AmountProducts[]
  );

  const amountTotal = selectedProducts.reduce((acc, products) => {
    const total = (products.valor + (products.valor * (products.ipi / 100))) * products.quantity;
    return total + acc;
  } ,0).toLocaleString('pt-BR',{
    style: 'currency',
    currency: 'BRL', 
  })

  const addProducts = useCallback(async (cod: string) => {
    dispatch({
      type: "ADD_PRODUCT_ON_CART",
      payload: {
        cod,
      },
    });
  }, []);

  const deleteProducts = useCallback((cod: string) => {
    dispatch({
      type: "DELETE_PRODUCT_ON_CART",
      payload: {
        cod,
      },
    });
  }, []);

  const deleteProduct = useCallback((cod: string) => {
    dispatch({
      type: "DELETE_ONE_PRODUCT",
      payload: {
        cod,
      },
    });
  }, []);

  const handleSetValorImposto = useCallback(({valorComImposto, valorSemImposto}: ImpostoProps ) => {
    setValorImposto({ 
      valorComImposto,
      valorSemImposto,
    });
  }, [])

  async function getListOfTheProduct(page = 0) {
    try {
      const response = await axios.get(
        "https://guarani-back.herokuapp.com/produtos",
        {
          params: {
            page: page,
          },
        }
      );
      setProducts(response.data);
    } catch (err) {
      toast.warn("Aconteceu um erro inesperado");
      console.error(err);
    }
  }
  useEffect(() => {
    getListOfTheProduct(0);
  }, []);
  return (
    <CartContext.Provider
      value={{
        handleSetValorImposto,
        valorImposto,
        deleteProduct,
        products,
        getListOfTheProduct,
        selectedProducts,
        addProducts,
        deleteProducts,
        amountTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartProvider must be inside of one CartProvider");
  }

  return context;
}
