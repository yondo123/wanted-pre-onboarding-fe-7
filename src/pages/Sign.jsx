import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { requestSignIn, requestSignUp } from '../api/auth';

const Sign = function () {
    const data = {
        signin: {
            text: '로그인',
            call: fetchSignIn
        },
        signup: {
            text: '회원가입',
            call: fetchSignUp
        }
    };

    const navigate = useNavigate();
    const [accountInfo, setAccountInfo] = useState({
        email: '',
        password: ''
    });
    const path = useLocation().pathname.substring(1);
    const elementText = data[path].text;
    const emailRegex = new RegExp(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    const isAvailableEmail = emailRegex.test(accountInfo.email);
    const isAvailablePassword = accountInfo.password.length >= 8;

    //이벤트 핸들러
    function setValue(e) {
        const { id, value } = e.target;
        setAccountInfo({
            ...accountInfo,
            [id]: value
        });
    }

    function submit() {
        return data[path].call();
    }

    //로그인
    function fetchSignIn() {
        requestSignIn({ email: accountInfo.email, password: accountInfo.password }, function (res) {
            if (res.access_token) {
                localStorage.setItem('token', res.access_token);
                navigate('/todo');
            } else {
                alert(`${res.message}\n응답코드 : ${res.statusCode}`);
            }
        });
    }

    //회원가입
    function fetchSignUp() {
        requestSignUp({ email: accountInfo.email, password: accountInfo.password }, function (res) {
            if (res.access_token) {
                alert('회원이 되어주셔서 감사합니다!');
                navigate('/');
            } else {
                alert(`${res.message}\n응답코드 : ${res.statusCode}`);
            }
        });
    }

    return (
        <main>
            <div className="form">
                <h1 className="text-lg title">{elementText}</h1>
                <div className="input-wrap">
                    <div className="input-field">
                        <p className="text-md marker">
                            아이디 <span className="text-sm">(email)</span>
                        </p>
                        <label htmlFor="user-id" className="hide">
                            아이디
                        </label>
                        <input type="text" id="email" onKeyUp={setValue} />
                    </div>
                    <p className={'hideinfo text-sm notice ' + (isAvailableEmail ? 'hide' : '')}>
                        이메일 형식에 맞게 입력해주세요.
                    </p>
                </div>
                <div className="input-wrap">
                    <div className="input-field">
                        <p className="text-md marker">비밀번호</p>
                        <label htmlFor="user-password" className="hide">
                            비밀번호
                        </label>
                        <input type="password" id="password" onKeyUp={setValue} />
                    </div>
                    <p className={'hideinfo text-sm notice ' + (isAvailablePassword ? 'hide' : '')}>
                        비밀번호는 최소 8글자 이상으로 입력해주세요.
                    </p>
                </div>
                <button
                    type="button"
                    className="button-normal submit"
                    disabled={!(isAvailableEmail && isAvailablePassword)}
                    onClick={submit}
                >
                    {elementText}
                </button>
            </div>
        </main>
    );
};

export default Sign;
