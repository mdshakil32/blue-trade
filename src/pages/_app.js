import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
      once: true,
    });
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );

  // return getLayout(
  //   <ThemeProvider attribute="class">
  //     <Component {...pageProps} />
  //   </ThemeProvider>
  // );
}
