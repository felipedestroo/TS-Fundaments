// 1 - conhecendo o number

const a:number = 10

let b:number = 3.58973

const c:number = 23

function sum(a:number, c:number) {
    return a + c
}

console.log(sum(a, c))

console.log(a)
console.log(typeof(a))

console.log(b.toPrecision(2))

// 2 - conhecendo a string 

  const firstName: string = "Felipe "

  const secondName: string = "Destro"

  const client: string = "Raimundo"

  function nome(firstName: string, secondName: string) {
    return firstName + secondName
  }

  console.log(`Olá, ${nome(firstName, secondName)}`)
  console.log(typeof(firstName))
  console.log(secondName.toUpperCase())
  console.log(firstName.toLowerCase() + secondName.toUpperCase())

  function hi(client: string) {
    console.log(`Olá, ${client}`)
    console.log(`Meu nome é ${nome(firstName, secondName)}`)
  }
  console.log(hi(client))