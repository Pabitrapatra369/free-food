import { useEffect, useState } from "react"

const User=(props)=>{
    const [count]=useState(0)
    const [userInfo,setuserInfo]=useState([])
    useEffect(()=>{
       fetchdata();
    },[]);
    const fetchdata=async()=>{
     const data=await fetch("https://api.github.com/users/akshaymarch7")
     const json =await data.json();
     console.log(json)
     setuserInfo(json)
    }
    return (
        <div className="user-card">
            {/* <img src={userInfo.avatar_url}/> */}
            <h2>Name :{userInfo.name}</h2>
            <p> Location:{userInfo.location}</p>
            <p>Age:25</p>
            <p>id:{userInfo.id}</p>
            <p>Email:akshasaini@gmail.com</p>
            <p>count:{count}</p>
        </div>
    )
}
export default User