import { useRouter } from 'next/router';

export default function NavRoute() {
  const router = useRouter();
  const route = router.pathname.substring(1);
  function message(route) {
    if (route === '') {
      return `Home`;
    } else {
      return `${route}`;
    }
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <h1 className="text-sm font-bold text-zinc-500 capitalize">{message(route)}</h1>
      </div>
    </nav>
  );
}
