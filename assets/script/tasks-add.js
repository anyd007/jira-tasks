const items = [...document.querySelectorAll(".add-container__item")]
const addTaskBtn = document.querySelector(".add-container__btn")
const addTaskWarr = document.querySelector(".add-container__warr")
const tasksviewer = document.querySelector(".tasks-container__items")


let currentDate = new Date()
let taskUrlInputArray = []

const taskViewer = () => {
    let taskValues = [
        document.createElement("p"),
        document.createElement("p"),
        document.createElement("select"),
        document.createElement("textarea")
    ];

    taskValues[0].textContent = items[0].value;

    if (taskUrlInputArray.includes(items[1].value)) {
        addTaskWarr.classList.add("open")
        return addTaskWarr.textContent = "TEN TASK JUŻ JEST DODANY"
    }
    taskValues[1].textContent = items[1].value;

    taskUrlInputArray.unshift(items[1].value)

    const option1 = document.createElement("option")
    option1.textContent = "BRAK"
    taskValues[2].appendChild(option1)

    const option2 = document.createElement("option")
    option2.textContent = "GOTOWE"
    taskValues[2].appendChild(option2)

    taskValues.forEach(element => {
        tasksviewer.appendChild(element);
    });
}

const checkDate = (item) => {
    let curretDateFromInput = new Date(item.value)
    if (curretDateFromInput > currentDate) {
        addTaskWarr.classList.add("open")
        addTaskWarr.textContent = "PODANA DATA NIE MOŻE BYĆ PRZYSZŁA"
        return;
    }
   return item
}

const checkUrl = (item) => {
    if (!item.value.includes("gkneonet")) {
        addTaskWarr.classList.add("open")
        addTaskWarr.textContent = "SPRAWDŹ LINK DO TASKA"
        return;
    }
    return item
}

const addTask = () => {
        if (items[0].value === '' || items[1].value === '') {
            addTaskWarr.classList.add("open")
            addTaskWarr.textContent = "WSZYSTKIE POLA SĄ OBOWIĄZKOWE"
            return;
        }
       
            checkDate(items[0])
        
     
            checkUrl(items[1])
        
        if(checkDate(items[0]) && checkUrl(items[1])){
            taskViewer()
        }
    }


addTaskBtn.addEventListener("click", addTask)
items.forEach(item => {
    item.addEventListener("click", () => {
        addTaskWarr.classList.remove("open")
    })
})
