import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import arrow from "../../assets/Logo/Arrow 2.svg";
import CategoryItems from "./CategoryItems";
import { Arrows } from "../../svg/Arrows/Arrows";
export default function CategorySection() {
  return (
    <div className="bg-[#F7FAFC]">
      <div className="nav_container 2xl:w-[1542px] h-[535px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div>
          <div className="category_heading mt-[67px] relative left-[-2px]">
            <div className="lg:flex justify-between items-center pb-[18px] relative">
              <h2 className="text-[32px] text-[#003] font-semibold ">
                Explorez par Catégorie
              </h2>
              <div className="flex items-center gap-[9px] absolute right-[-3px]">
                <li className="font-bold 2xl:text-[16px] xl:text-[16px] lg:text-[20px] text-[#006] relative top-[-1px] tracking-[0.0001em]  cursor-pointer">
                  Voir Plus
                </li>
                <Arrows />
              </div>
            </div>
            <p className="text-[#4F637B] font-medium mt-[9px]  text-[16px] relative left-[1px]">
              Découvrez les entreprises et produits les mieux notés dans chaque
              catégorie et trouvez exactement ce que vous cherchez.
            </p>
          </div>
          {/* category single items */}
          <div className="mt-[63px] ">
            <CategoryItems />
          </div>
          {/* category single items */}
        </div>
      </div>
    </div>
  );
}
