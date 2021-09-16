import './App.css';
import Header from "./layout/Header/Header";
import Feed from "./components/Feed/Feed";
import {useEffect, useState} from "react";

function App() {
    const [myVariable, setMyVariable] = useState({a: 1, b: 2});
    useEffect(() => {
        setMyVariable((prevState) => ({
            ...prevState,
            c: 3
        }));
    }, []);
    return (
        <div className="App">
            {JSON.stringify(myVariable)}
            <Header heading="Chasebook"/>
            <Feed/>
        </div>
    );
}

export default App;
