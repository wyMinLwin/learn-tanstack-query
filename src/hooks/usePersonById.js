import { useQuery } from "@tanstack/react-query";
import { getPersonById } from "../helper/apiCaller";

export const usePersonById  = (id) =>  useQuery({
    queryKey:["people",id],
    queryFn: () => getPersonById(id),
    onSuccess: () => console.log("person data retrived successfully"),
})