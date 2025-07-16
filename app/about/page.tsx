"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import ContactModal from "@/components/contact-modal"
import { useState } from "react"

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring new frontiers.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-Centered",
      description: "Every solution we build enhances human capabilities rather than replacing them.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Scalable Impact",
      description: "Our technologies are designed to grow with your business and adapt to your needs.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Delivery",
      description: "We believe in fast iteration and quick deployment to get you results sooner.",
      gradient: "from-green-500 to-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      <div className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Botloom
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of human-AI interaction through innovative solutions
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Intro */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovation at Our Core
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Botloom is an AI innovation company on a mission to revolutionize human-tech interaction. We believe
                that artificial intelligence should seamlessly integrate into business operations, enhancing
                productivity while maintaining the human touch that makes every interaction meaningful.
              </p>
            </motion.section>

            {/* Mission Statement */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-12 md:p-16 border border-white/10"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
                To empower businesses with cutting-edge AI solutions that solve real-world problems at scale. We're not
                just building technology – we're crafting the tools that will define the next era of business
                intelligence and customer interaction.
              </p>
            </motion.section>

            {/* Values Grid */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What Drives Us
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="text-center group"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Vision Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                We envision a world where AI seamlessly integrates into every business, making operations smarter,
                customer interactions more meaningful, and growth more sustainable. We're here to make that vision a
                reality, one custom solution at a time.
              </p>
            </motion.section>

            {/* Outro */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                The Future Isn't Coming
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">It's already here.</p>
              <p className="text-xl text-blue-400 font-medium">We're just building it for you.</p>
            </motion.section>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
