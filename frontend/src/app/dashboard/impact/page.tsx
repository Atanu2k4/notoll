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
  BarChart3,
  TrendingUp,
  TrendingDown,
  Globe,
  DollarSign,
  Users,
  Target,
  Award,
  Download,
  Calendar,
  ArrowUpRight,
  Leaf,
  Factory,
} from "lucide-react";

export default function ImpactPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Impact Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your business impact and contribution to the economy
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Select Period
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue Impact
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.4 Cr</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+22%</span> from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Countries Served
              </CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+5</span> new markets
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Employment Generated
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
              <p className="text-xs text-muted-foreground">
                Direct & indirect jobs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Sustainability Score
              </CardTitle>
              <Leaf className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+4%</span> improvement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="economic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="economic">Economic Impact</TabsTrigger>
            <TabsTrigger value="social">Social Impact</TabsTrigger>
            <TabsTrigger value="environmental">
              Environmental Impact
            </TabsTrigger>
            <TabsTrigger value="goals">SDG Alignment</TabsTrigger>
          </TabsList>

          <TabsContent value="economic" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Revenue Growth */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Revenue Growth Trend
                  </CardTitle>
                  <CardDescription>
                    Year-over-year growth analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>2024</span>
                        <span className="font-medium">₹2.4 Cr (+22%)</span>
                      </div>
                      <Progress value={100} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>2023</span>
                        <span className="font-medium">₹1.97 Cr (+18%)</span>
                      </div>
                      <Progress value={82} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>2022</span>
                        <span className="font-medium">₹1.67 Cr (+15%)</span>
                      </div>
                      <Progress value={70} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>2021</span>
                        <span className="font-medium">₹1.45 Cr</span>
                      </div>
                      <Progress value={60} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Market Expansion */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Market Expansion</CardTitle>
                  <CardDescription>
                    Geographic reach and market penetration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          28
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Countries
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          156
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Active Buyers
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Europe</span>
                        <span className="text-sm font-medium">
                          45% of revenue
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">North America</span>
                        <span className="text-sm font-medium">
                          28% of revenue
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Asia Pacific</span>
                        <span className="text-sm font-medium">
                          18% of revenue
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Others</span>
                        <span className="text-sm font-medium">
                          9% of revenue
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Economic Contribution */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Economic Contribution Metrics
                  </CardTitle>
                  <CardDescription>
                    Your impact on the Indian economy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg">
                      <DollarSign className="h-8 w-8 mx-auto text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="text-xl font-bold">₹2.4Cr</div>
                      <div className="text-xs text-muted-foreground">
                        Export Revenue
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg">
                      <Target className="h-8 w-8 mx-auto text-green-600 dark:text-green-400 mb-2" />
                      <div className="text-xl font-bold">₹45L</div>
                      <div className="text-xs text-muted-foreground">
                        Tax Contribution
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg">
                      <Factory className="h-8 w-8 mx-auto text-purple-600 dark:text-purple-400 mb-2" />
                      <div className="text-xl font-bold">₹78L</div>
                      <div className="text-xs text-muted-foreground">
                        Supplier Payments
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 rounded-lg">
                      <Users className="h-8 w-8 mx-auto text-amber-600 dark:text-amber-400 mb-2" />
                      <div className="text-xl font-bold">₹32L</div>
                      <div className="text-xs text-muted-foreground">
                        Employee Wages
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Employment Impact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Employment Impact</CardTitle>
                  <CardDescription>Jobs created and supported</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">
                          45
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Direct Jobs
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="text-xl font-bold text-green-600">
                          100
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Indirect Jobs
                        </div>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">
                          28%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Women Employment
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Skilled Workers</span>
                          <span>67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Semi-skilled Workers</span>
                          <span>25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Entry Level</span>
                          <span>8%</span>
                        </div>
                        <Progress value={8} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community Development */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Community Development
                  </CardTitle>
                  <CardDescription>
                    Social initiatives and community impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-green-900 dark:text-green-100">
                            Skill Development Programs
                          </h4>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Training 50+ youth annually
                          </p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-blue-900 dark:text-blue-100">
                            Women Empowerment
                          </h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Supporting 25 women entrepreneurs
                          </p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">
                          Ongoing
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-purple-900 dark:text-purple-100">
                            Education Support
                          </h4>
                          <p className="text-sm text-purple-700 dark:text-purple-300">
                            Scholarships for 15 students
                          </p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">
                          Annual
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Supply Chain Impact */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Supply Chain Impact</CardTitle>
                  <CardDescription>
                    Supporting local suppliers and vendors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold">78</div>
                      <div className="text-xs text-muted-foreground">
                        Local Suppliers
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold">₹78L</div>
                      <div className="text-xs text-muted-foreground">
                        Annual Procurement
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-xs text-muted-foreground">
                        States Covered
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold">45%</div>
                      <div className="text-xs text-muted-foreground">
                        Rural Suppliers
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="environmental" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Carbon Footprint */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Carbon Footprint</CardTitle>
                  <CardDescription>
                    Environmental impact tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        125 tons
                      </div>
                      <div className="text-sm text-muted-foreground">
                        CO2 equivalent per year
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        15% reduction from last year
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Manufacturing</span>
                          <span>45% (56 tons)</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Transportation</span>
                          <span>35% (44 tons)</span>
                        </div>
                        <Progress value={35} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Packaging</span>
                          <span>20% (25 tons)</span>
                        </div>
                        <Progress value={20} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sustainability Initiatives */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Sustainability Initiatives
                  </CardTitle>
                  <CardDescription>
                    Green practices and eco-friendly measures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Leaf className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-sm font-medium">
                            Renewable Energy
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Solar power for 60% of operations
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Waste Reduction</p>
                          <p className="text-xs text-muted-foreground">
                            85% waste recycling rate
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        Ongoing
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="text-sm font-medium">
                            Green Certification
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ISO 14001 Environmental Management
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        Certified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resource Efficiency */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Resource Efficiency</CardTitle>
                  <CardDescription>
                    Optimizing resource usage and reducing waste
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <div className="text-xl font-bold text-blue-600">25%</div>
                      <div className="text-xs text-muted-foreground">
                        Water Savings
                      </div>
                      <div className="text-xs text-blue-600">
                        vs industry avg
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="text-xl font-bold text-green-600">
                        85%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Waste Recycled
                      </div>
                      <div className="text-xs text-green-600">
                        Zero to landfill
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <div className="text-xl font-bold text-purple-600">
                        60%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Renewable Energy
                      </div>
                      <div className="text-xs text-purple-600">
                        Solar powered
                      </div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <div className="text-xl font-bold text-amber-600">
                        15%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Emission Reduction
                      </div>
                      <div className="text-xs text-amber-600">
                        Year over year
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      SDG 8: Decent Work
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">
                      High Impact
                    </Badge>
                  </div>
                  <CardDescription>
                    Economic Growth and Employment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Job Creation</span>
                      <span className="font-medium">145 jobs</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Fair Wages</span>
                      <span className="font-medium">Above minimum wage</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Skill Development</span>
                      <span className="font-medium">50+ trained annually</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      85% alignment with SDG targets
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      SDG 5: Gender Equality
                    </CardTitle>
                    <Badge className="bg-purple-100 text-purple-800">
                      Medium Impact
                    </Badge>
                  </div>
                  <CardDescription>
                    Women's Economic Empowerment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Women Employment</span>
                      <span className="font-medium">28% of workforce</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Leadership Positions</span>
                      <span className="font-medium">22% women leaders</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Equal Pay</span>
                      <span className="font-medium">100% compliance</span>
                    </div>
                    <Progress value={72} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      72% alignment with SDG targets
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      SDG 13: Climate Action
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      High Impact
                    </Badge>
                  </div>
                  <CardDescription>
                    Environmental Sustainability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Emission Reduction</span>
                      <span className="font-medium">15% YoY decrease</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Renewable Energy</span>
                      <span className="font-medium">60% solar powered</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Carbon Offset</span>
                      <span className="font-medium">125 tons CO2</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      78% alignment with SDG targets
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">SDG 9: Innovation</CardTitle>
                    <Badge className="bg-amber-100 text-amber-800">
                      Medium Impact
                    </Badge>
                  </div>
                  <CardDescription>Industry and Infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>R&D Investment</span>
                      <span className="font-medium">3% of revenue</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Digital Adoption</span>
                      <span className="font-medium">85% processes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Quality Standards</span>
                      <span className="font-medium">ISO certified</span>
                    </div>
                    <Progress value={68} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      68% alignment with SDG targets
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      SDG 17: Partnerships
                    </CardTitle>
                    <Badge className="bg-red-100 text-red-800">
                      High Impact
                    </Badge>
                  </div>
                  <CardDescription>
                    Global Partnership for Development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>International Partners</span>
                      <span className="font-medium">28 countries</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Local Suppliers</span>
                      <span className="font-medium">78 vendors</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Knowledge Sharing</span>
                      <span className="font-medium">12 workshops/year</span>
                    </div>
                    <Progress value={82} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      82% alignment with SDG targets
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      SDG 12: Responsible
                    </CardTitle>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      Medium Impact
                    </Badge>
                  </div>
                  <CardDescription>Consumption and Production</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Waste Reduction</span>
                      <span className="font-medium">85% recycled</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sustainable Materials</span>
                      <span className="font-medium">70% eco-friendly</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Circular Economy</span>
                      <span className="font-medium">Product lifecycle</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      75% alignment with SDG targets
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
