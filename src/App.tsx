import { useState } from 'react'
import { BrowserRouter,Routes, Route , useNavigate } from 'react-router';
import './App.css'

function NavBar(){
  const navigate = useNavigate();
  return(
  <>
  <div className="top-bar">
     <a href="mailto:contact@italentworkspace.nl">contact@italentworkspace.nl</a>
    <a href="https://maps.app.goo.gl/ZAUhJPrriudF5GG9A">Bijlmerdreef 17, 1104 CV Amsterdam, Nederland</a>
  </div>
  <nav>
    <div className="logo">
        LOGO
    </div>


    <div className="nav-links">
      <button onClick={()=> navigate('/')}>Home</button>
      <button onClick={()=> navigate('/diensten')}>Diensten</button>
      <button onClick={()=> navigate('/portofolio')}>Portofolio</button>
      <button onClick={()=> navigate('/stage')}>Stage</button>
      <button onClick={()=> navigate('/reviews')}>Reviews</button>
      <button onClick={()=> navigate('/overons')}>Over Us</button>
    </div>
  </nav>
  </>
);
}

function Home() {
  const navigate = useNavigate();

return (
  <>
  <header>
    <NavBar/>
  </header>

  <main>
    <div className="headline">
      <h2>ITalent Workspace</h2>
      <h1>Headline</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi eos voluptatem quos. Reiciendis recusandae numquam illum dolore hic odio at maiores. Eum pariatur odit nulla repellendus impedit. Deleniti, laudantium.</h3>
    </div>
    <div className="headlinebuttons">
      <button>Button</button> 
      <button>Button</button> 
    </div>
    <section className="herosection">
      <h1>ONZE DIENSTEN</h1>

      <div className="herocontainer">
        
        <div className="herocards"></div>
        <div className="herocards"></div>
        <div className="herocards"></div>
      </div>
    </section>

    <section className="portofoliosection">
      <h3 className="top">Portofolio</h3>
      <h1 className="second">Onze projecten</h1>

      <div className="projectcard">
        <h1 className="projlogo">LOGO</h1>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos animi officiis nemo nesciunt inventore amet voluptatibus deserunt exercitationem facere commodi perspiciatis voluptatum nobis nulla beatae, fugit ipsum numquam, eligendi explicabo!</p>
        
        <button>Button</button>
      </div>
    </section>  
  </main>
  </>
)
}

function Diensten() {
  const navigate = useNavigate();

return (
  <>
  <header>
    <NavBar/>
  </header>
  </>
)
}
function Portofolio() {
  const navigate = useNavigate();

return (
  <>
  <header>
    <NavBar/>
  </header>
  </>
)
}

function Stage() {
  const navigate = useNavigate();

return (
  <>
  <header>
    <NavBar/>
  </header>
  </>
)
}

function Reviews() {
  const navigate = useNavigate();

return (
  <>
  <header>
    <NavBar/>
  </header>
  </>
)
}


function Over(){
  const navigate = useNavigate();

  return (
    <>
    <header>
      <NavBar/>
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
    <Route path="/diensten" element={<Diensten/>}/>
    <Route path="/portofolio" element={<Portofolio/>}/>
    <Route path="/stage" element={<Stage/>}/>
    <Route path="/reviews" element={<Reviews/>}/>
    <Route path="/overons" element={<Over/>}/>
  </Routes>
</BrowserRouter>
)
}

export default App
