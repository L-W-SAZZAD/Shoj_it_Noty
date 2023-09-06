import React, { useState } from "react";
import people from "../../assets/header_icons/SVGRepo_iconCarrier.svg";
import logo from "../../assets/Logo/Official Logo 5.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import ShowModal from "../../utilitis/ShowModal/ShowModal";
import SubModal2 from "../../utilitis/SubModal2/SubModal2";
import VerifyModal from "../../utilitis/VerifyModal/VerifyModal";
import CheckOutModal from "../../utilitis/CheckOutModal/CheckOutModal";
import FinalModal from "../../utilitis/FinalModal/FinalModal";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [subModal, setSubModal] = useState(false);
  const [verify, setVerify] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [finalModal, setFinalModal] = useState(false);
  return (
    <div className=" pt-[24px] bg-[var(--header-bg-color)] cursor-pointer sticky top-0 left-0 w-full z-50 pb-[10px]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1342px] xl:mx-auto lg:w-[1542px] w-full 2xl:h-[44px]  mx-auto  relative  ">
        <div className="2xl:flex xl:flex lg:flex flex justify-between items-center">
          {/* mobile view */}
          <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block block">
            <img
              className="2xl:mr-[30px] xl:mr-[30px] lg:mr-[30px] inline-block w-[90.5px] h-[38px] object-cover"
              src={logo}
              alt="logo"
            />
          </div>
          <div
            className="2xl:hidden xl:hidden lg:hidden md:block sm:block block "
            onClick={() => setShow(!show)}
          >
            {show ? (
              <RxCross2 size="35px" color="#d53535" />
            ) : (
              <RxHamburgerMenu size="35px" />
            )}
          </div>
          {/* mobile view */}
          {/* laptop view */}
          <div
            className={`2xl:flex xl:flex lg:flex 2xl:static xl:static lg:static absolute top-[200px] 2xl:bg-inherit xl:bg-inherit lg:bg-inherit bg-slate-300 ${
              show ? "left-0" : "-left-[600px]"
            } justify-between  2xl:w-full xl:w-full lg:w-full w-[50%] rounded-lg 2xl:duration-0 xl:duration-0 lg:duration-0 duration-700 z-50`}
          >
            <div className="nav_logo 2xl:flex xl:flex lg:flex">
              <div className="2xl:block xl:block lg:block text-center 2xl:py-0 xl:py-0 lg:py-0">
                <img
                  className="2xl:mr-[30px] xl:mr-[30px] lg:mr-[30px] mt-[1px] mb-[5px] inline-block w-[90.5px] h-[38px] "
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="nav_items 2xl:flex xl:flex lg:flex gap-[29px] items-center">
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] font-semibold text-[#000] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-5 cursor-pointer 2xl:pb-0 xl:pb-0 lg:pb-0 pb-5 tracking-normal">
                  À propos de nous
                </li>
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] font-semibold text-[#000] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-5 cursor-pointer 2xl:pb-0 xl:pb-0 lg:pb-0 pb-5  tracking-normal">
                  Catégories
                </li>
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] font-semibold  text-[#000] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-5 cursor-pointer 2xl:pb-0 xl:pb-0 lg:pb-0 pb-5 tracking-normal">
                  Contactez-nous
                </li>
              </div>
            </div>
            <div className="nav_right_items 2xl:flex xl:flex lg:flex gap-[25px]">
              <div className="flex items-center justify-center 2xl:py-0 xl:py-0 lg:py-0 gap-[9px]">
                <svg
                  className=" relative top-[-3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M14.2228 5.72222C14.2228 8.33021 12.1085 10.4444 9.50054 10.4444C6.89253 10.4444 4.77832 8.33021 4.77832 5.72222C4.77832 3.11421 6.89253 1 9.50054 1C12.1085 1 14.2228 3.11421 14.2228 5.72222Z"
                    stroke="#000066"
                    stroke-width="1.19467"
                  />
                  <path
                    d="M1 17.9999C1.9041 15.0946 4.22998 14.2222 9.5 14.2222C14.77 14.2222 17.0959 15.0946 18 17.9999"
                    stroke="#000066"
                    stroke-width="1.19467"
                    stroke-linecap="round"
                  />
                </svg>
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] font-bold text-[#006] tracking-[-0.010em]">
                  Connexion
                </li>
              </div>
              <div className="2xl:py-0 xl:py-0 lg:py-0">
                <button
                  className="uncommon_btn w-[161px] h-[44px] rounded-full  text-[#fff]   flex justify-center items-center text-[15px] font-[500]  border-none outline-none tracking-[0.010em]"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Pour Entreprises
                </button>
              </div>
            </div>
          </div>
          {/* laptop view */}
        </div>
      </div>
      {open && (
        <ShowModal setSubModal={setSubModal} open={open} setOpen={setOpen} />
      )}
      {subModal && (
        <SubModal2
          setSubModal={setSubModal}
          subModal={subModal}
          setVerify={setVerify}
          setOpen={setOpen}
        />
      )}
      {verify && (
        <VerifyModal
          setVerify={setVerify}
          verify={verify}
          setSubModal={setSubModal}
          setCheckOut={setCheckOut}
        />
      )}
      {checkOut && (
        <CheckOutModal
          setCheckOut={setCheckOut}
          checkOut={checkOut}
          setFinalModal={setFinalModal}
        />
      )}
      {finalModal && (
        <FinalModal setFinalModal={setFinalModal} finalModal={finalModal} />
      )}
    </div>
  );
}
