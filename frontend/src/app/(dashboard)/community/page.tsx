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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageSquare,
  Heart,
  Share2,
  Reply,
  Plus,
  Search,
  Filter,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Clock,
} from "lucide-react";

const FORUM_POSTS = [
  {
    id: 1,
    title: "Best practices for exporting seafood to EU markets",
    content:
      "I recently got my first order from a German buyer for frozen shrimp. What are the key documentation requirements I should be aware of? Any fellow seafood exporters here who can share their experience?",
    author: "Rajesh Kumar",
    authorRole: "Seafood Exporter",
    avatar: "/avatars/rajesh.jpg",
    category: "Market Access",
    tags: ["EU", "Seafood", "Documentation"],
    likes: 24,
    replies: 8,
    views: 156,
    createdAt: "2025-09-04T10:30:00Z",
    trending: true,
  },
  {
    id: 2,
    title: "MEIS benefits calculation - need help",
    content:
      "Can someone explain how MEIS benefits are calculated for handicraft exports? I exported ₹15 lakhs worth of products last quarter but confused about the rate applicable.",
    author: "Priya Sharma",
    authorRole: "Handicraft Exporter",
    avatar: "/avatars/priya.jpg",
    category: "Government Schemes",
    tags: ["MEIS", "Handicrafts", "Benefits"],
    likes: 18,
    replies: 12,
    views: 203,
    createdAt: "2025-09-03T15:45:00Z",
    trending: false,
  },
  {
    id: 3,
    title: "Organic cotton certification journey - lessons learned",
    content:
      "After 2 years of struggle, finally got our organic cotton certified for international markets. Here is what I learned and mistakes to avoid...",
    author: "Amit Patel",
    authorRole: "Textile Exporter",
    avatar: "/avatars/amit.jpg",
    category: "Certification",
    tags: ["Organic", "Cotton", "Certification"],
    likes: 45,
    replies: 15,
    views: 312,
    createdAt: "2025-09-02T09:15:00Z",
    trending: true,
  },
  {
    id: 4,
    title: "Freight forwarder recommendations for Middle East",
    content:
      "Looking for reliable freight forwarders for shipping to UAE and Saudi Arabia. Need someone who understands the documentation requirements well.",
    author: "Sneha Reddy",
    authorRole: "Spice Exporter",
    avatar: "/avatars/sneha.jpg",
    category: "Logistics",
    tags: ["Freight", "Middle East", "UAE"],
    likes: 12,
    replies: 6,
    views: 89,
    createdAt: "2025-09-01T14:20:00Z",
    trending: false,
  },
];

const MENTORS = [
  {
    id: 1,
    name: "Dr. Subash Chandra",
    title: "Export Consultant",
    expertise: ["Market Research", "Compliance", "Product Development"],
    experience: "25 years",
    avatar: "/avatars/mentor1.jpg",
    rating: 4.9,
    sessions: 150,
    available: true,
  },
  {
    id: 2,
    name: "Meera Krishnan",
    title: "International Trade Specialist",
    expertise: ["Documentation", "Letters of Credit", "Shipping"],
    experience: "18 years",
    avatar: "/avatars/mentor2.jpg",
    rating: 4.8,
    sessions: 120,
    available: true,
  },
  {
    id: 3,
    name: "Ravi Agarwal",
    title: "Former Export Director",
    expertise: ["Business Strategy", "Market Entry", "Negotiations"],
    experience: "30 years",
    avatar: "/avatars/mentor3.jpg",
    rating: 4.9,
    sessions: 200,
    available: false,
  },
];

const CATEGORIES = [
  { id: "all", name: "All Topics", count: 150 },
  { id: "market-access", name: "Market Access", count: 45 },
  { id: "documentation", name: "Documentation", count: 38 },
  { id: "logistics", name: "Logistics", count: 32 },
  { id: "schemes", name: "Government Schemes", count: 25 },
  { id: "certification", name: "Certification", count: 20 },
  { id: "finance", name: "Trade Finance", count: 18 },
];

