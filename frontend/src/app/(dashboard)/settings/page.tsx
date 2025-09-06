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
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Building2,
  Bell,
  Shield,
  Users,
  CreditCard,
  Globe,
  Upload,
  Trash2,
  Plus,
  Settings,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@blueocean.com",
    role: "Admin",
    status: "active",
    lastActive: "2025-09-05",
    avatar: "/avatars/rajesh.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@blueocean.com",
    role: "Export Manager",
    status: "active",
    lastActive: "2025-09-04",
    avatar: "/avatars/priya.jpg",
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@blueocean.com",
    role: "Documentation",
    status: "invited",
    lastActive: null,
    avatar: "/avatars/amit.jpg",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Frozen Black Tiger Shrimp",
    hsCode: "030613",
    category: "Seafood",
    status: "active",
    markets: ["US", "EU", "Japan"],
    certifications: ["HACCP", "BRC"],
  },
  {
    id: 2,
    name: "Cotton Handloom Fabrics",
    hsCode: "520942",
    category: "Textiles",
    status: "active",
    markets: ["EU", "US"],
    certifications: ["Organic", "GOTS"],
  },
  {
    id: 3,
    name: "Organic Cotton Yarn",
    hsCode: "520100",
    category: "Textiles",
    status: "draft",
    markets: ["EU"],
    certifications: ["Organic"],
  },
];

