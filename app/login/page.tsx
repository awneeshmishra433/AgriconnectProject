"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wheat } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const router = useRouter()

  const dummyAccounts = [
    {
      phone: "9876543210",
      name: "Ram Kumar",
      role: "farmer",
      location: "Punjab, India",
      crops: ["Wheat", "Rice", "Sugarcane"],
    },
    {
      phone: "9876543211",
      name: "Sunita Devi",
      role: "farmer",
      location: "Haryana, India",
      crops: ["Cotton", "Mustard"],
    },
    {
      phone: "9876543212",
      name: "Ajay Patel",
      role: "buyer",
      location: "Gujarat, India",
      company: "Patel Agro Industries",
    },
    {
      phone: "9876543213",
      name: "Priya Sharma",
      role: "agent",
      location: "Rajasthan, India",
      agency: "Rural Connect Services",
    },
    {
      phone: "9876543214",
      name: "Mukesh Yadav",
      role: "farmer",
      location: "Uttar Pradesh, India",
      crops: ["Potato", "Tomato", "Onion"],
    },
  ]

  const handleSendOtp = () => {
    const account = dummyAccounts.find((acc) => acc.phone === phone)
    if (account) {
      setShowOtp(true)
    } else {
      alert("Phone number not found in demo accounts")
    }
  }

  const handleLogin = () => {
    if (otp === "1234") {
      // Store user data in localStorage for demo
      const account = dummyAccounts.find((acc) => acc.phone === phone)
      if (account) {
        localStorage.setItem("currentUser", JSON.stringify(account))
        router.push("/dashboard")
      }
    } else {
      alert("Invalid OTP. Use 1234 for demo")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Link href="/">
              <div className="flex items-center">
                <Wheat className="h-12 w-12 text-green-600 mr-2" />
                <CardTitle className="text-2xl text-green-800">AgriConnect</CardTitle>
              </div>
            </Link>
          </div>
          <CardDescription>Enter your phone number to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-100 p-3 rounded-lg text-sm">
            <p className="font-medium mb-2">Demo Accounts:</p>
            <div className="space-y-1 text-xs">
              <p>👨‍🌾 Farmer: 9876543210 (Ram Kumar)</p>
              <p>👩‍🌾 Farmer: 9876543211 (Sunita Devi)</p>
              <p>🏢 Buyer: 9876543212 (Ajay Patel)</p>
              <p>👥 Agent: 9876543213 (Priya Sharma)</p>
              <p>👨‍🌾 Farmer: 9876543214 (Mukesh Yadav)</p>
              <p className="mt-2 font-medium">OTP: 1234</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {!showOtp ? (
            <Button onClick={handleSendOtp} className="w-full" disabled={!phone}>
              Send OTP
            </Button>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter 4-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={4}
                />
              </div>
              <Button
                onClick={handleLogin}
                className="w-full cursor-pointer disabled:cursor-not-allowed"
                disabled={!otp}
              >
                Login
              </Button>

             
            </>
          )}

          <div className="text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-green-600">
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
