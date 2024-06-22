import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]

function App() {
	const [array, setArray] = useState(INITIAL_VALUE)
  const [value, setValue] = useState('')

	function removeFirstElement() {
		setArray((currentArray) => {
			return currentArray.slice(1)
		})
	}

	function removeSpecificLetter(letter) {
		setArray((currentArray) => {
			return currentArray.filter((element) => element !== letter)
		})
	}

	function AddLetterToStart(letter) {
		setArray((currentArray) => {
			return [letter, ...currentArray]
		})
	}

	function AddLetterToEnd(letter) {
		setArray((currentArray) => {
			return [...currentArray, letter]
		})
	}

  function updateAToH() {
		setArray((currentArray) => {
			return currentArray.map(element => {
        if (element === 'A') return 'H'
        return element
      })
		})
	}

	function clear() {
		setArray([])
	}

	function reset() {
		setArray(INITIAL_VALUE)
	}

  function addLetterAtIndex(letter, index) {
    setArray(currentArray => {
      return [...currentArray.slice(0, index), letter, ...currentArray.slice(index)]
    })
  }

	return (
		<div>
			<button onClick={removeFirstElement}>Remove first Element</button>
			<br />
			<button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
			<br />
			<button onClick={() => AddLetterToStart("B")}>Add to start</button>
			<br />
			<button onClick={() => AddLetterToEnd("Z")}>Add to end</button>
			<br />
			<button onClick={updateAToH}>Update all A's</button>
			<br />
			<button onClick={() => addLetterAtIndex("C", 2)}>Add C at 2</button>
			<br />
			<button onClick={clear}>Clear</button>
			<br />
			<button onClick={reset}>Reset</button>
			<br />
      <input value={value} onChange={e => setValue(e.target.value)} />
			<br />
      <button onClick={() => AddLetterToStart(value)}>Add Value to Array</button>
			<br />
			{array.join(", ")}
		</div>
	)
}

export default App
