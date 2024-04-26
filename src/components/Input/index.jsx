import "./Input.scss";

function Input({ name , placeholder, type = "text" }) {
  return (
    <>
      <div>
        <input className="input"
              name={name} type={type}
              placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default Input;
