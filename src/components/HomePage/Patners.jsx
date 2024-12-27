import React from "react";

const Patners = () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-3xl text-gray-100 text-center mb-6">
          TRUSTED BY
        </h3>
        <div className="grid grid-cols-3 gap-6">
          {/* Grid 1 */}
          <div className="flex items-center space-x-4 h-32 rounded-lg p-4">
            <img
              src="https://i.postimg.cc/Kz0dN4Fw/so-called-cs-engineers-logo.jpg"
              alt="So Called CS Engineers Logo"
              className="w-28 rounded-lg"
            />
            <p className="text-lg text-white font-medium">
              SO CALLED CS ENGINEERS
            </p>
          </div>

          {/* Grid 2 */}
          <div className="flex items-center space-x-4 h-32 rounded-lg p-4">
            <img
              src="https://i.postimg.cc/V6tM8ZLF/edamiare-logo.jpg"
              alt="E-DAM Logo"
              className="w-28 rounded-lg"
            />
            <p className="text-lg text-white font-medium">E-DAM</p>
          </div>

          {/* Grid 4 */}
          <div className="flex items-center space-x-4 h-32 rounded-lg p-4">
            <img
              src="https://i.postimg.cc/rytWR88q/nexus-swarm-logo.jpg"
              alt="Example Logo"
              className="w-28 rounded-lg"
            />
            <p className="text-lg text-white font-medium">NEXUS SWARM</p>
          </div>
          {/* Grid 3 */}
          <div className="flex items-center space-x-4 h-32 rounded-lg p-4">
            <img
              src="https://i.postimg.cc/52Xbt6Ds/kurushetra-logo.jpg"
              alt="Sample Logo"
              className="w-28 rounded-lg"
            />
            <p className="text-lg text-white font-medium">KURUSHETRA</p>
          </div>

          {/* Grid 5 */}
          {/* <div className="flex items-center space-x-4 h-32 rounded-lg p-4">
            <img
              src="https://i.postimg.cc/nrV1cZwG/test-logo.jpg"
              alt="Test Logo"
              className="w-28 rounded-lg"
            />
            <p className="text-lg text-white font-medium">TEST PARTNER</p>
          </div> */}

          {/* Grid 6 */}
          {/* <div className="flex items-center space-x-4 h-32 rounded-lg p-4">
            <img
              src="https://i.postimg.cc/8zTmG8vR/demo-logo.jpg"
              alt="Demo Logo"
              className="w-28 rounded-lg"
            />
            <p className="text-lg text-white font-medium">DEMO PARTNER</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Patners;
