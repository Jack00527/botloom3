"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Globe, Bot, ArrowRight, CheckCircle, Star, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import ContactModal from "@/components/contact-modal"

export default function SolutionsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const solutions = [
    {
      id: "customer-service",
      title: "AI Customer Service",
      tagline: "Let your phone line run itself.",
      icon: <Phone className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      useCases: ["Cafés & Restaurants", "Medical Clinics", "Service Businesses", "Retail Stores"],
      features: [
        "Real-time call handling",
        "Business-appropriate tone",
        "Cancel anytime policy",
        "1-week onboarding process",
        "24/7 availability",
        "Multi-language support",
      ],
      benefits: [
        "Reduce wait times by 90%",
        "Handle 10x more calls simultaneously",
        "Never miss a customer inquiry",
        "Consistent professional responses",
      ],
      description:
        "Transform your customer service with AI that understands context, handles inquiries naturally, and maintains your brand voice. Our AI customer service solution integrates seamlessly with your existing phone systems.",
    },
    {
      id: "web-bot",
      title: "Website Chatbot",
      tagline: "Your website's smartest reader.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      useCases: ["E-commerce Platforms", "Universities", "B2B SaaS", "Corporate Websites"],
      features: [
        "Trained on your website content",
        "No backend changes required",
        "Multilingual capabilities",
        "Advanced analytics dashboard",
        "Custom branding options",
        "API integration ready",
      ],
      benefits: [
        "Instant customer support 24/7",
        "Reduce support ticket volume",
        "Increase conversion rates",
        "Capture valuable user insights",
      ],
      description:
        "Deploy an intelligent chatbot that knows your website inside and out. Trained specifically on your content, it provides accurate, contextual responses to visitor questions while capturing valuable insights.",
    },
    {
      id: "holoai",
      title: "HoloAI",
      tagline: "Bring AI to life.",
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      useCases: ["Trade Shows & Expos", "Public Campaigns", "Corporate Events", "Retail Experiences"],
      features: [
        "Real-time holographic avatars",
        "AI-powered interactions",
        "Plug-and-play setup",
        "Custom avatar design",
        "Voice recognition",
        "Gesture-based controls",
      ],
      benefits: [
        "Create unforgettable experiences",
        "Attract massive crowds",
        "Generate social media buzz",
        "Deliver consistent messaging",
      ],
      description:
        "Create unforgettable experiences with holographic AI avatars that interact naturally with your audience. Perfect for events, exhibitions, and immersive brand experiences that leave lasting impressions.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      <div className="pt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three powerful AI products designed to transform how you interact with customers and audiences
            </p>
          </motion.div>

          {/* Solutions Tabs */}
          <Tabs defaultValue="customer-service" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 rounded-2xl p-2 mb-12">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-gray-400 rounded-xl py-3 px-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 justify-center">
                    {solution.icon}
                    <span>{solution.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution, index) => (
              <TabsContent key={solution.id} value={solution.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-12"
                >
                  {/* Solution Header */}
                  <div className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${solution.gradient} mb-6`}
                    >
                      {solution.icon}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {solution.title}
                    </h2>
                    <p className="text-2xl md:text-3xl text-blue-400 font-medium mb-6">{solution.tagline}</p>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{solution.description}</p>
                  </div>

                  {/* Benefits Showcase */}
                  <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          </div>
                          <p className="text-gray-300 text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features & Use Cases */}
                  <div className="grid md:grid-cols-2 gap-12">
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                          <Star className="w-6 h-6 text-yellow-400" />
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                          <Target className="w-6 h-6 text-purple-400" />
                          Perfect For
                        </h3>
                        <ul className="space-y-3">
                          {solution.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setIsContactOpen(true)}
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Get a Demo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      onClick={() => setIsContactOpen(true)}
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
