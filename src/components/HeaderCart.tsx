import IonIcon from "@reacticons/ionicons";
import { useContext } from "react";
import { MenuCartContext } from "../MenuCartContext";

const HeaderCart = () => {
  const context = useContext(MenuCartContext);
  if (!context) {
    throw new Error("Error within context.");
  }

  const { cart, openCart } = context;
  return (
    <div className="absolute top-8 right-14 w-11 h-11 flex justify-center items-center rounded-md shadow-cart cursor-pointer">
      <IonIcon
        name="cart-outline"
        onClick={openCart}
        className="text-3xl text-[#d2401e]"
      />
      <span className="absolute -top-4 -right-2 bg-black px-1.5 py-1 rounded-full text-[#b7903c]">
        {cart?.length}
      </span>
    </div>
  );
};

export default HeaderCart;
