import "./Checkbox.scss";

function Checkbox({name, id = "", handleOnChange = () => {}}) {
  return <input className="checkbox"
                type="checkbox" 
                name={name} 
                id={id} 
                onChange={handleOnChange} 
          />
}

export default Checkbox;
