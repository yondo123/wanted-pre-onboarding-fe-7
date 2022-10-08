import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TodoList from './pages/TodoList';

function App() {
    return (
        <div className="app">
            <header>
                <h1 className="text-lg">✅ Todo List</h1>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/todo" element={<TodoList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
