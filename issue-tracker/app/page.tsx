import { Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="lex min-h-screen flex-col items-center justify-between p-5">
      
      <div className="relative flex place-items-center">
        <Image
          src="/pluto-view.jpg"
          alt="Next.js Logo"
          width={1000}
          height={300}
          priority        
        />
                
      </div>
      <div
          style={{
            backgroundColor: 'black',  
            width: '1000px',
            height: '1000px'                           
        }}
        > 
      </div>              
    </main>
  );
}
