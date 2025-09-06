"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building,
  DollarSign,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calculator,
  ExternalLink,
  Download,
  Lightbulb,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

const GOVERNMENT_SCHEMES = [
  {
    id: 1,
    name: "MEIS (Merchandise Exports from India Scheme)",
    category: "Export Incentive",
    authority: "DGFT",
    benefit: "2-5% of FOB value",
    eligibility: "All exporters",
    status: "active",
    deadline: "2025-12-31",
    description:
      "Incentive scheme for merchandise exports with duty credit scrips",
  },
  {
    id: 2,
    name: "Interest Equalization Scheme",
    category: "Credit Support",
    authority: "RBI",
    benefit: "3-5% interest subsidy",
    eligibility: "MSME exporters",
    status: "active",
    deadline: "2025-09-30",
    description: "Pre and post shipment credit interest equalization",
  },
  {
    id: 3,
    name: "Trade Infrastructure for Export Scheme (TIES)",
    category: "Infrastructure",
    authority: "Ministry of Commerce",
    benefit: "Up to ₹40 crores",
    eligibility: "Export infrastructure projects",
    status: "active",
    deadline: "2025-11-15",
    description: "Support for export-related infrastructure development",
  },
  {
    id: 4,
    name: "Market Access Initiative (MAI)",
    category: "Market Development",
    authority: "FIDR",
    benefit: "Up to ₹50 lakhs",
    eligibility: "Export promotion activities",
    status: "active",
    deadline: "2025-10-31",
    description: "Support for market development and export promotion",
  },
  {
    id: 5,
    name: "Transport and Marketing Assistance (TMA)",
    category: "Transport Support",
    authority: "APEDA",
    benefit: "Transport cost assistance",
    eligibility: "Agricultural exporters",
    status: "active",
    deadline: "2025-08-30",
    description:
      "Assistance for transport and marketing of agricultural products",
  },
];

const ELIGIBILITY_QUESTIONS = [
  {
    id: 1,
    question: "What is your business type?",
    options: ["MSME", "Large Enterprise", "Individual Exporter", "Cooperative"],
    key: "businessType",
  },
  {
    id: 2,
    question: "What do you export?",
    options: [
      "Agricultural Products",
      "Textiles",
      "Handicrafts",
      "Marine Products",
      "Engineering Goods",
      "Other",
    ],
    key: "exportCategory",
  },
  {
    id: 3,
    question: "What is your annual export turnover?",
    options: ["< ₹5 crores", "₹5-25 crores", "₹25-100 crores", "> ₹100 crores"],
    key: "turnover",
  },
  {
    id: 4,
    question: "Do you have an IEC (Import Export Code)?",
    options: ["Yes", "No", "Applied but not received"],
    key: "iecStatus",
  },
  {
    id: 5,
    question: "Which markets do you export to?",
    options: [
      "USA/Canada",
      "Europe",
      "Middle East",
      "Asia Pacific",
      "Africa",
      "Latin America",
    ],
    key: "targetMarkets",
  },
];

const MY_APPLICATIONS = [
  {
    id: 1,
    scheme: "MEIS",
    applicationId: "MEIS/2025/OD/001234",
    status: "approved",
    appliedDate: "2025-07-15",
    approvedDate: "2025-08-20",
    benefitAmount: "₹2,50,000",
    validUntil: "2026-08-20",
  },
  {
    id: 2,
    scheme: "Interest Equalization",
    applicationId: "IES/2025/OD/005678",
    status: "in_review",
    appliedDate: "2025-08-10",
    approvedDate: null,
    benefitAmount: "₹1,80,000",
    validUntil: null,
  },
  {
    id: 3,
    scheme: "TMA",
    applicationId: "TMA/2025/OD/009012",
    status: "pending_documents",
    appliedDate: "2025-08-22",
    approvedDate: null,
    benefitAmount: "₹75,000",
    validUntil: null,
  },
];

