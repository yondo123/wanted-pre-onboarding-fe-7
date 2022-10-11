import { checkHttpResponse } from '../utils/util';
import { constants } from '../utils/constants';

/**
 * TODO 조회 API
 */
async function getTodoList() {
    const response = await fetch(`${constants.REQUEST_URL}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': ' application/json'
        }
    });
    return checkHttpResponse(response);
}

/**
 * TODO 추가 API
 * @param {object} request : 요청 객체
 */
async function createTodoItem(request) {
    const response = await fetch(`${constants.REQUEST_URL}/todos`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': ' application/json'
        },
        body: JSON.stringify(request)
    });
    return checkHttpResponse(response);
}

/**
 * TODO 수정 API
 * @param {object} todoId : 요청 객체
 */
async function updateTodoItem(request) {
    const response = await fetch(`${constants.REQUEST_URL}/todos/${request.id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': ' application/json'
        },
        body: JSON.stringify({
            todo: request.todo,
            isCompleted: request.isCompleted
        })
    });
    return checkHttpResponse(response);
}

/**
 * TODO 삭제 API
 * @param {string} todoId : todo 번호
 */
async function deleteTodoItem(todoId) {
    const response = await fetch(`${constants.REQUEST_URL}/todos/${todoId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': ' application/json'
        }
    });
    return checkHttpResponse(response);
}

export { getTodoList, createTodoItem, deleteTodoItem, updateTodoItem };
