import { useState } from "react"

export function NameAndAge() {
	const [name, setName] = useState("")
	const [age, setAge] = useState(0)

	function handleDecrement() {
		setAge((currentAge) => currentAge - 1)
	}

	function handleIncrement() {
		setAge((currentAge) => currentAge + 1)
	}

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<br />
			<button onClick={handleDecrement}>-</button>
			<span>{age}</span>
			<button onClick={handleIncrement}>+</button>
			<br />
			<br />
			<div>
				My name is {name} and I am {age} years old
			</div>
		</div>
	)
}
