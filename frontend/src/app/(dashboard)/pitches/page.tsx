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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Send,
  Download,
  Copy,
  Wand2,
  Globe,
  FileText,
  Mail,
  Eye,
  Edit3,
  Save,
} from "lucide-react";

const PRODUCTS = [
  {
    id: "1",
    name: "Frozen Black Tiger Shrimp",
    hsCode: "030613",
    category: "Seafood",
  },
  {
    id: "2",
    name: "Cotton Handloom Fabrics",
    hsCode: "520942",
    category: "Textile",
  },
  {
    id: "3",
    name: "Organic Cotton Yarn",
    hsCode: "520100",
    category: "Textile",
  },
];

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

const INCOTERMS = [
  "FOB",
  "CIF",
  "CFR",
  "EXW",
  "FCA",
  "CPT",
  "CIP",
  "DAP",
  "DDP",
];

const RECENT_PITCHES = [
  {
    id: 1,
    title: "Premium Black Tiger Shrimp - Ocean Foods International",
    product: "Frozen Black Tiger Shrimp",
    buyer: "Ocean Foods International",
    language: "English",
    status: "sent",
    createdAt: "2025-08-25",
    quantity: "500 MT",
    price: "$12.50/kg",
  },
  {
    id: 2,
    title: "Organic Cotton Fabrics - Nordic Textiles",
    product: "Cotton Handloom Fabrics",
    buyer: "Nordic Textiles AS",
    language: "English",
    status: "draft",
    createdAt: "2025-08-24",
    quantity: "1000 pieces",
    price: "$15.00/piece",
  },
];

export default function PitchAssistantPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [incoterms, setIncoterms] = useState("FOB");
  const [leadTime, setLeadTime] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [generatedPitch, setGeneratedPitch] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePitch = async () => {
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      const product = PRODUCTS.find((p) => p.id === selectedProduct);
      const language = LANGUAGES.find((l) => l.code === selectedLanguage);

      const samplePitch = `Subject: Premium ${product?.name} Export Opportunity

Dear Procurement Team at ${buyerName || "[Buyer Name]"},

I hope this email finds you well. I am writing to introduce our premium ${
        product?.name
      } exports from our certified facilities in Odisha, India.

Product Specifications:
• Product: ${product?.name}
• HS Code: ${product?.hsCode}
• Quantity Available: ${quantity || "[Quantity]"} per shipment
• Price: ${currency} ${price || "[Price]"} per unit
• Terms: ${incoterms}
• Lead Time: ${leadTime || "[Lead Time]"}

Our products meet international quality standards including:
- HACCP certification
- EU health certificates
- US FDA compliance
- Traceability documentation

We have been exporting to global markets for over 10 years and have built a reputation for consistent quality and reliable delivery. Our state-of-the-art processing facilities ensure that products maintain their freshness and quality throughout the supply chain.

${customMessage ? `\nAdditional Information:\n${customMessage}` : ""}

We would be delighted to discuss this opportunity further and provide additional details including product samples, certificates, and competitive pricing for larger volumes.

Thank you for your time and consideration. I look forward to the possibility of establishing a mutually beneficial business relationship.

Best regards,

[Your Name]
[Your Company]
[Contact Information]

---
Generated using notoll Pitch Assistant in ${language?.name}`;

      setGeneratedPitch(samplePitch);
      setIsGenerating(false);
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      case "sent":
        return <Badge className="bg-blue-100 text-blue-800">Sent</Badge>;
      case "viewed":
        return <Badge className="bg-yellow-100 text-yellow-800">Viewed</Badge>;
      case "replied":
        return <Badge className="bg-green-100 text-green-800">Replied</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pitch Assistant
          </h1>
          <p className="text-gray-600">
            Create compelling export pitches in multiple languages
          </p>
        </div>

        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">Create New Pitch</TabsTrigger>
            <TabsTrigger value="history">Pitch History</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pitch Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wand2 className="mr-2 h-5 w-5" />
                    Pitch Details
                  </CardTitle>
                  <CardDescription>
                    Provide product and shipment details to generate your pitch
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="product">Select Product</Label>
                    <Select
                      value={selectedProduct}
                      onValueChange={setSelectedProduct}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your product" />
                      </SelectTrigger>
                      <SelectContent>
                        {PRODUCTS.map((product) => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.name} ({product.hsCode})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="buyer">Buyer Name (Optional)</Label>
                    <Input
                      id="buyer"
                      placeholder="Enter buyer company name"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        placeholder="e.g., 500 MT"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Price per Unit</Label>
                      <div className="flex space-x-2">
                        <Select value={currency} onValueChange={setCurrency}>
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="INR">INR</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="12.50"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="incoterms">Incoterms</Label>
                      <Select value={incoterms} onValueChange={setIncoterms}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {INCOTERMS.map((term) => (
                            <SelectItem key={term} value={term}>
                              {term}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="leadTime">Lead Time</Label>
                      <Input
                        id="leadTime"
                        placeholder="e.g., 15-20 days"
                        value={leadTime}
                        onChange={(e) => setLeadTime(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select
                      value={selectedLanguage}
                      onValueChange={setSelectedLanguage}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {LANGUAGES.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.flag} {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="customMessage">
                      Additional Message (Optional)
                    </Label>
                    <Textarea
                      id="customMessage"
                      placeholder="Add any specific information you want to include..."
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button
                    onClick={generatePitch}
                    disabled={!selectedProduct || isGenerating}
                    className="w-full"
                  >
                    {isGenerating ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate Pitch
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Generated Pitch */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Generated Pitch
                  </CardTitle>
                  <CardDescription>
                    AI-generated export pitch ready for customization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {generatedPitch ? (
                    <div className="space-y-4">
                      <Textarea
                        value={generatedPitch}
                        onChange={(e) => setGeneratedPitch(e.target.value)}
                        rows={20}
                        className="font-mono text-sm"
                      />

                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Export PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>
                        Fill in the product details and click &quot;Generate
                        Pitch&quot; to create your export proposal
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Pitches</CardTitle>
                <CardDescription>
                  View and manage your previously created pitches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {RECENT_PITCHES.map((pitch) => (
                    <div
                      key={pitch.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{pitch.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>Product: {pitch.product}</span>
                          <span>Quantity: {pitch.quantity}</span>
                          <span>Price: {pitch.price}</span>
                          <span>Created: {pitch.createdAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(pitch.status)}
                        <Button variant="outline" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
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
