// 1
        console.log("sourse", "\n", e);
        $("#author_name").val(e.feed.author["0"].name.$t);
        $("#author_email").val(e.feed.author["0"].email.$t);

        entry = e.feed.entry;
        console.log("entry", "\n", entry);

        for (i = 0; i < entry.length; i++) {
            //  <li>data(row,col)</li>
            var cont = entry[i].gs$cell.$t,
                row = entry[i].gs$cell.row,
                col = entry[i].gs$cell.col;
            $("#data").append("<li>" + cont + "(row:" + row + ",col:" + col + ")</li>");
        }

        var dataArr = [];
        for (i = 0; i < entry.length; i++) {
            var cont = entry[i].gs$cell.$t,
                row = entry[i].gs$cell.row,
                col = entry[i].gs$cell.col;
            
            // 檢查最後一列的列號
            var rowLast=entry[entry.length-1].gs$cell.row;
            console.log("rowLast:",rowLast);


        }
        console.log("dataArr:", "\n", dataArr);