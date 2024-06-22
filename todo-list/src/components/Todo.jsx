
export function Todo({todoItem, isComplete}) {
    return (
        <label>
            <input type="checkbox" defaultChecked={isComplete} />
            {todoItem}
        </label>
    )
}