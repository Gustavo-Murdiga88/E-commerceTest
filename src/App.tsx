import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { globalStyled } from "./styles/global";
import {CartProvider} from './pages/context/cart'

import { Router } from "./pages/routes/index.routes";

globalStyled();
function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Router />
    </CartProvider>
  );
}

export default App;
