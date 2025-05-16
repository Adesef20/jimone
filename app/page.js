"use client"
import  Image  from "next/image";
import Link from "next/link";
import { useState, Fragment, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";



const Home = () => {
  const router = useRouter();   
  const carImages = {
    Toyota: [
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744286536/Camry_2007_mw3oiw.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744287209/corolla_rvi0tq.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744287763/camry_sport_zcals5.jpg",
    "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744287533/corolla_sport_qeumpk.avif",
     "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744288546/images_dh4dqy.jpg",
    ],

    Mercedes:[
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773944/shopping_yjs3rd.avif",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773845/images_2_ylqnp4.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744458068/images_2_x6yroj.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744458175/download_1_fe5l5s.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744458304/images_3_feosup.jpg",
    ],

    Lexus:[
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631324/shopping_aisoja.webp",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631384/images_4_cx9til.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631509/images_5_ok82cy.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631582/images_6_lc9szr.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1744631491/download_zkxw5j.webp",
    ],
    Honda:[
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773533/2021-honda-accord-hybrid-109-edit-1604961241_uoevqt.avif",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745080992/images_gcyxeq.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081063/images_3_dbwq52.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081181/images_4_ifeky5.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081255/images_5_o7d1oi.jpg",
    ],
    Mazda:[
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745082790/images_7_cjnyum.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081677/images_6_tsdls5.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745082893/images_8_jvl6gy.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745082957/images_9_ltt2g6.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083023/images_10_ozas5z.jpg",
    ],
    Range:[
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083784/images_12_l0c7c7.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083515/images_11_dwvlqw.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083851/images_13_hetkgd.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083936/images_14_y8210i.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745084039/images_15_a2p8pm.jpg",
    ],
    Hayoundai:[
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745084583/images_17_szzdop.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745084281/images_16_ythndq.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745084685/images_18_jyzabc.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745085007/images_21_ewnicx.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745084838/images_20_ndnpfl.jpg",
    ],
    Mitsubishi:[
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745085765/images_25_uclcl5.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745085304/images_22_cjtbo4.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745085684/images_24_gg3cba.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745085556/images_23_la3j6z.jpg",
      "https://res.cloudinary.com/dyp62yu3w/image/upload/v1745085848/images_26_hwuxxu.jpg",
    ],
  }
  
    const [overLay, setOverlay] = useState (false);
    const [brand, setBrand] = useState ("Toyota");
    const [currentImage, setCurrentImage] = useState(0);
    
    const handleShowOverlay = (brandName) => {
      setBrand(brandName);
      setCurrentImage(0);
      setOverlay(true);
    };
    
    const handlePrev = () => {
      setCurrentImage((prev) => (prev === 0 ? carImages[brand].length - 1 : prev - 1));
    };
    const handleNext = () => {
      setCurrentImage((prev) => (prev + 1) % carImages[brand].length);
    };

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setOverlay(false);
      };
         if (overLay) window.addEventListener("keydown", handleKeyDown);
         return () => window.removeEventListener("keydown", handleKeyDown);
    }, [overLay]);

    const brandColors = {
      Toyota: "text-red-600",
      Mercedes: "text-blue-700",
      Lexus: "text-purple-600",
      Honda: "text-green-700",
      Mazda: "text-orange-700",
      Range: "text-yellow-600",
      Hayoundai: "text-blue-500",
      Mitsubishi: "text-gray-700"
    };

    const [openIndex, setOpenIndex] = useState(null);
        const toggle = (index) => {
          setOpenIndex(openIndex === index ? null : index);
         }
      
         const faqList = [
          {
            question: "What types of car do you sell?",
            answer:"We sell a wide range of vehicles: sedans, SUVs trucks amd luxury cars.",
          },
          {
            question: "Can i trade in my old?",
            answer: "Absolutely! We offer trade-in option and provide a fair evaluation for your vehicle.",
          },
          {
            question: "Do you offer a warrant on purchases?",
            answer: "Yes, all our cars come with a warranty to ensure quality and customer satisfaction.",
          },
          {
            question: "How can I book a test drive?",
            answer: "Simply contact us or visit our showroom to schedule a test drive at your convenience.",
          },
          {
            question: "Do you offer financing options?",
            answer: "Yes, we provide flexible financing options tailored to your budget.",
          },
    ];
    
    return (
    <Fragment>
      {
      overLay &&(
        <div className="fixed top-0 z-100 w-full h-screen bg-[rgba(255,165,0,0.3)] flex justify-center items-center transition-opacity duration-500 ease-in-out">
         <div className="relative bg-white p-4 shadow-lg rounded w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] max-w-[600px]">
          <div className={`font-bold text-xl mb-4 text-center text-gray-800 uppercase tracking-widest ${brandColors[brand]}`}>
            {brand}
            </div>
            
            {carImages[brand] && carImages[brand][currentImage] &&(
                 <Image 
                 src= {carImages[brand][currentImage]}
                 alt= {`${brand} ${currentImage + 1}`}
                 width={500}
                 height={300}
                 className="object-contain h-auto max-w-full rounded"
                 onError={(e) => {
                  e.target.src = "/fallback-car.jpg"; 
                 }}
                 />
            )}
            
            <div className="flex justify-between mt-6 text-2xl text-gray-800">
              <button onClick={handlePrev} className="hover:text-orange-500">
              <FaAngleLeft />
              </button>
              <button onClick={handleNext} className="hover:text-orange-500">
              <FaAngleRight />
              </button>
              </div>
            
              <button 
              onClick={() => setOverlay(false)}
              className="absolute text-2xl text-gray-800 top-2 right-2 hover:text-red-600"
              >
               <RxCross2/>
              </button>
          </div>
          </div>
      )
    }
      <main className="w-full">
        <div className="w-full h-[80vh] mt-4 flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat sm:h-[70vh] md:h-[80vh] lg:h-[90vh]"
          style={{backgroundImage:"url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1743440504/20194runner2_yldinf.png')"}}>
          <div className="z-10 text-center text-black">
            <h1 className="text-4xl font-bold text-red-400 sm:text-3xl md:text-5xl">
              Welcome To Jim-One Motors
            </h1>
            <p className="mt-4 text-base md:text-xl text-slate-900">
              Reliable, Durable, and Affordable Cars
            </p>
            
             <button onClick={() => router.push('/Explore')} 
             className="px-6 py-3 mt-6 text-white rounded-full sm:px-4 sm:py-2 md:px-8 md:py-4 bg-amber-500 hover:bg-amber-900">
              Explore Cars
            </button>
          </div>
        </div>

        {/* About Section  */}

        <div className="py-16 text-center bg-gray-100 shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="w-full mx-auto mt-4 text-sm text-gray-600 sm:w-5/6 md:w-3/4 md:text-base">
            At Jim-One Motors, we provide high-quality vehicles, ensuring
            customer satisfaction and the best deals in the market.
          </p>
        </div>

        {/* Service Section */}

        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Services
          </h2>
          <div className="flex flex-wrap justify-center gap-8 px-4 mt-8 sm:px-2 md:px-8">
            <div className="w-full p-4 bg-gray-200 rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h3 className="text-xl font-semibold">Car Sales</h3>
              <p className="mt-2 text-gray-600">
                We sell top quality vehicles at unbeatable prices.
              </p>
            </div>
            <div className="w-full p-4 bg-gray-200 rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h3 className="text-xl font-semibold">Car Swaps</h3>
              <p className="mt-2 text-gray-600">
                Swaps your car with the best upgrade options available.
              </p>
            </div>
            <div className="w-full p-4 bg-gray-200 rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h3 className="text-xl font-bold">Car Purchases</h3>
              <p className="mt-2 text-gray-600">
                We buy cars at competitive rates.
              </p>
            </div>
          </div>
        </section>

        {/* Faq section */}
        
        <section className="max-w-2xl p-4 mx-auto mt-10 mb-20 rounded-lg shadow-lg bg-slate-200 sm:mb-14 md:mb-20 lg:mb-24">
            <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
              Frequency Ask Question
            </h1>
            <div className="space-y-4">
      
              {faqList.map((item, index) => (
               <div key={index} className="overflow-hidden bg-white border rounded-lg">
                <button 
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-4 py-3 font-semibold text-left text-gray-800 transition bg-gray-100 hover:bg-gray-200"
                >
      
               <span>{item.question}</span>
               {openIndex === index ? (
                <FaChevronUp className="w-5 h-5 ml-2 text-gray-600"/>
               ) : (
                <FaChevronDown className="w-5 h-5 ml-2 text-gray-600"/>
               )}
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-700 bg-white border-t">
                    {item.answer}
                  </div>
                )}
              </div>
              ))}
            </div>
            </section> 
  
  {/* Features Cars Section */} 
  
  <section className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Feature Cars
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="Toyota"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1743441290/images_hdrev6.jpg"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Toyota Camry 2022</h3>
              <p className="text-gray-500">$25,000</p>
              <button onClick={() => handleShowOverlay("Toyota")}  className="px-2 py-2 mt-2 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Toyota
              </button>
            </div>

            <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="benz"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1743441436/download_fmqch5.jpg"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Mercedes Benz C300</h3>
              <p className="text-gray-500">$35,000</p>
              <button onClick={() => handleShowOverlay("Mercedes")} className="px-2 py-2 mt-2 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Mercedes
              </button>
              </div>

            <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="lexus"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1743441579/6999330b-15da-4052-a4b5-52aa5d564b68_oxenxx.webp"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Lexus RX 350</h3>
              <p className="text-gray-500">$40,000</p>
              <button onClick={() => handleShowOverlay("Lexus")} className="px-2 py-2 mt-6 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Lexus
              </button>
              </div>
              <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="Honda"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1743773533/2021-honda-accord-hybrid-109-edit-1604961241_uoevqt.avif"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Honda Accord</h3>
              <p className="text-gray-500">$31,000</p>
              <button onClick={() => handleShowOverlay("Honda")} className="px-2 py-2 mt-6 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Honda Accord 
              </button>
              </div>

              <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="lexus"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1745081677/images_6_tsdls5.jpg"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Mazda</h3>
              <p className="text-gray-500">$29,000</p>
              <button onClick={() => handleShowOverlay("Mazda")} className="px-2 py-2 mt-6 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Mazda
              </button>
              </div>


              <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="Range"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1745083515/images_11_dwvlqw.jpg"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Range Rover</h3>
              <p className="text-gray-500">$50,000</p>
              <button onClick={() => handleShowOverlay("Range")} className="px-2 py-2 mt-6 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Range Rover
              </button>
              </div>

              <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="Hayoundai"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1745084281/images_16_ythndq.jpg"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Hayoundai</h3>
              <p className="text-gray-500">$39,000</p>
              <button onClick={() => handleShowOverlay("Hayoundai")} className="px-2 py-2 mt-6 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Hayoundai
              </button>
              </div>

              <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
              <Image
                alt="Mitsubishi"
                src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1745086462/download_1_ipjjgf.jpg"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">Mitsubishi</h3>
              <p className="text-gray-500">$37,000</p>
              <button onClick={() => handleShowOverlay("Mitsubishi")} className="px-2 py-2 mt-6 text-lg font-semibold text-white border-none rounded-lg shadow-sm bg-amber-500 hover:bg-gray-500">
                View Mitsubishi
              </button>
              </div>
          </div>
        </section>

        {/* Call to Action Section*/}
        <div>
          <section className="py-6 text-center text-white bg-gray-200">
            <h2 className="text-3xl font-bold text-gray-800">
              Find Your Dream Car Today
            </h2>
            <p className="mt-4 text-gray-600">
              Visits Jim-One Motors or contact us for the best deals.
            </p>
            <Link href="/Contact">
            <button className="px-6 py-3 mt-6 font-bold text-white rounded-lg shadow-md bg-amber-500 hover:bg-gray-500">
               Contact Us
            </button>
            </Link>
          </section>
        </div>
      </main>
      </Fragment>
  );
}

export default Home;
    

    
      
  
