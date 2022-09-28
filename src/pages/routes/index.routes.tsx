import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CadastroProdutos } from "../Cadastro/Produtos/formulario"
import { ListProduct } from "../Listagem"
import { Carrinho } from '../../pages/Carrinho'

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                <Route path="/" element={<CadastroProdutos/>}/>
                <Route path="/list" element={<ListProduct />}/>
                <Route path="/carrinho" element={<Carrinho />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}