import { useEffect, useState } from "react"
import { getPeopleData } from "../../helper/apiCaller";

const People = () => {
    const [loading,setLoading] = useState(false);
    const [people,setPeople] = useState([]);
    useEffect(() => {
        async function getPeople() {
            try {
                setLoading(true);
                const response = await getPeopleData();
                setPeople(response);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        getPeople();
    },[])
  return (
    <div>
        {
            loading
            ? <h1>Loading....</h1>
            : people.map(person => <div key={person.id}>{person.name} - {person.job}</div>)
            // : <pre>Logic just work</pre>
        }
    </div>
  )
}

export default People