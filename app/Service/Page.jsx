
const Service = ()=>{
    return(
        <div>
                {/* Service Section */}

        <section className="py-16 bg-white">
          <h2 className="text-center text-3xl font-bold text-gray-800">Our Services</h2>
          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            <div className="w-64 p-6 bg-gray-200 text-center rounded-lg shadow-sm">
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
        </div>
    );
};

export default Service;