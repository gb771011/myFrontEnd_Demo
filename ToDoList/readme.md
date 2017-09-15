# Note
## 讓EsLint支援jQuery語法:
Eslint預設是不支援jQuery的語法( **$(selector).method** )的，若在`*.js`中使用jQuery語法，Eslint會因為無法辨識而顯示報錯

若要讓Eslint可以正確辨識jQuery語法，只要在`eslintrc.js`的`env`區塊中添加`'jquery':true`即可:
```
// eslintrc.js
"env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        'jquery':true
    },
```