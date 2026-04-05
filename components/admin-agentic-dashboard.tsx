"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Mail, 
  Link2, 
  BarChart3,
  Zap,
  Target,
  CheckCircle2,
  Clock,
  AlertCircle,
  Send,
  Plus,
  Eye,
  Edit,
  Trash2,
  RefreshCw
} from "lucide-react"

interface Backlink {
  id: string
  url: string
  domain: string
  da: number
  status: "pending" | "live" | "lost"
  contactPerson: string
  notes: string
  category: string
  createdAt: string
  updatedAt: string
}

interface Partnership {
  id: string
  businessName: string
  contactName: string
  email: string
  phone: string
  businessType: string
  status: "contacted" | "interested" | "agreed" | "active" | "listing-live" | "declined"
  notes: string
  website: string
  da: number
  createdAt: string
  emailsSent: number
  responsesReceived: number
}

interface SentEmail {
  id: string
  recipient: string
  recipientName: string
  subject: string
  body: string
  templateUsed: string
  status: "sent" | "failed" | "bounced" | "replied"
  sentAt: string
}

export default function AdminAgenticDashboard() {
  const [backlinks, setBacklinks] = useState<Backlink[]>([])
  const [partnerships, setPartnerships] = useState<Partnership[]>([])
  const [sentEmails, setSentEmails] = useState<SentEmail[]>([])
  const [loading, setLoading] = useState(false)
  const [aiCampaignLoading, setAiCampaignLoading] = useState(false)
  const [campaignResults, setCampaignResults] = useState<any>(null)

  // Metrics
  const totalBacklinks = backlinks.length
  const liveBacklinks = backlinks.filter(b => b.status === "live").length
  const avgDA = backlinks.length > 0 
    ? Math.round(backlinks.reduce((sum, b) => sum + b.da, 0) / backlinks.length) 
    : 0
  
  const activePartnerships = partnerships.filter(p => 
    ["active", "listing-live"].includes(p.status)
  ).length
  
  const emailsSent = sentEmails.length
  const emailResponseRate = sentEmails.length > 0
    ? Math.round((sentEmails.filter(e => e.status === "replied").length / sentEmails.length) * 100)
    : 0

  // Fetch data
  useEffect(() => {
    fetchBacklinks()
    fetchPartnerships()
    fetchSentEmails()
  }, [])

  const fetchBacklinks = async () => {
    try {
      const res = await fetch("/api/admin/backlinks")
      const data = await res.json()
      setBacklinks(data.backlinks || [])
    } catch (error) {
      console.error("Error fetching backlinks:", error)
    }
  }

  const fetchPartnerships = async () => {
    try {
      const res = await fetch("/api/admin/partnerships")
      const data = await res.json()
      setPartnerships(data.partnerships || [])
    } catch (error) {
      console.error("Error fetching partnerships:", error)
    }
  }

  const fetchSentEmails = async () => {
    try {
      const res = await fetch("/api/admin/sent-emails")
      const data = await res.json()
      setSentEmails(data.sentEmails || [])
    } catch (error) {
      console.error("Error fetching sent emails:", error)
    }
  }

  const generateAICampaign = async (type: string) => {
    setAiCampaignLoading(true)
    try {
      const res = await fetch("/api/admin/ai-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          campaignType: type,
          targetCount: 10,
        })
      })
      
      const data = await res.json()
      setCampaignResults(data)
    } catch (error) {
      console.error("Error generating AI campaign:", error)
    } finally {
      setAiCampaignLoading(false)
    }
  }

  const addBacklink = async (backlinkData: Partial<Backlink>) => {
    try {
      await fetch("/api/admin/backlinks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backlinkData)
      })
      fetchBacklinks()
    } catch (error) {
      console.error("Error adding backlink:", error)
    }
  }

  const addPartnership = async (partnershipData: Partial<Partnership>) => {
    try {
      await fetch("/api/admin/partnerships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnershipData)
      })
      fetchPartnerships()
    } catch (error) {
      console.error("Error adding partnership:", error)
    }
  }

  const updatePartnershipStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/partnerships", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status })
      })
      fetchPartnerships()
    } catch (error) {
      console.error("Error updating partnership:", error)
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Metrics Dashboard */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Backlinks</CardTitle>
            <Link2 className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{totalBacklinks}</div>
            <p className="text-xs text-purple-600">
              {liveBacklinks} live • {totalBacklinks - liveBacklinks} pending
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average DA</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{avgDA}</div>
            <p className="text-xs text-blue-600">
              Domain Authority Score
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Partnerships</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{activePartnerships}</div>
            <p className="text-xs text-green-600">
              {partnerships.length} total prospects
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email Performance</CardTitle>
            <Mail className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">{emailResponseRate}%</div>
            <p className="text-xs text-orange-600">
              {emailsSent} emails sent
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Campaign Generator */}
      <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <CardTitle>AI-Powered Campaign Generator</CardTitle>
          </div>
          <CardDescription>
            Let AI analyze your database and create personalized outreach campaigns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Button 
              onClick={() => generateAICampaign("real-estate")}
              disabled={aiCampaignLoading}
              className="h-24 flex-col gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Target className="h-6 w-6" />
              <span>Real Estate Campaign</span>
              <span className="text-xs opacity-80">50 agencies • Avg DA 65</span>
            </Button>

            <Button 
              onClick={() => generateAICampaign("directories")}
              disabled={aiCampaignLoading}
              className="h-24 flex-col gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              <BarChart3 className="h-6 w-6" />
              <span>Directory Submissions</span>
              <span className="text-xs opacity-80">48 directories • Avg DA 68</span>
            </Button>
          </div>

          {aiCampaignLoading && (
            <div className="flex items-center justify-center gap-2 py-8">
              <RefreshCw className="h-5 w-5 animate-spin text-purple-600" />
              <span className="text-sm text-gray-600">AI is analyzing targets and generating strategies...</span>
            </div>
          )}

          {campaignResults && (
            <div className="space-y-4 rounded-lg border-2 border-purple-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Campaign Generated!
                </h3>
                <Badge variant="secondary">{campaignResults.totalTargets} Targets</Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-3 rounded-lg bg-purple-50">
                  <div className="text-2xl font-bold text-purple-900">{campaignResults.totalTargets}</div>
                  <div className="text-xs text-gray-600">Total Targets</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-blue-50">
                  <div className="text-2xl font-bold text-blue-900">{campaignResults.estimatedDA}</div>
                  <div className="text-xs text-gray-600">Average DA</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-green-50">
                  <div className="text-2xl font-bold text-green-900">{campaignResults.estimatedReach}</div>
                  <div className="text-xs text-gray-600">Estimated Reach</div>
                </div>
              </div>

              {campaignResults.recommendations && campaignResults.recommendations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-700">AI Recommendations:</h4>
                  {campaignResults.recommendations.map((rec: any, idx: number) => (
                    <div key={idx} className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
                      <div className="font-medium text-sm text-purple-900">{rec.target}</div>
                      <div className="text-sm text-gray-700 mt-1">{rec.strategy}</div>
                    </div>
                  ))}
                </div>
              )}

              <Button className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Start Campaign ({campaignResults.totalTargets} emails)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="partnerships" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="partnerships" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Partnerships
          </TabsTrigger>
          <TabsTrigger value="backlinks" className="flex items-center gap-2">
            <Link2 className="h-4 w-4" />
            Backlinks
          </TabsTrigger>
          <TabsTrigger value="emails" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Sent Emails
          </TabsTrigger>
        </TabsList>

        {/* Partnerships Tab */}
        <TabsContent value="partnerships" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Partnership CRM</CardTitle>
                  <CardDescription>Track and manage all your business partnerships</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add Partnership
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Partnership</DialogTitle>
                      <DialogDescription>Enter partnership details</DialogDescription>
                    </DialogHeader>
                    <AddPartnershipForm onSubmit={addPartnership} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Business</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>DA</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Emails</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {partnerships.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                        No partnerships yet. Generate an AI campaign to get started!
                      </TableCell>
                    </TableRow>
                  ) : (
                    partnerships.map((partnership) => (
                      <TableRow key={partnership.id}>
                        <TableCell className="font-medium">{partnership.businessName}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{partnership.contactName}</div>
                            <div className="text-gray-500">{partnership.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{partnership.businessType}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{partnership.da}</Badge>
                        </TableCell>
                        <TableCell>
                          <Select 
                            value={partnership.status}
                            onValueChange={(value) => updatePartnershipStatus(partnership.id, value)}
                          >
                            <SelectTrigger className="w-[140px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="interested">Interested</SelectItem>
                              <SelectItem value="agreed">Agreed</SelectItem>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="listing-live">Listing Live</SelectItem>
                              <SelectItem value="declined">Declined</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{partnership.emailsSent} sent</div>
                            <div className="text-green-600">{partnership.responsesReceived} replied</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Backlinks Tab */}
        <TabsContent value="backlinks" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Backlink Tracker</CardTitle>
                  <CardDescription>Monitor all your backlinks and their status</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add Backlink
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Backlink</DialogTitle>
                      <DialogDescription>Track a new backlink</DialogDescription>
                    </DialogHeader>
                    <AddBacklinkForm onSubmit={addBacklink} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>DA</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {backlinks.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                        No backlinks tracked yet. Add your first backlink!
                      </TableCell>
                    </TableRow>
                  ) : (
                    backlinks.map((backlink) => (
                      <TableRow key={backlink.id}>
                        <TableCell className="font-medium">{backlink.domain}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={backlink.da >= 70 ? "default" : backlink.da >= 50 ? "secondary" : "outline"}
                          >
                            DA {backlink.da}
                          </Badge>
                        </TableCell>
                        <TableCell>{backlink.category}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              backlink.status === "live" ? "default" :
                              backlink.status === "pending" ? "secondary" :
                              "destructive"
                            }
                          >
                            {backlink.status === "live" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                            {backlink.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                            {backlink.status === "lost" && <AlertCircle className="h-3 w-3 mr-1" />}
                            {backlink.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{backlink.contactPerson || "-"}</TableCell>
                        <TableCell className="text-sm text-gray-500">
                          {new Date(backlink.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sent Emails Tab */}
        <TabsContent value="emails" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sent Emails Tracker</CardTitle>
              <CardDescription>View all outreach emails sent through the dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Template</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sent Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sentEmails.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-gray-500 py-8">
                        No emails sent yet. Start a campaign to begin outreach!
                      </TableCell>
                    </TableRow>
                  ) : (
                    sentEmails.map((email) => (
                      <TableRow key={email.id}>
                        <TableCell>
                          <div className="text-sm">
                            <div className="font-medium">{email.recipientName || email.recipient}</div>
                            <div className="text-gray-500">{email.recipient}</div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{email.subject}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{email.templateUsed}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              email.status === "replied" ? "default" :
                              email.status === "sent" ? "secondary" :
                              "destructive"
                            }
                          >
                            {email.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-500">
                          {new Date(email.sentAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Add Backlink Form Component
function AddBacklinkForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    url: "",
    domain: "",
    da: 0,
    status: "pending",
    contactPerson: "",
    notes: "",
    category: "other"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>URL</Label>
        <Input 
          value={formData.url}
          onChange={(e) => setFormData({...formData, url: e.target.value})}
          placeholder="https://example.com/your-link"
          required
        />
      </div>
      <div>
        <Label>Domain</Label>
        <Input 
          value={formData.domain}
          onChange={(e) => setFormData({...formData, domain: e.target.value})}
          placeholder="example.com"
          required
        />
      </div>
      <div>
        <Label>Domain Authority (DA)</Label>
        <Input 
          type="number"
          value={formData.da}
          onChange={(e) => setFormData({...formData, da: parseInt(e.target.value)})}
          min="0"
          max="100"
        />
      </div>
      <div>
        <Label>Contact Person</Label>
        <Input 
          value={formData.contactPerson}
          onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
          placeholder="John Smith"
        />
      </div>
      <div>
        <Label>Notes</Label>
        <Textarea 
          value={formData.notes}
          onChange={(e) => setFormData({...formData, notes: e.target.value})}
          placeholder="Any additional notes..."
        />
      </div>
      <Button type="submit" className="w-full">Add Backlink</Button>
    </form>
  )
}

// Add Partnership Form Component
function AddPartnershipForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "other",
    status: "contacted",
    notes: "",
    website: "",
    da: 0
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Business Name</Label>
        <Input 
          value={formData.businessName}
          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
          placeholder="Ray White Southport"
          required
        />
      </div>
      <div>
        <Label>Contact Name</Label>
        <Input 
          value={formData.contactName}
          onChange={(e) => setFormData({...formData, contactName: e.target.value})}
          placeholder="John Smith"
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input 
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="contact@business.com"
          required
        />
      </div>
      <div>
        <Label>Phone</Label>
        <Input 
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="(07) 1234 5678"
        />
      </div>
      <div>
        <Label>Website</Label>
        <Input 
          value={formData.website}
          onChange={(e) => setFormData({...formData, website: e.target.value})}
          placeholder="https://business.com"
        />
      </div>
      <div>
        <Label>DA Score</Label>
        <Input 
          type="number"
          value={formData.da}
          onChange={(e) => setFormData({...formData, da: parseInt(e.target.value)})}
          min="0"
          max="100"
        />
      </div>
      <Button type="submit" className="w-full">Add Partnership</Button>
    </form>
  )
}
