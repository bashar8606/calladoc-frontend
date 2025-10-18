"use client";

import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { SWRConfig } from "swr";
import fetcher from "@/utils/fetcher";
import Script from "next/script";

// Dynamically import Tawk with no SSR
// const TawkMessengerReact = dynamic(
//   () => import("@tawk.to/tawk-messenger-react"),
//   { ssr: false }
// );

const GlobalProviders = ({ children }) => {
  const [isTawkEnabled, setIsTawkEnabled] = useState(false);

  // Lazy-load Tawk after idle (production only)
  // useEffect(() => {
  //   if (typeof window === "undefined") return;
  //   if (process.env.NODE_ENV !== "production") return;

  //   const enable = () => setIsTawkEnabled(true);
  //   if ("requestIdleCallback" in window) {
  //     // Safari types ignore
  //     // @ts-ignore
  //     window.requestIdleCallback(enable, { timeout: 3000 });
  //   } else {
  //     setTimeout(enable, 2000);
  //   }
  // }, []);

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
        dedupingInterval: 10000,
        revalidateOnReconnect: false,
        fetcher: (resource, init) => fetcher(resource, init),
      }}
    >
      <RecoilRoot>
        {children}
        <Script
          src="https://embed.tawk.to/685bb3263e441e1910e8f100/1iuj37kfh"
          strategy="afterInteractive"
        />
        {/* {isTawkEnabled && (
          <TawkMessengerReact
            propertyId="685bb3263e441e1910e8f100" // your Tawk property ID
            widgetId="1iuj37kfh"               // your Tawk widget ID
            onBeforeLoad={() => console.log("Tawk is about to load")}
            onStatusChange={(status) => console.log("Tawk status:", status)}
            onChatHidden={() => console.log("Chat hidden")}
            onChatMessageSystem={(message) =>
              console.log("System message:", message)
            }
            onUnreadCountChanged={(count) =>
              console.log("Unread count changed:", count)
            }
            onLoad={() => console.log("Tawk widget loaded")}
          />
        )} */}
      </RecoilRoot>
    </SWRConfig>
  );
};

export default GlobalProviders;
