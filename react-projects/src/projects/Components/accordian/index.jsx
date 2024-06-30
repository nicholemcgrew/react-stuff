// single selction
//multiple selection

import { useState } from "react"

export default function Accordian() {
    const [selected, setSelected] = useState(null)

    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?
                data.map(dataItem => <div className="item"></div>)
                 : <div>No data found!</div>
            }
        </div>

    </div>
}