const cl = console.log;

const card = document.getElementById("card-post")

let baseUrl = `https://jsonplaceholder.typicode.com`


let posts = `${baseUrl}/posts`

// config 

let xhr = new XMLHttpRequest();


xhr.open("GET", posts)

xhr.send()

const templating = (arr) => {
    let result = ``;
    arr.forEach(post => {
        result += `<div class="col-md-6 offset-md-3">
                    <div class="card mb-4">
                      <div class="card-header">
                          <h2>${post.title}</h2>
                      </div>
                      <div class="card-body">
                          <p>${post.body}</p>
                      </div>
                      <div class="card-footer d-flex justify-content-between">
                          <Button class="btn btn-outline-primary">Edit</Button>
                          <Button class="btn btn-outline-danger">Delete</Button>
                      </div>
                    </div>
                   </div>
        
                     `
    });
    card.innerHTML = result;
}

xhr.onload = function () {
    // cl(xhr.response)
    if(xhr.status === 200){
        let data = JSON.parse(xhr.response)
        // cl(data)
        templating(data)
    }else{
        cl(`something went wrong`)
    }
}


