//Iniciando um objeto usando notação literal

//Declarando um objeto de forma literal

const dotNotation = {
    prop1: "Sou uma propriedade que será acessada usando dot notation",
    metodo: () => "Sou o retorno de um método, ou seja, uma função dentro de um objeto"
    
}

//Acessando os componetes por meio do dotNotation
//console.log(dotNotation.prop1)
//console.log(dotNotation.metodo())

// Declarando uma nova propriedade e depois um novo método
dotNotation.prop2 = "Sou outra propriedade com valor tipo String"
dotNotation.metodo2 = () => "Sou o retorno de outro método"

//Acessando novos componentes
//console.log(dotNotation.prop2)
//console.log(dotNotation.metodo2())


const bracketNotation = {
    prop1: "Sou uma propriedade que será acessada usando bracket notation",
    metodo: () => "Sou o retorno de um método, ou seja, uma função dentro de um objeto"
}

//console.log(bracketNotation['prop1'])
//console.log(bracketNotation['metodo']())




