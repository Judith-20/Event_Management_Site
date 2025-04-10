import { createContext, useContext, useReducer } from "react";

const RsvpContext = createContext();

const initialState = {
  name: "",
  phoneNumber: "",
  mode: "",
  seatNo: "",
  email: "",
  UID: "",
  inputValues: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setPhoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "setMode":
      return { ...state, mode: action.payload };
    case "setSeatNo":
      return { ...state, seatNo: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setUID":
      return { ...state, UID: action.payload };
    // case "addGuest":
    //   if (!state.name || !state.phoneNumber || !state.mode|| !state.email) return
    //   return { ...state, inputValues: action.payload };
    //   case "setGuestList":
    //     return { ...state, inputValues: action.payload };

    case "addGuest":
      if (!state.name || !state.phoneNumber || !state.mode || !state.email) return state;
      return { ...state, inputValues: [...state.inputValues, action.payload] }; // Ensure it's an array
    case "setGuestList":
      return { ...state, inputValues: Array.isArray(action.payload) ? action.payload : [] }; // Ensure it's an array
    

    default:
      throw new Error("Unknown Action");
  }
}

function RsvpProvider({ children }) {
  const [
    { name, phoneNumber, mode, seatNo, email, UID, inputValues },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <RsvpContext.Provider
      value={{
        name,
        phoneNumber,
        mode,
        seatNo,
        email,
        UID,
        inputValues,
        dispatch,
      }}
    >
      {children}
    </RsvpContext.Provider>
  );
}

function useRsvp() {
  const context = useContext(RsvpContext);
  if (context === undefined)
    throw new Error("RsvpContext was used out of the RsvpProvider");
  return context;
}

export { RsvpProvider, useRsvp };
