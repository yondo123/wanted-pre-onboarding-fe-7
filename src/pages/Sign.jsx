import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const data = {
    signin: {
        text: '로그인'
    },
    signup: {
        text: '회원가입'
    }
};

const Sign = function () {
    const [accountInfo, setAccountInfo] = useState({
        email: '',
        password: ''
    });

    const path = useLocation().pathname.substring(1);
    const elementText = data[path].text;

    //이벤트 핸들러
    function setValue(e) {
        const { id, value } = e.target;
        setAccountInfo({
            ...accountInfo,
            [id]: value
        });
    }

    //계정 유효성 검사
    function validateUserInfo(e) {
        const { id, value } = e.target;
        const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
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
                    <p className=" hideinfo text-sm notice hide">이메일 형식에 맞게 입력해주세요.</p>
                </div>
                <div className="input-wrap">
                    <div className="input-field">
                        <p className="text-md marker">비밀번호</p>
                        <label htmlFor="user-password" className="hide">
                            비밀번호
                        </label>
                        <input type="password" id="password" onKeyUp={setValue} />
                    </div>
                    <p className="info text-sm notice hide">비밀번호는 최소 8글자 이상으로 입력해주세요.</p>
                </div>
                <button type="button" className="button-normal submit">
                    {elementText}
                </button>
            </div>
        </main>
    );
};

export default Sign;
