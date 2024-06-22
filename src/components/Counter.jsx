import { useState } from "react"

export function Counter() {
	// const [counter, setCounter] = useState(0)
    const [name, setName] = useState('Kyle')

	// function handleClick() {
	// 	setCounter((currentCount) => currentCount + 1)
	// }

	// return <div onClick={handleClick}>{counter}</div>
    return <input type="text" value={name} onChange={e => setName(e.target.value)} />
}
