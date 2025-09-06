import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Globe, Award } from "lucide-react";

export default function About() {
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
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              notoll
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Empowering Odisha's exporters to navigate beyond U.S. tariffs and
            discover global opportunities with AI-powered insights and
            comprehensive trade support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-blue-600 mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To transform trade challenges into opportunities by providing
                  Odisha's seafood and textile exporters with the tools,
                  insights, and connections needed to thrive in global markets
                  beyond traditional dependencies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-blue-600 mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading platform that enables regional exporters
                  to diversify their markets, build resilient supply chains, and
                  contribute to sustainable economic growth through innovative
                  trade solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 lg:px-8 pb-24 bg-blue-50/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              Born from the real challenges faced by Odisha's export community
            </p>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              When U.S. tariffs began impacting Odisha's thriving seafood and
              textile export industries, we witnessed firsthand how quickly
              global trade dynamics can change. Traditional exporters who had
              built their businesses around established markets suddenly found
              themselves searching for alternatives.
            </p>
            <p className="mb-6">
              notoll was created to bridge this gap. We recognized that while
              challenges create uncertainty, they also create opportunities for
              those equipped with the right tools and information. Our platform
              combines local market knowledge with global trade intelligence to
              help exporters not just survive disruptions, but thrive through
              diversification.
            </p>
            <p>
              Today, we're proud to support hundreds of exporters across Odisha
              as they expand into new markets, connect with international
              buyers, and build more resilient businesses for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community First
              </h3>
              <p className="text-gray-600">
                We believe in the power of collaboration and building strong
                relationships within the export community.
              </p>
            </div>

            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We're committed to delivering exceptional tools and insights
                that drive real results for our users.
              </p>
            </div>

            <div className="text-center">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously evolve our platform to meet the changing needs
                of global trade and our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Export Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of Odisha exporters who are already expanding
                their global reach with notoll.
              </p>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Get Started Today
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
