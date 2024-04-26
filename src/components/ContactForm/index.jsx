import "./ContactForm.scss";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";

function ContactForm() {
  return ( 
    <>
      <main className="contact-form">
        <aside>
          <h1 className="contact-form__title">ПОДПИШИСЬ НА РАССЫЛКУ</h1>
          <p className="contact-form__description"> Отправляем анонсы новых статей, выпусков и трансляций </p>
        </aside>

        <div>
          <form className="contact-form__form">
            <Input placeholder="Электронная почта"/>
            <Input placeholder="Дата (например, 01.01.1990)"/>
            <Input placeholder="Телефон"/>
            <Input placeholder="Время (например, 10:00)"/>
          </form>

          <div>
            <div className="contact-form__checkbox">
              <Checkbox/>
              <p className="contact-form__checkbox-text">Я согласен (-а) на обработку персональных данных</p>
            </div>
            <div className="contact-form__submit-button">
              <Button label="Подписаться" isSecondary/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ContactForm;
