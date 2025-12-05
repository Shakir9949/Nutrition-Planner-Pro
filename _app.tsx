// pages/_app.tsx
import type { AppProps } from "next/app";
import { UserProvider } from "../context/UserContext"; // your existing context
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
