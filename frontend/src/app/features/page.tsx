import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Globe,
  MessageSquare,
  BarChart3,
  FileCheck,
} from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="relative z-50 px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            >
              notoll
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-16 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Platform{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive tools designed specifically for Odisha's exporters to
            navigate global markets, connect with buyers, and ensure compliance
            across all trade operations.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Market Intelligence */}
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Market Intelligence
                </h3>
                <p className="text-gray-600 mb-6">
                  Real-time tariff updates, pricing trends, and market demand
                  analysis across 50+ countries. Get AI-powered insights to
                  identify the most profitable markets for your products.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Live tariff and duty calculators</li>
                  <li>• Market demand forecasting</li>
                  <li>• Competitor pricing analysis</li>
                  <li>• Trade volume trends</li>
                </ul>
              </CardContent>
            </Card>

            {/* Global Buyer Network */}
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Global Buyer Network
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect with verified international buyers across Europe,
                  Asia, and Americas. Generate AI-powered pitches in multiple
                  languages to expand your reach.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 5,000+ verified buyers database</li>
                  <li>• AI-powered pitch generation</li>
                  <li>• Multi-language support</li>
                  <li>• Direct messaging platform</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance Center */}
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Compliance Made Easy
                </h3>
                <p className="text-gray-600 mb-6">
                  Market-specific compliance checklists, documentation
                  templates, and automated certificate tracking to ensure smooth
                  exports to any destination.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Country-specific requirements</li>
                  <li>• Document template library</li>
                  <li>• Certificate tracking system</li>
                  <li>• Customs clearance guides</li>
                </ul>
              </CardContent>
            </Card>

            {/* Relief Navigator */}
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Relief & Support Navigator
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover and apply for government relief schemes, grants, and
                  subsidies. Get eligibility checks and benefit calculators for
                  maximum support.
                </p>
                <ul className="text-gray-600 space-y-2">
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

      {/* Additional Features */}
      <section className="px-6 lg:px-8 pb-24 bg-blue-50/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Tools
            </h2>
            <p className="text-xl text-gray-600">
              More features to streamline your export operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <MessageSquare className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Community Forum
                </h4>
                <p className="text-gray-600 text-sm">
                  Connect with fellow exporters, share experiences, and get
                  advice from industry experts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <BarChart3 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Impact Tracker
                </h4>
                <p className="text-gray-600 text-sm">
                  Monitor your export performance, track revenue growth, and
                  measure market diversification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Pitch Assistant
                </h4>
                <p className="text-gray-600 text-sm">
                  AI-powered tool to create compelling pitches tailored to
                  specific buyers and markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <FileCheck className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Document Manager
                </h4>
                <p className="text-gray-600 text-sm">
                  Securely store, organize, and share all your export documents
                  and certificates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Choose the plan that works best for your export business
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Starter
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  ₹2,999<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for small exporters getting started
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Basic market intelligence</li>
                  <li>• 100 buyer connections</li>
                  <li>• Compliance checklists</li>
                  <li>• Email support</li>
                </ul>
                <Button className="w-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-600 ring-2 ring-blue-200">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  ₹7,999<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Complete solution for growing exporters
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Advanced market intelligence</li>
                  <li>• Unlimited buyer connections</li>
                  <li>• AI pitch generation</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Explore All Features?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Start your free trial today and discover how notoll can
                transform your export business.
              </p>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
