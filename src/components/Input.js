import { useState } from 'react'

const style = (isFocused) => ({
  backgroundColor: '#fff',
  border: isFocused ? '2px solid #0BA360' : '2px solid #A4A4A4',
  borderRadius: '4px',
  fontFamily: 'Mulish, sans-serif',
  fontSize: '14px',
  marginTop: '5px',
  marginBottom: '10px',
  outline: 'none',
  padding: '10px 15px',
  width: 'calc(100% - 30px)',
})

const spanStyle = {
  color: '#606060',
  fontFamily: 'Mulish, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
}

const Input = props => {
  const { input, label, ...rest } = props

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div>
      <span style={spanStyle} >{label}</span>
      <input 
        {...input}
        {...rest}
        style={style(isFocused)} 
        onFocus={ handleFocus }
        onBlur={ handleBlur }
      />
    </div>
  )
}

export default Input
