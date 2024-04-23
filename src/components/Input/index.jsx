import "./Input.scss";

function Input({ name , placeholder }) {
  return (
    <>
      <input className="input"
             name={name} type="text"
             placeholder={placeholder}
      />
    </>
  )
}

export default Input;