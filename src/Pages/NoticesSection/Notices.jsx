import React from "react";
import img1 from "../../assets/Notes/logo_darty 1.png";
import img2 from "../../assets/Notes/347607172_617243330089630_28312197502042379_n 1.png";
import img3 from "../../assets/Notes/326732265_612793127524990_8319150349199829063_n 1.png";
import img4 from "../../assets/Notes/399010_10151170752048874_483975833_n 1.png";
import img5 from "../../assets/Notes/unnamed 1.png";
import img6 from "../../assets/Notes/106046609_10158285942070907_7859076810884144613_n 1.png";
import StarRatings from "react-star-ratings";
import arrow from "../../assets/Logo/Arrow 1.png";
import arrow3 from "../../assets/Logo/Arrow 3.svg";
import arrow11 from "../../assets/Logo/Arrow 11.svg";
import edit from "../../assets/Logo/notesss.svg";
import star1 from "../../assets/star/star.svg";
import star11 from "../../assets/star/1.2.png";
import star2 from "../../assets/star/2.png";
import star3 from "../../assets/star/Group 85.png";
import star4 from "../../assets/star/Group 54.png";
import star5 from "../../assets/star/Group 84.png";
import star6 from "../../assets/star/Group 87.png";
import star56 from "../../assets/star/Group 56.png";
import groupStar from "../../assets/header_icons/Group 85.png";
import group88 from "../../assets/header_icons/Group 88.png";
export default function Notices() {
  return (
    <div>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[45px]">
        {/* single notes 1*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex  gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img1} alt="category1" />
            <div className=" pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066] relative top-1">
                DARTY
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[13px]">
                Entreprise de vente au détail
              </p>
              <div className="ratting relative top-[3px]">
                <div className="flex gap-[7px]  items-center py-[20px] color_box1">
                  <div className="flex gap-[2px] items-center h-[20px]">
                    <img src={groupStar} alt="" />
                  </div>
                  <div className="round"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#43A047]">
                    EXCELLENT
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.3/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[9px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">250</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[21px] relative top-[1px]">
            <button className="  flex justify-center items-center rounded-full gap-[15px]">
              <li className="text-[15px] text-[#000066] font-semibold relative left-[4px]">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px] ">
                <svg
                  className=" relative top-[-1px] left-[-1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1 7.22222V1.88889C1 1.39797 1.39797 1 1.88889 1H12.5556C13.0465 1 13.4444 1.39797 13.4444 1.88889V12.5556C13.4444 13.0465 13.0465 13.4444 12.5556 13.4444H7.22222M3.76543 7.22222H7.22222M7.22222 7.22222V10.679M7.22222 7.22222L1 13.4444"
                    stroke="#000066"
                    stroke-width="1.408"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li className="2xl:text-[15px] text-[15px] font-semibold text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 1*/}
        {/* single notes 2*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex  gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img2} alt="category1" />
            <div className=" pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066] relative top-1">
                Ennakl Automobiles
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[13px]">
                Concessionnaire de Voitures
              </p>
              <div className="ratting relative top-[3px]">
                <div className="flex gap-[7px]  items-center py-[20px] color_box1">
                  <div className="flex gap-[2px] items-center h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="108"
                      height="20"
                      viewBox="0 0 108 20"
                      fill="none"
                    >
                      <rect width="20" height="20" rx="5" fill="#FFF8BF" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.39912 4.3985C9.61982 3.86717 10.3701 3.86717 10.5908 4.3985L11.7532 7.19742C11.847 7.42328 12.067 7.57041 12.3109 7.57041H15.3678C15.9299 7.57041 16.2114 8.25219 15.8139 8.65092L13.3415 11.1313C13.1864 11.287 13.1276 11.5148 13.1878 11.7264L14.1683 15.1692C14.3339 15.7506 13.6878 16.2238 13.1863 15.8884L10.3301 13.978C10.1271 13.8423 9.86275 13.8423 9.65982 13.9781L6.80832 15.8852C6.30529 16.2216 5.65705 15.7469 5.82314 15.1638L6.80207 11.7264C6.86234 11.5148 6.8035 11.287 6.64836 11.1313L4.18816 8.66318C3.78621 8.25992 4.07089 7.57041 4.63934 7.57041H7.679C7.9229 7.57041 8.14288 7.42328 8.23668 7.19742L9.39912 4.3985Z"
                        fill="#FCD700"
                      />
                      <rect
                        x="22"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#FFF8BF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M31.3991 4.3985C31.6198 3.86717 32.3701 3.86717 32.5908 4.3985L33.7532 7.19742C33.847 7.42328 34.067 7.57041 34.3109 7.57041H37.3678C37.9299 7.57041 38.2114 8.25219 37.8139 8.65092L35.3415 11.1313C35.1864 11.287 35.1276 11.5148 35.1878 11.7264L36.1683 15.1692C36.3339 15.7506 35.6878 16.2238 35.1863 15.8884L32.3301 13.978C32.1271 13.8423 31.8628 13.8423 31.6598 13.9781L28.8083 15.8852C28.3053 16.2216 27.6571 15.7469 27.8231 15.1638L28.8021 11.7264C28.8623 11.5148 28.8035 11.287 28.6484 11.1313L26.1882 8.66318C25.7862 8.25992 26.0709 7.57041 26.6393 7.57041H29.679C29.9229 7.57041 30.1429 7.42328 30.2367 7.19742L31.3991 4.3985Z"
                        fill="#FCD700"
                      />
                      <rect
                        x="44"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#FFF8BF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.3991 4.3985C53.6198 3.86717 54.3701 3.86717 54.5908 4.3985L55.7532 7.19742C55.847 7.42328 56.067 7.57041 56.3109 7.57041H59.3678C59.9299 7.57041 60.2114 8.25219 59.8139 8.65092L57.3415 11.1313C57.1864 11.287 57.1276 11.5148 57.1878 11.7264L58.1683 15.1692C58.3339 15.7506 57.6878 16.2238 57.1863 15.8884L54.3301 13.978C54.1271 13.8423 53.8628 13.8423 53.6598 13.9781L50.8083 15.8852C50.3053 16.2216 49.6571 15.7469 49.8231 15.1638L50.8021 11.7264C50.8623 11.5148 50.8035 11.287 50.6484 11.1313L48.1882 8.66318C47.7862 8.25992 48.0709 7.57041 48.6393 7.57041H51.679C51.9229 7.57041 52.1429 7.42328 52.2367 7.19742L53.3991 4.3985Z"
                        fill="#FCD700"
                      />
                      <rect
                        x="66"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M75.3991 4.3985C75.6198 3.86717 76.3701 3.86717 76.5908 4.3985L77.7532 7.19742C77.847 7.42328 78.067 7.57041 78.3109 7.57041H81.3678C81.9299 7.57041 82.2114 8.25219 81.8139 8.65092L79.3415 11.1313C79.1864 11.287 79.1276 11.5148 79.1878 11.7264L80.1683 15.1692C80.3339 15.7506 79.6878 16.2238 79.1863 15.8884L76.3301 13.978C76.1271 13.8423 75.8628 13.8423 75.6598 13.9781L72.8083 15.8852C72.3053 16.2216 71.6571 15.7469 71.8231 15.1638L72.8021 11.7264C72.8623 11.5148 72.8035 11.287 72.6484 11.1313L70.1882 8.66318C69.7862 8.25992 70.0709 7.57041 70.6393 7.57041H73.679C73.9229 7.57041 74.1429 7.42328 74.2367 7.19742L75.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                      <rect
                        x="88"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M97.3991 4.3985C97.6198 3.86717 98.3701 3.86717 98.5908 4.3985L99.7532 7.19742C99.847 7.42328 100.067 7.57041 100.311 7.57041H103.368C103.93 7.57041 104.211 8.25219 103.814 8.65092L101.342 11.1313C101.186 11.287 101.128 11.5148 101.188 11.7264L102.168 15.1692C102.334 15.7506 101.688 16.2238 101.186 15.8884L98.3301 13.978C98.1271 13.8423 97.8628 13.8423 97.6598 13.9781L94.8083 15.8852C94.3053 16.2216 93.6571 15.7469 93.8231 15.1638L94.8021 11.7264C94.8623 11.5148 94.8035 11.287 94.6484 11.1313L92.1882 8.66318C91.7862 8.25992 92.0709 7.57041 92.6393 7.57041H95.679C95.9229 7.57041 96.1429 7.42328 96.2367 7.19742L97.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </div>
                  <div className="round1"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#FCD700]">
                    MOYEN
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">2.5/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[9px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[21px] relative top-[1px]">
            <button className="  flex justify-center items-center rounded-full gap-[15px]">
              <li className="text-[15px] text-[#000066] font-semibold relative left-[4px]">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px] ">
                <svg
                  className=" relative top-[-1px] left-[-1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1 7.22222V1.88889C1 1.39797 1.39797 1 1.88889 1H12.5556C13.0465 1 13.4444 1.39797 13.4444 1.88889V12.5556C13.4444 13.0465 13.0465 13.4444 12.5556 13.4444H7.22222M3.76543 7.22222H7.22222M7.22222 7.22222V10.679M7.22222 7.22222L1 13.4444"
                    stroke="#000066"
                    stroke-width="1.408"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li className="2xl:text-[15px] text-[15px] font-semibold text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 2*/}
        {/* single notes 3*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex  gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img3} alt="category1" />
            <div className=" pt-[11px]">
              <h2 className=" font-bold 2xl:text-[15px] text-[#000066] relative top-[3px]">
                La Cigale Tabarka Hôtel-Thalasso & Spa - Golf
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[20px]">
                Hôtels et Maisons d'Hôte
              </p>
              <div className="ratting relative top-[3px]">
                <div className="flex gap-[7px]  items-center py-[20px] color_box1">
                  <div className="flex gap-[2px] items-center h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="109"
                      height="21"
                      viewBox="0 0 109 21"
                      fill="none"
                    >
                      <rect
                        x="0.396484"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F7CAFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.79561 4.60162C10.0163 4.07029 10.7666 4.07029 10.9873 4.60162L12.1497 7.40054C12.2435 7.62641 12.4635 7.77353 12.7074 7.77353H15.7643C16.3264 7.77353 16.6079 8.45531 16.2104 8.85405L13.738 11.3345C13.5829 11.4901 13.5241 11.7179 13.5843 11.9296L14.5648 15.3724C14.7303 15.9537 14.0842 16.4269 13.5828 16.0915L10.7266 14.1812C10.5236 14.0455 10.2592 14.0454 10.0563 14.1812L7.2048 16.0884C6.70178 16.4248 6.05354 15.9501 6.21963 15.3669L7.19855 11.9296C7.25883 11.7179 7.19999 11.4901 7.04485 11.3345L4.58465 8.8663C4.18269 8.46304 4.46737 7.77353 5.03583 7.77353H8.07549C8.31939 7.77353 8.53936 7.62641 8.63317 7.40054L9.79561 4.60162Z"
                        fill="url(#paint0_linear_2_4399)"
                      />
                      <rect
                        x="22.3965"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#FEF4E1"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M31.7956 4.60162C32.0163 4.07029 32.7666 4.07029 32.9873 4.60162L34.1497 7.40054C34.2435 7.62641 34.4635 7.77353 34.7074 7.77353H37.7643C38.3264 7.77353 38.6079 8.45531 38.2104 8.85405L35.738 11.3345C35.5829 11.4901 35.5241 11.7179 35.5843 11.9296L36.5648 15.3724C36.7303 15.9537 36.0842 16.4269 35.5828 16.0915L32.7266 14.1812C32.5236 14.0455 32.2592 14.0454 32.0563 14.1812L29.2048 16.0884C28.7018 16.4248 28.0535 15.9501 28.2196 15.3669L29.1986 11.9296C29.2588 11.7179 29.2 11.4901 29.0448 11.3345L26.5846 8.8663C26.1827 8.46304 26.4674 7.77353 27.0358 7.77353H30.0755C30.3194 7.77353 30.5394 7.62641 30.6332 7.40054L31.7956 4.60162Z"
                        fill="url(#paint1_linear_2_4399)"
                      />
                      <rect
                        x="22.3965"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F7CAFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M31.7956 4.60162C32.0163 4.07029 32.7666 4.07029 32.9873 4.60162L34.1497 7.40054C34.2435 7.62641 34.4635 7.77353 34.7074 7.77353H37.7643C38.3264 7.77353 38.6079 8.45531 38.2104 8.85405L35.738 11.3345C35.5829 11.4901 35.5241 11.7179 35.5843 11.9296L36.5648 15.3724C36.7303 15.9537 36.0842 16.4269 35.5828 16.0915L32.7266 14.1812C32.5236 14.0455 32.2592 14.0454 32.0563 14.1812L29.2048 16.0884C28.7018 16.4248 28.0535 15.9501 28.2196 15.3669L29.1986 11.9296C29.2588 11.7179 29.2 11.4901 29.0448 11.3345L26.5846 8.8663C26.1827 8.46304 26.4674 7.77353 27.0358 7.77353H30.0755C30.3194 7.77353 30.5394 7.62641 30.6332 7.40054L31.7956 4.60162Z"
                        fill="url(#paint2_linear_2_4399)"
                      />
                      <rect
                        x="44.3965"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.7956 4.60162C54.0163 4.07029 54.7666 4.07029 54.9873 4.60162L56.1497 7.40054C56.2435 7.62641 56.4635 7.77353 56.7074 7.77353H59.7643C60.3264 7.77353 60.6079 8.45531 60.2104 8.85405L57.738 11.3345C57.5829 11.4901 57.5241 11.7179 57.5843 11.9296L58.5648 15.3724C58.7303 15.9537 58.0842 16.4269 57.5828 16.0915L54.7266 14.1812C54.5236 14.0455 54.2592 14.0454 54.0563 14.1812L51.2048 16.0884C50.7018 16.4248 50.0535 15.9501 50.2196 15.3669L51.1986 11.9296C51.2588 11.7179 51.2 11.4901 51.0448 11.3345L48.5846 8.8663C48.1827 8.46304 48.4674 7.77353 49.0358 7.77353H52.0755C52.3194 7.77353 52.5394 7.62641 52.6332 7.40054L53.7956 4.60162Z"
                        fill="#DCDCDC"
                      />
                      <rect
                        x="44.3965"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F7CAFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.7956 4.60162C54.0163 4.07029 54.7666 4.07029 54.9873 4.60162L56.1497 7.40054C56.2435 7.62641 56.4635 7.77353 56.7074 7.77353H59.7643C60.3264 7.77353 60.6079 8.45531 60.2104 8.85405L57.738 11.3345C57.5829 11.4901 57.5241 11.7179 57.5843 11.9296L58.5648 15.3724C58.7303 15.9537 58.0842 16.4269 57.5828 16.0915L54.7266 14.1812C54.5236 14.0455 54.2592 14.0454 54.0563 14.1812L51.2048 16.0884C50.7018 16.4248 50.0535 15.9501 50.2196 15.3669L51.1986 11.9296C51.2588 11.7179 51.2 11.4901 51.0448 11.3345L48.5846 8.8663C48.1827 8.46304 48.4674 7.77353 49.0358 7.77353H52.0755C52.3194 7.77353 52.5394 7.62641 52.6332 7.40054L53.7956 4.60162Z"
                        fill="url(#paint3_linear_2_4399)"
                      />
                      <rect
                        x="66.3965"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M75.7956 4.60162C76.0163 4.07029 76.7666 4.07029 76.9873 4.60162L78.1497 7.40054C78.2435 7.62641 78.4635 7.77353 78.7074 7.77353H81.7643C82.3264 7.77353 82.6079 8.45531 82.2104 8.85405L79.738 11.3345C79.5829 11.4901 79.5241 11.7179 79.5843 11.9296L80.5648 15.3724C80.7303 15.9537 80.0842 16.4269 79.5828 16.0915L76.7266 14.1812C76.5236 14.0455 76.2592 14.0454 76.0563 14.1812L73.2048 16.0884C72.7018 16.4248 72.0535 15.9501 72.2196 15.3669L73.1986 11.9296C73.2588 11.7179 73.2 11.4901 73.0448 11.3345L70.5846 8.8663C70.1827 8.46304 70.4674 7.77353 71.0358 7.77353H74.0755C74.3194 7.77353 74.5394 7.62641 74.6332 7.40054L75.7956 4.60162Z"
                        fill="#DCDCDC"
                      />
                      <rect
                        x="66.3965"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F7CAFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M75.7956 4.60162C76.0163 4.07029 76.7666 4.07029 76.9873 4.60162L78.1497 7.40054C78.2435 7.62641 78.4635 7.77353 78.7074 7.77353H81.7643C82.3264 7.77353 82.6079 8.45531 82.2104 8.85405L79.738 11.3345C79.5829 11.4901 79.5241 11.7179 79.5843 11.9296L80.5648 15.3724C80.7303 15.9537 80.0842 16.4269 79.5828 16.0915L76.7266 14.1812C76.5236 14.0455 76.2592 14.0454 76.0563 14.1812L73.2048 16.0884C72.7018 16.4248 72.0535 15.9501 72.2196 15.3669L73.1986 11.9296C73.2588 11.7179 73.2 11.4901 73.0448 11.3345L70.5846 8.8663C70.1827 8.46304 70.4674 7.77353 71.0358 7.77353H74.0755C74.3194 7.77353 74.5394 7.62641 74.6332 7.40054L75.7956 4.60162Z"
                        fill="url(#paint4_linear_2_4399)"
                      />
                      <rect
                        x="88.3965"
                        y="0.203125"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M97.7956 4.60162C98.0163 4.07029 98.7666 4.07029 98.9873 4.60162L100.15 7.40054C100.243 7.62641 100.463 7.77353 100.707 7.77353H103.764C104.326 7.77353 104.608 8.45531 104.21 8.85405L101.738 11.3345C101.583 11.4901 101.524 11.7179 101.584 11.9296L102.565 15.3724C102.73 15.9537 102.084 16.4269 101.583 16.0915L98.7266 14.1812C98.5236 14.0455 98.2592 14.0454 98.0563 14.1812L95.2048 16.0884C94.7018 16.4248 94.0535 15.9501 94.2196 15.3669L95.1986 11.9296C95.2588 11.7179 95.2 11.4901 95.0448 11.3345L92.5846 8.8663C92.1827 8.46304 92.4674 7.77353 93.0358 7.77353H96.0755C96.3194 7.77353 96.5394 7.62641 96.6332 7.40054L97.7956 4.60162Z"
                        fill="#DCDCDC"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2_4399"
                          x1="4.39648"
                          y1="4.20312"
                          x2="16.3965"
                          y2="16.2031"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7B1FA2" />
                          <stop offset="0.505208" stop-color="#9C27B0" />
                          <stop offset="1" stop-color="#562A5E" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_2_4399"
                          x1="26.3965"
                          y1="4.20312"
                          x2="38.3965"
                          y2="16.2031"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF7A00" />
                          <stop offset="0.505208" stop-color="#FF9900" />
                          <stop offset="1" stop-color="#DB8300" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_2_4399"
                          x1="26.3965"
                          y1="4.20312"
                          x2="38.3965"
                          y2="16.2031"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7B1FA2" />
                          <stop offset="0.505208" stop-color="#9C27B0" />
                          <stop offset="1" stop-color="#562A5E" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_2_4399"
                          x1="48.3965"
                          y1="4.20312"
                          x2="60.3965"
                          y2="16.2031"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7B1FA2" />
                          <stop offset="0.505208" stop-color="#9C27B0" />
                          <stop offset="1" stop-color="#562A5E" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_2_4399"
                          x1="70.3965"
                          y1="4.20312"
                          x2="82.3965"
                          y2="16.2031"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7B1FA2" />
                          <stop offset="0.505208" stop-color="#9C27B0" />
                          <stop offset="1" stop-color="#562A5E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="round2"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#7B1FA2]">
                    BON
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.0/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[9px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[21px] relative top-[1px]">
            <button className="  flex justify-center items-center rounded-full gap-[15px]">
              <li className="text-[15px] text-[#000066] font-semibold relative left-[4px]">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px] ">
                <svg
                  className=" relative top-[-1px] left-[-1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1 7.22222V1.88889C1 1.39797 1.39797 1 1.88889 1H12.5556C13.0465 1 13.4444 1.39797 13.4444 1.88889V12.5556C13.4444 13.0465 13.0465 13.4444 12.5556 13.4444H7.22222M3.76543 7.22222H7.22222M7.22222 7.22222V10.679M7.22222 7.22222L1 13.4444"
                    stroke="#000066"
                    stroke-width="1.408"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li className="2xl:text-[15px] text-[15px] font-semibold text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 3*/}
        {/* single notes 4*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex  gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img4} alt="category1" />
            <div className=" pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066] relative top-1">
                GlobalNet
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[13px]">
                IT et Communication
              </p>
              <div className="ratting relative top-[3px]">
                <div className="flex gap-[7px]  items-center py-[20px] color_box1">
                  <div className="flex gap-[2px] items-center h-[20px]">
                    <img src={group88} alt="" />
                  </div>
                  <div className="round3"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#FF7A00]">
                    DÉCEVANT
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">1.8/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[9px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">10</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[21px] relative top-[1px]">
            <button className="  flex justify-center items-center rounded-full gap-[15px]">
              <li className="text-[15px] text-[#000066] font-semibold relative left-[4px]">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px] ">
                <svg
                  className=" relative top-[-1px] left-[-1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1 7.22222V1.88889C1 1.39797 1.39797 1 1.88889 1H12.5556C13.0465 1 13.4444 1.39797 13.4444 1.88889V12.5556C13.4444 13.0465 13.0465 13.4444 12.5556 13.4444H7.22222M3.76543 7.22222H7.22222M7.22222 7.22222V10.679M7.22222 7.22222L1 13.4444"
                    stroke="#000066"
                    stroke-width="1.408"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li className="2xl:text-[15px] text-[15px] font-semibold text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 4*/}
        {/* single notes 5*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex  gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img5} alt="category1" />
            <div className=" pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066] relative top-1">
                Bolt
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[13px]">
                Services de Taxi et VTC
              </p>
              <div className="ratting relative top-[3px]">
                <div className="flex gap-[7px]  items-center py-[20px] color_box1">
                  <div className="flex gap-[2px] items-center h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="108"
                      height="20"
                      viewBox="0 0 108 20"
                      fill="none"
                    >
                      <rect width="20" height="20" rx="5" fill="#FEE1E1" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.39912 4.3985C9.61982 3.86717 10.3701 3.86717 10.5908 4.3985L11.7532 7.19742C11.847 7.42328 12.067 7.57041 12.3109 7.57041H15.3678C15.9299 7.57041 16.2114 8.25219 15.8139 8.65092L13.3415 11.1313C13.1864 11.287 13.1276 11.5148 13.1878 11.7264L14.1683 15.1692C14.3339 15.7506 13.6878 16.2238 13.1863 15.8884L10.3301 13.978C10.1271 13.8423 9.86275 13.8423 9.65982 13.9781L6.80832 15.8852C6.30529 16.2216 5.65705 15.7469 5.82314 15.1638L6.80207 11.7264C6.86234 11.5148 6.8035 11.287 6.64836 11.1313L4.18816 8.66318C3.78621 8.25992 4.07089 7.57041 4.63934 7.57041H7.679C7.9229 7.57041 8.14288 7.42328 8.23668 7.19742L9.39912 4.3985Z"
                        fill="#EA0000"
                      />
                      <rect
                        x="22"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M31.3991 4.3985C31.6198 3.86717 32.3701 3.86717 32.5908 4.3985L33.7532 7.19742C33.847 7.42328 34.067 7.57041 34.3109 7.57041H37.3678C37.9299 7.57041 38.2114 8.25219 37.8139 8.65092L35.3415 11.1313C35.1864 11.287 35.1276 11.5148 35.1878 11.7264L36.1683 15.1692C36.3339 15.7506 35.6878 16.2238 35.1863 15.8884L32.3301 13.978C32.1271 13.8423 31.8628 13.8423 31.6598 13.9781L28.8083 15.8852C28.3053 16.2216 27.6571 15.7469 27.8231 15.1638L28.8021 11.7264C28.8623 11.5148 28.8035 11.287 28.6484 11.1313L26.1882 8.66318C25.7862 8.25992 26.0709 7.57041 26.6393 7.57041H29.679C29.9229 7.57041 30.1429 7.42328 30.2367 7.19742L31.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                      <rect
                        x="44"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.3991 4.3985C53.6198 3.86717 54.3701 3.86717 54.5908 4.3985L55.7532 7.19742C55.847 7.42328 56.067 7.57041 56.3109 7.57041H59.3678C59.9299 7.57041 60.2114 8.25219 59.8139 8.65092L57.3415 11.1313C57.1864 11.287 57.1276 11.5148 57.1878 11.7264L58.1683 15.1692C58.3339 15.7506 57.6878 16.2238 57.1863 15.8884L54.3301 13.978C54.1271 13.8423 53.8628 13.8423 53.6598 13.9781L50.8083 15.8852C50.3053 16.2216 49.6571 15.7469 49.8231 15.1638L50.8021 11.7264C50.8623 11.5148 50.8035 11.287 50.6484 11.1313L48.1882 8.66318C47.7862 8.25992 48.0709 7.57041 48.6393 7.57041H51.679C51.9229 7.57041 52.1429 7.42328 52.2367 7.19742L53.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                      <rect
                        x="66"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M75.3991 4.3985C75.6198 3.86717 76.3701 3.86717 76.5908 4.3985L77.7532 7.19742C77.847 7.42328 78.067 7.57041 78.3109 7.57041H81.3678C81.9299 7.57041 82.2114 8.25219 81.8139 8.65092L79.3415 11.1313C79.1864 11.287 79.1276 11.5148 79.1878 11.7264L80.1683 15.1692C80.3339 15.7506 79.6878 16.2238 79.1863 15.8884L76.3301 13.978C76.1271 13.8423 75.8628 13.8423 75.6598 13.9781L72.8083 15.8852C72.3053 16.2216 71.6571 15.7469 71.8231 15.1638L72.8021 11.7264C72.8623 11.5148 72.8035 11.287 72.6484 11.1313L70.1882 8.66318C69.7862 8.25992 70.0709 7.57041 70.6393 7.57041H73.679C73.9229 7.57041 74.1429 7.42328 74.2367 7.19742L75.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                      <rect
                        x="88"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M97.3991 4.3985C97.6198 3.86717 98.3701 3.86717 98.5908 4.3985L99.7532 7.19742C99.847 7.42328 100.067 7.57041 100.311 7.57041H103.368C103.93 7.57041 104.211 8.25219 103.814 8.65092L101.342 11.1313C101.186 11.287 101.128 11.5148 101.188 11.7264L102.168 15.1692C102.334 15.7506 101.688 16.2238 101.186 15.8884L98.3301 13.978C98.1271 13.8423 97.8628 13.8423 97.6598 13.9781L94.8083 15.8852C94.3053 16.2216 93.6571 15.7469 93.8231 15.1638L94.8021 11.7264C94.8623 11.5148 94.8035 11.287 94.6484 11.1313L92.1882 8.66318C91.7862 8.25992 92.0709 7.57041 92.6393 7.57041H95.679C95.9229 7.57041 96.1429 7.42328 96.2367 7.19742L97.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </div>
                  <div className="round4"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#EA0000]">
                    MÉDIOCRE
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">1.0/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[9px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">650</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[21px] relative top-[1px]">
            <button className="  flex justify-center items-center rounded-full gap-[15px]">
              <li className="text-[15px] text-[#000066] font-semibold relative left-[4px]">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px] ">
                <svg
                  className=" relative top-[-1px] left-[-1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1 7.22222V1.88889C1 1.39797 1.39797 1 1.88889 1H12.5556C13.0465 1 13.4444 1.39797 13.4444 1.88889V12.5556C13.4444 13.0465 13.0465 13.4444 12.5556 13.4444H7.22222M3.76543 7.22222H7.22222M7.22222 7.22222V10.679M7.22222 7.22222L1 13.4444"
                    stroke="#000066"
                    stroke-width="1.408"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li className="2xl:text-[15px] text-[15px] font-semibold text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 5*/}
        {/* single notes 6*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex  gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img6} alt="category1" />
            <div className=" pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066] relative top-1">
                Zara
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[13px]">
                Magasin de Vêtements
              </p>
              <div className="ratting relative top-[3px]">
                <div className="flex gap-[7px]  items-center py-[20px] color_box1">
                  <div className="flex gap-[2px] items-center h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="108"
                      height="20"
                      viewBox="0 0 108 20"
                      fill="none"
                    >
                      <rect width="20" height="20" rx="5" fill="#FFF8BF" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.39912 4.3985C9.61982 3.86717 10.3701 3.86717 10.5908 4.3985L11.7532 7.19742C11.847 7.42328 12.067 7.57041 12.3109 7.57041H15.3678C15.9299 7.57041 16.2114 8.25219 15.8139 8.65092L13.3415 11.1313C13.1864 11.287 13.1276 11.5148 13.1878 11.7264L14.1683 15.1692C14.3339 15.7506 13.6878 16.2238 13.1863 15.8884L10.3301 13.978C10.1271 13.8423 9.86275 13.8423 9.65982 13.9781L6.80832 15.8852C6.30529 16.2216 5.65705 15.7469 5.82314 15.1638L6.80207 11.7264C6.86234 11.5148 6.8035 11.287 6.64836 11.1313L4.18816 8.66318C3.78621 8.25992 4.07089 7.57041 4.63934 7.57041H7.679C7.9229 7.57041 8.14288 7.42328 8.23668 7.19742L9.39912 4.3985Z"
                        fill="#FCD700"
                      />
                      <rect
                        x="22"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#FFF8BF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M31.3991 4.3985C31.6198 3.86717 32.3701 3.86717 32.5908 4.3985L33.7532 7.19742C33.847 7.42328 34.067 7.57041 34.3109 7.57041H37.3678C37.9299 7.57041 38.2114 8.25219 37.8139 8.65092L35.3415 11.1313C35.1864 11.287 35.1276 11.5148 35.1878 11.7264L36.1683 15.1692C36.3339 15.7506 35.6878 16.2238 35.1863 15.8884L32.3301 13.978C32.1271 13.8423 31.8628 13.8423 31.6598 13.9781L28.8083 15.8852C28.3053 16.2216 27.6571 15.7469 27.8231 15.1638L28.8021 11.7264C28.8623 11.5148 28.8035 11.287 28.6484 11.1313L26.1882 8.66318C25.7862 8.25992 26.0709 7.57041 26.6393 7.57041H29.679C29.9229 7.57041 30.1429 7.42328 30.2367 7.19742L31.3991 4.3985Z"
                        fill="#FCD700"
                      />
                      <rect
                        x="44"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#FFF8BF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.3991 4.3985C53.6198 3.86717 54.3701 3.86717 54.5908 4.3985L55.7532 7.19742C55.847 7.42328 56.067 7.57041 56.3109 7.57041H59.3678C59.9299 7.57041 60.2114 8.25219 59.8139 8.65092L57.3415 11.1313C57.1864 11.287 57.1276 11.5148 57.1878 11.7264L58.1683 15.1692C58.3339 15.7506 57.6878 16.2238 57.1863 15.8884L54.3301 13.978C54.1271 13.8423 53.8628 13.8423 53.6598 13.9781L50.8083 15.8852C50.3053 16.2216 49.6571 15.7469 49.8231 15.1638L50.8021 11.7264C50.8623 11.5148 50.8035 11.287 50.6484 11.1313L48.1882 8.66318C47.7862 8.25992 48.0709 7.57041 48.6393 7.57041H51.679C51.9229 7.57041 52.1429 7.42328 52.2367 7.19742L53.3991 4.3985Z"
                        fill="#FCD700"
                      />
                      <rect
                        x="66"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M75.3991 4.3985C75.6198 3.86717 76.3701 3.86717 76.5908 4.3985L77.7532 7.19742C77.847 7.42328 78.067 7.57041 78.3109 7.57041H81.3678C81.9299 7.57041 82.2114 8.25219 81.8139 8.65092L79.3415 11.1313C79.1864 11.287 79.1276 11.5148 79.1878 11.7264L80.1683 15.1692C80.3339 15.7506 79.6878 16.2238 79.1863 15.8884L76.3301 13.978C76.1271 13.8423 75.8628 13.8423 75.6598 13.9781L72.8083 15.8852C72.3053 16.2216 71.6571 15.7469 71.8231 15.1638L72.8021 11.7264C72.8623 11.5148 72.8035 11.287 72.6484 11.1313L70.1882 8.66318C69.7862 8.25992 70.0709 7.57041 70.6393 7.57041H73.679C73.9229 7.57041 74.1429 7.42328 74.2367 7.19742L75.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                      <rect
                        x="88"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#F2F2F2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M97.3991 4.3985C97.6198 3.86717 98.3701 3.86717 98.5908 4.3985L99.7532 7.19742C99.847 7.42328 100.067 7.57041 100.311 7.57041H103.368C103.93 7.57041 104.211 8.25219 103.814 8.65092L101.342 11.1313C101.186 11.287 101.128 11.5148 101.188 11.7264L102.168 15.1692C102.334 15.7506 101.688 16.2238 101.186 15.8884L98.3301 13.978C98.1271 13.8423 97.8628 13.8423 97.6598 13.9781L94.8083 15.8852C94.3053 16.2216 93.6571 15.7469 93.8231 15.1638L94.8021 11.7264C94.8623 11.5148 94.8035 11.287 94.6484 11.1313L92.1882 8.66318C91.7862 8.25992 92.0709 7.57041 92.6393 7.57041H95.679C95.9229 7.57041 96.1429 7.42328 96.2367 7.19742L97.3991 4.3985Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </div>
                  <div className="round5"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#FCD700]">
                    MOYEN
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">2.3/4</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[9px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[21px] relative top-[1px]">
            <button className="  flex justify-center items-center rounded-full gap-[15px]">
              <li className="text-[15px] text-[#000066] font-semibold relative left-[4px]">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px] ">
                <svg
                  className=" relative top-[-1px] left-[-1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1 7.22222V1.88889C1 1.39797 1.39797 1 1.88889 1H12.5556C13.0465 1 13.4444 1.39797 13.4444 1.88889V12.5556C13.4444 13.0465 13.0465 13.4444 12.5556 13.4444H7.22222M3.76543 7.22222H7.22222M7.22222 7.22222V10.679M7.22222 7.22222L1 13.4444"
                    stroke="#000066"
                    stroke-width="1.408"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li className="2xl:text-[15px] text-[15px] font-semibold text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 6*/}
      </div>
      <div className=" flex justify-between items-center cursor-pointer pt-[60px] pb-[60px]">
        <p className="  flex items-center tracking-[-0.010em]  text-[#006] font-semibold text-[15px] gap-[10px]">
          Trouver d'autres entreprises recommandées{" "}
          <div className="w-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
            >
              <path
                d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM1 4.5L19 4.5V3.5L1 3.5L1 4.5Z"
                fill="#000066"
              />
            </svg>
          </div>
        </p>
        <div className="flex items-center gap-[10px]">
          <div className="w-[40px] h-[40px] border-[1px] border-[#000066] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="19.5" />
              <path
                d="M29 20.5C29.2761 20.5 29.5 20.2761 29.5 20C29.5 19.7239 29.2761 19.5 29 19.5V20.5ZM10.6464 19.6464C10.4512 19.8417 10.4512 20.1583 10.6464 20.3536L13.8284 23.5355C14.0237 23.7308 14.3403 23.7308 14.5355 23.5355C14.7308 23.3403 14.7308 23.0237 14.5355 22.8284L11.7071 20L14.5355 17.1716C14.7308 16.9763 14.7308 16.6597 14.5355 16.4645C14.3403 16.2692 14.0237 16.2692 13.8284 16.4645L10.6464 19.6464ZM29 19.5L11 19.5V20.5L29 20.5V19.5Z"
                fill="#000066"
              />
            </svg>
          </div>
          <div className="w-[40px] h-[40px] border-[1px] border-[#000066] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              fill="none"
              className=" rotate-180"
            >
              <circle cx="20" cy="20" r="19.5" />
              <path
                d="M29 20.5C29.2761 20.5 29.5 20.2761 29.5 20C29.5 19.7239 29.2761 19.5 29 19.5V20.5ZM10.6464 19.6464C10.4512 19.8417 10.4512 20.1583 10.6464 20.3536L13.8284 23.5355C14.0237 23.7308 14.3403 23.7308 14.5355 23.5355C14.7308 23.3403 14.7308 23.0237 14.5355 22.8284L11.7071 20L14.5355 17.1716C14.7308 16.9763 14.7308 16.6597 14.5355 16.4645C14.3403 16.2692 14.0237 16.2692 13.8284 16.4645L10.6464 19.6464ZM29 19.5L11 19.5V20.5L29 20.5V19.5Z"
                fill="#000066"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
