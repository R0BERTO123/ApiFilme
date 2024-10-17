import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App/App';

export default function Router(){

    return(
<div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  />
      </Routes>
    </BrowserRouter>
  
</div>
    )
}