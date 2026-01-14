# Fix Conversation App

## Tasks
- [x] Update types.ts: Add `id` field to Conversation type
- [x] Update functions.ts: Add unique ID generation for conversations and implement addMessage function
- [x] Update conversations.tsx: Add authentication guard to redirect if no user
- [x] Update ConvoHeader.tsx: Implement logout functionality to clear user and redirect to login
- [x] Update ConvoMenu.tsx: Use conversation ID for keys and selection
- [x] Update ConvoBox.tsx: Implement message display and sending functionality, fix props mismatch
- [x] Update createNewConversation in functions.ts: Generate and assign unique ID to new conversations
