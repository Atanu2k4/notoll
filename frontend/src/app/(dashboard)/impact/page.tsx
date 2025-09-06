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
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  DollarSign,
  Globe,
  Calendar,
  Download,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  Users,
  Building,
  Truck,
  Clock,
} from "lucide-react";

const REVENUE_DATA = [
  { month: "Jan 2025", revenue: 850000, target: 1000000, exports: 12 },
  { month: "Feb 2025", revenue: 920000, target: 1000000, exports: 14 },
  { month: "Mar 2025", revenue: 1100000, target: 1000000, exports: 16 },
  { month: "Apr 2025", revenue: 980000, target: 1000000, exports: 13 },
  { month: "May 2025", revenue: 1250000, target: 1000000, exports: 18 },
  { month: "Jun 2025", revenue: 1350000, target: 1000000, exports: 20 },
  { month: "Jul 2025", revenue: 1180000, target: 1000000, exports: 17 },
  { month: "Aug 2025", revenue: 1420000, target: 1000000, exports: 22 },
  { month: "Sep 2025", revenue: 780000, target: 1000000, exports: 11 },
];

const MARKET_DISTRIBUTION = [
  {
    market: "United States",
    percentage: 35,
    revenue: 4200000,
    color: "#3B82F6",
  },
  {
    market: "European Union",
    percentage: 28,
    revenue: 3360000,
    color: "#10B981",
  },
  { market: "Japan", percentage: 15, revenue: 1800000, color: "#F59E0B" },
  { market: "Middle East", percentage: 12, revenue: 1440000, color: "#EF4444" },
  { market: "Others", percentage: 10, revenue: 1200000, color: "#8B5CF6" },
];

const PRODUCT_PERFORMANCE = [
  {
    product: "Frozen Black Tiger Shrimp",
    revenue: 5500000,
    growth: 25,
    orders: 45,
    avgPrice: 12.5,
  },
  {
    product: "Cotton Handloom Fabrics",
    revenue: 3200000,
    growth: 18,
    orders: 32,
    avgPrice: 15.0,
  },
  {
    product: "Organic Cotton Yarn",
    revenue: 2800000,
    growth: 22,
    orders: 28,
    avgPrice: 8.5,
  },
  {
    product: "Turmeric Powder",
    revenue: 1500000,
    growth: 15,
    orders: 25,
    avgPrice: 4.2,
  },
];

const TIMELINE_EVENTS = [
  {
    date: "2025-09-01",
    event: "Secured major EU contract",
    impact: "₹2.5 Cr",
    type: "milestone",
  },
  {
    date: "2025-08-28",
    event: "HACCP certification renewed",
    impact: "Compliance",
    type: "certification",
  },
  {
    date: "2025-08-25",
    event: "First shipment to Japan",
    impact: "₹80 Lakh",
    type: "milestone",
  },
  {
    date: "2025-08-20",
    event: "MEIS benefits received",
    impact: "₹45 Lakh",
    type: "benefit",
  },
  {
    date: "2025-08-15",
    event: "New product line launched",
    impact: "3 Products",
    type: "expansion",
  },
  {
    date: "2025-08-10",
    event: "US FDA approval received",
    impact: "Market Access",
    type: "certification",
  },
  {
    date: "2025-08-05",
    event: "Cold storage facility expanded",
    impact: "2x Capacity",
    type: "infrastructure",
  },
];

const GOALS_PROGRESS = [
  {
    goal: "Annual Revenue Target",
    current: 12000000,
    target: 15000000,
    unit: "₹",
    progress: 80,
  },
  {
    goal: "New Markets Entry",
    current: 3,
    target: 5,
    unit: "markets",
    progress: 60,
  },
  {
    goal: "Product Diversification",
    current: 8,
    target: 12,
    unit: "products",
    progress: 67,
  },
  {
    goal: "Certification Compliance",
    current: 4,
    target: 5,
    unit: "certs",
    progress: 80,
  },
  {
    goal: "Export Volume",
    current: 450,
    target: 500,
    unit: "MT",
    progress: 90,
  },
];

