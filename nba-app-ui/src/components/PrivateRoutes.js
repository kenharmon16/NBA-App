import { Navigate, Outlet } from "react-router-dom";
import ChooseTeam from "./chooseTeam";

const PrivateRoutes = () => {
  let auth = { token: true };
  
  return (
    auth.token ? <ChooseTeam/> : <Navigate to="/login" />
    )
};

export default PrivateRoutes;
