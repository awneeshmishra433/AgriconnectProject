"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Users,
  MessageCircle,
  ThumbsUp,
  Share2,
  BookOpen,
  Video,
  Calendar,
  MapPin,
  Star,
  Award,
  LogOut,
  Plus,
  Search,
  Filter,
  Eye,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const [newPost, setNewPost] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const forumPosts = [
    {
      id: 1,
      title: "Best practices for wheat irrigation in Punjab",
      content: "Looking for advice on optimal irrigation schedule for wheat in Punjab region. What's working for you?",
      author: "Rajesh Singh",
      avatar: "/placeholder.svg",
      location: "Punjab, India",
      category: "Irrigation",
      likes: 24,
      replies: 8,
      views: 156,
      timeAgo: "2 hours ago",
      tags: ["wheat", "irrigation", "punjab"],
      isExpert: false,
    },
    {
      id: 2,
      title: "Organic fertilizer recommendations for rice cultivation",
      content:
        "Can anyone suggest good organic fertilizers for rice? Looking for sustainable options that improve yield.",
      author: "Dr. Priya Sharma",
      avatar: "/placeholder.svg",
      location: "Haryana, India",
      category: "Fertilizers",
      likes: 31,
      replies: 12,
      views: 203,
      timeAgo: "4 hours ago",
      tags: ["rice", "organic", "fertilizer"],
      isExpert: true,
    },
    {
      id: 3,
      title: "Pest control for cotton crops - need urgent help",
      content:
        "Noticed some unusual pest activity in my cotton field. Attaching photos. Any suggestions for treatment?",
      author: "Mukesh Patel",
      avatar: "/placeholder.svg",
      location: "Gujarat, India",
      category: "Pest Control",
      likes: 18,
      replies: 15,
      views: 89,
      timeAgo: "6 hours ago",
      tags: ["cotton", "pest", "urgent"],
      isExpert: false,
    },
    {
      id: 4,
      title: "Market prices for sugarcane - when to sell?",
      content: "Current sugarcane prices seem low. Should I wait or sell now? What are your thoughts on market trends?",
      author: "Sunita Devi",
      avatar: "/placeholder.svg",
      location: "Uttar Pradesh, India",
      category: "Market Trends",
      likes: 27,
      replies: 9,
      views: 134,
      timeAgo: "1 day ago",
      tags: ["sugarcane", "market", "pricing"],
      isExpert: false,
    },
  ]

  const experts = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Soil Science",
      experience: "15 years",
      rating: 4.9,
      consultations: 234,
      location: "IARI, New Delhi",
      avatar: "/placeholder.svg",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Meera Patel",
      specialization: "Crop Protection",
      experience: "12 years",
      rating: 4.8,
      consultations: 189,
      location: "Gujarat Agricultural University",
      avatar: "/placeholder.svg",
      available: false,
    },
    {
      id: 3,
      name: "Prof. Amit Singh",
      specialization: "Agricultural Economics",
      experience: "20 years",
      rating: 4.9,
      consultations: 312,
      location: "Punjab Agricultural University",
      avatar: "/placeholder.svg",
      available: true,
    },
  ]

  const knowledgeArticles = [
    {
      id: 1,
      title: "Complete Guide to Organic Farming",
      description: "Learn sustainable farming practices that improve soil health and crop yield",
      author: "Dr. Priya Sharma",
      readTime: "8 min read",
      category: "Organic Farming",
      likes: 145,
      views: 1234,
      publishedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Water Management Techniques for Drought-Prone Areas",
      description: "Effective irrigation strategies to maximize water efficiency in challenging conditions",
      author: "Prof. Rajesh Kumar",
      readTime: "12 min read",
      category: "Water Management",
      likes: 98,
      views: 876,
      publishedDate: "2024-01-10",
    },
    {
      id: 3,
      title: "Integrated Pest Management for Cotton",
      description: "Comprehensive approach to pest control that reduces chemical dependency",
      author: "Dr. Meera Patel",
      readTime: "10 min read",
      category: "Pest Management",
      likes: 76,
      views: 654,
      publishedDate: "2024-01-08",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Sustainable Agriculture Workshop",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "Punjab Agricultural University",
      type: "Workshop",
      attendees: 45,
      maxAttendees: 100,
    },
    {
      id: 2,
      title: "Crop Insurance Awareness Seminar",
      date: "2024-02-20",
      time: "2:00 PM",
      location: "Online",
      type: "Webinar",
      attendees: 123,
      maxAttendees: 500,
    },
    {
      id: 3,
      title: "Organic Farming Certification Training",
      date: "2024-02-25",
      time: "9:00 AM",
      location: "Haryana Agricultural University",
      type: "Training",
      attendees: 28,
      maxAttendees: 50,
    },
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
            <Users className="h-8 w-8 text-primary mr-3" />
            Agricultural Community
          </h1>
          <p className="text-muted-foreground">
            Connect with farmers, experts, and agricultural professionals. Share knowledge and grow together.
          </p>
        </div>

        <Tabs defaultValue="forum" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="forum">Community Forum</TabsTrigger>
            <TabsTrigger value="experts">Expert Consultation</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
            <TabsTrigger value="events">Events & Training</TabsTrigger>
          </TabsList>

          <TabsContent value="forum" className="space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Start a Discussion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="post-title">Title</Label>
                  <Input id="post-title" placeholder="What would you like to discuss?" />
                </div>
                <div>
                  <Label htmlFor="post-content">Content</Label>
                  <Textarea
                    id="post-content"
                    placeholder="Share your question, experience, or knowledge..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <Button>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Post Discussion
                  </Button>
                  <Button variant="outline">Add Photos</Button>
                </div>
              </CardContent>
            </Card>

            {/* Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search discussions..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{post.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                {post.author}
                                {post.isExpert && (
                                  <Award className="h-4 w-4 ml-1 text-primary" title="Verified Expert" />
                                )}
                              </span>
                              <span>•</span>
                              <MapPin className="h-3 w-3" />
                              <span>{post.location}</span>
                              <span>•</span>
                              <Clock className="h-3 w-3" />
                              <span>{post.timeAgo}</span>
                            </div>
                          </div>
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>

                        <p className="text-muted-foreground">{post.content}</p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <button className="flex items-center space-x-1 hover:text-primary">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-primary">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.replies} replies</span>
                            </button>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views} views</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {experts.map((expert) => (
                <Card key={expert.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={expert.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="flex items-center justify-center">
                      {expert.name}
                      <Award className="h-4 w-4 ml-2 text-primary" />
                    </CardTitle>
                    <CardDescription>{expert.specialization}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{expert.rating}</span>
                        <span className="text-muted-foreground ml-1">({expert.consultations} consultations)</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {expert.location}
                      </div>
                      <div className="text-sm text-muted-foreground">{expert.experience} experience</div>
                    </div>

                    <div className="flex items-center justify-center">
                      <Badge
                        variant={expert.available ? "default" : "secondary"}
                        className={expert.available ? "bg-green-600" : ""}
                      >
                        {expert.available ? "Available Now" : "Busy"}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{expert.name}</DialogTitle>
                            <DialogDescription>Expert Profile and Consultation Details</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="text-center">
                              <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src={expert.avatar || "/placeholder.svg"} />
                                <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <h3 className="text-xl font-semibold">{expert.name}</h3>
                              <p className="text-muted-foreground">{expert.specialization}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="text-2xl font-bold text-primary">{expert.rating}</div>
                                <div className="text-sm text-muted-foreground">Rating</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">{expert.consultations}</div>
                                <div className="text-sm text-muted-foreground">Consultations</div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button className="flex-1" disabled={!expert.available}>
                                <Video className="h-4 w-4 mr-2" />
                                Video Call
                              </Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Chat
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" disabled={!expert.available}>
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Consult
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="knowledge" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {knowledgeArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <span className="text-muted-foreground">
                        {new Date(article.publishedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <Button className="w-full">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>
                          {event.attendees}/{event.maxAttendees} registered
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                    <Button className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Register Now
                    </Button>
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
