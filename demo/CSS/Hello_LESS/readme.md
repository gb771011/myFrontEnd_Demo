# LESS note
```
#cont1{
    border: 1px solid @bd1;
    ul{
        .twiceFont(12px);
        padding-left: 60px;
        li{
            // padding: 5px;
            background-color: #908080;
            &:hover{
                background-color: red;
                text-decoration: underline;
            }
        }
    }
}


```