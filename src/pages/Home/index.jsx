import Hero from "../../components/Hero";
import iconChat from "../../assets/images/icon-chat.webp";
import iconMoney from "../../assets/images/icon-money.webp";
import iconSecurity from "../../assets/images/icon-security.webp";
import "./Home.scss";

function Home() {

    return (
        <div>
            <Hero />
            <section class="features">
                <h2 class="sr-only">Features</h2>
                <div class="features__item">
                    <img src={iconChat} alt="Chat Icon" class="features__icon" />
                    <h3 class="features__item--title">You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div class="features__item">
                    <img
                        src={iconMoney}
                        alt="Money Icon"
                        class="features__icon"
                    />
                    <h3 class="features__item--title">More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div class="features__item">
                    <img
                        src={iconSecurity}
                        alt="Security Icon"
                        class="features__icon"
                    />
                    <h3 class="features__item--title">Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;