"use client";
import $ from "jquery";
import { coloraf } from "./coloraf";

export function IATM() {
  $("#Robot").finish();
  coloraf();
  $("#DD3").show().addClass("ddcolorbf");
  $("#DD9").show().addClass("ddcolorbf");
  $("#DD11").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1115},4000);
  $("#Robot").animate({'y': 790},3000);
  $("#Robot").animate({'x': 1300},4000);
  $("#Robot").delay(10000).animate({'x': 1115},4000);
  $("#Robot").animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD3").delay(35000).hide("ddcolorbf");
  $("#DD9").delay(35000).hide("ddcolorbf");
  $("#DD11").delay(35000).hide("ddcolorbf");
}
export function IToilet_TN1() {
  $("#Robot").finish();
  coloraf();
  $("#DD2").show().addClass("ddcolorbf");
  $("#DD6").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1390},4000);
  $("#Robot").animate({'y': 480},3000);
  $("#Robot").delay(10000).animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD2").delay(27000).hide("ddcolorbf");
  $("#DD6").delay(27000).hide("ddcolorbf");
}
export function IToilet_TN2() {
  $("#Robot").finish();
  coloraf();
  $("#DD1").show().addClass("ddcolorbf");
  $("#DD5").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1590},4000);
  $("#Robot").animate({'y': 480},3000);
  $("#Robot").delay(10000).animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD1").delay(27000).hide("ddcolorbf");
  $("#DD5").delay(27000).hide("ddcolorbf");
}
export function ISCC() {
  $("#Robot").finish();
  coloraf();
  $("#DD1").show().addClass("ddcolorbf");
  $("#DD4").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1590},4000);
  $("#Robot").animate({'y': 280},3000);
  $("#Robot").delay(10000).animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD1").delay(27000).hide("ddcolorbf");
  $("#DD4").delay(27000).hide("ddcolorbf");
}
export function ILuggage_TN() {
  $("#Robot").finish();
  coloraf();
  $("#DD2").show().addClass("ddcolorbf");
  $("#DD7").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1390},4000);
  $("#Robot").animate({'y': 265},3000);
  $("#Robot").delay(10000).animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD2").delay(27000).hide("ddcolorbf");
  $("#DD7").delay(27000).hide("ddcolorbf");
}
export function IRestaurant() {
  $("#Robot").finish();
  coloraf();
  $("#DD3").show().addClass("ddcolorbf");
  $("#DD8").show().addClass("ddcolorbf");
  $("#DD13").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1115},4000);
  $("#Robot").animate({'y': 635},3000);
  $("#Robot").animate({'x': 930},4000);
  $("#Robot").delay(10000).animate({'x': 1115},4000);
  $("#Robot").animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD3").delay(35000).hide("ddcolorbf");
  $("#DD8").delay(35000).hide("ddcolorbf");
  $("#DD13").delay(35000).hide("ddcolorbf");
}
export function IElevatorSC(){
  $("#Robot").finish();
  coloraf();
  $("#DD3").show().addClass("ddcolorbf");
  $("#DD8").show().addClass("ddcolorbf");
  $("#DD13").show().addClass("ddcolorbf");
  $("#DD15").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1115},4000);
  $("#Robot").animate({'y': 635},3000);
  $("#Robot").animate({'x': 930},4000);
  $("#Robot").animate({'y': 715},3000);
  $("#Robot").delay(10000).animate({'y': 635},3000);
  $("#Robot").animate({'x': 1115},4000);
  $("#Robot").animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD3").delay(43000).hide("ddcolorbf");
  $("#DD8").delay(43000).hide("ddcolorbf");
  $("#DD13").delay(43000).hide("ddcolorbf");
  $("#DD15").delay(43000).hide("ddcolorbf");
}
export function IStair1(){
  $("#Robot").finish();
  coloraf();
  $("#DD3").show().addClass("ddcolorbf");
  $("#DD8").show().addClass("ddcolorbf");
  $("#DD14").show().addClass("ddcolorbf");
  $("#DD16").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1115},4000);
  $("#Robot").animate({'y': 635},3000);
  $("#Robot").animate({'x': 720},4000);
  $("#Robot").animate({'y': 800},3000);
  $("#Robot").delay(10000).animate({'y': 635},3000);
  $("#Robot").animate({'x': 1115},4000);
  $("#Robot").animate({'y': 340},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD3").delay(43000).hide("ddcolorbf");
  $("#DD8").delay(43000).hide("ddcolorbf");
  $("#DD14").delay(43000).hide("ddcolorbf");
  $("#DD16").delay(43000).hide("ddcolorbf");
}
export function IStair2(){
  $("#Robot").finish();
  coloraf();
  $("#DD3").show().addClass("ddcolorbf");
  $("#DD9").show().addClass("ddcolorbf");
  $("#Robot").delay(1000).animate({'x': 1115},4000);
  $("#Robot").animate({'y': 790},3000);
  $("#Robot").delay(10000).animate({'y': 345},3000);
  $("#Robot").animate({'x': 1820},4000);
  $("#DD3").delay(27000).hide("ddcolorbf");
  $("#DD9").delay(27000).hide("ddcolorbf");
}
export function Exit_1(){
    $("#Robot").finish();
    coloraf();
    $("#DD3").show().addClass("ddcolorbf");
    $("#DD9").show().addClass("ddcolorbf");
    $("#DD10").show().addClass("ddcolorbf");
    $("#DD12").show().addClass("ddcolorbf");
    $("#Robot").delay(1000).animate({'x': 1115},4000);
    $("#Robot").animate({'y': 790},3000);
    $("#Robot").animate({'x': 1200},4000);
    $("#Robot").animate({'y': 840},3000);
    $("#Robot").delay(10000).animate({'y': 790},3000);
    $("#Robot").animate({'x': 1115},4000);
    $("#Robot").animate({'y': 340},3000);
    $("#Robot").animate({'x': 1820},4000);
    $("#DD3").delay(41000).hide("ddcolorbf");
    $("#DD9").delay(41000).hide("ddcolorbf");
    $("#DD10").delay(41000).hide("ddcolorbf");
    $("#DD12").delay(41000).hide("ddcolorbf");
}
export function Exit_2(){
    $("#Robot").finish();
    coloraf();
    $("#DD3").show().addClass("ddcolorbf");
    $("#DD8").show().addClass("ddcolorbf");
    $("#DD14").show().addClass("ddcolorbf");
    $("#DD16").show().addClass("ddcolorbf");
    $("#DD17").show().addClass("ddcolorbf");
    $("#DD18").show().addClass("ddcolorbf");
    $("#Robot").delay(1000).animate({'x': 1115},4000);
    $("#Robot").animate({'y': 635},3000);
    $("#Robot").animate({'x': 720},4000);
    $("#Robot").animate({'y': 790},3000);
    $("#Robot").animate({'x': 640},4000);
    $("#Robot").animate({'y': 850},3000);
    $("#Robot").delay(10000).animate({'y': 790},3000);
    $("#Robot").animate({'x': 720},4000);
    $("#Robot").animate({'y': 635},3000);
    $("#Robot").animate({'x': 1115},4000);
    $("#Robot").animate({'y': 340},3000);
    $("#Robot").animate({'x': 1820},4000);
    $("#DD3").delay(55000).hide("ddcolorbf");
    $("#DD8").delay(55000).hide("ddcolorbf");
    $("#DD14").delay(55000).hide("ddcolorbf");
    $("#DD16").delay(55000).hide("ddcolorbf");
    $("#DD17").delay(55000).hide("ddcolorbf");
    $("#DD18").delay(55000).hide("ddcolorbf");
}
