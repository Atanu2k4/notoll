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
  Trophy,
  TrendingUp,
  Globe,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Star,
  Share2,
  Plus,
  Filter,
  Search,
} from "lucide-react";

const SUCCESS_STORIES = [
  {
    id: 1,
    title:
      "From Local Market to Global Giant: Odisha Seafood Company's Journey",
    company: "Blue Ocean Exports Pvt. Ltd.",
    founder: "Ravi Pattnaik",
    location: "Bhubaneswar, Odisha",
    category: "Seafood",
    featured: true,
    avatar: "/avatars/ravi.jpg",
    coverImage: "/stories/seafood-cover.jpg",
    summary:
      "Started with a small fishing boat, now exporting to 15 countries with ₹50 crore annual revenue.",
    metrics: {
      revenue: "₹50 Cr",
      markets: 15,
      employees: 120,
      growth: "300%",
      exports_since: "2018",
    },
    timeline: [
      {
        year: "2015",
        event: "Started with single fishing boat",
        value: "₹5 Lakh investment",
      },
      {
        year: "2018",
        event: "First international export to UAE",
        value: "₹2 Cr revenue",
      },
      {
        year: "2020",
        event: "EU market entry with HACCP certification",
        value: "₹15 Cr revenue",
      },
      {
        year: "2023",
        event: "Expanded to US and Japan markets",
        value: "₹35 Cr revenue",
      },
      {
        year: "2025",
        event: "Industry leader in sustainable seafood",
        value: "₹50 Cr revenue",
      },
    ],
    challenges: [
      "Obtaining international certifications",
      "Understanding complex export documentation",
      "Building trust with international buyers",
      "Managing cold chain logistics",
    ],
    solutions: [
      "Partnership with certification bodies through notoll network",
      "Expert guidance from government export schemes",
      "Building relationships through trade exhibitions",
      "Investment in modern cold storage facilities",
    ],
    tags: ["Seafood", "HACCP", "EU Market", "Sustainability"],
    publishedDate: "2025-09-01",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Weaving Dreams: How Traditional Handloom Found Global Appreciation",
    company: "Heritage Handlooms",
    founder: "Meera Dash",
    location: "Sambalpur, Odisha",
    category: "Textiles",
    featured: false,
    avatar: "/avatars/meera.jpg",
    coverImage: "/stories/handloom-cover.jpg",
    summary:
      "Transformed traditional Sambalpuri weaving into a global brand serving premium markets.",
    metrics: {
      revenue: "₹12 Cr",
      markets: 8,
      employees: 85,
      growth: "250%",
      exports_since: "2019",
    },
    timeline: [
      {
        year: "2017",
        event: "Started with 5 local weavers",
        value: "₹50,000 investment",
      },
      {
        year: "2019",
        event: "First export to Germany",
        value: "₹80 Lakh revenue",
      },
      {
        year: "2021",
        event: "Organic certification achieved",
        value: "₹3 Cr revenue",
      },
      {
        year: "2023",
        event: "Premium brand launch in US",
        value: "₹8 Cr revenue",
      },
      {
        year: "2025",
        event: "Sustainable fashion leader",
        value: "₹12 Cr revenue",
      },
    ],
    challenges: [
      "Maintaining traditional quality at scale",
      "Competing with machine-made products",
      "Educating international markets about handloom value",
      "Ensuring fair wages for weavers",
    ],
    solutions: [
      "Implementing quality control systems",
      "Focusing on premium market segments",
      "Storytelling and brand building",
      "Direct partnership with weaver communities",
    ],
    tags: ["Handloom", "Organic", "Sustainable Fashion", "Cultural Heritage"],
    publishedDate: "2025-08-28",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Spicing Up the World: The Aromatic Success of Kalinga Spices",
    company: "Kalinga Organic Spices",
    founder: "Suresh Mohanty",
    location: "Koraput, Odisha",
    category: "Agriculture",
    featured: false,
    avatar: "/avatars/suresh.jpg",
    coverImage: "/stories/spices-cover.jpg",
    summary:
      "From small tribal farming community to organic spice exporter reaching 20+ countries.",
    metrics: {
      revenue: "₹25 Cr",
      markets: 22,
      employees: 200,
      growth: "400%",
      exports_since: "2016",
    },
    timeline: [
      {
        year: "2014",
        event: "Organic farming initiative started",
        value: "₹2 Lakh investment",
      },
      {
        year: "2016",
        event: "First export to Middle East",
        value: "₹1.5 Cr revenue",
      },
      {
        year: "2019",
        event: "US organic certification",
        value: "₹8 Cr revenue",
      },
      {
        year: "2022",
        event: "European market expansion",
        value: "₹18 Cr revenue",
      },
      {
        year: "2025",
        event: "Global organic spice leader",
        value: "₹25 Cr revenue",
      },
    ],
    challenges: [
      "Converting traditional farmers to organic",
      "Meeting international organic standards",
      "Building cold chain infrastructure",
      "Competing with established spice exporters",
    ],
    solutions: [
      "Farmer education and support programs",
      "Investment in certification processes",
      "Modern processing and storage facilities",
      "Focus on premium organic segment",
    ],
    tags: [
      "Organic Spices",
      "Tribal Farming",
      "US Certification",
      "Cold Chain",
    ],
    publishedDate: "2025-08-25",
    readTime: "7 min read",
  },
];

