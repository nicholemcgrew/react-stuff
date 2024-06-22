import { useState } from "react"
import { Child } from "./components/Child"

function App() {
	const [count, setCount] = useState(0)
	console.log("Render App")

	return (
		<div>
			<button
				style={{ display: "block", marginBottom: "1rem" }}
				onClick={() => setCount((c) => c + 1)}
			>
				{count}
			</button>
			<Child />
		</div>
	)
}

export default App
