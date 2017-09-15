// let newId, newLi, newMsg;
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
class TodoList {
    constructor(container,template) {
        this.container = container;
        this.list = {};
        this.template=template;
        // if with db:建立時自動先向db提取既有資料
    }
    // Create
    create(msg) {
        let newData={
            id:new Date().valueOf(),
            msg:msg,
            isDone:false
        };
    }
    // Read

    // Update

    // Delete
}

let tdl = new TodoList('#list',$('#newTask').html());

$(function () {
    // 在現有清單後加入一個新任務
    $('#add').click(function () {
        let inMsg = $('#msg').val();
        tdl.create(inMsg);
        console.log(tdl.list);
    });
});
/* let task = new oneTask(`New Task: ${Math.random()}`);
        console.log(task.addTo()); */