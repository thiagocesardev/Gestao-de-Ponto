const user = [
    { login: "thiago", password: "123456"},
    { login: "marcelo", password: "123456"},
    { login: "vivyane", password: "123456"},
    { login: "pollyanna", password: "123456"},
    { login: "liliane", password: "123456" },
    { login: "erivalda", password: "123456"},
    { login: "Joelclecio", password: "123456"},
    { login: "bruno", password: "123456"},
    { login: "diego", password: "123456"},
    { login: "admin", password: "123456"},
]

function logar() {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const passwordErro = document.querySelector(".passwordErro")
    let validaLogin = false

    for (let i in user) {
        if (login == user[i].login && password == user[i].password) {
            validaLogin = true
            break
        } else {
            validaLogin = false
        }
    }
    if (validaLogin == true) {
        location.href = "home.html"
    } else {
        passwordErro.innerHTML = ("Usuário ou senha incorreto")
    }

}
