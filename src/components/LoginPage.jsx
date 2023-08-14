import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';
import Modal from '@/common/Modal';

export default function LoginPage() {
  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = useAuth();
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;

    auth
      .signIn(userEmail, userPassword)
      .then(() => {
        router.push('/dashboard');
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          setLoginError(true);
        }
      });
  }
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <UserCircleIcon className="mx-auto h-16 w-auto text-blue-500" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          {loginError && (
            <div className="justify-center z-40 w-full h-auto bg-red-200 rounded-xl">
              <p className="font-semibold text-red-500 text-center p-2">Your email or password does&apos;nt match, check them and try again.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button type="button" className="font-medium text-blue-600 hover:text-blue-500" onClick={() => setOpen(!open)}>
                  Forgot your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <div className="flex flex-col items-center justify-center text-md gap-4">
          <p>
            <strong>Just for now</strong>, because it is a test app, you can use a test email and password:
          </p>
          <div>
            <span className="font-semibold">Email: </span>
            <code className="rounded-lg border border-zinc-300 p-1">maria@mail.com</code>
          </div>
          <div>
            <span className="font-semibold">Password: </span>
            <code className="rounded-lg border border-zinc-300 p-1">12345</code>
          </div>
        </div>
      </Modal>
    </>
  );
}
