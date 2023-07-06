import { Navigate } from "react-router-dom";

function ApproveDoctorsViewProtected({token,children})
{
    token=localStorage.getItem("token");
    if(token!=null)
        return children;
    return <Navigate to='/'/>
}

export default ApproveDoctorsViewProtected;