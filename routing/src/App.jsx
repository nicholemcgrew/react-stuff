import { Navbar } from "./components/routing/Navbar"
import { About } from "./components/routing/pages/About"
import { Home } from "./components/routing/pages/Home"
import { Store } from "./components/routing/pages/Store"

export default function App() {
  let component
switch(window.location.pathname) {
    case "/":
        component = <Home />
        break   
    case "/about":
        component = <About />
        break
    case "/store":
        component = <Store />
        break
}   
    return <>
    <Navbar />
    {component}
    </>
}