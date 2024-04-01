import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
     <main className="lex min-h-screen justify-center ">
    <div className="relative flex place-items-center">
        <Image
          src="/colony.jpg"
          alt="colony.js Logo"
          width={300}
          height={150}
          priority        
        />                
      </div>
      <div className="flex justify-center mt-10 text-size text-5xl">
        What is MCX?
      </div>
      <h1 className="flex justify-center mt-10 text-size ">
        Humbly begining on Earth in 2020 ECT (Earth Calander Time), 10 of the
        wealthiest nations came together for one goal, colonize mars, and thus
        MCX was born. 100 years later, MCX is thriving
      </h1>
      <p>
        MCX was concieved as Mars Colonization X (as in the unknown), because it
        was quite literally, planning for the unknown. MCX has been pushing
        through the forefront of technology and human accomplishments. From our
        base on Mars, we are ever expanding and continuing the vision set over
        100 years ago.{" "}
      </p>

      <p>
        Technology is transforming many aspects of our lives. In the race to
        compete with other naturally forming life-forms, we humans, must always
        be on the lookout to expand our sphere of influence. By 3000, it's
        projected that Earth will be a decimated wasteland.{" "}
      </p>

      <p>
        With over 5 million full time residents and millions more visiting the
        Red Planet each year, Mars colonization is generally deemed a success.
        Having successfully colonized the "Ring of of Saturn", Planet Neptune
        and established a station in orbit above Jupitor, it is time to broaden
        out even further. Through thermo scans, it seems evident that Pluto
        contains billions of pounds Xalatium, locked in it's icy grip. A permant
        colonization would allow the mining and concetraining of the precious
        semi-metal{" "}
      </p>

      <h3 className="flex justify-center mt-10 text-size text-5xl">Xalatium</h3>
      <p className="flex justify-center mt-10 text-size">
        From Micro phones, to Semi-conducters, to Space Intrastellar Cruisers
        (SIC), Xalatium is the semi-metal that makes it happen. Rated 10x the
        hardness of a diamond, it also has the amazing cability to reproduce
        itself and grow. When mined and produced specifically for spacial
        projects, it serves as the outer layer on SIC and modular set-ups,
        protecting all things from space's harmful effects. In the event of
        damage, it can even make repairs to itself, slowly recovering original
        shap, form and strenght
      </p>
      </main>
    </>
  );
};

export default About;
