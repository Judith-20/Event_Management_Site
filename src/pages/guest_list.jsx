import { Link, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
// import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import leftArrow from "../assets/leftArrow.svg";
import { FiBell } from "react-icons/fi";
// import gltable from "../assets/gltable.png";
import { useRsvp } from "../context/RsvpContext";
import { useEffect } from "react";
import { GreenButton, YellowBorderButton } from "../UI/Buttons";

const Guestlist = () => {
  const { inputValues, dispatch } = useRsvp();
  const navigate = useNavigate();

  // Load guest list from local storage on component mount
  useEffect(() => {
    const storedGuests = JSON.parse(localStorage.getItem("guestList")) || [];
    dispatch({ type: "setGuestList", payload: storedGuests });
  }, [dispatch]);

  return (
    <div className="px-[4rem] mt-8">
      <div className=" flex justify-between items-center">
        <div className="flex items-center gap-12 md:gap-24">
          {/* <FaArrowLeft size={30} onClick={() => navigate(-1)}  /> */}
          <img src={ leftArrow} alt="Return" className="w-10 h-10" onClick={() => navigate(-1)}/>
          <h1 className="font-Playfair md:text-xl">
            Guest list
          </h1>
        </div>

          <div className="flex justify-between items-center gap-4 md:gap-10">
          <span className="flex items-center gap-2 md:gap-4">
          <span className="text-[#F69A22] w-10 h-10 flex justify-center items-center rounded-full bg-[#FFEDCC]">
            <IoMdCheckmark size={22} className="w-8 h-8" />
            </span>
              <Link to="/create_invite_link" className="font-Lato md:text-lg cursor-pointer hover:text-[#F69A22]">Create Invite Link</Link>
            </span>
            <span>
              <FiBell size={25} />
            </span>
          </div>
        
      </div>

      {/* <div className="mt-10 w-[90%] m-auto">
        <img src={gltable} alt="Guest list table" />
      </div> */}
      <div className="flex flex-col mt-20">
        {/* Header Row */}
        <ul className="flex items-center justify-between py-5 px-2 bg-[#EAEAEA] text-[#454545] font-Inter md:text-lg rounded-lg mb-2">
          <li className="w-[5%] text-start">S/N</li>
          <li className="w-[20%] text-start">Name</li>
          <li className="w-[20%] text-start">Phone number</li>
          <li className="w-[25%] text-start">Email address</li>
          <li className="w-[15%] text-start">Status</li>
          <li className="w-[15%] text-start">Mode of attendance</li>
        </ul>

        {/* Data Rows */}
        <ul className="flex flex-col justify-between divide-y divide-[#D9D9D9] border-b border-[#D9D9D9] font-Inter md:text-lg">
          {inputValues?.map((guest, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-left flex-grow py-5 px-2"
            >
              <p className="w-[5%] text-start">{index + 1}</p>
              <p className="w-[20%] text-start capitalize">{guest.name}</p>
              <p className="w-[20%] text-start">{guest.phoneNumber}</p>
              <p className="w-[25%] text-start">{guest.email}</p>
              <p className="w-[15%] text-start">Added</p>
              <p className="w-[15%] text-start">{guest.mode}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-8 flex gap-8 items-center">
                <GreenButton type="long" onClick={()=>navigate("/create_invite_link")}>Create invite link</GreenButton>
      
                <YellowBorderButton
                  onClick={() => navigate("/rsvp")}
                  type="long"
                >
                  Add guest
                </YellowBorderButton>
                {/* <button className="border-[#F69A22] border-[1.9px] text-[#F69A22] font-semibold px-4 md:px-20 rounded-lg py-[0.7rem]">
                  <NavLink to="/import_contact">Import contact</NavLink>
                </button> */}
              </div>
    </div>
  );
};

export default Guestlist;
