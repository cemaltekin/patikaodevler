let ul = document.querySelector('.list')
fetch("https://jsonplaceholder.typicode.com/posts").then(Response => Response.json()).then(responseJson => responseJson.forEach(item => {
    let li = document.createElement('li')
    li.innerHTML = item.body
    ul.appendChild(li)
}))