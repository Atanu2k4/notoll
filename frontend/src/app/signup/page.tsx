"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  User,
  Building,
  Phone,
} from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Email Verification",
    description: "Verify your email address",
  },
  { id: 2, title: "Profile Setup", description: "Tell us about yourself" },
  {
    id: 3,
    title: "Business Information",
    description: "Your business details",
  },
  {
    id: 4,
    title: "Product & Markets",
    description: "What you export and where",
  },
];

const HS_CODES = [
  { code: "030613", description: "Frozen shrimps and prawns" },
  { code: "030617", description: "Other frozen crustaceans" },
  { code: "520100", description: "Cotton, not carded or combed" },
  { code: "630260", description: "Cotton toilet linen and kitchen linen" },
  { code: "520942", description: "Denim fabrics" },
];

const TARGET_MARKETS = [
  "European Union",
  "Japan",
  "South Korea",
  "Singapore",
  "Australia",
  "Canada",
  "United Kingdom",
  "Norway",
  "Switzerland",
  "UAE",
];

export default function SignupPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    sector: "",
    companyName: "",
    companyAddress: "",
    companyWebsite: "",
    selectedHsCodes: [] as string[],
    targetMarkets: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form and redirect to dashboard
      console.log("Form submitted:", formData);
      router.push("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleHsCode = (code: string) => {
    const updated = formData.selectedHsCodes.includes(code)
      ? formData.selectedHsCodes.filter((c) => c !== code)
      : [...formData.selectedHsCodes, code];
    updateFormData("selectedHsCodes", updated);
  };

  const toggleMarket = (market: string) => {
    const updated = formData.targetMarkets.includes(market)
      ? formData.targetMarkets.filter((m) => m !== market)
      : [...formData.targetMarkets, market];
    updateFormData("targetMarkets", updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <h1 className="text-3xl font-bold text-primary">notoll</h1>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Get started with notoll
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join the platform that helps Odisha exporters thrive globally
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.id === currentStep
                      ? "bg-primary text-white"
                      : step.id < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.id}
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`w-12 h-0.5 ${
                      step.id < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-900">
              {STEPS[currentStep - 1].title}
            </h3>
            <p className="text-xs text-gray-500">
              {STEPS[currentStep - 1].description}
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              Step {currentStep} of {STEPS.length}
            </CardTitle>
            <CardDescription>
              {STEPS[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Email Verification */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="mt-2 relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    We&apos;ll send you a verification link to get started
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Profile Setup */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="mt-2 relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="pl-10"
                        value={formData.firstName}
                        onChange={(e) =>
                          updateFormData("firstName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        updateFormData("lastName", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="mt-2 relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="role">Your Role</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => updateFormData("role", value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exporter">Exporter</SelectItem>
                      <SelectItem value="processor">Processor</SelectItem>
                      <SelectItem value="farmer_group">Farmer Group</SelectItem>
                      <SelectItem value="trader">Trader</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="sector">Primary Sector</Label>
                  <Select
                    value={formData.sector}
                    onValueChange={(value) => updateFormData("sector", value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SEAFOOD">Seafood</SelectItem>
                      <SelectItem value="TEXTILE">Textile</SelectItem>
                      <SelectItem value="BOTH">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Business Information */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <div className="mt-2 relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="companyName"
                      placeholder="Your Company Ltd."
                      className="pl-10"
                      value={formData.companyName}
                      onChange={(e) =>
                        updateFormData("companyName", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="companyAddress">Company Address</Label>
                  <Input
                    id="companyAddress"
                    placeholder="Street, City, State, PIN"
                    value={formData.companyAddress}
                    onChange={(e) =>
                      updateFormData("companyAddress", e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="companyWebsite">
                    Company Website (Optional)
                  </Label>
                  <Input
                    id="companyWebsite"
                    placeholder="https://yourcompany.com"
                    value={formData.companyWebsite}
                    onChange={(e) =>
                      updateFormData("companyWebsite", e.target.value)
                    }
                  />
                </div>
              </div>
            )}

            {/* Step 4: Product & Markets */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <Label>Select Your HS Codes (Products)</Label>
                  <p className="text-sm text-gray-500 mb-3">
                    Choose the products you export or plan to export
                  </p>
                  <div className="space-y-2">
                    {HS_CODES.map((item) => (
                      <div
                        key={item.code}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={item.code}
                          checked={formData.selectedHsCodes.includes(item.code)}
                          onCheckedChange={() => toggleHsCode(item.code)}
                        />
                        <Label htmlFor={item.code} className="text-sm">
                          {item.code} - {item.description}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Target Markets</Label>
                  <p className="text-sm text-gray-500 mb-3">
                    Select markets you&apos;re interested in exploring
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {TARGET_MARKETS.map((market) => (
                      <div key={market} className="flex items-center space-x-2">
                        <Checkbox
                          id={market}
                          checked={formData.targetMarkets.includes(market)}
                          onCheckedChange={() => toggleMarket(market)}
                        />
                        <Label htmlFor={market} className="text-sm">
                          {market}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <Button onClick={handleNext}>
                {currentStep === STEPS.length ? "Complete Setup" : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary/80"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
