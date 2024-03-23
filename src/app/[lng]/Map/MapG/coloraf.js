"use client";
import $ from "jquery";

export function coloraf() {
    for (var i = 1; i <= 18; i++) {
    var a = "#DD" + i.toString();
    $(a).removeClass("ddcolorbf");
    }  
    $("#ICONATM").css("fill", "#000000");
    $("#ITolet-TN1").css("fill", "#E0E5FF");
    $("#ITolet-TN2").css("fill", "#E0E5FF");
    $("#ITolet-TN3").css("fill", "#E0E5FF");
    $("#ITolet-QT1").css("fill", "#E0E5FF");
    $("#ITolet-QT2").css("fill", "#E0E5FF");
    $("#ICONSCC").css("fill", "#000000");
    $("#IRestaurant1").css("fill", "#00FF00");
    $("#ILuggageTN1").css("fill", "MOCCASIN");
    $("#ILuggageTN2").css("fill", "MOCCASIN");
    $("#ILuggageQT1").css("fill", "MOCCASIN");
    $("#ILuggageQT2").css("fill", "MOCCASIN");
    $("#ICONCustoms").css("fill", "#000000");
    $("#IECC1").css("fill", "MOCCASIN");
    $("#IECC2").css("fill", "MOCCASIN");
    $("#IECC3").css("fill", "MOCCASIN");
    $("#IECC4").css("fill", "MOCCASIN");
    $("#IECC5").css("fill", "MOCCASIN");
    $("#IElavatorSC").css("fill", "PINK");
    $("#IStair1").css("fill", "#F1F3F4");
    $("#IStair2").css("fill", "#F1F3F4");
  }