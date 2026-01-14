import { useState } from "react"
import { createNewConversation, getAccountFromUsername } from "../../functions"

export default function NewConversation({ user, accounts, setAccounts, setUser }: any) {
    const [chosenAccount, setChosenAccount] = useState('')

    function NewConvo() {
        if (!chosenAccount) {
            alert("Please select an account!")
            return
        }

        const account = getAccountFromUsername(chosenAccount, accounts)

        if (account) {
            createNewConversation(user, account, accounts, setAccounts, setUser)  // ✅ Pass accounts and setAccounts
            alert(`Conversation with ${chosenAccount} created!`)
            setChosenAccount('')
        }
    }

    return (
        <>
        <select 
            title="select" 
            value={chosenAccount}
            onChange={(e) => setChosenAccount(e.target.value)}
            className="border rounded p-2 m-2"
        >
            <option value="">Select an account...</option>
            {accounts
                .filter((account: any) => account.username !== user.username)
                .map((account: any) => (
                    <option key={account.username} value={account.username}>
                        {account.username}
                    </option>
                ))
            }
        </select>
        <button 
            className="bg-blue-500 text-white border rounded p-2 m-2" 
            type="button" 
            onClick={NewConvo}
        >
            Create New Conversation
        </button>
        </>
    )
}