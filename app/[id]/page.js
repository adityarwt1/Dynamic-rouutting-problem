import React from 'react'

export default async function page({params}) {
    const newRoute = (await params).id
  return (
    <div className='text-white'>
        <div className="">this your page routting name {newRoute}</div>
    </div>
  )
}


