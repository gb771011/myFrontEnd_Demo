## CSS:Position

### position:static(預設)    
* 各區塊會依自身的display值自動排版    
* 預設值
* 無法透過top / bottom / left / right / z-index調整位置

### positon:fixed     
* 相對原點: **瀏覽器視窗最左上角**
* 可透過top / bottom / left / right / z-index調整位置
* 當`{top:10px;left:10px}`時，區塊會往視窗左上角靠，且頂邊與左邊距視窗10px

### positon:relative      
* 相對原點: **position:static之位置的左上角** 
* 可透過top / bottom / left / right / z-index調整位置
* 當`{top:10px;left:10px}`，區塊會 **從原始位置向右下各移動10px**

### positon:absolute
* 相對原點: **區塊的父元素的左上角** 
    * 如果區塊之上的所有父元素皆無法定位(position:static)，則該區塊會以**視窗左上角**為相對原點(與fixed同)
* 「區塊版」的postiton:fixed
* 可透過top / bottom / left / right / z-index調整位置
* 當`{top:10px;left:10px}`，區塊會 **從原始位置向右下各移動10px** 

---

## CSS:Animation VS Transistion

### Transistion

* 用於讓元素平滑的改變狀態
* 需要trigger才會執行  
    * _:hover_,_:active_
* 只能設定開始/結束畫面的顯示設定
* 執行中的效果無法中斷

### Animation
* 用於展示較為複雜的動作or狀態變化(取代flash/java)
* 無須trigger即可執行
* 可以自由設定每個格數的顯示狀態變化(使用百分比控制)
* 執行中的效果可以暫停/重新撥放(修改CSS值)

