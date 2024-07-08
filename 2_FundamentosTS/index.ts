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

  const lastName: string = "Destro"

  const client: string = "Raimundo"

  function nome(firstName: string, lastName: string) {
    return firstName + lastName
  }

  console.log(`Olá, ${nome(firstName, lastName)}`)
  console.log(typeof(firstName))
  console.log(lastName.toUpperCase())
  console.log(firstName.toLowerCase() + lastName.toUpperCase())

  function hi(client: string) {
    console.log(`Olá, ${client}`)
    console.log(`Meu nome é ${nome(firstName, lastName)}`)
  }
  console.log(hi(client))

  // 3 - Boolean

  const t: boolean = true
  const f: boolean = false
  
  console.log(t, f)

   console.log(typeof t)
   console.log(typeof f)

  //  4 - Annotation e Inferência

  let ann: string = "Annotation"
  let inf = "Inferência"


  // inf = 1