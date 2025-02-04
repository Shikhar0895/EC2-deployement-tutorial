"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { DarkModeIcon, LightModeIcon, SystemThemeIcon } from "./Svgs";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="border-amber-100 border-[1px] rounded-2xl p-6 flex justify-between items-center">
      <div>Kollaborate</div>
      <div className="flex items-center gap-3">
        <Button
          className="cursor-pointer"
          onClick={() => router.push("/auth/sign-up")}
        >
          Sign Up
        </Button>
        <Button
          className="cursor-pointer hover:bg-background-900 hover:text-text-100  hover:scale-125 transition-all duration-200"
          variant={"outline"}
          onClick={() => router.push("/auth/sign-in")}
        >
          Sign In
        </Button>
        <div className="bg-gray-700/[0.8] p-3 rounded-4xl flex gap-4">
          <div className="cursor-pointer hover:bg-background-900  hover:scale-150 transition-all duration-200 rounded-3xl p-[4px]">
            <DarkModeIcon dimension="24px" color="#fafafa" />
          </div>
          <div className="cursor-pointer hover:bg-background-900  hover:scale-150 transition-all duration-200 rounded-3xl p-[4px]">
            <LightModeIcon dimension="24px" color="#fafafa" />
          </div>
          <div className="cursor-pointer hover:bg-background-900  hover:scale-150 transition-all duration-200 rounded-3xl p-[4px]">
            <SystemThemeIcon dimension="24px" color="#fafafa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
