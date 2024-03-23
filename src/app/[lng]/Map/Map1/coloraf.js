"use client";
import $ from "jquery";

export function coloraf() {
    for (var i = 1; i <= 49; i++) {
      var a = "#DD" + i.toString();
      $(a).removeClass("ddcolorbf");
    }
    $("#ICheckin-TN").css("fill", "YELLOW");
    $("#ICheckin-TN1").css("fill", "YELLOW");
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
    $("#IGate-QT1").css("fill", "NONE");
    $("#IGate-QT2").css("fill", "NONE");
    $("#IGate-QT3").css("fill", "NONE");
    $("#IGate-QT4").css("fill", "NONE");
    $("#IGate-TN1").css("fill", "NONE");
    $("#IGate-TN2").css("fill", "NONE");
    $("#IGate-TN3").css("fill", "NONE");
    $("#IGate-TN4").css("fill", "NONE");
    $("#ICheckin-QT").css("fill", "YELLOW");
    $("#ICheckin-QT1").css("fill", "YELLOW");
  }