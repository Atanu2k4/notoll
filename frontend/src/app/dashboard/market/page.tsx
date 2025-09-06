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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Search,
  Globe,
  BarChart3,
  LineChart,
  AlertTriangle,
  Info,
  Filter,
  Download,
  RefreshCw,
} from "lucide-react";

export default function MarketIntelligencePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Market Intelligence
              </h1>
              <p className="text-muted-foreground">
                Real-time market insights and trade intelligence
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Market Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by country, product, or HS code..."
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

        {/* Market Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Markets
              </CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">
                Countries monitoring
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tariff Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500">8 critical</span> this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Market Opportunities
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">5 new</span> identified
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Price Trends
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+15.2%</div>
              <p className="text-xs text-muted-foreground">
                Average price increase
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tariffs" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tariffs">Tariff Watch</TabsTrigger>
            <TabsTrigger value="trends">Market Trends</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="tariffs" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Recent Tariff Changes
                  </CardTitle>
                  <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-4 w-4 text-red-500" />
                        <div>
                          <p className="text-sm font-medium">
                            USA - Textiles (HS 6204)
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Increased to 25.8%
                          </p>
                        </div>
                      </div>
                      <Badge variant="destructive">+3.2%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <TrendingDown className="h-4 w-4 text-green-500" />
                        <div>
                          <p className="text-sm font-medium">
                            EU - Electronics (HS 8517)
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Reduced to 12.5%
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        -1.8%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Changes</CardTitle>
                  <CardDescription>Next 30 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Info className="h-4 w-4 text-amber-500" />
                        <div>
                          <p className="text-sm font-medium">
                            UK - Seafood (HS 0306)
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Effective Sep 15, 2025
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Market Trends Analysis
                </CardTitle>
                <CardDescription>
                  Global trade patterns and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Market trends chart will be displayed here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    New Market Opportunity
                  </CardTitle>
                  <CardDescription>Vietnam - Electronics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      Reduced tariffs on electronic components
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Potential value: ₹25,00,000
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      High Priority
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Growing Demand</CardTitle>
                  <CardDescription>Brazil - Textiles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">15% increase in import demand</p>
                    <p className="text-xs text-muted-foreground">
                      Potential value: ₹18,00,000
                    </p>
                    <Badge className="bg-blue-100 text-blue-800">
                      Medium Priority
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trade Agreement</CardTitle>
                  <CardDescription>Australia - FTA Benefits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">New preferential trade terms</p>
                    <p className="text-xs text-muted-foreground">
                      Potential value: ₹12,00,000
                    </p>
                    <Badge className="bg-purple-100 text-purple-800">
                      Emerging
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Market Analysis Report
                </CardTitle>
                <CardDescription>
                  Comprehensive market intelligence summary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">Key Insights</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • Electronics sector showing strong growth in Southeast
                        Asia
                      </li>
                      <li>• Textile tariffs increasing in major markets</li>
                      <li>
                        • New opportunities emerging in renewable energy
                        products
                      </li>
                      <li>
                        • Supply chain disruptions affecting commodity pricing
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">Recommendations</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Diversify market presence to reduce risk</li>
                      <li>• Focus on high-growth sectors like electronics</li>
                      <li>
                        • Monitor tariff changes for competitive advantage
                      </li>
                      <li>• Leverage trade agreements for cost benefits</li>
                    </ul>
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
