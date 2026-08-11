import { useState, useEffect } from "react";

export function usePageRoute() {
  const getPath = () => {
    const path = window.location.pathname;
    if (!path || path === "/") return "/home";
    return path;
  };

  const [currentRoute, setCurrentRoute] = useState(getPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getPath());
      window.scrollTo(0, 0);
    };

    const handlePushStateNav = () => {
      setCurrentRoute(getPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pushstate-navigation", handlePushStateNav);

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
