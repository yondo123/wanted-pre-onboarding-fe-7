const TodoList = function () {
    return (
        <main>
            <div className="todo">
                <h1 className="hide">todo-list</h1>
                <section className="add-wrap">
                    <label htmlFor="todo-item" className="hide">
                        todo
                    </label>
                    <input type="text" id="todo-item" placeholder="새로운 할 일을 입력해주세요." maxLength="20" />
                    <button type="button" className="button-normal small">
                        추가
                    </button>
                </section>
                <section className="list-wrap">
                    <ul>
                        <li className="list-item">
                            <button type="button">
                                <i className="ic-check"></i>
                            </button>
                            <span className="text-md todo-item">밥먹기</span>
                            <button type="button" className="button-control small">
                                수정
                            </button>
                            <button type="button" className="button-control small">
                                삭제
                            </button>
                        </li>
                        <li className="list-item">
                            <button type="button">
                                <i className="ic-uncheck"></i>
                            </button>
                            <span className="text-md todo-item">밥먹기</span>
                            <button type="button" className="button-control small">
                                수정
                            </button>
                            <button type="button" className="button-control small">
                                삭제
                            </button>
                        </li>
                        <li className="list-item">
                            <button type="button">
                                <i className="ic-uncheck"></i>
                            </button>
                            <span className="text-md todo-item">밥먹기</span>
                            <button type="button" className="button-control small">
                                수정
                            </button>
                            <button type="button" className="button-control small">
                                삭제
                            </button>
                        </li>
                        <li className="list-item">
                            <button type="button">
                                <i className="ic-uncheck"></i>
                            </button>
                            <span className="text-md todo-item">밥먹기</span>
                            <button type="button" className="button-control small">
                                수정
                            </button>
                            <button type="button" className="button-control small">
                                삭제
                            </button>
                        </li>
                        <li className="list-item">
                            <button type="button">
                                <i className="ic-uncheck"></i>
                            </button>
                            <span className="text-md todo-item">
                                밥먹기밥먹기밥먹기밥먹기밥먹기밥먹기밥먹기밥먹기밥먹기밥먹기
                            </span>
                            <button type="button" className="button-control small">
                                수정
                            </button>
                            <button type="button" className="button-control small">
                                삭제
                            </button>
                        </li>
                        <li className="list-item edit">
                            <input type="text" className="edit-item" value="공부하기" maxLength="20" />
                            <button type="button" className="button-control small">
                                제출
                            </button>
                            <button type="button" className="button-control small">
                                취소
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default TodoList;
