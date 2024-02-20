const user = [
    { login: "thiago" || "Thiago", password: "123456" },
    { login: "marcelo" || "Marcelo", password: "123456" },
    { login: "vivyane" || "Vivyane", password: "123456" },
    { login: "pollyanna" || "Pollyanna", password: "123456" },
    { login: "liliane" || "Liliane", password: "123456" },
    { login: "erivalda" || "Erivalda", password: "123456" },
    { login: "Joelclecio" || "joelclecio", password: "123456" },
    { login: "bruno" || "Bruno", password: "123456" },
    { login: "admin" || "Admin", password: "123456" },
    
]

function logar() {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const passwordErro = document.querySelector (".passwordErro")
    for (let i in user) {
        if (login == user[i].login && password == user[i].password) {
            location.href = "home.html"
        }
         else {
            passwordErro.innerHTML = ("Usuário ou senha incorreto")
        }

    }
}


