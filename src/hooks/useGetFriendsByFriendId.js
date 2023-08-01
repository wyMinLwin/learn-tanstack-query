import { useQuery } from "@tanstack/react-query";
import { getFriendsById } from "../helper/apiCaller";
export const useGetFriendsByFriendId = (friendId) => useQuery({
    queryKey: ["friends",{"friendId":friendId}],
    queryFn: () => getFriendsById(friendId),
    // initialData:() => {
    //     console.log("--",queryClient.getQueryData(["friends",{"friendId":friendId}]))
    //     return queryClient.getQueryData(["friends",{"friendId":friendId}])?.find(fri => fri.id === friendId)
    // },
    initialData:[],
    enabled: !!friendId,
})