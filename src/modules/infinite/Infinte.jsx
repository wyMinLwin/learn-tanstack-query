import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getMods } from '../../helper/apiCaller'

const Infinte = () => {
    const infiniteData = useInfiniteQuery({
        queryKey:["infinite"],
        queryFn:({ pageParam = 1 }) => getMods(pageParam),
        getNextPageParam: (lastPage,allPages) => {
            if (allPages.length < 4) {
                return allPages.length+1
            } else {
                return undefined
            }
        }
    })
  return (
    <div>
        <h1>Infinite</h1>
        {
            infiniteData?.data?.pages.map(p => p.map(i => <div key={i.id}>{i.name}</div>))
        }
        <button disabled={!infiniteData.hasNextPage} onClick={() => infiniteData.fetchNextPage()}>Load More</button>
    </div>
  )
}

export default Infinte