export function TodoListItem({ children, isComplete }) {
	return (
		<label>
			<input type="checkbox" defaultChecked={isComplete} />
			{children}
		</label>
	)
}
