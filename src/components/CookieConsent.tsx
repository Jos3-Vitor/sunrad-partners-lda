"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type ConsentStatus = "accepted" | "rejected" | null;

const COOKIE_KEY = "cookie-consent";

const CookieConsent = () => {
  const [consent, setConsent] = useState<ConsentStatus>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_KEY);
    if (storedConsent === "accepted" || storedConsent === "rejected") {
      setConsent(storedConsent);
    }
  }, []);

  const handleConsent = (status: ConsentStatus) => {
    if (!status) return;
    localStorage.setItem(COOKIE_KEY, status);
    setConsent(status);

    if (status === "accepted") {
      // Inicializa o Google Analytics
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }

      gtag("js", new Date());
      gtag("config", "G-XXXXXXXX");
    }
  };

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white text-black border-t border-gray-300 shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm">
        Usamos cookies para melhorar sua experiência. Ao aceitar, você permite o uso de
        cookies para fins analíticos.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => handleConsent("accepted")}
          className="bg-sunrad-teal text-white px-4 py-2 rounded-md hover:bg-sunrad-teal/90 transition"
          aria-label="Aceitar cookies"
        >
          Aceitar
        </button>
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          aria-label="Rejeitar cookies"
        >
          Rejeitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
