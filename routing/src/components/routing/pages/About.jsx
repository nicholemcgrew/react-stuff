import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function About() {
	const navigate = useNavigate()
	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate("/")

		}, 1000)
		return () => {
			clearTimeout(timeout)
		}
	}, [])
	return <h1>About</h1>
}
