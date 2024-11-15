import Accordion from 'react-bootstrap/Accordion';

export function AccordeonComponent() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Как выбрать мебель, подходящую для моего интерьера?
                </Accordion.Header>

                <Accordion.Body>
                    При выборе мебели необходимо учитывать стиль вашего интерьера, размеры помещения и функциональные потребности. Рекомендуем определить цветовую палитру и стиль (современный, классический, минимализм и т.д.), а затем измерить пространство, чтобы убедиться, что выбранная мебель будет вписываться. Также обратите внимание на материалы и текстуры, чтобы они гармонировали между собой.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Какова политика возврата и обмена мебели в вашем магазине?
                </Accordion.Header>

                <Accordion.Body>
                    Мы принимаем возвраты и обмены в течение 14 дней с момента покупки при соблюдении условий. Мебель должна быть в оригинальной упаковке и не иметь следов использования. Для возврата необходимо предоставить чек и заполнить соответствующую форму. Пожалуйста, уточняйте детали у нашего менеджера или ознакомьтесь с правилами на сайте.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    Есть ли у вас доставка мебели и каковы ее условия?
                </Accordion.Header>

                <Accordion.Body>
                    Да, мы предоставляем услуги доставки мебели. Стоимость и сроки доставки зависят от вашего местоположения и объема заказа. Обычно доставка осуществляется в течение 3-7 рабочих дней. Мы также предлагаем возможность самовывоза из нашего магазина. Для получения более подробной информации, пожалуйста, свяжитесь с нашим менеджером.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    Могу ли я заказать индивидуальный дизайн мебели?
                </Accordion.Header>

                <Accordion.Body>
                    Да, мы предлагаем услуги по индивидуальному дизайну мебели. Наши дизайнеры помогут вам создать уникальные изделия, соответствующие вашим требованиям и предпочтениям. Пожалуйста, свяжитесь с нами для консультации и обсуждения деталей вашего проекта.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}
