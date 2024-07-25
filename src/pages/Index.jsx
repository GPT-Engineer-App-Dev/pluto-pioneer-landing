import { Button } from "@/components/ui/button";
import { Camera, Globe, Thermometer } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <header className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Discover Pluto</h1>
        <p className="text-xl mb-8">Journey to the Edge of Our Solar System</p>
        <Button size="lg">Explore Now</Button>
      </header>

      <main className="container mx-auto py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Facts About Pluto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FactCard
              icon={<Globe className="h-12 w-12 mb-4" />}
              title="Dwarf Planet"
              description="Pluto is classified as a dwarf planet in the Kuiper belt."
            />
            <FactCard
              icon={<Thermometer className="h-12 w-12 mb-4" />}
              title="Extremely Cold"
              description="Average temperature is about -230°C (-382°F)."
            />
            <FactCard
              icon={<Camera className="h-12 w-12 mb-4" />}
              title="New Horizons"
              description="First visited by NASA's New Horizons spacecraft in 2015."
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Pluto's Moons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Charon", "Nix", "Hydra", "Kerberos", "Styx"].map((moon) => (
              <div key={moon} className="bg-gray-800 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">{moon}</h3>
                <p>One of Pluto's fascinating moons</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Pluto Exploration Society. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FactCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Index;
