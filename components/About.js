import React from "react";

function About() {
  return (
    <div className="md:grid block md:grid-cols-2 md:bg-none">
      <div className="block md:hidden mx-16 text-white my-24">
        <h1 className="text-3xl border-b-2 border-red-600 w-32 mb-12 text-center font-russo">O firmie</h1>
        <p className="text-justify">Dzialamy na rynku od x lat. Rozwój firmy był następstwem bliskiej i owocnej współpracy z wieloma dystrybutorami. Zawsze staramy się aby nasi klienci byl zadowoleni z czasu i jakości dostawy.</p>
      </div>
      <div>
        <img className="md:block md:w-min w-full" src="../img/crossing.png" alt="" />
      </div>
      <div className=" hidden md:block mx-16 text-white mt-24">
        <h1 className="text-3xl border-b-2 border-red-600 w-32 mb-12 text-center font-russo">O firmie</h1>
        <p>Dzialamy na rynku od x lat. Rozwój firmy był następstwem bliskiej i owocnej współpracy z wieloma dystrybutorami. Zawsze staramy się aby nasi klienci byl zadowoleni z czasu i jakości dostawy.</p>
      </div>
    </div>
  );
}

export default About;
