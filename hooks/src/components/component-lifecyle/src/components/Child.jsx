import { useEffect, useState } from "react"

export function Child() {
	const [age, setAge] = useState(0)
	const [name, setName] = useState("")

	useEffect(() => {
		console.log("Render")
	})

	useEffect(() => {
		console.log("Hi")

		return () => {
			console.log("bye")
		}
	}, [])

	useEffect(() => {
		console.log(`My name is ${name} and I am ${age} years old`)
	}, [name, age])

	useEffect(() => {
		document.title = name
		const timeout = setTimeout(() => {
			console.log(`My name is ${name}`)
		}, 1000)

		return () => {
			clearTimeout(timeout)
		}
	}, [name])

	useEffect(
		() => {
			console.log(`My name is {name}`)
		},
		[name],
		setTimeout(10)
	)

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<br />
			<button onClick={() => setAge((a) => a - 1)}>-</button>
			{age}
			<button onClick={() => setAge((a) => a + 1)}>+</button>
			<br />
			<br />
			My name is {name} and I am {age} years old.
		</div>
	)
}
