import { useState } from "react"
import { useToggle } from "./components/CustomHooks/useToggle"

function App() {
	const nameInput = useInputValue("")
	const [isDarkMode, toggleDarkMode] = useToggle(false)
	// const [isDarkMode, setIsDarkMode] = useState(false)

	return (
		<div
			style={{
				background: isDarkMode ? "#333" : "white",
				color: isDarkMode ? "white" : "#333",
			}}
		>
			<label>
				Name:
				<input {...nameInput} />
			</label>
			<br />
			<br />
			<button onClick={toggleDarkMode}>Toggle Dark Mode</button>
		</div>
	)
}

function useInputValue(initialValue) {
	const [value, setValue] = useState(initialValue)

	return {
		value,
		onChange: (e) => setValue(e.target.value),
	}
}

export default App
