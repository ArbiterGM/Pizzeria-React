import { useContext } from "react";
import { MenuCartContext } from "../MenuCartContext";

const PizzaRow = () => {
  const context = useContext(MenuCartContext);
  if (!context) {
    throw new Error("Error within context.");
  }

  const { menu, addToCart } = context;

  return (
    <div className="flex flex-wrap justify-center items-center px-10 md:px-20 lg:px-40 gap-x-14">
      {menu.map((pizza) => (
        <div
          className="product flex flex-col items-center w-44 md:w-52 py-6 cursor-pointer"
          key={pizza.id}
        >
          <img
            className="w-full hover:rotate-180 duration-[0.4s]"
            src={pizza.image}
            alt={pizza.name}
          />
          <p className="text-[#b7903c] pt-6 pb-2 text-2xl lg:text-xl font-medium">
            {pizza.name}
          </p>
          <p className="text-[#d2401e] pt-1 pb-4 font-bold text-xl">
            ${pizza.price}
          </p>
          <button
            onClick={() => {
              addToCart(pizza);
            }}
            className="text-white bg-[#d2401e] outline-none py-1 px-8 md:py-3.5 md:px-12 mt-5 text-lg uppercase bold translate-y-4 opacity-0"
          >
            add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default PizzaRow;
