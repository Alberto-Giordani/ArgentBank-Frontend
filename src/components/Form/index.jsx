import "./Form.scss"
import iconClose from "../../assets/images/xmark.webp"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setProfile } from "../../features/user/userSlice";

function Form({ onClose }) {
    const { token } = useSelector((state) => state.user);
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
            const { userName } = data.body;

            dispatch(setProfile({ userName }));
            onClose();

        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <section className="overlay">
            <form className="modal" onSubmit={handleSubmit}>
                <img src={iconClose} className="modal__btn--close" alt="fermeture"
                    onClick={onClose} />
                <h2>Modify Username</h2>

                <div className="modal__field">
                    <label htmlFor="userName">New Username</label>
                    <input
                        id="userName"
                        type="text"
                        value={userNameInput}
                        onChange={(e) => setUserNameInput(e.target.value)}
                        placeholder="Enter new username"
                        required
                    />
                </div>

                {error && <p className="modal__error">{error}</p>}

                <button type="button" className="modal__submit">Submit</button>

            </form>
        </section>
    )
}

export default Form;