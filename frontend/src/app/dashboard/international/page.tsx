"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  TrendingUp,
  Users,
  Building2,
  ArrowUpRight,
  MapPin,
  Calendar,
  DollarSign,
  Package,
  Truck,
  BarChart3,
  MessageSquare
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function InternationalDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">International Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your global export management hub
              </p>
            </div>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              International User
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Exports</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$124,580</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                +4 new this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shipments</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest export activities and updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Order #EX-2024-089 shipped</p>
                    <p className="text-xs text-muted-foreground">Electronics to Germany</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">2h ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">New inquiry received</p>
                    <p className="text-xs text-muted-foreground">Textiles from UK buyer</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">4h ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Payment received</p>
                    <p className="text-xs text-muted-foreground">$15,420 from Order #EX-2024-087</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">1d ago</span>
              </div>
              <Separator />
              <Button variant="outline" size="sm" className="w-full">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* Export Markets */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Top Export Markets
              </CardTitle>
              <CardDescription>
                Your primary destination countries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-red-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                      DE
                    </div>
                    <span className="text-sm font-medium">Germany</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$45,230</p>
                    <Progress value={75} className="w-16 h-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                      UK
                    </div>
                    <span className="text-sm font-medium">United Kingdom</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$32,140</p>
                    <Progress value={60} className="w-16 h-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-blue-700 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                      FR
                    </div>
                    <span className="text-sm font-medium">France</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$28,690</p>
                    <Progress value={50} className="w-16 h-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-red-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                      CA
                    </div>
                    <span className="text-sm font-medium">Canada</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$18,520</p>
                    <Progress value={35} className="w-16 h-2" />
                  </div>
                </div>
              </div>
              <Separator />
              <Button variant="outline" size="sm" className="w-full">
                Explore New Markets
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to manage your international exports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Package className="h-6 w-6" />
                <span className="text-sm">Create Order</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Users className="h-6 w-6" />
                <span className="text-sm">Find Buyers</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Building2 className="h-6 w-6" />
                <span className="text-sm">Compliance Check</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <MessageSquare className="h-6 w-6" />
                <span className="text-sm">Support Center</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started Guide */}
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-accent" />
              Getting Started with International Exports
            </CardTitle>
            <CardDescription>
              New to our platform? Follow these steps to set up your export business
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="text-sm font-medium">Complete Your Profile</p>
                  <p className="text-xs text-muted-foreground">Add business details and certifications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="text-sm font-medium">Upload Products</p>
                  <p className="text-xs text-muted-foreground">Create your product catalog</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="text-sm font-medium">Connect with Buyers</p>
                  <p className="text-xs text-muted-foreground">Start receiving inquiries</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Complete Setup
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
