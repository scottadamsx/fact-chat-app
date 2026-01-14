import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Account } from '../../types'

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState()
  const [accounts, setAccounts] = useState<Account[]>([])

  

  return <Component {...pageProps}
   user={user}
   setUser={setUser}
   accounts={accounts}
   setAccounts={setAccounts}
   />
}
