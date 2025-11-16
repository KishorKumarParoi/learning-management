import Footer from '@/components/Footer';
import NonDashboardNavbar from '@/components/NonDashboardNavbar';
import LandingPage from './(nondashboard)/landing/page';

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <NonDashboardNavbar />
      <main className="flex h-full w-full flex-grow items-center mx-auto justify-center">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
