(()=>{"use strict";var e,a,c,f,b,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=d,r.c=t,e=[],r.O=(a,c,f,b)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],b=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&b||d>=b)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,b<d&&(d=b));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[c,f,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var d={};a=a||[null,c({}),c([]),c(c)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(b,d),b},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({129:"d9778d08",193:"83c34cbb",224:"54e974df",246:"7b0cd4d7",269:"97d2b6ac",283:"3b61014e",478:"0694dff3",484:"6c47b4ef",522:"e00f37b7",525:"ba0eab4b",601:"098f1b9a",648:"e4a2deed",676:"5514870f",710:"189aea72",719:"df421eef",740:"09e18ac9",754:"2e0e901b",841:"8dd80d3c",987:"7d9b019d",1076:"103d4f25",1078:"0031c6ab",1312:"946d94bb",1326:"89f900ef",1400:"948ceb28",1507:"17a13902",1538:"b796a67a",1592:"2836458c",1613:"156350b8",1684:"ebe51696",1714:"925e9d7d",1723:"0a5df45a",1784:"b58a8a43",1791:"ac96073a",1801:"a81b529c",1824:"8f0c3fd0",1841:"531b5b19",1911:"b2b80d27",1953:"c7f9c21a",2025:"857fc848",2164:"8eeb3a45",2169:"28e0d5a2",2248:"3aa78145",2315:"84c38d22",2326:"728b4e23",2488:"0356c522",2535:"814f3328",2608:"e5d90913",2764:"40ef0a87",2837:"59c6ae57",3013:"bc9f4889",3085:"1f391b9e",3087:"0e162e27",3089:"a6aa9e1f",3238:"16924590",3261:"1b3c9ae9",3281:"5433ccc3",3416:"4ea04972",3429:"18b94d93",3452:"b7fabe2b",3474:"beb9cc01",3479:"00ec46d9",3545:"2dfe84ea",3555:"796e89f8",3608:"9e4087bc",3635:"8a476e62",3725:"f0c5ce94",3851:"a577fcbe",3946:"4e0ac799",3967:"146fb5e8",3968:"1843a479",3975:"87f1c70c",4013:"01a85c17",4045:"b3fbc257",4131:"3291ce9e",4265:"646ce9a5",4289:"68b11766",4339:"c325915d",4354:"94a720dd",4358:"e737f8ed",4445:"6a8463e3",4499:"e86bb9e3",4509:"98b4027e",4582:"a834350f",4689:"f26961f5",4706:"3435ee4b",4736:"36ff3c84",4738:"1caf4459",4775:"07b77051",4821:"03c02b68",4829:"884d8bb2",4847:"a49be98a",4940:"947415a1",4970:"aac395af",5e3:"52df44ce",5010:"2147cbb5",5029:"19ca3bf0",5265:"f78bc956",5295:"bbcc86bf",5336:"76ce1626",5375:"e3d59151",5404:"4485a50c",5543:"c2830885",5562:"991434d7",5578:"1caffd44",5621:"fd9c85df",5738:"6172e77f",5787:"8a0cebcf",5840:"e67f429a",5934:"300584df",6056:"1fd72c56",6079:"8bcc5bd3",6081:"0b919dc1",6103:"ccc49370",6163:"d4600981",6178:"b8d8d34e",6393:"74e38ee8",6427:"f3e1dcea",6431:"6c8d9a95",6436:"70fab364",6442:"09856e27",6536:"911b944a",6572:"ea134a2a",6581:"5819104c",6746:"bc9f595d",6807:"b8fca9b6",6812:"a177cb37",6813:"19510534",6833:"51bf3ded",6846:"5746e293",6882:"5ead6cfa",6903:"e452d9ef",6977:"dbaecb0f",7093:"018afb82",7096:"ee4b8794",7177:"87985fbd",7310:"9f6c9c98",7407:"933c7e43",7426:"303cdffe",7463:"551118d6",7522:"c3ec7baa",7544:"492eb2ea",7584:"aa79a240",7599:"cc5acf94",7641:"24995ae2",7672:"51318549",7738:"3a2ddd57",7741:"4c8f9b58",7815:"ed5e0c2e",7909:"eed29351",7920:"1a4e3797",8011:"9525a29a",8093:"36b78d34",8164:"61afdf5a",8369:"5b0f1124",8395:"e7643901",8483:"97f6020e",8510:"824a9659",8528:"76852309",8553:"a843eb2d",8578:"db0acdbf",8610:"6875c492",8640:"a0f21575",8701:"a8f1871b",8764:"12d75f49",8779:"9be20643",8881:"81f8f58c",9048:"95afe50e",9143:"896c0e6b",9227:"21faa2bb",9470:"17b5527c",9498:"b88732bb",9593:"dabb87e3",9679:"ea8d2316",9682:"58012390",9695:"43677887",9731:"da7bfdef",9871:"15233e72",9925:"ce3227ce",9965:"08cfc01d",9993:"f5c7231a"}[e]||e)+"."+{129:"ea51548f",193:"2d733291",224:"b06cb291",246:"db527400",269:"797972c0",283:"cf1dbac4",478:"cd177538",484:"07f3cbcb",522:"f315c206",525:"59b28799",601:"625fc2fa",648:"46b33fd4",676:"5ac85ef6",710:"68562865",719:"4c38cb03",740:"cdaf130b",754:"fb1a51e5",841:"3b4ce1d1",987:"a05d9d8f",1076:"95c42d8e",1078:"3251806c",1312:"899ca5b4",1326:"0c18fbea",1400:"e1cb8688",1507:"2a0228f8",1538:"05d3ade7",1592:"d08fb2c6",1613:"8dead0b8",1684:"7ef9f5e1",1714:"e89791e3",1723:"b80c26c8",1784:"e33b946d",1791:"089ab721",1801:"6835f304",1824:"5a1b7f1d",1841:"2eca5406",1911:"c6f93cf3",1953:"aa88aa41",2025:"28bba1ef",2164:"78d2a993",2169:"4acd3fd1",2248:"dc3f8150",2315:"8a51c0d0",2326:"95e3bcf4",2488:"eefaef0c",2535:"76195469",2608:"6ccb73e4",2764:"cd43e654",2837:"d032639a",3013:"148796b9",3085:"219dc856",3087:"14477a4d",3089:"aa4139e0",3238:"5b69901b",3261:"2072c00d",3281:"b432bc1a",3416:"260e63e7",3429:"c3c522af",3452:"b2d00f10",3474:"5337e1d4",3479:"0d77de88",3545:"b2648774",3555:"055e05c4",3608:"ee1b4eb3",3635:"570ae8da",3725:"265f8ddc",3851:"d840454d",3946:"66b28427",3967:"58e59543",3968:"826f192a",3975:"3378998b",4013:"f6cd20e0",4045:"c0490d20",4048:"6e398ed4",4131:"1e5ca623",4265:"ce24bd97",4289:"e08b5175",4339:"cacc8b02",4354:"caebd0be",4358:"8548b201",4445:"95f8a175",4499:"5b439db4",4509:"27bbf9af",4582:"7f45449e",4689:"66dfb562",4706:"c3fa6c58",4736:"438f4253",4738:"d99ee036",4775:"5ff5b79d",4821:"1eb262e9",4829:"c3ed8489",4847:"5f55a736",4940:"9daeeace",4970:"458c5cbf",4972:"989a8ac5",5e3:"0aecf562",5010:"43c28ab2",5029:"c72f207c",5265:"0ad9f7fe",5295:"7f48668f",5336:"86d07e5a",5375:"91c44414",5404:"bcc0dd7b",5525:"d53d90e3",5543:"521557bc",5562:"cd53b034",5578:"4dbe279b",5621:"0113a94a",5738:"15f9f9cf",5787:"5fd2640a",5840:"81f993e8",5934:"eee15023",6056:"afee8efb",6079:"f39a4c3f",6081:"6bdee59f",6103:"a11826a0",6163:"41565e9a",6178:"eaac54cb",6393:"79c4d877",6427:"57795f39",6431:"5ff37c6e",6436:"7acfaa84",6442:"00288781",6536:"0cfd5690",6572:"f40ba85d",6581:"a5e36b93",6746:"55a6f332",6807:"0f2ca716",6812:"0bd46c46",6813:"8cc031d9",6833:"1beefa21",6846:"0a043656",6882:"fa194ca3",6903:"7e19b61c",6977:"fc867ec0",7093:"4b855a42",7096:"f9644516",7177:"acb87414",7310:"9ee78a9d",7407:"ccbe09c0",7426:"b0f9d51d",7463:"b4e44f0f",7522:"073ddb8b",7544:"4860ba3c",7584:"fabc684d",7599:"243e43d8",7641:"43a7b3d1",7672:"16a3766e",7738:"e68510f2",7741:"8b1c36af",7815:"729831f8",7909:"fc320b2f",7920:"a64ce1e9",8011:"fcfc0bbb",8093:"15ba6525",8164:"90f4c45a",8369:"82413ea0",8395:"79ca698f",8443:"683d6783",8481:"09be18e5",8483:"15dfcb2b",8510:"884fc4ca",8528:"e2aec84c",8553:"19055c84",8578:"9df44be0",8610:"dde8f98e",8640:"46a7d428",8701:"74932e43",8764:"d38be771",8779:"7a99e481",8881:"0280beb7",9048:"2b523b63",9143:"8cfd1666",9227:"1c22cf7a",9470:"cc939652",9498:"7464c78e",9593:"fe719365",9679:"54f3762b",9682:"68f808ef",9695:"cf36f8b6",9731:"5907a050",9871:"e0450f15",9925:"2404c8e5",9965:"af1aee1a",9993:"4a63aacc"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},b="argumentation-online:",r.l=(e,a,c,d)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+c){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+c),t.src=e),f[e]=[a];var l=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var b=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/en/",r.gca=function(e){return e={16924590:"3238",19510534:"6813",43677887:"9695",51318549:"7672",58012390:"9682",76852309:"8528",d9778d08:"129","83c34cbb":"193","54e974df":"224","7b0cd4d7":"246","97d2b6ac":"269","3b61014e":"283","0694dff3":"478","6c47b4ef":"484",e00f37b7:"522",ba0eab4b:"525","098f1b9a":"601",e4a2deed:"648","5514870f":"676","189aea72":"710",df421eef:"719","09e18ac9":"740","2e0e901b":"754","8dd80d3c":"841","7d9b019d":"987","103d4f25":"1076","0031c6ab":"1078","946d94bb":"1312","89f900ef":"1326","948ceb28":"1400","17a13902":"1507",b796a67a:"1538","2836458c":"1592","156350b8":"1613",ebe51696:"1684","925e9d7d":"1714","0a5df45a":"1723",b58a8a43:"1784",ac96073a:"1791",a81b529c:"1801","8f0c3fd0":"1824","531b5b19":"1841",b2b80d27:"1911",c7f9c21a:"1953","857fc848":"2025","8eeb3a45":"2164","28e0d5a2":"2169","3aa78145":"2248","84c38d22":"2315","728b4e23":"2326","0356c522":"2488","814f3328":"2535",e5d90913:"2608","40ef0a87":"2764","59c6ae57":"2837",bc9f4889:"3013","1f391b9e":"3085","0e162e27":"3087",a6aa9e1f:"3089","1b3c9ae9":"3261","5433ccc3":"3281","4ea04972":"3416","18b94d93":"3429",b7fabe2b:"3452",beb9cc01:"3474","00ec46d9":"3479","2dfe84ea":"3545","796e89f8":"3555","9e4087bc":"3608","8a476e62":"3635",f0c5ce94:"3725",a577fcbe:"3851","4e0ac799":"3946","146fb5e8":"3967","1843a479":"3968","87f1c70c":"3975","01a85c17":"4013",b3fbc257:"4045","3291ce9e":"4131","646ce9a5":"4265","68b11766":"4289",c325915d:"4339","94a720dd":"4354",e737f8ed:"4358","6a8463e3":"4445",e86bb9e3:"4499","98b4027e":"4509",a834350f:"4582",f26961f5:"4689","3435ee4b":"4706","36ff3c84":"4736","1caf4459":"4738","07b77051":"4775","03c02b68":"4821","884d8bb2":"4829",a49be98a:"4847","947415a1":"4940",aac395af:"4970","52df44ce":"5000","2147cbb5":"5010","19ca3bf0":"5029",f78bc956:"5265",bbcc86bf:"5295","76ce1626":"5336",e3d59151:"5375","4485a50c":"5404",c2830885:"5543","991434d7":"5562","1caffd44":"5578",fd9c85df:"5621","6172e77f":"5738","8a0cebcf":"5787",e67f429a:"5840","300584df":"5934","1fd72c56":"6056","8bcc5bd3":"6079","0b919dc1":"6081",ccc49370:"6103",d4600981:"6163",b8d8d34e:"6178","74e38ee8":"6393",f3e1dcea:"6427","6c8d9a95":"6431","70fab364":"6436","09856e27":"6442","911b944a":"6536",ea134a2a:"6572","5819104c":"6581",bc9f595d:"6746",b8fca9b6:"6807",a177cb37:"6812","51bf3ded":"6833","5746e293":"6846","5ead6cfa":"6882",e452d9ef:"6903",dbaecb0f:"6977","018afb82":"7093",ee4b8794:"7096","87985fbd":"7177","9f6c9c98":"7310","933c7e43":"7407","303cdffe":"7426","551118d6":"7463",c3ec7baa:"7522","492eb2ea":"7544",aa79a240:"7584",cc5acf94:"7599","24995ae2":"7641","3a2ddd57":"7738","4c8f9b58":"7741",ed5e0c2e:"7815",eed29351:"7909","1a4e3797":"7920","9525a29a":"8011","36b78d34":"8093","61afdf5a":"8164","5b0f1124":"8369",e7643901:"8395","97f6020e":"8483","824a9659":"8510",a843eb2d:"8553",db0acdbf:"8578","6875c492":"8610",a0f21575:"8640",a8f1871b:"8701","12d75f49":"8764","9be20643":"8779","81f8f58c":"8881","95afe50e":"9048","896c0e6b":"9143","21faa2bb":"9227","17b5527c":"9470",b88732bb:"9498",dabb87e3:"9593",ea8d2316:"9679",da7bfdef:"9731","15233e72":"9871",ce3227ce:"9925","08cfc01d":"9965",f5c7231a:"9993"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,c)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((c,b)=>f=e[a]=[c,b]));c.push(f[2]=b);var d=r.p+r.u(a),t=new Error;r.l(d,(c=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var b=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,f[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var f,b,d=c[0],t=c[1],o=c[2],n=0;if(d.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(c);n<d.length;n++)b=d[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},c=self.webpackChunkargumentation_online=self.webpackChunkargumentation_online||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();