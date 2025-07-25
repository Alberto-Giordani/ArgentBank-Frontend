import { useSelector } from "react-redux";
import { useState } from "react";
import UsernameForm from "../../components/UsernameForm";
import "./Profile.scss";
import Account from "../../components/Account";

// Displays user welcome, edit form, and account cards
function Profile() {
    const { firstName, lastName } = useSelector((state) => state.user);

    const [isEditing, setIsEditing] = useState(false);

    return (
        <main className="main bg-dark">
            <section className="welcome">
                <h1>Welcome back
                    <br />
                    {firstName} {lastName}!
                </h1>
                {isEditing ? (
                    <UsernameForm onClose={() => setIsEditing(false)} />
                ) : (
                    <button className="edit-button"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Username
                    </button>
                )
                }
            </section>

            <Account title="Argent Bank Checking (x8349)" amount="2,082.79" />
            <Account title="Argent Bank Savings (x6712)" amount="10,928.42" />
            <Account title="Argent Bank Credit Card (x8349)" amount="184.30" />
        </main>
    );
}

export default Profile;