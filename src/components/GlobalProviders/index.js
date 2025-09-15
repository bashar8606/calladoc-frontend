"use client";
import { RecoilRoot } from "recoil";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import fetcher from "@/utils/fetcher";
import { SWRConfig } from "swr";
const GlobalProviders = ({ children }) => {

  function localStorageProvider() {
    // When initializing, we restore the data from `localStorage` into a map.
    if (typeof window !== "undefined") {
      const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));
  
      // Before unloading the app, we write back all the data into `localStorage`.
      window.addEventListener("beforeunload", () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        localStorage.setItem("app-cache", appCache);
      });
  
      // We still use the map for write & read for performance.
      return map;
    }
  }

  


  return (
    <>
    
       <SWRConfig
      value={{
        revalidateOnFocus: true, // Refreshes the data when the window is refocused
        dedupingInterval: 10000, // Prevents re-fetching the same data within 10 seconds
        // revalidateOnFocus: false,
        revalidateOnReconnect: false,
        fetcher: (resource, init) => fetcher(resource, init),
        ...(typeof window !== "undefined" && {
          provider: localStorageProvider,
        }),
      }}
    >
      <RecoilRoot>{children}</RecoilRoot>
    </SWRConfig>
    
    <TawkMessengerReact
                propertyId="685bb3263e441e1910e8f100"
                widgetId="1iuj37kfh"/>
                
                </>
 
  );
};

export default GlobalProviders;
