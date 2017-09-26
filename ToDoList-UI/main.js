class TodoList {
    constructor(container, template) {
        this.container = container;
        this.list = [];
        this.template = template;
        // if with db:建立時自動先向db提取既有資料
    }
    // Create
    create(message) {
        let result;
        let data = {
            id: new Date().valueOf(),
            msg: message,
            isDone: false
        };
        // 將新資料加入到this.list裡
        this.list.push(data);
        // 顯示在頁面上
        result = this.template.replace(/:(\w+)/g, (...arg) => {
            let key = arg[1];
            return data[key];
        });
        console.log('create:', data);
        console.log(this.list);
        $(this.container).append(result);
    }
    // Read
    // read() {}
    // Update
    updateIsDone(iId) {
        console.log(iId);
        this.list.forEach((val) => {
            if (val.id === parseInt(iId)) {
                val.isDone = !val.isDone;
            }
            console.log('update:isDone', iId, val.isDone);
        });
    }
    // Delete
}

let mylist = new TodoList('#list', $('#task').html());
$(function () {

    // (開發用)自動新增任務
    mylist.create('mission1');
    mylist.create('mission2');
    // 在#list中加入一個新任務
    $('#add').click(function () {
        let inMsg = $('#msg').val();
        if (inMsg !== '') {
            mylist.create(inMsg);
        } else {
            alert('please key something......');
        }
    });
    $('.taskConfirm').click(function () {  
        console.dir(this.parentNode);
    });
});