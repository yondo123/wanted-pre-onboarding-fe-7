import { useState } from 'react';
import { deleteTodoItem } from '../api/todo';

const TodoItem = function ({ id, todo, isCompleted, userId, onDeleteTodoItem }) {
    const [editMode, setEditMode] = useState(false);

    //todo 삭제
    function fetchDeleteTodoItem() {
        const isConfirm = window.confirm('선택한 할 일을 삭제하시겠습니까?');
        if (isConfirm) {
            deleteTodoItem(id).then(() => onDeleteTodoItem());
        }
    }

    return (
        <>
            {editMode ? (
                <li className="list-item edit">
                    <input type="text" className="edit-item" value="공부하기" maxLength="20" />
                    <button type="button" className="button-control small">
                        제출
                    </button>
                    <button type="button" className="button-control small">
                        취소
                    </button>
                </li>
            ) : (
                <li className="list-item">
                    <button type="button">
                        {isCompleted ? <i className="ic-check"></i> : <i className="ic-uncheck"></i>}
                    </button>
                    <span className="text-md todo-item">{todo}</span>

                    <button
                        type="button"
                        className="button-control small"
                        onClick={() => {
                            setEditMode(!editMode);
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
