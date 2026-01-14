import { useState } from "react";
import { addMessage } from "../../functions";
import { Account, Message } from "../../types";

export default function ConvoBox({user, conversation, accounts, setAccounts, setUser}:any) {
    const [messageText, setMessageText] = useState("")

    // Function to send a message
    function sendMessage() {
        if (!messageText.trim() || !conversation) return

        const newMessage: Message = {
            sender: user,
            timeSent: new Date(),
            message: messageText.trim()
        }

        addMessage(newMessage, conversation, accounts, setAccounts, setUser)
        setMessageText("")
    }

    return (
        <>
        <div className="flex flex-col h-full">
            <h3 className="font-bold text-lg mb-2">
                {conversation ? `Chat with ${conversation.accounts.find((acc:Account) => acc.username !== user.username)?.username}` : 'Select a conversation'}
            </h3>
            <div className="flex-1 border rounded p-2 overflow-y-auto bg-white mb-2">
                {conversation ? (
                    conversation.messages.length === 0 ? (
                        <p className="text-gray-500">No messages yet</p>
                    ) : (
                        conversation.messages.map((msg: Message, index: number) => (
                            <div key={index} className={`mb-2 ${msg.sender.username === user.username ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block p-2 rounded ${msg.sender.username === user.username ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    <p className="text-sm font-semibold">{msg.sender.username}</p>
                                    <p>{msg.message}</p>
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    <p className="text-gray-500">Select a conversation to start chatting</p>
                )}
            </div>
            {conversation && (
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Type a message..."
                        className="flex-1 border rounded p-2"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white border rounded p-2 px-4"
                        type="button"
                    >
                        Send
                    </button>
                </div>
            )}
        </div>
        </>
    )
}
