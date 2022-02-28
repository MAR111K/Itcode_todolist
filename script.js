const entry=document.querySelector(".description_task"),
      button=document.querySelector(".button_task"),
      todo_item=document.querySelector(".list_need"),
      todo_complet=document.querySelector(".list_completed")

//Проверяем значение в input, после нажатия кнопки
button.addEventListener('click',()=>{
    if((entry.value != '')) {
        addElement()
        entry.value=''
    }
})

entry.addEventListener('keydown',(e)=>{   // при нажатии на Enter
    if(e.keyCode===13){
        if((entry.value != '')) {
            addElement()
            entry.value=''
        }
    }
})
const tasks = [
    {
        Description : '',
    }
]
function addElement(){
    let itemTask = {
        DescriptionEL : entry.value,
    }

    tasks.push(itemTask);

    createTask(entry.value)
}
function createTask(Description) {
    const div=document.createElement('div')
    const btn=document.createElement('button')
    const check=document.createElement('input')
    const label=document.createElement('label')
    div.className='item'  //создаем поле задачи и задаем значение из input
    div.innerHTML = Description
    check.id='test'
    check.type='checkbox' //добавляем чекбокс
    
    btn.className='delete' //добавляем кнопку удаления
    btn.textContent=''

    todo_item.appendChild(div)  
    div.appendChild(btn)
    label.appendChild(check)
    div.appendChild(label)

    check.addEventListener('click',()=>{
        if(check.checked){
            todo_complet.appendChild(div)  //при активном чекбоксе добавляем в выполненные
        }
        else { 
            todo_item.appendChild(div)
        }
    })
        
    btn.addEventListener('click',()=>{  
        div.remove()
      
    })

}