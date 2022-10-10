import { constants } from '../utils/constants';

/**
 * 회원가입 API
 * @param {object} request : 요청 객체
 * @param {function} callback : 콜백 함수
 */
function requestSignUp(request, callback) {
    fetch(`${constants.REQUEST_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': ' application/json' },
        body: JSON.stringify(request)
    })
        .then((response) => response.json())
        .then(function (res) {
            callback(res);
        })
        .catch(function (res) {
            callback(res);
        });
}

/**
 * 로그인 API
 * @param {object} request : 요청 객체
 * @param {function} callback : 콜백 함수
 */
function requestSignIn(request, callback) {
    fetch(`${constants.REQUEST_URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': ' application/json' },
        body: JSON.stringify(request)
    })
        .then((response) => response.json())
        .then(function (res) {
            callback(res);
        })
        .catch(function (res) {
            callback(res);
        });
}

export { requestSignUp, requestSignIn };
