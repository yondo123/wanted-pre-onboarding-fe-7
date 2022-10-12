import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sign from './pages/Sign';
import TodoList from './pages/TodoList';
import RouteAuth from './components/RouteAuth';

function App() {
    return (
        <div className="app">
            <header>
                <h1 className="text-lg">✅ Todo List</h1>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RouteAuth component={<Home />} destination={'home'} />} />
                    <Route path="/todo" element={<RouteAuth component={<TodoList />} destination={'todo'} />} />
                    <Route path="/signin" element={<Sign />} />
                    <Route path="/signup" element={<Sign />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
