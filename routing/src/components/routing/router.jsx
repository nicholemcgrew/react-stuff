import {
	Navigate,
	Outlet,
	createBrowserRouter,
	redirect,
	useNavigate,
	useNavigation,
} from "react-router-dom"
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
				loader: ({ request: { signal } }) => {
					return fetch("https://jsonplaceholder.typicode.com/users?_limit=5", {
						signal,
					}).then((res) => {
						if (res.status === 200) return res.json()

						throw redirect("/team")
					})
				},
				children: [
					{ index: true, element: <Team /> },
					{
						path: ":memberId",
						loader: ({ params, request: { signal } }) => {
							return fetch(
								`https://jsonplaceholder.typicode.com/users/${params.memberId}`,
								{ signal }
							)
						},
						element: <TeamMember />,
					},
					{ path: "new", element: <NewTeamMember /> },
				],
			},
		],
	},
])

function NavLayout() {
	const { state } = useNavigation()

	return (
		<>
			<Navbar />
			{state === "loading" ? <h1>Loading...</h1> : <Outlet />}
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
