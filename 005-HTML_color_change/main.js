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