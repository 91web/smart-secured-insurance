import type { Metadata } from "next";
import "@fontsource/libre-baskerville";
import "@fontsource/lato";
// Supports weights 100-900
import "@fontsource-variable/jost";
import "./theme/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeRegistry from "./theme/themeRegistry";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Smart Guard",
  description:
    "Jersey App Product",
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
            <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
          </AppRouterCacheProvider>
        </DynamicWebContextProvider>
      </body>
    </html>
  );
}
