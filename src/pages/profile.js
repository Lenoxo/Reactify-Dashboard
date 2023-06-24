import { useAuth } from '@/hooks/useAuth';

export default function Profile() {
  const auth = useAuth();
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="group/items flex flex-col w-full max-w-md px-4 h-90 justify-around">
          <figure className="flex flex-col items-center">
            <img class="h-inherit h-20 w-20 rounded-full ring-2 ring-zinc-500" src={`${auth?.user?.avatar}`} alt={`${auth?.user?.name}`} />
          </figure>
          <p className="border-b-2 text-md font-semibold mt-4 pl-2">Role</p>
          <p className="pl-2">{auth?.user?.role}</p>
          <p className="border-b-2 text-md font-semibold mt-4 pl-2">Name</p>
          <p className="pl-2">{auth?.user?.name}</p>
          <p className="border-b-2 text-md font-semibold mt-4 pl-2">Email</p>
          <p className="pl-2">{auth?.user?.email}</p>
          <p className="border-b-2 text-md font-semibold mt-4 pl-2">Password</p>
          <p className="pl-2">{auth?.user?.password}</p>
          <button
            className="group mt-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
            onClick={() => auth.signOut()}
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
}
