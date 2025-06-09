import "./FeatureItem.scss";

function FeatureItem({ icon, title, description }) {
    return (
        <div className="feature-item">
            <img src={icon} alt={`${title} Icon`} className="feature-item__icon" />
            <h3 className="feature-item__title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureItem;