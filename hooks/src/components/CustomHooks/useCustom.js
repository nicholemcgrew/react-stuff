import { useEffect, useState } from "react";

export default function useCustom(defaultValue?: string) {
    const [ value, setValue] = useState('')

    useEffect(() => {
        setValue('updated')
    }, [])

    return value
}