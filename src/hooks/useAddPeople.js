import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPeople } from "../helper/apiCaller"


export const useAddPeople = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey:["add people"],
        mutationFn: (body) => addPeople(body),
        onSuccess: () => queryClient.invalidateQueries('people')
    })
}