import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActionButtons from "./components/FloatingActionButtons";

// Import Page Components
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ACServicesPage from "./pages/ACServicesPage";
import WaterPurifierPage from "./pages/WaterPurifierPage";
import ContactPage from "./pages/ContactPage";

// Import hooks
import { usePageRoute } from "./hooks/usePageRoute";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

export default function App() {
  const { currentRoute, navigate } = usePageRoute();

  // Re-run intersection observer whenever the user changes pages to bind scroll reveals to new DOM elements
  useIntersectionObserver(currentRoute);

  // Global click interceptor to enable standard SPA page navigation for "/" links
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        // Only intercept internal paths starting with "/"
        if (href && href.startsWith("/") && !href.startsWith("//")) {
          e.preventDefault();
          navigate(href);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [navigate]);

  // Routing Switch Engine
  const renderActivePage = () => {
    switch (currentRoute) {
      case "/home":
        return <Home />;
      case "/about":
        return <AboutPage />;
      case "/ac-services":
        return <ACServicesPage />;
      case "/water-purifier":
        return <WaterPurifierPage />;
      case "/contact":
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Sticky header navigation */}
      <Navbar currentRoute={currentRoute} />

      {/* Routed main body content */}
      <main className="min-h-[70vh]">
        {renderActivePage()}
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Floating call and WhatsApp action bubbles */}
      <FloatingActionButtons />
    </div>
  );
}
