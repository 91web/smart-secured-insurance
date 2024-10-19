// src/app/layout.tsx
import type { Metadata } from "next";
import "@fontsource/libre-baskerville";
import "@fontsource/lato";
import "@fontsource-variable/jost";
import "./theme/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeRegistry from "./theme/themeRegistry";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Smart Guard",
  description: "Smart Guard for protecting you Mobile smart devices",
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
                <header className="app-header">
                  <h1>Welcome to Smart Guard || Yusuf Ayodeji</h1>
                </header>
                <main className="app-content">{children}</main>
                <footer className="app-footer">
                  <p>© 2024 Smart Guard. All rights reserved.</p>
                </footer>
              </div>
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </DynamicWebContextProvider>
      </body>
    </html>
  );
}