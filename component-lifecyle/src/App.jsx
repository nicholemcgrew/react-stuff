import { useState } from "react"
import { Child } from "./components/Child"

function App() {
	const [show, setShow] = useState(true)

	const childComponent = show ? <Child /> : null

	return (
		<div>
			<button onClick={() => setShow((currentShow) => !currentShow)}>
				Show/Hide
			</button>
			{childComponent}
		</div>
	)
}

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

export default App
