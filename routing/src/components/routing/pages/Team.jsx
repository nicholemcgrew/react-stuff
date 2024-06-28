import { useOutletContext } from "react-router-dom"

export function Team() {
	const value = useOutletContext()
	return <h1>Team Member- {value}</h1>
}
