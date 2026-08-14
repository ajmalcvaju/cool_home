import { useState, useEffect } from "react";

export function usePageRoute() {
  const getPath = () => {
    const path = window.location.pathname;
    if (!path || path === "/") return "/home";
    return path;
  };

  const [currentRoute, setCurrentRoute] = useState(getPath());

  useEffect(() => {
    const handleScrollToHash = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
          return;
        }
      }
      window.scrollTo(0, 0);
    };

    const handlePopState = () => {
      setCurrentRoute(getPath());
      handleScrollToHash();
    };

    const handlePushStateNav = () => {
      setCurrentRoute(getPath());
      handleScrollToHash();
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pushstate-navigation", handlePushStateNav);

    // Initial load hash scroll
    if (window.location.hash) {
      handleScrollToHash();
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pushstate-navigation", handlePushStateNav);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("pushstate-navigation"));
  };

  return { currentRoute, navigate };
}
