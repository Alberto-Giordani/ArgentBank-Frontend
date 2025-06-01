import "./Profile.scss";
import Account from "../../components/Account";

function Profile() {
    return (
        <main className="main bg-dark">
            <section className="welcome">
                <h1>Welcome back<br />Tony!</h1>
                <button className="edit-button">Edit Name</button>
            </section>
            <Account title="Argent Bank Checking (x8349)" amount="2,082.79" />
            <Account title="Argent Bank Savings (x6712)" amount="10,928.42" />
            <Account title="Argent Bank Credit Card (x8349)" amount="184.30" />
        </main>
    );
}

export default Profile;