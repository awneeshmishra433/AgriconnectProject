"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Wheat,
  Shield,
  FileText,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Download,
  ExternalLink,
  LogOut,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function GovernmentSchemesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedState, setSelectedState] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [applications, setApplications] = useState([])

  const schemes = [
    {
      id: 1,
      name: "PM-KISAN Samman Nidhi",
      category: "Direct Benefit Transfer",
      description: "Financial support of ₹6000 per year to small and marginal farmers",
      eligibility: "Small and marginal farmers with cultivable land up to 2 hectares",
      benefits: "₹2000 per installment, 3 times a year",
      documents: ["Aadhaar Card", "Bank Account Details", "Land Records"],
      deadline: "2024-12-31",
      status: "Active",
      applicationLink: "#",
      state: "All India",
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana",
      category: "Insurance",
      description: "Crop insurance scheme providing financial support to farmers in case of crop failure",
      eligibility: "All farmers growing notified crops in notified areas",
      benefits: "Up to ₹2 lakh per farmer per season",
      documents: ["Aadhaar Card", "Bank Account", "Land Records", "Sowing Certificate"],
      deadline: "2024-10-15",
      status: "Active",
      applicationLink: "#",
      state: "All India",
    },
    {
      id: 7,
      name: "Agriculture Infrastructure Fund (AIF)",
      category: "Credit",
      description: "Financial support for setting up post-harvest management infrastructure and community farming assets",
      eligibility: "Farmers, FPOs, Agri-entrepreneurs, and Startups",
      benefits: "Loan up to ₹2 crore at 3% interest subsidy",
      documents: ["Aadhaar Card", "Business Plan", "detailed project report","Land Documents", "Bank Statements","Ownership Proof"],
      deadline: "2032-33",
      status: "Active",
      applicationLink: "#",
      state: "All India",
    },
    {
      id: 8,
      name: "PM Rashtriya Krishi Vikas Yojna (PM-RKVY)",
      category: "Credit",
      description: "To make farming a remunerative economic activity through strengthening farmers efforts, risk mitigation and promoting agri-business entrepreneurship and sustainable agriculture",
      eligibility: "farmers and agri-entrepreneurs ,organic farmers, FPOs, SHGs",
      benefits: "Financial assistance for various agriculture and allied activities",
      documents: ["Aadhaar Card", "Land Documents", "Project Report", "Bank Details"],
      deadline: "Not Specified",
      status: "Active",
      applicationLink: "#",
      state: "All India",
    },
    {
      id: 3,
      name: "Kisan Credit Card",
      category: "Credit",
      description: "Credit facility for farmers to meet their agricultural and allied activities",
      eligibility: "All farmers including tenant farmers, oral lessees, and sharecroppers",
      benefits: "Credit limit up to ₹3 lakh at 4% interest rate",
      documents: ["Aadhaar Card", "PAN Card", "Land Documents", "Income Certificate"],
      deadline: "Ongoing",
      status: "Active",
      applicationLink: "#",
      state: "All India",
    },
    {
      id: 4,
      name: "Soil Health Card Scheme",
      category: "Soil Management",
      description: "Provides soil health cards to farmers with recommendations for appropriate nutrients",
      eligibility: "All farmers",
      benefits: "Free soil testing and nutrient recommendations",
      documents: ["Aadhaar Card", "Land Records"],
      deadline: "Ongoing",
      status: "Active",
      applicationLink: "#",
      state: "All India",
    },
    {
      id: 5,
      name: "National Agriculture Market (e-NAM)",
      category: "Marketing",
      description: "Online trading platform for agricultural commodities",
      eligibility: "Farmers, traders, and buyers",
      benefits: "Better price discovery and transparent trading",
      documents: ["Aadhaar Card", "Bank Account", "Mobile Number"],
      deadline: "Ongoing",
      status: "Active",
      applicationLink: "#",
      state: "All India",
    },
    {
      id: 6,
      name: "Punjab Crop Diversification Scheme",
      category: "State Scheme",
      description: "Incentive for farmers to shift from paddy to alternative crops",
      eligibility: "Farmers in Punjab growing paddy",
      benefits: "₹17,500 per hectare for crop diversification",
      documents: ["Land Records", "Aadhaar Card", "Bank Details"],
      deadline: "2024-11-30",
      status: "Active",
      applicationLink: "#",
      state: "Punjab",
    },
  ]

  const myApplications = [
    {
      id: 1,
      schemeName: "PM-KISAN Samman Nidhi",
      applicationId: "PMK2024001234",
      status: "Approved",
      appliedDate: "2024-01-15",
      amount: "₹6,000",
      nextInstallment: "2024-12-01",
    },
    {
      id: 2,
      schemeName: "Pradhan Mantri Fasal Bima Yojana",
      applicationId: "PMFBY2024005678",
      status: "Under Review",
      appliedDate: "2024-03-20",
      amount: "₹50,000",
      nextInstallment: "Pending",
    },
    {
      id: 3,
      schemeName: "Kisan Credit Card",
      applicationId: "KCC2024009876",
      status: "Pending Documents",
      appliedDate: "2024-04-10",
      amount: "₹2,00,000",
      nextInstallment: "N/A",
    },
  ]

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory
    const matchesState = selectedState === "all" || scheme.state === selectedState || scheme.state === "All India"

    return matchesSearch && matchesCategory && matchesState
  })

  const handleApplyScheme = (schemeId) => {
    // Simulate application submission
    const scheme = schemes.find((s) => s.id === schemeId)
    const newApplication = {
      id: Date.now(),
      schemeName: scheme.name,
      applicationId: `APP${Date.now()}`,
      status: "Submitted",
      appliedDate: new Date().toISOString().split("T")[0],
      amount: "Pending",
      nextInstallment: "Under Review",
    }
    setApplications([...applications, newApplication])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <Wheat className="h-8 w-8 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">AgriConnect</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            <Shield className="h-8 w-8 text-primary mr-3" />
            Government Schemes
          </h1>
          <p className="text-muted-foreground">
            Access and apply for agricultural subsidies, insurance, and government programs
          </p>
        </div>

        <Tabs defaultValue="schemes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="schemes">Available Schemes</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="help">Help & Support</TabsTrigger>
          </TabsList>

          <TabsContent value="schemes" className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search schemes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:w-auto lg:flex lg:gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Direct Benefit Transfer">Direct Benefit</SelectItem>
                      <SelectItem value="Insurance">Insurance</SelectItem>
                      <SelectItem value="Credit">Credit</SelectItem>
                      <SelectItem value="Soil Management">Soil Management</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="State Scheme">State Schemes</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                      <SelectItem value="All India">All India</SelectItem>
                      <SelectItem value="Punjab">Punjab</SelectItem>
                      <SelectItem value="Haryana">Haryana</SelectItem>
                      <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Schemes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{scheme.name}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">{scheme.category}</Badge>
                          <Badge variant="outline">{scheme.state}</Badge>
                          <Badge
                            variant={scheme.status === "Active" ? "default" : "destructive"}
                            className={scheme.status === "Active" ? "bg-green-600" : ""}
                          >
                            {scheme.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm">{scheme.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Benefits:</h4>
                      <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1">Eligibility:</h4>
                      <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1">Required Documents:</h4>
                      <div className="flex flex-wrap gap-1">
                        {scheme.documents.map((doc, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline: {scheme.deadline}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <FileText className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{scheme.name}</DialogTitle>
                            <DialogDescription>Complete scheme information and application process</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-semibold mb-2">Description</h3>
                              <p className="text-sm text-muted-foreground">{scheme.description}</p>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">Benefits</h3>
                              <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">Eligibility Criteria</h3>
                              <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">Required Documents</h3>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {scheme.documents.map((doc, index) => (
                                  <li key={index} className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                    {doc}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex gap-2">
                              <Button onClick={() => handleApplyScheme(scheme.id)} className="flex-1">
                                Apply Now
                              </Button>
                              <Button variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Download Form
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" onClick={() => handleApplyScheme(scheme.id)}>
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track the status of your scheme applications</CardDescription>
              </CardHeader>
              <CardContent>
                {myApplications.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Applications Yet</h3>
                    <p className="text-muted-foreground mb-4">You haven't applied for any schemes yet.</p>
                    <Button>Browse Available Schemes</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myApplications.map((app) => (
                      <div key={app.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{app.schemeName}</h4>
                            <p className="text-sm text-muted-foreground">Application ID: {app.applicationId}</p>
                          </div>
                          <Badge
                            variant={
                              app.status === "Approved"
                                ? "default"
                                : app.status === "Under Review"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={
                              app.status === "Approved"
                                ? "bg-green-600"
                                : app.status === "Under Review"
                                  ? "bg-yellow-600"
                                  : ""
                            }
                          >
                            {app.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Applied Date:</span>
                            <p className="font-medium">{new Date(app.appliedDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Amount:</span>
                            <p className="font-medium">{app.amount}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Next Update:</span>
                            <p className="font-medium">{app.nextInstallment}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Track
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    Helpline Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <div className="font-medium">PM-KISAN Helpline</div>
                      <div className="text-sm text-muted-foreground">For PM-KISAN related queries</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">155261</div>
                      <div className="text-xs text-muted-foreground">Toll Free</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <div className="font-medium">Crop Insurance</div>
                      <div className="text-sm text-muted-foreground">PMFBY related support</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">14447</div>
                      <div className="text-xs text-muted-foreground">Toll Free</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <div className="font-medium">Kisan Call Centre</div>
                      <div className="text-sm text-muted-foreground">General agricultural queries</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">1800-180-1551</div>
                      <div className="text-xs text-muted-foreground">Toll Free</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How to check application status?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can track your application status using the application ID in the "My Applications" section.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What documents are required?</h4>
                    <p className="text-sm text-muted-foreground">
                      Each scheme has specific document requirements. Check the scheme details for the complete list.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How long does approval take?</h4>
                    <p className="text-sm text-muted-foreground">
                      Processing time varies by scheme, typically 15-30 days for most applications.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Application Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Before Applying:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Read eligibility criteria carefully
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Gather all required documents
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Ensure documents are valid and clear
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Check application deadlines
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">After Applying:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Save your application ID
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Track status regularly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Respond to queries promptly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        Keep documents ready for verification
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