export default function AccountSettingsPage() {
  const [profileData, setProfileData] = useState({
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh@blueocean.com",
    phone: "+91 9876543210",
    designation: "Export Director",
    location: "Bhubaneswar, Odisha",
  });

  const [companyData, setCompanyData] = useState({
    name: "Blue Ocean Exports Pvt. Ltd.",
    industry: "seafood",
    establishedYear: "2015",
    employees: "120",
    address: "123, Industrial Estate, Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751024",
    website: "www.blueoceanexports.com",
    iecCode: "AABCB1234C1Z5",
    gstNumber: "21AABCB1234C1Z5",
    panNumber: "AABCB1234C",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsAlerts: false,
    marketUpdates: true,
    complianceReminders: true,
    invoiceAlerts: true,
    teamActivity: false,
  });

  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [showInviteForm, setShowInviteForm] = useState(false);

  const handleProfileUpdate = () => {
    // In real app, this would call an API
    console.log("Updating profile:", profileData);
  };

  const handleCompanyUpdate = () => {
    // In real app, this would call an API
    console.log("Updating company:", companyData);
  };

  const handleNotificationUpdate = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }));
  };

  const handleInviteTeamMember = () => {
    // In real app, this would send invitation
    console.log("Inviting team member:", newTeamMember);
    setNewTeamMember({ name: "", email: "", role: "" });
    setShowInviteForm(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "invited":
        return <Badge className="bg-yellow-100 text-yellow-800">Invited</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProductStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Account Settings
          </h1>
          <p className="text-gray-600">
            Manage your profile, company information, and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/avatars/rajesh.jpg" alt="Profile" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </Button>
                    <p className="text-sm text-gray-500">
                      Recommended: Square image, at least 400x400px
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                      id="designation"
                      value={profileData.designation}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          designation: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={handleProfileUpdate}>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5" />
                  Company Information
                </CardTitle>
                <CardDescription>
                  Manage your company details and business information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={companyData.name}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select
                      value={companyData.industry}
                      onValueChange={(value) =>
                        setCompanyData((prev) => ({ ...prev, industry: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seafood">Seafood</SelectItem>
                        <SelectItem value="textiles">Textiles</SelectItem>
                        <SelectItem value="agriculture">Agriculture</SelectItem>
                        <SelectItem value="handicrafts">Handicrafts</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="establishedYear">Established Year</Label>
                    <Input
                      id="establishedYear"
                      value={companyData.establishedYear}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          establishedYear: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Input
                      id="employees"
                      value={companyData.employees}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          employees: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={companyData.website}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          website: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={companyData.address}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={companyData.city}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={companyData.state}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input
                      id="pincode"
                      value={companyData.pincode}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          pincode: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="iecCode">IEC Code</Label>
                    <Input
                      id="iecCode"
                      value={companyData.iecCode}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          iecCode: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="gstNumber">GST Number</Label>
                    <Input
                      id="gstNumber"
                      value={companyData.gstNumber}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          gstNumber: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="panNumber">PAN Number</Label>
                    <Input
                      id="panNumber"
                      value={companyData.panNumber}
                      onChange={(e) =>
                        setCompanyData((prev) => ({
                          ...prev,
                          panNumber: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={handleCompanyUpdate}>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Team Management
                    </CardTitle>
                    <CardDescription>
                      Invite team members and manage their access
                    </CardDescription>
                  </div>
                  <Button onClick={() => setShowInviteForm(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Invite Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {showInviteForm && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Invite New Team Member</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="memberName">Name</Label>
                            <Input
                              id="memberName"
                              placeholder="Enter full name"
                              value={newTeamMember.name}
                              onChange={(e) =>
                                setNewTeamMember((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="memberEmail">Email</Label>
                            <Input
                              id="memberEmail"
                              type="email"
                              placeholder="Enter email address"
                              value={newTeamMember.email}
                              onChange={(e) =>
                                setNewTeamMember((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="memberRole">Role</Label>
                            <Select
                              value={newTeamMember.role}
                              onValueChange={(value) =>
                                setNewTeamMember((prev) => ({
                                  ...prev,
                                  role: value,
                                }))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Export Manager">
                                  Export Manager
                                </SelectItem>
                                <SelectItem value="Documentation">
                                  Documentation
                                </SelectItem>
                                <SelectItem value="Sales">Sales</SelectItem>
                                <SelectItem value="Viewer">Viewer</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button onClick={handleInviteTeamMember}>
                            Send Invitation
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setShowInviteForm(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="space-y-4">
                  {TEAM_MEMBERS.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-gray-600">
                            {member.email}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{member.role}</Badge>
                            {getStatusBadge(member.status)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        {member.lastActive && (
                          <span>Last active: {member.lastActive}</span>
                        )}
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Globe className="mr-2 h-5 w-5" />
                      Product Portfolio
                    </CardTitle>
                    <CardDescription>
                      Manage your export products and their configurations
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {PRODUCTS.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium">{product.name}</h4>
                          {getProductStatusBadge(product.status)}
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>HS Code: {product.hsCode}</span>
                          <span>Category: {product.category}</span>
                          <span>Markets: {product.markets.join(", ")}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.certifications.map((cert, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Choose how you want to receive updates and alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-base font-medium">
                        Email Notifications
                      </div>
                      <div className="text-sm text-gray-500">
                        Receive notifications via email
                      </div>
                    </div>
                    <Switch
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked: boolean) =>
                        handleNotificationUpdate("emailNotifications", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-base font-medium">SMS Alerts</div>
                      <div className="text-sm text-gray-500">
                        Get important alerts via SMS
                      </div>
                    </div>
                    <Switch
                      checked={notifications.smsAlerts}
                      onCheckedChange={(checked: boolean) =>
                        handleNotificationUpdate("smsAlerts", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-base font-medium">
                        Market Updates
                      </div>
                      <div className="text-sm text-gray-500">
                        Stay updated with market trends and opportunities
                      </div>
                    </div>
                    <Switch
                      checked={notifications.marketUpdates}
                      onCheckedChange={(checked: boolean) =>
                        handleNotificationUpdate("marketUpdates", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-base font-medium">
                        Compliance Reminders
                      </div>
                      <div className="text-sm text-gray-500">
                        Get reminded about compliance deadlines
                      </div>
                    </div>
                    <Switch
                      checked={notifications.complianceReminders}
                      onCheckedChange={(checked: boolean) =>
                        handleNotificationUpdate("complianceReminders", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-base font-medium">
                        Invoice Alerts
                      </div>
                      <div className="text-sm text-gray-500">
                        Notifications for invoices and payments
                      </div>
                    </div>
                    <Switch
                      checked={notifications.invoiceAlerts}
                      onCheckedChange={(checked: boolean) =>
                        handleNotificationUpdate("invoiceAlerts", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-base font-medium">Team Activity</div>
                      <div className="text-sm text-gray-500">
                        Updates on team member activities
                      </div>
                    </div>
                    <Switch
                      checked={notifications.teamActivity}
                      onCheckedChange={(checked: boolean) =>
                        handleNotificationUpdate("teamActivity", checked)
                      }
                    />
                  </div>
                </div>

                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Manage your account security and authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Password</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Last changed: August 15, 2025
                    </p>
                    <Button variant="outline" size="sm">
                      Change Password
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">
                      Two-Factor Authentication
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Add an extra layer of security to your account
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Not Enabled</Badge>
                      <Button variant="outline" size="sm">
                        Enable 2FA
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Login Sessions</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Manage your active login sessions
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span className="font-medium">Current Session</span>
                          <span className="text-gray-500 ml-2">
                            Chrome on Windows • Bhubaneswar
                          </span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span className="font-medium">Mobile App</span>
                          <span className="text-gray-500 ml-2">
                            Android • 2 days ago
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Account Deletion</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Permanently delete your account and all data
                    </p>
                    <Button variant="destructive" size="sm">
                      Delete Account
                    </Button>
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
