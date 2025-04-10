import { useNavigate } from "react-router-dom";
import successful1 from "../assets/successful1.png";
import { IoMdClose } from "react-icons/io";

export default function Modal({ onCloseModal, pText, children }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 md:px-28 rounded-lg shadow-md flex flex-col justify-center items-center border w-1/2 text-center relative">
        <IoMdClose
          size={22}
          className="absolute top-4 right-4 cursor-pointer text-[#023d3d]  "
          onClick={onCloseModal}
        />

        <img
          src={successful1}
          alt="Successful"
          className="mx-auto mt-14 mb-10"
        />

        <p className="md:text-xl font-normal font-Playfair ">{pText}</p>

        <div className="py-10 flex gap-6 ">
          {children}
        </div>
      </div>
    </div>
  );
}
