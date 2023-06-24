import { useAuth } from "@/hooks/useAuth";

export default function Profile() {
    const auth = useAuth()
    return (
        <>
            <section className="flex flex-col items-center">
                <div className="flex flex-col w-full max-w-md px-4 h-80 justify-around">
                    <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={`${auth?.user?.avatar}`} alt={`${auth?.user?.name}`} />
                    <p className="border-b-2 text-md font-semibold">Role</p>
                    <p>{auth?.user?.role}</p>
                    <p className="border-b-2 text-md font-semibold">Name</p>
                    <p>{auth?.user?.name}</p>
                    <p className="border-b-2 text-md font-semibold">Email</p>
                    <p>{auth?.user?.email}</p>
                    <p className="border-b-2 text-md font-semibold">Password</p>
                    <p>{auth?.user?.password}</p>
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500" onClick={() => auth.signOut()}>Logout</button>
                </div>
            </section>
        </>
    )
}