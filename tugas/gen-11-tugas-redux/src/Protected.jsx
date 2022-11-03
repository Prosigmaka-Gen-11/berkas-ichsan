import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./Contexts/ContextProvider";
import { useSelector, useDispatch } from "react-redux"


const ProtectedLayout = ()=> {
	const authSlice = useSelector(state => state.auth)
  const dispatch = useDispatch()


	if (authSlice.isLogin) {
		return <Outlet />
	} else {
		return <Navigate to="/" />
	}
}

export default ProtectedLayout;
