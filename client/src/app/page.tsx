import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import LandingPage from "./(nondashboard)/landing/page";

const Home = () => {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <LandingPage />
      </main>
    </div>
  );
};

export default Home;
