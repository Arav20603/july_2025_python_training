
const addTask = () => {
    let ele = document.getElementById('task-input')
    let input = ele.value
    if (input == '') return alert('Please enter a value')
    localStorage.setItem('tasks', JSON.stringify(input))
    console.log(localStorage.getItem('tasks'))
    para = `<li>${input}</li>`
    let html = document.querySelector('.tasks')
    html.innerHTML += para
    document.getElementById('task-input').value = ''
}