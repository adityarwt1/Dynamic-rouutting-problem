1. make a folder name of [id]
2. write code catch the param wriitting this code.
export default async function page({params}) {
    const newRoute = (await params).id
  return (
    <div className='text-white'>
        <div className="">this your page routting name {newRoute}</div>
    </div>
  )
}

4. your dinamic route is completed
