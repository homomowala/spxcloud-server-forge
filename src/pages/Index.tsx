
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Cpu, Shield, Cloud, Gamepad, HardDrive, Zap, Monitor, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const features = [
    { icon: Zap, title: "Instant Setup", description: "Get started in minutes, not hours" },
    { icon: Cpu, title: "AMD EPYC CPUs", description: "High-performance processors for smooth operation" },
    { icon: Shield, title: "DDoS Protected", description: "Advanced protection against attacks" },
    { icon: Cloud, title: "99.99% Uptime", description: "Reliable hosting you can count on" },
    { icon: ArrowRight, title: "Upgrade Anytime", description: "Scale your server as you grow" },
    { icon: Monitor, title: "GamePanel Access", description: "Full control with our intuitive panel" },
  ];

  const popularPlans = [
    { name: "Wood", ram: "4 GB", cpu: "80%", disk: "8 GB", priceINR: "₹200", priceUSD: "$2.40", type: "minecraft" },
    { name: "Diamond", ram: "12 GB", cpu: "240%", disk: "24 GB", priceINR: "₹600", priceUSD: "$7.20", type: "minecraft", popular: true },
    { name: "Standard", vcpu: "2", ram: "4 GB", disk: "40 GB", priceINR: "₹400", priceUSD: "$4.80", type: "vps" },
  ];

  const testimonials = [
    { name: "MinecraftPro", feedback: "Amazing performance and support! Our community loves the low latency.", avatar: "MP" },
    { name: "BlockBuilder", feedback: "Easy to use panel and instant setup. Highly recommended!", avatar: "BB" },
    { name: "RedstoneKing", feedback: "Best hosting service we've used. Great value for money.", avatar: "RK" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Premium Game & VPS Hosting. Built for Speed.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AMD EPYC servers, blazing-fast performance, and unmatched support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4" asChild>
                <Link to="/minecraft">View Minecraft Plans</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 text-lg px-8 py-4" asChild>
                <Link to="/vps">View VPS Plans</Link>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <a href="https://discord.gg/bSKas2SFAc" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Why Choose SPXCloud?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 transition-colors">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Plans Preview */}
        <section className="py-20 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Popular Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {popularPlans.map((plan) => (
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
                    {plan.type === "minecraft" ? (
                      <>
                        <div className="flex justify-between">
                          <span>RAM:</span>
                          <span className="text-green-400">{plan.ram}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CPU:</span>
                          <span className="text-green-400">{plan.cpu}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <span>vCPU:</span>
                          <span className="text-green-400">{plan.vcpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>RAM:</span>
                          <span className="text-green-400">{plan.ram}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between">
                      <span>Disk:</span>
                      <span className="text-green-400">{plan.disk}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link to="/minecraft">View All Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Why Choose SPXCloud?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-400">Always here when you need us</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                <p className="text-gray-400">Great value for premium hosting</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Friendly Team</h3>
                <p className="text-gray-400">Human support that actually cares</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Clean GamePanel</h3>
                <p className="text-gray-400">Intuitive interface for easy management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Loved by Gamers, Trusted by Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">"{testimonial.feedback}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold">
                        {testimonial.avatar}
                      </div>
                      <span className="font-semibold">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Footer */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-green-400">Ready to launch your server?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4" asChild>
                <Link to="/contact">Order Now via Ticket</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 text-lg px-8 py-4" asChild>
                <a href="https://discord.gg/bSKas2SFAc" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
