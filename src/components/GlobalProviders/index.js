"use client";
import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import fetcher from "@/utils/fetcher";
import { SWRConfig } from "swr";

const TawkMessengerReact = dynamic(
  () => import("@tawk.to/tawk-messenger-react"),
  { ssr: false }
);

const GlobalProviders = ({ children }) => {
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

  const [isTawkEnabled, setIsTawkEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const enable = () => setIsTawkEnabled(true);
    if ("requestIdleCallback" in window) {
      // @ts-ignore - safari types
      window.requestIdleCallback(enable, { timeout: 3000 });
    } else {
      setTimeout(enable, 2000);
    }
  }, []);

  return (
    <>
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
        <RecoilRoot>{children}
          {isTawkEnabled && (
            <TawkMessengerReact
              propertyId="685bb3263e441e1910e8f100"
              widgetId="1iuj37kfh"
              onBeforeLoad={() => {
                console.log("Tawk is about to load");
              }}
              onStatusChange={(status) => {
                console.log("Status changed:", status);
              }}
              onChatHidden={() => {
                console.log("Chat hidden");
              }}
              onChatMessageSystem={(message) => {
                console.log("System message:", message);
              }}
              onUnreadCountChanged={(count) => {
                console.log("Unread count changed:", count);
              }}
              onLoad={() => {
                console.log("Tawk widget loaded");
              }}
            />
          )}
        </RecoilRoot>
      </SWRConfig>

    
    </>
  );
};

export default GlobalProviders;
