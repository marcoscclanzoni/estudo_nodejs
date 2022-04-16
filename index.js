// esta primeira seção é repnsavel por preparar o express e o tornar utilizavel dentro da aplicação
const express = require('express'); // primeiro importamos os modulos do express
const app = express (); // em seguida criamos uma variavel app , nela  contem as funcionabilidades do express

// na segunda secao utilizanos a função get contida na variavel app que pertence ao express . A função get recebe uma requisição do front end e devolve uma reposta para o mesmo O backend se copnecta com o frond end atraves do metod get
// a função get recebe 2 parametros
// primeiro uma url requisitada pelo front end que sera http://localhost
// o segundo é uma funçãoi de dois sub parametros : req ( requisição ) e res ( reposta)
app.get('/' , (req, res) => { 
    res.send('Alo Mundo');
// na ultima secao utilizamos a função listen do express atraves da variabel app
// a funçãoim listen  monitora uma porta do HTTP no caso a porta 8080
});
app.listen(8080 , () => {
    let data = new Date ();
    console.log('Servidor Iniciado em :'+ data);
});
