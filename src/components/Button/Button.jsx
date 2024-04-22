import "./Button.scss"

function Button({ label, handleOnClick = ()=> {}, isSecondary = false }) {
  return ( 
    <>
      <div className="btn-wrapper">
        <button onClick={handleOnClick} 
                className={`${isSecondary ? "btn-secondary" : "btn-primary"}`}
        >
          {label}</button>
      </div>
    </>  
  )
}

export default Button;
