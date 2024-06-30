// const SKILL_LEVELS = ['Beginner', 'Intermediate', "Expert"] as const

// type Person = {
//     skillLevel: (typeof SKILL_LEVELS)[number]
// }

// SKILL_LEVELS.forEach(skillLevel => {
//     console.log(skillLevel)
// })

// type Person = {
//     name: String
//     skillLevel: "Beginner" | "Intermediate" | "Expert"
// }

// const preson: Person = { name: "Kyle", skillLevel: "Expert"}
// printSkillLevel(person.skillLevel)

// function printSkillLevel(skillLevel: Person["skillLevel"]) {
//     console.log(skillLevel)
// }

// type PeopleGroupedBySkillLevel = {
//     [index in Person["skillLevel"]]: Person[]
// }

// type PeopleGroupedBySkillLevel = {
//     [index: Person["name"]]: Person[]
// }
// const a: PeopleGroupedBySkillLevel = {
//     "Beginner": [{name: "kyle", skillLevel: "Beginner"}]
// }

// const a = ['sddf', 'd', true]

// type A = (typeof a)[number]

// const b = {
//     name: "Kyle",
//     age: 28,
//     isProgrammer: true,
// }

// type B = (typeof b)[keyof typeof b]

// let a = 1
// const b = 1

// const nums = ['1', '2', '3']
// const a = nums[0]
// nums.push('sdhsj')

// type Person = {
//     skillLevel:
// }

// const person = {
//     name: 'Kyle',
//     age: 28,
//     address: {
//         streat: "Main St",
//     },
// }

// type Tuple = [String, boolean]
// const a: Tuple = ['sdjks', true]

// Object.entries(person).forEach(([key, value]) => {
//     console.log(key, value)
// })

// const input = document.querySelector<HTMLInputElement>(".input")

// console.log(input?.value)

// function getSecond<ArrayType>(array: ArrayType[]) {
//     return array[1]
// }

// const a = [1, 2, 3]
// const b = ['dsjkaf', 'ahdfjah', 'dsahkj']

// const retA = getSecond(a)
// const retB = getSecond(b)

// const a = new Set<string>()
// const a = new Map<string, number>()

// a.set('fsdaf', 4)

// type APIResponse<TData> = {
//     data: TData
//     isError: boolean
// }

// type UserResponse = APIResponse<{name: string, age: number}>
// type BlogResponse = APIResponse<{title: string}>

// const a: APIResponse = {
//     data: {
//         name: 'dakjh',
//         age: 34,
//     }
//     isError: false,
// }

// const b: BlogResponse = {
//     data: {
//         title: 'dsaflk'
//     }
//     isError: false
// }

// type APIResponse<TData extends object> = {
//     data: TData
//     isError: boolean
// }

// const a: APIResponse<{name: string}> = {
//     data: {
//         name: 'sdhkj'
//     },
//     isError: false
// }

// type APIResponse<TData> = {
//     data: TData
//     isError: boolean
// }

// const a: APIResponse<Array<number>> = {
//     data: [1, 2, 3],
//     isError: false,
// }

// function aToO<T>(array: [string, T][]) {
//     const obj: {
//         [index: string]: T}

//     array.forEach(([key, value]) => {
//         obj[key] = value
//     })

//     return obj
// }

// const arr: [string, number | boolean][] = [
// 	["keyOne", 1],
// 	["keyTwo", 2],
// 	["keyTwo", true],
// ]

// const obj = aToO(arr)

// async function wait(duration: number): Promise<string> {
//     // return new Promise<string>(resolve => {
//     //     setTimeout(() => resolve("Hi"), duration)
//     // })
//     return await fetch('sdkj')
// }

// wait(1000).then(value => {
//     console.log(value.json())
// })

// type Todo = {
// 	id: string
// 	name: string
// 	completed: boolean
// }

// // type NewTodo = Pick<Todo, 'name' | 'status' | 'completed'>
// type NewTodo = Omit<Todo, 'id'>

// function saveTodo(todo: NewTodo): Todo {
// 	return { ...(todo, id: crypto.randomUUID()) }
// }

// function renderTodo(todo: Todo) {
// 	const div = document.createElement("div")
// 	div.id = todo.id
// }


type Todo = {
    title?: string
    completed: boolean
    address?:
{
    street?: string
}}

// type FormTodo = Partial<Todo>
type FormTodo = Required<Pick<Todo, 'title'>> & Omit<Todo, 'title'>

const todo: FormTodo = {
    completed: true, 
    title: 'ekasdj'
}

function checkLength(a: string, b: number) {
    return a.length < b.length
}

type ReturnOfLengthCheck = ReturnType<typeof checkLength>