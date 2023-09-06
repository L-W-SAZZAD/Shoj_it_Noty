import React from "react";
import category1 from "../../assets/Category/SVGRepo_iconCarrier.png";
import category2 from "../../assets/Category/SVGRepo_iconCarrier (1).png";
import category3 from "../../assets/Category/SVGRepo_iconCarrier (2).png";
import category4 from "../../assets/Category/SVGRepo_iconCarrier (4).png";
import category5 from "../../assets/Category/Group 98.png";
import category6 from "../../assets/Category/SVGRepo_iconCarrier (5).png";
import category7 from "../../assets/Category/SVGRepo_iconCarrier (3).png";
import category8 from "../../assets/Category/SVGRepo_iconCarrier (6).png";

export default function CategoryItems() {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-[45px] ">
      <div className=" relative  single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[26px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img className="w-[49px] h-[44px]  " src={category1} alt="category1" />
        <h3 className="absolute bottom-[29px] font-[600] text-[17px]">
          Hôtels et Maisons d’Hôte
        </h3>
      </div>
      {/* 2 */}
      <div className="relative single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[27px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img className="w-[49px] h-[43px] " src={category2} alt="category2" />
        <h3 className="absolute bottom-[29px] font-[600] tracking-normal 2xl:text-[17px] text-[17px] text-[#000] lg:text-[17px]">
          Restaurants
        </h3>
      </div>
      {/* 3 */}
      <div className="relative single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[27px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img
          className="2xl:w-[49px] 2xl:h-[42px] w-[49px] h-[41px]  "
          src={category3}
          alt="category3"
        />
        <h3 className="absolute bottom-[29px] font-[600] tracking-normal 2xl:text-[17px] text-[17px] text-[#000] lg:text-[17px]">
          Services de Location de Voitures
        </h3>
      </div>
      {/* 4 */}
      <div className="relative single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[27px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img
          className="2xl:w-[42px] 2xl:h-[42px] w-[42px] h-[42px] "
          src={category7}
          alt="category3"
        />
        <h3 className="absolute bottom-[29px] font-[600] tracking-normal 2xl:text-[17px] text-[17px] text-[#000] lg:text-[17px]">
          Boutique en Ligne
        </h3>
      </div>
      {/* 5 */}

      <div className="relative single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[27px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img
          className="2xl:w-[49px] object-fill 2xl:h-[44px] w-[48px] h-[43px] relative left-[-1px] top-[-1px] "
          src={category4}
          alt="category4"
        />
        <h3 className="absolute bottom-[29px] font-[600] tracking-normal 2xl:text-[17px] text-[17px] text-[#000] lg:text-[17px]">
          Banques et Services Financière
        </h3>
      </div>
      {/* 6 */}
      <div className="relative single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[27px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img
          className="2xl:w-[42px] 2xl:h-[42px] w-[42px] h-[41px] "
          src={category5}
          alt="category6"
        />
        <h3 className="absolute bottom-[29px] font-[600] tracking-normal 2xl:text-[17px] text-[17px] text-[#000] lg:text-[17px]">
          Bijouteries
        </h3>
      </div>
      {/* 7 */}
      <div className="relative single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[26px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img
          className="2xl:w-[43px] 2xl:h-[43px] w-[43px] h-[43px] "
          src={category6}
          alt="category7"
        />
        <h3 className="absolute bottom-[29px] font-[600] tracking-normal 2xl:text-[17px] text-[17px] text-[#000] lg:text-[17px]">
          Magasins de Meubles
        </h3>
      </div>
      {/* 8 */}
      <div className="relative single_items bg-[var(--category-box-color)] rounded-[13px] 2xl:w-[352px] 2xl:h-[139px] pl-[21px] 2xl:pt-[27px] 2xl:pb-0 pt-[26px] pb-[26px]">
        <img
          className="2xl:w-[42px] 2xl:h-[42px] w-[43px] h-[43px] "
          src={category8}
          alt="category3"
        />
        <h3 className="absolute bottom-[29px] font-[600] tracking-normal 2xl:text-[17px] text-[17px] text-[#000] lg:text-[17px]">
          Agences de Voyage
        </h3>
      </div>
    </div>
  );
}
