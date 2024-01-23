import { useEffect, useState } from "react"

const Story = () => {

    const stories, setStories = useState([])

    useEffect(() => {

    })

    const list_stories = () => {
        const stories_arr = []

        stories.forEach(element => {
            stories_arr.append()
        });

        return (

        )
    }

    return (
        <>
            <p>
                This is the story page!
            </p>
            <p>Stories:</p>
            {stories.length == 0 ? null : list_stories}
        </>
    )

}

export default Story