export default function ReliefNavigatorPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [eligibleSchemes, setEligibleSchemes] = useState<
    typeof GOVERNMENT_SCHEMES
  >([]);
  const [calculatorValues, setCalculatorValues] = useState({
    exportValue: "",
    category: "",
    destination: "",
  });
  const [calculatedBenefit, setCalculatedBenefit] = useState<number | null>(
    null
  );

  const handleAnswerSelect = (answer: string) => {
    const question = ELIGIBILITY_QUESTIONS[currentQuestion];
    setAnswers((prev) => ({ ...prev, [question.key]: answer }));

    if (currentQuestion < ELIGIBILITY_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate eligible schemes based on answers
      const eligible = GOVERNMENT_SCHEMES.filter((scheme) => {
        // Simple eligibility logic - in real app this would be more complex
        if (
          answers.businessType === "MSME" &&
          scheme.eligibility.includes("MSME")
        )
          return true;
        if (
          answers.exportCategory === "Agricultural Products" &&
          scheme.eligibility.includes("Agricultural")
        )
          return true;
        if (scheme.eligibility === "All exporters") return true;
        return false;
      });

      setEligibleSchemes(eligible);
      setShowResults(true);
    }
  };

  const resetWizard = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setEligibleSchemes([]);
  };

  const calculateBenefit = () => {
    if (!calculatorValues.exportValue || !calculatorValues.category) return;

    const value = parseFloat(calculatorValues.exportValue);
    let rate = 0.02; // Default 2%

    // Different rates based on category
    switch (calculatorValues.category) {
      case "agricultural":
        rate = 0.05;
        break;
      case "handicrafts":
        rate = 0.05;
        break;
      case "textiles":
        rate = 0.03;
        break;
      case "marine":
        rate = 0.04;
        break;
      default:
        rate = 0.02;
    }

    setCalculatedBenefit(value * rate);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "in_review":
        return <Badge className="bg-blue-100 text-blue-800">In Review</Badge>;
      case "pending_documents":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            Pending Documents
          </Badge>
        );
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "in_review":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "pending_documents":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Relief Navigator
          </h1>
          <p className="text-gray-600">
            Discover and apply for government export schemes and incentives
          </p>
        </div>

        <Tabs defaultValue="schemes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="schemes">Available Schemes</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility Wizard</TabsTrigger>
            <TabsTrigger value="calculator">Benefit Calculator</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="schemes" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Schemes List */}
              <div className="lg:col-span-2 space-y-4">
                {GOVERNMENT_SCHEMES.map((scheme) => (
                  <Card
                    key={scheme.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {scheme.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {scheme.description}
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{scheme.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Authority:</span>
                            <span className="ml-2 font-medium">
                              {scheme.authority}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Benefit:</span>
                            <span className="ml-2 font-medium text-green-600">
                              {scheme.benefit}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Eligibility:</span>
                            <span className="ml-2 font-medium">
                              {scheme.eligibility}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Deadline:</span>
                            <span className="ml-2 font-medium">
                              {scheme.deadline}
                            </span>
                          </div>
                        </div>

                        <div className="flex space-x-2 pt-2">
                          <Button size="sm">Apply Now</Button>
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            Guidelines
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Official Portal
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Active Schemes
                      </span>
                      <span className="text-lg font-semibold">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Total Benefits Available
                      </span>
                      <span className="text-lg font-semibold text-green-600">
                        ₹150+ Cr
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Avg. Processing Time
                      </span>
                      <span className="text-lg font-semibold">30 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Success Rate
                      </span>
                      <span className="text-lg font-semibold text-blue-600">
                        85%
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Pro Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm space-y-2">
                      <p className="font-medium">📋 Keep documents ready</p>
                      <p className="text-gray-600">
                        IEC, GST registration, bank certificates
                      </p>
                    </div>
                    <div className="text-sm space-y-2">
                      <p className="font-medium">⏰ Apply early</p>
                      <p className="text-gray-600">
                        Some schemes have annual limits
                      </p>
                    </div>
                    <div className="text-sm space-y-2">
                      <p className="font-medium">🔄 Follow up regularly</p>
                      <p className="text-gray-600">
                        Track application status online
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="eligibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Eligibility Assessment Wizard
                </CardTitle>
                <CardDescription>
                  Answer a few questions to find schemes you&apos;re eligible
                  for
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Question {currentQuestion + 1} of{" "}
                        {ELIGIBILITY_QUESTIONS.length}
                      </span>
                      <span className="text-sm text-gray-500">
                        {Math.round(
                          ((currentQuestion + 1) /
                            ELIGIBILITY_QUESTIONS.length) *
                            100
                        )}
                        % Complete
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            ((currentQuestion + 1) /
                              ELIGIBILITY_QUESTIONS.length) *
                            100
                          }%`,
                        }}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {ELIGIBILITY_QUESTIONS[currentQuestion].question}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {ELIGIBILITY_QUESTIONS[currentQuestion].options.map(
                          (option) => (
                            <Button
                              key={option}
                              variant="outline"
                              className="p-4 h-auto text-left justify-start"
                              onClick={() => handleAnswerSelect(option)}
                            >
                              {option}
                            </Button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold">
                        Assessment Complete!
                      </h3>
                      <p className="text-gray-600">
                        Based on your answers, here are the schemes you&apos;re
                        eligible for:
                      </p>
                    </div>

                    <div className="space-y-4">
                      {eligibleSchemes.map((scheme) => (
                        <div
                          key={scheme.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <h4 className="font-semibold">{scheme.name}</h4>
                            <p className="text-sm text-gray-600">
                              {scheme.description}
                            </p>
                            <p className="text-sm font-medium text-green-600 mt-1">
                              Potential Benefit: {scheme.benefit}
                            </p>
                          </div>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <Button variant="outline" onClick={resetWizard}>
                        Take Assessment Again
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5" />
                    Benefit Calculator
                  </CardTitle>
                  <CardDescription>
                    Estimate potential benefits from export schemes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="exportValue">Export Value (₹)</Label>
                    <Input
                      id="exportValue"
                      type="number"
                      placeholder="Enter your export value"
                      value={calculatorValues.exportValue}
                      onChange={(e) =>
                        setCalculatorValues((prev) => ({
                          ...prev,
                          exportValue: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Product Category</Label>
                    <Select
                      value={calculatorValues.category}
                      onValueChange={(value) =>
                        setCalculatorValues((prev) => ({
                          ...prev,
                          category: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agricultural">
                          Agricultural Products
                        </SelectItem>
                        <SelectItem value="handicrafts">Handicrafts</SelectItem>
                        <SelectItem value="textiles">Textiles</SelectItem>
                        <SelectItem value="marine">Marine Products</SelectItem>
                        <SelectItem value="engineering">
                          Engineering Goods
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="destination">Destination Market</Label>
                    <Select
                      value={calculatorValues.destination}
                      onValueChange={(value) =>
                        setCalculatorValues((prev) => ({
                          ...prev,
                          destination: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="eu">European Union</SelectItem>
                        <SelectItem value="asia">Asia Pacific</SelectItem>
                        <SelectItem value="middle_east">Middle East</SelectItem>
                        <SelectItem value="africa">Africa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={calculateBenefit} className="w-full">
                    Calculate Benefits
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Estimated Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {calculatedBenefit !== null ? (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">
                          ₹{calculatedBenefit.toLocaleString()}
                        </div>
                        <p className="text-gray-600">
                          Estimated total benefits
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>MEIS Benefit:</span>
                          <span className="font-medium">
                            ₹{(calculatedBenefit * 0.6).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interest Equalization:</span>
                          <span className="font-medium">
                            ₹{(calculatedBenefit * 0.3).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Other Schemes:</span>
                          <span className="font-medium">
                            ₹{(calculatedBenefit * 0.1).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Enter your export details to see estimated benefits</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  My Applications
                </CardTitle>
                <CardDescription>
                  Track your scheme applications and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {MY_APPLICATIONS.map((app) => (
                    <div
                      key={app.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(app.status)}
                        <div>
                          <h4 className="font-semibold">{app.scheme}</h4>
                          <p className="text-sm text-gray-600">
                            Application ID: {app.applicationId}
                          </p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                            <span>Applied: {app.appliedDate}</span>
                            {app.approvedDate && (
                              <span>Approved: {app.approvedDate}</span>
                            )}
                            <span>Benefit: {app.benefitAmount}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {getStatusBadge(app.status)}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {app.status === "pending_documents" && (
                          <Button size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            Upload Docs
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
