import { Patua_One } from "@next/font/google";
import { AppProps } from "next/app";
import "styles/globals.css";
const patua = Patua_One({subsets: ['latin'],weight:'400'});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --patua-font: ${patua.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />;
    </>
  );
}
export default MyApp;
