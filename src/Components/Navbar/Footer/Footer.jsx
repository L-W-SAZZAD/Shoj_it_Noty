import React from "react";
import logo from "../../../assets/Logo/Official Logo white 4.png";
import footer from "../../../assets/footer/Yuniqode white png 1.png";
import icon1 from "../../../assets/Social Icons/_Facebook.png";
import icon2 from "../../../assets/Social Icons/_Twitter.png";
import icon3 from "../../../assets/Social Icons/Group.png";
import icon4 from "../../../assets/Social Icons/Vector.png";
import footerLogo from "../../../assets/Social Icons/SVGRepo_iconCarrier.svg";

export default function Footer() {
  return (
    <div className="bg-[#000033]">
      <div className="nav_container 2xl:w-[1542px] 2xl:h-[386px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div id="footer" className=" absolute bottom-0 left-0 w-full">
          <div>
            <div className="footer lg:flex justify-between   pt-[84px]">
              <div className="logo">
                <img className="w-[181.02px] h-[76px]" src={logo} alt="logo" />
                <p className="w-[336px] h-[84px] flex items-center font-normal  leading-[151.253%] text-[14px] mt-[12px] text-[#fff]  footer_text tracking-[0.001em]">
                  Construisant des ponts entre les consommateurs et les
                  entreprises pour une meilleure expérience de consommation en
                  Tunisie.
                </p>
              </div>

              <div className="footer_list flex flex-wrap gap-[100px] pt-[15px] footer_text relative left-[-5px]">
                <div className=" relative left-[0px]">
                  <h2 className="text-[20px] font-medium text-white pb-[35px] footer_text tracking-[0.001em]">
                    Noty
                  </h2>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Notre mission
                  </li>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Carrières
                  </li>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Nous contacter
                  </li>
                  <li className="text-[16px] font-medium text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Guide d’utilisation
                  </li>
                </div>
                <div className=" relative left-[2px]">
                  <h2 className="text-[20px] font-medium text-white pb-[35px] footer_text tracking-[0.001em]">
                    Entreprises
                  </h2>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Pourquoi Noty?
                  </li>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Plans & tarifs
                  </li>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Espace Entreprise
                  </li>
                </div>
                <div className=" relative left-[2px]">
                  <h2 className="text-[20px] font-medium text-white pb-[35px] footer_text tracking-[0.001em]">
                    Légal
                  </h2>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Conditions d'utilisation
                  </li>
                  <li className="text-[16px] font-medium mb-[8px] text-[#D0D0D0] footer_text tracking-[0.001em]">
                    Politique de confidentialité
                  </li>
                </div>
              </div>
            </div>
            <hr className="w-full h-[2px] bg-[#FFFFFF] mt-[58px] " />

            <div className="flex justify-between items-center h-[58px]  bottom-0">
              <div className="flex items-center justify-center footer_text">
                <div className="flex items-center ">
                  <img
                    className="mt-[12.4px] w-[30px] h-[30px]"
                    src={footerLogo}
                    alt="footerLogo"
                  />
                  <p className="flex items-center  text-white text-[16px] font-[500] mr-[10px]">
                    2023 Noty - Tous droits réservés.
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width="2"
                    height="22"
                    viewBox="0 0 2 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L1 21" stroke="white" stroke-linecap="round" />
                  </svg>
                  <p className="text-white text-[12px]  ml-[8px] footer_text font-medium   ">
                    Conçu et Développé par
                  </p>

                  <div className="lg:block hidden mt-[9px] relative left-[-2px]">
                    <img src={footer} alt="" />
                  </div>
                </div>
              </div>
              <div className="social_icons flex gap-[17px] items-center justify-center">
                <img
                  className="w-[15.998px] h-[15.995px]"
                  src={icon3}
                  alt="logo"
                />
                <img className="w-[16.02px] h-[16px]" src={icon1} alt="logo" />
                <img className="w-[16.02px] h-[16px]" src={icon2} alt="logo" />
                <img className="w-[14.002px] h-[16px]" src={icon4} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
