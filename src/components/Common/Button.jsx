import React from 'react'

const Button = ({type,value,className,onClick}) => {
  return (
      <div>
          <input
                type={type}
                value={value}
                className={className}
                onClick={onClick}
              />
    </div>
  )
}

export default Button