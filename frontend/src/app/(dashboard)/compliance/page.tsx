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
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  Upload,
  FileText,
  Download,
  Building2,
  Shield,
  Globe,
  Users,
  Calendar,
} from "lucide-react";

const MARKET_REQUIREMENTS = [
  {
    market: "United States",
    flag: "🇺🇸",
    requirements: [
      {
        id: 1,
        name: "FDA Registration",
        status: "completed",
        type: "certificate",
      },
      {
        id: 2,
        name: "HACCP Certification",
        status: "completed",
        type: "certificate",
      },
      {
        id: 3,
        name: "Nutritional Labeling",
        status: "pending",
        type: "document",
      },
      {
        id: 4,
        name: "Prior Notice (FDA)",
        status: "not_started",
        type: "process",
      },
    ],
    completion: 50,
  },
  {
    market: "European Union",
    flag: "🇪🇺",
    requirements: [
      {
        id: 5,
        name: "Health Certificate",
        status: "completed",
        type: "certificate",
      },
      {
        id: 6,
        name: "TRACES Registration",
        status: "in_progress",
        type: "process",
      },
      {
        id: 7,
        name: "Organic Certification (EU)",
        status: "pending",
        type: "certificate",
      },
      { id: 8, name: "EORI Number", status: "completed", type: "registration" },
    ],
    completion: 62,
  },
  {
    market: "Japan",
    flag: "🇯🇵",
    requirements: [
      { id: 9, name: "Import License", status: "in_progress", type: "license" },
      {
        id: 10,
        name: "JAS Certification",
        status: "not_started",
        type: "certificate",
      },
      {
        id: 11,
        name: "Phytosanitary Certificate",
        status: "completed",
        type: "certificate",
      },
      {
        id: 12,
        name: "Quarantine Inspection",
        status: "pending",
        type: "process",
      },
    ],
    completion: 25,
  },
];

const VENDOR_NETWORK = [
  {
    id: 1,
    name: "SGS India",
    category: "Testing & Certification",
    services: ["HACCP", "Organic Certification", "Quality Testing"],
    rating: 4.8,
    location: "Mumbai",
    contact: "+91 22 6777 8888",
    status: "verified",
  },
  {
    id: 2,
    name: "Bureau Veritas",
    category: "Inspection Services",
    services: [
      "Pre-shipment Inspection",
      "Container Loading",
      "Quality Control",
    ],
    rating: 4.6,
    location: "Chennai",
    contact: "+91 44 4299 3000",
    status: "verified",
  },
  {
    id: 3,
    name: "TUV India",
    category: "Product Certification",
    services: ["CE Marking", "ISO Certification", "Product Testing"],
    rating: 4.7,
    location: "Delhi",
    contact: "+91 11 4089 9000",
    status: "verified",
  },
];

const UPCOMING_DEADLINES = [
  {
    id: 1,
    title: "HACCP Certification Renewal",
    market: "Global",
    dueDate: "2025-09-15",
    priority: "high",
    description: "Annual HACCP certification renewal required",
  },
  {
    id: 2,
    title: "EU Organic Certificate Update",
    market: "European Union",
    dueDate: "2025-10-01",
    priority: "medium",
    description: "Update organic certification for new product lines",
  },
  {
    id: 3,
    title: "FDA Prior Notice Submission",
    market: "United States",
    dueDate: "2025-08-30",
    priority: "high",
    description: "Submit prior notice for upcoming shipment",
  },
];

