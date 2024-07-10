// 1 - Arrays

// Essa forma é a mais utilizada para criar arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[1])

let names: string[] = ["Felipe", "Destro"]

names.push("Felipe")

console.log(names[1])

// 2 - Outro Método de Array 

// Em códigos mais antigos é possivel que se encontre esse método

const nums: Array<number> = [10, 20, 30]

nums.push(40)

console.log(nums)

console.log(nums[3])

const newName: Array<string> = ["Felipe", "Destro"]

newName.push("Silva")

console.log(newName)

console.log(newName[2])

// 3 - O tipo Any

// Se atentar a NÃO utilizar o Any

const ary1: any = [1, "Felipe", [1, 2, 3], {names: "Silva"}]

console.log(ary1)

ary1.push("Felipe")

console.log(ary1)

// 4 - Parametros tipados e retornos de função

function soma(a: number, b: number) {
  return a + b
}

console.log(soma(10, 4))

function conc(c: string, d: string): string {
  return c + d 
}

// console.log(conc("Felipe ", "Destro"))

// 5- funcao anonima

setTimeout(function() {

  const sallary: number = 227356753.27625

  

  // console.log(parseFloat(sallary))

  // console.log(sallary)

}, 2000)

// 6 - Tipos de objeto

function passCoordinates(values: {x: number, y: number}) {
  console.log(
    `X: ${values.x}`
 )
  console.log(
    `Y: ${values.y}`
 )

}

const objCoord = {x: 329, y: 2398.3}

console.log(objCoord)

function emprego(cargos: {cargo1: string, cargo2: string}) {
  console.log(`1 Opcao: ${cargos.cargo1}`)
  console.log(`2 Opcao: ${cargos.cargo2}`)
}

const funcionario = {cargo1: "zelador", cargo2: "secretario"}

console.log(funcionario)

function produtos(marca: {op1: string, op2: string, op3: string}) {
  console.log(`Opcao 1: ${marca.op1}`)
  console.log(`Opcao 2: ${marca.op2}`)
  console.log(`Opcao 3: ${marca.op3}`)
}

const products = {op1: "Ype", op2: "Mr. Musculo", op3: "Vanish"}

console.log(products)

// 7 - Propriedas opcionais

function cliente(nome: string, sobrenome?: string) {
  console.log(`Nome do Cliente: ${nome}`)
  if(sobrenome) {
    console.log(`Nome do Cliente: ${sobrenome}`)
  }
}

cliente("Gustavo", "Destro")
cliente("Marina", "Silva")
cliente("Matheus")

// 8 - validando argumento opcional

// Maneira correta de se fazer a validação

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`
  }

  return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Victor", "Mendes"))
console.log(advancedGreeting("Bruno"))

// 9 - Union Types

function showBalance(balance: string | number) {
  console.log(`O saldo da sua conta é de R$${balance}`)
}

showBalance(3000)
showBalance("3000")