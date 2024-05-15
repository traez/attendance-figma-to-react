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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
        <Standard />
        <Medium />
        <Large />
      </div>
    </main>
  );
}

/*
div
        */
