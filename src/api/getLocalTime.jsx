import { useQuery } from "@tanstack/react-query"

export default function getLocalTime() {
  return useQuery({
    queryKey: ["localTime"],
    queryFn: async () => {
      const response = await fetch("https://worldtimeapi.org/api/ip")
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    },
  })
}
