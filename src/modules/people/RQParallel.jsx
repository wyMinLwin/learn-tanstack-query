import { useQueries } from "@tanstack/react-query";
import { getFriends, getPersonById } from "../../helper/apiCaller";

const RQParallel = () => {
    const parallel = useQueries({
        queries:[
            {queryKey:["people",1],queryFn:() => getPersonById(1)},
            {queryKey:["people",2],queryFn:() => getPersonById(2)},
            {queryKey:["friends"],queryFn:() => getFriends()}
        
        ]
    })
    console.log(parallel)
  return (
    <div>
        <h1>Parallel Queries</h1>
    </div>
  )
}

export default RQParallel