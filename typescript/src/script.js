type Person = {
    name: String
    skillLevel: "Beginner" | "Intermediate" | "Expert"
}


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

const b = {
    name: "Kyle",
    age: 28,
    isProgrammer: true,
}

type B = (typeof b)[keyof typeof b]