import { GrFormClose } from "react-icons/gr";
import { products } from "./../utils/ProductsData";
import { useParams } from "react-router-dom";

export default function RequestModal({ visibleR, onCloseR }) {
  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  const handleOnClose = (e) => {
    if (e.target.id === "container") onCloseR();
  };
  if (!visibleR) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className=" bg-white p-3 rounded ">
        <div className=" flex gap-3">
          <div className=" space-y-4">
            <p className=" text-xs font-semibold flex justify-center md:text-sm">
              {singleProduct.title}
            </p>
            <input
              type="text"
              className=" p-2  border-gray-700 border-2 rounded-lg w-full text-xs md:text-sm "
              placeholder="Your Reason"
            />
            <div className="flex items-center justify-center mb-10">
              <textarea
                className="border-2 outline-none w-full h-32 max-h-44  rounded-md text-xs md:text-sm "
                placeholder="Please describe your Reason"
                type="text"
              />
            </div>
            <button className=" mx-auto bg-green-400 px-5 py-3 text-xs text-white font-semibold rounded-lg hover:scale-110 duration-100 transition-all ease-in-out hover:bg-green-300 md:text-sm">
              Send Report
            </button>
          </div>
          <GrFormClose onClick={onCloseR} />
        </div>
      </div>
    </div>
  );
}
