"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import * as path from "./component";
//import { useTranslation } from "/";
import { Toaster, toast } from "sonner";
import html from "./html";
const page = (context) => {
  console.log(context.searchParams.id);

  useEffect(() => {
    if (context.searchParams.id === "ICONATM") {
      path.IATM();
    } else if (context.searchParams.id === "ITolet-TN1") {
      path.ITolet_TN1();
    } else if (context.searchParams.id === "ITolet-TN2") {
      path.ITolet_TN2();
    } else if (context.searchParams.id === "ICONSCC") {
      path.ISCC();
    } else if (context.searchParams.id === "ILuggageTN1") {
      path.ILuggage_TN();
    } else if (context.searchParams.id === "ILuggageTN2") {
      path.ILuggage_TN();
    } else if (context.searchParams.id === "ICONLuggageTN") {
      path.ILuggage_TN();
    } else if (context.searchParams.id === "IRestaurant1") {
      path.IRestaurant();
    } else if (context.searchParams.id === "ICONIDRestaurant1") {
      path.IRestaurant();
    } else if (context.searchParams.id === "ICONIRestaurant1") {
      path.IRestaurant();
    } else if (context.searchParams.id === "IStair1") {
      path.IStair1();
    } else if (context.searchParams.id === "ICONIStair1") {
      path.IStair1();
    } else if (context.searchParams.id === "IStair2") {
      path.IStair2();
    } else if (context.searchParams.id === "ICONIStair2") {
      path.IStair2();
    } else if (context.searchParams.id === "IElevatorSC") {
      path.IElevatorSC();
    } else if (context.searchParams.id === "ICONIElevatorSC") {
      path.IElevatorSC();
    } else if (context.searchParams.id === "Exit1") {
      path.Exit_1();
    } else if (context.searchParams.id === "Exit2") {
      path.Exit_2();
    }
  });
  return html();
};

export default page;
