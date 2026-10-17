const translations = {
    "pt-br": {
        welcome: "Bem-vindo",
        description: "Este é meu site.",
        button: "Entrar"
    },
    en: {
        welcome: "Welcome",
        description: "This is my website.",
        button: "Sign in"
    },
    es: {
        welcome: "Bienvenido",
        description: "Este es mi sitio web.",
        button: "Entrar"
    },
    fr: {
        welcome: "Bienvenue",
    }
}; // Tradução [Linguagem][Chave]

function translatePage(lang = "pt-br") { // Recebe a linguagem como parâmetro, e como precisamos de uma linguagem padrão, definimos "pt-br" como padrão
    document.querySelectorAll("[data-i18n]").forEach(element => { // Seleciona todos os elementos que possuem o atributo data-i18n e itera sobre eles
        const key = element.dataset.i18n; // Obtém o valor do atributo data-i18n, que é a chave de tradução (ex: data-i18n="button")
        element.textContent = translations[lang][key] ?? key; // Atualiza o conteúdo do elemento com a tradução correspondente à chave e à linguagem selecionada. Se não houver tradução, mantém a chave original.
        
        // Deixe o bloco abaixo somente durante o desenvolvimento, se houver algum texto sem tradução vai te alertar para a falta de tradução. Se quiser manter altere o "alert" para "console.log".
        if (element.textContent === key) {
            alert(`Não foi encontrada a tradução para a chave: ${key} na linguagem: ${lang}`);
        }
    });
}

document.querySelector("#language").addEventListener("change", (event) => {
    translatePage(event.target.value);
}); // Parte do Select, nosso ouvinte de evento que detecta quando o usuário muda a linguagem no select, e chama a função translatePage com o valor selecionado.

translatePage(); // Como no cabeçalho da função definimos a linguagem padrão como "pt-br", chamamos a função translatePage() sem parâmetros, para que a página seja carregada com a tradução em português.