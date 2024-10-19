"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, ReactNode } from "react";

interface ThemeRegistryProps {
  options?: ThemeOptions; // Options are optional here and used for custom theme creation
  children: ReactNode;
}

export default function ThemeRegistry({ options = {}, children }: ThemeRegistryProps) {
  // Create a cache with a custom key
  const cacheKey = "custom"; // 'custom' can be any identifier for the cache

  const theme = useMemo(
    () =>
      createTheme({
        ...options, // Spread custom options if provided
        palette: {
          mode: "light",
          ...(options.palette || {}), // Merge custom palette options if any
        },
        typography: {
          fontFamily: ["Lato"].join(","),
          ...(options.typography || {}), // Merge custom typography options if any
        },
      }),
    [options]
  );

  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: cacheKey });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}