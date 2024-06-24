import { useEffect, useState } from "react"

export function App() {
	const [count, setCount] = useState(0)
	const [age, setAge] = useState(0)
	const [name, setName] = useState("Nichole")

	useEffect(() => {
		console.log("changed")
		console.log(name)
	}, [count, name])

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount((count) => count - 1)}>-</button>
			<button onClick={() => setCount((count) => count + 1)}>+</button>
			<br />
			<label>
				Name
				<input value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<br />
			<label>
				Age
				<input
					type="number"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
			</label>

			<p>
				My name is {name} and I am {age} years old.
			</p>
		</div>
	)
}

export default App
