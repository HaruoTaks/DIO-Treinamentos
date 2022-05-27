/* Objetivos:
    - Explicar o que são APIs
    - Ensinar como lidar com requisições dessas APIs
    - Aprensentar o método fetch()
*/

/* APIs(Application Programming Interface) - É uma forma de intermediar os resultados do
back-end com o que é apresentado no front-end.
Você consegue acessá-la por meio de URLs.
*/

/* JSON: JavaScript Object Notatio
    É muito comum que APIs retornem seus dados no formato .json, portanto
    precisamos tratar esses dados quando os recebermos
*/

//--------------------------------------
// fetch - Consumindo APIs
// Exemplo

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

// Retorna uma Promise

