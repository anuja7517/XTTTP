const cl = console.log;

let tableTodo = document.getElementById("table-todo")
let statusFilter = document.getElementById("statusFilter")
let todoBody = document.getElementById("todoBody")
let all = document.getElementById("all")
let completed = document.getElementById("completed")
let inComplete = document.getElementById("inComplete")

let todoUrl = `https://jsonplaceholder.typicode.com/todos`;

let todoArr = []


const genericFun = (methodName, apiUrl) =>{
    let xhr = new XMLHttpRequest();

<<<<<<< HEAD
     xhr.open("GET", postUrl)
     
     xhr.send()
     
     xhr.onload = function () {
         // cl(xhr.response)
         if(xhr.status === 200){
             postArr = JSON.parse(xhr.response)
             // cl(data)
             templating(postArr)
         }else{
             alert(`something went wrong`)
         }
    }
}
getHandle()

const createPost = (ele) => {
    let xhr1 = new XMLHttpRequest()

    xhr1.open("POST", postUrl, true)

    xhr1.send(JSON.stringify(ele)) 

    xhr1.onload = function () {
        if(xhr1.status === 200 || xhr1.status === 201){
            ele.id = JSON.parse(xhr1.response).id
            postArr.push(ele)
            templating(postArr)
        }
    }
}


const onSubmitPost = (eve) => {
    eve.preventDefault()
    let postObj = {
        title : titleControl.value,
        body : bodyControl.value,
        userId : userIdControl.value
    }
    cl(postObj)

    createPost(postObj)
    postform.reset()

    
    Swal.fire({
      title: "Added Successfully!",
      icon: "success"
    });
       
}

const onUpdatePost = () => {
    let getUpdateObj = {
        title : titleControl.value,
        body : bodyControl.value,
        userId : userIdControl.value
    }
    cl(getUpdateObj)

   let updateId = localStorage.getItem("Id")
   cl(updateId)

    let updateUrl = `${postUrl}/${updateId}`

    cl(updateUrl)

    let xhr = new XMLHttpRequest();

    xhr.open("PATCH", updateUrl, true)

    xhr.send(JSON.stringify(getUpdateObj))

    xhr.onload = function () {
        if(xhr.status === 200){
           let getIndexOf = postArr.findIndex(post => {
               return post.id == updateId
           })
           
           postArr[getIndexOf].title = getUpdateObj.title,
           postArr[getIndexOf].body = getUpdateObj.body,
           postArr[getIndexOf].userId = getUpdateObj.userId

           updateBtn.classList.add("d-none")
           addBtn.classList.remove("d-none")

           templating(postArr)
           postform.reset()

           Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          
        }else{
            cl(`something went wrong`)
        }  
    }
}

postform.addEventListener("submit", onSubmitPost)
updateBtn.addEventListener("click", onUpdatePost)


const onClickEdit = (eve) => {
    let getId = eve.closest(".col-md-6").id
    cl(getId)

    localStorage.setItem("Id", getId)
    
    let getUrl = `${postUrl}/${getId}`
    // cl()

    let xhr = new XMLHttpRequest();

    xhr.open("GET", getUrl, true) // 1} method name 2} url 3} ascronous behaviour handler
=======
    xhr.open(methodName, apiUrl)
>>>>>>> 6b49d9d5878001ec22ca03f82f9b6e80ab69a3e1

    xhr.send()

    xhr.onload = function () {
        if(xhr.status >= 200 || xhr.status <= 299 && xhr.readyState === 4){
            cl(xhr.response)

            if(methodName === "GET"){
                 todoArr = JSON.parse(xhr.response)
                templating(todoArr)
            }
        }
    }
}


genericFun("GET", todoUrl)


const templating = (arr) => {
    let result = ``;
    arr.forEach(ele => {
        result += `<tr>
                    <td>${ele.userId}</td>
                    <td>${ele.title}</td>
                    <td>${ele.completed ? 'Completed' : 'Incomplete'}</td>
                  </tr> `
    });

    todoBody.innerHTML = result;
}


function filterTodos(status) {
    if (status === 'all') {
    templating(todoArr)
    } else {
      const filteredTodos = todoArr.filter(todo => {
        return todo.completed === (status === 'true');
      });
      templating(filteredTodos)
    }
  }

const onChangeBtn = (eve) => {
    filterTodos(eve.target.value)
}


  statusFilter.addEventListener("change", onChangeBtn)