import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Outputs from './pages/Outputs';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/outputs" element={<Outputs />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Layout>
  );
}

export default App;
