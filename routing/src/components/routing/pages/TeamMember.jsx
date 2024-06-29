import { useLoaderData } from "react-router-dom"
// import teamMembers from '../teamMembers.json'

export function TeamMember() {
	const member = useLoaderData()
	return <h1>Team Member - {member.name}</h1>
}
