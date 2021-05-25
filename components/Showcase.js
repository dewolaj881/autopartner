import React from "react";

<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" /></link>

function Showcase() {
  return (
    <div class="text-white font-bold text-4xl">
      <h1 className="md:block hidden ml-52">Szybka dostawa <br></br>jest naszym celem!</h1>
      <h1 className="md:hidden block relative z-10 text-center mt-24">Szybka dostawa <br></br>jest naszym celem!</h1>
      <img class="md:block hidden ml-80 absolute top-0 -right-20" src="../img/truck1.png" alt="" />
      <img class="md:hidden block mx-0 absolute top-0 right-0.5" src="../img/truck1.png" alt="" />
    </div>
  );
}

export default Showcase;