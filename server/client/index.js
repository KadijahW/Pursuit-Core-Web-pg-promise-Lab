document.addEventListener('DOMContentLoaded', () =>{
    const getAllButton = document.querySelector('#getAll');
    getAllButton.addEventListener('click', loadPost);

    const user = document.querySelector('#getUser');
    user.addEventListener('click', getUserPost);

    const form = document.querySelector('#addPostForm');
    form.addEventListener('submit', addPostFormSubmitted);
});

async function loadPost() {
    const postList = document.querySelector('#postList')
    postList.innerHTML = ""
    const response = await axios.get(`http://localhost:4140/posts/all`);

    response.data.posts.forEach((post) => {
        let list = document.createElement("li")
        list.innerText =`post ID: ${post.id} poster ID: ${post.poster_id} body: ${post.body}`
        postList.appendChild(list);
        
    })
}

async function getUserPost() {
const userID = document.querySelector('#user_id').value

const response = await axios.get(`http://localhost:4140/posts/${userID}`)
// console.log(response.data.user[0])
    const empPara = document.querySelector('#userInfo')
    empPara.innerText = JSON.stringify(response.data.user);

}

async function addPostFormSubmitted(event){
    event.preventDefault();    
const poster_id = document.querySelector('#posterIdInput').value
const body = document.querySelector('#bodyInput').value
let response = await axios.post(`http://localhost:4140/posts/register`, {poster_id, body});
loadPost()
}