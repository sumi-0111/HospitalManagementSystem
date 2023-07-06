import { Navigate } from "react-router-dom";

function DoctorsViewProtected({token,children})
{
    token=localStorage.getItem("token");
    if(token!=null)
        return children;
    return <Navigate to='/'/>
}

export default DoctorsViewProtected;