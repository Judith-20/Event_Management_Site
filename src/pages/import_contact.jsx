import { useState } from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
// import successful1 from "../assets/successful1.png";
// import { IoMdClose } from "react-icons/io";

import { GreenButton } from "../UI/Buttons";
import ImportDialog from "./ImportDialog";
import { handleGoogleImport } from "./GoogleImportHandler";
import { handleAppleSignIn } from "./AppleImportHandler";

const Import = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGoogleImport = async () => {
    setLoading(true);
    const fetchedContacts = await handleGoogleImport();
    setContacts(fetchedContacts);
    console.log(fetchedContacts)
    setLoading(false);
    setShowDialog(true);
  };

  const onAppleImport = () => {
    handleAppleSignIn();
  };

  return (
    <div className="import-container flex justify-center items-center font-Lato">
      <div className="mt-4">
        <div className="flex items-center gap-12 md:gap-24">
          <Link to="/rsvp">
            <FaArrowLeft size={30} />
          </Link>
          <h1 className="font-Playfair text-[24px] md:text-[30px]">
            Import Contact
          </h1>
        </div>

        <div
          onClick={onGoogleImport}
          className="border border-[#8d8888] hover:border-[#F69A22] w-[700px] cursor-pointer py-4 rounded-lg mt-10 text-center flex justify-center gap-4"
        >
          <FcGoogle size={30} />
          <span>Import with Google</span>
        </div>

        <div
          onClick={onAppleImport}
          className="border border-[#8d8888] hover:border-[#F69A22] w-[700px] cursor-pointer py-4 rounded-lg mt-10 text-center flex justify-center gap-4"
        >
          <IoLogoApple size={30} />
          <span>Import with Apple</span>
        </div>

        <div className="border border-[#8d8888] hover:border-[#F69A22] w-[700px] cursor-pointer py-4 rounded-lg mt-10 text-center flex justify-center gap-4">
          <FaPlus size={30} />
          <span>Add manually</span>
        </div>

        <div className="flex justify-center mt-20">
          <GreenButton type="secondary">
            <Link to="/guest_list">View guest list</Link>
          </GreenButton>
        </div>
      </div>

      {showDialog && (
        <ImportDialog contacts={contacts} onClose={() => setShowDialog(false)} loading={loading} />
      )}
    </div>
  );
};

export default Import;