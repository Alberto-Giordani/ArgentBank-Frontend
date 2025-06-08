import Nav from "../Nav";
import Footer from "../Footer";
import "./Layout.scss";

function Layout({ children, containerClass = '' }) {
    return (
        <div className="layout">
            <Nav />
            <div className={`container ${containerClass}`}>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;