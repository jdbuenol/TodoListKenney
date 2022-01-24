$(function() {
    const newTask = $(".new-task");
    const taskName = $(".new-task-name");
    const taskList = $(".task-list");
    let taskID = 1;
    newTask.click(() => {
        let newName = taskName.val();
        taskList.append(`
            <div class="accordion-item task-button col-9 mt-1" id="${taskID}" mt-1>
                <h2 class="accordion-header task text-center" id="headingOne">
                <button class="accordion-button collapsed btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${taskID}" aria-expanded="false" aria-controls="collapse${taskID}">
                    <div><img src="/assets/creatures/creature${Math.ceil(Math.random() * 80)}.png" width="32"><p>   Name = ${newName} Status = done</p></div>
                </button>
                </h2>
                <div id="collapse${taskID}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    </div>
                </div>
            </div>`);
        taskList.append(`<div taskID="${taskID}" class="col-1 mt-1 delete-button"></div>`);
        taskList[0].lastChild.addEventListener("click",(button) => {
            let target = button.target.getAttribute("taskID");
            $(`#${target}`).remove();
            button.target.remove();
        });
        taskID++;
    })
})