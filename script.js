// Solving problems using array functions on the rest countries' data
//1. Get all the countries from the Asia continent /region using the Filter function:

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all", true);
// request.send();
// request.onload = function() {
//     var data = request.response;
//     var coun =JSON.parse(data);
//     var res = coun.filter((ele)=>{
//         for(var i in ele.continents) {
//             if(ele.continents[i]=="Asia")
//                 return true;
//     }
// })       
//     var res1 = res.map((ele)=>(ele.name.common));
//     console.log(res1);
// };

//2. Get all the countries with a population of less than 2 lakhs using Filter function:

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all", true);
// request.send();
// request.onload = function() {
//     var data = request.response;
//     var coun =JSON.parse(data);
//     var resu = coun.filter((ele)=>(ele.population<200000));
//     var resu1 = resu.map((ele)=>(ele.name.common));
//     console.log(resu1);
// };

//Output:

// (62) ['Saint Vincent and the Grenadines', 'Faroe Islands', 'Cocos (Keeling) Islands', 'Micronesia', 'Isle of Man', 'Jersey', 'Montserrat', 'Antigua and Barbuda', 'Dominica', 'Falkland Islands', 'Guam', 'Seychelles', 'Grenada', 'Cayman Islands', 'Turks and Caicos Islands', 'Liechtenstein', 'Niue', 'United States Minor Outlying Islands', 'Antarctica', 'Tuvalu', 'Curaçao', 'Saint Helena, Ascension and Tristan da Cunha', 'Marshall Islands', 'South Georgia', 'Åland Islands', 'Norfolk Island', 'Kiribati', 'Saint Kitts and Nevis', 'French Southern and Antarctic Lands', 'Bouvet Island', 'Pitcairn Islands', 'Bermuda', 'British Virgin Islands', 'Saint Pierre and Miquelon', 'Palau', 'Saint Barthélemy', 'Anguilla', 'Wallis and Futuna', 'Andorra', 'Aruba', 'Vatican City', 'Sint Maarten', 'Cook Islands', 'Tonga', 'Guernsey', 'San Marino', 'Samoa', 'United States Virgin Islands', 'Christmas Island', 'Saint Martin', 'Saint Lucia', 'Tokelau', 'Caribbean Netherlands', 'Northern Mariana Islands', 'Gibraltar', 'Svalbard and Jan Mayen', 'Heard Island and McDonald Islands', 'British Indian Ocean Territory', 'Greenland', 'Monaco', 'Nauru', 'American Samoa']
// 0: "Saint Vincent and the Grenadines"
// 1: "Faroe Islands"
// 2: "Cocos (Keeling) Islands"
// 3: "Micronesia"
// 4: "Isle of Man"
// 5: "Jersey"
// 6: "Montserrat"
// 7: "Antigua and Barbuda"
// 8: "Dominica"
// 9: "Falkland Islands"
// 10: "Guam"
// 11: "Seychelles"
// 12: "Grenada"
// 13: "Cayman Islands"
// 14: "Turks and Caicos Islands"
// 15: "Liechtenstein"
// 16: "Niue"
// 17: "United States Minor Outlying Islands"
// 18: "Antarctica"
// 19: "Tuvalu"
// 20: "Curaçao"
// 21: "Saint Helena, Ascension and Tristan da Cunha"
// 22: "Marshall Islands"
// 23: "South Georgia"
// 24: "Åland Islands"
// 25: "Norfolk Island"
// 26: "Kiribati"
// 27: "Saint Kitts and Nevis"
// 28: "French Southern and Antarctic Lands"
// 29: "Bouvet Island"
// 30: "Pitcairn Islands"
// 31: "Bermuda"
// 32: "British Virgin Islands"
// 33: "Saint Pierre and Miquelon"
// 34: "Palau"
// 35: "Saint Barthélemy"
// 36: "Anguilla"
// 37: "Wallis and Futuna"
// 38: "Andorra"
// 39: "Aruba"
// 40: "Vatican City"
// 41: "Sint Maarten"
// 42: "Cook Islands"
// 43: "Tonga"
// 44: "Guernsey"
// 45: "San Marino"
// 46: "Samoa"
// 47: "United States Virgin Islands"
// 48: "Christmas Island"
// 49: "Saint Martin"
// 50: "Saint Lucia"
// 51: "Tokelau"
// 52: "Caribbean Netherlands"
// 53: "Northern Mariana Islands"
// 54: "Gibraltar"
// 55: "Svalbard and Jan Mayen"
// 56: "Heard Island and McDonald Islands"
// 57: "British Indian Ocean Territory"
// 58: "Greenland"
// 59: "Monaco"
// 60: "Nauru"
// 61: "American Samoa"
// length: 62
// [[Prototype]]: Array(0)


