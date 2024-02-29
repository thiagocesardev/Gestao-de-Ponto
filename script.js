const user = [
    { login: "thiago", password: "123456", regime: "8h", entries: [] },
    { login: "marcelo", password: "123456", regime: "6h", entries: [] },
    { login: "vivyane", password: "123456", regime: "8h", entries: [] },
    { login: "pollyanna", password: "123456", regime: "8h" },
    { login: "liliane", password: "123456", regime: "8h", entries: [] },
    { login: "erivalda", password: "123456", regime: "8h", entries: [] },
    { login: "joelclecio", password: "123456", regime: "6h", entries: [] },
    { login: "bruno", password: "123456", regime: "8h", entries: [] },
    { login: "diego", password: "123456", regime: "8h", entries: [] },
    { login: "admin", password: "123456", regime: "8h", entries: [] },
    { login: "assis", password: "123456", regime: "8h", entries: [] },
    { login: "você", password: "123456", regime: "8h", entries: [] },
    { login: "cleverlan", password: "123456", regime: "8h", entries: [] },
]




function logar() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const passwordErro = document.querySelector(".passwordErro");

    const foundUser = user.find(u => u.login === login && u.password === password);

    if (foundUser) {
        location.href = "home.html";
    } else {
        passwordErro.innerHTML = "Usuário ou senha incorretos";
    }
}


function pointRegister(login, recordType) {
    const userToRegister = user.find(user => user.login === login);
    

    if (userToRegister) {
        const now = new Date();
        const timestamp = now.toLocaleString();

        switch (recordType) {
            case "open":
                userToRegister.entries.push({ tipo: "Entrada", timestamp });
                alert(`Entrada registrada para ${login} às ${timestamp}`);
                break;
            case "exitLunch":
                userToRegister.entries.push({ tipo: "Início Intervalo", timestamp });
                alert(`Início Intervalo registrado para ${login} às ${timestamp}`);
                break;
            case "afternoonReturn":
                userToRegister.entries.push({ tipo: "Fim Intervalo", timestamp });
                alert(`Fim Intervalo registrado para ${login} às ${timestamp}`);
                break;
            case "exit":
                userToRegister.entries.push({ tipo: "Saída", timestamp });
                alert(`Saída registrada para ${login} às ${timestamp}`);
                break;
            default:
                alert("Tipo de registro inválido");
        }
    } else {
        console.log("Usuário não encontrado");
    }
}
