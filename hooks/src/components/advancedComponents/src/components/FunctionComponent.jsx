import { useState, useEffect } from "react"
import {DisplayString} from "./DisplayString"

export function FunctionComponent({ favoriteNumber }) {
	const [name, setName] = useState("")
	const [age, setAge] = useState(0)

	useEffect(() => {
		document.title = name
	}, [name])

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<br />
			<br />
			<button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
			{age}
			<button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
			<br />
			<br />
            {favoriteNumber != null && `My favorite number is ${favoriteNumber}`}
			<DisplayString name={name} age={age} />
		</div>
	)
}
