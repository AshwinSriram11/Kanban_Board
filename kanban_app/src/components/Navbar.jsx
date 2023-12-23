import tune from "../assets/tune_FILL0_wght400_GRAD0_opsz24.svg"
import darkIcon from "../assets/dark_mode_FILL0_wght400_GRAD0_opsz24.svg"
import expandLess from "../assets/expand_less_FILL0_wght400_GRAD0_opsz24.svg"
import expandMore from "../assets/expand_more_FILL0_wght400_GRAD0_opsz24.svg"
import { useState } from "react";

function Navbar() {
    const [drop,setDrop] = useState(false);
    return (  
        <section className="h-[8vh] bg-[#fff]">
            <nav className="w-[97%] mx-auto flex justify-between p-2">
                <div 
                    className="flex p-2 mt-auto w-[10rem] h-[2.8rem] cursor-pointer border-gray-200 border-2 shadow-sm rounded-lg"
                    onClick={()=>setDrop(!drop)}
                >
                    <img src={tune} alt="tune" className="w-[20%] h-[100%] mr-3" />
                    <div className="text-[18px]">Display</div>
                    <img src={(drop===false) ? expandMore : expandLess} alt="dropdown" className="ml-3"/>
                </div>
                <div className="p-2">
                    <img src={darkIcon} alt="Dark Mode" className="cursor-pointer h-[1.8rem]" />
                </div>
            </nav>
        </section>
    );
}

export default Navbar;