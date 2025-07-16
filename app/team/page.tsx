"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Instagram, Twitter, User, Mail, Phone, MapPin, GraduationCap, Briefcase, Send, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import ContactModal from "@/components/contact-modal"

export default function TeamPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [joinFormStep, setJoinFormStep] = useState(1)
  const [joinFormData, setJoinFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    role: "",
    skills: "",
    motivation: "",
    portfolio: "",
  })
  const [isJoinSubmitted, setIsJoinSubmitted] = useState(false)
  const [isJoinSubmitting, setIsJoinSubmitting] = useState(false)

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsJoinSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xkgbzplv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...joinFormData,
          _subject: `Join Our Mission - ${joinFormData.role}`,
          form_type: "Join Our Mission",
        }),
      })

      if (response.ok) {
        setIsJoinSubmitted(true)
        setTimeout(() => {
          setIsJoinSubmitted(false)
          setJoinFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            experience: "",
            role: "",
            skills: "",
            motivation: "",
            portfolio: "",
          })
          setJoinFormStep(1)
        }, 3000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Failed to send application. Please try again or email us directly at info@botloom.in")
    } finally {
      setIsJoinSubmitting(false)
    }
  }

  const handleJoinInputChange = (field: string, value: string) => {
    setJoinFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (joinFormStep < 3) {
      setJoinFormStep(joinFormStep + 1)
    }
  }

  const prevStep = () => {
    if (joinFormStep > 1) {
      setJoinFormStep(joinFormStep - 1)
    }
  }

  const teamMembers = [
    {
      name: "Prochiyamaan S. Deka",
      designation: "CEO & Chief AI Strategist",
      bio: "Visionary founder leading AI optimization strategies and backend architecture at Botloom. Combines business foresight with technical execution for scalable solutions.",
      skills: ["AI Optimization", "Backend Architecture", "Business Strategy"],
      gradient: "from-blue-500 to-cyan-500",
      social: {
        linkedin: "https://www.linkedin.com/in/prochiyamaan-shri-deka",
        instagram: "https://www.instagram.com/psd3.d/",
        twitter: "https://twitter.com/psd_ai",
      },
    },
    {
      name: "Ankit Sarmah",
      designation: "COO & Head of Growth",
      bio: "Creative force behind Botloom's product presence— designing web interfaces, managing social media, and generating strategic leads to drive business expansion..",
      skills: ["Social Media Strategy", "UI/UX", "Product Design"],
      gradient: "from-purple-500 to-pink-500",
      social: {
        linkedin: "https://linkedin.com/in/ankit-sarma-8799b8371",
        instagram: "https://www.instagram.com/_annkittt__?igsh=MTFvdzVnbnViNnY3eQ%3D%3D&utm_source=qr",
        twitter: "https://twitter.com/ankit_ai",
      },
    },
    {
      name: "Prachurjya P. Kalita",
      designation: "CTO & Lead Backend Engineer",
      bio: "Core backend engineer responsible for system logic and integration, collaborating closely with the CEO to streamline AI infrastructure and development workflows.",
      skills: ["Backend Engineering", "UX Design", "AI Integration"],
      gradient: "from-green-500 to-blue-500",
      social: {
        linkedin: "https://linkedin.com/in/marcus-johnson-product",
        instagram: "https://www.instagram.com/dontkyssebhej/",
        twitter: "https://twitter.com/ppk_product",
      },
    },
    {
      name: "Abirbhav Rajkhowa",
      designation: "Chief AI Scientist (CAIS)",
      bio: "Research-focused developer working on HoloAI backend infrastructure, with deep expertise in AI and conversational frameworks.",
      skills: [" AI Research", "Backend Support", "HoloAI Development"],
      gradient: "from-orange-500 to-red-500",
      social: {
        linkedin: "https://www.linkedin.com/in/abirbhav-rajkhowa-98b422216",
        instagram: "https://www.instagram.com/ar3xx.exe/",
        twitter: "https://twitter.com/arex_ai",
      },
    },
    {
      name: "Shantaneel Sarkar",
      designation: "Chief Frontend Architect (CFA)",
      bio: "Versatile engineer who contributed to Botloom's web bot frontend. Combines system understanding with practical frontend development.",
      skills: ["System Design", "Cloud Architecture", "Web Bot"],
      gradient: "from-indigo-500 to-purple-500",
      social: {
        linkedin: "https://linkedin.com/in/david-kim-engineer",
        instagram: "https://www.instagram.com/shantaneel007/",
        twitter: "https://twitter.com/shantaneel_dev",
      },
    },
    {
      name: "Alankrit Suryavanshi",
      designation: "Chief Growth Officer (CGO)",
      bio: "Hands-on operations lead managing daily workflows, team coordination, and execution. Also spearheads strategic partnerships and occasionally drives lead generation for Botloom’s growth.",
      skills: ["Customer Success", "Project Management", "team coordination"],
      gradient: "from-pink-500 to-rose-500",
      social: {
        linkedin: "https://www.linkedin.com/in/alankrit-suryavanshi",
        instagram: "https://www.instagram.com/alankrit_suryavanshi/",
        twitter: "https://twitter.com/alankrit_cs",
      },
    },
  ]

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
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
              Meet the Minds Behind Botloom
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate team of AI experts, engineers, and most importantly the CO-founders who are ready to build the future
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden h-full">
                  <CardContent className="p-8">
                    {/* Avatar with Initials */}
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 font-medium mb-4">{member.designation}</p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => handleSocialClick(member.social.linkedin)}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600/20 hover:border-blue-400 border border-white/20 flex items-center justify-center transition-all duration-300 group/btn"
                          title={`Connect with ${member.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 text-blue-400 group-hover/btn:text-blue-300" />
                        </button>
                        <button
                          onClick={() => handleSocialClick(member.social.instagram)}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600/20 hover:border-pink-400 border border-white/20 flex items-center justify-center transition-all duration-300 group/btn"
                          title={`Follow ${member.name} on Instagram`}
                        >
                          <Instagram className="w-4 h-4 text-pink-400 group-hover/btn:text-pink-300" />
                        </button>
                        <button
                          onClick={() => handleSocialClick(member.social.twitter)}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-400/20 hover:border-blue-300 border border-white/20 flex items-center justify-center transition-all duration-300 group/btn"
                          title={`Follow ${member.name} on Twitter`}
                        >
                          <Twitter className="w-4 h-4 text-blue-300 group-hover/btn:text-blue-200" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building something extraordinary and looking for talented individuals who share our passion for AI
                innovation. Ready to help shape the future?
              </p>
            </div>

            {!isJoinSubmitted ? (
              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-green-500/10 via-yellow-500/5 to-orange-500/10 border-green-500/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Progress Steps */}
                    <div className="flex justify-center mb-8">
                      <div className="flex items-center space-x-4">
                        {[1, 2, 3].map((step) => (
                          <div key={step} className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                                step <= joinFormStep
                                  ? "bg-gradient-to-r from-green-500 to-orange-500 text-white"
                                  : "bg-white/10 text-gray-400"
                              }`}
                            >
                              {step}
                            </div>
                            {step < 3 && (
                              <div
                                className={`w-16 h-1 mx-2 ${
                                  step < joinFormStep ? "bg-gradient-to-r from-green-500 to-orange-500" : "bg-white/10"
                                }`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleJoinSubmit} className="space-y-6">
                      {joinFormStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <User className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Personal Information</h3>
                            <p className="text-gray-400">Tell us about yourself</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Input
                                placeholder="Full Name *"
                                value={joinFormData.name}
                                onChange={(e) => handleJoinInputChange("name", e.target.value)}
                                required
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3 focus:border-green-500/50"
                              />
                            </div>
                            <div>
                              <Input
                                type="email"
                                placeholder="Email Address *"
                                value={joinFormData.email}
                                onChange={(e) => handleJoinInputChange("email", e.target.value)}
                                required
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3 focus:border-green-500/50"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Input
                                type="tel"
                                placeholder="Phone Number"
                                value={joinFormData.phone}
                                onChange={(e) => handleJoinInputChange("phone", e.target.value)}
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3 focus:border-green-500/50"
                              />
                            </div>
                            <div>
                              <Input
                                placeholder="Location"
                                value={joinFormData.location}
                                onChange={(e) => handleJoinInputChange("location", e.target.value)}
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3 focus:border-green-500/50"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {joinFormStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Briefcase className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Professional Background</h3>
                            <p className="text-gray-400">Share your experience and interests</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Select onValueChange={(value) => handleJoinInputChange("experience", value)}>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl py-3 focus:border-green-500/50">
                                  <SelectValue placeholder="Experience Level" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-white/10">
                                  <SelectItem value="student">Student</SelectItem>
                                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                                  <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                                  <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                                  <SelectItem value="expert">Expert Level (10+ years)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Select onValueChange={(value) => handleJoinInputChange("role", value)}>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl py-3 focus:border-green-500/50">
                                  <SelectValue placeholder="Role of Interest" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-white/10">
                                  <SelectItem value="ai-engineer">AI Engineer</SelectItem>
                                  <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                                  <SelectItem value="backend-developer">Backend Developer</SelectItem>
                                  <SelectItem value="ui-ux-designer">UI/UX Designer</SelectItem>
                                  <SelectItem value="product-manager">Product Manager</SelectItem>
                                  <SelectItem value="marketing">Marketing & Growth</SelectItem>
                                  <SelectItem value="sales">Sales & Business Development</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Textarea
                              placeholder="What are your key skills and technologies you're proficient in?"
                              value={joinFormData.skills}
                              onChange={(e) => handleJoinInputChange("skills", e.target.value)}
                              rows={3}
                              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl resize-none focus:border-green-500/50"
                            />
                          </div>
                        </motion.div>
                      )}

                      {joinFormStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Why Join Botloom?</h3>
                            <p className="text-gray-400">Tell us what excites you about our mission</p>
                          </div>

                          <div>
                            <Textarea
                              placeholder="What motivates you to join Botloom? What excites you about AI and our mission?"
                              value={joinFormData.motivation}
                              onChange={(e) => handleJoinInputChange("motivation", e.target.value)}
                              required
                              rows={4}
                              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl resize-none focus:border-green-500/50"
                            />
                          </div>

                          <div>
                            <Input
                              placeholder="Portfolio/Website URL (optional)"
                              value={joinFormData.portfolio}
                              onChange={(e) => handleJoinInputChange("portfolio", e.target.value)}
                              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3 focus:border-green-500/50"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-6">
                        {joinFormStep > 1 && (
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300"
                          >
                            Previous
                          </Button>
                        )}
                        
                        <div className="flex-1" />
                        
                        {joinFormStep < 3 ? (
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                          >
                            Next
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            disabled={isJoinSubmitting}
                            className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          >
                            {isJoinSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Submitting...
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <Send className="w-4 h-4" />
                                Submit Application
                              </div>
                            )}
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <Card className="bg-gradient-to-br from-green-500/10 via-yellow-500/5 to-orange-500/10 border-green-500/20 backdrop-blur-sm">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">Application Submitted!</h3>
                    <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                      Thank you for your interest in joining our mission! We've received your application and will review it carefully. 
                      Our team will get back to you within 48 hours.
                    </p>
                    <div className="text-sm text-green-400">This form will reset automatically...</div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}