"use client";
import $ from "jquery";
import { coloraf } from "./coloraf";
import * as path from "./component";
$(document).ready(function () {
    $("#ATM").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#ICheckin-TN").css("fill", "#5E76F2");
      $("#ICheckin-TN1").css("fill", "#5E76F2");
    });
    $("#Tolet-TN").click(function () {
      $("#Robot").finish();

      coloraf();
      $("#ICheckin-QT").css("fill", "#5e76f2");
      $("#ICheckin-QT1").css("fill", "#5e76f2");
    });
    $("#Tolet-QT").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#ITolet-QT1").css("fill", "#5e76f2");
      $("#ITolet-QT2").css("fill", "#5e76f2");
    });
    $("#SCC").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#ISCC").css("fill", "#5e76f2");
    });
    $("#ECC").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#IECC").css("fill", "#5e76f2");
    });
    $("#Restaurant").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#IRestaurant1").css("fill", "#5e76f2");
      $("#IRestaurant2").css("fill", "#5e76f2");
      $("#IRestaurant3").css("fill", "#5e76f2");
    });
    $("#Customs").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#ICONCustoms").css("fill", "#5e76f2");
    });
    $("#LuggageTN").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#ILuggageTN1").css("fill", "#5e76f2");
      $("#ILuggageTN2").css("fill", "#5e76f2");
    });
    $("#LuggageQT").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#ILuggageQT1").css("fill", "#5e76f2");
      $("#ILuggageQT2").css("fill", "#5e76f2");
    });
    $("#ElevatorSC").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#IElavatorSC").css("fill", "#5e76f2");
    });
    $("#Stair1").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#IStair1").css("fill", "#5e76f2");
    });
    $("#Stair2").click(function () {
      $("#Robot").finish();
      coloraf();
      $("#IStair2").css("fill", "#5e76f2");
    });
    $("#ICONATM").click(function () {
      path.IATM();
    });
    $("#ITolet-TN1").click(function () {
      path.IToilet_TN1();
    });
    $("#ICONIToletTN1").click(function () {
      path.IToilet_TN1();
    });
    $("#ITolet-TN2").click(function () {
      path.IToilet_TN2();
    });
    $("#ICONIToletTN2").click(function () {
      path.IToilet_TN2();
    });
    $("#ICONSCC").click(function () {
      path.ISCC();
    });
    $("#ILuggageTN1").click(function () {
      path.ILuggage_TN();
    });
    $("#ILuggageTN2").click(function () {
      path.ILuggage_TN();
    });
    $("#ICONLuggageTN").click(function () {
      path.ILuggage_TN();
    });
    $("#ICONIDRestaurant1").click(function () {
      path.IRestaurant();
    });
    $("#ICONIRestaurant1").click(function () {
      path.IRestaurant();
    });
    $("#IRestaurant1").click(function () {
      path.IRestaurant();
    });
    $("#IStair1").click(function () {
      path.IStair1();
    });
    $("#ICONIStair1").click(function () {
      path.IStair1();
    });
    $("#IStair2").click(function () {
      path.IStair2();
    });
    $("#ICONIStair2").click(function () {
      path.IStair2();
    });
    $("#IElevatorSC").click(function () {
      path.IElevatorSC()
    });
    $("#ICONIElevatorSC").click(function () {
      path.IElevatorSC()
    });
    $("#Exit1").click(function () {
      path.Exit_1();
    });
    $("#Exit2").click(function () {
      path.Exit_2();
    });
  });