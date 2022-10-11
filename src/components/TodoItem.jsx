const TodoItem = function ({ id, todo, isCompleted, userId }) {
    return (
        <li className="list-item">
            <button type="button">{isCompleted ? <i className="ic-check"></i> : <i className="ic-uncheck"></i>}</button>
            <span className="text-md todo-item">{todo}</span>

            <button type="button" className="button-control small">
                수정
            </button>
            <button type="button" className="button-control small">
                삭제
            </button>
        </li>
    );
};

export default TodoItem;
