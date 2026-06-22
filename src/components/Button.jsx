const Button = (props) => {
  const {
    className = '',
    type = 'button',
    isDisabled ,
    children,
    onClick,
  } = props

  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button
