import "./App.css";
import HeadingGroup from "./components/HeadingGroup.tsx";
import PizzaRow from "./components/PizzaRow.tsx";
import Cart from "./components/Cart.tsx";
import HeaderCart from "./components/HeaderCart.tsx";
import { MenuCartProvider } from "./MenuCartContext.tsx";

function App() {
  return (
    <>
      <MenuCartProvider>
        <HeaderCart />
        <HeadingGroup />
        <Cart />
        <PizzaRow />
      </MenuCartProvider>
    </>
  );
}

export default App;
