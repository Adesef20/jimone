

        
const Service = () => {
    return(
        <div>
                {/* Service Section */}

        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="w-64 p-6 text-center bg-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Car Sales</h3>
              <p className="mt-2 text-gray-600">We sell top quality vehicles at unbeatable prices.</p>
            </div>
            <div className="w-64 p-6 text-center bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl fon t-semibold">Car Swaps</h3>
              <p className="mt-2 text-gray-600">Swaps your car with the best upgrade options available.</p>
            </div>
            <div className="w-64 p-6 text-center bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Car Purchases</h3>
              <p className="mt-2 text-gray-600">We buy cars at competitive rates.</p>
            </div>
          </div>
        </section>
        </div>
    );
}

export default Service;