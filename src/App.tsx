import { useState } from 'react'
import { BrowserRouter,Routes, Route , useNavigate } from 'react-router';
import './App.css'

function Home() {
  const navigate = useNavigate();

  return (

  );
}

function AboutUs(){
  const navigate = useNavigate();

  return (
    <>
    <header>
      <nav>
       {/* <button onClick={()=> navigate('/')}>Home</button> */}
      </nav>
    </header>
    <main>

    </main>

    <footer>

    </footer>
      
    </>
  )
}

function App() {

return(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<AboutUs/>}/>
  </Routes>
</BrowserRouter>
)
}

export default App
