"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Zap, Target, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import ContactModal from "@/components/contact-modal"

export default function CustomSolutionsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    problemType: "",
    problemDescription: "",
    currentSolution: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your actual Formspree form ID for custom solutions
      const response = await fetch("https://formspree.io/f/mldnlaok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Custom Solution Inquiry - ${formData.problemType}`,
          form_type: "Custom Solutions",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            industry: "",
            problemType: "",
            problemDescription: "",
            currentSolution: "",
            budget: "",
            timeline: "",
          })
        }, 3000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Failed to send message. Please try again or email us directly at info@botloom.in")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const capabilities = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Analysis",
      description:
        "We dive deep into your specific challenges to understand the root cause and identify AI opportunities.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Prototyping",
      description: "Quick proof-of-concept development to validate solutions before full implementation.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Implementation",
      description: "Tailored AI solutions that integrate seamlessly with your existing systems and workflows.",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      <div className="pt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Custom AI Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight"
            >
              Every Problem
              <br />
              Has an AI Solution
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              At Botloom, we specialize in creating bespoke AI solutions that tackle your unique business challenges. No
              matter how complex or niche your problem is, we'll build the perfect AI to solve it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => document.getElementById("custom-form")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Start Your Custom Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </section>

          {/* Capabilities Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Approach
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We don't just build AI solutions – we craft intelligent systems that understand your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${capability.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {capability.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Custom Solutions Form */}
          <section id="custom-form" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tell Us Your Challenge
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Share the details of your problem, and we'll design a custom AI solution that fits perfectly
                </p>
              </div>

              {!isSubmitted ? (
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Input
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Input
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3"
                          />
                        </div>
                      </div>

                      {/* Business Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Select onValueChange={(value) => handleInputChange("industry", value)}>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl py-3">
                              <SelectValue placeholder="Industry" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-white/10">
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="hospitality">Hospitality</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Select onValueChange={(value) => handleInputChange("problemType", value)}>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl py-3">
                              <SelectValue placeholder="Problem Type *" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-white/10">
                              <SelectItem value="automation">Process Automation</SelectItem>
                              <SelectItem value="customer-service">Customer Service</SelectItem>
                              <SelectItem value="data-analysis">Data Analysis</SelectItem>
                              <SelectItem value="content-generation">Content Generation</SelectItem>
                              <SelectItem value="predictive-analytics">Predictive Analytics</SelectItem>
                              <SelectItem value="workflow-optimization">Workflow Optimization</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Problem Description */}
                      <div>
                        <Textarea
                          placeholder="Describe your problem in detail. What challenges are you facing? What would an ideal solution look like? *"
                          value={formData.problemDescription}
                          onChange={(e) => handleInputChange("problemDescription", e.target.value)}
                          required
                          rows={5}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl resize-none"
                        />
                      </div>

                      <div>
                        <Textarea
                          placeholder="What solutions have you tried before? What worked and what didn't?"
                          value={formData.currentSolution}
                          onChange={(e) => handleInputChange("currentSolution", e.target.value)}
                          rows={3}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl resize-none"
                        />
                      </div>

                      {/* Project Details */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Select onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl py-3">
                              <SelectValue placeholder="Budget Range" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-white/10">
                              <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                              <SelectItem value="50k-2l">₹50,000 - ₹2,00,000</SelectItem>
                              <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                              <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                              <SelectItem value="above-10l">Above ₹10,00,000</SelectItem>
                              <SelectItem value="discuss">Let's Discuss</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl py-3">
                              <SelectValue placeholder="Timeline" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-white/10">
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-month">Within 1 month</SelectItem>
                              <SelectItem value="3-months">Within 3 months</SelectItem>
                              <SelectItem value="6-months">Within 6 months</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending Your Request...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Submit Custom Solution Request
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                /* Success State */
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">Request Submitted Successfully!</h3>
                    <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                      Thank you for sharing your challenge with us. Our AI experts will analyze your requirements and
                      get back to you within 24 hours with a custom solution proposal.
                    </p>
                    <div className="text-sm text-blue-400">This form will reset automatically...</div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </section>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
