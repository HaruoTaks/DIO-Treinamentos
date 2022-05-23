// this - A palavra reservada this é uma referência de contexto
// No exemplo this refere-se ao objeto pessoa
// Exemplo
const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

pessoa.fullName();
// "André Soares"

pessoa.getId();
// 1

// Seu valor pode mudar de acordo com o lugar no código onde foi chamada

/* contexto -------------Referência
   Em um objeto(método)=  Próprio objeto dono do método
   Sozinha= objeto global(em navegadores, window)
   Função= Objeto Global
   Evento= elemento que recebeu o evento */

   // Fora de função

   console.log(this);

   // Dentro de uma funçao

   (function(){
       console.log(this);
   })();

   // Dentro de um objeto(Método)

   const pessoa2 = {
       firstName2: 'Diego',
       lastName2: 'Vieira',
       getFullName2: function() {
           console.log(`${this.firstName2} ${this.lastName2}`);
       },
   };

   pessoa2.getFullName2();
   // Diego Vieira