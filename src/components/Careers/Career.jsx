import {useLoaderData, Link} from 'react-router-dom'

function Career() {
  const careers = useLoaderData()

  return (
    <div className="careers">
       {careers.map( career => (
        <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in : {career.location}</p>
        </Link>
       ))}
    </div>
  )
}

export default Career;
// loader function
export const careerLoader = async ( )=>{
    const res = await fetch('http://localhost:4000/careers')
    if(!res.ok){
      return Error('Could not fetch the careers')
    }
    return res.json()
}