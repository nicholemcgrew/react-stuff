
type ListProps<TItem> = {
    items: TItem[]
    getKey: (item: TItem) => React.Key
    renderItem: (item: TItem) => React.ReactNode
}
export function List<TItem>({items, getKey, renderItem}: ListProps<TItem>) {
    return (
        <div>
            {items.map(item => (
                <div key={getKey(item)}>{renderItem(item)}</div>
            ))}
        </div>
    )
}