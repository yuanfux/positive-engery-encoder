!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("js-base64")):"function"==typeof define&&define.amd?define(["js-base64"],n):e.positiveEnergyEncoder=n(e.jsBase64)}(this,function(e){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],r=["富强","务实","文明","上进","坚强","创新","无私","勇敢","爱国","敬业","诚信","友善","朝气","乐观","勤奋","好学","豁达","谦虚","自信","聪慧","正直","执着","积极","阳光","沉稳","感恩","努力","沉着","开拓","果敢","宽容","贡献","奉献","奋斗","果断","自律","朴实","坚毅","热心","严谨","进取","辛勤","求实","求真","勤学","踏实","勤俭","淡泊","梦想","包容","真诚","诚实","虚心","自省","勤劳","忠诚","热爱","奋勇","专注","钻研","合作","友爱","团结","认真","刻苦"],t=function(){for(var e={},t=0;t<n.length;t++)e[n[t]]=r[t];return e}(),o=function(){for(var e={},t=0;t<n.length;t++)e[r[t]]=n[t];return e}();return{decode:function(n){if(n.length%2)return"";for(var r="",t=0;t<n.length;t+=2){var f=o[n.charAt(t)+n.charAt(t+1)];if(!f)return"";r+=f}return e.Base64.decode(r)},encode:function(n){for(var r="",o=0,f=e.Base64.encode(n);o<f.length;o+=1){r+=t[f[o]]}return r}}});