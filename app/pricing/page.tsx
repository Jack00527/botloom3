"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Navbar from "@/components/navbar"
import ContactModal from "@/components/contact-modal"

export default function PricingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  const productPlans = [
    {
      productName: "AI Web Bot",
      productDescription: "Intelligent chatbot for your website",
      gradient: "from-purple-500 to-pink-500",
      plans: [
        {
          name: "Foundation",
          monthlyPrice: 2500, // ₹2,500
          annualPrice: 25000, // ₹25,000 (17% discount)
          features: [
            "1,000 conversations/month",
            "Basic Knowledge Base (text only FAQs)",
            "Fast, natural response speed",
            "1 revision/month bot customization",
            "Basic analytics (leads, top queries)",
            "Email support",
            "Botloom watermark",
            "₹20 per extra conversation"
          ],
          popular: false,
        },
        {
          name: "Elevate",
          monthlyPrice: 5000, // ₹5,000
          annualPrice: 50000, // ₹50,000 (17% discount)
          features: [
            "2,500 conversations/month",
            "Full Knowledge Base (PDF, multilingual)",
            "Ultra-fast response speed",
            "2 revisions/month bot customization",
            "Advanced analytics (drop-offs, performance)",
            "Google Sheets/CSV lead export",
            "Botloom branding removed",
            "₹10 per extra conversation"
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: null,
          annualPrice: null,
          features: [
            "Custom conversations limit",
            "Dynamic Knowledge Base, large data sets",
            "Priority queueing response speed",
            "Unlimited bot customization",
            "Custom analytics & insights",
            "DB/Google Sheets/CSV lead export",
            "Fully white-labeled solution",
            "Custom pricing for extra conversations"
          ],
          popular: false,
          customPricing: true,
        },
      ],
    },
    {
      productName: "AI Voice Assistant",
      productDescription: "Intelligent phone line automation",
      gradient: "from-blue-500 to-cyan-500",
      plans: [
        {
          name: "Starter",
          monthlyPrice: 3499, // ₹8,999
          annualPrice: 34990, // ₹89,990
          features: [
            "300 minutes (5 hours) included",
            "₹7.5 per extra minute",
            "Basic voice responses",
            "Standard voice quality",
            "Email support",
            "Basic call analytics",
            "Botloom branding"
          ],
          popular: false,
        },
        {
          name: "Growth",
          monthlyPrice: 6999, // ₹19,999
          annualPrice: 69990, // ₹1,99,990
          features: [
            "720 minutes (12 hours) included",
            "₹6 per extra minute",
            "Custom features available",
            "Premium voice quality",
            "White-label option",
            "Priority support",
            "Advanced analytics",
            "Up to 5 knowledge base files"
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: 15999, // ₹39,999
          annualPrice: 159990, // ₹3,99,990
          features: [
            "2,500 minutes (41.6 hours) included",
            "₹5 per extra minute",
            "Custom features included",
            "Premium voice quality",
            "Fully white-labeled",
            "Dedicated support",
            "Custom analytics",
            "Unlimited knowledge base files"
          ],
          popular: false,
        },
      ],
    },
    {
      productName: "HoloAI",
      productDescription: "Holographic AI experiences",
      gradient: "from-cyan-500 to-blue-500",
      plans: [
        {
          name: "Custom Solution",
          monthlyPrice: null,
          annualPrice: null,
          features: [
            "Custom avatar design",
            "Real-time interactions",
            "Plug-and-play setup",
            "On-site technical support",
            "Voice & gesture controls",
            "Event analytics",
            "Tailored to your needs",
          ],
          popular: false,
          customPricing: true,
        },
      ],
    },
  ]

  // Function to format Indian currency
  const formatINR = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Choose the AI solution that fits your needs. No hidden fees, no lock-in contracts.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${!isAnnual ? "text-white" : "text-gray-400"}`}>Monthly</span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-600"
              />
              <span className={`text-lg ${isAnnual ? "text-white" : "text-gray-400"}`}>Annual</span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                Save 17%
              </span>
            </div>
          </motion.div>

          {/* Product Sections */}
          {productPlans.map((product, productIndex) => (
            <motion.div
              key={product.productName}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: productIndex * 0.3 }}
              className="mb-20"
            >
              {/* Product Header */}
              <div className="text-center mb-12">
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mx-auto mb-6`}
                >
                  <div className="w-10 h-10 bg-white rounded-xl" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {product.productName}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  {product.productDescription}
                </p>
              </div>

              {/* Pricing Cards for this Product */}
              <div className={`grid ${product.plans.length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : product.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
                {product.plans.map((plan, planIndex) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (productIndex * 0.3) + (planIndex * 0.1) }}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <Card
                      className={`bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full ${plan.popular ? "border-purple-500/50 scale-105" : ""}`}
                    >
                      <CardHeader className="text-center pb-8">
                        <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                        
                        <div className="space-y-2">
                          {plan.customPricing ? (
                            <div className="text-4xl font-bold text-white">
                              Custom Pricing
                            </div>
                          ) : (
                            <>
                              <div className="text-4xl font-bold text-white">
                                {isAnnual
                                  ? plan.annualPrice !== null
                                    ? formatINR(Math.floor(plan.annualPrice / 12))
                                    : "-"
                                  : plan.monthlyPrice !== null
                                    ? formatINR(plan.monthlyPrice)
                                    : "-"
                                }
                                <span className="text-lg text-gray-400 font-normal">/month</span>
                              </div>
                              {isAnnual && plan.annualPrice !== null && (
                                <p className="text-sm text-green-400">Billed annually ({formatINR(plan.annualPrice)})</p>
                              )}
                            </>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-300">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button
                          onClick={() => setIsContactOpen(true)}
                          className={`w-full ${
                            plan.popular
                              ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                              : "bg-white/10 hover:bg-white/20 border border-white/20"
                          } text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                        >
                          {plan.customPricing ? "Contact Sales" : "Get Started"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              No Lock-in. Cancel Anytime.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We believe in earning your business every month. That's why all our plans come with flexible terms and the
              freedom to cancel whenever you need to.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">1-Week Setup</h3>
                <p className="text-gray-400">Get up and running quickly</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-400">We're here when you need us</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Custom Solutions</h3>
                <p className="text-gray-400">Tailored to your business</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}