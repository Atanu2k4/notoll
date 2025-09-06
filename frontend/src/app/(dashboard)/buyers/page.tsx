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
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  Heart,
  MessageSquare,
  Globe,
  MapPin,
  Building,
  TrendingUp,
  Star,
  Phone,
  Mail,
} from "lucide-react";

const BUYERS_DATA = [
  {
    id: 1,
    name: "Ocean Foods International",
    country: "United States",
    city: "Miami, FL",
    sector: "Seafood",
    importVolume: "1000 MT/month",
    contactEmail: "procurement@oceanfoods.com",
    contactPhone: "+1-305-555-0123",
    website: "www.oceanfoods.com",
    verified: true,
    matchScore: 95,
    products: ["Frozen Shrimp", "Fish Fillets"],
    lastContact: null,
    status: "not_contacted",
    saved: false,
  },
  {
    id: 2,
    name: "Nordic Seafood AS",
    country: "Norway",
    city: "Bergen",
    sector: "Seafood",
    importVolume: "500 MT/month",
    contactEmail: "imports@nordicsea.no",
    contactPhone: "+47-55-123456",
    website: "www.nordicsea.no",
    verified: true,
    matchScore: 88,
    products: ["Frozen Shrimp", "Crab"],
    lastContact: "2025-08-15",
    status: "replied",
    saved: true,
  },
  {
    id: 3,
    name: "Asia Pacific Textiles",
    country: "Singapore",
    city: "Singapore",
    sector: "Textile",
    importVolume: "2000 pieces/month",
    contactEmail: "buying@aptextiles.sg",
    contactPhone: "+65-6123-4567",
    website: "www.aptextiles.sg",
    verified: true,
    matchScore: 82,
    products: ["Cotton Fabrics", "Handloom Textiles"],
    lastContact: "2025-08-20",
    status: "contacted",
    saved: true,
  },
  {
    id: 4,
    name: "European Cotton Co.",
    country: "Germany",
    city: "Hamburg",
    sector: "Textile",
    importVolume: "1500 pieces/month",
    contactEmail: "sourcing@eucotton.de",
    contactPhone: "+49-40-123456",
    website: "www.eucotton.de",
    verified: false,
    matchScore: 75,
    products: ["Organic Cotton", "Textile Products"],
    lastContact: null,
    status: "not_contacted",
    saved: false,
  },
  {
    id: 5,
    name: "Tokyo Marine Products",
    country: "Japan",
    city: "Tokyo",
    sector: "Seafood",
    importVolume: "800 MT/month",
    contactEmail: "purchase@tokyomarine.jp",
    contactPhone: "+81-3-1234-5678",
    website: "www.tokyomarine.jp",
    verified: true,
    matchScore: 78,
    products: ["Frozen Seafood", "Fish Products"],
    lastContact: null,
    status: "not_contacted",
    saved: false,
  },
];

export default function BuyersPage() {
  const [viewMode, setViewMode] = useState<"table" | "cards">("cards");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedSector, setSelectedSector] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [buyers, setBuyers] = useState(BUYERS_DATA);

  const filteredBuyers = buyers.filter((buyer) => {
    const matchesCountry =
      selectedCountry === "all" || buyer.country === selectedCountry;
    const matchesSector =
      selectedSector === "all" || buyer.sector === selectedSector;
    const matchesSearch =
      searchQuery === "" ||
      buyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buyer.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buyer.products.some((product) =>
        product.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesSaved = !showSavedOnly || buyer.saved;

    return matchesCountry && matchesSector && matchesSearch && matchesSaved;
  });

  const toggleSaved = (buyerId: number) => {
    setBuyers((prev) =>
      prev.map((buyer) =>
        buyer.id === buyerId ? { ...buyer, saved: !buyer.saved } : buyer
      )
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "not_contacted":
        return <Badge variant="secondary">Not Contacted</Badge>;
      case "contacted":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Contacted</Badge>
        );
      case "replied":
        return <Badge className="bg-green-100 text-green-800">Replied</Badge>;
      case "negotiating":
        return <Badge className="bg-blue-100 text-blue-800">Negotiating</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Buyer Directory
            </h1>
            <p className="text-gray-600">
              Connect with verified international buyers
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSavedOnly(!showSavedOnly)}
            >
              <Heart
                className={`mr-2 h-4 w-4 ${
                  showSavedOnly ? "fill-red-500 text-red-500" : ""
                }`}
              />
              {showSavedOnly ? "Show All" : "Saved Only"}
            </Button>
            <Button size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Bulk Contact
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{buyers.length}</p>
                  <p className="text-xs text-gray-500">Total Buyers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-red-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">
                    {buyers.filter((b) => b.saved).length}
                  </p>
                  <p className="text-xs text-gray-500">Saved Buyers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">
                    {buyers.filter((b) => b.status !== "not_contacted").length}
                  </p>
                  <p className="text-xs text-gray-500">Contacted</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">
                    {buyers.filter((b) => b.matchScore >= 90).length}
                  </p>
                  <p className="text-xs text-gray-500">High Match</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search buyers, countries..."
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
                  <SelectItem value="Norway">Norway</SelectItem>
                  <SelectItem value="Singapore">Singapore</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="Japan">Japan</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="Seafood">Seafood</SelectItem>
                  <SelectItem value="Textile">Textile</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-2">
                <Button
                  variant={viewMode === "cards" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("cards")}
                >
                  Cards
                </Button>
                <Button
                  variant={viewMode === "table" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                >
                  Table
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buyers Display */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBuyers.map((buyer) => (
              <Card
                key={buyer.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>
                          {buyer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{buyer.name}</CardTitle>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {buyer.city}, {buyer.country}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSaved(buyer.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          buyer.saved ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{buyer.sector}</Badge>
                    {buyer.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium">Import Volume</p>
                    <p className="text-sm text-gray-600">
                      {buyer.importVolume}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Products</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {buyer.products.map((product, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Match Score</p>
                      <p
                        className={`text-lg font-bold ${getMatchScoreColor(
                          buyer.matchScore
                        )}`}
                      >
                        {buyer.matchScore}%
                      </p>
                    </div>
                    {getStatusBadge(buyer.status)}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Generate Pitch
                    </Button>
                    <Button variant="outline" size="sm">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Buyer Directory</CardTitle>
              <CardDescription>
                {filteredBuyers.length} buyers match your criteria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Sector</TableHead>
                    <TableHead>Import Volume</TableHead>
                    <TableHead>Match Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBuyers.map((buyer) => (
                    <TableRow key={buyer.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">
                              {buyer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{buyer.name}</p>
                            <p className="text-sm text-gray-500">
                              {buyer.contactEmail}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {buyer.city}, {buyer.country}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{buyer.sector}</Badge>
                      </TableCell>
                      <TableCell>{buyer.importVolume}</TableCell>
                      <TableCell>
                        <span
                          className={`font-semibold ${getMatchScoreColor(
                            buyer.matchScore
                          )}`}
                        >
                          {buyer.matchScore}%
                        </span>
                      </TableCell>
                      <TableCell>{getStatusBadge(buyer.status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSaved(buyer.id)}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                buyer.saved ? "fill-red-500 text-red-500" : ""
                              }`}
                            />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
