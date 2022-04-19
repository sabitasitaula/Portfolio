import React from 'react'

const Input = ({type, className,id,name,placeholder,onChange,onBlur,value,required=true}) => {
  return (
      <div>
          <input
                type={type}
                className={className}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
              value={value}
              required={required}
          />
          
          {/* <input
                type={type}
                className={className}
                name={name}
                placeholder={placeholder}
                required={required}
              /> */}
    </div>
  )
}

export default Input