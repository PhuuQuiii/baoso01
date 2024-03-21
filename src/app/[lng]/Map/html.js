"use client";
import React from 'react'
const html = () => {
  return (



    <div className="flex items-center justify-center h-screen">
      {/* <iframe
        className="w-full h-full"
        src="/index.html"
        title="Fullscreen HTML"
      /> */}
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          type="text/css"
          rel="stylesheet"
          charSet="UTF-8"
          href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.qhDXWpKopYk.L.W.O/am=wA/d=0/rs=AN8SPfq5gedF4FIOWZgYyMCNZA5tU966ig/m=el_main_css"
        />
        {/* <link href="css/header.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" /> */}
        <title>Map ga di</title>
        <header className="btn-group">
          <div className="dropdown" style={{ padding: 0 }}>
            <button
              onclick="myFunction()"
              className="dropbtn"
              style={{ marginRight: 30 }}
            >
              <i className="fa fa-bars" />
            </button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#" id="Checkin-TN">
                Quầy thủ tục nội địa - Domestic Check-in Counter
              </a>
              <a href="#" id="Checkin-QT">
                Quầy thủ tục quốc tế - International Check-in Counter
              </a>
              <a href="#" id="Tolet-TN">
                Nhà vệ sinh (ga quốc nội) - Tolet (Domestic)
              </a>
              <a href="#" id="Tolet-QT">
                Nhà vệ sinh (ga quốc tế) - Tolet (International)
              </a>
              <a href="#" id="Smoking">
                Khu hút thuốc - Smoking Area
              </a>
              <a href="#" id="SCC">
                Quầy kiểm tra an ninh nội địa - Domestic Security Check
              </a>
              <a href="#" id="SCCQT">
                Quầy kiểm tra an ninh quốc tế - International Security Check
              </a>
              <a href="#" id="ECC">
                Quầy Kiểm tra hộ chiếu - Passport Control
              </a>
              <a href="#" id="Medical">
                Y tế - Firt-Aids
              </a>
              <a href="#" id="Restaurant">
                Nhà hàng - Restaurant
              </a>
              <a href="#" id="AC1">
                Quầy hãng hàng không 1 - Airline 1
              </a>
              <a href="#" id="AC2">
                Quầy hãng hàng không 2 - Airline 2
              </a>
              <a href="#" id="AC3">
                Quầy hãng hàng không 3 - Airline 3
              </a>
              <a href="#" id="ElevatorSC">
                Thang máy - Elevator
              </a>
              <a href="#" id="Stair1">
                Thang bộ 1 - Stair 1
              </a>
              <a href="#" id="Stair2">
                Thang bộ 2 - Stair 2
              </a>
              <a href="#" id="Gate-QT">
                Các cửa khởi hành quốc tế - International Gate
              </a>
              <a href="#" id="Gate-TN">
                Các cửa khởi hành nội địa - Domestic Gate
              </a>
            </div>
          </div>
          <div>
            <a href="index2.html">
              <button className="dropbtn" style={{ marginRight: 30 }}>
                <i className="fa-solid fa-g" style={{ color: "#ffffff" }} />
              </button>
            </a>
          </div>
        </header>
        <div style={{ backgroundColor: "#E7EDFC", textAlign: "center" }}>
          <svg
            version="1.1"
            width="95%"
            height="900px"
            viewBox="0 0 1860 945"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "auto" }}
          >
            <path
              d="M3,4 42,4 42,306 170,306 170,120 125,120 125,70 540,70 540,218 577,218 577,310 630,310 630,260 832,260 832,620 1030,620 1030,260 1218,260 1218,235 1295,235 1295,310 1390,310 1390,175 1368,175 1368,70 1738,70 1738,120 1700,120 1700,230 1660,230 1660,305 1760,305 1760,240 1820,240 1820,4 1856,4 1856,610 1335,610 1335,920 1255,920 1255,912 1218,912 1218,920 1083,920 1083,780 775,780 775,920 642,920 642,912 605,912 605,920 530,920 530,610 4,610 4,4"
              fill="white"
              stroke="none"
              strokeWidth={1}
            />
            <path
              d="M624,905 630,929 625,929 625,941 623,941 623,929 619,929 624,905"
              fill="red"
              stroke="red"
              strokeWidth={1}
            />
            <path
              d="M1238,905 1244,929 1239,929 1239,941 1237,941 1237,929 1232,929 1238,905"
              fill="red"
              stroke="red"
              strokeWidth={1}
            />
            <path
              d="M0,519 H543 
          M240,307 V519 
          M240,308 H580 
          M543,571.1 H835 
          M1029,571.1 H1334 
          M530,599.3 H543 
          M1316,520.2 H1860 
          M1389,309 H1481
          M45,519 V611 
          M91,519 V611 
          M238,519 V611 
          M278,519 V611 
          M319,519 V611 
          M394,519 V611 
          M445,519 V611 
          M494,519 V611 
          M530,599 V611 
          M543,216 V600 
          M731,569 V580 
          M746,569 V580 
          M763,569 V580 
          M778,569 V580 
          M1084,569 V580 
          M1098,569 V580 
          M1114,569 V580 
          M1128,569 V580
          M1316,519 V570
          M1334,569 V610
          M1390,309 V519
          M1468,519 V612
          M1508,519 V612
          M1583,519 V612
          M1622,519 V612
          M1768,519 V612
          M1815.1,519 V612
          M1480,309 V519
          M1467.3,64 V309
          M1390.6,64 V309
          M469.8,64 V309
          M1234.4,232 V282
          M1234.4,281 H1300
          M345.4,308 V519
          "
              stroke="#E7EDFC"
              strokeWidth={3}
            />
            <text
              x={640}
              y={375}
              style={{ font: "25px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="ICheckin-QT" fontWeight="bold" fill="yellow">
                QUẦY THỦ TỤC
              </tspan>
            </text>
            <text
              x={650}
              y={400}
              style={{ font: "19px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="ICheckin-QT1" fontWeight="bold" fill="yellow">
                Check-in Counters
              </tspan>
            </text>
            <text
              x={1025}
              y={375}
              style={{ font: "25px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="ICheckin-TN" fontWeight="bold" fill="yellow">
                QUẦY THỦ TỤC
              </tspan>
            </text>
            <text
              x={1030}
              y={400}
              style={{ font: "19px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="ICheckin-TN1" fontWeight="bold" fill="yellow">
                Check-in Counters
              </tspan>
            </text>
            <text
              x={585}
              y={900}
              style={{ font: "19px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan fontWeight="bold" fill="red">
                Lối vào
              </tspan>
            </text>
            <text
              x={1200}
              y={900}
              style={{ font: "19px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan fontWeight="bold" fill="red">
                Lối vào
              </tspan>
            </text>
            <text
              x={610}
              y={500}
              style={{ font: "22px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan fontWeight="bold" fill="#BFCFDF">
                Ga quốc tế
              </tspan>
            </text>
            <text
              x={550}
              y={530}
              style={{ font: "22px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan fontWeight="bold" fill="#BFCFDF">
                International terminal
              </tspan>
            </text>
            <text
              x={1090}
              y={500}
              style={{ font: "22px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan fontWeight="bold" fill="#BFCFDF">
                Ga quốc nội
              </tspan>
            </text>
            <text
              x={1050}
              y={530}
              style={{ font: "22px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan fontWeight="bold" fill="#BFCFDF">
                Domestic terminal
              </tspan>
            </text>
            <text
              x={13}
              y={103}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-QT1" fontWeight="bold" fill="NONE">
                ⬆
              </tspan>
            </text>
            <text
              x={60}
              y={330}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-QT2" fontWeight="bold" fill="NONE">
                ⬆
              </tspan>
            </text>
            <text
              x={175}
              y={108}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-QT3" fontWeight="bold" fill="NONE">
                ⬅
              </tspan>
            </text>
            <text
              x={427}
              y={145}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-QT4" fontWeight="bold" fill="NONE">
                ⬆
              </tspan>
            </text>
            <text
              x={1827}
              y={103}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-TN1" fontWeight="bold" fill="NONE">
                ⬆
              </tspan>
            </text>
            <text
              x={1670}
              y={330}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-TN2" fontWeight="bold" fill="NONE">
                ⬆
              </tspan>
            </text>
            <text
              x={1650}
              y={108}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-TN3" fontWeight="bold" fill="NONE">
                ⮕
              </tspan>
            </text>
            <text
              x={1490}
              y={145}
              style={{ font: "40px Verdana, Helvetica, Arial, sans-serif" }}
            >
              <tspan id="IGate-TN4" fontWeight="bold" fill="NONE">
                ⬆
              </tspan>
            </text>
            {/*KHU VUC*/}
            <rect
              id="IECC"
              x={347}
              y="309.6"
              width="193.9"
              height={208}
              stroke="transparent"
              fill="#F8F9FA"
              strokeWidth={1}
            />
            <rect
              id="ISCC"
              x={1391}
              y={310}
              width="87.2"
              height="208.3"
              stroke="transparent"
              fill="#F8F9FA"
              strokeWidth={1}
            />
            <rect
              id="ISCCQT"
              x="241.8"
              y="309.6"
              width="101.7"
              height={208}
              stroke="transparent"
              fill="#F8F9FA"
              strokeWidth={1}
            />
            {/*red*/}
            <rect
              x={4}
              y={520}
              width={40}
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x={46}
              y={520}
              width={45}
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x="278.7"
              y={520}
              width="39.3"
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x="319.2"
              y={520}
              width={74}
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x={395}
              y={520}
              width={50}
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x="446.5"
              y={520}
              width="46.5"
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <path
              d="M494.9,520 541.7,520 541.7,598.3 529,598.3 529,610 494.9,610"
              fill="#FCE8E6"
              stroke="transparent"
              strokeWidth={1}
            />
            <rect
              x="647.4"
              y={177}
              width="51.5"
              height="80.5"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x="1161.6"
              y="178.5"
              width={54}
              height={79}
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x="1816.6"
              y="521.7"
              width="39.4"
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            <rect
              x={1769}
              y="521.7"
              width="44.8"
              height="89.9"
              stroke="transparent"
              fill="#FCE8E6"
              strokeWidth={1}
            />
            {/*green*/}
            <rect
              x={12}
              y={412}
              width={152}
              height={82}
              stroke="transparent"
              fill="#00FF00"
              strokeWidth={1}
            />
            <rect
              id="IRestaurant1"
              x={554}
              y={674}
              width={41}
              height={99}
              stroke="transparent"
              fill="#00FF00"
              strokeWidth={1}
            />
            <rect
              id="IRestaurant2"
              x={1264}
              y={663}
              width={47}
              height={119}
              stroke="transparent"
              fill="#00FF00"
              strokeWidth={1}
            />
            <rect
              id="IRestaurant3"
              x={1470}
              y={522}
              width={37}
              height="89.9"
              stroke="transparent"
              fill="#00FF00"
              strokeWidth={1}
            />
            <rect
              x={1696}
              y={414}
              width={153}
              height={77}
              stroke="transparent"
              fill="#00FF00"
              strokeWidth={1}
            />
            <rect
              x={389}
              y={322}
              width={35}
              height={22}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              x={389}
              y={366}
              width={35}
              height={22}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              x={389}
              y={410}
              width={35}
              height={22}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              x={389}
              y={451}
              width={35}
              height={22}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              id="IAC1"
              x={986}
              y={622}
              width={40}
              height={38}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              id="IAC2"
              x={1031}
              y={576}
              width={40}
              height={38}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              id="IAC3"
              x={1173}
              y={576}
              width={40}
              height={38}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              x={1289}
              y={613}
              width={22}
              height={43}
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              id="ISmokingQT"
              x="239.4"
              y={520}
              width={37}
              height="89.9"
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              id="ISmokingTN"
              x="1584.5"
              y="521.7"
              width={37}
              height="89.9"
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              id="IMedical"
              x="1235.8"
              y={235}
              width="59.2"
              height="44.3"
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            {/*Blue*/}
            <rect
              id="ITolet-QT1"
              x="92.3"
              y={520}
              width="144.8"
              height="89.9"
              stroke="transparent"
              fill="#E0E5FF"
              strokeWidth={1}
            />
            <rect
              id="ITolet-QT2"
              x="543.4"
              y="218.6"
              width="33.6"
              height={40}
              stroke="transparent"
              fill="#E0E5FF"
              strokeWidth={1}
            />
            <path
              id="ITolet-TN1"
              d="M1317.5,521.7 1466.7,521.7 1466.7,610 1334.8,610 1334.8,570.6 1317.5,570.6"
              stroke="transparent"
              fill="#E0E5FF"
              strokeWidth={1}
            />
            <rect
              id="ITolet-TN2"
              x={1368}
              y="111.8"
              width="21.4"
              height="63.2"
              stroke="transparent"
              fill="#E0E5FF"
              strokeWidth={1}
            />
            <rect
              id="ITolet-TN3"
              x={1623}
              y="521.7"
              width="144.4"
              height="89.9"
              stroke="transparent"
              fill="#E0E5FF"
              strokeWidth={1}
            />
            <rect
              x={471}
              y="69.1"
              width="70.3"
              height="238.5"
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            <rect
              x="1392.1"
              y="69.1"
              width={74}
              height="238.5"
              stroke="transparent"
              fill="Moccasin"
              strokeWidth={1}
            />
            {/*thang may,cuon,bo*/}
            <path
              d="M53,93 60,233 78,233 87,93 50,93"
              fill="#F1F3F4"
              stroke="#F1F3F4"
              strokeWidth={5}
            />
            <rect
              x="97.5"
              y={125}
              width={20}
              height={30}
              stroke="pink"
              fill="pink"
              strokeWidth={5}
            />
            <path
              d="M130,125 124,267 155,267 149,128 130,128"
              fill="#F1F3F4"
              stroke="#F1F3F4"
              strokeWidth={5}
            />
            <path
              d="M1812,95 1805,233 1790,233 1784,95 1814,95"
              fill="#F1F3F4"
              stroke="#F1F3F4"
              strokeWidth={5}
            />
            <rect
              x={1742}
              y={127}
              width={25}
              height={33}
              stroke="pink"
              fill="pink"
              strokeWidth={5}
            />
            <path
              d="M1714,127 1710,265 1735,265 1729,127 1712,127"
              fill="#F1F3F4"
              stroke="#F1F3F4"
              strokeWidth={5}
            />
            <path
              id="IStair1"
              d="M785,854 876,863 876,884 785,893 785,852"
              fill="#F1F3F4"
              stroke="#F1F3F4"
              strokeWidth={5}
            />
            <rect
              id="IElavatorSC"
              x={916}
              y={785}
              width={28}
              height={36}
              stroke="none"
              fill="pink"
              strokeWidth={1}
            />
            <path
              id="IStair2"
              d="M1073,854 984,863 984,884, 1073,893, 1073,852"
              fill="#F1F3F4"
              stroke="#F1F3F4"
              strokeWidth={5}
            />
            {/*Icon gate*/}
            <image
              id="ICONGateQT1"
              href="/icon/gate.png"
              x={0}
              y={27}
              height="50px"
              width="50px"
            />
            <image
              id="ICONGateQT3"
              href="/icon/gate.png"
              x={122}
              y={70}
              height="50px"
              width="50px"
            />
            <image
              id="ICONGateQT2"
              href="/icon/gate.png"
              x={47}
              y={250}
              height="50px"
              width="50px"
            />
            <image
              id="ICONGateQT4"
              href="/icon/gate.png"
              x={413}
              y={70}
              height="50px"
              width="50px"
            />
            <image
              id="ICONGateTN1"
              href="/icon/gate.png"
              x={1810}
              y={27}
              height="50px"
              width="50px"
            />
            <image
              id="ICONGateTN2"
              href="/icon/gate.png"
              x={1690}
              y={70}
              height="50px"
              width="50px"
            />
            <image
              id="ICONGateTN3"
              href="/icon/gate.png"
              x={1656}
              y={252}
              height="50px"
              width="50px"
            />
            <image
              id="ICONGateTN4"
              href="/icon/gate.png"
              x={1475}
              y={70}
              height="50px"
              width="50px"
            />
            {/*Icon stains*/}
            <image
              href="/icon/escalator.png"
              x={44}
              y={110}
              height="50px"
              width="50px"
            />
            <image
              href="/icon/escalator.png"
              x={115}
              y={202}
              height="50px"
              width="50px"
            />
            <image
              href="/icon/escalator.png"
              x={1774}
              y={110}
              height="50px"
              width="50px"
            />
            <image
              href="/icon/escalator.png"
              x={1700}
              y={188}
              height="50px"
              width="50px"
            />
            <image
              href="/icon/elevator.png"
              x={1730}
              y={126}
              height="50px"
              width="50px"
            />
            <image
              href="/icon/elevator.png"
              x={82}
              y={123}
              height="50px"
              width="50px"
            />
            <image
              id="ICONIElevatorSC"
              href="/icon/elevator.png"
              x={906}
              y={787}
              height="50px"
              width="50px"
            />
            <image
              id="ICONIStair1"
              href="/icon/going-up.png"
              x={798}
              y={840}
              height="50px"
              width="50px"
            />
            <image
              id="ICONIStair2"
              href="/icon/going-up.png"
              x={1020}
              y={840}
              height="50px"
              width="50px"
            />
            {/*Icon toilet & smoking*/}
            <image
              id="ICONIToletQT1"
              href="/icon/toilet.png"
              x={141}
              y={543}
              height="50px"
              width="50px"
            />
            <image
              href="/icon/toilet.png"
              x={544}
              y={195}
              height="50px"
              width="50px"
            />
            <image
              href="/icon/toilet.png"
              x={1344}
              y={125}
              height="50px"
              width="50px"
            />
            <image
              id="ICONIToletTN1"
              href="/icon/toilet.png"
              x={1373}
              y={543}
              height="50px"
              width="50px"
            />
            <image
              id="ICONIToletTN3"
              href="/icon/toilet.png"
              x={1671}
              y={543}
              height="50px"
              width="50px"
            />
            <image
              id="ICONISmokingQT"
              href="/icon/smoking.png"
              x={232}
              y={530}
              height="50px"
              width="50px"
            />
            <image
              id="ICONISmokingTN"
              href="/icon/smoking.png"
              x={1578}
              y={530}
              height="50px"
              width="50px"
            />
            {/*Icon Food & Drinks*/}
            <image
              id="ICONIRestaurant1"
              href="/icon/dinner.png"
              x={554}
              y={674}
              height="42px"
              width="42px"
            />
            <image
              id="ICONIRestaurant2"
              href="/icon/dinner.png"
              x={1267}
              y={664}
              height="42px"
              width="42px"
            />
            <image
              id="ICONIRestaurant3"
              href="/icon/dinner.png"
              x={1465}
              y={523}
              height="42px"
              width="42px"
            />
            <image
              id="ICONIDRestaurant1"
              href="/icon/chocolate.png"
              x={554}
              y={720}
              height="42px"
              width="42px"
            />
            <image
              id="ICONIDRestaurant2"
              href="/icon/chocolate.png"
              x={1267}
              y={720}
              height="42px"
              width="42px"
            />
            <image
              id="ICONIDRestaurant3"
              href="/icon/chocolate.png"
              x={1465}
              y={560}
              height="42px"
              width="42px"
            />
            {/*Icon airport*/}
            <image
              id="ICONISCCQT"
              href="/icon/scanner.png"
              x={258}
              y={350}
              height="70px"
              width="70px"
            />
            <image
              id="ICONISCC"
              href="/icon/scanner.png"
              x={1390}
              y={370}
              height="70px"
              width="70px"
            />
            <image
              id="ICONIECC"
              href="/icon/checking.png"
              x={378}
              y={375}
              height="40px"
              width="40px"
            />
            <image
              id="ICONAC1"
              href="/icon/airplane.png"
              x={975}
              y={605}
              height="60px"
              width="60px"
            />
            <image
              id="ICONAC2"
              href="/icon/airplane.png"
              x={1022}
              y={560}
              height="60px"
              width="60px"
            />
            <image
              id="ICONAC3"
              href="/icon/airplane.png"
              x={1164}
              y={560}
              height="60px"
              width="60px"
            />
            <image
              id="ICONCheckin-QT"
              href="/icon/customer-service.png"
              x={650}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONCheckin-QT1"
              href="/icon/customer-service.png"
              x={696}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONCheckin-QT2"
              href="/icon/customer-service.png"
              x={744}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONCheckin-QT3"
              href="/icon/customer-service.png"
              x={790}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONCheckin-TN"
              href="/icon/customer-service.png"
              x={1176}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONCheckin-TN1"
              href="/icon/customer-service.png"
              x={1130}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONCheckin-TN2"
              href="/icon/customer-service.png"
              x={1082}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONCheckin-TN3"
              href="/icon/customer-service.png"
              x={1036}
              y={295}
              height="50px"
              width="50px"
            />
            <image
              id="ICONIMedical"
              href="/icon/first-aid-kit.png"
              x={1240}
              y={220}
              height="50px"
              width="50px"
            />
            {/*Đường dẫn*/}
            <rect
              id="DD1"
              x="703.5"
              y={700}
              height="5px"
              width="540px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD2"
              x={610}
              y={700}
              height="5px"
              width="93.5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD3"
              x={445}
              y={415}
              height="5px"
              width="310px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD4"
              x={295}
              y={492}
              height="5px"
              width="460px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD5"
              x={255}
              y={492}
              height="5px"
              width="500px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD6"
              x={200}
              y={492}
              height="5px"
              width="555px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD7"
              x="1241.5"
              y={590}
              height="5px"
              width="80px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD8"
              x="705.5"
              y={700}
              height="5px"
              width="303px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD9"
              x="705.5"
              y={700}
              height="5px"
              width="348px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD10"
              x={1104}
              y={415}
              height="5px"
              width="265px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD11"
              x={1104}
              y={490}
              height="5px"
              width="385px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD12"
              x={1104}
              y={490}
              height="5px"
              width="500px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD13"
              x={1104}
              y={490}
              height="5px"
              width="555px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD14"
              x={1104}
              y={490}
              height="5px"
              width="521px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD15"
              x={1104}
              y={490}
              height="5px"
              width="555px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD16"
              x="705.5"
              y={700}
              height="5px"
              width="490px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD17"
              x="705.5"
              y={700}
              height="5px"
              width="403.5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD18"
              x={1550}
              y={95}
              height="5px"
              width="75px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD19"
              x={1620}
              y={95}
              height="5px"
              width="45px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD20"
              x={1620}
              y={330}
              height="5px"
              width="221px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD21"
              x={200}
              y={100}
              height="5px"
              width="185px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD22"
              x={20}
              y={325}
              height="5px"
              width="185px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD23"
              x="703.5"
              y={755}
              height="5px"
              width="225px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD24"
              x="703.5"
              y={755}
              height="5px"
              width="405px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD25"
              x="703.5"
              y={875}
              height="5px"
              width="45px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD45"
              x="703.5"
              y={700}
              height="5px"
              width="51.5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD46"
              x={70}
              y={325}
              height="5px"
              width="135px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD48"
              x={1104}
              y={415}
              height="5px"
              width="163px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD26"
              x="703.5"
              y={700}
              height="203px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD27"
              x="703.5"
              y={875}
              height="28px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD28"
              x="703.5"
              y={755}
              height="148px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD29"
              x="1103.6"
              y={755}
              height="115px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD30"
              x={750}
              y={415}
              height="290px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD31"
              x={750}
              y={492}
              height="213px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD32"
              x="1241.5"
              y={590}
              height="115px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD33"
              x="1003.5"
              y={665}
              height="35px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD34"
              x="1048.5"
              y={619}
              height="81px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD35"
              x="1190.5"
              y={619}
              height="81px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD36"
              x={1104}
              y={415}
              height="285px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD37"
              x={295}
              y={435}
              height="62px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD38"
              x={200}
              y={330}
              height="162px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD39"
              x={200}
              y={100}
              height="392px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD40"
              x={20}
              y={90}
              height="240px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD41"
              x={1262}
              y={300}
              height="120px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD42"
              x={1620}
              y={275}
              height="220px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD43"
              x={1620}
              y={95}
              height="400px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD44"
              x={1836}
              y={95}
              height="240px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD47"
              x={1104}
              y={490}
              height="215px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            <rect
              id="DD49"
              x={1620}
              y={330}
              height="165px"
              width="5px"
              stroke="none"
              strokeWidth={1}
              className="ddcolor"
            />
            {/*Robot*/}
            <image
              id="Robot"
              href="/icon/warehouse.png"
              x={690}
              y={885}
              height="35px"
              width="35px"
            />
          </svg>
        </div>
      </>
    </div>
  )
}

export default html
