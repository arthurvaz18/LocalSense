import ReactDOM from 'react-dom/client';
import Rotas from './Rotas';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Rotas />
  </BrowserRouter>
);
