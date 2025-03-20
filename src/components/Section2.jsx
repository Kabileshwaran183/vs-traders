import React from "react";
import { BsArrowRight} from "react-icons/bs";
const area =[
    {
    Name:"Interiors",
    img:"/award/nippon.jpg"
    },
     {
    Name:"Exteriors",
    img:"/award/nippon.jpg"
    },
     {
    Name:"Wallpaper",
    img:"/award/nippon.jpg"
    },
     {
    Name:"WoodFinishes",
    img:"/award/nippon.jpg"
    },
     {
    Name:"Waterproofing",
    img:"/award/nippon.jpg"
    },
     {
    Name:"Emulsions",
    img:"/award/nippon.jpg"
    }
    
]
export const Section2 = () => {
    return (
        <section  className=" top-container-1 ">
          <div className="max-md:mt-12">
                <div className="">
                    <h2 className="title-text md:text-2xl font-bold mx-auto text-gray-700  text-center md:mb-2 ">Areas of expertise</h2>
                    <p className="mx-auto fontmobile text-gray-400  md:text-lg   text-center md:mb-16 mb-3">One stop solution for all you need to keep your living space intact.</p>
                </div>
            <div className="flex justify-center flex-col gap-5 md:justify-between   px-0 lg:px-12 ">
                 <div className="grid grid-cols-2 lg:grid-cols-3  gap-5 items-center">
                    {area.map((area) => (
                   
                      <div className="flex justify-center relative hover:-translate-y-4 duration-500 delay-200 mb-2 ">
                        <img
                            src={area.img}
                            alt="Ahmed paints Traders"
                            title="Ahmed Paint Karaikudi"
                            className="w-full max-h-max max-w-md rounded-lg shadow-lg object-center  "
                        />
                        <p className="absolute top-[70%] md:top-[80%] lg:top-[80%] left-5 right-0  text-white semi-font-bold  md:text-2xl text-[10px]">{area.Name}</p>
                        <div className="absolute  top-[76%] lg:top-[80%] md:top-[80%] md:left-[85%]  left-[80%] right-0 text-white font-bold md:text-2xl text-sm">
                                <a href="#products"> <BsArrowRight />  </a>
                        </div>
                    </div>
                   
                    ))} 
                </div>
                
            </div>
        </div>
        </section>

    );
};

export default Section2;
