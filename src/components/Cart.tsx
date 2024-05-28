import IonIcon from "@reacticons/ionicons";
import { useContext } from "react";
import { MenuCartContext } from "../MenuCartContext";

const Cart = () => {
  const context = useContext(MenuCartContext);
  if (!context) {
    throw new Error("Error within context.");
  }

  const {
    cart,
    isCartOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = context;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <div
        className={`${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } duration-200 fixed right-0 top-0 h-screen w-[22rem] bg-black z-10`}
      >
        <div className="absolute right-3 top-2">
          <IonIcon
            name="close-outline"
            className="text-[#d2401e] cursor-pointer text-5xl lg:text-4xl"
            onClick={closeCart}
          />
        </div>
        <div className="p-5 pt-10">
          <h3 className="text-center lg:text-left text-3xl uppercase text-white font-medium tracking-wider">
            your basket
          </h3>
          <div className="my-4 min-h-24 p-3 flex flex-col justify-center items-center border-y-2 border-dotted border-[#b7903c]">
            {cart.length < 1 ? (
              <p className="text-white uppercase tracking-wider text-center">
                your basket is empty
              </p>
            ) : (
              <div className="overflow-y-scroll flex flex-col gap-4 w-full py-4 max-h-[70vh] cart">
                {cart.map((item) => (
                  <div
                    className="flex items-center gap-4 py-4 border-b border-solid border-gray-400/40 relative"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28"
                    />
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                          <p className="text-white font-medium uppercase text-lg">
                            {item.name}
                          </p>
                          <p className="text-white font-medium uppercase">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-2">
                          <IonIcon
                            onClick={() => {
                              decreaseQty(item.id);
                            }}
                            className="text-2xl lg:text-xl text-white cursor-pointer"
                            name="remove-outline"
                          ></IonIcon>
                          <p className="text-white text-xl">{item.quantity}</p>
                          <IonIcon
                            onClick={() => {
                              increaseQty(item.id);
                            }}
                            className="text-3xl lg:text-xl text-white cursor-pointer"
                            name="add-outline"
                          ></IonIcon>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white text-md">
                          Calories: {item.calories}
                        </p>
                        <p className="text-white text-md">Fats: {item.fats}</p>
                      </div>
                    </div>

                    <div className="absolute right-0 top-4">
                      <IonIcon
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                        name="close-outline"
                        className="text-white text-2xl cursor-pointer"
                      ></IonIcon>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-white font-medium">Total Payment:</h2>
            <h2 className="text-xl text-white font-medium">
              ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
