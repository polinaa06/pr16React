import { AccordeonComponent } from "../../components/Accordeon/Accordeon";
import { SliderComponent } from "../../components/Slider/Slider";


export function HomePage() {
    return (
        <>
            <div className="banner">
                <h2>Мебель вашего стиля</h2>
            </div>

            <div className="gallery">
                <h2>Галерея</h2>

                <div className="slider">
                    <SliderComponent />
                </div>
            </div>

            <div className="faq">
                <h2>Часто задаваемые вопросы</h2>

                <div className="accordeon">
                    <AccordeonComponent/>
                </div>
            </div>
        </>
    )
}