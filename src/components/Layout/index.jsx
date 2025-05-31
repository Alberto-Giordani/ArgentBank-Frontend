import Nav from "../Nav";
import Footer from "../Footer";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <div className="content__wrapper">
            <Nav />
            <div className="content__wrapper">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;