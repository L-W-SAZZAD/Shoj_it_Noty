import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Text() {
  const [text, setText] = useState("");
  useEffect(() => {
    window.addEventListener("click", () => {
      setText("");
    });
  }, [text]);
  return (
    <div className="2xl:flex justify-center relative">
      <div
        className={`2xl:w-[456px]   ${
          text.length === 0 && "h-[65px]"
        } xl:w-[300px] lg:w-[300px] md:w-[300px] w-full  bg-transparent ${
          text.length > 0 && "bg-white box_shadow_input"
        } border-[2.4px] border-[#000066] ${
          text.length > 0 ? "rounded-[28px]" : "rounded-[62px]  "
        }`}
      >
        <div className={` relative   ${text.length > 0 && "px-[0px]"}`}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Recherchez un établissement... (Boutiques, Restaurants, etc.)"
            className={`outline-none bg-transparent ${
              text.length > 0 ? "h-[65px]" : "h-[57px]"
            } ${
              text.length > 0 &&
              "  border-b-[2px] border-[#EFEFEF] placeholder:text-[#667799] text-[#667799] text-[16px] font-semibold"
            } w-full placeholder:text-[rgb(102,119,153)] placeholder:text-[13px] relative top-[-1px] placeholder:font-medium pl-[20px] `}
            style={{
              paddingLeft: "20px", // Adjust left padding as needed
            }}
          />

          {text.length > 0 && (
            <button className=" absolute right-[5px] top-[5px] h-[55px] w-[120px]  rounded-[900px] px-[9px] bg-[#DAE4FF] py-[11px] text-[#000099] text-[15px] font-semibold">
              Rechercher
            </button>
          )}
        </div>
        {text?.length > 0 && (
          <div className={`w-[98%] mx-auto`}>
            {/* 1 */}
            <div
              className={`mt-[11px] flex items-start cursor-pointer  justify-between   hover:bg-[#EEF3FF] rounded-sm duration-200 py-[10px] w-[97%] mx-auto relative top-[-2.34px] ${
                text.length > 0 && "pl-[12px]"
              } `}
            >
              <div>
                <li className="font-extrabold text-[16px] text-[#0D0D0D] ">
                  ZARA
                </li>
                <p className="text-[#D2D2D2] font-medium text-[12px]  relative top-[1px] left-[1px] tracking-wide">
                  zara.com/tn
                </p>
              </div>
              <div className="flex gap-[6px] justify-center p-1 pr-[5px] items-center">
                <div className="flex items-center bg-[#FFF8BF] px-[4px] py-[2px]   font-medium">
                  {" "}
                  <AiFillStar
                    color="#FCD700"
                    size="17px"
                    className="pr-[2px]"
                  />
                  <p className=" font-medium text-[13px]">2.9/5</p>
                </div>
                <div className="w-[6px] h-[6px] bg-[#FCD700] rounded-full"></div>
                <li className="text-[#000033] font-bold text-[13px] ">
                  253 avis
                </li>
              </div>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div
              className={`mt-[11px] flex items-start cursor-pointer  justify-between   hover:bg-[#EEF3FF] rounded-sm duration-200 py-[10px] w-[97%] mx-auto relative top-[-2.34px] ${
                text.length > 0 && "pl-[12px]"
              } `}
            >
              <div>
                <li className="font-extrabold text-[16px] ">
                  BluZarTech Solutions
                </li>
                <p className="text-[#D2D2D2] font-medium text-[12px] tracking-wide">
                  bluzartech.tn
                </p>
              </div>
              <div className="flex gap-[6px] justify-center pr-[5px] items-center">
                <div className="flex items-center bg-[#D0F3CB] px-[4px] py-[2px] font-medium">
                  {" "}
                  <AiFillStar
                    color="#43A047"
                    size="17px"
                    className=" pr-[2px]"
                  />
                  <p className=" font-medium text-[13px]">4.8/5</p>
                </div>
                <div className="w-[6px] h-[6px] bg-[#43A047] rounded-full"></div>
                <li className="text-[#000033] font-bold text-[13px] ">
                  11 avis
                </li>
              </div>
            </div>

            {/* 1 */}
            {/* 1 */}
            <div
              className={`flex  justify-between cursor-pointer items-start mt-[1px]  hover:bg-[#EEF3FF] duration-200 py-2 w-[97%] mx-auto ${
                text.length > 0 && "pl-[12px] "
              }`}
            >
              <div>
                <li className="font-extrabold text-[16px] ">ProZarMax</li>
                <p className="text-[#D2D2D2] font-medium text-[12px] tracking-wide">
                  prozarmax.tn
                </p>
              </div>
              <div className="flex gap-[6px] justify-center pr-[5px] items-center">
                <div className="flex items-center bg-[#F7CAFF] px-[4px] py-[2px] rounded-md   font-medium">
                  {" "}
                  <AiFillStar
                    color="#7B1FA2"
                    size="17px"
                    className="pr-[2px]"
                  />
                  <p className=" font-medium text-[13px]">3.7/5</p>
                </div>
                <div className="w-[6px] h-[6px] bg-[#7B1FA2] rounded-full"></div>
                <li className="text-[#000033]  text-[13px] font-bold">
                  2465 avis
                </li>
              </div>
            </div>
            {/* 1 */}
            <hr className="mt-[16px] w-[410px] mx-auto" />
            {/*  */}
            <div className=" flex justify-center items-center p-[15px] ">
              <button className="w-[426px] h-[46px]  text-center text-[#000000]  border-[1px] border-[#CFCFCF]  justify-center rounded-full gap-[25px] flex items-center font-semibold text-[15px] ">
                <span className=" relative left-[5px]">
                  Afficher tous les résultats
                </span>
                <svg
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9L29 9V7L1 7L1 9Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
