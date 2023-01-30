import { GrFormClose } from "react-icons/gr";

export default function RequestModal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className=" bg-white p-3 rounded ">
        <div className=" flex">
          <div className=" space-y-4">
            <p className=" text-xs font-semibold flex justify-center md:text-sm">
              Enter Your Name and Phone Number
            </p>
            <input
              type="text"
              className=" p-2  border-gray-700 border-2 rounded-lg w-full text-xs md:text-sm "
              placeholder="Your Name"
            />
            <input
              type="text"
              className=" p-2 border-2 border-gray-700 rounded-lg w-full text-xs md:text-sm "
              placeholder="Your Phone Number"
            />
            <button className=" mx-auto bg-green-400 px-2 py-1 text-xs text-white font-semibold rounded-lg hover:scale-110 duration-100 transition-all ease-in-out hover:bg-green-300 md:text-sm">
              Request Call Back
            </button>
          </div>
          <GrFormClose onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
