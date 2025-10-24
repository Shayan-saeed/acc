import Homepage from "../components/Home/Home";
import ClientsSection from "../components/Home/ClientsSection";
import OfficeMap from "../components/Home/OfficeMap";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Homepage />
      <ClientsSection />
      <OfficeMap  />
    </div>
  );
}
