import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wheat,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  Star,
  CheckCircle,
  Globe,
  BarChart3,
  Leaf,
  Zap,
  Award,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Wheat className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold text-foreground">AgriConnect</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                Marketplace
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline" >Login</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              🌱 Empowering Agriculture with Technology
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Transform Your
              <span className="text-primary block">Agricultural Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Connect farmers, buyers, and agricultural experts on one comprehensive platform. Get AI-powered insights,
              access government schemes, and trade efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8 py-4 h-auto">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-transparent">
                  Explore Marketplace
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>10,000+ Farmers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Verified Platform</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span>Pan-India Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Agricultural Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides cutting-edge tools and services to modernize your agricultural
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">AI Predictions By HARISATHI</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Get accurate crop yield predictions and disease detection using advanced AI technology
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Direct Marketplace</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Connect directly with buyers and sellers for fair pricing and transparent trading
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-chart-3/10 rounded-full w-fit group-hover:bg-chart-3/20 transition-colors">
                  <Shield className="h-8 w-8 text-chart-3" />
                </div>
                <CardTitle className="text-xl">Government Schemes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Access and apply for agricultural subsidies and government programs easily
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-chart-4/10 rounded-full w-fit group-hover:bg-chart-4/20 transition-colors">
                  <Smartphone className="h-8 w-8 text-chart-4" />
                </div>
                <CardTitle className="text-xl">Mobile First</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Multilingual support with Hindi, English, and regional languages
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">Active Farmers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">₹50Cr+</div>
              <div className="text-primary-foreground/80">Trade Volume</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Crop Varieties</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent Agricultural Marketplace
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with verified buyers and sellers across India for fair and transparent trading
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verified Traders</h3>
                  <p className="text-muted-foreground">
                    All buyers and sellers are verified to ensure safe and reliable transactions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Pricing</h3>
                  <p className="text-muted-foreground">
                    Get live market prices and trends to make informed trading decisions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-chart-3/10 rounded-lg">
                  <Zap className="h-6 w-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Transactions</h3>
                  <p className="text-muted-foreground">
                    Fast and secure payment processing with multiple payment options
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Featured Listings</h4>
                  <Badge variant="secondary">Live</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Leaf className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Premium Wheat</div>
                        <div className="text-sm text-muted-foreground">500 kg available</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">₹25/kg</div>
                      <div className="text-xs text-muted-foreground">Punjab</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Leaf className="h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-medium">Organic Rice</div>
                        <div className="text-sm text-muted-foreground">300 kg available</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-secondary">₹35/kg</div>
                      <div className="text-xs text-muted-foreground">Haryana</div>
                    </div>
                  </div>
                </div>

                <Link href="/marketplace">
                  <Button className="w-full">View All Listings</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Farmers Across India</h2>
            <p className="text-xl text-muted-foreground">See what our community has to say about AgriConnect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "AgriConnect helped me get better prices for my wheat crop. The AI predictions were spot-on and helped
                me plan my harvest perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">Farmer, Punjab</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "As a buyer, I love the transparency and quality assurance. I can directly connect with farmers and get
                the best produce."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Priya Sharma</div>
                  <div className="text-sm text-muted-foreground">Buyer, Gujarat</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The government schemes section saved me so much time. I was able to apply for subsidies directly
                through the platform."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-chart-3/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <div className="font-semibold">Amit Patel</div>
                  <div className="text-sm text-muted-foreground">Farmer, Maharashtra</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Agricultural Business?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of farmers, buyers, and agricultural professionals already using AgriConnect to grow their
              business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                  Join AgriConnect Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 h-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Wheat className="h-8 w-8 text-primary mr-2" />
                <span className="text-2xl font-bold">AgriConnect</span>
              </div>
              <p className="text-background/80 mb-6 max-w-md">
                Empowering agriculture with technology. Connect, trade, and grow with India's most trusted agricultural
                platform.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <a href="tel:895-751-8083" className="text-sm">+91 8957518083</a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a href="mailto:awneeshmishra433@gmail.com" className="text-sm">support@agriconnect.in</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link href="/marketplace" className="hover:text-primary transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/ai-predictions" className="hover:text-primary transition-colors">
                    AI Predictions
                  </Link>
                </li>
                <li>
                  <Link href="/government-schemes" className="hover:text-primary transition-colors">
                    Gov Schemes
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2025 AgriConnect. All rights reserved. Made with ❤️ for Indian farmers.</p>
            <br/>
            <b>by team "The RUBIX"</b>
          </div>
        </div>
      </footer>
    </div>
  )
}
