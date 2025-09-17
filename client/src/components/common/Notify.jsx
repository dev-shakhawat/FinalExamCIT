import React from 'react'

export default function Notify({notification}) {
  return (
    <div className={`fixed top-1/2 left-1/2 -translate-1/2 px-5 py-1 rounded-lg ${notification.success ? "bg-green-600/50" : "bg-red-500/54   "}    `}>
        <p className="text-center text-white font-semibold   ">{notification.message}</p>
    </div>
  )
}
