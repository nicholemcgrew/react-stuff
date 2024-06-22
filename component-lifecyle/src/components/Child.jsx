import { useState } from "react";

export function Child() {
const [name, setName] = useState('')

console.log('Render Child')

return (
    <div className="child">
        <input value={name} onChange={e => setName(e.target.value)} />
        <br />
        My name is {name}.
    </div>
)
}