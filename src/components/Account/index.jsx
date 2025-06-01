import "./Account.scss";

function Account({ title, amount }) {
    return (
        <section className="account">
            <div className="account__contentWrapper">
                <h3 className="account__title">{title}</h3>
                <p className="account__amount">${amount}</p>
                <p className="account__amount--description">Available Balance</p>
            </div>
            <div className="account__contentWrapper cta">
                <button className="account__transactionButton">View transactions</button>
            </div>
        </section>
    )
}

export default Account;