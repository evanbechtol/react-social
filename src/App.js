import './App.css';
import Header from "./layout/Header/Header";
import Feed from "./components/Feed/Feed";

function App() {
    return (
        <div className="App">
            <Header heading="Chasebook"/>
            <Feed/>
        </div>
    );
}

export default App;
