
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Cadastro from './pages/Cadastro';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/ClientesCadastrados" component={ClientesCadastrados} />
      <Route exact path="/Cadastro" component={Cadastro} />
    </BrowserRouter>
  );
}

export default App;
