"use client";

import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import fetcher from "@/utils/fetcher";
import { SWRConfig } from "swr";

const GlobalProviders = ({ children }) => {
  // ---- Local Storage provider for SWR cache ----
  function localStorageProvider() {
    if (typeof window !== "undefined") {
      const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

      window.addEventListener("beforeunload", () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        localStorage.setItem("app-cache", appCache);
      });

      return map;
    }
  }

  // ---- Lazy load control for Tawk ----
  const [isTawkEnabled, setIsTawkEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const enable = () => setIsTawkEnabled(true);

    if ("requestIdleCallback" in window) {
      // @ts-ignore Safari fallback
      window.requestIdleCallback(enable, { timeout: 3000 });
    } else {
      setTimeout(enable, 2000);
    }
  }, []);

  // ---- Load Tawk.to script only once ----
  useEffect(() => {
    if (!isTawkEnabled) return;
    if (document.getElementById("tawkScript")) return;

    const script = document.createElement("script");
    script.id = "tawkScript";
    script.async = true;
    script.src = "https://embed.tawk.to/685bb3263e441e1910e8f100/1iuj37kfh";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    console.log("✅ Tawk script loaded");

    return () => {
      const existing = document.getElementById("tawkScript");
      if (existing) existing.remove();
    };
  }, [isTawkEnabled]);

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
        dedupingInterval: 10000,
        revalidateOnReconnect: false,
        fetcher: (resource, init) => fetcher(resource, init),
        ...(typeof window !== "undefined" && {
          provider: localStorageProvider,
        }),
      }}
    >
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </SWRConfig>
  );
};

export default GlobalProviders;
