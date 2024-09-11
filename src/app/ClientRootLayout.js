"use client";
import { useState, useEffect } from "react";
import { AppBar, Sidebar, SplashScreen } from "@/Components";

import "./globals.css";
export default function ClientRootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <AppBar />
          <Sidebar />
          {children}
        </>
      )}
    </>
  );
}