//3. Print the following details name, capital, flag using forEach function

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all", true);
// request.send();
// request.onload = function() {
//     var data = request.response;
//     var details =JSON.parse(data);
//     var resul = details.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flag}`);});
// };

//Output:

// script.js:105 Saint Vincent and the Grenadines Kingstown 🇻🇨
// script.js:105 French Guiana Cayenne 🇬🇫
// script.js:105 Faroe Islands Tórshavn 🇫🇴
// script.js:105 Pakistan Islamabad 🇵🇰
// script.js:105 Fiji Suva 🇫🇯
// script.js:105 Mongolia Ulan Bator 🇲🇳
// script.js:105 Cocos (Keeling) Islands West Island 🇨🇨
// script.js:105 Micronesia Palikir 🇫🇲
// script.js:105 Norway Oslo 🇳🇴
// script.js:105 Mauritania Nouakchott 🇲🇷
// script.js:105 Spain Madrid 🇪🇸
// script.js:105 Turkey Ankara 🇹🇷
// script.js:105 United Arab Emirates Abu Dhabi 🇦🇪
// script.js:105 DR Congo Kinshasa 🇨🇩
// script.js:105 New Caledonia Nouméa 🇳🇨
// script.js:105 Rwanda Kigali 🇷🇼
// script.js:105 Australia Canberra 🇦🇺
// script.js:105 Isle of Man Douglas 🇮🇲
// script.js:105 Indonesia Jakarta 🇮🇩
// script.js:105 Zambia Lusaka 🇿🇲
// script.js:105 Jersey Saint Helier 🇯🇪
// script.js:105 Uruguay Montevideo 🇺🇾
// script.js:105 Canada Ottawa 🇨🇦
// script.js:105 Peru Lima 🇵🇪
// script.js:105 Montserrat Plymouth 🇲🇸
// script.js:105 Antigua and Barbuda Saint John's 🇦🇬
// script.js:105 Dominica Roseau 🇩🇲
// script.js:105 Cambodia Phnom Penh 🇰🇭
// script.js:105 Falkland Islands Stanley 🇫🇰
// script.js:105 Guam Hagåtña 🇬🇺
// script.js:105 Papua New Guinea Port Moresby 🇵🇬
// script.js:105 Seychelles Victoria 🇸🇨
// script.js:105 Liberia Monrovia 🇱🇷
// script.js:105 Cape Verde Praia 🇨🇻
// script.js:105 Grenada St. George's 🇬🇩
// script.js:105 Cuba Havana 🇨🇺
// script.js:105 Djibouti Djibouti 🇩🇯
// script.js:105 Lebanon Beirut 🇱🇧
// script.js:105 Myanmar Naypyidaw 🇲🇲
// script.js:105 Cayman Islands George Town 🇰🇾
// script.js:105 Gabon Libreville 🇬🇦
// script.js:105 French Polynesia Papeetē 🇵🇫
// script.js:105 South Africa Pretoria,Bloemfontein,Cape Town 🇿🇦
// script.js:105 Suriname Paramaribo 🇸🇷
// script.js:105 Costa Rica San José 🇨🇷
// script.js:105 Central African Republic Bangui 🇨🇫
// script.js:105 Turks and Caicos Islands Cockburn Town 🇹🇨
// script.js:105 Liechtenstein Vaduz 🇱🇮
// script.js:105 Niue Alofi 🇳🇺
// script.js:105 United States Minor Outlying Islands Washington DC 🇺🇲
// script.js:105 North Korea Pyongyang 🇰🇵
// script.js:105 Ukraine Kyiv 🇺🇦
// script.js:105 Guinea-Bissau Bissau 🇬🇼
// script.js:105 Antarctica undefined 🇦🇶
// script.js:105 Mayotte Mamoudzou 🇾🇹
// script.js:105 Tuvalu Funafuti 🇹🇻
// script.js:105 Morocco Rabat 🇲🇦
// script.js:105 Moldova Chișinău 🇲🇩
// script.js:105 Oman Muscat 🇴🇲
// script.js:105 Italy Rome 🇮🇹
// script.js:105 Yemen Sana'a 🇾🇪
// script.js:105 Kuwait Kuwait City 🇰🇼
// script.js:105 Puerto Rico San Juan 🇵🇷
// script.js:105 Palestine Ramallah,Jerusalem 🇵🇸
// script.js:105 Colombia Bogotá 🇨🇴
// script.js:105 North Macedonia Skopje 🇲🇰
// script.js:105 Qatar Doha 🇶🇦
// script.js:105 Taiwan Taipei 🇹🇼
// script.js:105 Madagascar Antananarivo 🇲🇬
// script.js:105 Bahamas Nassau 🇧🇸
// script.js:105 Curaçao Willemstad 🇨🇼
// script.js:105 Solomon Islands Honiara 🇸🇧
// script.js:105 Saint Helena, Ascension and Tristan da Cunha Jamestown 🇸🇭
// script.js:105 Honduras Tegucigalpa 🇭🇳
// script.js:105 Armenia Yerevan 🇦🇲
// script.js:105 Guatemala Guatemala City 🇬🇹
// script.js:105 Togo Lomé 🇹🇬
// script.js:105 Senegal Dakar 🇸🇳
// script.js:105 Czechia Prague 🇨🇿
// script.js:105 Kosovo Pristina 🇽🇰
// script.js:105 Marshall Islands Majuro 🇲🇭
// script.js:105 Mauritius Port Louis 🇲🇺
// script.js:105 Georgia Tbilisi 🇬🇪
// script.js:105 Philippines Manila 🇵🇭
// script.js:105 Albania Tirana 🇦🇱
// script.js:105 Jamaica Kingston 🇯🇲
// script.js:105 Serbia Belgrade 🇷🇸
// script.js:105 Chile Santiago 🇨🇱
// script.js:105 Guyana Georgetown 🇬🇾
// script.js:105 Tanzania Dodoma 🇹🇿
// script.js:105 Bangladesh Dhaka 🇧🇩
// script.js:105 Ecuador Quito 🇪🇨
// script.js:105 Cyprus Nicosia 🇨🇾
// script.js:105 Dominican Republic Santo Domingo 🇩🇴
// script.js:105 South Georgia King Edward Point 🇬🇸
// script.js:105 Åland Islands Mariehamn 🇦🇽
// script.js:105 Finland Helsinki 🇫🇮
// script.js:105 South Korea Seoul 🇰🇷
// script.js:105 Burkina Faso Ouagadougou 🇧🇫
// script.js:105 Norfolk Island Kingston 🇳🇫
// script.js:105 Portugal Lisbon 🇵🇹
// script.js:105 Barbados Bridgetown 🇧🇧
// script.js:105 Jordan Amman 🇯🇴
// script.js:105 Nigeria Abuja 🇳🇬
// script.js:105 Bahrain Manama 🇧🇭
// script.js:105 Kiribati South Tarawa 🇰🇮
// script.js:105 São Tomé and Príncipe São Tomé 🇸🇹
// script.js:105 China Beijing 🇨🇳
// script.js:105 Switzerland Bern 🇨🇭
// script.js:105 Kenya Nairobi 🇰🇪
// script.js:105 Maldives Malé 🇲🇻
// script.js:105 El Salvador San Salvador 🇸🇻
// script.js:105 Saint Kitts and Nevis Basseterre 🇰🇳
// script.js:105 Brunei Bandar Seri Begawan 🇧🇳
// script.js:105 Benin Porto-Novo 🇧🇯
// script.js:105 Guinea Conakry 🇬🇳
// script.js:105 Macau undefined 🇲🇴
// script.js:105 United States Washington, D.C. 🇺🇸
// script.js:105 Eritrea Asmara 🇪🇷
// script.js:105 Sweden Stockholm 🇸🇪
// script.js:105 French Southern and Antarctic Lands Port-aux-Français 🇹🇫
// script.js:105 Ghana Accra 🇬🇭
// script.js:105 Denmark Copenhagen 🇩🇰
// script.js:105 Bulgaria Sofia 🇧🇬
// script.js:105 Botswana Gaborone 🇧🇼
// script.js:105 Iran Tehran 🇮🇷
// script.js:105 Bouvet Island undefined 🇧🇻
// script.js:105 Bolivia Sucre 🇧🇴
// script.js:105 Pitcairn Islands Adamstown 🇵🇳
// script.js:105 Belarus Minsk 🇧🇾
// script.js:105 Bermuda Hamilton 🇧🇲
// script.js:105 Kazakhstan Nur-Sultan 🇰🇿
// script.js:105 Laos Vientiane 🇱🇦
// script.js:105 Uzbekistan Tashkent 🇺🇿
// script.js:105 Malaysia Kuala Lumpur 🇲🇾
// script.js:105 British Virgin Islands Road Town 🇻🇬
// script.js:105 Saint Pierre and Miquelon Saint-Pierre 🇵🇲
// script.js:105 Iceland Reykjavik 🇮🇸
// script.js:105 Greece Athens 🇬🇷
// script.js:105 Paraguay Asunción 🇵🇾
// script.js:105 Cameroon Yaoundé 🇨🇲
// script.js:105 Palau Ngerulmud 🇵🇼
// script.js:105 Brazil Brasília 🇧🇷
// script.js:105 Saint Barthélemy Gustavia 🇧🇱
// script.js:105 Anguilla The Valley 🇦🇮
// script.js:105 Ethiopia Addis Ababa 🇪🇹
// script.js:105 Germany Berlin 🇩🇪
// script.js:105 Hungary Budapest 🇭🇺
// script.js:105 Sudan Khartoum 🇸🇩
// script.js:105 Somalia Mogadishu 🇸🇴
// script.js:105 Lithuania Vilnius 🇱🇹
// script.js:105 Angola Luanda 🇦🇴
// script.js:105 Equatorial Guinea Malabo 🇬🇶
// script.js:105 Saudi Arabia Riyadh 🇸🇦
// script.js:105 Estonia Tallinn 🇪🇪
// script.js:105 Luxembourg Luxembourg 🇱🇺
// script.js:105 Zimbabwe Harare 🇿🇼
// script.js:105 New Zealand Wellington 🇳🇿
// script.js:105 Venezuela Caracas 🇻🇪
// script.js:105 Gambia Banjul 🇬🇲
// script.js:105 Wallis and Futuna Mata-Utu 🇼🇫
// script.js:105 Belgium Brussels 🇧🇪
// script.js:105 Belize Belmopan 🇧🇿
// script.js:105 Western Sahara El Aaiún 🇪🇭
// script.js:105 Slovenia Ljubljana 🇸🇮
// script.js:105 Syria Damascus 🇸🇾
// script.js:105 Japan Tokyo 🇯🇵
// script.js:105 Russia Moscow 🇷🇺
// script.js:105 Lesotho Maseru 🇱🇸
// script.js:105 Ireland Dublin 🇮🇪
// script.js:105 Montenegro Podgorica 🇲🇪
// script.js:105 Andorra Andorra la Vella 🇦🇩
// script.js:105 Netherlands Amsterdam 🇳🇱
// script.js:105 Latvia Riga 🇱🇻
// script.js:105 Tunisia Tunis 🇹🇳
// script.js:105 Aruba Oranjestad 🇦🇼
// script.js:105 Croatia Zagreb 🇭🇷
// script.js:105 Mali Bamako 🇲🇱
// script.js:105 Afghanistan Kabul 🇦🇫
// script.js:105 Sierra Leone Freetown 🇸🇱
// script.js:105 Iraq Baghdad 🇮🇶
// script.js:105 Comoros Moroni 🇰🇲
// script.js:105 Egypt Cairo 🇪🇬
// script.js:105 Vietnam Hanoi 🇻🇳
// script.js:105 Vatican City Vatican City 🇻🇦
// script.js:105 Sint Maarten Philipsburg 🇸🇽
// script.js:105 Slovakia Bratislava 🇸🇰
// script.js:105 Singapore Singapore 🇸🇬
// script.js:105 Cook Islands Avarua 🇨🇰
// script.js:105 Eswatini Mbabane 🇸🇿
// script.js:105 Tonga Nuku'alofa 🇹🇴
// script.js:105 Republic of the Congo Brazzaville 🇨🇬
// script.js:105 Guernsey St. Peter Port 🇬🇬
// script.js:105 Guadeloupe Basse-Terre 🇬🇵
// script.js:105 Namibia Windhoek 🇳🇦
// script.js:105 Trinidad and Tobago Port of Spain 🇹🇹
// script.js:105 Bhutan Thimphu 🇧🇹
// script.js:105 Hong Kong City of Victoria 🇭🇰
// script.js:105 South Sudan Juba 🇸🇸
// script.js:105 San Marino City of San Marino 🇸🇲
// script.js:105 Tajikistan Dushanbe 🇹🇯
// script.js:105 Uganda Kampala 🇺🇬
// script.js:105 Samoa Apia 🇼🇸
// script.js:105 Algeria Algiers 🇩🇿
// script.js:105 Ivory Coast Yamoussoukro 🇨🇮
// script.js:105 United States Virgin Islands Charlotte Amalie 🇻🇮
// script.js:105 Azerbaijan Baku 🇦🇿
// script.js:105 Sri Lanka Sri Jayawardenepura Kotte 🇱🇰
// script.js:105 Christmas Island Flying Fish Cove 🇨🇽
// script.js:105 Chad N'Djamena 🇹🇩
// script.js:105 Argentina Buenos Aires 🇦🇷
// script.js:105 India New Delhi 🇮🇳
// script.js:105 Saint Martin Marigot 🇲🇫
// script.js:105 Haiti Port-au-Prince 🇭🇹
// script.js:105 Saint Lucia Castries 🇱🇨
// script.js:105 Nepal Kathmandu 🇳🇵
// script.js:105 Tokelau Fakaofo 🇹🇰
// script.js:105 Turkmenistan Ashgabat 🇹🇲
// script.js:105 Israel Jerusalem 🇮🇱
// script.js:105 Caribbean Netherlands Kralendijk 🇧🇶
// script.js:105 Malta Valletta 🇲🇹
// script.js:105 Northern Mariana Islands Saipan 🇲🇵
// script.js:105 Malawi Lilongwe 🇲🇼
// script.js:105 Gibraltar Gibraltar 🇬🇮
// script.js:105 Vanuatu Port Vila 🇻🇺
// script.js:105 United Kingdom London 🇬🇧
// script.js:105 Martinique Fort-de-France 🇲🇶
// script.js:105 Mexico Mexico City 🇲🇽
// script.js:105 Bosnia and Herzegovina Sarajevo 🇧🇦
// script.js:105 Romania Bucharest 🇷🇴
// script.js:105 Svalbard and Jan Mayen Longyearbyen 🇸🇯
// script.js:105 Heard Island and McDonald Islands undefined 🇭🇲
// script.js:105 British Indian Ocean Territory Diego Garcia 🇮🇴
// script.js:105 Réunion Saint-Denis 🇷🇪
// script.js:105 Kyrgyzstan Bishkek 🇰🇬
// script.js:105 Thailand Bangkok 🇹🇭
// script.js:105 Burundi Gitega 🇧🇮
// script.js:105 Greenland Nuuk 🇬🇱
// script.js:105 Austria Vienna 🇦🇹
// script.js:105 France Paris 🇫🇷
// script.js:105 Monaco Monaco 🇲🇨
// script.js:105 Nauru Yaren 🇳🇷
// script.js:105 Niger Niamey 🇳🇪
// script.js:105 American Samoa Pago Pago 🇦🇸
// script.js:105 Mozambique Maputo 🇲🇿
// script.js:105 Timor-Leste Dili 🇹🇱
// script.js:105 Nicaragua Managua 🇳🇮
// script.js:105 Panama Panama City 🇵🇦
// script.js:105 Poland Warsaw 🇵🇱
// script.js:105 Libya Tripoli 🇱🇾


