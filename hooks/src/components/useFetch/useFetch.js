import { useEffect, useState } from "react"

export function useFetch(url, options = {}) {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		setData(undefined)
		setIsError(false)
		setIsLoading(true)

		const controller = new AbortController()

		fetch(url, { signal: controller.signal, ...options })
			.then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
                return Promise.reject(res)
                })
			.then(setData)
			.catch((e) => {
				if (e.name === "AbortError") return

				setIsError(true)
			})
			.finally(() => {
                if (controller.signal.aborted) return
                setIsLoading(false)
            })

		return () => {
			controller.abort()
		}
	}, [url])

	return { data, isLoading, isError }
}
