import { useState } from "react"

export function ChildComponent() {
    const [name, setName] = useState("")

    return (
        <div className="child">
            <input value={name} onChange={e => setName(e.target.value)} />
<br />
My name is {name}
        </div>
    )
}