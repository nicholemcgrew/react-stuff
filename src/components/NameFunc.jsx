// export function NameFunc({ name, age = 30, isProgrammer }) {
//     console.log("Is Programmer", isProgrammer)
//     return <div>{name} {age}</div>
// }

export function NameFunc({ children }) {
	return <div>{children}</div>
}
