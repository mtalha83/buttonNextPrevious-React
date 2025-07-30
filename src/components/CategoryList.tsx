
const list = ["Vegetables", "Fruits", "Drinks"]

const CategoryList = ()=>{
    return(

        <ul>
            {list.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default CategoryList