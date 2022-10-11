/**
 * 응답 확인 Middleware
 * @param {object} response : 응답 객체
 */
function checkHttpResponse(response) {
    let message = 'success';
    if (response.ok) {
        return response.json().then(function (res) {
            return {
                result: true,
                data: res || null,
                message
            };
        });
    } else {
        const statusCode = response.status;
        return response.json().then(function (res) {
            if (res.message) {
                message = res.message;
            } else {
                if (statusCode === 400) {
                    message = '올바르지 않은 요청입니다.';
                } else if (statusCode === 401) {
                    message = '권한이 없는 사용자 입니다.';
                } else if (statusCode === 404) {
                    message = '요청 주소가 존재하지 않습니다.';
                } else {
                    message = '알 수 없는 오류입니다.';
                }
            }
            return {
                result: false,
                message
            };
        });
    }
}

export { checkHttpResponse };
