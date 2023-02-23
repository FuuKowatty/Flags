import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData() {
            setIsPending(true)

            try {
                const res = await fetch(url, {signal: controller.signal})
                if(!res.ok) {
                    throw new Error(`${res.statusText}`)
                }
                const json = await res.json()
                setData(json)
                setIsPending(false)
                setError(null)
            }
            catch(er) {
                 if(er.name == 'AbortError') {
                    console.log('request was cancelled');
                } else {
                    setError(er)
                    setIsPending(false)
                }
            }

        } 
        fetchData()


        return () => controller.abort()
    }, [url])


    return { data, error, isPending, setData }
}


