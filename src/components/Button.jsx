import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-md font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
        Register
    </button>
  )
}

export default Button