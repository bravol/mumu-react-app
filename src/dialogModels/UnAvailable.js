import { GrFormClose } from "react-icons/gr";
import Unavaliable from "./../images/unavailable.png";

export default function RequestModal({ visibleU, onCloseU }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onCloseU();
  };
  if (!visibleU) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className=" bg-white p-3 rounded ">
        <div className=" flex gap-2">
          <div className=" space-y-4">
            <p className=" text-xs font-semibold flex justify-center md:text-sm">
              Are you Sure the Product is Un Available?
            </p>
            <img
              className=" max-w-[150px] object-cover  mx-auto"
              src={Unavaliable}
              alt={""}
            />

            <div className=" flex justify-between mx-0">
              <button className=" mx-auto bg-red-500 px-4 py-2 text-xs text-white font-semibold rounded-lg hover:scale-110 duration-100 transition-all ease-in-out hover:bg-red-400 md:text-sm">
                Cancel
              </button>
              <button className=" mx-auto bg-green-400 px-4 py-2 text-xs text-white font-semibold rounded-lg hover:scale-110 duration-100 transition-all ease-in-out hover:bg-green-300 md:text-sm">
                Confirm
              </button>
            </div>
          </div>
          <GrFormClose onClick={onCloseU} />
        </div>
      </div>
    </div>
  );
}
