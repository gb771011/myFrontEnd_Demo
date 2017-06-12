## Google Sheet API 

---
**注意事項**

1. [google data api v3設定參考來源](http://www.ioa.tw/google-sheets-api-note.html)，注意此作法只適合用於測試/練習用

1. 使用前須先將作為來源的google試算表發佈至網路上，不然即使有key也無法連結
1. 來源url格式:https://spreadsheets.google.com/feeds/{feed}/{key}/{sheet_index}/public/values 
    
    其中被{}包起來的為自訂參數:
    
    * **{feed}**:決定每筆的回傳值的單位(list:行,cells"格")
    * **{key}**:試算表的ID,即每個google試算表的網址中的那串亂碼
    * **{sheet_index}**:從第幾個工作表中取資料,起始值為1

1. 預設回傳格式為xml，若要json則須在連結後加?alt=json即可
1. 回傳資料可從data.feed.entry[i].content(後面簡稱data)
1. 大部分資料都在"回傳變數.feed"裡(以下簡稱feed)
1. 資料數量及格式依指定feed而有所不同:
    
    * list:回傳值以"行"為單位($t : "age: 188, weight: 65, 中文: 阿花")

    * cells:回傳值以"格"為單位($t : "age")
