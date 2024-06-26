import { useEffect, useState } from "react"
// import { Child } from "./components/Child"

export default function App() {
	const [users, setUsers] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()

	useEffect(() => {
		setLoading(true)
		setError(undefined)
		const controller = new AbortController()
		fetch("https://jsonplaceholder.typicode.com/users", {
			signal: controller.signal,
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json()
				} else {
					return Promise.reject(res)
				}
			})
			.then((data) => {
				setUsers(data)
			})
			.catch((e) => {
				if (e?.name === "AbortError") return
				setError(e)
			})
			.finally(() => {
				setLoading(false)
			})
		return () => {
			controller.abort()
		}
	}, [])

	let jsx
	if (loading) {
		jsx = <h2>Loading...</h2>
	} else if (error != null) {
		jsx = <h2>Error!</h2>
	} else {
		jsx = JSON.stringify(users)
	}

	return (
		<div>
			<h1>Users</h1>
			{jsx}
		</div>
	)
}

//Show/hide
// 	const [show, setShow] = useState(true)

// 	const childComponent = show ? <Child /> : null

// 	return (
// 		<div>
// 			<button onClick={() => setShow((currentShow) => !currentShow)}>
// 				Show/Hide
// 			</button>
// 			{childComponent}
// 		</div>
// 	)
// }

// NAME AND AGE

//SHOW/HIDE

// const [isShown, setIsShown] = useState(true)

// const childComponent = isShown ? <ChildComponent /> : null

// return (
//   <div>
//     <button style={{display: "block", marginBottom: '1rem'}}
//     onClick={() => setIsShown(s => !s)}
//     >
//       Show/Hide
//     </button>
//     {childComponent}
//   </div>
// )

//COUNT
// const [count, setCount] = useState(0)
// console.log("Render App")

// return (
// 	<div>
// 		<button
// 			style={{ display: "block", marginBottom: "1rem" }}
// 			onClick={() => setCount((c) => c + 1)}
// 		>
// 			{count}
// 		</button>
// 		<Child />
// 	</div>
// )
// }
