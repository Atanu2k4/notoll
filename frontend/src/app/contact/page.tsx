import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Headphones,
  FileText,
} from "lucide-react";

export default function Contact() {
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
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Have questions about expanding your export business? Our team of
            trade experts is here to help you navigate global markets
            successfully.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Phone Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Mon-Fri, 9 AM - 6 PM IST
                </p>
                <a
                  href="tel:+917894561230"
                  className="text-blue-600 font-medium hover:underline"
                >
                  +91 78945 61230
                </a>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  24/7 response within 2 hours
                </p>
                <a
                  href="mailto:support@notoll.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  support@notoll.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <MessageCircle className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Live Chat
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Instant help from our team
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Bhubaneswar, Odisha
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        placeholder="Enter your first name"
                        className="border-blue-200 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        placeholder="Enter your last name"
                        className="border-blue-200 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      placeholder="Enter your company name"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full p-3 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                      <option>General Inquiry</option>
                      <option>Market Intelligence Questions</option>
                      <option>Buyer Connection Support</option>
                      <option>Compliance Assistance</option>
                      <option>Relief Scheme Help</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card className="border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Our Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Head Office</p>
                        <p className="text-gray-600">
                          Plot No. 123, Patia, Bhubaneswar
                          <br />
                          Odisha - 751024, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Business Hours
                        </p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM IST
                          <br />
                          Saturday: 10:00 AM - 2:00 PM IST
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Options */}
              <Card className="border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Support Options
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Headphones className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Priority Support
                        </p>
                        <p className="text-gray-600 text-sm">
                          For Professional plan subscribers
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Knowledge Base
                        </p>
                        <p className="text-gray-600 text-sm">
                          Self-service help articles and guides
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Community Forum
                        </p>
                        <p className="text-gray-600 text-sm">
                          Connect with other exporters
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Emergency Support
                  </h3>
                  <p className="text-red-700 mb-4">
                    For urgent export compliance or shipment issues:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919876543210"
                      className="block text-red-600 font-medium hover:underline"
                    >
                      📞 +91 98765 43210 (24/7 Hotline)
                    </a>
                    <a
                      href="mailto:urgent@notoll.com"
                      className="block text-red-600 font-medium hover:underline"
                    >
                      ✉️ urgent@notoll.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="px-6 lg:px-8 pb-24 bg-blue-50/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly can I start finding new buyers?
                </h3>
                <p className="text-gray-600">
                  Most users start connecting with potential buyers within 24-48
                  hours of account setup. Our AI matching system immediately
                  begins analyzing your products and suggesting relevant
                  international buyers from our database of 5,000+ verified
                  contacts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What kind of support do you provide for compliance?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive compliance support including
                  country-specific requirement checklists, document templates,
                  certificate tracking, and direct access to trade compliance
                  experts. Our team can also help with customs clearance
                  guidance and regulatory updates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is there training available for new users?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer personalized onboarding sessions, video
                  tutorials, webinars, and one-on-one training with our export
                  specialists. Professional plan users get priority access to
                  training sessions and dedicated account managers.
                </p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Don't wait - start expanding your export business today with
                notoll's comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold"
                >
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
