let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let inpNewTask=$('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort=$('#btnSort')
let btnDark=$('#btnDark')
let myAudio = document.querySelector('#audio')

function addItem(){
    let listItem = $('<li>', {
        'class': 'list-group-item', 
        text:inpNewTask.val()
    })
    listItem.click((event) => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
}

inpNewTask.keypress((e) => {
    if(e.which==13)
    {
        addItem()
    }
})

function clearDone()
{
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

function sortTasks()
{
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons()
{
    btnReset.prop('disabled', inpNewTask.val()=='')
    btnAdd.prop('disabled', inpNewTask.val()=='')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
}

inpNewTask.on('input', toggleInputButtons)

btnAdd.click(addItem)

btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
})
btnCleanup.click(clearDone)

btnSort.click(sortTasks)

function toggleDark()
{
    var element=document.body
    element.classList.toggle("dark-mode")
}

btnDark.click(toggleDark)