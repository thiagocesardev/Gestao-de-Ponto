const user = [
    { login: "thiago", password: "123456", regime: "8h"},
    { login: "marcelo", password: "123456", regime: "6h"},
    { login: "vivyane", password: "123456", regime: "8h"},
    { login: "pollyanna", password: "123456", regime: "8h"},
    { login: "liliane", password: "123456", regime: "8h" },
    { login: "erivalda", password: "123456", regime: "8h"},
    { login: "joelclecio", password: "123456", regime: "6h"},
    { login: "bruno", password: "123456", regime: "8h"},
    { login: "diego", password: "123456", regime: "8h"},
    { login: "admin", password: "123456", regime: "8h"},
    { login: "assis", password: "123456", regime: "8h"},
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

const datePoint = [
    { user: "thiago", entries: [] },
    { user: "marcelo", entries: [] },
    { user: "vivyane", entries: [] },
    { user: "pollyanna", entries: [] },
    { user: "liliane", entries: [] },
    { user: "erivalda", entries: [] },
    { user: "joeclecio", entries: [] },
    { user: "bruno", entries: [] },
    { user: "diego", entries: [] },
    { user: "admin", entries: [] },

  ];


  function pointRegister (login, recordType){
    const userLogar = datePoint.find (user=>user.user === login);


    if (userLogar){
        const now = new Date();
       
        switch (recordType) {
            case "open":
                userLogar.entries.push({ tipo: "Entrada", timestamp: now });
                console.log(`Entrada registrada para ${login} às ${now.toLocaleTimeString()}`);
                break;
            case "exitLunch":
                userLogar.entries.push({ tipo: "Saída para Almoço", timestamp: now });
                console.log(`Saída para almoço registrada para ${login} às ${now.toLocaleTimeString()}`);
                break;
                    case "affernoonReturn":
                        userLogar.entries.push ({tipo: "Retorno à Tarde", timestamp: now});
                        console.log (`Entrada registrada para ${login} as ${now.toLocaleTimeString}`)
                                 
                        break;
                        case "exit":
                            userLogar.entries.push ({tipo: "Saída para Casa", timestamp: now});
                            console.log (`Entrada registrada para ${login} as ${now.toLocaleTimeString}`)
                                     
                            break;
        
                            default:
                              console.log("Tipo de registro inválido");
                          }
                        } else {
                          console.log("Usuário não encontrado");
        }
        
    }

    pointRegister("thiago", "open");
    pointRegister("thiago", "exitLunch");
    pointRegister("thiago", "affernoonReturn");
    pointRegister("thiago", "exit");

 
