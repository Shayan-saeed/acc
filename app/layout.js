import "./globals.css";
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

export const metadata = {
  title: "American Configurators Company",
  description: "The North American Edge in Infrastructure Design. Pioneering high-performance data center & edge computing designs with precision and foresight.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-grotesk antialiased bg-background text-text-light">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
