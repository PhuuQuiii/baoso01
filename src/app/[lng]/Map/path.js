"use client";
import $ from "jquery";
import { coloraf } from "./coloraf";
import * as path from "./component";
$(document).ready(function () {
    $("#Checkin-TN").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#ICheckin-TN").css("fill", "#5E76F2");
      $("#ICheckin-TN1").css("fill", "#5E76F2");
    });
    $("#Checkin-QT").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#ICheckin-QT").css("fill", "#5e76f2");
      $("#ICheckin-QT1").css("fill", "#5e76f2");
    });
    $("#Tolet-QT").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#ITolet-QT1").css("fill", "#5e76f2");
      $("#ITolet-QT2").css("fill", "#5e76f2");
    });
    $("#Tolet-TN").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#ITolet-TN1").css("fill", "#5e76f2");
      $("#ITolet-TN2").css("fill", "#5e76f2");
      $("#ITolet-TN3").css("fill", "#5e76f2");
    });
    $("#Smoking").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#ISmokingQT").css("fill", "#5e76f2");
      $("#ISmokingTN").css("fill", "#5e76f2");
    });
    $("#SCC").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#ISCC").css("fill", "#5e76f2");
    });
    $("#SCCQT").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#ISCCQT").css("fill", "#5e76f2");
    });
    $("#ECC").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IECC").css("fill", "#5e76f2");
    });
    $("#Medical").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IMedical").css("fill", "#5e76f2");
    });
    $("#Restaurant").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IRestaurant1").css("fill", "#5e76f2");
      $("#IRestaurant2").css("fill", "#5e76f2");
      $("#IRestaurant3").css("fill", "#5e76f2");
    });
    $("#AC1").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IAC1").css("fill", "#5e76f2");
    });
    $("#AC2").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IAC2").css("fill", "#5e76f2");
    });
    $("#AC3").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IAC3").css("fill", "#5e76f2");
    });
    $("#ElevatorSC").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IElavatorSC").css("fill", "#5e76f2");
    });
    $("#Stair1").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IStair1").css("fill", "#5e76f2");
    });
    $("#Stair2").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IStair2").css("fill", "#5e76f2");
    });
    $("#Gate-QT").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      $("#ICheckin-TN").css("fill", "yellow");
      $("#ICheckin-TN1").css("fill", "yellow");
      $("#ITolet-QT1").css("fill", "#E0E5FF");
      $("#ITolet-QT2").css("fill", "#E0E5FF");
      $("#ITolet-TN1").css("fill", "#E0E5FF");
      $("#ITolet-TN2").css("fill", "#E0E5FF");
      $("#ITolet-TN3").css("fill", "#E0E5FF");
      $("#ISmokingTN").css("fill", "MOCCASIN");
      $("#ISmokingQT").css("fill", "MOCCASIN");
      $("#ISCC").css("fill", "#F8F9FA");
      $("#ISCCQT").css("fill", "#F8F9FA");
      $("#IECC").css("fill", "#F8F9FA");
      $("#IMedical").css("fill", "MOCCASIN");
      $("#IRestaurant1").css("fill", "#00FF00");
      $("#IRestaurant2").css("fill", "#00FF00");
      $("#IRestaurant3").css("fill", "#00FF00");
      $("#IAC1").css("fill", "MOCCASIN");
      $("#IAC2").css("fill", "MOCCASIN");
      $("#IAC3").css("fill", "MOCCASIN");
      $("#IElavatorSC").css("fill", "PINK");
      $("#IStair1").css("fill", "#F1F3F4");
      $("#IStair2").css("fill", "#F1F3F4");
      $("#IGate-TN1").css("fill", "NONE");
      $("#IGate-TN2").css("fill", "NONE");
      $("#IGate-TN3").css("fill", "NONE");
      $("#IGate-TN4").css("fill", "NONE");
      $("#ICheckin-QT").css("fill", "#YELLOW");
      $("#ICheckin-QT1").css("fill", "YELLOW");
      $("#IGate-QT1").css("fill", "#5e76f2");
      $("#IGate-QT2").css("fill", "#5e76f2");
      $("#IGate-QT3").css("fill", "#5e76f2");
      $("#IGate-QT4").css("fill", "#5e76f2");
    });
    $("#Gate-TN").click(function () {
      $("#Robot").finish();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      coloraf();
      $("#IGate-TN1").css("fill", "#5e76f2");
      $("#IGate-TN2").css("fill", "#5e76f2");
      $("#IGate-TN3").css("fill", "#5e76f2");
      $("#IGate-TN4").css("fill", "#5e76f2");
    });
    $("#ICheckin-TN").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_TN();
    });
    $("#ICheckin-TN1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_TN();
    });
    $("#ICONCheckin-TN").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_TN();
    });
    $("#ICONCheckin-TN1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_TN();
    });
    $("#ICONCheckin-TN2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_TN();
    });
    $("#ICONCheckin-TN3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_TN();
    });
    $("#ICheckin-QT").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_QT();
    });
    $("#ICheckin-QT1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_QT();
    });
    $("#ICONCheckin-QT").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_QT();

    });
    $("#ICONCheckin-QT1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_QT();
    });
    $("#ICONCheckin-QT2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_QT();
    });
    $("#ICONCheckin-QT3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICheckin_QT();
    });
  
    $("#ITolet-TN1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ITolet_TN1();
    });
    $("#ICONIToletTN1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ITolet_TN1();
    });
    $("#ITolet-TN3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ITolet_TN3();
    });
    $("#ICONIToletTN3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ITolet_TN3();
    });
    $("#ITolet-QT1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ITolet_QT1();
    });
    $("#ICONIToletQT1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ITolet_QT1();
    });
    $("#ISmokingTN").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISmokingTN();
    });
    $("#ICONISmokingTN").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISmokingTN();
    });
    $("#ISmokingQT").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISmokingQT();
    });
    $("#ICONISmokingQT").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISmokingQT();
    });
    $("#ISCC").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISCC();
    });
    $("#ICONISCC").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISCC();
    });
    $("#ISCCQT").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISCCQT();
    });
    $("#ICONISCCQT").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ISCCQT();
    });
    $("#IECC").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IECC();
    });
    $("#ICONIECC").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IECC();
    });
    $("#IMedical").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IMedical();
    });
    $("#ICONIMedical").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IMedical();
    });
    $("#IRestaurant1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant1();
    });
    $("#ICONIDRestaurant1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant1();
    });
    $("#ICONIRestaurant1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant1();
    });
    $("#IRestaurant2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant2();
    });
    $("#ICONIDRestaurant2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant2();
    });
    $("#ICONIRestaurant2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant2();
    });
    $("#IRestaurant3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant3();
    });
    $("#ICONIDRestaurant3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant3();
    });
    $("#ICONIRestaurant3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IRestaurant3();
    });
    $("#ICONAC1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONAC1();
    });
    $("#ICONAC2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONAC2();
    });
    $("#ICONAC3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONAC3();
    });
    $("#IStair1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IStair1();
    });
    $("#ICONIStair1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IStair1();
    });
    $("#IStair2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IStair2();
    });
    $("#ICONIStair2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IStair2();
    });
    $("#IElevatorSC").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IElevatorSC()
    });
    $("#ICONIElevatorSC").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.IElevatorSC()
    });
    $("#ICONGateQT1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateQT1();
    });
    $("#ICONGateQT3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateQT3();
    });
    $("#ICONGateQT2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateQT2();
    });
    $("#ICONGateQT4").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateQT4();
    });
    $("#ICONGateTN3").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateTN3();
    });
    $("#ICONGateTN2").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateTN2();
    });
    $("#ICONGateTN4").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateTN4();
    });
    $("#ICONGateTN1").click(function () {
      $("#Robot").finish();
      coloraf();
      for (var i = 1; i <= 49; i++) {
        var a = "#DD" + i.toString();
        $(a).removeClass("ddcolorbf");
      }
      path.ICONGateTN1();
    });
  });
  
  