"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to CRM/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">TVAG Teams</h1>
          <a href="tel:+1234567890" className="text-[#E94560] hover:text-white transition-colors">
            (123) 456-7890
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Summer Special
            <span className="block text-[#E94560]">Save Big This Season</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Limited time offer - Transform your business this summer with exclusive pricing on all our premium services.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E94560] hover:bg-[#d63850] text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#16213E]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#E94560]/20 hover:border-[#E94560] transition-all">
            <div className="text-5xl mb-4">☀️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Summer Savings</h3>
            <p className="text-gray-300">
              Exclusive seasonal discounts on all premium packages. Don't miss out on this limited-time offer.
            </p>
          </div>

          <div className="bg-[#16213E]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#E94560]/20 hover:border-[#E94560] transition-all">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Fast Implementation</h3>
            <p className="text-gray-300">
              Get up and running in days, not weeks. Our streamlined process ensures quick results.
            </p>
          </div>

          <div className="bg-[#16213E]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#E94560]/20 hover:border-[#E94560] transition-all">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-gray-300">
              Top-tier service and support. We deliver excellence in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto bg-[#16213E]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#E94560]/30">
          <h2 className="text-4xl font-bold text-white mb-3 text-center">Claim Your Summer Savings</h2>
          <p className="text-gray-300 text-center mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A2E] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#E94560] transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A2E] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#E94560] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A2E] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#E94560] transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1A1A2E] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#E94560] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E94560] hover:bg-[#d63850] text-white font-bold py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get My Summer Discount
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center border-t border-gray-700">
        <p className="text-gray-400">
          © 2026 TVAG Teams. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
