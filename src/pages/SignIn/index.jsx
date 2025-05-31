import "./SignIn.scss";

function SignIn() {
    return (
        <main className="main bg-dark">
            <section className="signIn__content">
                <i className="fa fa-user-circle signIn__icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="signIn__input--wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="signIn__input--wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="signIn__input--remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="signIn__button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;