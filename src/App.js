import {
  BrowserRouter as Router,

  Route,

  Routes,

} from 'react-router-dom'
import HomePage from './components/homePage';
import Header from './components/header';
import NewtworkComponent from './components/networkComponent';
import ArticleComponent from './components/articleComponent';
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={
          <HomePage />
        } />
        <Route path='/networks' element={
        <NewtworkComponent></NewtworkComponent>
        }/>
         <Route path='/article/:id' element={
        <ArticleComponent/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
