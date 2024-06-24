import { useEffect, useState } from "react"

export default function App() {
	const [count, setCount] = useState(0)

	useEffect(() => {
    //The code we want to run
console.log('The count is:', count)
    
//optional return function-- useful for timeouts, unsubscribing to event listeners. 
// return () => {
//   console.log("I am being cleaned up")
// }

  },[count]) // dependency array

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
