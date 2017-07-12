# 倒數計時器

## Note
* 元件類似一般的計時器  
    * 時間框
    * 控制按鈕(設定，開始，暫停，取消)
* 控制鈕暫不做多功能的(一個按鈕，一個功能)

## {Timer}設計
* 時間一律以ms記，再套入公式轉換為hh:mm:ss
* method/property:
    * id
    * 時長:要倒數多少的時間
    * 狀態:timer啟動與否
    * 模式:timer目前的模式
        * 未計時or停止
        * 計時中
        * 設定中

## 按鈕
* set   
    1. 設定倒數時間
* start
    1. 啟動倒數(counter.active(_id_))
    2. 倒數期間，將自己設定為disabled`.prop(disabled:true)`
* pause
    1. 暫停計時
    2. 恢復start`.prop(disabled:false)`
* stop
    1. 停止計時
    2. 恢復start`.prop(disabled:false)`
* reset(記憶功能)
    1. 重設之前的時間
    