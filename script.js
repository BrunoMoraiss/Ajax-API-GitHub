function apiGitHubAjax(){
    const div = document.querySelector(".info-content")

    const req = new XMLHttpRequest()

    req.open("GET", "https://api.github.com/users/BrunoMoraiss")
    req.send(null) 
    req.onreadystatechange = () => {
        if(req.readyState === 4){
            const res = JSON.parse(req.responseText)

            const avatarUrl = res.avatar_url
            const name = res.name
            const publicRepos = res.public_repos

            const img = document.createElement("img")
            img.src = avatarUrl
            img.style.width = `128px`
            
            const h1 = document.createElement("h1")
            h1.innerText = name

            const repos = document.createElement("h3")
            repos.innerText = `Repositórios Públicos: ${publicRepos}`

            div.append(img, h1, repos, reposNames, ul)
        }
    }
        const reposNames = document.createElement("h2")
        reposNames.innerText = "Nome dos repositórios: "
        const ul = document.createElement("ul")

        const req2 = new XMLHttpRequest()

        req2.open("GET", "https://api.github.com/users/BrunoMoraiss/repos")
        req2.send(null)
        req2.onreadystatechange = () => {
            if(req2.readyState === 4){
                const res2 = JSON.parse(req2.responseText || "[]")

                for(let i = 0; i < res2.length; i++){
                    const li = document.createElement("li")
                    li.innerText = res2[i].name
                    ul.appendChild(li)
                }
            }
        } 
}        

apiGitHubAjax()

//document.querySelector("#dateBtn").addEventListener('click', apiGitHubAjax)