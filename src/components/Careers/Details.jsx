import {useParams,useLoaderData} from 'react-router-dom'

function Details() {

    const { id } = useParams()
    const careers = useLoaderData()

  return (
    <div className="career-details">
        <h2>Career Detail from {careers.title}</h2>
        <p>Location : {careers.location}</p>
        <p>Expected Salary Package {careers.salary}</p>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure non adipisci laboriosam doloremque veniam dicta quod quasi voluptates, culpa totam.</p>
        </div>
    </div>
  )
}

export default Details;

//loader function

export const careerLoaderDetails = async ({params}) =>{
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/'+id)
    if(!res.ok){
        throw Error('The detail for the id does not exist')
    }
    return res.json()
}