import { createContext, useContext, useEffect, useState } from "react"
import { Child } from "./components/useContext/Child"

type User = {
	id: string
	name: string
	age: number
}

type ContextType = {
	users: User[]
	addUser: ({ name, age }: { name: string; age: number }) => void
}

 const Context = createContext<ContextType | null>(null)

export function useUsers() {
  const usersContext = useContext(Context)
  if (usersContext == null) {
    throw new Error("must use within provider")
  }
  return usersContext
}

export default function App() {
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		getUsers().then(setUsers)
	}, [])

	function addUser({ name, age }: { name: string; age: number }) {
		setUsers((prevUsers) => {
			return [...prevUsers, { id: crypto.randomUUID(), name, age }]
		})
	}

	return (
		<Context.Provider value={{ users, addUser }}>
			<Child />
		</Context.Provider>
	)
}

function getUsers() {
	return Promise.resolve([
		{ id: crypto.randomUUID(), name: "Kyle", age: 20 },
		{ id: crypto.randomUUID(), name: "Sally", age: 89 },
	])
}
