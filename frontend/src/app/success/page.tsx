import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Users,
  Award,
  Star,
} from "lucide-react";

export default function Success() {
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
            Success{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Real stories from Odisha's exporters who transformed challenges into
            opportunities and expanded their global reach with notoll.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Exporters Helped</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ₹250Cr
                </div>
                <div className="text-gray-600">New Revenue Generated</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">35</div>
                <div className="text-gray-600">New Markets Opened</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  2,500+
                </div>
                <div className="text-gray-600">Buyer Connections Made</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Featured Success Stories
          </h2>

          <div className="space-y-12">
            {/* Story 1 */}
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 mb-6 italic">
                      "When U.S. tariffs hit our shrimp exports, we thought our
                      business was doomed. notoll helped us discover buyers in
                      Southeast Asia and Europe. We've now secured 3 new
                      contracts worth ₹2.5 crores and reduced our dependency on
                      the U.S. market from 80% to 30%."
                    </blockquote>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-900">
                        Rajesh Kumar
                      </div>
                      <div className="text-gray-600">
                        Managing Director, Coastal Seafoods Ltd
                      </div>
                      <div className="text-sm text-blue-600 mt-1">
                        Paradip, Odisha
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Results Achieved:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• ₹2.5Cr in new contracts</li>
                      <li>• 3 new international markets</li>
                      <li>• 50% risk reduction</li>
                      <li>• 6 months to full diversification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story 2 */}
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 mb-6 italic">
                      "The compliance center was a game-changer for us. We were
                      spending weeks on paperwork for each new market. Now we're
                      exporting handloom textiles to 4 European markets with
                      confidence and our documentation time has reduced by 70%."
                    </blockquote>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-900">
                        Priya Mishra
                      </div>
                      <div className="text-gray-600">
                        Founder, Heritage Handlooms
                      </div>
                      <div className="text-sm text-blue-600 mt-1">
                        Bhubaneswar, Odisha
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Results Achieved:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 4 new European markets</li>
                      <li>• 70% faster documentation</li>
                      <li>• 100% compliance rate</li>
                      <li>• ₹1.8Cr revenue growth</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story 3 */}
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 mb-6 italic">
                      "The AI-powered buyer matching was incredible. Within 2
                      months, we connected with premium buyers in Japan and
                      Australia who were specifically looking for our organic
                      turmeric. Our export value increased by 150% in just one
                      year."
                    </blockquote>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-900">
                        Amit Patel
                      </div>
                      <div className="text-gray-600">
                        CEO, Golden Spice Exports
                      </div>
                      <div className="text-sm text-blue-600 mt-1">
                        Cuttack, Odisha
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Results Achieved:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 150% revenue increase</li>
                      <li>• Premium buyer connections</li>
                      <li>• 2 new high-value markets</li>
                      <li>• 3x profit margins</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="px-6 lg:px-8 pb-24 bg-blue-50/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry Impact
            </h2>
            <p className="text-xl text-gray-600">
              How notoll is transforming Odisha's export landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Market Diversification
                </h3>
                <p className="text-gray-600">
                  Average exporter now sells to 3.2 new markets, reducing
                  single-market dependency from 75% to 35%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Odisha exporters now actively trading in 35+ countries, up
                  from just 8 major markets before notoll.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Economic Growth
                </h3>
                <p className="text-gray-600">
                  Contributing ₹250+ crores in new export revenue and creating
                  2,000+ indirect employment opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            What Our Users Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Market intelligence feature saved us from entering a
                  declining market. The data accuracy is exceptional."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Sneha Das</div>
                  <div className="text-gray-500">Aqua Fresh Exports</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The relief scheme navigator helped us get ₹15 lakhs in
                  government support. We never knew these schemes existed!"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Mahesh Jena</div>
                  <div className="text-gray-500">Marine Products Ltd</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Community forum connects us with experienced exporters. The
                  knowledge sharing is invaluable."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Kavita Sharma</div>
                  <div className="text-gray-500">Traditional Crafts Co.</div>
                </div>
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of successful exporters who have transformed their
                businesses with notoll.
              </p>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Start Your Journey
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
