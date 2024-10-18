"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, ReactNode } from "react";

interface ThemeRegistryProps {
  options: ThemeOptions;
  children: ReactNode;
}

export default function ThemeRegistry({ options, children }: ThemeRegistryProps) {
  // Adding the key to the cache options
  const cacheOptions = { ...options, key: "custom" }; // 'custom' can be any identifier for the cache

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
        typography: {
          fontFamily: ["Lato"].join(","),
        },
      }),
    []
  );

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(cacheOptions);
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
