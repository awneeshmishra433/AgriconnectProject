"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Wheat,
  Brain,
  Camera,
  AlertTriangle,
  CheckCircle,
  Cloud,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Leaf,
  Bug,
  BarChart3,
  Upload,
  Zap,
  Target,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export default function AIPredictionsPage() {
  const [selectedCrop, setSelectedCrop] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [plantingDate, setPlantingDate] = useState("")
  const [fieldSize, setFieldSize] = useState("")
  const [predictionResult, setPredictionResult] = useState(null)
  const [diseaseImage, setDiseaseImage] = useState(null)
  const [diseaseResult, setDiseaseResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleCropPrediction = () => {
    setIsAnalyzing(true)
    // Simulate AI processing
    setTimeout(() => {
      setPredictionResult({
        crop: selectedCrop,
        expectedYield: "4.2 tons/hectare",
        confidence: 87,
        harvestDate: "2024-11-15",
        recommendations: [
          "Apply nitrogen fertilizer in week 3",
          "Monitor for pest activity in week 6-8",
          "Ensure adequate irrigation during flowering stage",
        ],
        riskFactors: [
          { factor: "Weather Risk", level: "Low", color: "green" },
          { factor: "Pest Risk", level: "Medium", color: "yellow" },
          { factor: "Disease Risk", level: "Low", color: "green" },
        ],
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const handleDiseaseDetection = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setDiseaseResult({
        disease: "Leaf Blight",
        confidence: 92,
        severity: "Moderate",
        treatment: "Apply copper-based fungicide immediately",
        prevention: "Improve air circulation and reduce leaf wetness",
        affectedArea: "15% of crop",
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const weatherData = {
    current: {
      temperature: 32,
      humidity: 65,
      windSpeed: 12,
      condition: "Sunny",
    },
    forecast: [
      { day: "Today", temp: "32°C", condition: "Sunny", rain: "0%" },
      { day: "Tomorrow", temp: "29°C", condition: "Cloudy", rain: "20%" },
      { day: "Day 3", temp: "27°C", condition: "Rainy", rain: "80%" },
      { day: "Day 4", temp: "30°C", condition: "Partly Cloudy", rain: "10%" },
      { day: "Day 5", temp: "33°C", condition: "Sunny", rain: "0%" },
    ],
  }

  const marketPredictions = [
    { crop: "Wheat", currentPrice: 25, predictedPrice: 28, change: "+12%", trend: "up" },
    { crop: "Rice", currentPrice: 35, predictedPrice: 33, change: "-6%", trend: "down" },
    { crop: "Cotton", currentPrice: 45, predictedPrice: 48, change: "+7%", trend: "up" },
    { crop: "Sugarcane", currentPrice: 18, predictedPrice: 19, change: "+6%", trend: "up" },
  ]

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
            <Brain className="h-8 w-8 text-primary mr-3" />
            AI Agricultural Services
          </h1>
          <p className="text-muted-foreground">
            Leverage artificial intelligence for smarter farming decisions and better crop management (Chatting and Voice assistant Ai<b> HARISATHI </b>coming soon)
          </p>
        </div>

        <Tabs defaultValue="predictions" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="predictions">Crop Predictions</TabsTrigger>
            <TabsTrigger value="disease">Disease Detection</TabsTrigger>
            <TabsTrigger value="weather">Weather Insights</TabsTrigger>
            <TabsTrigger value="market">Market Forecast</TabsTrigger>
            <TabsTrigger value="soil">Soil Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="predictions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Crop Yield Prediction
                  </CardTitle>
                  <CardDescription>
                    Get AI-powered yield predictions based on your crop, location, and farming practices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="crop">Select Crop</Label>
                      <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose crop" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wheat">Wheat</SelectItem>
                          <SelectItem value="rice">Rice</SelectItem>
                          <SelectItem value="cotton">Cotton</SelectItem>
                          <SelectItem value="sugarcane">Sugarcane</SelectItem>
                          <SelectItem value="corn">Corn</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="haryana">Haryana</SelectItem>
                          <SelectItem value="up">Uttar Pradesh</SelectItem>
                          <SelectItem value="gujarat">Gujarat</SelectItem>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="planting-date">Planting Date</Label>
                      <Input
                        id="planting-date"
                        type="date"
                        value={plantingDate}
                        onChange={(e) => setPlantingDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="field-size">Field Size (hectares)</Label>
                      <Input
                        id="field-size"
                        type="number"
                        placeholder="Enter field size"
                        value={fieldSize}
                        onChange={(e) => setFieldSize(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleCropPrediction}
                    disabled={!selectedCrop || !selectedLocation || isAnalyzing}
                    className="w-full"
                  >
                    {isAnalyzing ? (
                      <>
                        <Zap className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Brain className="h-4 w-4 mr-2" />
                        Generate Prediction
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {predictionResult && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Prediction Results</span>
                      <Badge variant="secondary">{predictionResult.confidence}% Confidence</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{predictionResult.expectedYield}</div>
                        <div className="text-sm text-muted-foreground">Expected Yield</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/10 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">
                          {new Date(predictionResult.harvestDate).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Harvest Date</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Risk Assessment</h4>
                      <div className="space-y-2">
                        {predictionResult.riskFactors.map((risk, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm">{risk.factor}</span>
                            <Badge
                              variant={
                                risk.color === "green"
                                  ? "outline"
                                  : risk.color === "yellow"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {risk.level}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">AI Recommendations</h4>
                      <ul className="space-y-1">
                        {predictionResult.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="disease" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="h-5 w-5 mr-2 text-primary" />
                    Disease Detection
                  </CardTitle>
                  <CardDescription>
                    Upload a photo of your crop to detect diseases and get treatment recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Drag and drop an image here, or click to select</p>
                    <Button variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Choose Image
                    </Button>
                  </div>
                  <Button onClick={handleDiseaseDetection} disabled={isAnalyzing} className="w-full">
                    {isAnalyzing ? (
                      <>
                        <Zap className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing Image...
                      </>
                    ) : (
                      <>
                        <Brain className="h-4 w-4 mr-2" />
                        Detect Disease
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {diseaseResult && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Detection Results</span>
                      <Badge variant="secondary">{diseaseResult.confidence}% Confidence</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>{diseaseResult.disease} Detected</AlertTitle>
                      <AlertDescription>
                        Severity: {diseaseResult.severity} | Affected Area: {diseaseResult.affectedArea}
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold mb-2 text-destructive">Immediate Treatment</h4>
                      <p className="text-sm bg-destructive/10 p-3 rounded-lg">{diseaseResult.treatment}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Prevention Measures</h4>
                      <p className="text-sm bg-muted p-3 rounded-lg">{diseaseResult.prevention}</p>
                    </div>

                    <Button className="w-full">
                      <Bug className="h-4 w-4 mr-2" />
                      Get Expert Consultation
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="weather" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cloud className="h-5 w-5 mr-2 text-primary" />
                    Current Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Thermometer className="h-8 w-8 text-red-500 mr-2" />
                      <div>
                        <p className="text-2xl font-bold">{weatherData.current.temperature}°C</p>
                        <p className="text-sm text-muted-foreground">Temperature</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Droplets className="h-8 w-8 text-blue-500 mr-2" />
                      <div>
                        <p className="text-2xl font-bold">{weatherData.current.humidity}%</p>
                        <p className="text-sm text-muted-foreground">Humidity</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Wind className="h-8 w-8 text-gray-500 mr-2" />
                      <div>
                        <p className="text-2xl font-bold">{weatherData.current.windSpeed} km/h</p>
                        <p className="text-sm text-muted-foreground">Wind Speed</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Sun className="h-8 w-8 text-yellow-500 mr-2" />
                      <div>
                        <p className="text-2xl font-bold">{weatherData.current.condition}</p>
                        <p className="text-sm text-muted-foreground">Condition</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>5-Day Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="font-medium">{day.day}</div>
                          <div className="text-sm text-muted-foreground">{day.condition}</div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-sm">{day.temp}</div>
                          <div className="text-sm text-blue-600">{day.rain} rain</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weather-Based Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Alert>
                    <Droplets className="h-4 w-4" />
                    <AlertTitle>Irrigation Alert</AlertTitle>
                    <AlertDescription>
                      Rain expected in 2 days. Consider reducing irrigation to prevent waterlogging.
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <Sun className="h-4 w-4" />
                    <AlertTitle>Heat Advisory</AlertTitle>
                    <AlertDescription>
                      High temperatures expected. Ensure adequate water supply for crops.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Market Price Predictions
                </CardTitle>
                <CardDescription>AI-powered price forecasts for the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketPredictions.map((prediction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Leaf className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-medium">{prediction.crop}</div>
                          <div className="text-sm text-muted-foreground">Current: ₹{prediction.currentPrice}/kg</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">₹{prediction.predictedPrice}/kg</div>
                        <div
                          className={`text-sm font-medium ${
                            prediction.trend === "up" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {prediction.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Demand Growth</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={75} className="w-20" />
                        <span className="text-sm font-medium">75%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Supply Stability</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={60} className="w-20" />
                        <span className="text-sm font-medium">60%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Price Volatility</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={40} className="w-20" />
                        <span className="text-sm font-medium">40%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Best Selling Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium">Cotton</div>
                        <div className="text-sm text-muted-foreground">Peak demand period</div>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Sell Now
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <div className="font-medium">Wheat</div>
                        <div className="text-sm text-muted-foreground">Price rising trend</div>
                      </div>
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                        Wait 1 Week
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <div className="font-medium">Rice</div>
                        <div className="text-sm text-muted-foreground">Oversupply expected</div>
                      </div>
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        Hold
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="soil" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-primary" />
                    Soil Health Analysis
                  </CardTitle>
                  <CardDescription>AI-powered soil analysis and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Soil Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select soil type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clay">Clay</SelectItem>
                          <SelectItem value="sandy">Sandy</SelectItem>
                          <SelectItem value="loamy">Loamy</SelectItem>
                          <SelectItem value="silt">Silt</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Field Location</Label>
                      <Input placeholder="Enter location" />
                    </div>
                  </div>
                  <Button className="w-full">
                    <Brain className="h-4 w-4 mr-2" />
                    Analyze Soil Health
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Soil Health Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">pH Level</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={70} className="w-20" />
                        <span className="text-sm font-medium">6.8</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Nitrogen</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={45} className="w-20" />
                        <span className="text-sm font-medium">Low</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Phosphorus</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={80} className="w-20" />
                        <span className="text-sm font-medium">High</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Potassium</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={60} className="w-20" />
                        <span className="text-sm font-medium">Medium</span>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Recommendation</AlertTitle>
                    <AlertDescription>
                      Apply nitrogen-rich fertilizer. Soil pH is optimal for most crops.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
