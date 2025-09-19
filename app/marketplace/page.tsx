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
import { Label } from "@/components/ui/label"
import {
  Search,
  MapPin,
  Phone,
  Star,
  Wheat,
  User,
  LogOut,
  ShoppingCart,
  TrendingUp,
  Calendar,
  Package,
  MessageCircle,
  Heart,
  Share2,
  SlidersHorizontal,
} from "lucide-react"
import Link from "next/link"

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const farmers = [
    {
      id: 1,
      name: "Ram Kumar",
      location: "Punjab, India",
      phone: "9876543210",
      rating: 4.8,
      verified: true,
      joinedDate: "2023-01-15",
      totalSales: 245,
      crops: [
        {
          id: 1,
          name: "Premium Wheat",
          quantity: "500 kg",
          price: 25,
          quality: "Premium",
          harvestDate: "2024-04-15",
          description: "High-quality wheat grown using organic methods. Perfect for flour production.",
          images: ["/golden-wheat-field.png"],
          certifications: ["Organic", "Quality Assured"],
        },
        {
          id: 2,
          name: "Basmati Rice",
          quantity: "300 kg",
          price: 35,
          quality: "Grade A",
          harvestDate: "2024-03-20",
          description: "Aromatic basmati rice with long grains. Ideal for premium cooking.",
          images: ["/basmati-rice.png"],
          certifications: ["Export Quality"],
        },
      ],
    },
    {
      id: 2,
      name: "Sunita Devi",
      location: "Haryana, India",
      phone: "9876543211",
      rating: 4.6,
      verified: true,
      joinedDate: "2023-03-10",
      totalSales: 189,
      crops: [
        {
          id: 3,
          name: "Organic Cotton",
          quantity: "200 kg",
          price: 45,
          quality: "Premium",
          harvestDate: "2024-02-28",
          description: "100% organic cotton grown without pesticides. Perfect for textile industry.",
          images: ["/cotton-field.png"],
          certifications: ["Organic", "Fair Trade"],
        },
        {
          id: 4,
          name: "Mustard Seeds",
          quantity: "150 kg",
          price: 55,
          quality: "Organic",
          harvestDate: "2024-01-10",
          description: "High-quality mustard seeds with excellent oil content.",
          images: ["/mustard-seeds.png"],
          certifications: ["Organic"],
        },
      ],
    },
    {
      id: 4,
      name: "Mukesh Yadav",
      location: "Uttar Pradesh, India",
      phone: "9876543214",
      rating: 4.7,
      verified: true,
      joinedDate: "2022-11-05",
      totalSales: 312,
      crops: [
        {
          id: 7,
          name: "Fresh Potatoes",
          quantity: "1000 kg",
          price: 15,
          quality: "Grade A",
          harvestDate: "2024-05-01",
          description: "Fresh potatoes perfect for wholesale and retail markets.",
          images: ["/fresh-potatoes.png"],
          certifications: ["Quality Assured"],
        },
        {
          id: 8,
          name: "Red Tomatoes",
          quantity: "800 kg",
          price: 20,
          quality: "Fresh",
          harvestDate: "2024-04-25",
          description: "Vine-ripened tomatoes with excellent taste and shelf life.",
          images: ["/red-tomatoes.jpg"],
          certifications: ["Fresh Produce"],
        },
      ],
    },
    {
      id: 3,
      name: "Aman Dev",
      location: "Punjab, India",
      phone: "9876543211",
      rating: 4.6,
      verified: true,
      joinedDate: "2023-03-10",
      totalSales: 189,
      crops: [
        {
          id: 5,
          name: "Plant leaves mould compost",
          quantity: "200 kg",
          price: 105,
          quality: "Premium",
          harvestDate: "Not Applicable",
          description: "100% natural moulded leaves organic compost to nourish your crops naturally",
          images: ["/plantLeavesOrgFert.jpeg"],
          certifications: ["Organic", "Fair Trade"],
        },
        {
          id: 6,
          name: "Green-India Organic Compost (900g pack)",
          quantity: "500 Packets",
          price: 20,
          quality: "Organic",
          harvestDate: "Not Applicable",
          description: "Natural and nutrient-rich organic compost to enhance soil health and boost plant growth",
          images: ["/GreenIndiaComp.jpg"],
          certifications: ["Organic"],
        },
        {
          id: 9,
          name: "Dung Manure (Gobar ki khad)",
          quantity: "150 kg",
          price: 20,
          quality: "Organic",
          harvestDate: "Not Applicable",
          description: "High-quality natural dung manure to enrich your soil fertility",
          images: ["/dungManure.jpg"],
          certifications: ["Organic"],
        },
      ],
    },
    {
      id: 4,
      name: "Akash fertilizers",
      location: "Uttarakhand, India",
      phone: "9876543211",
      rating: 4.6,
      verified: true,
      joinedDate: "2023-03-10",
      totalSales: 189,
      crops: [
        {
          id: 10,
          name: "Urea (45kg sack)",
          quantity: "200 sack",
          price: 60,
          quality: "Premium",
          harvestDate: "2025-03-10",
          description: "urea, a widely used nitrogen fertilizer that provides essential nutrients for plant growth and development.",
          images: ["/Urea.jpeg"],
          certifications: ["Organic", "Fair Trade"],
        },
        {
          id: 11,
          name: "potash (50kg sack)",
          quantity: "500 sack",
          price: 180,
          quality: "Premium",
          harvestDate: "2025-03-10",
          description: "Potash, a vital potassium fertilizer that enhances plant health, improves drought resistance, and boosts crop yields.",
          images: ["/Potassium.jpg"],
          certifications: ["Organic"],
        },
        {
          id: 12,
          name: "White Banana desease control Powder (1kg pack)",
          quantity: "150 kg",
          price: 437,
          quality: "Magicgrow Premium",
          harvestDate: "2025-07-19",
          description: "White Banana disease control Powder is a specialized agricultural product designed to combat and manage white banana disease, a fungal infection that affects banana plants, leading ",
          images: ["/WhiteBananaDesPow.webp"],
          certifications: ["desease fertilizers"],
        },
      ],
    },
  ]
  const buyers = [
    {
      id: 1,
      name: "Ajay Patel",
      company: "Patel Agro Industries",
      location: "Gujarat, India",
      phone: "9876543212",
      rating: 4.9,
      verified: true,
      requirements: [
        { crop: "Wheat", quantity: "2000 kg", maxPrice: 28, urgency: "High" },
        { crop: "Rice", quantity: "1500 kg", maxPrice: 38, urgency: "Medium" },
      ],
    },
    {
      id: 2,
      name: "Meera Singh",
      company: "Fresh Foods Ltd",
      location: "Delhi, India",
      phone: "9876543215",
      rating: 4.8,
      verified: true,
      requirements: [
        { crop: "Tomatoes", quantity: "500 kg", maxPrice: 25, urgency: "High" },
        { crop: "Potatoes", quantity: "1000 kg", maxPrice: 18, urgency: "Low" },
      ],
    },
  ]

  const allCrops = farmers.flatMap((farmer) =>
    farmer.crops.map((crop) => ({
      ...crop,
      farmer: {
        id: farmer.id,
        name: farmer.name,
        location: farmer.location,
        phone: farmer.phone,
        rating: farmer.rating,
        verified: farmer.verified,
      },
    })),
  )

  const filteredCrops = allCrops.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.farmer.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || crop.name.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesLocation = selectedLocation === "all" || crop.farmer.location.includes(selectedLocation)
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" && crop.price < 25) ||
      (priceRange === "medium" && crop.price >= 25 && crop.price <= 40) ||
      (priceRange === "high" && crop.price > 40)

    return matchesSearch && matchesCategory && matchesLocation && matchesPrice
  })

  const sortedCrops = [...filteredCrops].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.farmer.rating - a.farmer.rating
      case "newest":
      default:
        return new Date(b.harvestDate).getTime() - new Date(a.harvestDate).getTime()
    }
  })

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
          <h1 className="text-3xl font-bold text-foreground mb-2">Agricultural Marketplace</h1>
          <p className="text-muted-foreground">Connect directly with farmers and buyers for fair trade</p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search crops, farmers, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:w-auto w-full">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-border">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Punjab">Punjab</SelectItem>
                    <SelectItem value="Haryana">Haryana</SelectItem>
                    <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="Gujarat">Gujarat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="price">Price Range</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="low">Under ₹25/kg</SelectItem>
                    <SelectItem value="medium">₹25-40/kg</SelectItem>
                    <SelectItem value="high">Above ₹40/kg</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sort">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="products">Products ({sortedCrops.length})</TabsTrigger>
            <TabsTrigger value="buyers">Buyers ({buyers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCrops.map((crop) => (
                <Card key={crop.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={crop.images[0] || "/placeholder.svg"}
                      alt={crop.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary" className="bg-background/90">
                        {crop.quality}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{crop.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <User className="h-3 w-3 mr-1" />
                          {crop.farmer.name}
                          {crop.farmer.verified && (
                            <Badge variant="outline" className="ml-2 text-xs">
                              Verified
                            </Badge>
                          )}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">₹{crop.price}/kg</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {crop.farmer.location}
                        </div>
                        <div className="flex items-center">
                          <Package className="h-3 w-3 mr-1" />
                          {crop.quantity}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-secondary mr-1" />
                          <span>{crop.farmer.rating}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(crop.harvestDate).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {crop.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{crop.name}</DialogTitle>
                              <DialogDescription>Product details and farmer information</DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <img
                                  src={crop.images[0] || "/placeholder.svg"}
                                  alt={crop.name}
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h3 className="font-semibold mb-2">Product Details</h3>
                                  <p className="text-sm text-muted-foreground mb-2">{crop.description}</p>
                                  <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                      <span>Price:</span>
                                      <span className="font-semibold">₹{crop.price}/kg</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Quantity:</span>
                                      <span>{crop.quantity}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Quality:</span>
                                      <span>{crop.quality}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Harvest Date:</span>
                                      <span>{new Date(crop.harvestDate).toLocaleDateString()}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-semibold mb-2">Farmer Details</h3>
                                  <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                      <span>Name:</span>
                                      <span>{crop.farmer.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Location:</span>
                                      <span>{crop.farmer.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Rating:</span>
                                      <span className="flex items-center">
                                        <Star className="h-3 w-3 text-secondary mr-1" />
                                        {crop.farmer.rating}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button className="flex-1">
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Order Now
                                  </Button>
                                  <Button variant="outline">
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Chat
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" className="flex-1">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Order
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedCrops.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="buyers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {buyers.map((buyer) => (
                <Card key={buyer.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          {buyer.name}
                          {buyer.verified && (
                            <Badge variant="outline" className="ml-2">
                              Verified
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="font-medium">{buyer.company}</CardDescription>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {buyer.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary mr-1" />
                          <span className="font-medium">{buyer.rating}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Phone className="h-3 w-3 mr-1" />
                          {buyer.phone}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Current Requirements:</h4>
                      {buyer.requirements.map((req, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{req.crop}</span>
                              <Badge
                                variant={
                                  req.urgency === "High"
                                    ? "destructive"
                                    : req.urgency === "Medium"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="text-xs"
                              >
                                {req.urgency}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{req.quantity} needed</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">Max ₹{req.maxPrice}/kg</p>
                            <div className="flex gap-1 mt-1">
                              <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-auto bg-transparent">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Quote
                              </Button>
                              <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-auto bg-transparent">
                                <MessageCircle className="h-3 w-3 mr-1" />
                                Chat
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
