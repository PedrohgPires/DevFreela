import React from 'react';
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PopularCategories } from "./components/PopularCategories";
import { HowItWorks } from "./components/HowItWorks";
import { FeaturedFreelancers } from "./components/FeaturedFreelancers";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction"; // O BANNER DO BOTÃO INVISÍVEL!
import { Footer } from "./components/Footer";

// Importação das outras páginas do teu projeto
import { FindFreelancersPage } from "./components/FindFreelancersPage";
import { FindWorkPage } from "./components/FindWorkPage";
import { LoginPage } from "./components/LoginPage";
import { SignUpPage } from "./components/SignUpPage";
import { ClientDashboard } from "./components/ClientDashboard";
import { FreelancerDashboard } from "./components/FreelancerDashboard";

import { useRouter } from "./components/Router";

export default function App() {
  const { currentPage } = useRouter();

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      {/* O cabeçalho fica fixo no topo em todas as páginas */}
      <Header />

      <main className="flex-grow">
        {/* RENDERIZAÇÃO DA HOME COMPLETA */}
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <PopularCategories />
            <HowItWorks />
            <FeaturedFreelancers />
            <Testimonials />
            <CallToAction /> {/* Voltou para o sítio dele! */}
          </>
        )}

        {/* NAVEGAÇÃO ENTRE AS OUTRAS PÁGINAS */}
        {currentPage === 'find-freelancers' && <FindFreelancersPage />}
        {currentPage === 'find-work' && <FindWorkPage />}
        {currentPage === 'login' && <LoginPage />}
        {currentPage === 'signup' && <SignUpPage />}
        {currentPage === 'client-dashboard' && <ClientDashboard />}
        {currentPage === 'freelancer-dashboard' && <FreelancerDashboard />}
      </main>

      {/* O rodapé fica fixo no final de tudo */}
      <Footer />
    </div>
  );
}