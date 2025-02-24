import './App.css'
import Inicio from './components/Inicio'
import Servicios from './components/Servicios'
import PropositoContainer from './components/PropositoContainer'
import Lenguajes from './components/Lenguajes'
import FormYRedes from './components/FormYRedes'
import Footer from './components/Footer'
import Loader from './components/Loader'
import FadeInSection from './components/FadeInComponent'
import { useState, useEffect } from 'react'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div>
    {loading 
      ? <Loader/>
      : <div>
      <FadeInSection delay={0.3}>
        <Inicio/>
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <Servicios/>
      </FadeInSection>
      <FadeInSection delay={0.4}>
        <PropositoContainer/>
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <Lenguajes/>
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <FormYRedes/>
      </FadeInSection>
      <Footer/>
    </div>
  }
  </div>
  )
}

export default App
