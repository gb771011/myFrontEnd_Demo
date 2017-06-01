// 轉換hex色碼為rgb
function hexToRgb(hex) {
    var colorR = Number("0x" + hex.substr(1, 2)),
        colorG = Number("0x" + hex.substr(3, 2)),
        colorB = Number("0x" + hex.substr(5, 2)),
        result = "";
    return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}
// 修改顏色
function color(input) {
    ans.value = input;
    title.style.color = hexToRgb(input);
    msg.innerText = hexToRgb(input);
}

// 變更指定id的背景色跟文字色(使用rgb色碼)
function colorChangeByRGB(targetId, iR, iG, iB) {
    var target = document.getElementById(targetId),
        rgb = [iR, iG, iB],
        rgb2 = [],
        bgColor = "rgb(%,%,%)",
        textColor = "rgb(%0,%1,%2)";
    for (var i in rgb) {
        rgb2[i] = 255 - rgb[i];
        bgColor = bgColor.replace("%", rgb[i]);
        textColor = textColor.replace("%" + i, rgb2[i]);
    }

    targetId.style.backgroundColor = bgColor;
    targetId.style.color = textColor;
    targetId.innerHTML = "back:" + bgColor + '<br>' + "text:" + textColor;
}

// 變更指定id的背景色跟文字色(使用hex色碼)
function colorChangeByHEX(targetId, iHex) {
    var target = document.getElementById(targetId),
        textColor = "#",
        temp = [];

    for (i = 0; i < 3; i++) {
        //拆開hex色碼，取出各自的rgb值(16進位)
        temp[i] = iHex.slice(1).substr(i * 2, 2);
        // 轉換成10進位，並剪去255
        temp[i] = (255 - parseInt("0x" + temp[i])).toString(16);
        // 若傳換結果為0~9，在結果前面補0
        if (temp[i].length < 2) {
            temp[i] = "0" + temp[i];
        }
        textColor += temp[i];
    }

    targetId.style.backgroundColor = iHex;
    targetId.style.color = textColor;
    targetId.innerHTML = "back:" + iHex + '<br>' + "text" + textColor;
}
// 亂數產生一個rgb色碼
function randomColor(targetId) {
    var temp = 0,
        colorCode = "rgb(%0,%1,%2)";
    for (var i = 0; i < 3; i++) {
        temp = Math.floor(256 * Math.random());
        colorCode = colorCode.replace("%" + i, temp);
    }
    targetId.innerText = colorCode;
    targetId.style.backgroundColor = colorCode;
}

// 將querystring的key-value轉換為物件
var obj1 = {},
    x1 = location.search.slice(1).replace(/=/g, '&').split("&");
// .slice(1) : 去掉開頭的"?"
// .replace(/=/g, '&') : 將字串內的'='取代為'&'
// .split("&") : 以"&"為分割符號將字串分段
for (var i = 0; i < x1.length; i += 2) {
    obj1[x1[i]] = x1[i + 1];
}
console.log(obj1);
console.log("JSON.stringify:", JSON.stringify(obj1));