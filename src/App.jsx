import { useEffect, useState } from "react"
import BottomBar from "./components/BottomBar"
import Home from "./pages/Home"
import Loading from "./components/Loading"

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      window.scroll(0,0);
      setLoading(false);
    },2500)
  }, [])
  return (
      loading?
      <>
      <Loading />
      <div className="absolute opacity-0">
        <Home />
      </div>
      </>
      :<div className="font-inter">
      <Home />
      <div className="md:hidden">
        <BottomBar />
      </div>
    </div>
  )
}

export default App
