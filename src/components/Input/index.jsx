import "./Input.scss";

function Input({ name , placeholder }) {
  return (
    <>
      <div>
        <input className="input"
              name={name} type="text"
              placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default Input;
