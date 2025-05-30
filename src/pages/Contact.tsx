
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const faqItems = [
    {
      question: "How do I order?",
      answer: "Join our Discord server and open a ticket. Mention the plan you want and we'll deploy your server instantly after confirmation."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes! You can upgrade any plan at any time. Our upgrade rate is ₹50 / $0.60 for +1GB RAM, +20% CPU, and +2GB disk."
    },
    {
      question: "Do you support modded Minecraft?",
      answer: "Absolutely! Our servers support both Java and Bedrock editions, including modded servers, plugins, and custom configurations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Need Help or Want to Order?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're here to help! Reach out through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 text-center hover:border-green-400 transition-colors">
              <CardContent className="p-8">
                <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Discord</h3>
                <p className="text-gray-400 mb-4">Join our community and get instant support</p>
                <Button className="bg-green-600 hover:bg-green-700">Join Discord</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center hover:border-green-400 transition-colors">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Create a Ticket</h3>
                <p className="text-gray-400 mb-4">Open a support ticket for detailed help</p>
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                  Create Ticket
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center hover:border-green-400 transition-colors">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400 mb-4">support@spxcloud.com</p>
                <Button variant="secondary">Send Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">How to Order</h2>
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-green-400">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
