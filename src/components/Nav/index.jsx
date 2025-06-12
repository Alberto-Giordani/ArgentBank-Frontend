import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import logo from "../../assets/images/argentBankLogo.webp";
import "./Nav.scss";

function Nav() {
    const { isAuthenticated, userName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        setTimeout(() => {
            navigate("/", { replace: true });
        }, 0);
    };

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
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header-nav__item active"
                                        : "header-nav__item"
                                }
                            >
                                <i className="fa fa-user-circle"></i> {userName}
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="header-nav__item header-nav__logout-button"
                            >
                                <i className="fa fa-sign-out"></i> Sign Out
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
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