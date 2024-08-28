import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./Layouts/RootLayout"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"


const App = () => {

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App