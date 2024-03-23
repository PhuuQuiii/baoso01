"use client";
import React from "react";
import { myFunction } from "./onlick";
import {} from "./path";
const html = () => {
  return (
    <div style={{ backgroundColor: "#E7EDFC" }}>
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
        <title>Map ga đến</title>
        <header className="btn-group">
          <div className="dropdown" style={{ padding: 0 }}>
            <button
              onClick = {myFunction}
              className="dropbtn dropdown"
              style={{ marginRight: 30 }}
            >
              <i className="fa fa-bars" />
            </button>
            <div 
                id="myDropdown" 
                className="dropdown-content"
            >
              <a href="#" id="ATM">ATM</a>
              <a href="#" id="Tolet-TN">Nhà vệ sinh (khu nội địa) - Tolet (Domestic)</a>
              <a href="#" id="Tolet-QT">Nhà vệ sinh (khu quốc tế) - Tolet (International)</a>
              <a href="#" id="SCC">Quầy kiểm tra an ninh - Security Check</a>
              <a href="#" id="ECC">Quầy Kiểm tra hộ chiếu - Passport Control</a>
              <a href="#" id="Customs">Hải quan - Customs</a>
              <a href="#" id="Restaurant">Nhà hàng - Restaurant</a>
              <a href="#" id="LuggageTN">Quầy lấy hành lí (nội đia) - Baggage Claim (Domestic)</a>
              <a href="#" id="LuggageQT">Quầy lấy hành lí (Quốc tế) - Baggage Claim (International)</a>
              <a href="#" id="ElevatorSC">Thang máy - Elevator</a>
              <a href="#" id="Stair1">Thang bộ 1 - Stair 1</a>
              <a href="#" id="Stair2">Thang bộ 2 - Stair 2</a>
            </div>
          </div>
          <div>
            <a href="Map1">
              <button 
                className="dropbtn" 
                style={{ marginRight: 30 }}
              >
                <i 
                className="fa-solid fa-1" 
                style={{color: "#ffffff" }} 
                />
              </button>
            </a>
          </div>
        </header>
        <div 
            style={{ backgroundColor: "#E7EDFC", textAlign: "center" }}
        >
        <svg 
          version="1.1" 
          width="100%" 
          height="935px" 
          viewBox="0 0 1860 945" 
          xmlns="http://www.w3.org/2000/svg" 
          style={{overflow: "auto"}}
        >
        <path d="M1,37 H82 V136.5 
                H38 V292
                H77 V248.5
                H240 V37
                H546 V521
                H1 V493
                H85 V491
                H1 V37" 
              fill="#FFFFFF" 
              stroke="none"  
              stroke-width={1}>
        </path>
        <path d="M1859,35 H1780.5 V136.5 
                H1825 V290.5
                H1789 V248.5
                H1712 V326
                H1628 V323
                H1709 V250
                H1625 V35
                H1323 V521
                H1859 V496
                H1782 V493
                H1859 V35" 
              fill="#FFFFFF" 
              stroke="none"  
              stroke-width={1}>
        </path>
        <path d="M1321,298 H1172.5 V315.5 
                H1046 V347
                H1086 V349
                H1046 V574
                H1104.5 V567
                H1107.5 V574
                H1115.5 V567
                H1118.5 V574
                H1133.5 V567
                H1136.5 V574
                H1144.5 V567
                H1147.5 V574
                H1321 V298  " fill="#FFFFFF" stroke="none"  stroke-width={1}></path>
        <path d="M548,298 H693 V315.5 
                H821 V347
                H781 V349
                H821 V574
                H762.5 V567
                H759.5 V574
                H751.5 V567
                H748.5 V574
                H732.5 V567
                H729.5 V574
                H721.5 V567
                H718.5 V574
                H548 V298" fill="#FFFFFF" stroke="none"  stroke-width={1}></path>
        <path d="M548,577 H718.5 V584 
                H721.5 V577
                H729.5 V584
                H732.5 V577
                H748.5 V584
                H751.5 V577
                H759.5 V584
                H762.5 V577
                H821 V620
                H1046 V577
                H1104.5 V584
                H1107.5 V577
                H1115.5 V584
                H1118.5 V577
                H1133.5 V584
                H1136.5 V577
                H1144.5 V584
                H1147.5 V577
                H1321 V612
                H1340 V913
                H1280.5 V900
                H1254 V913
                H1227 V900
                H1201 V913
                H662 V900
                H636 V913
                H610 V900
                H585 V913
                H530 V611
                H548 V577
                " fill="#FFFFFF" stroke="none" stroke-width={1}></path>
        <path d="M597,887 605,926.5 599,926.5 599,943 594.6,943 594.6,926.5 588.5,926.5
                " fill="red" stroke="none" stroke-width={1}></path>
        <path id="Exit2" d="M649.5,943 658,906 652,906 652,887 647.5,887 647.5,906 640,906
                " fill="red" stroke="none" stroke-width={1}></path>
        <path d="M1267,887 1275,926.5 1269.5,926.5 1269.5,943 1265.5,943 1265.5,926.5 1259.5,926.5
                " fill="red" stroke="none" stroke-width={1}></path>
        <path id="Exit1" d="M1214.5,943 1223.5,906 1217,906 1217,887 1212,887 1212,906 1206,906 
                " fill="red" stroke="none" stroke-width={1}></path>
        <text x="610" y="500" style={{font: "22px Verdana, Helvetica, Arial, sans-serif"}}>
                <tspan font-weight="bold" fill="#BFCFDF">Ga quốc tế</tspan>
        </text>
        <text x="550" y="530" style={{font: "22px Verdana, Helvetica, Arial, sans-serif"}}>
                <tspan font-weight="bold" fill="#BFCFDF">International terminal</tspan>
        </text>
        <text x="1090" y="500" style={{font: "22px Verdana, Helvetica, Arial, sans-serif"}}>
                <tspan font-weight="bold" fill="#BFCFDF">Ga quốc nội</tspan>
        </text>
        <text x="1050" y="530" style={{font: "22px Verdana, Helvetica, Arial, sans-serif"}}>
                <tspan font-weight="bold" fill="#BFCFDF">Domestic terminal</tspan>
        </text>
      
        {/*KHU VUC*/}
       
        {/*red*/}
        <rect x={154.5} y={36.5} width="61" height="44" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="154.5" y="81.5" width="61" height="49" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="154.5" y="132" width="83.5" height="57.5" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="216.5" y="36.5" width="21.5" height="94" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="1" y="523" width="38" height="86" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="40" y="523" width="46" height="86" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="233" y="523" width="83.5" height="86" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="572" y="247" width="51" height="48.5" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>     
        <rect x="624" y="247" width="47.5" height="48.5" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="1786" y="524" width="39.8" height="85" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>
        <rect x="1827.5" y="524" width="31.5" height="85" stroke="transparent" fill="#FCE8E6" stroke-width="1"></rect>

        {/*green*/}
        <rect id="IRestaurant1" x="822.5" y="350.5" width="220.5" height="267" stroke="transparent" fill="#00FF00" stroke-width="1"></rect>
        <rect id="IECC1" x="154.5" y="191.3" width="83.5" height="54.7" stroke="transparent" fill="Moccasin" stroke-width="1"></rect>
        <rect id="IECC2" x="219.5" y="299.5" width="32" height="17.5" stroke="transparent" fill="Moccasin" stroke-width="1"></rect>
        <rect id="IECC3" x="219.5" y="367.5" width="32" height="17.5" stroke="transparent" fill="Moccasin" stroke-width="1"></rect>
        <rect id="IECC4" x="219.5" y="412" width="32" height="17.5" stroke="transparent" fill="Moccasin" stroke-width="1"></rect>
        <rect id="IECC5" x="219.5" y="456.5" width="32" height="17.5" stroke="transparent" fill="Moccasin" stroke-width="1"></rect>
        <path d="M1627,35 H1708.5 V247.5 H1656.5 V184 H1627" fill="Moccasin" stroke="transparent" stroke-width="1"></path>
        <path d="M1711,35 H1779 V137 H1751 V95.5 H1711" fill="#FFFFFF" stroke="transparent" stroke-width="1"></path>
        <path d="M83,36.5 H152 V95.5 H116 V136 H83" fill="#FFFFFF" stroke="transparent" stroke-width="1"></path>

        {/*Blue*/}
        <rect id="ITolet-QT1" x="87" y="523" width="145.5" height="86" stroke="transparent" fill="#E0E5FF" stroke-width="1"></rect>
        <rect id="ITolet-QT2" x="317.5" y="523" width="228.5" height="86" stroke="transparent" fill="#E0E5FF" stroke-width="1"></rect>
        <rect id="ITolet-TN3" x="1627" y="186" width="27.5" height="62.5" stroke="transparent" fill="#E0E5FF" stroke-width="1"></rect>
        <rect id="ITolet-TN1" x="1322" y="524" width="232.5" height="85" stroke="transparent" fill="#E0E5FF" stroke-width="1"></rect>
        <rect id="ITolet-TN2" x="1556.5" y="524" width="228.5" height="85" stroke="transparent" fill="#E0E5FF" stroke-width="1"></rect>
        <path d="M1,456 H29
                Q40 456 40 473
                V491 H1" 
        fill="#E0E5FF" stroke="transparent" stroke-width="1"></path>
        <path d="M1859,456 H1845
                Q1823 456 1823 467
                V494 H1859" 
        fill="#E0E5FF" stroke="transparent" stroke-width="1"></path>
        <path d="M547,247 H570.5
                V295 H560
                Q547 295 547 282
                V247 H547" 
        fill="#E0E5FF" stroke="transparent" stroke-width="1"></path>
        <path d="M1290,243.5 H1320.5
            V285
            Q1320.5 295 1310.5 295
            H1292
            V243.5 H1292" 
        fill="#E0E5FF" stroke="transparent" stroke-width="1"></path>
        {/*thang may,cuon,bo*/}
    
        <path d="M40,140.5 H72.5 V287 H40 " fill="#F1F3F4" stroke="#F1F3F4" stroke-width="5"></path>
        <rect x="91.5" y="140.5" width="23" height="30" stroke="pink" fill="pink" stroke-width="5"></rect>      
        <path d="M118,99.5 H150.5 V243 H118" fill="#F1F3F4" stroke="#F1F3F4" stroke-width="5"></path>
        <path d="M1791,141.5 H1820.5 V286 H1791" fill="#F1F3F4" stroke="#F1F3F4" stroke-width="5"></path>
        <rect x="1753" y="141.5" width="20" height="30" stroke="pink" fill="pink" stroke-width="5"></rect>      
        <path d="M1711,100 H1746.5 V193 H1711 " fill="#F1F3F4" stroke="#F1F3F4" stroke-width="5"></path>
        <path id="IStair1" d="M755,787.5 H848 V836.5 H755" fill="#F1F3F4" stroke="#F1F3F4" stroke-width="5"></path>
        <rect id="IElavatorSC" x="907.5" y="762.5" width="49" height="55" stroke="none" fill="pink" stroke-width="1"></rect>      
        <path id="IStair2" d="M1014.5,787.5 H1107 V836.5 H1014.5" fill="#F1F3F4" stroke="#F1F3F4" stroke-width="5"></path>
        
        {/*lấy hành lí*/}
        <path id="ILuggageQT1" d="M401.5,3 H520
                Q530 3 534 20
                V35 H401.5
                V20
                Q401.5 3 415.5 3" 
        fill="Moccasin" stroke="transparent" stroke-width="1"></path>
        <path id="ILuggageQT2" d="M401.5,37 H534 V45
                Q534 65 514 65
                 H508.5
                Q489.5 65 489.5 85
                 V226.5
                Q489.5 246.5 472.5 246.5
                H460
                Q445 246.5 445 226.5  
                V85
                Q445 65 425 65
                H421.5
                Q401.5 65 401.5 45
                H401.5" fill="Moccasin" stroke="transparent" stroke-width="1"></path>
        <path id="ILuggageTN1" d="M1330,2 H1442.5
                Q1462.5 0 1462.5 20
                V31.5 H1330
                V20
                Q1330 2 1344 2" 
        fill="Moccasin" stroke="transparent" stroke-width="1"></path>
        <path id="ILuggageTN2" d="M1330,34 H1462.5 V44
                Q1462.5 64 1442.5 64  
                H1440.5
                Q1418.5 64 1418.5 86
                V225.5
                Q1418.5 245.5 1403.5 245.5
                H1389
                Q1374 245.5 1374 225.5
                V84
                Q1374 64 1354 64
                H1350
                Q1330 64 1330 44" fill="Moccasin" stroke="transparent" stroke-width="1"></path>
        {/*Icon gate*/}
       

        {/*Icon stains*/}
        <image href="/icon/escalator.png" x="34" y="215" height="50px" width="50px"></image>
        <image href="/icon/escalator.png" x="110" y="95" height="50px" width="50px"></image>
        <image href="/icon/escalator.png" x="1782" y="225" height="50px" width="50px"></image>
        <image href="/icon/escalator.png" x="1706" y="90" height="50px" width="50px"></image>
        <image href="/icon/elevator.png" x="1740" y="140" height="50px" width="50px"></image>
        <image href="/icon/elevator.png" x="77" y="138" height="50px" width="50px"></image>
        <image id="ICONIElevatorSC" href="/icon/elevator.png" x="893" y="760" height="80px" width="80px"></image>
        <image id="ICONIStair1" href="/icon/going-up.png" x="774" y="785" height="50px" width="50px"></image>
        <image id="ICONIStair2" href="/icon/going-up.png" x="1035" y="785" height="50px" width="50px"></image>

      {/*Icon toilet & smoking*/}
       
        <image id="ICONIToletQT1" href="/icon/toilet.png" x="141" y="543" height="50px" width="50px"></image>
        <image id="ICONIToletQT2" href="/icon/toilet.png" x="410" y="543" height="50px" width="50px"></image>
        <image id="ICONIToletTN3" href="/icon/toilet.png" x="1610" y="190" height="50px" width="50px"></image>
        <image id="ICONIToletTN1" href="/icon/toilet.png" x="1410" y="543" height="50px" width="50px"></image>
        <image id="ICONIToletTN2" href="/icon/toilet.png" x="1650" y="543" height="50px" width="50px"></image>

        {/*Icon Food & Drinks*/}
       
        <image id="ICONIRestaurant1" href="/icon/dinner.png" x="870" y="550" height="60px" width="60px"></image>
        <image id="ICONIDRestaurant1" href="/icon/chocolate.png" x="935" y="544" height="60px" width="60px"></image>
        
        {/*Icon airport*/}
        <svg 
            id="ICONSCC" 
            fill="#000000" 
            x={1635} y="253" height="70px" width="70px" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsxlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 32 32" xmlspace="preserve">
<path d="M24,0H8C6.3,0,5,1.3,5,3v28c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1V9c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v22c0,0.6,0.4,1,1,1h3
       c0.6,0,1-0.4,1-1V3C27,1.3,25.7,0,24,0z M13.7,4.7C13.5,4.9,13.3,5,13,5c-0.3,0-0.5-0.1-0.7-0.3C12.1,4.5,12,4.3,12,4
       c0-0.3,0.1-0.5,0.3-0.7c0.4-0.4,1-0.4,1.4,0C13.9,3.5,14,3.7,14,4C14,4.3,13.9,4.5,13.7,4.7z M16.7,4.7C16.5,4.9,16.3,5,16,5
       c-0.3,0-0.5-0.1-0.7-0.3C15.1,4.5,15,4.3,15,4c0-0.3,0.1-0.5,0.3-0.7c0.4-0.4,1-0.4,1.4,0C16.9,3.5,17,3.7,17,4
       C17,4.3,16.9,4.5,16.7,4.7z M19.7,4.7C19.5,4.9,19.3,5,19,5c-0.3,0-0.5-0.1-0.7-0.3C18.1,4.5,18,4.3,18,4c0-0.3,0.1-0.5,0.3-0.7
       c0.4-0.4,1-0.4,1.4,0C19.9,3.5,20,3.7,20,4C20,4.3,19.9,4.5,19.7,4.7z"/>
<path d="M31,15h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S31.6,15,31,15z"/>
<path d="M28.2,14.6c0.2,0,0.4-0.1,0.6-0.2l1.6-1.2c0.4-0.3,0.5-1,0.2-1.4c-0.3-0.4-0.9-0.5-1.4-0.2l-1.6,1.2c-0.4,0.3-0.5,1-0.2,1.4
       C27.6,14.5,27.9,14.6,28.2,14.6z"/>
<path d="M28.8,17.5c-0.4-0.3-1.1-0.2-1.4,0.2c-0.3,0.4-0.2,1.1,0.2,1.4l1.6,1.2c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4
       c0.3-0.4,0.2-1.1-0.2-1.4L28.8,17.5z"/>
<path d="M4,16c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h2C3.6,17,4,16.6,4,16z"/>
<path d="M2.8,11.7c-0.4-0.3-1.1-0.2-1.4,0.2c-0.3,0.4-0.2,1.1,0.2,1.4l1.6,1.2c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4
       c0.3-0.4,0.2-1.1-0.2-1.4L2.8,11.7z"/>
<path d="M3.2,17.5l-1.6,1.2c-0.4,0.3-0.5,1-0.2,1.4c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2l1.6-1.2c0.4-0.3,0.5-1,0.2-1.4
       C4.3,17.3,3.7,17.2,3.2,17.5z"/>
<path d="M20.2,16c-0.9-0.2-1.8-0.4-2.7-0.4c0.9-0.5,1.5-1.5,1.5-2.6c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,1.1,0.6,2.1,1.5,2.6
       c-0.9,0.1-1.8,0.2-2.7,0.4c-0.4,0.1-0.8,0.5-0.8,1v7c0,0.6,0.4,1,1,1h1v6c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-6h1c0.6,0,1-0.4,1-1
       v-7C21,16.5,20.7,16.1,20.2,16z"/>
       </svg>
        <image id="ICONIECC" href="/icon/checking.png" x="210" y="340" height="50px" width="50px"></image>
        
        {/*Icon*/}
        <svg id="ICONATM" fill="000000" height="65px" width="55px" x="1285" y="832" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" viewBox="0 0 163 163" xmlspace="preserve">
                <path d="M75.612,73.83v3.988c0,4.604-3.745,8.349-8.354,8.349c-4.604,0-8.349-3.746-8.349-8.349V73.83H75.612z M93.964,51.493
                        c-4.605,0-8.352,3.746-8.352,8.351v3.986h16.703v-3.986C102.315,55.239,98.569,51.493,93.964,51.493z M163,23.718v14.028
                        c0,10.826-8.808,19.633-19.633,19.633h-5.816v85.007c0,9.114-7.415,16.529-16.529,16.529H41.645
                        c-9.114,0-16.529-7.415-16.529-16.529V57.379h-5.482C8.808,57.379,0,48.572,0,37.746V23.718C0,12.892,8.808,4.085,19.633,4.085
                        h123.733C154.192,4.085,163,12.892,163,23.718z M121.525,68.83c0-2.761-2.239-5-5-5h-4.21v-3.986
                        c0-10.119-8.232-18.351-18.351-18.351c-10.119,0-18.352,8.232-18.352,18.351v3.986H58.91V46.493c0-2.761-2.239-5-5-5s-5,2.239-5,5
                        V63.83h-2.768c-2.761,0-5,2.239-5,5s2.239,5,5,5h2.768v3.988c0,10.118,8.231,18.349,18.354,18.349
                        c10.118,0,18.349-8.231,18.349-18.349V73.83h16.703v17.337c0,2.761,2.239,5,5,5s5-2.239,5-5V73.83h4.21
                        C119.286,73.83,121.525,71.592,121.525,68.83z M153,23.718c0-5.312-4.321-9.633-9.633-9.633H19.633
                        c-5.312,0-9.633,4.321-9.633,9.633v14.028c0,5.312,4.321,9.633,9.633,9.633h5.482v-6.147h-1.949c-2.761,0-5-2.239-5-5v-11
                        c0-2.761,2.239-5,5-5h116.667c2.761,0,5,2.239,5,5v11c0,2.761-2.239,5-5,5h-2.283v6.147h5.816c5.312,0,9.633-4.321,9.633-9.633
                        V23.718z"
                />
        </svg>
        <svg id="ICONCustoms" fill="#000000" height="60px" width="60px" x="600" y="380" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 128 128" xmlspace="preserve">
<path d="M17.9,108.1v6.9v1.8v0.7c0,2.9,2.4,5.3,5.3,5.3h38.5c2.9,0,5.3-2.4,5.3-5.3v-1.2v-1.4v-6.8H17.9z"/>
<path d="M11,59h-0.8H8.5c-2.9,0-5.3,2.4-5.3,5.3v38.5c0,2.9,2.4,5.3,5.3,5.3h2.1h0h7.3V59H11z"/>
<polygon points="73.6,112.3 73.6,122.8 121.1,122.8 121.1,108 73.6,108 "/>
<polygon points="105.5,30.7 105.5,21.4 71.3,21.4 77.6,30.7 "/>
<path d="M77.7,34.4L72,41.8h7.8c0,7.1,5.7,12.8,12.8,12.8s12.8-5.7,12.8-12.8v-7.4H77.7z"/>
<path d="M121.1,101.5V74.4v-5.2v-1.7c0-4.7-3.8-8.5-8.5-8.5h-1.1L93.4,83.5l-13.3,18H121.1z"/>
<path d="M73.6,75.5v23.8L103.4,59H82.1c-0.1,0-0.2,0-0.3,0v0H77h-5.1c-2.8,0-6.8,2.2-8.8,4.9s-3.6,4.9-3.6,4.9L42.2,92.1
	c-1.9,2.5-1.3,6,1.2,7.9l0.6,0.4c2.5,1.8,6,1.3,7.9-1.2L73.6,70V75.5z"/>
</svg>
        <image id="ICONLuggageQT" href="/icon/trolley.png" x="335" y="121" height="90px" width="90px"></image>
        <image id="ICONLuggageTN" href="/icon/trolley.png" x="1455" y="121" height="90px" width="90px"></image>

        {/*Đường dẫn*/}
        <rect id="DD1" x="1600" y="360" height="5px" width="240px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD2" x="1400" y="360" height="5px" width="440px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD3" x="1125" y="360" height="5px" width="715px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD4" x="1600" y="300" height="65px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD5" x="1600" y="360" height="140px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD6" x="1400" y="360" height="140px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD7" x="1400" y="275" height="90px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD8" x="1125" y="360" height="300px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD9" x="1125" y="360" height="450px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD10" x="1125" y="810" height="5px" width="92px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD11" x="1125" y="810" height="5px" width="185px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD12" x="1212" y="810" height="50px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD13" x="940" y="655" height="5px" width="190px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD14" x="730" y="655" height="5px" width="400px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD15" x="940" y="655" height="80px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD16" x="730" y="655" height="160px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD17" x="650" y="810" height="5px" width="80px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        <rect id="DD18" x="650" y="810" height="55px" width="5px" stroke="none" stroke-width="1" class="ddcolor" ></rect>
        {/*Robot*/}
        <image id="Robot" href="/icon/warehouse.png" x="1820" y="340" height="35px" width="35px"/>
        </svg>
        </div>
      </>
    </div>
  )
}
export default html;
