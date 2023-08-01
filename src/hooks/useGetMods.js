import { useQuery } from "@tanstack/react-query";
import { getMods } from "../helper/apiCaller";

export const useGetMods = (page) => useQuery({
    queryKey:["mods",page],
    queryFn: () => getMods(page),
    keepPreviousData : true,
})