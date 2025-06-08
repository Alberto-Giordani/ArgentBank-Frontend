import "./UsernameForm.scss"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setProfile } from "../../features/user/userSlice";

function UsernameForm({ onClose }) {
    const { token, firstName, lastName, userName } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [userNameInput, setUserNameInput] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/profile",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        userName: userNameInput
                    }),
                }
            )

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || "Failed to update profile");
            }

            const data = await response.json();
            const { userName: newUserName } = data.body;

            dispatch(setProfile({ firstName, lastName, userName: newUserName }));
            onClose();

        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <section className="inlineForm">
            <h2>Edit user info</h2>

            <form onSubmit={handleSubmit}>
                <div className="inlineForm__field">
                    <label htmlFor="userName">User name</label>
                    <input
                        id="userName"
                        type="text"
                        value={userNameInput}
                        onChange={(e) => setUserNameInput(e.target.value)}
                        placeholder={userName}
                        required
                    />
                </div>

                <div className="inlineForm__field">
                    <label htmlFor="firstName">First name</label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        disabled
                    />
                </div>

                <div className="inlineForm__field">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        disabled
                    />
                </div>

                {error && <p className="inlineForm__error">{error}</p>}

                <div className="inlineForm__buttonsWrapper">
                    <button type="submit" className="inlineForm__button">
                        Save
                    </button>
                    <button
                        type="button"
                        className="inlineForm__button"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    )
}

export default UsernameForm;