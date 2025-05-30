import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import logo from "../../assets/images/argentBankLogo.webp";
import "./Nav.scss";

function Nav() {
    const { isAuthenticated, firstName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }

    return (
        <header className="header-nav">
            <nav className="header-nav__container">
                <NavLink className="header-nav__logo" to="/">
                    <img src={logo} alt="Argent Bank Logo" className="header-nav__logo--image" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <div className="header-nav__links">
                    {isAuthenticated ? (
                        <>
                            <NavLink
                                to="/user"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header-nav__item active"
                                        : "header-nav__item"
                                }
                            >
                                <i className="fa fa-user-circle"></i> {firstName || 'User'}
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="header-nav__item logout-button"
                            >
                                <i className="fa fa-sign-out"></i> Logout
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/signin"
                            className={({ isActive }) =>
                                isActive
                                    ? "header-nav__item active"
                                    : "header-nav__item"
                            }
                        >
                            <i className="fa fa-user-circle"></i> Sign In
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Nav;