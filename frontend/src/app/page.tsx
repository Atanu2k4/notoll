"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Globe,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 bg-card text-foreground focus:outline-primary"
      >
        Skip to main content
      </a>

      {/* Background gradient and cool effects */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full animate-pulse"></div>

      {/* Floating orbs for cool effect */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-full animate-float-delayed"></div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 lg:px-8" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent"
                aria-label="notoll home"
              >
                notoll
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              role="navigation"
            >
              <a
                href="#about"
                className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#features"
                className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#success"
                className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
              >
                Success Stories
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />

              <div className="hidden md:flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="outline" className="px-6 py-2 rounded-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors p-2 rounded-md"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-lg border border-border rounded-lg mx-6 p-6 space-y-4 shadow-xl z-50"
              role="navigation"
            >
              <a
                href="#about"
                className="block text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#features"
                className="block text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#success"
                className="block text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Success Stories
              </a>
              <a
                href="#contact"
                className="block text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Link href="/signup" className="block" onClick={toggleMenu}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="main-content"
        className="relative z-10 px-6 lg:px-8 pt-20 md:pt-32 pb-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Navigate Beyond
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Markets
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Empower Odisha's exporters to discover new opportunities, connect
            with global buyers, and navigate trade challenges with AI-powered
            insights and compliance support.
          </p>

          {/* Single CTA Button */}
          <div className="flex justify-center mb-16">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Start your export journey"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-20 px-6 lg:px-8 py-24 bg-muted/50"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              About notoll
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering Odisha's exporters to navigate beyond U.S. tariffs and
              discover global opportunities with AI-powered insights and
              comprehensive trade support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <Target
                  className="h-12 w-12 text-primary mb-6"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To transform trade challenges into opportunities by providing
                  Odisha's seafood and textile exporters with the tools,
                  insights, and connections needed to thrive in global markets
                  beyond traditional dependencies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <Globe
                  className="h-12 w-12 text-primary mb-6"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading platform that enables regional exporters
                  to diversify their markets, build resilient supply chains, and
                  contribute to sustainable economic growth through innovative
                  trade solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users
                className="h-16 w-16 text-primary mx-auto mb-6"
                aria-hidden="true"
              />
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Community First
              </h4>
              <p className="text-muted-foreground">
                We believe in the power of collaboration and building strong
                relationships within the export community.
              </p>
            </div>

            <div className="text-center">
              <Award
                className="h-16 w-16 text-primary mx-auto mb-6"
                aria-hidden="true"
              />
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Excellence
              </h4>
              <p className="text-muted-foreground">
                We're committed to delivering exceptional tools and insights
                that drive real results for our users.
              </p>
            </div>

            <div className="text-center">
              <Target
                className="h-16 w-16 text-primary mx-auto mb-6"
                aria-hidden="true"
              />
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Innovation
              </h4>
              <p className="text-muted-foreground">
                We continuously evolve our platform to meet the changing needs
                of global trade and our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-20 px-6 lg:px-8 py-24"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              id="features-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed specifically for Odisha's exporters
              to navigate global markets, connect with buyers, and ensure
              compliance across all trade operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Market Intelligence */}
            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Market Intelligence
                </h3>
                <p className="text-muted-foreground mb-6">
                  Real-time tariff updates, pricing trends, and market demand
                  analysis across 50+ countries. Get AI-powered insights to
                  identify the most profitable markets for your products.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Live tariff and duty calculators</li>
                  <li>• Market demand forecasting</li>
                  <li>• Competitor pricing analysis</li>
                  <li>• Trade volume trends</li>
                </ul>
              </CardContent>
            </Card>

            {/* Global Buyer Network */}
            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Global Buyer Network
                </h3>
                <p className="text-muted-foreground mb-6">
                  Connect with verified international buyers across Europe,
                  Asia, and Americas. Generate AI-powered pitches in multiple
                  languages to expand your reach.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 5,000+ verified buyers database</li>
                  <li>• AI-powered pitch generation</li>
                  <li>• Multi-language support</li>
                  <li>• Direct messaging platform</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance Center */}
            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Compliance Made Easy
                </h3>
                <p className="text-muted-foreground mb-6">
                  Market-specific compliance checklists, documentation
                  templates, and automated certificate tracking to ensure smooth
                  exports to any destination.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Country-specific requirements</li>
                  <li>• Document template library</li>
                  <li>• Certificate tracking system</li>
                  <li>• Customs clearance guides</li>
                </ul>
              </CardContent>
            </Card>

            {/* Relief Navigator */}
            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Relief & Support Navigator
                </h3>
                <p className="text-muted-foreground mb-6">
                  Discover and apply for government relief schemes, grants, and
                  subsidies. Get eligibility checks and benefit calculators for
                  maximum support.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Scheme discovery engine</li>
                  <li>• Eligibility assessment tools</li>
                  <li>• Application assistance</li>
                  <li>• Benefit calculators</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section
        id="success"
        className="relative z-20 px-6 lg:px-8 py-24 bg-muted/50"
        aria-labelledby="success-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              id="success-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from Odisha's exporters who transformed challenges
              into opportunities and expanded their global reach with notoll.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Exporters Helped</div>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  ₹250Cr
                </div>
                <div className="text-muted-foreground">
                  New Revenue Generated
                </div>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">35</div>
                <div className="text-muted-foreground">New Markets Opened</div>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  2,500+
                </div>
                <div className="text-muted-foreground">
                  Buyer Connections Made
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-6 italic">
                  "notoll helped us find new buyers in Southeast Asia when U.S.
                  tariffs hit our shrimp exports. We've secured 3 new contracts
                  worth ₹2.5 crores."
                </blockquote>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-semibold text-foreground">
                    Rajesh Kumar
                  </div>
                  <div className="text-muted-foreground">
                    MD, Coastal Seafoods Ltd
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-6 italic">
                  "The compliance center saved us weeks of paperwork. We're now
                  exporting handloom textiles to 4 new European markets with
                  confidence."
                </blockquote>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-semibold text-foreground">
                    Priya Mishra
                  </div>
                  <div className="text-muted-foreground">
                    Founder, Heritage Handlooms
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-20 px-6 lg:px-8 py-24"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about expanding your export business? Our team of
              trade experts is here to help you navigate global markets
              successfully.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-medium text-foreground mb-2"
                        htmlFor="first-name"
                      >
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="border-border focus:border-primary"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-foreground mb-2"
                        htmlFor="last-name"
                      >
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="border-border focus:border-primary"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-foreground mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-border focus:border-primary"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-foreground mb-2"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Enter your company name"
                      className="border-border focus:border-primary"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-foreground mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className="border-border focus:border-primary"
                      aria-required="true"
                    />
                  </div>

                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    aria-label="Send contact message"
                    type="submit"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Phone Support
                      </h4>
                      <p className="text-muted-foreground">+91 78945 61230</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri, 9 AM - 6 PM IST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Email Support
                      </h4>
                      <p className="text-muted-foreground">
                        support@notoll.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        24/7 response within 2 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Visit Us
                      </h4>
                      <p className="text-muted-foreground">
                        Plot No. 123, Patia
                      </p>
                      <p className="text-muted-foreground">
                        Bhubaneswar, Odisha - 751024
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Live Chat
                      </h4>
                      <p className="text-muted-foreground">
                        Instant help from our team
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-2"
                      >
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
