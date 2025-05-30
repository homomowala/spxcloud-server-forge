
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const VPSHosting = () => {
  const plans = [
    { name: "Mini", vcpu: 1, ram: "1GB", ssd: "10GB", bandwidth: "500GB", location: "France", priceINR: "₹120", priceUSD: "$1.50" },
    { name: "Basic", vcpu: 1, ram: "2GB", ssd: "20GB", bandwidth: "1TB", location: "France", priceINR: "₹200", priceUSD: "$2.40" },
    { name: "Standard", vcpu: 2, ram: "4GB", ssd: "40GB", bandwidth: "2TB", location: "France", priceINR: "₹400", priceUSD: "$4.80" },
    { name: "Pro", vcpu: 3, ram: "8GB", ssd: "80GB", bandwidth: "4TB", location: "France", priceINR: "₹800", priceUSD: "$9.60" },
    { name: "Ultra", vcpu: 4, ram: "16GB", ssd: "160GB", bandwidth: "8TB", location: "France", priceINR: "₹1600", priceUSD: "$19.20" },
  ];

  const features = [
    "Full root access",
    "Choice of OS (Ubuntu, Debian, etc.)",
    "Reboot, reinstall from panel",
    "DDoS protection",
    "Instant deployment",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            High-Performance VPS Hosting
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Run game servers, bots, applications, and more on AMD EPYC-powered Linux VPS servers.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Choose Your VPS Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    <div className="text-2xl font-bold text-green-400">{plan.priceINR}</div>
                    <div className="text-sm">{plan.priceUSD}/month</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>vCPU:</span>
                    <span className="text-green-400">{plan.vcpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="text-green-400">{plan.ram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SSD:</span>
                    <span className="text-green-400">{plan.ssd}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bandwidth:</span>
                    <span className="text-green-400">{plan.bandwidth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-green-400">{plan.location} 🇫🇷</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Included with VPS</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VPSHosting;
