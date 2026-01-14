import { useState, useEffect } from "react"
import ConvoBox from "./ConvoBox"

export default function ConvoMenu({ user, accounts, setAccounts, setUser }: any) {
    const [currentConversation, setCurrentConversation] = useState<any>(null)

    useEffect(() => {
        if (currentConversation) {
            const updatedConv = user.conversations.find((c: any) => c.id === currentConversation.id)
            if (updatedConv) {
                setCurrentConversation(updatedConv)
            }
        }
    }, [user.conversations])

    return (
        <>
        <div className="flex gap-4 p-4">
            {/* Conversation list */}
            <div className="w-64 space-y-2">
                <h3 className="font-bold text-lg mb-2">Your Conversations</h3>
                {user.conversations.length === 0 ? (
                    <p className="text-gray-500">No conversations yet</p>
                ) : (
                    user.conversations.map((conversation: any) => {
                        const otherAccount = conversation.accounts.find(
                            (account: any) => account.username !== user.username
                        )
                        
                        if (!otherAccount) return null
                        
                        return (
                            <button
                                key={conversation.id}
                                className={`w-full text-left p-3 border rounded transition ${
                                    currentConversation?.id === conversation.id
                                        ? 'bg-blue-100 border-blue-500'
                                        : 'bg-white hover:bg-gray-50'
                                }`}
                                type="button"
                                onClick={() => setCurrentConversation(conversation)}
                            >
                                <p className="font-semibold">{otherAccount.username}</p>
                                <p className="text-sm text-gray-500">
                                    {conversation.messages.length} messages
                                </p>
                            </button>
                        )
                    })
                )}
            </div>
            
            {/* Chat box */}
            <div className="flex-1">
                <ConvoBox
                    user={user}
                    conversation={currentConversation}
                    accounts={accounts}
                    setAccounts={setAccounts}
                    setUser={setUser}
                />
            </div>
        </div>
        </>
    )
}