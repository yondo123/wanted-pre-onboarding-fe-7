const Signin = function () {
    return (
        <main>
            <div className="form">
                <h1 className="text-lg title">로그인</h1>
                <div className="input-wrap">
                    <div className="input-field">
                        <p className="text-md marker">
                            아이디 <span className="text-sm">(email)</span>
                        </p>
                        <label htmlFor="user-id" className="hide">
                            아이디 <span className="text-sm">(email)</span>
                        </label>
                        <input type="text" id="user-id" />
                    </div>
                    <p className=" hideinfo text-sm notice">이메일 형식에 맞게 입력해주세요.</p>
                </div>
                <div className="input-wrap">
                    <div className="input-field">
                        <p className="text-md marker">비밀번호</p>
                        <label htmlFor="user-password" className="hide">
                            비밀번호
                        </label>
                        <input type="password" id="user-password" />
                    </div>
                    <p className="info text-sm notice">비밀번호는 최소 8글자 이상으로 입력해주세요.</p>
                </div>
                <button type="button" className="button-normal submit">
                    로그인
                </button>
            </div>
        </main>
    );
};

export default Signin;
