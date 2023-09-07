import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function CheckOutModal({
  setCheckOut,
  setFinalModal,
  checkOut,
}) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={checkOut}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-[35.99%] left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-auto xl:h-[488px] lg:h-[488px] h-auto  bg-[#FFF] rounded-[16px] ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setCheckOut(false);
                }}
                color="#D6D6D6"
                size="27px"
                className="cross_btn absolute right-[20px] top-[20px]    hover:rotate-180 duration-500"
              />
              <div className="signUp_container 2xl:px-[141px] pt-[76px] xl:px-[132px] lg:px-[110px] px-[70px]">
                <div>
                  <h3 className=" text-[16px] font-semibold text-[#000] pb-[15px] 2xl:w-[372px] w-full mx-auto 2xl:text-start text-start">
                    Réinitialisation de Mot de Passe
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[42px] leading-[17.15px] w-[372px] mx-auto text-start relative  top-[2px]">
                    Veuillez saisir votre nouveau mot de passe ci-dessous pour
                    réinitialiser votre compte. Assurez-vous qu'il est sécurisé
                    et répond aux exigences de sécurité.
                  </p>

                  <div>
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-bold pb-[9px] relative left-[12px] top-[4px] block"
                      >
                        Nouveau Mot de Passe
                      </label>
                    </div>
                    <div className="input_filed pb-[17px] relative top-[3px]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Entrez votre nouveau mot de passe"
                        className="2xl:w-[372px] w-full 2xl:h-[46px] h-[46px] pl-[25px] border rounded-full border-[#CFCFCF]  outline-none placeholder:text-[14px] placeholder:text-[#CFCFCF] placeholder:relative placeholder:top-[-2px] placeholder:left-[-1px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-bold pb-[9px] relative left-[12px] top-[1px] block"
                      >
                        Confirmer Votre Nouveau Mot de Passe
                      </label>
                    </div>
                    <div className="input_filed pb-[25px]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Re-entrez votre nouveau mot de passe"
                        className="2xl:w-[372px] w-full 2xl:h-[46px] h-[46px] pl-[25px] border rounded-full border-[#CFCFCF]  outline-none placeholder:text-[14px] placeholder:text-[#CFCFCF] placeholder:relative placeholder:top-[-2px] placeholder:left-[-1px]"
                      />
                    </div>

                    {/* button */}
                    <div
                      className="pb-[72px]"
                      onClick={() => {
                        setCheckOut(false);
                        setFinalModal(true);
                      }}
                    >
                      <button className="common_btn 2xl:w-[372px] h-[46px] w-full rounded-full text-[#fff] font-medium text-[15px] tracking-[0.007em]">
                        <span className=" relative top-[-0.54px] left-[1px]">
                          {" "}
                          Réinitialiser le Mot de Passe
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
