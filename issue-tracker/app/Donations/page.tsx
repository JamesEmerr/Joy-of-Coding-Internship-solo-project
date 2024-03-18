import React from "react";
import Image from "next/image";
import { Button } from "@radix-ui/themes";

const Donations = () => {
  return (
    <>
      <div className="flex justify-center mt-10 text-size text-5xl">
        Donations
      </div>
      <main className="lex min-h-screen flex-col items-center justify-between p-5">
        <div className="relative flex place-items-center">
          <Image
            src="/PayPal.jpg"
            alt="colony.js Logo"
            width={300}
            height={150}
            priority
          />
        </div>
        <div className="flex justify-center mt-10 text-size-5xl ">
          Click <Button>Here</Button> for direct PayPal link
        </div>       
      </main>
    </>
  );
};

export default Donations;
