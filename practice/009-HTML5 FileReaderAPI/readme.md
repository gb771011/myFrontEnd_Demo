[Demo](009-HTML5 FileReaderAPI)

# 參考

[html5index](http://html5index.org/)    
[A List of MIME Types by Content Type](https://www.thoughtco.com/g00/mime-types-by-content-type-3469108?i10c.referrer=)     
[jQuery-使用.attr()還是.prop()](http://blog.webgolds.com/view/193)  
[jQuery中attr()和prop()方法的一些区别理解- SegmentFault](https://segmentfault.com/a/1190000002680303)  

# 筆記

## FileReaderAPI:檔案格式

FileReaderAPI可以從將從客戶端讀取到的檔案變成下列格式:

1. Text(readAsText):

    回傳結果為文字  
    簡單來說就是用記事本打開後的內容  
    但須注意讀進來的編碼是否正確(預設為UTF-8)

2. DataURL(readAsDataURL):

    回傳結果為DataURL
    可以將結果帶入`<img>` , `<audio>` , `<video>` 等標籤的src裡操作
    
3. ArrayBuffer(readAsArrayBuffer):

    回傳結果為Arraybuffer
    無法直接使用，需透過其他函式編碼後再轉換成DataURL使用