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
import {
  TrendingUp,
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
  CalendarClock,
  Bell,
  Activity,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 pb-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-gray-800/20 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Welcome back, John
              </h1>
              <Badge
                variant="outline"
                className="ml-2 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
              >
                Premium
              </Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-1 flex items-center">
              <CalendarClock className="h-4 w-4 mr-1.5 text-gray-500 dark:text-gray-400" />
              <span>September 6, 2025</span>
              <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
              <Bell className="h-4 w-4 mr-1.5 text-gray-500 dark:text-gray-400" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                5 notifications
              </span>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="bg-white dark:bg-gray-800 shadow-sm border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <Globe className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
              New Market
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md border-0"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Generate Pitch
            </Button>
          </div>
        </div>

        {/* Analytics Overview */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
            <Activity className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
            Analytics Overview
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="absolute inset-0 w-full h-1 bg-blue-500"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-5">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Tariff Watch
                </CardTitle>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  3 Changes
                </div>
                <p className="text-xs text-gray-600 dark:text-blue-300 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-red-500 dark:text-red-400 mr-1" />
                  +2.5% avg increase
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="absolute inset-0 w-full h-1 bg-green-500"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-5">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Buyer Matches
                </CardTitle>
                <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  12 Total
                </div>
                <p className="text-xs text-gray-600 dark:text-green-300 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 dark:text-green-400 mr-1" />
                  4 new this week
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="absolute inset-0 w-full h-1 bg-purple-500"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-5">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Compliance
                </CardTitle>
                <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  85%
                </div>
                <p className="text-xs text-gray-600 dark:text-purple-300 mt-1">
                  Avg. completion rate
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="absolute inset-0 w-full h-1 bg-amber-500"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-5">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Relief Schemes
                </CardTitle>
                <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                  <DollarSign className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  5 Available
                </div>
                <p className="text-xs text-gray-600 dark:text-amber-300 mt-1">
                  3 eligible for you
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="absolute inset-0 w-full h-1 bg-cyan-500"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-5">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Revenue Impact
                </CardTitle>
                <div className="p-2 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹2.4L
                </div>
                <p className="text-xs text-gray-600 dark:text-cyan-300 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 dark:text-green-400 mr-1" />
                  +15% from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Market Alerts */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 w-full h-1 bg-red-500"></div>
            <CardHeader className="pb-3 pt-5">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                  Market Alerts
                </CardTitle>
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 border-0">
                  3 New
                </Badge>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Stay updated on tariff changes affecting your products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-full">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    US Shrimp Tariff Increase
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    HS Code 030613 - Rate increased to 17.5%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center">
                    <Clock className="h-3 w-3 inline mr-1" />2 hours ago
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
                >
                  Urgent
                </Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <CheckCircle className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    EU Textile Opportunity
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    New preferential rates for organic cotton
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center">
                    <Clock className="h-3 w-3 inline mr-1" />5 hours ago
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                >
                  New
                </Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Globe className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Japan Market Opening
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Reduced documentation requirements
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center">
                    <Clock className="h-3 w-3 inline mr-1" />1 day ago
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Buyer Matches */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 w-full h-1 bg-green-500"></div>
            <CardHeader className="pb-3 pt-5">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Users className="h-4 w-4 mr-2 text-green-500" />
                  Top Buyer Matches
                </CardTitle>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                >
                  95% avg match
                </Badge>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                New buyers interested in your products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold mr-2.5">
                      OF
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Ocean Foods Ltd
                    </span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-0 font-medium">
                    95% Match
                  </Badge>
                </div>
                <div className="ml-10.5">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 flex items-center">
                    <span className="mr-1">🇺🇸</span> USA • Import Volume: 1000
                    MT/month
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded inline-block">
                    Looking for frozen shrimp suppliers
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold mr-2.5">
                      NS
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Nordic Seafood
                    </span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-0 font-medium">
                    88% Match
                  </Badge>
                </div>
                <div className="ml-10.5">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 flex items-center">
                    <span className="mr-1">🇳🇴</span> Norway • Import Volume: 500
                    MT/month
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded inline-block">
                    Premium seafood distributor
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-semibold mr-2.5">
                      AT
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Asia Textiles
                    </span>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 border-0 font-medium">
                    82% Match
                  </Badge>
                </div>
                <div className="ml-10.5">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 flex items-center">
                    <span className="mr-1">🇸🇬</span> Singapore • Import Volume:
                    2000 pieces/month
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded inline-block">
                    Cotton textile wholesaler
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 w-full h-1 bg-indigo-500"></div>
            <CardHeader className="pb-3 pt-5">
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <Activity className="h-4 w-4 mr-2 text-indigo-500" />
                Quick Actions
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Take action on your export opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md border-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">View All Buyers</div>
                  <div className="text-xs text-blue-100 opacity-90">
                    12 new matches available
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start h-14 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/30 mr-3">
                  <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Apply for Relief Scheme</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    3 eligible schemes
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start h-14 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 mr-3">
                  <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Generate Market Pitch</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    AI-powered insights
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
