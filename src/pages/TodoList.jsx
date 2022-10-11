import TodoItem from '../components/TodoItem';
import { useEffect, useState } from 'react';
import { getTodoList, createTodoItem } from '../api/todo';
import { checkAuthState } from '../utils/util';
import { useNavigate } from 'react-router-dom';

const TodoList = function () {
    const [todolist, setTodolist] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const navigate = useNavigate();

    useEffect(function () {
        fetchGetTodoList();
    }, []);

    useEffect(function () {
        if (!checkAuthState()) {
            navigate('/');
        }
    });

    //todo refresh
    function onRefreshTodoItem() {
        fetchGetTodoList();
    }

    //todo 조회
    function fetchGetTodoList() {
        getTodoList().then((res) => {
            if (res.result) {
                setNewTodo('');
                setTodolist(res.data);
            } else {
                alert(res.message);
            }
        });
    }

    //todo 추가
    function fetchCreateTodoItem() {
        createTodoItem({ todo: newTodo }).then(() => fetchGetTodoList());
    }

    return (
        <main>
            <div className="todo">
                <h1 className="hide">todo-list</h1>
                <section className="add-wrap">
                    <label htmlFor="todo-item" className="hide">
                        todo
                    </label>
                    <input
                        type="text"
                        id="todo-item"
                        placeholder="새로운 할 일을 입력해주세요."
                        maxLength="20"
                        onChange={(e) => {
                            setNewTodo(e.target.value);
                        }}
                        value={newTodo}
                    />
                    <button
                        type="button"
                        className="button-normal small"
                        disabled={!newTodo.length}
                        onClick={fetchCreateTodoItem}
                    >
                        추가
                    </button>
                </section>
                <section className="list-wrap">
                    <ul>
                        {todolist.map((item) => (
                            <TodoItem onRefreshTodoItem={onRefreshTodoItem} key={item.id} {...item} />
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default TodoList;