export default function ComplianceCenterPage() {
  const [selectedMarket, setSelectedMarket] = useState("United States");
  const [uploadingDocument, setUploadingDocument] = useState<number | null>(
    null
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "in_progress":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "not_started":
        return <Badge variant="secondary">Not Started</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High Priority</Badge>;
      case "medium":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            Medium Priority
          </Badge>
        );
      case "low":
        return (
          <Badge className="bg-green-100 text-green-800">Low Priority</Badge>
        );
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const handleDocumentUpload = (requirementId: number) => {
    setUploadingDocument(requirementId);
    // Simulate upload
    setTimeout(() => {
      setUploadingDocument(null);
    }, 2000);
  };

  const selectedMarketData = MARKET_REQUIREMENTS.find(
    (m) => m.market === selectedMarket
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Compliance Center
          </h1>
          <p className="text-gray-600">
            Manage export compliance requirements and documentation
          </p>
        </div>

        <Tabs defaultValue="requirements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="vendors">Vendor Network</TabsTrigger>
            <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="space-y-6">
            {/* Market Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MARKET_REQUIREMENTS.map((market) => (
                <Card
                  key={market.market}
                  className={`cursor-pointer transition-all ${
                    selectedMarket === market.market
                      ? "ring-2 ring-blue-500 border-blue-500"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedMarket(market.market)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <span className="mr-2">{market.flag}</span>
                      {market.market}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Completion</span>
                        <span>{market.completion}%</span>
                      </div>
                      <Progress value={market.completion} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {market.requirements.map((req) => (
                        <div
                          key={req.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(req.status)}
                            <span className="text-sm">{req.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Requirements */}
            {selectedMarketData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    {selectedMarketData.market} Requirements
                  </CardTitle>
                  <CardDescription>
                    Complete these requirements to export to{" "}
                    {selectedMarketData.market}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedMarketData.requirements.map((requirement) => (
                      <div
                        key={requirement.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(requirement.status)}
                          <div>
                            <h4 className="font-medium">{requirement.name}</h4>
                            <p className="text-sm text-gray-500 capitalize">
                              {requirement.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(requirement.status)}
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleDocumentUpload(requirement.id)
                              }
                              disabled={uploadingDocument === requirement.id}
                            >
                              {uploadingDocument === requirement.id ? (
                                <>
                                  <div className="mr-2 h-3 w-3 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <Upload className="mr-2 h-4 w-4" />
                                  Upload
                                </>
                              )}
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="mr-2 h-4 w-4" />
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Document Library
                </CardTitle>
                <CardDescription>
                  Manage your compliance documents and certificates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input
                      placeholder="Search documents..."
                      className="max-w-sm"
                    />
                    <Button>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Document
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        name: "HACCP Certificate",
                        type: "Certificate",
                        size: "2.4 MB",
                        date: "2025-08-15",
                      },
                      {
                        name: "FDA Registration",
                        type: "Registration",
                        size: "1.1 MB",
                        date: "2025-08-10",
                      },
                      {
                        name: "Health Certificate",
                        type: "Certificate",
                        size: "3.2 MB",
                        date: "2025-08-12",
                      },
                      {
                        name: "EORI Number",
                        type: "Registration",
                        size: "890 KB",
                        date: "2025-08-08",
                      },
                      {
                        name: "Organic Certificate",
                        type: "Certificate",
                        size: "1.8 MB",
                        date: "2025-08-05",
                      },
                      {
                        name: "Phytosanitary Certificate",
                        type: "Certificate",
                        size: "2.1 MB",
                        date: "2025-08-03",
                      },
                    ].map((doc, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-8 w-8 text-blue-600" />
                              <div>
                                <h4 className="font-medium text-sm">
                                  {doc.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {doc.type}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {doc.size} • {doc.date}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vendors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5" />
                  Verified Vendor Network
                </CardTitle>
                <CardDescription>
                  Connect with trusted compliance service providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {VENDOR_NETWORK.map((vendor) => (
                    <div
                      key={vendor.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-6 w-6 text-blue-600" />
                          <div>
                            <h4 className="font-semibold">{vendor.name}</h4>
                            <p className="text-sm text-gray-600">
                              {vendor.category}
                            </p>
                            <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                              <span>⭐ {vendor.rating}</span>
                              <span>📍 {vendor.location}</span>
                              <span>📞 {vendor.contact}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex flex-wrap gap-1">
                            {vendor.services.map((service, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">
                          Verified
                        </Badge>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                        <Button size="sm">Get Quote</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deadlines" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
                <CardDescription>
                  Stay on top of important compliance deadlines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {UPCOMING_DEADLINES.map((deadline) => (
                    <div
                      key={deadline.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">{deadline.title}</h4>
                          <p className="text-sm text-gray-600">
                            {deadline.description}
                          </p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                            <span>Market: {deadline.market}</span>
                            <span>Due: {deadline.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {getPriorityBadge(deadline.priority)}
                        <Button variant="outline" size="sm">
                          Set Reminder
                        </Button>
                        <Button size="sm">Take Action</Button>
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
