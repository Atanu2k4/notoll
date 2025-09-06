"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Plus,
  Search,
  Filter,
  Star,
  Clock,
  CheckCircle,
  Send,
  Edit,
  Download,
  Share,
} from "lucide-react";

export default function PitchesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Pitches</h1>
              <p className="text-muted-foreground">
                Create and manage your business pitches and proposals
              </p>
            </div>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Pitch
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Find Pitches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by title, buyer, or product..."
                  className="w-full"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Pitches
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+5</span> this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+5%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Response
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Awaiting buyer feedback
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accepted</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">3</span> this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active Pitches</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="create">Create New</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Electronics Export Proposal
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">
                      In Review
                    </Badge>
                  </div>
                  <CardDescription>
                    TechCorp Industries • Germany
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Comprehensive proposal for IoT sensors and smart home
                      devices
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Electronics
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        IoT
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Smart Home
                      </Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Value:</strong> ₹15,00,000
                      </p>
                      <p>
                        <strong>Duration:</strong> 6 months
                      </p>
                      <p>
                        <strong>Sent:</strong> 3 days ago
                      </p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Textile Partnership Proposal
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      Accepted
                    </Badge>
                  </div>
                  <CardDescription>Nordic Fashion • Norway</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Sustainable textile supply partnership for organic cotton
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Textiles
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Organic
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Partnership
                      </Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Value:</strong> ₹25,00,000
                      </p>
                      <p>
                        <strong>Duration:</strong> 12 months
                      </p>
                      <p>
                        <strong>Accepted:</strong> 1 week ago
                      </p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <FileText className="h-4 w-4 mr-2" />
                        View Contract
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Seafood Export Deal
                    </CardTitle>
                    <Badge className="bg-amber-100 text-amber-800">
                      Pending
                    </Badge>
                  </div>
                  <CardDescription>Ocean Foods Ltd • USA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Premium frozen seafood supply agreement proposal
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Seafood
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Frozen
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Premium
                      </Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Value:</strong> ₹35,00,000
                      </p>
                      <p>
                        <strong>Duration:</strong> 8 months
                      </p>
                      <p>
                        <strong>Sent:</strong> 2 weeks ago
                      </p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Send className="h-4 w-4 mr-2" />
                        Follow Up
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Electronics Export Template
                  </CardTitle>
                  <CardDescription>
                    Standard template for electronics products
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Comprehensive template covering specifications,
                      compliance, and logistics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Electronics
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Standard
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <p>
                        <strong>Used:</strong> 15 times
                      </p>
                      <p>
                        <strong>Success Rate:</strong> 73%
                      </p>
                    </div>
                    <Button size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Textile Partnership Template
                  </CardTitle>
                  <CardDescription>
                    Long-term partnership proposal template
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Detailed partnership framework for textile suppliers
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Textiles
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Partnership
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <p>
                        <strong>Used:</strong> 8 times
                      </p>
                      <p>
                        <strong>Success Rate:</strong> 88%
                      </p>
                    </div>
                    <Button size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Quick Quote Template
                  </CardTitle>
                  <CardDescription>
                    Fast quotation for urgent inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Simple template for quick price quotes and basic terms
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Quick
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Quote
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <p>
                        <strong>Used:</strong> 32 times
                      </p>
                      <p>
                        <strong>Success Rate:</strong> 65%
                      </p>
                    </div>
                    <Button size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pitch Performance</CardTitle>
                  <CardDescription>Success rates and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Electronics</span>
                        <span className="font-medium">78% success</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Textiles</span>
                        <span className="font-medium">65% success</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Seafood</span>
                        <span className="font-medium">82% success</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Response Times</CardTitle>
                  <CardDescription>
                    Average buyer response analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold">3.2 days</div>
                      <div className="text-sm text-muted-foreground">
                        Average response time
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium">Fastest</div>
                        <div className="text-muted-foreground">4 hours</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">Slowest</div>
                        <div className="text-muted-foreground">14 days</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Create New Pitch</CardTitle>
                <CardDescription>
                  Build a custom pitch for your buyer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Pitch Title</label>
                    <Input placeholder="Enter pitch title..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Buyer Company</label>
                    <Input placeholder="Select or enter buyer..." />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Product Category
                    </label>
                    <Input placeholder="e.g., Electronics, Textiles..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Estimated Value
                    </label>
                    <Input placeholder="e.g., ₹10,00,000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Pitch Description
                  </label>
                  <Textarea
                    placeholder="Describe your proposal, product details, terms, and value proposition..."
                    rows={6}
                  />
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Send Pitch
                  </Button>
                  <Button variant="outline">Save as Draft</Button>
                  <Button variant="outline">Use AI Assistant</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
