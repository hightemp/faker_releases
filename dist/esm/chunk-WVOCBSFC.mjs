var e=["####","###","##","#"];var t=["{{address.city_prefix}}{{address.city_suffix}}"];var r=["\u81FA\u5317","\u65B0\u5317","\u6843\u5712","\u81FA\u4E2D","\u81FA\u5357","\u9AD8\u96C4","\u57FA\u9686","\u65B0\u7AF9","\u5609\u7FA9","\u82D7\u6817","\u5F70\u5316","\u5357\u6295","\u96F2\u6797","\u5C4F\u6771","\u5B9C\u862D","\u82B1\u84EE","\u81FA\u6771","\u6F8E\u6E56","\u91D1\u9580","\u9023\u6C5F"];var o=["\u7E23","\u5E02"];var i=["Taiwan (R.O.C.)"];var m=["######"];var f=["\u798F\u5EFA\u7701","\u53F0\u7063\u7701"];var a=["\u5317","\u65B0\u5317","\u6843","\u4E2D","\u5357","\u9AD8","\u57FA","\u7AF9\u5E02","\u5609\u5E02","\u7AF9\u7E23","\u82D7","\u5F70","\u6295","\u96F2","\u5609\u7E23","\u5B9C","\u82B1","\u6771","\u6F8E","\u91D1","\u99AC"];var s=["{{name.last_name}}{{address.street_suffix}}"];var d={normal:"{{address.street}}{{address.buildingNumber}}\u865F",full:"{{address.street}}{{address.buildingNumber}}\u865F {{address.secondaryAddress}}"};var p=["\u8857","\u8DEF","\u5317\u8DEF","\u5357\u8DEF","\u6771\u8DEF","\u897F\u8DEF"];var y={building_number:e,city:t,city_prefix:r,city_suffix:o,default_country:i,postcode:m,state:f,state_abbr:a,street:s,street_address:d,street_suffix:p},n=y;var u=["\u7D39\u9F4A","\u535A\u6587","\u6893\u6668","\u80E4\u7965","\u745E\u9716","\u660E\u54F2","\u5929\u7FCA","\u51F1\u745E","\u5065\u96C4","\u8000\u5091","\u701F\u7136","\u5B50\u6DB5","\u8D8A\u5F6C","\u923A\u8ED2","\u667A\u8F1D","\u81F4\u9060","\u4FCA\u99B3","\u96E8\u6FA4","\u71C1\u78CA","\u665F\u777F","\u6587\u660A","\u4FEE\u6F54","\u9ECE\u6615","\u9060\u822A","\u65ED\u582F","\u9D3B\u6FE4","\u5049\u797A","\u69AE\u8ED2","\u8D8A\u6FA4","\u6D69\u5B87","\u747E\u745C","\u7693\u8ED2","\u64CE\u84BC","\u64CE\u5B87","\u5FD7\u6FA4","\u5B50\u8ED2","\u777F\u6DF5","\u5F18\u6587","\u54F2\u701A","\u96E8\u6FA4","\u6977\u745E","\u5EFA\u8F1D","\u6649\u9D6C","\u5929\u78CA","\u7D39\u8F1D","\u6FA4\u6D0B","\u946B\u78CA","\u9D6C\u714A","\u660A\u5F37","\u5049\u5BB8","\u535A\u8D85","\u541B\u6D69","\u5B50\u9A2B","\u9D6C\u6FE4","\u708E\u5F6C","\u9DB4\u8ED2","\u8D8A\u5F6C","\u98A8\u83EF","\u9756\u742A","\u660E\u8F1D","\u5049\u8AA0","\u660E\u8ED2","\u5065\u67CF","\u4FEE\u5091","\u5FD7\u6FA4","\u5F18\u6587","\u5CFB\u7199","\u5609\u61FF","\u715C\u57CE","\u61FF\u8ED2","\u71C1\u5049","\u82D1\u535A","\u5049\u6FA4","\u71A0\u5F64","\u9D3B\u714A","\u535A\u6FE4","\u71C1\u9716","\u71C1\u83EF","\u715C\u797A","\u667A\u5BB8","\u6B63\u8C6A","\u660A\u7136","\u660E\u6770","\u7ACB\u8AA0","\u7ACB\u8ED2","\u7ACB\u8F1D","\u5CFB\u7199","\u5F18\u6587","\u71A0\u5F64","\u9D3B\u714A","\u71C1\u9716","\u54F2\u701A","\u946B\u9D6C","\u660A\u5929","\u601D\u8070","\u5C55\u9D6C","\u7B11\u611A","\u5FD7\u5F37","\u70AB\u660E","\u96EA\u677E","\u601D\u6E90","\u667A\u6DF5","\u601D\u6DFC","\u66C9\u562F","\u5929\u5B87","\u6D69\u7136","\u6587\u8ED2","\u9DFA\u6D0B","\u632F\u5BB6","\u6A02\u99D2","\u66C9\u535A","\u6587\u535A","\u660A\u7131","\u7ACB\u679C","\u91D1\u946B","\u9326\u7A0B","\u5609\u7199","\u9D6C\u98DB","\u5B50\u9ED8","\u601D\u9060","\u6D69\u8ED2","\u8A9E\u5802","\u8070\u5065"];var l=["\u738B","\u674E","\u5F35","\u5289","\u9673","\u694A","\u9EC3","\u5433","\u8D99","\u9031","\u5F90","\u5B6B","\u99AC","\u6731","\u80E1","\u6797","\u90ED","\u4F55","\u9AD8","\u7F85","\u912D","\u6881","\u8B1D","\u5B8B","\u5510","\u8A31","\u9127","\u99AE","\u97D3","\u66F9","\u66FE","\u5F6D","\u856D","\u8521","\u6F58","\u7530","\u8463","\u8881","\u65BC","\u9918","\u8449","\u8523","\u675C","\u8607","\u9B4F","\u7A0B","\u5442","\u4E01","\u6C88","\u4EFB","\u59DA","\u76E7","\u5085","\u9418","\u59DC","\u5D14","\u8B5A","\u5ED6","\u7BC4","\u6C6A","\u9678","\u91D1","\u77F3","\u6234","\u8CC8","\u97CB","\u590F","\u90B1","\u65B9","\u4FAF","\u9112","\u718A","\u5B5F","\u79E6","\u767D","\u6C5F","\u95BB","\u859B","\u5C39","\u6BB5","\u96F7","\u9ECE","\u53F2","\u9F8D","\u9676","\u8CC0","\u9867","\u6BDB","\u90DD","\u9F94","\u90B5","\u842C","\u9322","\u56B4","\u8CF4","\u8983","\u6D2A","\u6B66","\u83AB","\u5B54"];var x=["{{name.first_name}}{{name.last_name}}"];var D={first_name:u,last_name:l,name:x},_=D;var c=["0#-#######","02-########","09##-######"];var h={formats:c},b=h;var N={title:"Chinese (Taiwan)",address:n,name:_,phone_number:b},ie=N;export{ie as a};
