import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTodoItem, updateTodoItem } from '../api/todo';
import { checkAuthState } from '../utils/util';

const TodoItem = function ({ id, todo, isCompleted, userId, onRefreshTodoItem }) {
    const [todoState, setTodoState] = useState({
        todo,
        isCompleted
    });
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState('');
    const navigate = useNavigate();

    useEffect(function () {
        if (!checkAuthState()) {
            navigate('/');
        }
    });

    //todo 삭제
    function fetchDeleteTodoItem() {
        const isConfirm = window.confirm('선택한 할 일을 삭제하시겠습니까?');
        if (isConfirm) {
            deleteTodoItem(id).then(() => onRefreshTodoItem());
        }
    }

    /**
     * todo 수정
     * @param {string} updateType : 업데이트 유형 (text, flag)
     */
    function fetchUpdateTodoItem(updateType) {
        const request = {
            id,
            todo,
            isCompleted
        };
        if (updateType === 'text') {
            updateTodoItem({ ...request, todo: editTodo }).then((res) => {
                setEditMode(false);
                setTodoState(res.data);
            });
        } else {
            updateTodoItem({ ...request, isCompleted: !todoState.isCompleted }).then((res) => {
                setEditMode(false);
                setTodoState(res.data);
            });
        }
    }

    return (
        <>
            {editMode ? (
                <li className="list-item edit">
                    <input
                        type="text"
                        className="edit-item"
                        onKeyUp={(e) => {
                            setEditTodo(e.target.value);
                        }}
                        defaultValue={editTodo}
                        maxLength="20"
                    />
                    <button
                        type="button"
                        className="button-control small"
                        onClick={() => {
                            fetchUpdateTodoItem('text');
                        }}
                    >
                        제출
                    </button>
                    <button
                        type="button"
                        className="button-control small"
                        onClick={() => {
                            setEditMode(false);
                        }}
                        onKeyUp={(e) => {
                            setEditTodo(e.target.value);
                        }}
                    >
                        취소
                    </button>
                </li>
            ) : (
                <li className="list-item">
                    {todoState.isCompleted ? (
                        <button
                            type="button"
                            onClick={(e) => {
                                fetchUpdateTodoItem('flag');
                            }}
                        >
                            <i className="ic-check"></i>
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={(e) => {
                                fetchUpdateTodoItem('flag');
                            }}
                        >
                            <i className="ic-uncheck"></i>
                        </button>
                    )}
                    <span className="text-md todo-item">{todoState.todo}</span>

                    <button
                        type="button"
                        className="button-control small"
                        onClick={() => {
                            setEditTodo(todoState.todo);
                            setEditMode(true);
                        }}
                    >
                        수정
                    </button>
                    <button type="button" className="button-control small" onClick={fetchDeleteTodoItem}>
                        삭제
                    </button>
                </li>
            )}
        </>
    );
};

export default TodoItem;
