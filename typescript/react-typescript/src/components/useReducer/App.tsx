import { useReducer } from "react"

type State = {
	count: number
}

type Action =
	| {
			type: "Increment"
			increaseBy?: number
	  }
	| {
			type: "Decrement"
			decreaseBy?: number
	  }

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "Increment":
			return { ...state, count: state.count + action.increaseBy }
		case "Decrement":
			return { ...state, count: state.count - action.decreaseBy }
		default:
			throw new Error("sdjskj")
	}
}
export default function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 })

	return (
		<div>
			<button onClick={() => dispatch({ type: "Decrement", decreaseBy: 1 })}>
				-
			</button>
			{state.count}
			<button onClick={() => dispatch({ type: "Increment", increaseBy: 1 })}>
				+
			</button>
		</div>
	)
}
