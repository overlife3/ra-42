import { useState, useEffect } from "react"

export default function useJsonFetch(url, opts) {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		if (url) {
			setLoading(true)
			fetch(url, opts)
				.then((res) => {
					if (!res.ok) {
            return Promise.reject("Произошла ошибка!");
          }
					return res.json()
				})
				.then((res) => {
					setLoading(false)
					setData(res)
				})
				.catch((error) => {
					setLoading(false)
					setError(error)
				})
		}
	}, [])
	return [data, loading, error]
}
