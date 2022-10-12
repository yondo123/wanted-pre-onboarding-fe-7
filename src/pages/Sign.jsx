import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { requestSignIn, requestSignUp } from '../api/auth';

const Sign = function () {
    const data = {
        signin: {
            text: '로그인',
            replaceText : '먼저 회원가입을 하시겠어요?',
            replaceLink : "/signup",
            call: fetchSignIn
        },
        signup: {
            text: '회원가입',
            replaceText : '이미 계정이 있으신가요?',
            replaceLink : "/signin",
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
        requestSignIn({ email: accountInfo.email, password: accountInfo.password }).then((res) => {
            if (res.result) {
                localStorage.setItem('token', res.data.access_token);
                navigate('/todo');
            } else {
                alert(res.message);
            }
        });
    }

    //회원가입
    function fetchSignUp() {
        requestSignUp({ email: accountInfo.email, password: accountInfo.password }).then((res) => {
            if (res.result) {
                alert('회원이 되어주셔서 감사합니다!');
                setAccountInfo({
                    email: '',
                    password: ''
                });
                navigate('/signin');
            } else {
                alert(res.message);
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
                        <input type="text" id="email" onChange={setValue} value={accountInfo.email} />
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
                        <input type="password" id="password" onChange={setValue} value={accountInfo.password} />
                    </div>
                    <p className={'hideinfo text-sm notice ' + (isAvailablePassword ? 'hide' : '')}>
                        비밀번호는 최소 8글자 이상으로 입력해주세요.
                    </p>
                </div>
                <div className='replace'>
                    <Link to={data[path].replaceLink} replace={true}><span className='text-sm'>{ data[path].replaceText}</span></Link>
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