export default function ImpactTrackerPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("ytd");
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  const totalRevenue = REVENUE_DATA.reduce(
    (sum, item) => sum + item.revenue,
    0
  );
  const totalExports = REVENUE_DATA.reduce(
    (sum, item) => sum + item.exports,
    0
  );
  const averageMonthlyRevenue = totalRevenue / REVENUE_DATA.length;
  const revenueGrowth =
    ((REVENUE_DATA[REVENUE_DATA.length - 1].revenue - REVENUE_DATA[0].revenue) /
      REVENUE_DATA[0].revenue) *
    100;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "milestone":
        return <Target className="h-4 w-4 text-blue-600" />;
      case "certification":
        return <Badge className="h-4 w-4 text-green-600" />;
      case "benefit":
        return <DollarSign className="h-4 w-4 text-yellow-600" />;
      case "expansion":
        return <Building className="h-4 w-4 text-purple-600" />;
      case "infrastructure":
        return <Truck className="h-4 w-4 text-orange-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getEventBadge = (type: string) => {
    switch (type) {
      case "milestone":
        return <Badge className="bg-blue-100 text-blue-800">Milestone</Badge>;
      case "certification":
        return (
          <Badge className="bg-green-100 text-green-800">Certification</Badge>
        );
      case "benefit":
        return <Badge className="bg-yellow-100 text-yellow-800">Benefit</Badge>;
      case "expansion":
        return (
          <Badge className="bg-purple-100 text-purple-800">Expansion</Badge>
        );
      case "infrastructure":
        return (
          <Badge className="bg-orange-100 text-orange-800">
            Infrastructure
          </Badge>
        );
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Impact Tracker
            </h1>
            <p className="text-gray-600">
              Monitor your export performance and track business growth
            </p>
          </div>
          <div className="flex space-x-2">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ytd">Year to Date</SelectItem>
                <SelectItem value="6m">Last 6 Months</SelectItem>
                <SelectItem value="3m">Last 3 Months</SelectItem>
                <SelectItem value="1m">Last Month</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold">
                    {formatCurrency(totalRevenue)}
                  </div>
                  <div className="text-sm text-gray-600">Total Revenue</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />+
                    {revenueGrowth.toFixed(1)}%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold">
                    {MARKET_DISTRIBUTION.length}
                  </div>
                  <div className="text-sm text-gray-600">Active Markets</div>
                  <div className="text-xs text-blue-600 flex items-center mt-1">
                    <Target className="h-3 w-3 mr-1" />5 Countries
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold">{totalExports}</div>
                  <div className="text-sm text-gray-600">Total Shipments</div>
                  <div className="text-xs text-purple-600 flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    This Year
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-orange-600" />
                <div>
                  <div className="text-2xl font-bold">85</div>
                  <div className="text-sm text-gray-600">Active Buyers</div>
                  <div className="text-xs text-orange-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12 New
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="markets">Markets</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Trend */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="mr-2 h-5 w-5" />
                    Revenue Trend
                  </CardTitle>
                  <CardDescription>Monthly revenue vs targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {REVENUE_DATA.slice(-6).map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.month}</span>
                          <span className="font-medium">
                            {formatCurrency(item.revenue)}
                          </span>
                        </div>
                        <Progress
                          value={(item.revenue / item.target) * 100}
                          className={`h-2 ${
                            item.revenue >= item.target
                              ? "bg-green-100"
                              : "bg-gray-100"
                          }`}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Target: {formatCurrency(item.target)}</span>
                          <span>{item.exports} shipments</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Market Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="mr-2 h-5 w-5" />
                    Market Distribution
                  </CardTitle>
                  <CardDescription>Revenue by target markets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {MARKET_DISTRIBUTION.map((market, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            {market.market}
                          </span>
                          <span className="text-sm">{market.percentage}%</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <Progress
                              value={market.percentage}
                              className="h-2"
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-16">
                            {formatCurrency(market.revenue)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Product Performance
                </CardTitle>
                <CardDescription>
                  Top performing products by revenue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {PRODUCT_PERFORMANCE.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{product.product}</h4>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                          <span>{formatCurrency(product.revenue)} revenue</span>
                          <span>{product.orders} orders</span>
                          <span>Avg: ${product.avgPrice}/unit</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge
                          className={`${
                            product.growth >= 20
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          +{product.growth}%
                        </Badge>
                        <div className="text-right">
                          <div className="w-24">
                            <Progress
                              value={(product.revenue / 6000000) * 100}
                              className="h-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>
                    Detailed revenue breakdown and trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                    <div className="text-center text-gray-500">
                      <LineChart className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Revenue Chart</p>
                      <p className="text-sm">
                        Chart visualization would be implemented here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Avg Monthly Revenue
                      </span>
                      <span className="font-medium">
                        {formatCurrency(averageMonthlyRevenue)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Best Month</span>
                      <span className="font-medium">
                        {formatCurrency(
                          Math.max(...REVENUE_DATA.map((d) => d.revenue))
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">YoY Growth</span>
                      <span className="font-medium text-green-600">
                        +{revenueGrowth.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Target Achievement
                      </span>
                      <span className="font-medium">85%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Sources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Direct Exports</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Trading Companies</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">E-commerce</span>
                      <span className="font-medium">7%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="markets" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MARKET_DISTRIBUTION.map((market, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{market.market}</h3>
                        <Badge
                          style={{
                            backgroundColor: market.color,
                            color: "white",
                          }}
                        >
                          {market.percentage}%
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Revenue</span>
                          <span className="font-medium">
                            {formatCurrency(market.revenue)}
                          </span>
                        </div>
                        <Progress value={market.percentage} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Avg Order</span>
                          <div className="font-medium">
                            {formatCurrency(market.revenue / 8)}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Growth</span>
                          <div className="font-medium text-green-600">
                            +{15 + index * 3}%
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Annual Goals Progress
                </CardTitle>
                <CardDescription>
                  Track your progress against set goals for 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {GOALS_PROGRESS.map((goal, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{goal.goal}</h4>
                          <p className="text-sm text-gray-500">
                            {goal.current.toLocaleString()} /{" "}
                            {goal.target.toLocaleString()} {goal.unit}
                          </p>
                        </div>
                        <Badge
                          className={`${
                            goal.progress >= 80
                              ? "bg-green-100 text-green-800"
                              : goal.progress >= 60
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {goal.progress}%
                        </Badge>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Goal Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-800">On Track</h4>
                    <p className="text-sm text-green-600">
                      Export Volume and Revenue targets are progressing well
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-yellow-800">
                      Needs Attention
                    </h4>
                    <p className="text-sm text-yellow-600">
                      New market entry behind schedule
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800">Opportunity</h4>
                    <p className="text-sm text-blue-600">
                      Product diversification ahead of plan
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-sm">
                        Explore Asian Markets
                      </p>
                      <p className="text-xs text-gray-500">
                        Target: Complete by Q4
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Target className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-sm">
                        Accelerate Product Launch
                      </p>
                      <p className="text-xs text-gray-500">
                        4 new products pending
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-sm">Expand Sales Team</p>
                      <p className="text-xs text-gray-500">
                        Hire 2 export specialists
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Business Timeline
                </CardTitle>
                <CardDescription>
                  Key milestones and achievements in your export journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {TIMELINE_EVENTS.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 border rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        {getEventIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{event.event}</h4>
                          {getEventBadge(event.type)}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{event.date}</span>
                          <span className="font-medium text-blue-600">
                            {event.impact}
                          </span>
                        </div>
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
