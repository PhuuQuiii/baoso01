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
      IATM()
    }
    else if (context.searchParams.id === "ITolet-TN1"){
      ITolet_TN1()
    }
    else if (context.searchParams.id === "ITolet-TN2"){
      ITolet_TN2()
    }
    else if (context.searchParams.id === "ICONSCC"){
      ISCC()
    }
    else if (context.searchParams.id === "ILuggageTN1"){
      ILuggage_TN()
    }
    else if (context.searchParams.id === "ILuggageTN2()"){
      ILuggage_TN()
    }
    else if (context.searchParams.id === "ICONLuggageTN"){
      ILuggage_TN()
    }
    else if (context.searchParams.id === "IRestaurant1"){
      IRestaurant()
    }
    else if (context.searchParams.id === "ICONIDRestaurant1"){
      IRestaurant()
    }
    else if (context.searchParams.id === "ICONIRestaurant1"){
      IRestaurant()
    }
    else if (context.searchParams.id === "IStair1"){
      IStair1()
    }
    else if (context.searchParams.id === "ICONIStair1"){
      IStair1()
    }
    else if (context.searchParams.id === "IStair2"){
      IStair2()
    }
    else if (context.searchParams.id === "ICONIStair2"){
      IStair2()
    }
    else if (context.searchParams.id === "IElevatorSC"){
      IElevatorSC()
    }
    else if (context.searchParams.id === "ICONIElevatorSC"){
      IElevatorSC()
    }
    else if (context.searchParams.id === "Exit1"){
      Exit_1()
    }
    else if (context.searchParams.id === "Exit2"){
      Exit_2()
    }
  });
  return (
    html()
  );
};

export default page;
