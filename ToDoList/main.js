class TodoList {
    constructor(container, template) {
        this.container = container;
        this.list = [];
        this.template = template;
        // if with db:建立時自動先向db提取既有資料
    }
    // Create
    create(msg) {
        let result;
        let newTask = {
            id: new Date().valueOf(),
            msg: msg,
            isDone: false
        };
        // 將新資料加入到this.list裡
        this.list.push(newTask);
        // 顯示在頁面上
        result = this.template.replace(/:(\w+)/g, (...arg) => {
            let key = arg[1];
            return newTask[key];
        });
        console.log(JSON.stringify(this.list));
        return result;
    }
    // Read

    // Update

    // Delete
}

let mylist = new TodoList('#list', $('#taskLi').html());

$(function () {
    // 在#list中加入一個新任務
    $('#add').click(function () {
        let inMsg = $('#msg').val(),
            newLi;
        if (inMsg !== '') {
            newLi = mylist.create(inMsg);
            $('#list').append(newLi);
        } else {
            alert('please key something......');
        }
    });
});

function hello(e) {
    console.dir(e);
}
// let newId, newLi, newMsg;
/* 
class oneTask {
    constructor(msg, temp = $('#newTask').html()) {
        this.id = new Date().valueOf().toString().slice(-8);
        this.msg = msg;
        this.isDone = false;
        this.template = temp;
    }
    addTo() {
        let result =
        this.template.replace(/:(\w+)/g, (...arg) => {
            // console.log(arg[1]);
            return this[arg[1]];
        });
        return result;
    }
}
*/