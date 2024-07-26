import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import View from './components/View';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Add/>}/>
  <Route path='/search' element={<Page/>}/>
  <Route path='/display' element={<View/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
