"use client";
import { RecoilRoot } from "recoil";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import fetcher from "@/utils/fetcher";
import { SWRConfig } from "swr";

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
        </RecoilRoot>
      </SWRConfig>

    
    </>
  );
};

export default GlobalProviders;
