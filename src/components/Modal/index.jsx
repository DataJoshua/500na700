import "./Modal.scss";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import cross from "../../assets/imgs/cross.svg";

function Modal({ closeModal, isActive = false }) {

  if(!isActive) return <></>

  return ( 
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal__title">
            <h1>Связаться с нами</h1>
            <img onClick={closeModal} className="modal__cross" src={cross} alt="" />
          </div>
          <Input placeholder="Имя" name="name"/>
          <Input placeholder="Телефон" type="number" name="phone"/>
          <div className="modal__checkbox">
            <Checkbox/>
            <p className="modal__checkbox-text">Я согласен (-а) на обработку персональных данных</p>
          </div>
          <div>
            <Button label="Отправить" isSecondary/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;
