document.addEventListener('DOMContentLoaded', () =>{
    const getAllButton = document.querySelector('#getAll');
    getAllButton.addEventListener('click', loadPost);

    const form = document.querySelector('#addPostForm');
    form.addEventListener('submit', addPostForm);
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

