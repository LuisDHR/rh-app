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
  padding: '10px 10px',
  width: '100%',
})

const spanStyle = {
  color: '#606060',
  fontFamily: 'Mulish, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
}

const ComboBox = props => {
  const { label, ...rest } = props

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
      <select name="select" 
        style={style(isFocused)}
        onFocus={ handleFocus }
        onBlur={ handleBlur }
        {...rest}
      >
        <option value="ventas" defaultValue>ventas</option>
        <option value="almacen">almacen</option>
      </select>
    </div>
  )
}

export default ComboBox