import { useQuery } from "@tanstack/react-query"

export default function getLocation() {
    return useQuery({
        queryKey: ["location"],
        queryFn: async () => {
            const response = await fetch("https://ipgeolocation.abstractapi.com/v1?api_key=4e47b9810a8d474b99f57043cb555d77")
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