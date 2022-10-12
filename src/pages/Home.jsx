import { Link } from 'react-router-dom';
const Home = function () {
    return (
        <main>
            <h1 className="hide">로그인 및 회원가입</h1>
            <div className="button-wrap">
                <button type="button" className="button-normal xl">
                    <Link to={'/signin'}>로그인</Link>
                </button>
                <button type="button" className="button-normal xl">
                    <Link to={'/signup'}>회원가입</Link>
                </button>
            </div>
        </main>
    );
};

export default Home;
