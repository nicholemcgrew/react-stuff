// import { useState } from "react"

import { Counter } from "./components/Counter"

// function slowGetter() {
// 	//REally slow code
// 	return 'Kyle'
// }

function App() {
	
	// const [name, setName] = useState('kyle')
	// const [age, setAge] = useState(35)

	// function handleIncrement() {
	// 	setCount(count + 1)
	// }
	// function handleDecrement() {
	// 	setCount(count - 1)
	// }
	// function handleClick() {
	// 	setName("Sally")
	// 	setAge(age + 1)
	// }

	return (
		// <div>
		// 	<button onClick={handleDecrement}>-</button>
		// 	<span>{count}</span>
		// 	<button onClick={handleIncrement}>+</button>
		// </div>
		<Counter />
	)
	// return <h1 onClick={handleClick}>Hi {name} {age}</h1>
}

export default App
