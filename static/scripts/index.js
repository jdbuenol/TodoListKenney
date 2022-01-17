$(function() {
    const newTask = $(".new-task");
    const taskName = $(".new-task-name");
    const taskList = $(".task-list");
    let taskID = 1;
    newTask.click(() => {
        let newName = taskName.val();
        taskList.append(`<div id="${taskID}" class="col-9 task mt-1"><img src="/assets/creatures/creature${Math.ceil(Math.random() * 80)}.png" width="32"><p>   Name = ${newName} Status = done</p></div>`);
        taskList.append(`<div taskID="${taskID}" class="col-1 mt-1 delete-button"></div>`);
        taskList[0].lastChild.addEventListener("click",(button) => {
            let target = button.target.getAttribute("taskID");
            $(`#${target}`).hide();
            button.target.remove();
        });
        taskID++;
    })
})