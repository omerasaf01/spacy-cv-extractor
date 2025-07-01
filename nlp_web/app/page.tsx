import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Brain, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CV Analiz AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Giriş Yap</Button>
            </Link>
            <Link href="/signup">
              <Button>Kayıt Ol</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            CV'lerinizi Yapay Zeka ile
            <span className="text-blue-600 block">Anında Analiz Edin</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            PDF formatındaki CV'leri yükleyin, yapay zeka teknolojimiz ile içeriklerini detaylı bir şekilde analiz edin
            ve yapılandırılmış veriler elde edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 py-3">
                Ücretsiz Başlayın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Demo İzle
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Neden CV Analiz AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>PDF Desteği</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Herhangi bir PDF formatındaki CV'yi yükleyin ve anında analiz edin.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Hızlı Analiz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Gelişmiş AI algoritmaları ile saniyeler içinde detaylı analiz sonuçları.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Güvenli</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Verileriniz güvenli bir şekilde işlenir ve gizliliğiniz korunur.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CV Analizi Artık Çok Kolay</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Otomatik Veri Çıkarma</h3>
                    <p className="text-gray-600">Kişisel bilgiler, deneyimler, beceriler otomatik olarak çıkarılır.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Yapılandırılmış Çıktı</h3>
                    <p className="text-gray-600">Analiz sonuçları düzenli ve kullanışlı formatta sunulur.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Çoklu Format Desteği</h3>
                    <p className="text-gray-600">Farklı CV formatları ve düzenlerini destekler.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="CV Analiz Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Hemen Başlayın</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            CV analiz sürecinizi hızlandırın ve yapay zeka teknolojisinin gücünü keşfedin.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Ücretsiz Hesap Oluştur
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6" />
            <span className="text-xl font-bold">CV Analiz AI</span>
          </div>
          <p className="text-gray-400">© 2024 CV Analiz AI. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
