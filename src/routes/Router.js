import { Routes, Route } from 'react-router-dom';

import HomePage from '../HomePage';
//não mexer.
//colocar rotas aqui dentro nas proximas vezes.
const Router = () => (
    <Routes>
        <Route exact path="/" element={<HomePage /> } />
    </Routes>
)

export default Router;
