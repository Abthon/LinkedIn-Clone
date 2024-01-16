import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import { useSelector } from 'react-redux';
import Login from "./Login";

function App() {
    const user = useSelector(state => state.user)
    return (
        <div className="app">
      <Header/>
      {
        user ? (
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widget/>

      </div>
          ) : <Login/>
      }

    </div>
    );
}

export default App;