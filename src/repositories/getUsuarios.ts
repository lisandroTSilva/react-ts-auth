const getUserData = () => [
    {
        id: "41347",
        login: "1048559",
        id_pessoa: "307592",
        nm_pessoa: "Fabio Madeira Peres",
        nm_arquivo_foto:
            "https://homologacao.furg.br/casca/arquivos/fotos/0000000001534535865307592.jpg",
        vinculo: "Servidor",
        dt_ultimo_acesso: "2020-10-27 09:47:19.50077",
        menus: [
            {
                type: "menu",
                label: "Mensagens",
                url: "/mensagens/",
                icon: "fas fa-envelope-open"
            }
        ]
    },
    {
        id: "45111",
        login: "103592",
        id_pessoa: "307592",
        nm_pessoa: "Fabio Madeira Peres",
        nm_arquivo_foto:
            "https://homologacao.furg.br/casca/arquivos/fotos/0000000001534535865307592.jpg",
        vinculo: "Estudante",
        dt_ultimo_acesso: "2015-08-11 15:57:45.417633",
        isLogged: true,
        menus: [
            {
                type: "menu",
                label: "Mensagens",
                url: "/mensagens/",
                icon: "fas fa-envelope-open"
            },
            {
                type: "menu",
                label: "Acadêmico",
                url: "/informacoes-academicas/notas/",
                icon: "fas fa-file-signature",
                recent: true
            }
        ]
    },
    {
        id: "49201",
        login: "104837",
        id_pessoa: "307592",
        nm_pessoa: "Fabio Madeira Peres",
        nm_arquivo_foto:
            "https://homologacao.furg.br/casca/arquivos/fotos/0000000001534535865307592.jpg",
        vinculo: "Estudante",
        dt_ultimo_acesso: "2017-05-18 09:31:32.213002",
        menus: [
            {
                type: "menu",
                label: "Mensagens",
                url: "/mensagens/",
                icon: "fas fa-envelope-open"
            },
            {
                type: "menu",
                label: "Acadêmico",
                url: "/informacoes-academicas/notas/",
                icon: "fas fa-file-signature",
                recent: true
            }
        ]
    },
    {
        id: "143637",
        login: "43637",
        id_pessoa: "307592",
        nm_pessoa: "Fabio Madeira Peres",
        nm_arquivo_foto:
            "https://homologacao.furg.br/casca/arquivos/fotos/0000000001534535865307592.jpg",
        vinculo: "Estudante",
        dt_ultimo_acesso: "2014-12-05 13:39:06.136289",
        menus: [
            {
                type: "menu",
                label: "Mensagens",
                url: "/mensagens/",
                icon: "fas fa-envelope-open"
            },
            {
                type: "menu",
                label: "Acadêmico",
                url: "/informacoes-academicas/notas/",
                icon: "fas fa-file-signature",
                recent: true
            }
        ]
    },
    {
        id: "145556",
        login: "45556",
        id_pessoa: "307592",
        nm_pessoa: "Fabio Madeira Peres",
        nm_arquivo_foto:
            "https://homologacao.furg.br/casca/arquivos/fotos/0000000001534535865307592.jpg",
        vinculo: "Estudante",
        dt_ultimo_acesso: "2016-04-20 15:40:35.584664",
        menus: [
            {
                type: "menu",
                label: "Mensagens",
                url: "/mensagens/",
                icon: "fas fa-envelope-open"
            },
            {
                type: "menu",
                label: "Acadêmico",
                url: "/informacoes-academicas/notas/",
                icon: "fas fa-file-signature",
                recent: true
            }
        ]
    }
]

export default async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getUserData())
        }, 200)
    })
}

export const getUsers = () => {
    return [
        {
            id: 1235,
            nome: "Lisandro Silva",
            login: "lisandro",
            menus: [
                {
                    type: "menu",
                    label: "Mensagens",
                    url: "/mensagens/",
                    icon: "fas fa-envelope-open"
                },
                {
                    type: "menu",
                    label: "Acadêmico",
                    url: "/informacoes-academicas/notas/",
                    icon: "fas fa-file-signature",
                    recent: true
                }
            ]
        },
        {
            id: 5678,
            nome: "Fábio Madeira",
            login: "fabio",
            menus: [
                {
                    type: "menu",
                    label: "Mensagens",
                    url: "/mensagens/",
                    icon: "fas fa-envelope-open"
                }
            ]
        }
    ]
}
