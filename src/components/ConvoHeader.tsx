import { useRouter } from "next/router"

export default function ConvoHeader({ accounts, user, setUser }:any) {
    const router = useRouter()

    function logout() {
        setUser(null)
        router.push('/login')
    }

    return (
        <>
        <div className="bg-blue-100">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">{user.username}</h1>
        <button className="bg-blue-500 border rounded p-2 m-2" type="button" onClick={logout}>Logout</button>
        </div>
        </>
    )
}
