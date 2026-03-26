// const url_default = 'https://jsonplaceholder.typicode.com/posts'


// fetch(url_default).then((resp) => console.log(resp))


const solicitarPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()

    data.forEach ((post) => {
        const li = document.createElement('li')
        li.innerHTML = `<h2> Usando await </h2>
            <h4> ${post.title} </h4>
            <p>< ${post.body}</p>`
        lista.append(li)
    })

}

solicitarPosts()