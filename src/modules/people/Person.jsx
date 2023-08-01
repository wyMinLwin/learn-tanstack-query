import { useParams } from "react-router-dom"
import { usePersonById } from "../../hooks/usePersonById"
import { useGetFriendsByFriendId } from "../../hooks/useGetFriendsByFriendId";
// import { useQueryClient } from "@tanstack/react-query";

const Person = () => {
    // const queryClient = useQueryClient()
    const {id} = useParams();
    const personData = usePersonById(id);
    const friendsData = useGetFriendsByFriendId(personData?.data?.friendId)
  return (
    <div>
        {
            personData.isLoading
            ? <h1>Person data are loading...</h1>
            :personData.isError 
            ? <pre>Error while retriving person data</pre>
            : personData.isSuccess && <h2>{personData.data.name} - {personData.data.job}</h2>
        }
        {
            friendsData.isLoading
            ? <h1>Friends data are loading...</h1>
            :friendsData.isError 
            ? <pre>Error while retriving person data</pre>
            : friendsData.isSuccess && friendsData.data.map(fri => (<h3 key={fri.id}>{fri.name} - {fri.job}</h3>))
        }
    </div>
  )
}

export default Person