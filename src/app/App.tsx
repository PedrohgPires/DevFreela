import { Router, useRouter } from "./components/Router";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PopularCategories } from "./components/PopularCategories";
import { FeaturedFreelancers } from "./components/FeaturedFreelancers";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { LoginPage } from "./components/LoginPage";
import { SignUpPage } from "./components/SignUpPage";
import { FindWorkPage } from "./components/FindWorkPage";
import { FindFreelancersPage } from "./components/FindFreelancersPage";
import { FreelancerDashboard } from "./components/FreelancerDashboard";
import { ClientDashboard } from "./components/ClientDashboard";

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PopularCategories />
        <FeaturedFreelancers />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function AppContent() {
  const { currentPage } = useRouter();

  switch (currentPage) {
    case 'login':
      return <LoginPage />;
    case 'signup':
      return <SignUpPage />;
    case 'find-work':
      return <FindWorkPage />;
    case 'find-freelancers':
      return <FindFreelancersPage />;
    case 'freelancer-dashboard':
      return <FreelancerDashboard />;
    case 'client-dashboard':
      return <ClientDashboard />;
    case 'home':
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}