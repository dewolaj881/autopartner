import React from "react";

<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" /></link>

function Showcase() {
  return (
    <div>
      <div class="text-white font-bold bg-cover bg-no-repeat  bg-center h-spacing-mobile md:h-screen -mt-10 md:-mt-36 items-center bg-hero-pattern">
        <div className="block mx-auto md:mx-px">
          <h1 className="block pt-36 md:pt-56 text-4xl  md:text-left text-center md:ml-36">Szybka dostawa <br></br>jest naszym celem!</h1>
          <p className="block text-xl font-normal text-center md:text-left md:ml-36 mt-4 ">Przy realizacji powierzonych nam zadań <br></br> cenimy sobie szybkość realizacji </p>
          <button class="md:block hidden bg-red-600  z-30 mb-36 ml-36 py-2 px-6 rounded-3xl mt-8 hover:bg-gray-900 hover:border-2 hover:border-white hover:text-white">
            <p>Nawiąż współpracę</p>
          </button>
          <button class="md:hidden block mx-auto text-lg bg-red-600  z-30 mb-8 text-center py-1 px-2 rounded-3xl mt-4 hover:bg-gray-900 hover:border-2 hover:border-white hover:text-white">
            <p>Nawiąż współpracę</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;