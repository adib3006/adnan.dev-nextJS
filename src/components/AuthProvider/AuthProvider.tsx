"use client"
import React, { ReactElement } from 'react'
import { SessionProvider } from "next-auth/react"

type Props = {
    children: ReactElement
}

export const AuthProvider = ({children}: Props) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}