import { useRouteError } from "react-router-dom"
const Error=()=>{
    const err=useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Error</h1>
            <p>This is Error page</p>
            <p>{err.status}:{err. statusText}</p>
        </div>
    )
}
export default Error