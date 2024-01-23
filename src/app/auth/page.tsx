import { redirect } from 'next/navigation'
import React from 'react'

const Auhtpage = () => {
    redirect("/auth/login")
  return (
    
    <div>Auhtpage</div>
  )
}

export default Auhtpage