import React,{useState} from 'react'

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {

  const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  };

  const [isClicked, setIsClicked] = useState(initialState);

  return (
    <button
      type='button'
      onClick={() => setIsClicked(initialState)}
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button