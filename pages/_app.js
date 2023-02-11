import "../styles/globals.css";
import AmenitiesContext, {
  AmenitiesProvider,
} from "../context/AmenitiesContext";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <AmenitiesProvider>
      <Header />
      <Component {...pageProps} />
    </AmenitiesProvider>
  );
}

export default MyApp;
