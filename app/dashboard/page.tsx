"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Wheat,
  TrendingUp,
  ShoppingCart,
  Cloud,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState({
    name: "Ram Kumar",
    phone: "9876543210",
    role: "farmer",
    location: "Punjab, India",
    crops: ["Wheat", "Rice", "Sugarcane"],
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <Wheat className="h-8 w-8 text-green-600 mr-2" />
                  <span className="text-2xl font-bold text-green-800">AgriConnect</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{currentUser.name}</span>
                <Badge variant="secondary">{currentUser.role}</Badge>
              </div>
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
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Dashboard</TabsTrigger>
            <TabsTrigger value="marketplace">
              <Link href="/marketplace" className="flex items-center">
                Marketplace
              </Link>
            </TabsTrigger>
            <TabsTrigger value="ai">
              <Link href="/ai-predictions" className="flex items-center">
                AI Services
              </Link>
            </TabsTrigger>
            <TabsTrigger value="schemes">
              <Link href="/government-schemes" className="flex items-center">
                Gov Schemes
              </Link>
            </TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Weather Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="h-5 w-5 mr-2" />
                  Weather Alert - {currentUser.location}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <Thermometer className="h-8 w-8 text-red-500 mr-2" />
                    <div>
                      <p className="text-2xl font-bold">32°C</p>
                      <p className="text-sm text-gray-600">Temperature</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="h-8 w-8 text-blue-500 mr-2" />
                    <div>
                      <p className="text-2xl font-bold">65%</p>
                      <p className="text-sm text-gray-600">Humidity</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Wind className="h-8 w-8 text-gray-500 mr-2" />
                    <div>
                      <p className="text-2xl font-bold">12 km/h</p>
                      <p className="text-sm text-gray-600">Wind Speed</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Sun className="h-8 w-8 text-yellow-500 mr-2" />
                    <div>
                      <p className="text-2xl font-bold">Sunny</p>
                      <p className="text-sm text-gray-600">Condition</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Crops</CardTitle>
                  <Wheat className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{currentUser.crops.length}</div>
                  <p className="text-xs text-muted-foreground">{currentUser.crops.join(", ")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Orders</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹2,45,000</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Wheat crop prediction completed</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-yellow-500 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New buyer inquiry for Rice</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Disease alert for Sugarcane crop</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with other farmers and agricultural experts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Best practices for wheat irrigation</h4>
                      <Badge variant="secondary">Discussion</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Looking for advice on optimal irrigation schedule for wheat in Punjab region...
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      <span>Rajesh Singh • 2 hours ago • 5 replies</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Organic fertilizer recommendations</h4>
                      <Badge variant="secondary">Question</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Can anyone suggest good organic fertilizers for rice cultivation?
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      <span>Priya Sharma • 4 hours ago • 8 replies</span>
                    </div>
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
