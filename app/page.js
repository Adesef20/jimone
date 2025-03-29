import Image from "next/image";

const Home = ()=> {
  return (
      <main className="w-full">
  
        <div className="w-full h-[80vh] justify-center items-center flex bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('public/images/image1.webp')" }}>

          <div className="text-center text-black z-10">
            <h1 className="text-4xl font-bold">Welcome To Jim-One Motors</h1>
            <p className="mt-4 text-xl">Reliable, Durable, and Affordable Cars</p>
            <button className="mt-6 px-6 py-3 bg-amber-500 text-white rounded-lg shadow-lg hover:text-slate-600">Explore Cars</button>
          </div>
         </div>

          {/* About Section  */}
          <div className="py-16 text-center bg-gray-100 shadow-md">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="w-3/4 text-gray-600 mx-auto mt-4">
              At Jim-One Motors, we provide high-quality vehicles, ensuring customer satisfaction and the best deals in the market.
            </p>
        </div>

        {/* Service Section */}

        <section className="py-16 bg-white">
          <h2 className="text-center text-3xl font-bold text-gray-800">Our Services</h2>
          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            <div className="w-64 p-6 bg-gray-200 text-center rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Car Sales</h3>
              <p className="mt-2 text-gray-600">We sell top quality vehicles at unbeatable prices.</p>
            </div>
            <div className="w-64 p-6 bg-gray-200 text-center rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Car Swaps</h3>
              <p className="mt-2 text-gray-600">Swaps your car with the best upgrade options available.</p>
            </div>
            <div className="w-64 p-6 bg-gray-200 text-center rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Car Purchases</h3>
              <p className="mt-2 text-gray-600">We buy cars at competitive rates.</p>
            </div>
          </div>
        </section>

        {/* Features Cars Section */}

        <section className="py-16 bg-gray-100">
        <h2 className="text-center font-bold text-3xl text-gray-800">Feature Cars</h2>
        <div className="mt-6 flex justify-center flex-wrap gap-8">
          <div className="w-64 p-4 rounded-lg shadow-lg bg-white">
              
            <h3 className="mt-4 text-lg font-semibold">Toyota Camry 2022</h3>
            <p className="text-gray-500">$25,000</p>
          </div>
          <div className="w-64 p-4 rounded-lg shadow-lg bg-white">
    
            <h3 className="mt-4 text-lg font-semibold">Mercedes Benz C300</h3>
            <p className="text-gray-500">$35,000</p>
          </div>
          <div className="w-64 p-4 rounded-lg shadow-lg bg-white">
            
            <h3 className="mt-4 text-lg font-semibold">Lexus RX 350</h3>
            <p className="text-gray-500">$40,000</p>
          </div>
        </div>
        </section>

        {/* Call to Action Section*/}

        <section className="py-6 text-center bg-amber-400 text-white">
          <h2 className="text-3xl font-bold">Find Your Dream Car Today</h2>
          <p className="mt-4">Visits Jim-One Motors or contact us for the best deals.</p>
          <button className="mt-6 px-6 py-3 text-white bg-amber-500 font-bold rounded-lg shadow-md hover:bg-gray-500">Contact Us</button>
        </section>
          <div>
          <Image src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1743079739/image1_erbtgz.webp" alt="car" width={100} height={100}/>
          </div>
        
       </main>
  );
}

export default Home;
