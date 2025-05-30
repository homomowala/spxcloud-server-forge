import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Cpu, Shield, Cloud, Gamepad, HardDrive, Zap, Monitor, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const MinecraftHosting = () => {
  const plans = [
    { name: "Dirt", ram: "3 GB", cpu: "60%", disk: "6 GB", backups: 1, ports: 1, priceINR: "₹150", priceUSD: "$1.80" },
    { name: "Wood", ram: "4 GB", cpu: "80%", disk: "8 GB", backups: 2, ports: 1, priceINR: "₹200", priceUSD: "$2.40" },
    { name: "Iron", ram: "6 GB", cpu: "120%", disk: "12 GB", backups: 3, ports: 2, priceINR: "₹300", priceUSD: "$3.60" },
    { name: "Gold", ram: "8 GB", cpu: "160%", disk: "16 GB", backups: 4, ports: 2, priceINR: "₹400", priceUSD: "$4.80" },
    { name: "Diamond", ram: "12 GB", cpu: "240%", disk: "24 GB", backups: 5, ports: 3, priceINR: "₹600", priceUSD: "$7.20", popular: true },
    { name: "Netherite", ram: "16 GB", cpu: "320%", disk: "32 GB", backups: 6, ports: 5, priceINR: "₹800", priceUSD: "$9.60" },
    { name: "Bedrock", ram: "32 GB", cpu: "640%", disk: "64 GB", backups: 8, ports: 5, priceINR: "₹1600", priceUSD: "$19.20" },
    { name: "Amethyst", ram: "64 GB", cpu: "1280%", disk: "128 GB", backups: 12, ports: 5, priceINR: "₹3200", priceUSD: "$38.40" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Minecraft Server Hosting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Affordable, fast, and DDoS-protected Minecraft servers with full control. Choose from Dirt to Amethyst plans.
            </p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={`bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                      {plan.popular && <Badge className="bg-green-600">Popular</Badge>}
                    </div>
                    <CardDescription className="text-gray-400">
                      <div className="text-2xl font-bold text-green-400">{plan.priceINR}</div>
                      <div className="text-sm">{plan.priceUSD}/month</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <span className="text-green-400">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span className="text-green-400">{plan.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Disk:</span>
                      <span className="text-green-400">{plan.disk}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Backups:</span>
                      <span className="text-green-400">{plan.backups}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ports:</span>
                      <span className="text-green-400">{plan.ports}</span>
                    </div>
                    <div className="pt-4 space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        France 🇫🇷 Location
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        AMD EPYC 7-Series CPU
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        DDoS Protection
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        Premium GamePanel
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        Instant Setup
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        Full Upgrade Option
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upgrade Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-green-400">Need More Power? No Problem.</h2>
            <p className="text-xl text-gray-300 mb-8">You can upgrade any plan at any time.</p>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Upgrade Rate</h3>
              <div className="space-y-2 text-lg">
                <div>+1GB RAM</div>
                <div>+20% CPU</div>
                <div>+2GB Disk</div>
                <div className="text-2xl font-bold text-green-400 pt-4">₹50 / $0.60</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default MinecraftHosting;
