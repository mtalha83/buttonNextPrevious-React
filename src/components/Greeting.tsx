interface GreetingProps{
    location: string
    currentTime: string
}


const Greeting = ({location, currentTime}: GreetingProps)=>{
    
    return (
    <div><h2>Welcome to {location} </h2>
    <h2>The time is {currentTime}</h2>
    </div>)
    
}

export default Greeting