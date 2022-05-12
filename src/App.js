

import About from './components/About';
import Categories from './components/Categories';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Categories.css'
import ArticleList from './components/articles/ArticleList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/articles" element={<ArticleList />}></Route>
    </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
