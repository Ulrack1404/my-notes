import React from "react";
import searchImg from "../img/search.svg";

const Header = () => {
    return (
        <div className="h-[4.5rem] border flex items-center">
            <div className="flex m-4">
                <div className="left_part_header flex items-center ml-[20px]">
                    <div className="burger">
                        <div className="bg-gray-500 h-[3px] w-[22px] m-[3px]"></div>
                        <div className="bg-gray-500 h-[3px] w-[22px] m-[3px]"></div>
                        <div className="bg-gray-500 h-[3px] w-[22px] m-[3px]"></div>
                    </div>
                    <div>
                        <img
                            className="h-[50px]"
                            src={require("../img/google_keep_logo.png")}
                            alt=""
                        />
                    </div>
                    <div className="text-[24px]  text-[#100f0f]">Keep</div>
                </div>
            </div>
            <div className="search_header relative ml-[100px]">
                <div className="absolute top-[15px] left-[10px]">
                    <img src={searchImg} alt="" className="h-[25px]" />
                </div>
                <input
                    type="text"
                    className="bg-gray-100 h-[50px] rounded-[10px] w-[400px] pl-[50px] focus:bg-white focus:shadow focus:outline-none"
                    placeholder="Поиск"
                />
            </div>
            <div className="right_part_header"></div>
        </div>
    );
};

export default Header;
