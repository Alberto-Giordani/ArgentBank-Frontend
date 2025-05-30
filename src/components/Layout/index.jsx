import Nav from "../Nav";
import Footer from "../Footer";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <div>
            <Nav />
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;