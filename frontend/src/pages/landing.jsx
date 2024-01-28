import { useEffect, useState } from "react"
import  { Link } from 'react-router-dom'

const Landing = () => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        const URL = process.env.REACT_APP_BACKEND_URL + "/api/get_stories"
        const requestOptions = {
            method: 'GET',
        };
        fetch(URL, requestOptions)
            .then(response => response.json())
            .then(data => {
                setStories(data)
            })

    }, [])

    const list_stories = () => {
        const stories_arr = []

        stories.forEach(element => {
            stories_arr.push(
                <Link to={`/story?story=${element[1]}`} key={element} style={{}}>{element[1]}</Link>
            )
        });

        return stories_arr
    }

    return (
        <>
            <div className="home">
                <div className="title">
                    <p>
                        Available stories
                    </p>
                </div>
                <div className="story_list">
                    {
                        stories.length === 0 ?  
                        <p className="loading_message">
                            Loading stories...
                        </p>                        
                        : 
                        list_stories()
                    }
                </div>
            </div>
        </>
    )

}

export default Landing