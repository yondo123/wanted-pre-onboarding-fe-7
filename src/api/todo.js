import { checkHttpResponse } from '../utils/util';
import { constants } from '../utils/constants';

/**
 * TODO 조회 API
 * @param {function} callback : 콜백 함수
 */
function getTodoList(callback) {
    fetch(`${constants.REQUEST_URL}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': ' application/json'
        }
    })
        .then(function (response) {
            return checkHttpResponse(response);
        })
        .then(function (res) {
            callback(res);
        })
        .catch(function (res) {
            callback(res);
        });
}

/**
 * TODO 추가 API
 * @param {object} request : 요청 객체
 * @param {function} callback : 콜백 함수
 */
function createTodoItem(request, callback) {
    fetch(`${constants.REQUEST_URL}/todos`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': ' application/json'
        },
        body: JSON.stringify(request)
    })
        .then(function (response) {
            return checkHttpResponse(response);
        })
        .then(function (res) {
            callback(res);
        })
        .catch(function (res) {
            callback(res);
        });
}

export { getTodoList, createTodoItem };
