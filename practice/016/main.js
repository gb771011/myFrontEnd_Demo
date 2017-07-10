// prototype setting
function Time(hour, min, sec) {
    this.origin = {
        hour: parseInt(hour),
        min: parseInt(min),
        sec: parseInt(sec),
    },
        this.goal = {
            hour: 0,
            min: 0,
            sec: 0,
        },
        this.add = function (input) {
            var hh = input[0], mm = input[1], ss = input[2];
            this.goal.sec += this.origin.sec + parseInt(ss);
            if (this.goal.sec > 59) {
                this.goal.sec -= 60;
                this.goal.min += 1;
            }
            this.goal.min += this.origin.min + parseInt(mm);
            if (this.goal.min > 59) {
                this.goal.min -= 60;
                this.goal.hour += 1;
            }
            this.goal.hour += this.origin.hour + parseInt(hh);
        };
}

// #btn_set
var d, dis, period;
function time_set() {
    d = new Date();

    dis = new Time(d.getHours(), d.getMinutes(), d.getSeconds());

    period = [$("#dis_hour").val(), $("#dis_min").val(), $("#dis_sec").val()];

    dis.add(period);

    console.log("t0:", dis.origin);
    console.log("t1:", dis.goal);
    $("#console").html(
        "t0:" + JSON.stringify(dis.origin) + "<br>" + "t1:" + JSON.stringify(dis.goal));
}
$("#btn_set").click(function () { time_set(); });

// start
/*秒-1，
當秒<0:分-1，秒=59
當分<0:時-1，分=59*/
function start(launch) {
    if (launch) {
        setInterval(function () {
            var hour = parseInt($("#dis_hour").val()),
                min = parseInt($("#dis_min").val()),
                sec = parseInt($("#dis_sec").val());
            if (sec - 1 < 0) {
                sec = 59;
                min -= 1;

            } else {
                sec -= 1;
            }
            $("#dis_sec").val(sec);
            $("#dis_min").val(min);
        }, 1000);

    }
}
start(false);

/*
var i, date, now = {};
setInterval(function () {
    now = {
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds()
    };
    for (i in now) {
        // console.log("dis_" + i);
        $("#dis_" + i).val(now[i]);
    }
}, 1000);
*/