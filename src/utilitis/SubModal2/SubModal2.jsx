import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function SubModal2({
  setSubModal,
  subModal,
  setVerify,
  setOpen,
}) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={subModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-[34.78%] left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-[488px] xl:h-[488px] lg:h-[488px] h-auto  bg-[#FFF] rounded-[16px] ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setSubModal(false);
                }}
                color="#D6D6D6"
                size="27px"
                className="cross_btn absolute right-[20px] top-[20px]    hover:rotate-180 duration-500"
              />
              <div className="signUp_container pt-[75px] 2xl:px-0 px-10">
                <div>
                  <h3 className=" text-[16px] font-bold text-[#000] pb-[14px] 2xl:w-[372px] w-full mx-auto 2xl:text-start text-start tracking-[-0.0070em]">
                    Besoin d'aide pour récupérer votre compte ?
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[44px] leading-[17px] w-[342px] mx-auto text-start relative left-[-15px] top-[3px]">
                    Entrez votre adresse e-mail pour recevoir un code de
                    vérification unique (OTP) et réinitialiser votre mot de
                    passe.
                  </p>

                  <div className=" 2xl:w-[372px] w-full 2xl:h-[46px] h-auto mx-auto">
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-bold pb-[12px] relative left-[12px] top-[4px] block tracking-[-0.0070em]"
                      >
                        Adresse e-mail
                      </label>
                    </div>
                    <div className="input_filed pb-[17px]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Entrez votre adresse e-mail"
                        className="2xl:w-[372px] w-full 2xl:h-[46px] h-[46px] pl-[24px] border rounded-full border-[#CFCFCF]  outline-none placeholder:text-[14px] placeholder:text-[#CFCFCF] placeholder:relative placeholder:top-[-2px]"
                      />
                    </div>

                    {/* button */}
                    <div
                      className=" pb-[17px] pt-[14px]"
                      onClick={() => {
                        setSubModal(false);
                        setVerify(true);
                      }}
                    >
                      <button className="common_btn  w-full 2xl:h-[46px] h-[46px] rounded-full text-[#fff] font-medium text-[15px] relative top-[2px]">
                        <span className=" relative top-[1px]">
                          {" "}
                          Envoyer le code
                        </span>
                      </button>
                    </div>
                    {/* button */}
                    {/* button */}
                    <div
                      className="2xl:pb-0 pb-5"
                      onClick={() => {
                        setSubModal(false);
                        setOpen(true);
                      }}
                    >
                      <button className="uncommon_btn2  w-full h-[46px] rounded-full text-[#fff] font-bold text-[15px] flex justify-center items-center gap-[13px]">
                        <svg
                          width="22"
                          height="12"
                          viewBox="0 0 22 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 6.75C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25V6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM21 5.25L1 5.25V6.75L21 6.75V5.25Z"
                            fill="black"
                          />
                        </svg>
                        <span className=" relative top-[1px] left-[2px] ">
                          Retour à la page de connexion
                        </span>
                      </button>
                    </div>
                    {/* button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
