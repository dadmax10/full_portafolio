
import '../styles/App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from '../components/Menu';

//paginas
import Home from '../pages/Home'
import About from '../pages/About'
import Articles from '../pages/Articles'
import Productos from '../pages/Productos'

//blogs
import MetodologiaBasicaJs from '../Blogs/MetodologiaBasicaJs'
import Footer from '../pages/Footer';
import Error404 from '../pages/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/articles' element={<Articles/>}/>
          <Route exact path='/Productos' element={<Productos/>}/>
          <Route exact path='/metodologia-basica-js' element={<MetodologiaBasicaJs/>}/>
          <Route exact path='*' element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}



export default App;
