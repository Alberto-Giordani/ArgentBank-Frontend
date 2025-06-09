import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, setProfile } from "../../features/user/userSlice";
import "./Login.scss";

// Handles login form, authenticates user, fetches profile, and redirects
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            // // Authenticate and obtain token
            const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!loginResponse.ok) {
                const errData = await loginResponse.json();
                throw new Error(errData.message || "Login failed");
            }

            const loginData = await loginResponse.json();
            const token = loginData.body.token;

            dispatch(loginSuccess(token));

            // Fetch user profile using the token
            const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!profileResponse.ok) {
                const errData = await profileResponse.json();
                throw new Error(errData.message || "Failed to fetch profile");
            }

            const profileData = await profileResponse.json();

            const { firstName, lastName, userName } = profileData.body;

            dispatch(setProfile({ firstName, lastName, userName }));
            navigate("/profile");
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <main className="main bg-dark">
            <section className="login__content">
                <i className="fa fa-user-circle login__icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="login__input--wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login__input--wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login__input--remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="login__button">Sign In</button>
                    {error && <p>{error}</p>}
                </form>
            </section>
        </main>
    );
};

export default Login;