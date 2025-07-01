"use client";

import type React from "react";

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Trash2,
  LogOut,
} from "lucide-react";

interface CVData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
  }>;
  skills: string[];
}

export default function DashboardPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 70) {
          clearInterval(progressInterval);
          setIsAnalyzing(false);
          // Mock CV data
          const formData = new FormData();
          formData.append("file", uploadedFile);

          axios
            .post("http://127.0.0.1:8000/uploads/cv", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res: any) => setCvData(res.data || res))
            .catch((err: any) => console.error(err));

          return 100;
        }
        return prev + 50;
      });
    }, 200);
  };

  const handleReset = () => {
    setUploadedFile(null);
    setCvData(null);
    setAnalysisProgress(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              CV Analiz AI
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Hoş geldiniz, Kullanıcı
            </span>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  CV Yükle
                </CardTitle>
                <CardDescription>
                  PDF formatında CV'nizi yükleyin ve analiz edin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cv-upload">PDF Dosyası Seçin</Label>
                  <Input
                    id="cv-upload"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    disabled={isAnalyzing}
                  />
                </div>

                {uploadedFile && (
                  <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">
                      {uploadedFile.name}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleReset}
                      disabled={isAnalyzing}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Analiz ediliyor...</span>
                      <span>{analysisProgress}%</span>
                    </div>
                    <Progress value={analysisProgress} />
                  </div>
                )}

                <Button
                  onClick={handleAnalyze}
                  disabled={!uploadedFile || isAnalyzing}
                  className="w-full"
                >
                  {isAnalyzing ? "Analiz Ediliyor..." : "Analiz Et"}
                </Button>

                {cvData && (
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Sonuçları İndir
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {cvData ? (
              <div className="space-y-6">
                {/* Personal Information */}
                {cvData.personalInfo && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Kişisel Bilgiler
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {cvData.personalInfo.name && (
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">Ad Soyad:</span>
                            <span>{cvData.personalInfo.name}</span>
                          </div>
                        )}
                        {cvData.personalInfo.email && (
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">E-posta:</span>
                            <span>{cvData.personalInfo.email}</span>
                          </div>
                        )}
                        {cvData.personalInfo.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">Telefon:</span>
                            <span>{cvData.personalInfo.phone}</span>
                          </div>
                        )}
                        {cvData.personalInfo.address && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">Adres:</span>
                            <span>{cvData.personalInfo.address}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Summary */}
                {cvData.summary && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Özet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{cvData.summary}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Experience */}
                {cvData.experience && cvData.experience.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Briefcase className="h-5 w-5 mr-2" />
                        İş Deneyimi
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {cvData.experience.map((exp, index) => (
                        <div key={index}>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              {exp.title && (
                                <h4 className="font-semibold">{exp.title}</h4>
                              )}
                              {exp.company && (
                                <p className="text-blue-600 font-medium">
                                  {exp.company}
                                </p>
                              )}
                            </div>
                            {exp.duration && (
                              <Badge variant="secondary">{exp.duration}</Badge>
                            )}
                          </div>
                          {exp.description && (
                            <p className="text-gray-600 text-sm">
                              {exp.description}
                            </p>
                          )}
                          {index < cvData.experience.length - 1 && (
                            <Separator className="mt-4" />
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Education */}
                {cvData.education && cvData.education.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        Eğitim
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {cvData.education.map((edu, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between"
                        >
                          <div>
                            {edu.degree && (
                              <h4 className="font-semibold">{edu.degree}</h4>
                            )}
                            {edu.school && (
                              <p className="text-blue-600">{edu.school}</p>
                            )}
                          </div>
                          {edu.year && (
                            <Badge variant="outline">{edu.year}</Badge>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Skills */}
                {cvData.skills && cvData.skills.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Beceriler
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {cvData.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    CV Analizi Bekleniyor
                  </h3>
                  <p className="text-gray-500">
                    PDF formatında bir CV yükleyin ve analiz etmek için butona
                    tıklayın
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
