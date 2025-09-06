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
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Shield,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertTriangle,
  Bell,
  Activity,
  Target,
  Award,
  Briefcase,
  Eye,
  ExternalLink,
  ChevronRight,
  LineChart,
  PieChart,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your export performance and opportunities
          </p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,23,100</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +20.1% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders Secured</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Buyers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +3 new this week
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +2.1% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tariff Watch */}
          <Card className="transition-all duration-300 hover:shadow-md cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">Tariff Watch</CardTitle>
                <CardDescription>Market updates & trade changes</CardDescription>
              </div>
              <LineChart className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">EU Textile Tariff</p>
                      <p className="text-xs text-muted-foreground">Increased by 3.2%</p>
                    </div>
                  </div>
                  <Badge variant="destructive" className="text-xs">Critical</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">US Electronics</p>
                      <p className="text-xs text-muted-foreground">Reduced by 1.8%</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">Opportunity</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                View All Updates <ChevronRight className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>

          {/* Buyer Matches */}
          <Card className="transition-all duration-300 hover:shadow-md cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">Buyer Matches</CardTitle>
                <CardDescription>New potential customers</CardDescription>
              </div>
              <Users className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">TechCorp Ltd.</p>
                      <p className="text-xs text-muted-foreground">Electronics • Germany</p>
                    </div>
                  </div>
                  <Badge className="text-xs">92% Match</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Fashion Hub Inc.</p>
                      <p className="text-xs text-muted-foreground">Textiles • UK</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">87% Match</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Connect with Buyers <ChevronRight className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>

          {/* Compliance Progress */}
          <Card className="transition-all duration-300 hover:shadow-md cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">Compliance Progress</CardTitle>
                <CardDescription>Documentation & certifications</CardDescription>
              </div>
              <Shield className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Export License</span>
                    <span className="text-green-600 font-medium">Complete</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Quality Certificates</span>
                    <span className="text-amber-600 font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Product Documentation</span>
                    <span className="text-red-600 font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Complete Tasks <ChevronRight className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>

          {/* Relief Schemes */}
          <Card className="transition-all duration-300 hover:shadow-md cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">Relief Schemes</CardTitle>
                <CardDescription>Available government benefits</CardDescription>
              </div>
              <Award className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">Export Subsidy 2024</p>
                      <p className="text-xs text-green-600 dark:text-green-400">Up to ₹5,00,000</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Active</Badge>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">MEIS Benefits</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">2% duty credit</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Eligible</Badge>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Apply for Schemes <ChevronRight className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>

          {/* Impact Summary */}
          <Card className="transition-all duration-300 hover:shadow-md cursor-pointer group md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">Impact Summary</CardTitle>
                <CardDescription>Your export performance metrics</CardDescription>
              </div>
              <BarChart3 className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">₹2.4Cr</div>
                  <div className="text-xs text-muted-foreground">Total Revenue</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">347</div>
                  <div className="text-xs text-muted-foreground">Orders Completed</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">28</div>
                  <div className="text-xs text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">94.2%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Order #EX-2024-1247 shipped successfully</p>
                  <p className="text-xs text-muted-foreground">Electronics to Germany • ₹2,45,000</p>
                </div>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <Separator />
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New buyer inquiry received</p>
                  <p className="text-xs text-muted-foreground">Textiles from UK buyer • High priority</p>
                </div>
                <span className="text-xs text-muted-foreground">5 hours ago</span>
              </div>
              <Separator />
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Compliance deadline approaching</p>
                  <p className="text-xs text-muted-foreground">Quality certificates due in 3 days</p>
                </div>
                <span className="text-xs text-muted-foreground">1 day ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
