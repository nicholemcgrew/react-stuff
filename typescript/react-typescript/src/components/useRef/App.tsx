import { useRef } from "react"

export default function App() {
	const inputRef = useRef<HTMLInputElement>(null)
	const value = useRef(0)

	value.current = 10

	return <input ref={inputRef} />
}
