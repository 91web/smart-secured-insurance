// src/app/layout.tsx
import type { Metadata } from "next";
import "@fontsource/libre-baskerville";
import "@fontsource/lato";
import "@fontsource-variable/jost";
import "./theme/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeRegistry from "./theme/themeRegistry";
import dynamic from "next/dynamic";
import Logo from "../assets/img/logo.png";

export const metadata: Metadata = {
  title: "Smart Guard",
  description: "Smart Guard for protecting you Mobile smart devices",
  icons: {
    icon: { url: Logo.src, type: "image/png" },
  },
};

const DynamicWebContextProvider = dynamic(
  () =>
    import("@/app/core/contexts/main.context").then(
      (mod) => mod.MainContextProvider
    ),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DynamicWebContextProvider>
          <AppRouterCacheProvider>
            {/* Removed the key property from options */}
            <ThemeRegistry>
              <div className="app-layout">
                <main className="app-content">{children}</main>
              </div>
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </DynamicWebContextProvider>
      </body>
    </html>
  );
}
