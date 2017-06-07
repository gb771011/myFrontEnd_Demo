$(function () {
    // 使用constructor建立表格
    function Table() {
        var tRow = "<tr>#tData</tr>",
            tData = "<td>#cont</td>",
            tHeader = "<th>#cont</th>",
            temp = "",
            i=0;

        this.init = function (parent, id) {
            this.id = "#" + id;
            $(parent).append("<table id=" + id + "></table>");
        };

        this.rowHead = function (data) {

            for (i = 0; i < data.length; i++) {
                temp += tHeader.replace("#cont", data[i]);
            }
            cont = tRow.replace("#tData", temp);
            $(this.id).append(cont);
            this.colNum = data.length;
        };
        this.rowData = function (data) {
            for (i = 0; i < this.colNum; i++) {
                temp += tData.replace("#cont", data[i]);
            }
            cont = tRow.replace("#cont", temp);
            $(this.id).append(cont);
        };
    }

});