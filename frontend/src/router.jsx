import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './home/App';
import Consultar from './consultar';

export default function Router(){

    return(
<div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/consultar' element={<Consultar />}  />
      </Routes>
    </BrowserRouter>
  
</div>
    )
}