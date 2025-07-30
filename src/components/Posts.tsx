import { useEffect, useState } from "react"

const Posts = ()=>{

    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((data)=> setPost(data)
        )
        
    },[])

    console.log("post", post);
    

    return(
        <div>
            {post.map(({id, title, body}) => (
                <div key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>

            ))}
        </div>

    )
}

export default Posts