import React from 'react'

const TextArea = ({name,cols,rows,placeholder,value,onBlur,onChange}) => {
  return (
      <div>
          <textarea
                name={name}
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              ></textarea>
    </div>
  )
}

export default TextArea