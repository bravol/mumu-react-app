import { AiFillCar, AiOutlineLaptop } from "react-icons/ai";
import { BiChair } from "react-icons/bi";
import { FaLaptopHouse, FaRegLaughBeam } from "react-icons/fa";
import {
  GiAmpleDress,
  GiHealthDecrease,
  GiKitchenKnives,
} from "react-icons/gi";
import { MdOutlineElectricalServices, MdSportsSoccer } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsPhoneFill } from "react-icons/bs";
import { FcBusinessman, FcElectronics, FcManager } from "react-icons/fc";
import car1 from "./../images/car-1.png";
import car2 from "./../images/car2.png";
import car3 from "./../images/bus.png";
import car4 from "./../images/car4.png";
import car5 from "./../images/car5.png";
import car6 from "./../images/car6.png";
import car7 from "./../images/car7.png";
import car8 from "./../images/car8.png";
import { Link } from "react-router-dom";

const Headings = () => {
  return (
    <div className=" relative w-full h-full py-16 ">
      <div className=" relative cursor-pointer grid grid-cols-5 text-[11px] md:text-xs lg:text-sm md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-11 xl:justify-between pl-2 pr-1 pt-1 bg-green-500 text-white font-medium z-20 ">
        <div className=" group/item ">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Vehicles</p>
          </span>
          <span className="grid container justify-items-start">
            <div className=" absolute group/edit hidden   group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Cars</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Buses</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Tractors</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">SpareParts</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">MotorCycles</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">WaterCrafts</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Trucks & Trailers</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Property</p>
          </span>
          <span className="grid container justify-items-center">
            <div className="absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Apartments for Rent</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Appartments For Sale</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Land For Rent</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Land For Sale</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Event Centres and Venues</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Work Stations</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Short Let Property</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Phones</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100   ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Mobile Phones</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Tablets</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Accessories for Mobile Phones</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Accessories for Tablets</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Smart Watches</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Trackers</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Electronics</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Laptops and Computers</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">TV and DVD Equipments</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Audio and Music Equipments</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Photo and Video Cameras</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Networking Equipments</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Earphones and Headphones</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Computer Hardware and Software</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex   ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Commercials</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100   ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Industrial Ovens</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Manufacturing Equipment</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Stationery</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Store Equipment</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Stage Ligtening & Effects</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Saftey Wear and Equipment</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Saloon Equipment</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">
                      Restaurant & Catering Equipment
                    </span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Printing Equipment</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Medical & Supplies Equipment</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item  space-x-1">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Furniture</p>
          </span>
          <span className="grid container justify-items-start md:justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Chairs and Sofars</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Office Tables</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Dinning Tables</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Bed Stands</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Other Furniture</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex  ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Appliances</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Home Appliances</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Kitchen Appliances</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Home Accessories</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Garden Supplies</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Household Chemicals</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Kitchenware and Cookware</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Health & Beauty</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Bath and Body</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Hair Beauty</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Make Up</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Fragrance</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Sexual Wellness</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Skincare</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Tobacco Accessories</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Vitamins and Supplements</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Jobs</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Teaching Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Accounting & Finance Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Art & Entertainment Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Advertising & Marketing Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Childcare and Babysitting Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Computer and IT Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Clerical & Administrative Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Consulting & Strategy Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Clerical & Administrative Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">
                      Construction & Skilled Trade Jobs
                    </span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Customer Services Jobs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">
                      Enginnering & Architecture Jobs
                    </span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Other Jobs</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex  ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Art & Sports</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Art &Craft</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Books & Games</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">CDs & DVDs</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Musical Instruments</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Camping Gear</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Sports Equipment</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item  space-x-1">
          <span className=" flex  ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Agriculture & Food</p>
          </span>
          <span className="grid container justify-items-start md:justify-items-center xl:justify-items-end">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Farm Machinery & Equipments</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Animal and Bird Feeds</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Seeds</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Meals & Drinks</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Livestock & Poutry</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Other Substances</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Fashion</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Bags</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Clothings</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Jewerly</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Shoes</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Watches</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Wedding Wear</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Construction</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Building Materials</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Doors & Windows</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Electrical Equipment</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Hand Tools</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Meassuring and Layout Tools</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Plumbing & Water Supply</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Solar Energy</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">
                      Ohter Repair and Construction items
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex   ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Babies & Kids</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Baby & Kid Accessories</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Children Clothings</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Baby and Childcare</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Children Shoes</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Children Furniture</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Prams and Strollers</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Maternity & Pregnancy</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Other Children Equipment</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Seeking Work CVs</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Teaching</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Accounting & Finance</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Art & Entertainment</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Advertising & Marketing</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Childcare and Babysitting</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Computer and IT</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Clerical & Administrative</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Consulting & Strategy</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Clerical & Administrative</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Construction & Skilled Trade</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Customer Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Enginnering & Architecture</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Other Job CVs</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Animals & Pets</p>
          </span>
          <span className="grid container justify-items-start md:justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Dogs & Puppies</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Cats & Kitten</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Birds</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Fish</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Reptiles</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Pet Accessories</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Other Animals</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>

        <div className=" group/item">
          <span className=" flex ">
            <img src={car1} className="w-4 hidden" alt={""} />
            <p className="cursor-pointer">Services</p>
          </span>
          <span className="grid container justify-items-center">
            <div className=" absolute group/edit hidden group-hover/item:block rounded-md min-w-[100px] h-fit bg-white p-2 ml-2 transition-all duration-200 ease-in-out delay-100  ">
              <ul className=" text-gray-500 cursor-pointer font-medium   ">
                <Link to="">
                  <li className=" hover:bg-slate-200 py-0.5 rounded-3xl flex ">
                    <img src={car2} className="w-6" alt={""} />
                    <span className="pr-2">Health & Beauty Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car3} className="w-6" alt={""} />
                    <span className="pr-2">Building & Trade Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car4} className="w-6" alt={""} />
                    <span className="pr-2">Chauffeur & Airport Transfer</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car5} className="w-6" alt={""} />
                    <span className="pr-2">Cleaning Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car6} className="w-6" alt={""} />
                    <span className="pr-2">Childcare & Education Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex ">
                    <img src={car7} className="w-6" alt={""} />
                    <span className="pr-2">Computer and IT Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Entertainment Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Catering Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Fitness & Personal Training</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Manufacturing Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Legal Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Photography & Video Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Recruitment Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Pet Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Logistics Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Tax & Financial Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Travel Agents & Tours Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Wedding Service Services</span>
                  </li>
                </Link>
                <Link to="">
                  <li className=" hover:bg-slate-200  py-0.5 rounded-3xl flex">
                    <img src={car8} className="w-6" alt={""} />
                    <span className="pr-2">Other Services</span>
                  </li>
                </Link>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Headings;
