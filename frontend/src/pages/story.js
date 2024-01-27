import { useEffect, useState } from "react"
import  { Link } from 'react-router-dom'

const Story = () => {

    const [stories, setStories] = useState([])

    useEffect(() => {
        console.log("ENV: ", process.env.REACT_APP_BACKEND_URL)
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

    // const redirect_to_story = (story_title)=>{
    //     console.log("Hello!")
    //     browserHistory.push(`/story?story=${story_title}`);
    // }

    const list_stories = () => {
        const stories_arr = []

        stories.forEach(element => {
            stories_arr.push(
                <Link to={`/story?story=${element}`} key={element}>{element[1]}</Link>
            )
        });

        return stories_arr
    }

    return (
        <>
            <p>
                This is the story page!
            </p>
            <p>Stories:</p>
            {stories.length === 0 ? null : list_stories()}
        </>
    )

}

export default Story