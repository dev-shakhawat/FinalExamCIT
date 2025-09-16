import React from 'react'

export default function Input({onChange , placeholder , type , value}) {
  return (
                    <input
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
  )
}
