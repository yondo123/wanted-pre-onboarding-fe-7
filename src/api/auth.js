import { checkHttpResponse } from '../utils/util';
import { constants } from '../utils/constants';

/**
 * 회원가입 API
 * @param {object} request : 요청 객체
 */
async function requestSignUp(request) {
    const response = await fetch(`${constants.REQUEST_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': ' application/json' },
        body: JSON.stringify(request)
    });
    return checkHttpResponse(response);
}

/**
 * 로그인 API
 * @param {object} request : 요청 객체
 */
async function requestSignIn(request) {
    const response = await fetch(`${constants.REQUEST_URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': ' application/json' },
        body: JSON.stringify(request)
    });
    return checkHttpResponse(response);
}

export { requestSignUp, requestSignIn };
