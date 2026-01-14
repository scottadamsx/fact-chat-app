import { Account, Conversation, Message } from "./types"
export function getAccountFromUsername(username:string, accounts:Account[]) {
    let accountFound

    accounts.map((account:Account) => {
        if (account.username == username) {
            accountFound = account
        }
    })
    return accountFound
}

export function getOtherAccount(conversation: Conversation, currentUser: Account): Account | undefined {
    return conversation.accounts.find(
        acc => acc.username !== currentUser.username
    )
}

// functions.ts
export function createNewConversation(
    user: Account,
    account: Account,
    accounts: Account[],
    setAccounts: (accounts: Account[]) => void,
    setUser: (user: Account) => void
): void {
    const newConversation: Conversation = {
        id: Date.now().toString(),
        accounts: [account, user],
        messages: []
    }

    // Find and update both users
    const updatedAccounts = accounts.map(acc => {
        if (acc.username === user.username || acc.username === account.username) {
            return {
                ...acc,
                conversations: [...acc.conversations, newConversation]
            }
        }
        return acc
    })

    setAccounts(updatedAccounts)
    // Update user state
    const updatedUser = updatedAccounts.find(acc => acc.username === user.username)
    if (updatedUser) setUser(updatedUser)
}

export function addMessage(
    message: Message,
    conversation: Conversation,
    accounts: Account[],
    setAccounts: (accounts: Account[]) => void,
    setUser: (user: Account) => void
): void {
    const updatedConversation = {
        ...conversation,
        messages: [...conversation.messages, message]
    }

    // Update the conversation in both accounts
    const updatedAccounts = accounts.map(acc => ({
        ...acc,
        conversations: acc.conversations.map(conv =>
            conv.id === conversation.id ? updatedConversation : conv
        )
    }))

    setAccounts(updatedAccounts)
    // Update user state
    const updatedUser = updatedAccounts.find(acc => acc.username === message.sender.username)
    if (updatedUser) setUser(updatedUser)
}
