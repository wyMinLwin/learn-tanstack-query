import React, { useState } from 'react'
import { useGetMods } from '../../hooks/useGetMods'

const Pagination = () => {
    const [page,setPage] = useState(1);
    const modsData = useGetMods(page);
    console.log(modsData)
  return (
    <div>
        <h1>pagination</h1>
        <div>{modsData?.data?.map(mod => <div key={mod.id}>{mod.name}</div>)}</div>
        {
            modsData && <button disabled={page===1} onClick={() => setPage(prev => prev -1)}>Previous</button>
        }
        {
            <button disabled={page===4} onClick={() => setPage(prev => prev +1)} >Next</button>
        }
    </div>
  )
}

export default Pagination