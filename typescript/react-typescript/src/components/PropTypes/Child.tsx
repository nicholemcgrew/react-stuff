import PropTypes from "prop-types"

export function Child({ name, age, children }) {
	return (
		<div>
			<strong>Name:</strong> {name}
			<br />
			<strong>Age:</strong> {age}
			<br />
			<strong>Age (in 10 year):</strong> {age + 10}
			<p>{children}</p>
		</div>
	)
}

Child.protoTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number,
	children: PropTypes.node,
}
