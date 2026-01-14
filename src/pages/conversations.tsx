import { useEffect } from "react"
import { useRouter } from "next/router"
import ConvoHeader from "@/components/ConvoHeader"
import NewConversation from "@/components/NewConversation"
import ConvoMenu from "@/components/ConvoMenu"

export default function Conversations({ user, accounts, setAccounts, setUser }: any) {
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [user, router])

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div className='bg-gray-100 min-h-screen'>
            <ConvoHeader accounts={accounts} user={user} setUser={setUser}/>
            <NewConversation
                user={user}
                accounts={accounts}
                setAccounts={setAccounts}
                setUser={setUser}
            />
            <ConvoMenu
                user={user}
                accounts={accounts}
                setAccounts={setAccounts}
                setUser={setUser}
            />
        </div>
        </>
    )
}
