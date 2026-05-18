import React from "react";
import "../styleSheets/About.css"

const About: React.FC = () => {
    return (
        <div className="about-page">
            <h1>O mnie</h1>

            <div className="about-content">
                <div className="about-image">
                    <img
                        src="Ryba.png"
                        alt="O mnie"
                    />
                </div>

                <div className="about-text">

                    <p className="lead">
                        Nazywam się Adam i jestem trenerem personalnym z ponad 10-letnim doświadczeniem.
                    </p>

                    <p>
                        Wykształcenie zdobyłem na AWF w Gdańsku i Poznaniu oraz na akademii sportowej w Gerlev w Danii.
                        Specjalizowałem się w street movement (parkour), crossficie oraz snowboardzie.
                        Studiowałem również w Finlandii na kierunku Tourism.
                    </p>

                    <p>
                        Posiadam certyfikaty trenera personalnego, trenera przygotowania motorycznego
                        oraz instruktora gier i zabaw, które pozwalają mi prowadzić treningi na wysokim poziomie.
                    </p>

                    <p>
                        Sport towarzyszy mi od dzieciństwa — akrobatyka, parkour, siatkówka, taniec towarzyski
                        oraz wiele innych dyscyplin, które ukształtowały moje podejście do ruchu.
                    </p>

                    <p>
                        Moja wiedza o ciele wynika nie tylko z praktyki sportowej, ale również z pasji do fizjoterapii,
                        dzięki czemu mogę trenować w sposób bezpieczny i świadomy.
                    </p>

                    <p>
                        W 2011 roku rozpocząłem pracę jako nauczyciel w akademii sportowej w Danii.
                        To wtedy narodziła się idea <strong>Moveability</strong>.
                    </p>

                    <p className="highlight">
                        MOVEABILITY – „zdolność do poruszania” – to filozofia, która zakłada, że ruch
                        powinien być naturalną częścią życia człowieka.
                    </p>

                    <p>
                        Pomagam moim podopiecznym poprawić sprawność, kondycję, sylwetkę i funkcjonowanie ciała,
                        tak aby mogli czuć się silniej, zdrowiej i pewniej na co dzień.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;