"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const carImages = [
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744286536/Camry_2007_mw3oiw.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773944/shopping_yjs3rd.avif",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744287209/corolla_rvi0tq.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631324/shopping_aisoja.webp",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773845/images_2_ylqnp4.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631491/download_zkxw5j.webp",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744287533/corolla_sport_qeumpk.avif",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744458068/images_2_x6yroj.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631582/images_6_lc9szr.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744288546/images_dh4dqy.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744458175/download_1_fe5l5s.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631509/images_5_ok82cy.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744288546/images_dh4dqy.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631384/images_4_cx9til.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744458304/images_3_feosup.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773533/2021-honda-accord-hybrid-109-edit-1604961241_uoevqt.avif",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745084281/images_16_ythndq.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083515/images_11_dwvlqw.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083936/images_14_y8210i.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773533/2021-honda-accord-hybrid-109-edit-1604961241_uoevqt.avif",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745080992/images_gcyxeq.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081063/images_3_dbwq52.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081181/images_4_ifeky5.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745082790/images_7_cjnyum.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081677/images_6_tsdls5.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745082893/images_8_jvl6gy.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083023/images_10_ozas5z.jpg",
];

const Explore = () =>{
    const [overLay, setOverlay] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    
    const handleOverlay = (index) => {
        setCurrentImage(index);
        setOverlay(true);
    };

    const handlePrev = () =>{
        setCurrentImage ((prev) => (prev > 0 ? prev - 1 : carImages.length - 1));
    };

    const handleNext = () => {
        setCurrentImage ((prev) => (prev < carImages.length - 1 ? prev + 1 : 0));
    };

    return(
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-10 text-center">Explore Cars</h1> 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {carImages.map((img, index) => (
                        <div
                            key={index} 
                            className="cursor-pointer" 
                            onClick={() => handleOverlay(index)} >
                                <Image 
                                src={img} 
                                alt={`Car ${index + 1}`} 
                                width={300} 
                                height={200} 
                                className="rounded shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full h-full"
                                />
                        </div>
                            ))}
                    </div>
                    
              {
                overLay &&(
                    <div className="fixed top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.9)] flex justify-center items-center">
                        <div className="relative max-w-xl p-4 bg-white shadow-xl">
                            <Image
                            src={carImages[currentImage]}
                            alt={`Car ${currentImage + 1}`}
                            width={500}
                            height={300}
                            className="object-contain rounded"
                            />

                            <div className="text-2xl flex justify-between items-center mb-4">
                                <button onClick={handlePrev} className="hover:text-orange-500"><FaAngleLeft/></button>
                                <button onClick={handleNext} className="hover:text-orange-500"><FaAngleRight/></button>
                            </div>

                            <button onClick={() => setOverlay(false)} 
                            className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-red-500">
                                <RxCross2/>
                            </button>
                        </div>
                    </div>
                )}
      </div>
    );
}

export default Explore;