export default function CommunityForumPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
  });

  const filteredPosts = FORUM_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase().replace(" ", "-") === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const handleSubmitPost = () => {
    // In real app, this would submit to API
    console.log("Submitting post:", newPost);
    setShowNewPostForm(false);
    setNewPost({ title: "", content: "", category: "", tags: "" });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      return `${Math.floor(diffInHours / 24)}d ago`;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Community Forum
            </h1>
            <p className="text-gray-600">
              Connect with fellow exporters and industry experts
            </p>
          </div>
          <Button onClick={() => setShowNewPostForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>

        <Tabs defaultValue="discussions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="mentors">Expert Mentors</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Search and Filter */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="Search discussions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger className="w-full sm:w-48">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name} ({category.count})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* New Post Form */}
                {showNewPostForm && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Create New Discussion</CardTitle>
                      <CardDescription>
                        Share your question or insight with the community
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          placeholder="What's your question or topic?"
                          value={newPost.title}
                          onChange={(e) =>
                            setNewPost((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={newPost.category}
                          onValueChange={(value) =>
                            setNewPost((prev) => ({ ...prev, category: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="market-access">
                              Market Access
                            </SelectItem>
                            <SelectItem value="documentation">
                              Documentation
                            </SelectItem>
                            <SelectItem value="logistics">Logistics</SelectItem>
                            <SelectItem value="schemes">
                              Government Schemes
                            </SelectItem>
                            <SelectItem value="certification">
                              Certification
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                          id="content"
                          placeholder="Describe your question or share your insights..."
                          rows={4}
                          value={newPost.content}
                          onChange={(e) =>
                            setNewPost((prev) => ({
                              ...prev,
                              content: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="tags">Tags (comma separated)</Label>
                        <Input
                          id="tags"
                          placeholder="e.g., EU, Seafood, Documentation"
                          value={newPost.tags}
                          onChange={(e) =>
                            setNewPost((prev) => ({
                              ...prev,
                              tags: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={handleSubmitPost}>
                          Post Discussion
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowNewPostForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Discussion Posts */}
                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                {post.trending && (
                                  <Badge className="bg-orange-100 text-orange-800">
                                    <TrendingUp className="mr-1 h-3 w-3" />
                                    Trending
                                  </Badge>
                                )}
                                <Badge variant="outline">{post.category}</Badge>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 mb-3 line-clamp-2">
                                {post.content}
                              </p>
                              <div className="flex flex-wrap gap-1 mb-3">
                                {post.tags.map((tag, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={post.avatar}
                                  alt={post.author}
                                />
                                <AvatarFallback>
                                  {post.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="text-sm">
                                <p className="font-medium text-gray-900">
                                  {post.author}
                                </p>
                                <p className="text-gray-500">
                                  {post.authorRole}
                                </p>
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatTimeAgo(post.createdAt)}
                              </div>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <button className="flex items-center space-x-1 hover:text-red-600">
                                <Heart className="h-4 w-4" />
                                <span>{post.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-blue-600">
                                <MessageSquare className="h-4 w-4" />
                                <span>{post.replies}</span>
                              </button>
                              <span className="flex items-center space-x-1">
                                <span>{post.views} views</span>
                              </span>
                              <button className="flex items-center space-x-1 hover:text-green-600">
                                <Share2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Community Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Community Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Total Members
                      </span>
                      <span className="font-semibold">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Active Today
                      </span>
                      <span className="font-semibold text-green-600">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Total Discussions
                      </span>
                      <span className="font-semibold">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Solved Questions
                      </span>
                      <span className="font-semibold text-blue-600">89%</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {CATEGORIES.slice(1, 6).map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === category.id
                              ? "bg-blue-100 text-blue-800"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <div className="flex justify-between">
                            <span>{category.name}</span>
                            <span className="text-gray-500">
                              {category.count}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mentors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MENTORS.map((mentor) => (
                <Card key={mentor.id}>
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <Avatar className="h-16 w-16 mx-auto">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback>
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold text-lg">{mentor.name}</h3>
                        <p className="text-gray-600">{mentor.title}</p>
                        <p className="text-sm text-gray-500">
                          {mentor.experience} experience
                        </p>
                      </div>

                      <div className="flex justify-center items-center space-x-4 text-sm">
                        <span>⭐ {mentor.rating}</span>
                        <span>{mentor.sessions} sessions</span>
                      </div>

                      <div className="flex flex-wrap justify-center gap-1">
                        {mentor.expertise.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full" disabled={!mentor.available}>
                        {mentor.available ? "Book Session" : "Not Available"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Export Guides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Complete Guide to EU Market Entry",
                    "Documentation Checklist for US Exports",
                    "Understanding MEIS Benefits",
                    "Organic Certification Process",
                    "Letter of Credit Best Practices",
                  ].map((guide, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                    >
                      <span className="text-sm">{guide}</span>
                      <Button variant="ghost" size="sm">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Templates & Forms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Export Contract Template",
                    "Invoice Format",
                    "Packing List Template",
                    "Certificate of Origin",
                    "Shipping Bill Format",
                  ].map((template, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                    >
                      <span className="text-sm">{template}</span>
                      <Button variant="ghost" size="sm">
                        <Award className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
