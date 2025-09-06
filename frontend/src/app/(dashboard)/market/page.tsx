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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Download,
  Bell,
} from "lucide-react";

const TARIFF_DATA = [
  {
    country: "United States",
    hsCode: "030613",
    product: "Frozen shrimps and prawns",
    currentRate: 15.5,
    previousRate: 13.0,
    change: "+2.5%",
    trend: "up",
    effectiveDate: "2025-08-15",
  },
  {
    country: "European Union",
    hsCode: "030613",
    product: "Frozen shrimps and prawns",
    currentRate: 8.0,
    previousRate: 8.0,
    change: "0%",
    trend: "stable",
    effectiveDate: "2025-01-01",
  },
  {
    country: "Japan",
    hsCode: "030613",
    product: "Frozen shrimps and prawns",
    currentRate: 10.5,
    previousRate: 11.5,
    change: "-1%",
    trend: "down",
    effectiveDate: "2025-07-01",
  },
  {
    country: "South Korea",
    hsCode: "520100",
    product: "Cotton, not carded",
    currentRate: 3.0,
    previousRate: 3.0,
    change: "0%",
    trend: "stable",
    effectiveDate: "2025-01-01",
  },
  {
    country: "Australia",
    hsCode: "630260",
    product: "Cotton textiles",
    currentRate: 5.0,
    previousRate: 6.0,
    change: "-1%",
    trend: "down",
    effectiveDate: "2025-06-01",
  },
];

const PRICING_DATA = [
  { month: "Jan", price: 4.2, volume: 1200 },
  { month: "Feb", price: 4.5, volume: 1350 },
  { month: "Mar", price: 4.8, volume: 1400 },
  { month: "Apr", price: 4.6, volume: 1300 },
  { month: "May", price: 5.1, volume: 1500 },
  { month: "Jun", price: 5.3, volume: 1600 },
  { month: "Jul", price: 5.0, volume: 1550 },
  { month: "Aug", price: 5.2, volume: 1650 },
];

const COMPETITIVENESS_SCORES = [
  { market: "European Union", score: 85, color: "green" },
  { market: "Japan", score: 78, color: "green" },
  { market: "South Korea", score: 72, color: "yellow" },
  { market: "Australia", score: 68, color: "yellow" },
  { market: "Singapore", score: 82, color: "green" },
  { market: "United States", score: 45, color: "red" },
];

export default function MarketIntelligencePage() {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTariffs = TARIFF_DATA.filter((item) => {
    const matchesCountry =
      selectedCountry === "all" || item.country === selectedCountry;
    const matchesProduct =
      selectedProduct === "all" || item.hsCode === selectedProduct;
    const matchesSearch =
      searchQuery === "" ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hsCode.includes(searchQuery);

    return matchesCountry && matchesProduct && matchesSearch;
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-red-500" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-green-500" />;
      default:
        return (
          <span className="h-4 w-4 inline-block bg-gray-400 rounded-full"></span>
        );
    }
  };

  const getScoreColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-800";
      case "yellow":
        return "bg-yellow-100 text-yellow-800";
      case "red":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Market Intelligence
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time market data to guide your export decisions
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Set Alert
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search markets, products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="European Union">European Union</SelectItem>
                  <SelectItem value="Japan">Japan</SelectItem>
                  <SelectItem value="South Korea">South Korea</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={selectedProduct}
                onValueChange={setSelectedProduct}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="030613">030613 - Shrimps</SelectItem>
                  <SelectItem value="520100">520100 - Cotton</SelectItem>
                  <SelectItem value="630260">630260 - Textiles</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Reset Filters</Button>
            </div>
          </CardContent>
        </Card>

        {/* Tariff Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle>Tariff Comparison</CardTitle>
            <CardDescription>
              Current tariff rates across key markets with recent changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Country</TableHead>
                  <TableHead>HS Code</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Current Rate</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Effective Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTariffs.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {item.country}
                    </TableCell>
                    <TableCell>{item.hsCode}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.currentRate}%</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        {getTrendIcon(item.trend)}
                        <span
                          className={
                            item.trend === "up"
                              ? "text-red-600"
                              : item.trend === "down"
                              ? "text-green-600"
                              : "text-gray-600"
                          }
                        >
                          {item.change}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{item.effectiveDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pricing Trends and Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pricing Trends Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing Trends</CardTitle>
              <CardDescription>
                Average export price per kg (USD)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {PRICING_DATA.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">
                      {item.month} 2025
                    </span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        {item.volume} MT
                      </span>
                      <span className="font-semibold">${item.price}</span>
                      <div
                        className="h-2 bg-primary rounded"
                        style={{ width: `${(item.price / 6) * 100}px` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competitiveness Score */}
          <Card>
            <CardHeader>
              <CardTitle>Market Competitiveness</CardTitle>
              <CardDescription>
                Your competitiveness score by market
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {COMPETITIVENESS_SCORES.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">{item.market}</span>
                    <div className="flex items-center space-x-2">
                      <Badge className={getScoreColor(item.color)}>
                        {item.score}/100
                      </Badge>
                      <div className="w-20 h-2 bg-gray-200 rounded">
                        <div
                          className={`h-2 rounded ${
                            item.color === "green"
                              ? "bg-green-500"
                              : item.color === "yellow"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Track New Market</h3>
              <p className="text-sm text-gray-600">
                Set up alerts for market opportunities
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Download className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Download Report</h3>
              <p className="text-sm text-gray-600">
                Get detailed market analysis PDF
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Bell className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Price Alerts</h3>
              <p className="text-sm text-gray-600">
                Get notified of price changes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
