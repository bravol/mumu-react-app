import SingleProductLeft from "../components/SingleProductLeft";
import SingleProductRight from "./../components/SingleProductRight";

const SingleProduct = () => {
  return (
    <>
      <div className=" relative w-full ">
        <div className=" flex  md:px-4 pt-28 pb-10">
          <SingleProductLeft />
          <div className="hidden md:block">
            <SingleProductRight />
          </div>
          {/* left side */}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