const CATEGORIES = [
  { id: "all", name: "All Stories", count: 24 },
  { id: "seafood", name: "Seafood", count: 8 },
  { id: "textiles", name: "Textiles", count: 6 },
  { id: "agriculture", name: "Agriculture", count: 5 },
  { id: "handicrafts", name: "Handicrafts", count: 3 },
  { id: "engineering", name: "Engineering", count: 2 },
];

const IMPACT_STATS = [
  { label: "Total Revenue Generated", value: "₹2,500+ Cr", icon: DollarSign },
  { label: "Jobs Created", value: "15,000+", icon: Users },
  { label: "Countries Reached", value: "45+", icon: Globe },
  { label: "Success Stories", value: "150+", icon: Trophy },
];

export default function SuccessStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const filteredStories = SUCCESS_STORIES.filter((story) => {
    const matchesCategory =
      selectedCategory === "all" ||
      story.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortBy === "recent") {
      return (
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
      );
    } else if (sortBy === "revenue") {
      const aRevenue = parseInt(a.metrics.revenue.replace(/[^\d]/g, ""));
      const bRevenue = parseInt(b.metrics.revenue.replace(/[^\d]/g, ""));
      return bRevenue - aRevenue;
    }
    return 0;
  });

  const featuredStory = SUCCESS_STORIES.find((story) => story.featured);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Success Stories
            </h1>
            <p className="text-gray-600">
              Inspiring journeys of Odisha exporters who conquered global
              markets
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Share Your Story
          </Button>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMPACT_STATS.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Story */}
        {featuredStory && (
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <Trophy className="h-12 w-12 mx-auto mb-4" />
                    <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                      Featured Story
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">
                      {featuredStory.company}
                    </h3>
                    <p className="text-blue-100">{featuredStory.location}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {featuredStory.title}
                    </h2>
                    <p className="text-gray-600">{featuredStory.summary}</p>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>
                          {featuredStory.founder[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span>{featuredStory.founder}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredStory.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{featuredStory.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {featuredStory.metrics.revenue}
                      </div>
                      <div className="text-sm text-gray-500">
                        Annual Revenue
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        {featuredStory.metrics.markets}
                      </div>
                      <div className="text-sm text-gray-500">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">
                        {featuredStory.metrics.employees}
                      </div>
                      <div className="text-sm text-gray-500">Employees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">
                        {featuredStory.metrics.growth}
                      </div>
                      <div className="text-sm text-gray-500">Growth</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {featuredStory.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button>Read Full Story</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        <Tabs defaultValue="stories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stories">All Stories</TabsTrigger>
            <TabsTrigger value="submit">Submit Story</TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="space-y-6">
            {/* Filters and Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search success stories..."
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
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="revenue">Highest Revenue</SelectItem>
                      <SelectItem value="growth">Highest Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedStories.map((story) => (
                <Card
                  key={story.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {story.category === "Seafood" && "🐟"}
                        {story.category === "Textiles" && "🧵"}
                        {story.category === "Agriculture" && "🌾"}
                        {story.category === "Handicrafts" && "🎨"}
                        {story.category === "Engineering" && "⚙️"}
                      </div>
                      <Badge variant="outline">{story.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg line-clamp-2 mb-2">
                          {story.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {story.summary}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{story.founder[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{story.founder}</p>
                          <p className="text-gray-500">{story.company}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Revenue:</span>
                          <span className="ml-1 font-medium text-green-600">
                            {story.metrics.revenue}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Markets:</span>
                          <span className="ml-1 font-medium">
                            {story.metrics.markets}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {story.tags.slice(0, 3).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-gray-500">
                          {story.readTime}
                        </span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm">Read More</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="submit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Success Story</CardTitle>
                <CardDescription>
                  Inspire other exporters by sharing your journey to global
                  markets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <Trophy className="h-16 w-16 mx-auto text-yellow-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Ready to Inspire Others?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Your success story could be the motivation someone needs to
                    start their export journey. Share your challenges,
                    solutions, and achievements.
                  </p>
                  <div className="space-y-4">
                    <Button size="lg">Submit Your Story</Button>
                    <div className="text-sm text-gray-500">
                      <p>Our team will review and help you craft your story</p>
                      <p>Typical review time: 3-5 business days</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
                  <div>
                    <h4 className="font-semibold mb-3">What to Include:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Your company background and founding story</li>
                      <li>• Key challenges you faced in exporting</li>
                      <li>• Solutions and strategies that worked</li>
                      <li>• Growth metrics and achievements</li>
                      <li>• Advice for new exporters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Featured placement on notoll platform</li>
                      <li>• Social media promotion</li>
                      <li>• Industry recognition</li>
                      <li>• Networking opportunities</li>
                      <li>• Inspire the next generation</li>
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