//4. Print the total population of countries using reduce function:

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all", true);
// request.send();
// request.onload = function() {
//     var data = request.response;
//     var detail =JSON.parse(data);
//     var result0 = detail.reduce((acc,cv)=>acc+cv.population,0);
//     console.log(result0);
// };

//Output: 7777721563

//5. Print the country which uses US Dollars as currency

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all", true);
// request.send();
// request.onload = function() {
//     var data = request.response;
//     var count =JSON.parse(data);
//     var result1 = count.filter((ele)=>{for(var i in ele.currencies){
//         if(ele.currencies[i].code==="USD")
//         return true;
//     }
//     })
//     var result3 = result1.map((ele)=>(ele.name));
//     console.log(result3);
// };

//O/P:

// (18) ['American Samoa', 'Bonaire, Sint Eustatius and Saba', 'British Indian Ocean Territory', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cambodia', 'Ecuador', 'El Salvador', 'Guam', 'Marshall Islands', 'Micronesia (Federated States of)', 'Northern Mariana Islands', 'Palau', 'Panama', 'Puerto Rico', 'Timor-Leste', 'Turks and Caicos Islands', 'United States of America']
// 0: "American Samoa"
// 1: "Bonaire, Sint Eustatius and Saba"
// 2: "British Indian Ocean Territory"
// 3: "Virgin Islands (British)"
// 4: "Virgin Islands (U.S.)"
// 5: "Cambodia"
// 6: "Ecuador"
// 7: "El Salvador"
// 8: "Guam"
// 9: "Marshall Islands"
// 10: "Micronesia (Federated States of)"
// 11: "Northern Mariana Islands"
// 12: "Palau"
// 13: "Panama"
// 14: "Puerto Rico"
// 15: "Timor-Leste"
// 16: "Turks and Caicos Islands"
// 17: "United States of America"
// length: 18
// [[Prototype]]: Array(0)