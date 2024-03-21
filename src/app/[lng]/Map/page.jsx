"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import { ICheckin_TN,ICheckin_TN1,ICONCheckin_TN, ICONCheckin_TN1, ICONCheckin_TN2,ICONCheckin_TN3, ICheckin_QT, ICheckin_QT1,
  ICONCheckin_QT,ICONCheckin_QT1,ICONCheckin_QT2,ICONCheckin_QT3,ITolet_TN1,ICONIToletTN1,
  ITolet_TN3,ICONIToletTN3,ITolet_QT1,ICONIToletQT1,ISmokingTN,ICONISmokingTN,ISmokingQT,
  ICONISmokingQT,ISCC,ICONISCC,ISCCQT,ICONISCCQT,IECC,ICONIECC,IMedical,ICONIMedical,ICONIDRestaurant1,ICONIRestaurant1,IRestaurant2,ICONIDRestaurant2,
  ICONIRestaurant2,IRestaurant3,ICONIDRestaurant3,ICONIRestaurant3,ICONAC1,ICONAC2,
  ICONAC3,IStair1,ICONIStair1,IStair2,ICONIStair2,IElevatorSC,ICONIElevatorSC,
  ICONGateQT1,ICONGateQT3,ICONGateQT2,ICONGateQT4,ICONGateTN3,ICONGateTN2,ICONGateTN4,
  ICONGateTN1,IRestaurant1
  } from "./component";

import html from "./html";
const page = (context) => {
  console.log(context.searchParams.id);
  
  useEffect(() => {
    if (context.searchParams.id === "ICheckin_TN") {
      ICheckin_TN()
    }
    else if (context.searchParams.id === "ICheckin_TN1"){
      ICheckin_TN1()
    }
    else if (context.searchParams.id === "ICONCheckin_TN"){
      ICONCheckin_TN()
    }
    else if (context.searchParams.id === "ICONCheckin_TN1"){
      ICONCheckin_TN1()
    }
    else if (context.searchParams.id === "ICONCheckin_TN2"){
      ICONCheckin_TN2()
    }
    else if (context.searchParams.id === "ICONCheckin_TN3()"){
      ICONCheckin_TN3()
    }
    else if (context.searchParams.id === "ICheckin_QT"){
      ICheckin_QT()
    }
    else if (context.searchParams.id === "ICheckin_QT1"){
      ICheckin_QT1()
    }
    else if (context.searchParams.id === "ICONCheckin_QT"){
      ICONCheckin_QT()
    }
    else if (context.searchParams.id === "ICONCheckin_QT1"){
      ICONCheckin_QT1()
    }
    else if (context.searchParams.id === "ICONCheckin_QT2"){
      ICONCheckin_QT2()
    }
    else if (context.searchParams.id === "ICONCheckin_QT3"){
      ICONCheckin_QT3()
    }
    else if (context.searchParams.id === "ITolet_TN1"){
      ITolet_TN1()
    }
    else if (context.searchParams.id === "ICONIToletTN1"){
      ICONIToletTN1()
    }
    else if (context.searchParams.id === "ITolet_TN3"){
      ITolet_TN3()
    }
    else if (context.searchParams.id === "ICONIToletTN3"){
      ICONIToletTN3()
    }
    else if (context.searchParams.id === "ITolet_QT1"){
      ITolet_QT1()
    }
    else if (context.searchParams.id === "ICONIToletQT1"){
      ICONIToletQT1()
    }
    else if (context.searchParams.id === "ISmokingTN"){
      ISmokingTN()
    }
    else if (context.searchParams.id === "ICONISmokingTN"){
      ICONISmokingTN()
    }
    else if (context.searchParams.id === "ISmokingQT"){
      ISmokingQT()
    }
    else if (context.searchParams.id === "ICONISmokingQT"){
      ICONISmokingQT()
    }
    else if (context.searchParams.id === "ISCC"){
      ISCC()
    }
    else if (context.searchParams.id === "ICONISCC"){
      ICONISCC()
    }
    else if (context.searchParams.id === "ISCCQT"){
      ISCCQT()
    }
    else if (context.searchParams.id === "ICONISCCQT"){
      ICONISCCQT()
    }
    else if (context.searchParams.id === "IECC"){
      IECC()
    }
    else if (context.searchParams.id === "ICONIECC"){
      ICONIECC()
    }
    else if (context.searchParams.id === "IMedical"){
      IMedical()
    }
    else if (context.searchParams.id === "ICONIMedical"){
      ICONIMedical()
    }
    else if (context.searchParams.id === "IRestaurant1"){
      IRestaurant1()
    }
    else if (context.searchParams.id === "ICONIDRestaurant1"){
      ICONIDRestaurant1()
    }
    else if (context.searchParams.id === "ICONIRestaurant1"){
      ICONIRestaurant1()
    }
    else if (context.searchParams.id === "IRestaurant2"){
      IRestaurant2()
    }
    else if (context.searchParams.id === "ICONIDRestaurant2"){
      ICONIDRestaurant2()
    }
    else if (context.searchParams.id === "ICONIRestaurant2"){
      ICONIRestaurant2()
    }
    else if (context.searchParams.id === "IRestaurant3"){
      IRestaurant3()
    }
    else if (context.searchParams.id === "ICONIDRestaurant3"){
      ICONIDRestaurant3()
    }
    else if (context.searchParams.id === "ICONIRestaurant3"){
      ICONIRestaurant3()
    }
    else if (context.searchParams.id === "ICONAC1"){
      ICONAC1()
    }
    else if (context.searchParams.id === "ICONAC2"){
      ICONAC2()
    }
    else if (context.searchParams.id === "ICONAC3"){
      ICONAC3()
    }
    else if (context.searchParams.id === "IStair1"){
      IStair1()
    }
    else if (context.searchParams.id === "ICONIStair1"){
      ICONIStair1()
    }
    else if (context.searchParams.id === "IStair2"){
      IStair2()
    }
    else if (context.searchParams.id === "ICONIStair2"){
      ICONIStair2()
    }
    else if (context.searchParams.id === "IElevatorSC"){
      IElevatorSC()
    }
    else if (context.searchParams.id === "ICONIElevatorSC"){
      ICONIElevatorSC()
    }
    else if (context.searchParams.id === "ICONGateQT1"){
      ICONGateQT1()
    }
    else if (context.searchParams.id === "ICONGateQT3"){
      ICONGateQT3()
    }
    else if (context.searchParams.id === "ICONGateQT2"){
      ICONGateQT2()
    }
    else if (context.searchParams.id === "ICONGateQT4"){
      ICONGateQT4()
    }
    else if (context.searchParams.id === "ICONGateTN3"){
      ICONGateTN3()
    }
    else if (context.searchParams.id === "ICONGateTN2"){
      ICONGateTN2()
    }
    else if (context.searchParams.id === "ICONGateTN4"){
      ICONGateTN4()
    }
    else if (context.searchParams.id === "ICONGateTN1"){
      ICONGateTN1()
    }
    
  });
  return (
    html()
  );
};

export default page;
