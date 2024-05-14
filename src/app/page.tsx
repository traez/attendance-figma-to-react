"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";
import Image from "next/image";
import Explore from "@/components/Explore";
import Standard from "@/components/Standard";
import Medium from "@/components/Medium";
import Large from "@/components/Large";

export default function Home() {
  const { textInput, setTextInput, handleClear } = useContext(StateContext)!;

  return (
    <main className="font-trebuchetMs min-h-screen w-full grid grid-rows-[256px,minmax(776px,auto)] grid-cols-[auto] gap-1 p-1">
      <Explore />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-1">
        <Standard />
        <Medium />
        <Large />
      </div>
    </main>
  );
}

/*
<div className="justify-center px-4 py-2.5 text-sm font-medium tracking-normal leading-4 text-right text-white uppercase whitespace-nowrap bg-teal-600 rounded-xl">
      Recommended
    </div>

https://www.figma.com/design/IKlybSP7jSdiYkNvDnEIIo/Peddlesoft-for-Business
        */
