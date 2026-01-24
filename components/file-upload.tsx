"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { uploadFile } from "@/lib/firebase/db"

interface FileUploadProps {
  onUpload: (url: string) => void
  defaultValue?: string
  accept?: string
  maxSize?: number // in MB
}

export function FileUpload({ onUpload, defaultValue, accept = "image/*", maxSize = 5 }: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(defaultValue || null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`)
      return
    }

    // Create a preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Upload the file
    setUploading(true)
    setError(null)

    try {
      // Determine the path based on file type
      const fileType = file.type.split("/")[0]
      const path = `uploads/${fileType}`

      // Upload to Firebase Storage
      const fileUrl = await uploadFile(file, path)
      onUpload(fileUrl)
    } catch (err: any) {
      console.error("Upload error:", err)
      setError(err.message || "An error occurred during upload")
      setPreview(null)
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = () => {
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onUpload("")
  }

  return (
    <div className="space-y-2">
      {preview ? (
        <div className="relative rounded-md overflow-hidden">
          <div className="aspect-video relative bg-muted">
            <Image src={preview.startsWith("data:") ? preview : preview} alt="Preview" fill className="object-cover" />
          </div>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed border-muted-foreground/25 rounded-md p-8 text-center hover:border-muted-foreground/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {uploading ? "Uploading..." : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-muted-foreground">
              {accept.replace("/*", " files")} (Max {maxSize}MB)
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </div>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

