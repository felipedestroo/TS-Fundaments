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