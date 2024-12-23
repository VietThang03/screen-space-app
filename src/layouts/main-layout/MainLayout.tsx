import React from 'react'
import HeaderApp from '../header'
import FooterApp from '../footer'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <HeaderApp />
      {children}
      <FooterApp />
    </div>
  )
}