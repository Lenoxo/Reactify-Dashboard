import Header from '@components/Header';
import NavRoute from '@common/Nav';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <NavRoute />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
