import React, { useRef, useState } from "react";
import Text from "../../utilitis/Text/Text";
import heroPic from "../../assets/Logo/Header reviews.svg";
export default function Hero() {
  const [show, setShow] = useState(false);
  console.log(show);
  const handelInput = useRef();
  const handelChange = () => {
    const value = handelInput.current.value;
    if (value.length > -1) {
      setShow(true);
    }
  };
  return (
    <div className="bg-[#EAF4FC] rounded-b-[50px]">
      <div className="w-[1542px] mx-auto h-[572px] relative right-[3344px]">
        <div className="right_site ">
          <h1 className="pt-[77px] text-[48px] font-bold leading-[1.2] text-[#006] relative left-[-3px] w-[867px] mb-[34px] ">
            Noty - Votre guide de confiance pour les services et produits en
            Tunisie.
          </h1>
          <p className=" font-[600] text-[#679] text-[24px] mb-[121px] relative left-[-1px] ">
            Trouvez les meilleurs produits et services en un seul endroit.
          </p>
          <form
            onChange={handelChange}
            className="2xl:flex xl:block lg:block md:block items-center absolute z-40 gap-[15px]"
          >
            <Text />
            <div className="">
              <div className=" hero_btn w-[230px] h-[65px] flex items-center justify-center gap-[11px] font_text absolute top-0">
                <button className=" text-[#FFF] text-[16px] font-normal tracking-[0.010em] relative top-[-1px]">
                  Laissez votre avis
                </button>
                <svg
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9L29 9V7L1 7L1 9Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
        <div className="left_site">
          <div className="image">
            <div className=" absolute top-[53px] right-[-8px]">
              <img
                className=" w-[778px] h-[488px] scale-[1.00001]"
                src={heroPic}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
