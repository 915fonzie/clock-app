import { useQuery } from '@tanstack/react-query'

export default function getRandomQuote() {
    return useQuery({
        queryKey: ["quote"],
        queryFn: async () => {
            const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational",
                    { headers: { "X-Api-Key": "rQVIfyLsxkPPnj17QnmVzw==NTcUMJfMqJH6dBDt" } })
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        },
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
      })
}