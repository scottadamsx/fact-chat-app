import { useState } from "react";
import InputBox from "./InputBox";
import { useRouter } from "next/router";
import { Account } from "../../types";

export default function LoginForm({accounts, setAccounts, user, setUser}:any) {
    const [username, setUsername] = useState("")
    const [pin, setPin] = useState<string>("")
    const router = useRouter()

    // function intended for adding an account
    function addAccount() {
        const newAccount:Account = {
            username:username,
            pin:pin,
            conversations:[],
        }
        console.log(newAccount)
        setAccounts([...accounts,newAccount])

        // clear inputs after use
        setUsername("")
        setPin("")
    }
    
    // handle login logic
    function login() {
        let account:Account = accounts.find((account:Account) => account.username === username && pin === account.pin)
        if (account) {
            console.log("account exists!")
            setUser(account)  // Set the logged-in user
            router.push('/conversations')  // Navigate to conversations page
        }
        else {
            console.log("account doesn't exist!",username, pin)
            alert("Invalid username or PIN!")  
        }
    }

    return (
        <><div className="bg-blue-100 border">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">Login Form</h1>
        <InputBox label={"username"} value={username} setValue={setUsername}/>
        <InputBox label={"PIN"} value={pin} setValue={setPin} />
        <button className="bg-blue-500 border rounded p-2 m-2" type="button" onClick={addAccount}>Create Account</button>
        <button className="bg-blue-500 border rounded p-2 m-2" type="button" onClick={login}>Login</button>
        </div>
        
        </>
    )
}