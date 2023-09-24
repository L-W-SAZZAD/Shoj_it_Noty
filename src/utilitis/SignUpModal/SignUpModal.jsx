import { Chip, Divider } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function SignUpModal({
  setOpen,
  setSubModal,
  open,
  setPosstion,
}) {
  return (
    <div className=" cursor-pointer relative ">
      <RxCross2
        onClick={() => {
          setOpen(false);
        }}
        color="#D6D6D6"
        size="27px"
        className="cross_btn absolute right-[20px] top-[20px]  hover:rotate-180 duration-500"
      />
      <div className="signUp_container w-[372px] mx-auto pt-[72px]">
        <div>
          <h3 className=" relative top-[4px] text-[16px] font-bold text-[#000] pb-[24px]  tracking-[-0.0070em]">
            Connectez-vous à votre compte
          </h3>
          <p className="text-[#666] font-medium text-[14px] pb-[51px] ">
            Accédez à votre espace personnel en quelques clics.
          </p>
          {/* facebook btn */}
          <div className="flex relative items-center mb-[15px]">
            <button className=" w-[372px] h-[46px] border-[1px] border-[#CFCFCF] rounded-full  text-center flex  items-center ">
              <svg
                className="ml-[11px]"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <circle cx="14" cy="14" r="14" fill="#1877F2" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.449 18.0464L20.0698 13.9994H16.1867V11.3731C16.1867 10.2659 16.7291 9.18667 18.4684 9.18667H20.2339V5.74122C20.2339 5.74122 18.6316 5.46777 17.0998 5.46777C13.9017 5.46777 11.8115 7.40597 11.8115 10.9149V13.9994H8.25659V18.0464H11.8115V27.8298C12.5243 27.9417 13.2549 27.9999 13.9991 27.9999C14.7433 27.9999 15.4739 27.9417 16.1867 27.8298V18.0464H19.449Z"
                  fill="white"
                />
              </svg>
              <span className=" font-bold text-[15px] ml-[54px] relative top-[-1px] tracking-[-0.0070em]">
                {" "}
                Continuer avec Facebook
              </span>
            </button>
          </div>
          {/* facebook btn */}
          {/* google */}
          <div className="flex relative">
            <button className=" w-[372px] h-[46px] border-[1px] border-[#CFCFCF] rounded-full   text-center flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="ml-[11px]"
              >
                <circle cx="14" cy="14" r="14" fill="#F7F7F7" />
                <path
                  d="M22.7501 14.2099C22.7501 13.5954 22.6962 13.0121 22.6038 12.4443H13.9047V15.9521H18.8855C18.6623 17.1032 18.0079 18.0754 17.0379 18.7366V21.0699H20.0095C21.7493 19.4443 22.7501 17.0488 22.7501 14.2099Z"
                  fill="#4285F4"
                />
                <path
                  d="M13.9047 23.333C16.399 23.333 18.4852 22.493 20.0095 21.0697L17.038 18.7363C16.2065 19.2963 15.1519 19.6385 13.9047 19.6385C11.4952 19.6385 9.45512 17.9974 8.72378 15.7808H5.65985V18.1841C7.17642 21.233 10.2942 23.333 13.9047 23.333Z"
                  fill="#34A853"
                />
                <path
                  d="M8.72376 15.781C8.5313 15.221 8.43122 14.6221 8.43122 13.9999C8.43122 13.3777 8.539 12.7788 8.72376 12.2188V9.81543H5.65983C5.02857 11.0754 4.66675 12.491 4.66675 13.9999C4.66675 15.5088 5.02857 16.9243 5.65983 18.1843L8.72376 15.781Z"
                  fill="#FBBC05"
                />
                <path
                  d="M13.9047 8.36095C15.2673 8.36095 16.4837 8.83539 17.446 9.76095L20.0788 7.10095C18.4852 5.59206 16.399 4.6665 13.9047 4.6665C10.2942 4.6665 7.17642 6.7665 5.65985 9.81539L8.72378 12.2187C9.45512 10.0021 11.4952 8.36095 13.9047 8.36095Z"
                  fill="#EA4335"
                />
              </svg>
              <span className=" font-bold text-[15px] relative top-[-1px]  ml-[63px] tracking-[-0.0070em]">
                Continuer avec Google
              </span>
            </button>
          </div>
          {/* google */}
          {/* divider */}
          <div className="my-[45px]">
            <Divider>
              <p className="text-[13px]">Ou bien</p>
            </Divider>
          </div>
          {/* divider */}
          <form action="#">
            <div>
              <label
                htmlFor=" e-mail"
                className="text-[14px] text-[#000] font-bold pb-[9px] block relative left-[12px] top-[-1px] tracking-[-0.0070em]"
              >
                Adresse e-mail
              </label>
            </div>
            <div className="input_filed w-[372px] h-[46px] relative top-[-2px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrez votre adresse e-mail"
                className=" pl-[24px] w-full h-full border-[1px] rounded-full border-[#CFCFCF]  outline-none placeholder:text-[14px] placeholder:text-[#CFCFCF] placeholder:relative placeholder:top-[-2px] placeholder:tracking-[0.0070em]"
              />
            </div>
            <div className="flex items-center justify-between mt-[13px]">
              <label
                htmlFor="Password"
                className="text-[14px] text-[#000] font-bold pb-[9px] block relative left-[12px] top-[-0px] tracking-[-0.0070em]"
              >
                Mot de passe
              </label>
              <a className="text-[13px] font-semibold text-[#333333] relative underline underline-offset-[3px] right-[12px] top-[-3px] tracking-[-0.009em]">
                Oublié?
              </a>
            </div>
            <div className="input_filed w-[372px] h-[46px] relative top-[-1px]">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Entrez votre mot de passe"
                className=" pl-[24px] w-full h-full border-[1px] rounded-full border-[#CFCFCF]  outline-none placeholder:text-[14px] placeholder:text-[#CFCFCF] placeholder:relative placeholder:top-[-2px] placeholder:tracking-[0.0070em]"
              />
            </div>
            {/* check box */}
            <div className="flex items-center gap-[5px] mt-[10px] relative left-[12px] mb-[34px] checkBox_div">
              <input
                type="checkbox"
                className=" checkBox h-[18px] w-[18px]   outline-none block "
              />
              <p className="text-[13px] font-medium text-[#333]">
                Se souvenir de moi
              </p>
            </div>
            {/* check box */}
            {/* button */}
            <div
              className=""
              onClick={() => {
                setOpen(false);
                setSubModal(true);
              }}
            >
              <button className="common_btn 2xl:w-[372px] 2xl:h-[46px] rounded-full w-full h-[46px] text-[#fff] font-medium text-[15px]  relative top-[-1px] placeholder:tracking-[-0.0070em]">
                Se connecter
              </button>
            </div>
            {/* button */}
          </form>
        </div>
      </div>
    </div>
  );
}
