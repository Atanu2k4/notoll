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
  MessageSquare,
  Users,
  TrendingUp,
  Search,
  Plus,
  ThumbsUp,
  Reply,
  Eye,
  Clock,
  Award,
  BookOpen,
} from "lucide-react";

export default function ForumPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Community Forum
              </h1>
              <p className="text-muted-foreground">
                Connect with fellow exporters, share experiences, and get expert
                advice
              </p>
            </div>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Discussion
            </Button>
          </div>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search discussions, topics, or questions..."
                  className="w-full"
                />
              </div>
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
                Total Discussions
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+23</span> this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Members
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,456</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+89</span> this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Expert Answers
              </CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-500">67</span> this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Your Reputation
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+25</span> points this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Discussions</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="expert">Expert Advice</TabsTrigger>
            <TabsTrigger value="my-posts">My Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                        RK
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          How to handle customs delays in electronics exports?
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>by Rajesh Kumar</span>
                          <span>•</span>
                          <span>2 hours ago</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            <span>12 replies</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>89 views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                      <Badge variant="outline">Electronics</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm facing repeated customs delays with my electronics
                    shipments to Germany. The CE marking is complete, but
                    customs officials are asking for additional documentation...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        15
                      </Button>
                      <Button size="sm" variant="outline">
                        <Reply className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last reply by{" "}
                      <span className="font-medium">Export Expert</span> • 30
                      min ago
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-semibold">
                        PS
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          Best practices for textile export documentation
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>by Priya Sharma</span>
                          <span>•</span>
                          <span>5 hours ago</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            <span>8 replies</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>156 views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        Solved
                      </Badge>
                      <Badge variant="outline">Textiles</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can someone share a comprehensive checklist for textile
                    export documentation? I want to ensure I'm not missing
                    anything crucial for my upcoming shipment to the EU...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        28
                      </Button>
                      <Button size="sm" variant="outline">
                        <Reply className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last reply by{" "}
                      <span className="font-medium">Compliance Officer</span> •
                      1 hour ago
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold">
                        AM
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          MEIS benefit calculation for seafood exports
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>by Arun Mehta</span>
                          <span>•</span>
                          <span>1 day ago</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            <span>15 replies</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>234 views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-blue-100 text-blue-800">
                        Discussion
                      </Badge>
                      <Badge variant="outline">Seafood</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm confused about the MEIS benefit calculation for my
                    frozen seafood exports. The rates seem to vary by
                    destination country. Can someone clarify...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        22
                      </Button>
                      <Button size="sm" variant="outline">
                        <Reply className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last reply by{" "}
                      <span className="font-medium">Finance Expert</span> • 3
                      hours ago
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-4">
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-green-200 dark:border-green-800">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-semibold">
                        SK
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          Complete guide to export documentation in 2024
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>by Suresh Kumar</span>
                          <span>•</span>
                          <span>3 days ago</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            <span>45 replies</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>1.2k views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-amber-100 text-amber-800">
                        Pinned
                      </Badge>
                      <Badge variant="outline">Guide</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    A comprehensive guide covering all essential export
                    documentation requirements, updated for 2024 regulations.
                    This includes commercial invoices, packing lists, bills of
                    lading, certificates of origin, and more...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        126
                      </Button>
                      <Button size="sm" variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Guide
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last updated by{" "}
                      <span className="font-medium">Expert Moderator</span> • 1
                      day ago
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold">
                        NK
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          How I increased my export revenue by 300% in 2 years
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>by Nikhil Kapoor</span>
                          <span>•</span>
                          <span>1 week ago</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            <span>67 replies</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>2.1k views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        Success Story
                      </Badge>
                      <Badge variant="outline">Growth</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sharing my journey from a small textile exporter to serving
                    15+ countries. Key strategies, common mistakes to avoid, and
                    practical tips that worked for me...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        89
                      </Button>
                      <Button size="sm" variant="outline">
                        <Reply className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last reply by{" "}
                      <span className="font-medium">Growth Expert</span> • 2
                      hours ago
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="expert" className="space-y-4">
            <div className="space-y-4">
              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Expert AMA: Export Finance & Banking
                      </CardTitle>
                      <CardDescription>
                        with Chartered Accountant Ravi Gupta
                      </CardDescription>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      Live Now
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our expert session on export finance, banking
                    procedures, and managing international transactions. Ask
                    your questions about LC, advance payments, and export
                    credit...
                  </p>
                  <Button size="sm">Join Session</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          Understanding new RoDTEP rates for 2024
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>by Trade Policy Expert</span>
                          <span>•</span>
                          <span>2 days ago</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            <span>23 replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">
                      Expert Answer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed explanation of the updated RoDTEP rates and their
                    implications for different product categories. Includes
                    sector-wise breakdown and calculation methods...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        45
                      </Button>
                      <Button size="sm" variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Full Answer
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Verified Expert Response
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="my-posts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Create New Discussion</CardTitle>
                <CardDescription>
                  Share your question or start a new topic
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <Input placeholder="Enter your question or topic title..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>General Discussion</option>
                    <option>Documentation</option>
                    <option>Finance & Banking</option>
                    <option>Compliance</option>
                    <option>Market Intelligence</option>
                    <option>Success Stories</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    placeholder="Provide details about your question or topic..."
                    rows={6}
                  />
                </div>
                <div className="flex gap-2">
                  <Button>Post Discussion</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        Questions about GST refund process
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Posted 2 days ago • 8 replies • 45 views
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        Best shipping companies for Europe?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Posted 1 week ago • 12 replies • 89 views
                      </p>
                    </div>
                    <Badge variant="outline">Closed</Badge>
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
