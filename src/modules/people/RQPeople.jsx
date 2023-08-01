import { Link } from "react-router-dom"
import { useGetPeople } from "../../hooks/useGetPeople"
import { useState } from "react";
import { useAddPeople } from "../../hooks/useAddPeople";
import { v4 as uuidv4 } from 'uuid';

const RQPeople = () => {
    const peopleResponse = useGetPeople();
    const [name,setName] = useState('');
    const [job,setJob] = useState('');
    const addResponse = useAddPeople();
    const handleAddData = () => addResponse.mutate({
      "name": name,
      "job":job,
      "friendId":1
    })
  return (
    <>
        <h1>People Data</h1>
        <div style={{marginBlock:'1em'}}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
          <input value={job} onChange={e => setJob(e.target.value)} placeholder="Enter Job" />
          <button onClick={() => handleAddData()} >Add Data</button>
        </div>
        <button onClick={() => peopleResponse.refetch()}>get people data</button>
        {
            peopleResponse.isLoading 
            ?<h2>Loading.....</h2>
            : peopleResponse.isError 
            ? <pre>Error occur while fetching</pre>
            : peopleResponse.isSuccess && peopleResponse.data.map(person => <Link key={person.id} to={`/rq-people/${person.id}`}>{person.name}</Link>)
        }
    </>
  )
}

export default RQPeople