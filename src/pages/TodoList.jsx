import TodoItem from '../components/TodoItem';
import { useEffect, useState } from 'react';
import { getTodoList, createTodoItem } from '../api/todo';

const TodoList = function () {
    const [todolist, setTodolist] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(function () {
        fetchGetTodoList();
    }, []);

    //todo refresh
    function onDeleteTodoItem() {
        fetchCreateTodoItem();
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
                        onKeyUp={(e) => {
                            setNewTodo(e.target.value);
                        }}
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
                            <TodoItem onDeleteTodoItem={onDeleteTodoItem} key={item.id} {...item} />
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default TodoList;
