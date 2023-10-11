import Home from "./components/Home"
import OthePages from "./components/OthePages"
import NabBar1 from "./components/bars/NabBar1"
import NavBar2 from "./components/bars/NavBar2"

function App() {
  return (
    <div className="App">
      <NabBar1 />
      <NavBar2 />
      <Home />
      <OthePages />
    </div>
  )
}

export default App
