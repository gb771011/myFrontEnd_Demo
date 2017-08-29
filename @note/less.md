# LESS
## Sourse

### npm      
    1. 從npm安裝

            npm install -g less

    2. 轉檔 _style_.less 轉為 _style_.css

            lessc style.less style.css

    需自行透過cmd or vscdoe的task轉檔，很累

### npm+自動化工具(gulp)    
    借用gulp的監看功能，


### (不建議)CDN      
  
        <link rel="stylesheet/less" type="text/css" href="style.less">
        <!--注意CDN的<script>要放在.less之後-->
        <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>  
    
    缺點:        
    1. 受同源限制影響，無法直接在本機端看結果，要開伺服器
    2. 檔案大，下載要花時間