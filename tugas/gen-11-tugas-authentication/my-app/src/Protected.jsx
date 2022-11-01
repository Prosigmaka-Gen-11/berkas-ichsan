import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./Contexts/ContextProvider";


const ProtectedLayout = ()=> {
	const { isLogin } = useStateContext()

	console.log(isLogin)

	if (isLogin) {
		return <Outlet />
	} else {
		return <Navigate to="/" />
	}
}

export default ProtectedLayout;
