import React from "react";

<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" /></link>

function Showcase() {
  return (
    <div>
      <div class="text-white font-bold  md:grid md:grid-cols-2 block text-center">
        <h1 className="md:block hidden text-4xl">Szybka dostawa <br></br>jest naszym celem!</h1>
        <h1 className="md:hidden block z-20 mt-12 shadow-xl absolute text-center text-2xl">Szybka dostawa <br></br>jest naszym celem!</h1>
        <img class="md:block hidden ml-48" src="../img/truck1.png" alt="" />
        <img class="md:hidden block relative z-10 mx-auto" src="../img/truck1.png" alt="" />
      </div>
      <div class="md:grid md:grid-cols-2 block">
        <img class="block" src="../img/crossing1.png" alt="" />
        <h1>test test test</h1>
      </div>
      {/* <div class="text-white font-bold h-96 text-4xl grid grid-cols-2">
        <h1 className="md:block hidden absolute ml-52">Szybka dostawa <br></br>jest naszym celem!</h1>
        <h1 className="md:hidden block relative z-10 text-center mt-24">Szybka dostawa <br></br>jest naszym celem!</h1>
        <img class="md:block hidden absolute right-0 top-0 ml-48" src="../img/truck1.png" alt="" />
        <img class="md:hidden block mx-0 absolute top-0 right-0.5" src="../img/truck1.png" alt="" />
      </div>
      <div class="grid grid-cols-2">
        <img class="block  mt-56" src="../img/crossing1.png" alt="" />
      </div> */}
    </div>
  );
}

export default Showcase;