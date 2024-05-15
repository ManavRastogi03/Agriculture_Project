import React ,{useState}from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
const Cartsidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };
  const cart = [];
  const total = 0;
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag </div>
        <div
          className="cursor-poniter w-8 h-8 flex justify-center items-center"
          onClick={toggleSidebar} // Add event handler to toggle sidebar visibility      
        >
          <IoMdArrowForward className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {/* Render your cart items here */}
        {cart.map((item) => (
          <div key={item.id}>{/* Render your CartItem component or item details */}</div>
        ))}

      </div>
      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          {/* Display the total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${total.toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
             onClick={() => {
              /* Call your clearCart function here */
              // clearCart();
            }}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/checkout"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
export default Cartsidebar;