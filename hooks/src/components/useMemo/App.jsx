import { useState, useMemo } from "react"

const LIST = Array(1000000)
	.fill()
	.map((_, i) => i + 1)

function App() {
	const [query, setQuery] = useState("")
	const [isDarkMode, setIsDarkMode] = useState(false)

	const filteredList = useMemo(() => {
		return LIST.filter((n) => n.toString().includes(query))
	}, [query])

	// const filteredList = LIST.filter((n) => n.toString().includes(query))

	console.log(filteredList.length)

	return (
		<div
			style={{
				background: isDarkMode ? "#333" : "white",
				color: isDarkMode ? "white" : "#333",
			}}
		>
			<label>
				Query:
				<input value={query} onChange={(e) => setQuery(e.target.value)} />
				<label>
					<input
						type="checkbox"
						value={isDarkMode}
						onChange={(e) => setIsDarkMode(e.target.checked)}
						checked={isDarkMode}
					/>
					Dark Mode
				</label>
			</label>
		</div>
	)
}

export default App
