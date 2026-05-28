import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import CounterApp from "./CounterApp"
import TodoListApp from "./TodoListApp";


function LinkButtonPageApp(){
    const navigate = useNavigate();

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
                <li>
                    <button onClick={()=>navigate("/counterapp")}>CounterApp</button>
                </li>
                <li>
                    <button onClick={()=>navigate("/todolistapp")}>TodoListApp</button>
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