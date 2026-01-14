export type Account = {
    username:string,
    pin:string,
    conversations:Conversation[]
}

export type Conversation = {
    id: string,
    accounts:Account[],
    messages:Message[]
}

export type Message = {
    sender:Account,
    timeSent:Date,
    message:string
}