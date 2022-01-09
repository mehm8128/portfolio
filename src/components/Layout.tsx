import { Outlet } from "react-router"
import Header from "./Header"
import SideBar from "./SideBar"

function Layout() {
	return (
		<div>
			<Header />
			<SideBar />
			<Outlet />
		</div>
	)
}

export default Layout
