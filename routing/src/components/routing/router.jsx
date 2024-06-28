import { Navigate, Outlet, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Team } from "./pages/Team"
import { TeamMember } from "./pages/TeamMember"
import { Navbar } from "./Navbar"
import { TeamNav } from "./TeamNav"
import { NewTeamMember } from "./pages/NewTeamMember"

export const router = createBrowserRouter([
	{
		element: <NavLayout />,
		errorElement: <h1>Error</h1>,
		children: [
			{ path: "*", element: <Navigate to="/" /> },
			// {path: "*", element: <h1>404</h1>},
			{ path: "/", element: <Home /> },
			// { path: "/test/*", element: <h1>Test</h1> },
			// { path: "/test/new", element: <h1>New</h1> },
			{ path: "/store", element: <Store /> },
			{ path: "/about", element: <About /> },
			{
				path: "/team",
				element: <TeamNavLayout />,
				children: [
					{ index: true, element: <Team /> },
					{ path: ":memberId", element: <TeamMember /> },
					{ path: "new", element: <NewTeamMember /> },
				],
			},
		],
	},
])

function NavLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

function TeamNavLayout() {
	return (
		<>
			<TeamNav />
			<Outlet context="Hi from outlet" />
		</>
	)
}
