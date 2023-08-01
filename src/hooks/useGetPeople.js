import { useQuery } from "@tanstack/react-query";
import { getPeopleData } from "../helper/apiCaller";

export const useGetPeople = () => useQuery({
    queryKey:["people"],
    queryFn: () => getPeopleData(),
     // enabled: false,
     onSuccess: (data) => {console.log(data)},
     onError: () => {console.log('This must run on error')},
     // cacheTime: 1000,
 //    staleTime: 5000 * 60,
})