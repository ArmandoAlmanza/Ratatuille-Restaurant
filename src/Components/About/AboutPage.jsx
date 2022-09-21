import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="about__container container about__container__page">
            <h1 className="title title__big">Come and eat whit us!!</h1>
            <div className="about__content">
                <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                    alt="About image"
                    className="about__image about__page__image"
                />
                <div className="about__info">
                    <h2 className="subtitle">What are Rattuille restaurant?</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Culpa asperiores impedit et repellat quae soluta
                        eveniet quas autem quisquam officia rerum accusantium
                        assumenda, harum iusto voluptates consequuntur mollitia
                        quis exercitationem? Adipisci laudantium est tempora,
                        harum qui tenetur rem labore eveniet eos! Quam,
                        repellendus recusandae sapiente laborum distinctio error
                        eligendi et iure, numquam officiis maiores, expedita
                        repudiandae non temporibus deleniti ea. Reprehenderit
                        odio, voluptatum exercitationem laborum temporibus ipsam
                        aut asperiores officia odit nulla itaque labore dolor.
                        Voluptatum quod numquam dolor cumque quia, optio ipsum
                        vitae similique libero beatae aspernatur odit
                        reprehenderit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Culpa asperiores impedit et repellat
                        quae soluta eveniet quas autem quisquam officia rerum
                        accusantium assumenda, harum iusto voluptates
                        consequuntur mollitia quis exercitationem? Adipisci
                        laudantium est tempora, harum qui tenetur rem labore
                        eveniet eos! Quam, repellendus recusandae sapiente
                        laborum distinctio error eligendi et iure, numquam
                        officiis maiores, expedita repudiandae non temporibus
                        deleniti ea. Reprehenderit odio, voluptatum
                        exercitationem laborum temporibus ipsam aut asperiores
                        officia odit nulla itaque labore dolor. Voluptatum quod
                        numquam dolor cumque quia, optio ipsum vitae similique
                        libero beatae aspernatur odit reprehenderit.
                    </p>
					<Link to="/" className="btn btn__about">
                        Get back to the landing page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
