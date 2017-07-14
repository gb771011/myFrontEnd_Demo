// function:轉換時分秒(hh:mm:ss)為秒(s)
/*
*/
function hms2s(hh, mm, ss) {
    hh = (hh === "") ? 0 : parseInt(hh);
    mm = (mm === "") ? 0 : parseInt(mm);
    ss = (ss === "") ? 0 : parseInt(ss);
    return hh * 3600 + mm * 60 + ss;
}
// object:轉換時分秒(hh:mm:ss)為秒(s)
/*
*/
var hms2ss = {
    hms: [1230, 423, 69],
    times: [3600, 60, 1],
    ans: 0,
    total: function () {
        var ans = 0;
        //  array.forEach
        this.hms.forEach(function (val, i) {
            // console.log(val, i, this.times[i]);
            ans += val * this.times[i];
        }, this);
        this.ans = ans;
        return ans;
    }
};
// console.log(hms2ss.hms);
// 轉換秒(s)為時分秒[hh,mm,ss]
function s2hms(ss) {
    var hh, mm, result;
    ss = (ss === "") ? 0 : parseInt(ss);
    hh = Math.floor(ss / 3600);
    ss -= hh * 3600;
    mm = Math.floor(ss / 60);
    ss -= mm * 60;
    result = [hh, mm, ss];
    return result;
}

// 計時器物件設計
function Counter() {
    this.step = 0,
        this.times = [],
        this.times_last = [],
        this.mode = [],
        /*
        this.set = function (id, hh, mm, ss) {
            this.times[id] = hms2s(hh, mm, ss);
            this.times_last[id] = hms2s(hh, mm, ss);
            console.log("set:", id, hms2s(hh, mm, ss));
        },
        */
        this.set = function (id, ans) {
            this.times[id] = ans;
            this.times_last[id] = ans;
            console.log("set:", id, ans);
        },
        this.start = function (id) {
            this.mode[id] = 1;
            console.log("start:", id);
        },
        this.pause = function (id) {
            this.mode[id] = 0;
            console.log("mode_pause:", id);
        },
        this.stop = function (id) {
            this.times[id] = 0;
            this.mode[id] = 0;
            console.log("mode_stop:", id);
        },
        this.reset = function (id) {
            this.times[id] = this.times_last[id];
            console.log("mode_reset:", id);
        },
        this.init = function (count, stepms) {
            this.step = stepms;
            for (i = 0; i < count; i++) {
                this.times[i] = 0;
                this.mode[i] = 0;
            }
            // console.log("counter.init");
        },
        this.run = function () {
            for (var i = 0; i < this.times.length; i++) {
                if ((this.times[i] > 0) && (this.mode[i] > 0)) {
                    this.times[i] -= (this.step / 1000);
                } else {
                    this.times[i] = 0;
                }
            }
            console.log(this.times);
        };
}

// 頁面初始化
function counterInit(id_template, id_container, times) {
    var i;
    //  資料初始化
    counter.init(times, 1000);

    // UI初始化
    for (i = 0; i < times; i++) {
        $(id_container).html(function (index, last) {
            return last + $(id_template).html().replace(/#id/g, i);
        });
    }
}

// 初始化
var counter = new Counter(),
    counterNumber = 3 + Math.ceil(Math.random() * 3);
counterInit("#template", "#container", counterNumber);

// 按鍵狀態切換
function btnStatusChange(id, status) {
    // console.log((typeof status === "object") ? "Yes" : "No");
    // console.log(!(typeof status==="object"));
    var length;
    if ((typeof status === "object")) {
        // console.log($("#" + id).children("button"));
        length = $("#" + id).children("button");
    }
}

// 按鈕動作(統一偵測>>依id,class分流)
$("button").click(function () {
    var pid = $(this).parent("section").attr("id"),
        commend = $(this).attr("class").slice(4),
        inputs = $(this).siblings("input");
    console.log("pid:", pid, "\n", "commend:", commend);

    // console.log(tt.length);

    /**/
    switch (commend) {
        case "set":
            for (var i in inputs) {
                if (!isNaN(parseInt(i))) {
                    hms2ss.hms[i] = parseInt(inputs[i].value);
                }
            }
            counter.set(pid, hms2ss.total());
            break;
        default:
            break;
    }
    // console.log(counter[commend]);
    // counter[commend](1);
});
        // setInterval(function () { counter.run(); }, 1000);