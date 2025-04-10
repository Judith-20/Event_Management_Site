import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";



const ImportDialog = ({ contacts, onClose, loading }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-3/4 h-3/5 md:w-1/2 p-8 rounded-lg shadow-md text-center flex flex-col justify-center items-center relative">
        <IoMdClose
          size={22}
          className="absolute top-4 right-4 cursor-pointer text-[#023d3d]"
          onClick={onClose}
        />
        <h2 className="text-xl font-bold mb-4 font-Playfair">
          {loading ? "Importing Contacts..." : "Contacts Imported Successfully"}
        </h2>
        {loading ? (
          <p className="text-gray-500">Please wait while we fetch your contacts.</p>
        ) : (
          <>
            <p className="mb-4 font-Lato text-gray-600">{contacts.length} contacts imported.</p>
            {/* <div className="max-h-60 overflow-y-auto text-left px-4">
              {contacts.slice(0, 10).map((contact, index) => (
                <div key={index} className="py-1 border-b text-sm">
                  {contact.names?.[0]?.displayName || "No Name"} - {contact.emailAddresses?.[0]?.value || "No Email"}
                </div>
              ))}
              {contacts.length > 10 && (
                <p className="text-center text-xs mt-4 text-gray-400">Only showing first 10 contacts</p>
              )}
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

ImportDialog.propTypes = {
    contacts: PropTypes.array,
    loading: PropTypes.bool,
    onClose: PropTypes.func,
  };

export default ImportDialog;
