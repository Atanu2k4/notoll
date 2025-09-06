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
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText,
  Upload,
  Download,
  RefreshCw,
  Award,
  Calendar,
} from "lucide-react";

export default function CompliancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Compliance
              </h1>
              <p className="text-muted-foreground">
                Track your export compliance status and documentation
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Sync Status
              </Button>
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </div>
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Overall Compliance
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+3%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Documents Complete
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24/28</div>
              <p className="text-xs text-muted-foreground">
                4 pending submission
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Expiring Soon
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-amber-500">2 critical</span> this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Certifications
              </CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Active certifications
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Compliance Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compliance Status</CardTitle>
                  <CardDescription>Current status by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Export License
                        </span>
                        <span className="text-green-600 font-medium">
                          Complete
                        </span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                          Quality Certificates
                        </span>
                        <span className="text-amber-600 font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 text-red-500 mr-2" />
                          Product Documentation
                        </span>
                        <span className="text-red-600 font-medium">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Financial Compliance
                        </span>
                        <span className="text-green-600 font-medium">
                          Complete
                        </span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Actions</CardTitle>
                  <CardDescription>
                    Latest compliance activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">
                          ISO 9001 Certificate Renewed
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Valid until Dec 2025
                        </p>
                        <p className="text-xs text-green-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <Upload className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">
                          Product Specification Updated
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Electronics category
                        </p>
                        <p className="text-xs text-blue-600">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">
                          CE Marking Expires Soon
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Renewal required by Sep 30
                        </p>
                        <p className="text-xs text-amber-600">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Action Items</CardTitle>
                <CardDescription>Pending compliance tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <div>
                        <h4 className="font-medium text-red-900 dark:text-red-100">
                          CE Marking Renewal Required
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Electronics products - Due: Sep 30, 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="destructive">High Priority</Badge>
                      <Button size="sm">Start Renewal</Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <div>
                        <h4 className="font-medium text-amber-900 dark:text-amber-100">
                          Product Safety Documentation
                        </h4>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          Missing for 3 product lines
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-amber-100 text-amber-800">
                        Medium
                      </Badge>
                      <Button size="sm" variant="outline">
                        Upload Docs
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="font-medium">
                          Export Declaration Update
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Annual review and update required
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Low Priority</Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Export License</CardTitle>
                  <CardDescription>License No: EXP-2024-001234</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Expires</span>
                      <span className="text-sm font-medium">Dec 31, 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Products</span>
                      <span className="text-sm">Electronics, Textiles</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ISO 9001 Certificate
                  </CardTitle>
                  <CardDescription>Quality Management System</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        Valid
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Expires</span>
                      <span className="text-sm font-medium">Dec 15, 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Issuer</span>
                      <span className="text-sm">Bureau Veritas</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">CE Marking</CardTitle>
                  <CardDescription>European Conformity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status</span>
                      <Badge className="bg-amber-100 text-amber-800">
                        Expiring Soon
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Expires</span>
                      <span className="text-sm font-medium text-amber-600">
                        Sep 30, 2025
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Products</span>
                      <span className="text-sm">Electronics</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Renew
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Certifications</CardTitle>
                <CardDescription>
                  Your current certifications and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">ISO 9001:2015</h4>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Quality Management System
                      </p>
                      <div className="text-sm space-y-1">
                        <p>
                          <strong>Valid Until:</strong> Dec 15, 2025
                        </p>
                        <p>
                          <strong>Scope:</strong> Manufacturing & Export
                        </p>
                        <p>
                          <strong>Certified Body:</strong> Bureau Veritas
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">ISO 14001:2015</h4>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Environmental Management
                      </p>
                      <div className="text-sm space-y-1">
                        <p>
                          <strong>Valid Until:</strong> Mar 20, 2026
                        </p>
                        <p>
                          <strong>Scope:</strong> Production Facilities
                        </p>
                        <p>
                          <strong>Certified Body:</strong> SGS
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">HACCP</h4>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Food Safety Management
                      </p>
                      <div className="text-sm space-y-1">
                        <p>
                          <strong>Valid Until:</strong> Jun 10, 2025
                        </p>
                        <p>
                          <strong>Scope:</strong> Seafood Processing
                        </p>
                        <p>
                          <strong>Certified Body:</strong> NSF International
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border border-amber-200 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">GOTS Certification</h4>
                        <Badge className="bg-amber-100 text-amber-800">
                          Renewal Due
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Global Organic Textile Standard
                      </p>
                      <div className="text-sm space-y-1">
                        <p>
                          <strong>Expires:</strong> Sep 25, 2025
                        </p>
                        <p>
                          <strong>Scope:</strong> Organic Textiles
                        </p>
                        <p>
                          <strong>Certified Body:</strong> ECOCERT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Compliance Audit Trail
                </CardTitle>
                <CardDescription>
                  Complete history of compliance activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium">
                        ISO 9001 Certificate Renewed
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Certificate renewed successfully for another 3 years
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Sep 6, 2025 • 2:30 PM • System Admin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
                    <Upload className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium">
                        Product Documentation Updated
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Updated specifications for electronics product line
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Sep 5, 2025 • 11:15 AM • John Smith
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium">
                        Compliance Warning Generated
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        CE Marking expiration notice sent
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Sep 3, 2025 • 9:00 AM • Automated System
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-950/20">
                    <FileText className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium">
                        Monthly Compliance Report Generated
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        August 2025 compliance summary completed
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Sep 1, 2025 • 12:00 AM • Automated System
                      </p>
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
