"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Upload, Check, AlertCircle } from "lucide-react";

export default function UploadLogoPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setStatus(null);
      setError(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setStatus(null);
    setError(null);

    const formData = new FormData();
    formData.append("logo", file);

    try {
      const res = await fetch("/api/upload-logo", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to upload logo");
      }

      setStatus("Logo uploaded successfully! The site will now display the updated emblem.");
    } catch (err: any) {
      setError(err.message || "An error occurred while uploading.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#171614] py-16 px-4 sm:px-8 dot-grid">
      <div className="max-w-xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase font-semibold tracking-wider text-[#6B665E] hover:text-[#171614] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span>Return to Agencies</span>
        </Link>

        <div className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-10 shadow-sm">
          <span className="text-[#C25E38] font-sans text-xs font-semibold tracking-widest uppercase block mb-2">
            Asset Management
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#171614] mb-3">
            Upload Brand Logo
          </h1>
          <p className="text-xs sm:text-sm text-[#6B665E] mb-8 leading-relaxed">
            Upload the primary emblem or wordmark for <strong>Agencies, by SHRI</strong>. This file will be served at <code className="bg-[#F7F5EE] px-2 py-0.5 rounded font-sans font-medium text-xs text-[#171614]">/logo.jpeg</code> across the entire website.
          </p>

          {/* Current Live Logo Preview */}
          <div className="mb-8 p-6 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8 flex flex-col items-center">
            <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#9E988D] mb-4">
              Current Active Logo
            </span>
            <div className="w-48 h-48 relative rounded-xl overflow-hidden border border-[#171614]/10 bg-[#FFFFFF] shadow-sm">
              <Image
                src="/logo.jpeg"
                alt="Current Logo"
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>
          </div>

          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-2">
                Select New Logo File
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-xs text-[#6B665E] file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#171614] file:text-[#FBF9F5] hover:file:bg-[#2E2C28] cursor-pointer"
              />
            </div>

            {preview && (
              <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#171614]/10 flex items-center gap-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden border border-[#171614]/10 bg-white">
                  <Image src={preview} alt="New Preview" fill className="object-contain" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#171614] block">
                    {file?.name}
                  </span>
                  <span className="text-[11px] font-sans text-[#6B665E]">
                    {file ? `${(file.size / 1024).toFixed(1)} KB` : ""}
                  </span>
                </div>
              </div>
            )}

            {status && (
              <div className="p-3.5 rounded-xl bg-[#EAF5EC] border border-[#2E7D32]/20 text-[#2E7D32] text-xs flex items-center gap-2">
                <Check size={14} />
                <span>{status}</span>
              </div>
            )}

            {error && (
              <div className="p-3.5 rounded-xl bg-[#FDF2F2] border border-[#C62828]/20 text-[#C62828] text-xs flex items-center gap-2">
                <AlertCircle size={14} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={!file || uploading}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#171614] disabled:opacity-40 text-[#FBF9F5] font-sans font-medium text-xs tracking-wider uppercase py-3.5 px-6 rounded-full hover:bg-[#2E2C28] transition-all cursor-pointer"
            >
              <Upload size={14} />
              <span>{uploading ? "Uploading..." : "Save Logo as /logo.jpeg"}</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
