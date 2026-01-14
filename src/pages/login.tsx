import LoginForm from "@/components/LoginForm";

export default function Login({user, setUser, accounts, setAccounts}:any) {
    function showAccounts() {
        console.log(accounts)
    }

    return (
        <>
        <div>
            <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">Login Page</h1>
            <LoginForm accounts={accounts} setAccounts={setAccounts} user={user} setUser={setUser} />
            <button type="button" onClick={showAccounts}>Show Accounts</button>
            
        </div>
        </>
    )
};