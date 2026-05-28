import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import CounterApp from "./CounterApp"
import TodoListApp from "./TodoListApp";


function LinkButtonPageApp(){
    return(
        <div>
            <h1>App 목록</h1>
            <ul>
                <li>
                    <Link to="/counterapp">CounterApp</Link>
                </li>
                <li>
                    <Link to="/todolistapp">TodoListApp</Link>
                </li>
            </ul>
        </div>
    )
}

export default function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={LinkButtonPageApp} />
                <Route path="/counterapp" element={CounterApp} />
                <Route path="/todolistapp" element={TodoListApp} />
            </Routes>
        </BrowserRouter>
    )
}