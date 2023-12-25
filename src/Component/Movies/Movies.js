import { useState, useEffect, React } from 'react'
import projectContent from "../env";


const Movies = () => {

  const [apirecord, setapi] = useState([])
  useEffect( () => {
    var apiPath = `https://api.themoviedb.org/3/movie/popular?api_key=${projectContent.apikey}&language=en-US&page=1`;

    fetch(apiPath)
    .then((res) => res.json())
    .then((data) => setapi(data.results));
    // .then((data) => console.log(data));
  },[])


    useEffect(() => {

    }, [])


  return (
    <div className="container">
            <h1>Popular Page</h1>
            <div className="row">
                {
                    apirecord && apirecord.length > 0 && apirecord.map(({id,original_title,vote_average,poster_path,release_date})=>
                          
                          <figure key={id} className="col-xl-3 col-6 text-center">
                            <img src={projectContent.imgpath+poster_path} className="img-fluid" />
                            <p>{original_title}</p>
                            <p>Rating : {vote_average}</p>
                            <p>Release Date : {release_date}</p>
                        </figure>
                    )
                }
                
            </div>
        </div>
  )
}

export default Movies
