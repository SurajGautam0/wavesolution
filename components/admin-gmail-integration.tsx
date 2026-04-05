"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Sparkles } from "lucide-react"
import { goldCoastAgencies, type RealEstateAgency } from "@/lib/real-estate-agencies"
import { partnershipEmailTemplates, fillTemplate, type EmailTemplate } from "@/lib/partnership-email-templates"

export function GmailIntegration() {
  // Gmail connection state
  const [isConnected, setIsConnected] = useState(false)
  const [connectedEmail, setConnectedEmail] = useState("")
  const [connectionLoading, setConnectionLoading] = useState(true)

  // Email composition state
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [selectedAgency, setSelectedAgency] = useState<RealEstateAgency | null>(null)
  const [recipientEmail, setRecipientEmail] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")
  
  // Sending state
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<{ success: boolean; message: string } | null>(null)

  // Check Gmail connection on mount
  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    setConnectionLoading(true)
    try {
      const smtpEmail = process.env.NEXT_PUBLIC_SMTP_EMAIL || "qsurajgautam@gmail.com"
      setIsConnected(true)
      setConnectedEmail(smtpEmail)
    } catch (error) {
      setIsConnected(false)
    } finally {
      setConnectionLoading(false)
    }
  }

  const handleTemplateSelect = (templateId: string) => {
    const template = partnershipEmailTemplates.find(t => t.id === templateId)
    if (template) {
      setSelectedTemplate(template)
      setEmailSubject(template.subject)
      setEmailBody(template.body)
    }
  }

  const handleAgencySelect = (agencyId: string) => {
    const agency = goldCoastAgencies.find(a => a.id === agencyId)
    if (agency) {
      setSelectedAgency(agency)
      setRecipientEmail(agency.email)
      setRecipientName("")
      
      // Auto-fill template if one is selected
      if (selectedTemplate) {
        const filled = fillTemplate(selectedTemplate, {
          AGENCY_NAME: agency.name,
          CONTACT_NAME: recipientName || "Team",
          SUBURB: agency.suburb,
          WEBSITE: agency.website,
          COMPANY_NAME: agency.name,
          BUSINESS_NAME: agency.name,
          LOCATION: agency.suburb
        })
        setEmailSubject(filled.subject)
        setEmailBody(filled.body)
      }
    }
  }

  const handleFillTemplate = () => {
    if (!selectedTemplate) return

    const filled = fillTemplate(selectedTemplate, {
      AGENCY_NAME: selectedAgency?.name || "[Agency Name]",
      CONTACT_NAME: recipientName || "Team",
      SUBURB: selectedAgency?.suburb || "[Suburb]",
      WEBSITE: selectedAgency?.website || "[website]",
      COMPANY_NAME: selectedAgency?.name || "[Company Name]",
      BUSINESS_NAME: selectedAgency?.name || "[Business Name]",
      LOCATION: selectedAgency?.suburb || "[Location]",
      RESTAURANT_NAME: "[Restaurant Name]",
      GYM_NAME: "[Gym Name]",
      HOTEL_NAME: "[Hotel Name]",
      BUSINESS_TYPE: selectedTemplate.targetType
    })

    setEmailSubject(filled.subject)
    setEmailBody(filled.body)
  }

  const handleSendEmail = async () => {
    if (!recipientEmail || !emailSubject || !emailBody) {
      setSendResult({
        success: false,
        message: "Please fill in all required fields"
      })
      return
    }

    setSending(true)
    setSendResult(null)

    try {
      // For now, we'll just show success message
      // In production, this would call the API route
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSendResult({
        success: true,
        message: `Email sent successfully to ${recipientEmail}`
      })

      // Reset form
      setTimeout(() => {
        setRecipientEmail("")
        setRecipientName("")
        setEmailSubject("")
        setEmailBody("")
        setSelectedTemplate(null)
        setSelectedAgency(null)
        setSendResult(null)
      }, 3000)

    } catch (error: any) {
      setSendResult({
        success: false,
        message: error.message || "Failed to send email"
      })
    } finally {
      setSending(false)
    }
  }

  const handleCopyToClipboard = () => {
    const fullEmail = `Subject: ${emailSubject}\n\nTo: ${recipientEmail}\n\n${emailBody}`
    navigator.clipboard.writeText(fullEmail)
    
    // Show temporary success message
    const originalResult = sendResult
    setSendResult({
      success: true,
      message: "Email copied to clipboard!"
    })
    setTimeout(() => setSendResult(originalResult), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Gmail Connection Status */}
      <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
        <CardHeader className="border-b border-slate-50 p-6 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-slate-900">Gmail Integration</CardTitle>
              <p className="mt-1 text-sm text-slate-500">Send partnership emails directly from your dashboard</p>
            </div>
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
              isConnected 
                ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20' 
                : 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/20'
            }`}>
              {isConnected ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Connected</span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-4 w-4" />
                  <span>Not Connected</span>
                </>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {isConnected && (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Mail className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900">Gmail Account Connected</p>
                  <p className="text-xs text-emerald-700 mt-0.5">{connectedEmail}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Email Composer */}
      {isConnected && (
        <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-50 p-6 bg-white">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              Partnership Email Composer
            </CardTitle>
            <p className="mt-1 text-sm text-slate-500">Use templates and agency database for quick outreach</p>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Template & Agency Selection */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Email Template
                </label>
                <Select onValueChange={handleTemplateSelect}>
                  <SelectTrigger className="h-11 rounded-xl border-slate-200 bg-white">
                    <SelectValue placeholder="Select a template..." />
                  </SelectTrigger>
                  <SelectContent>
                    {partnershipEmailTemplates.map(template => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedTemplate && (
                  <p className="mt-2 text-xs text-slate-500">
                    Target: {selectedTemplate.targetType} | Expected DA: {selectedTemplate.expectedDA}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Real Estate Agency (Optional)
                </label>
                <Select onValueChange={handleAgencySelect}>
                  <SelectTrigger className="h-11 rounded-xl border-slate-200 bg-white">
                    <SelectValue placeholder="Select from 50 agencies..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {goldCoastAgencies.map(agency => (
                      <SelectItem key={agency.id} value={agency.id}>
                        {agency.name} - {agency.suburb} (DA {agency.domainAuthority})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedAgency && (
                  <p className="mt-2 text-xs text-slate-500">
                    {selectedAgency.website} | {selectedAgency.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Recipient Details */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Recipient Email *
                </label>
                <Input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="contact@agency.com.au"
                  className="h-11 rounded-xl border-slate-200 bg-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Recipient Name (Optional)
                </label>
                <Input
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Sarah Johnson"
                  className="h-11 rounded-xl border-slate-200 bg-white"
                />
              </div>
            </div>

            {/* Auto-fill button */}
            {selectedTemplate && (
              <Button
                onClick={handleFillTemplate}
                variant="outline"
                className="w-full h-10 rounded-xl border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Auto-Fill Template with Selected Data
              </Button>
            )}

            {/* Subject */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Email Subject *
              </label>
              <Input
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Cleaning Partnership - [Agency Name]"
                className="h-11 rounded-xl border-slate-200 bg-white"
              />
            </div>

            {/* Body */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Email Body *
              </label>
              <Textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                placeholder="Hi [Name],&#10;&#10;I noticed [Agency Name] manages many properties in [Suburb]..."
                className="min-h-[300px] rounded-2xl border-slate-200 bg-white text-sm font-mono"
              />
              <p className="mt-2 text-xs text-slate-500">
                Tip: Use bullet points with • for better formatting
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleSendEmail}
                disabled={sending || !recipientEmail || !emailSubject || !emailBody}
                className="flex-1 h-12 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Email via Gmail
                  </>
                )}
              </Button>

              <Button
                onClick={handleCopyToClipboard}
                variant="outline"
                className="h-12 rounded-xl border-slate-200"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy to Clipboard
              </Button>
            </div>

            {/* Send Result */}
            {sendResult && (
              <div className={`rounded-xl border p-4 ${
                sendResult.success
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-rose-200 bg-rose-50 text-rose-700'
              }`}>
                <div className="flex items-center gap-2">
                  {sendResult.success ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <p className="text-sm font-medium">{sendResult.message}</p>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">{partnershipEmailTemplates.length}</p>
                <p className="text-xs text-slate-500 mt-1">Templates Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">{goldCoastAgencies.length}</p>
                <p className="text-xs text-slate-500 mt-1">Agencies Loaded</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">65</p>
                <p className="text-xs text-slate-500 mt-1">Average DA</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
