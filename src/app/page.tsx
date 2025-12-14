"use client";
import Image from "next/image";
import JollyNikoClick from "@/components/JollyNikoClick";
import HappyNikoClick from "@/components/HappyNikoClick"
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0); // useState!
  return (
    <div className="min-h-screen bg-linear-to-br from-[#06402B] from-0% via-[#06402B] via-30% to-[#ff0000] to-100% to-[#ff0000] flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* <h1 className={"text-6xl self-center my-10"}>Christmas time!</h1> */}
          <h1 className="text-6xl font-bold">pet Niko to wish them a merry Christmas :3</h1>
          {(count > 10) && <p className="text-3xl font-bold">look, you made Niko happy! they wish you a merry christmas :D</p>}
          <p className={"text-3xl font-bold"}>Count: {count}</p> 
          {(count > 10) ? <HappyNikoClick onClick={() => {setCount(count + 1)}} /> : <JollyNikoClick onClick={() => {setCount(count + 1)}} />}
        </div>
      </main>
    </div>
  );
}