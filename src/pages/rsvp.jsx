import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useRsvp } from "../context/RsvpContext";
import Modal from "../UI/Modal";
import { GreenButton, YellowBorderButton } from "../UI/Buttons";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const Rsvp = () => {
  // const [inputValue, setInputValue] = useState({});
  const [error, setError] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  const { name, phoneNumber, mode, seatNo, email, UID, inputValues, dispatch } =
    useRsvp();

  //creating a function to hadle input changes in the form
  // const handleInputChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setInputValue(values => ({...values, [name]: value}));
  //     if (!value.trim()) {
  //         setError('This field is required!');

  //     }
  //     else {
  //         setError('')
  //     }

  // }
  //function to drop an alert messeage, as well as print input values into the console, if all fields have been filled
  function handleSubmit(e) {
    e.preventDefault();

    // Reset error state before validation
    setError("");
    // Validate phone number
    if (!isValidPhone(phoneNumber)) {
      setError("Please provide a valid number. We might need to contact you");
      setShowDialog(false);
      return; // Stop further execution
    }

    // Proceed if there are no errors
    const newValues = { name, phoneNumber, mode, email, seatNo, UID };

    // Save to local storage
    const existingGuests = JSON.parse(localStorage.getItem("guestList")) || [];
    existingGuests.push(newValues);
    localStorage.setItem("guestList", JSON.stringify(existingGuests));

    dispatch({ type: "addGuest", payload: newValues });
    setShowDialog(true); // Show success modal

    // Reset the fields to empty strings
    dispatch({ type: "setName", payload: "" });
    dispatch({ type: "setPhoneNumber", payload: "" });
    dispatch({ type: "setMode", payload: "" });
    dispatch({ type: "setSeatNo", payload: "" });
    dispatch({ type: "setEmail", payload: "" });
    dispatch({ type: "setUID", payload: "" });
    // if (!error) {
    //     console.log('Form submitted with input:', inputValues);
    //     setShowDialog(true);
    // }
    // console.log(Object.fromEntries(newValues))

    // console.log(inputValues)
  }

  const closeModal = () => {
    setShowDialog(false);
  };
  // setting the state for all values
  const setName = function (e) {
    dispatch({ type: "setName", payload: e.target.value });
  };
  const setPhoneNumber = function (e) {
    dispatch({ type: "setPhoneNumber", payload: e.target.value });
  };
  const setMode = function (e) {
    dispatch({ type: "setMode", payload: e.target.value });
  };
  const setSeatNo = function (e) {
    dispatch({ type: "setSeatNo", payload: e.target.value });
  };
  const setEmail = function (e) {
    dispatch({ type: "setEmail", payload: e.target.value });
  };
  const setUID = function (e) {
    dispatch({ type: "setUID", payload: e.target.value });
  };

  return (
    <div className="form-container2 mt-4 ml-12">
      <div className="flex items-center gap-8">
        <FaArrowLeft size={30} onClick={() => navigate(-1)} />
        <h1 className="font-Playfair text-[30px]">Create Guest List</h1>
      </div>
      <form
        className="font-Lato mt-8 flex flex-col gap-6 "
        onSubmit
      >
        {/*form input fields  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-xl ">
            Name of guest
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter name of guest"
            value={name || ""}
            onChange={setName}
            className="border border-[#C3C3C3] rounded-lg focus:ring-opacity-90 py-4 px-4 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-4"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phoneno" className="text-xl ">
            Phone number
          </label>
          <input
            type="tel"
            name="phoneno"
            placeholder="Enter phone number"
            // value={inputValue.phoneno || ""}
            value={phoneNumber || ""}
            onChange={setPhoneNumber}
            className="border border-[#C3C3C3] rounded-lg focus:ring-opacity-90 py-4 px-4 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-4"
            required
          />
          {error && <p className="errormsg">{error}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="mode" className="text-xl ">
            Mode of attendance
          </label>
          <input
            type="text"
            name="mode"
            placeholder="Physical or Virtual"
            // value={inputValues.mode || ""}
            value={mode || ""}
            onChange={setMode}
            className="border border-[#C3C3C3] rounded-lg focus:ring-opacity-90 py-4 px-4 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-4"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="seat" className="text-xl ">
            Seat number
          </label>
          <input
            type="number"
            name="seat"
            placeholder="Enter seat number"
            value={seatNo || ""}
            onChange={setSeatNo}
            className="border border-[#C3C3C3] rounded-lg focus:ring-opacity-90 py-4 px-4 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-4"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xl ">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email || ""}
            onChange={setEmail}
            required
            className="border border-[#C3C3C3] rounded-lg focus:ring-opacity-90 py-4 px-4 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-4"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="unique" className="text-xl ">
            Unique ID
          </label>
          <input
            type="number"
            name="unique"
            placeholder="Enter your unique ID"
            value={UID || ""}
            onChange={setUID}
            className="border border-[#C3C3C3] rounded-lg focus:ring-opacity-90 py-4 px-4 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-4"
            required
          />
        </div>

        {/* {error && <p className='errormsg'>{error}</p>} */}

        <div className="py-8 flex gap-8">
          <GreenButton type="long">Add guest</GreenButton>

          <YellowBorderButton
            onClick={() => navigate("/import_contact")}
            type="long"
          >
            Import contact
          </YellowBorderButton>
          {/* <button className="border-[#F69A22] border-[1.9px] text-[#F69A22] font-semibold px-4 md:px-20 rounded-lg py-[0.7rem]">
            <NavLink to="/import_contact">Import contact</NavLink>
          </button> */}
        </div>
      </form>
      {showDialog && (
        <Modal onCloseModal={closeModal} pText="Guest successfully added">
          <div className="flex items-center gap-4">
            <GreenButton onClick={closeModal} type="short">Done</GreenButton>

            <YellowBorderButton onClick={() => navigate("/guest_list")} type="short">
              View guest list
            </YellowBorderButton>
          </div>
        </Modal>
      )}
      ;
    </div>
  );
};

export default Rsvp;

{/* <div className="flex cursor-pointer items-center gap-2 md:gap-4">
    <span className="text-[#e4d281]">✓</span>
    <span className="font-Lato text-[17px] md:text-[20px] font-semibold hover:text-[#F69A22]"><a className="" href="/create_invite_link">Create Invite Link</a></span><span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></span></div> */}
