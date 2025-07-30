import type { FC } from "react"

interface BlogProps{
    title: string
    shortDescription: string
    cover: string
}

const BlogCard: FC<BlogProps> = ({title, shortDescription, cover})=>{
return(
    <div>
        <h1>title: {title}</h1>
        <h3>shortDescription: {shortDescription}</h3>
    <img src={cover} alt="world picture" />
    </div>
)

}


export default BlogCard