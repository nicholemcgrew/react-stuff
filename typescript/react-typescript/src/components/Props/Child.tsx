import type { ReactNode } from "react"

type ChildProps = {
	children?: ReactNode
}
export function Child({children}: ChildProps) {
	return <h1>{children}</h1>
}

// export const Child: React.FC<ChildProps> = ({ name }) => {
// 	return <h1>{name}</h1>
// }
