import { useState, useEffect } from "react"
import { User } from "./components/User"

function App() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	// const [error, setError] = useState()

	useEffect(() => {
		setLoading(true)

		const controller = new AbortController()
		fetch("https://jsonplaceholder.typicode.com/users", {
			signal: controller.signal,
		})
			.then((res) => res.json())
			.then(setUsers)
			.finally(() => {
				setLoading(false)
			})

		return () => {
			controller.abort()
		}
	}, [])

	return (
		<>
			<h1>User List</h1>
			{loading ? (
				<h2>Loading...</h2>
			) : (
				<ul>
					{users.map((user) => {
						return <User key={user.id} {...user} />
					})}
				</ul>
			)}
		</>
	)
}

export default App

// import { useState } from "react"

// function App() {
//   const [item, setItem ] = useState([
//     { id: crypto.randomUUID(), name: "Item 1"},
//     { id: crypto.randomUUID(), name: "Item 2"},
//   ])

//   function addItem() {
//     setItem(currentItems => {
//       return [{ id: crypto.randomUUID(), name: "New Item"}, ...currentItems]
//     })
//   }

// 	return (
// 		<div>
// 			<button onClick={addItem}>Add Item</button>
//       <pre>
//         {item.map(item => {
//           return (
//             <div key={item.id}>
//               {item.name}
//               <input type="text" />
//             </div>
//           )
//         })}
//       </pre>
// 		</div>
// 	)
// }

// export default App
