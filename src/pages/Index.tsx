
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Cpu, Shield, Cloud, Gamepad, HardDrive, Zap, Monitor, ArrowRight, Users, MessageSquare, Mail, Github, Twitter } from "lucide-react";

const Index = () => {
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

  const features = [
    { icon: Cpu, title: "AMD EPYC 7-Series CPUs", description: "High-performance processors for smooth gameplay" },
    { icon: Shield, title: "DDoS Protection (Always-On)", description: "Advanced protection against attacks" },
    { icon: Cloud, title: "99.99% Uptime SLA", description: "Reliable hosting you can count on" },
    { icon: Gamepad, title: "Supports Java & Bedrock", description: "Compatible with all Minecraft versions" },
    { icon: HardDrive, title: "Free Backups", description: "Automatic backups to keep your world safe" },
    { icon: Zap, title: "Instant Server Setup", description: "Get started in minutes, not hours" },
    { icon: Monitor, title: "Premium GamePanel Access", description: "Full control with our intuitive panel" },
    { icon: ArrowRight, title: "Upgrade Anytime", description: "Scale your server as you grow" },
  ];

  const testimonials = [
    { name: "MinecraftPro", feedback: "Amazing performance and support! Our community loves the low latency.", avatar: "MP" },
    { name: "BlockBuilder", feedback: "Easy to use panel and instant setup. Highly recommended!", avatar: "BB" },
    { name: "RedstoneKing", feedback: "Best hosting service we've used. Great value for money.", avatar: "RK" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">SPXCloud</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#plans" className="hover:text-green-400 transition-colors">Plans</a>
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">Join Discord</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Minecraft Hosting Done Right.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Instantly deploy high-performance servers with AMD EPYC CPUs, DDoS protection & full control via our GamePanel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              View Plans
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 text-lg px-8 py-4">
              Order via Ticket
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 bg-gray-800/50">
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

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Why Choose SPXCloud?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Upgrade Section */}
      <section className="py-20 px-4 bg-gray-800/50">
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

      {/* How to Order Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Ready to Get Started?</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <span className="text-lg">Join our Discord Server</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <span className="text-lg">Open a ticket</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <span className="text-lg">Mention the plan you want</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <span className="text-lg">We'll deploy your server instantly after confirmation</span>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <MessageSquare className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="font-semibold">Support Ticket</h3>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="font-semibold">Discord</h3>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="font-semibold">Email</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-4">SPXCloud</div>
              <p className="text-gray-400">Premium Minecraft hosting with unmatched performance and support.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Minecraft Hosting</a></li>
                <li><a href="#" className="hover:text-green-400">VPS Hosting</a></li>
                <li><a href="#" className="hover:text-green-400">Status Page</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Contact</a></li>
                <li><a href="#" className="hover:text-green-400">Discord</a></li>
                <li><a href="#" className="hover:text-green-400">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 SPXCloud. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Users className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
