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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Award,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Download,
  ExternalLink,
  Calculator,
  TrendingUp,
} from "lucide-react";

export default function SchemesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Relief Schemes
              </h1>
              <p className="text-muted-foreground">
                Explore and apply for government relief schemes and incentives
              </p>
            </div>
            <Button size="sm">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Benefits
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Available Schemes
              </CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">5 new</span> this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Eligible For
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Based on your profile
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applied</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-500">2 pending</span> approval
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Benefits
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹12.5L</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+₹3.2L</span> this year
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="available" className="space-y-4">
          <TabsList>
            <TabsTrigger value="available">Available Schemes</TabsTrigger>
            <TabsTrigger value="eligible">Eligible For You</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="calculator">Benefits Calculator</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Export Promotion Scheme 2024
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </div>
                  <CardDescription>
                    Ministry of Commerce & Industry
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Financial assistance for export promotion activities and
                      market development
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Benefit Amount</span>
                        <span className="font-medium">Up to ₹5,00,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Subsidy Rate</span>
                        <span className="font-medium">25% of expenses</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Application Deadline</span>
                        <span className="font-medium">Dec 31, 2025</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        All Sectors
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SMEs
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        Apply Now
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">MEIS Benefits</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">Ongoing</Badge>
                  </div>
                  <CardDescription>
                    Merchandise Exports from India Scheme
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Duty credit scrip for merchandise exports from India
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Benefit Rate</span>
                        <span className="font-medium">2% - 5% of FOB</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Validity</span>
                        <span className="font-medium">18 months</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Status</span>
                        <span className="font-medium text-green-600">
                          Eligible
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Electronics
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Textiles
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        Check Eligibility
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Technology Upgradation Fund
                    </CardTitle>
                    <Badge className="bg-purple-100 text-purple-800">
                      Limited Time
                    </Badge>
                  </div>
                  <CardDescription>Ministry of Textiles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Credit linked subsidy for technology upgradation in
                      textile industry
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subsidy Rate</span>
                        <span className="font-medium">10% - 15%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Max Amount</span>
                        <span className="font-medium">₹30,00,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Deadline</span>
                        <span className="font-medium text-red-600">
                          Oct 15, 2025
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Textiles
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Manufacturing
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        Apply Now
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
                      Interest Equalization Scheme
                    </CardTitle>
                    <Badge className="bg-amber-100 text-amber-800">
                      Expiring Soon
                    </Badge>
                  </div>
                  <CardDescription>Department of Commerce</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Interest subvention for pre and post shipment export
                      credit
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Interest Benefit</span>
                        <span className="font-medium">3% per annum</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Credit Limit</span>
                        <span className="font-medium">₹50 Crore</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Validity</span>
                        <span className="font-medium text-amber-600">
                          Sep 30, 2025
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        All Products
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SMEs
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        Apply Urgently
                      </Button>
                      <Button size="sm" variant="outline">
                        <Clock className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">RoDTEP Scheme</CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </div>
                  <CardDescription>
                    Remission of Duties and Taxes on Exported Products
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Refund of taxes and duties not rebated under any other
                      scheme
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Benefit Rate</span>
                        <span className="font-medium">0.5% - 4.3% of FOB</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Claim Mode</span>
                        <span className="font-medium">Duty Credit Scrip</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Status</span>
                        <span className="font-medium text-green-600">
                          Auto-eligible
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        All Exports
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Automatic
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        Check Rates
                      </Button>
                      <Button size="sm" variant="outline">
                        <TrendingUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Marine Products Export Scheme
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">
                      Sector Specific
                    </Badge>
                  </div>
                  <CardDescription>
                    Ministry of Commerce & Industry
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Special incentives for marine products export development
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subsidy Rate</span>
                        <span className="font-medium">5% of FOB value</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Max Benefit</span>
                        <span className="font-medium">₹10,00,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Sector</span>
                        <span className="font-medium">Marine Products</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Seafood
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Marine
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        Apply Now
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="eligible" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Schemes You're Eligible For
                </CardTitle>
                <CardDescription>
                  Based on your business profile and export activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <h4 className="font-medium">
                            Export Promotion Scheme 2024
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            100% match for your profile
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        High Priority
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-muted-foreground">
                          Potential Benefit:
                        </span>
                        <p className="font-medium">₹4,50,000</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Application Time:
                        </span>
                        <p className="font-medium">2-3 weeks</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Success Rate:
                        </span>
                        <p className="font-medium">85%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline:</span>
                        <p className="font-medium">Dec 31, 2025</p>
                      </div>
                    </div>
                    <Button size="sm">Start Application</Button>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-medium">MEIS Benefits</h4>
                          <p className="text-sm text-muted-foreground">
                            Automatic eligibility for your exports
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        Auto-eligible
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-muted-foreground">
                          Current Rate:
                        </span>
                        <p className="font-medium">3% of FOB</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Annual Benefit:
                        </span>
                        <p className="font-medium">₹2,40,000</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Processing:
                        </span>
                        <p className="font-medium">Automatic</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <p className="font-medium text-green-600">Active</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Check Details
                    </Button>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-medium">
                            Technology Upgradation Fund
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Limited time offer - Act fast!
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        Urgent
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-muted-foreground">
                          Max Benefit:
                        </span>
                        <p className="font-medium">₹30,00,000</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Subsidy Rate:
                        </span>
                        <p className="font-medium">15%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Time Left:
                        </span>
                        <p className="font-medium text-red-600">39 days</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Requirements:
                        </span>
                        <p className="font-medium">90% met</p>
                      </div>
                    </div>
                    <Button size="sm">Apply Immediately</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applied" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Applications</CardTitle>
                <CardDescription>
                  Track the status of your scheme applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Export Promotion Scheme 2023
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Application #EPS-2023-001234
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Applied: Jan 15, 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800 mb-2">
                        Approved
                      </Badge>
                      <p className="text-sm font-medium">₹3,50,000</p>
                      <p className="text-xs text-muted-foreground">
                        Received: Mar 20, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Interest Equalization Scheme
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Application #IES-2024-005678
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Applied: Aug 10, 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-100 text-blue-800 mb-2">
                        Under Review
                      </Badge>
                      <p className="text-sm font-medium">₹1,25,000</p>
                      <p className="text-xs text-muted-foreground">
                        ETA: Sep 15, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                        <FileText className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Marine Products Export Scheme
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Application #MPES-2024-009876
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Applied: Aug 25, 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-amber-100 text-amber-800 mb-2">
                        Documents Required
                      </Badge>
                      <p className="text-sm font-medium">₹2,00,000</p>
                      <p className="text-xs text-muted-foreground">
                        Action needed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Benefits Calculator</CardTitle>
                <CardDescription>
                  Calculate potential benefits from various schemes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Annual Export Value (FOB)
                      </label>
                      <input
                        type="text"
                        placeholder="₹ 80,00,000"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Product Category
                      </label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Electronics</option>
                        <option>Textiles</option>
                        <option>Marine Products</option>
                        <option>Handicrafts</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Company Type
                      </label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Small & Medium Enterprise</option>
                        <option>Large Enterprise</option>
                        <option>Startup</option>
                      </select>
                    </div>
                    <Button className="w-full">Calculate Benefits</Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Estimated Annual Benefits</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            MEIS Benefits
                          </span>
                          <span className="font-bold text-green-600">
                            ₹2,40,000
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          3% of FOB value
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            RoDTEP Scheme
                          </span>
                          <span className="font-bold text-blue-600">
                            ₹1,60,000
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          2% of FOB value
                        </p>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Export Promotion
                          </span>
                          <span className="font-bold text-purple-600">
                            ₹5,00,000
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          One-time benefit
                        </p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg border-2 border-dashed">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            Total Estimated Benefits
                          </span>
                          <span className="text-lg font-bold">₹9,00,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
