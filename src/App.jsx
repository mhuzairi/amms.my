import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Plane,
  Target,
  DollarSign,
  Clock,
  Award,
  Globe,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import dashboardImage from './assets/EDOJHy2OKP5N.png'
import teamImage from './assets/vZm3xClJdtJ4.jpg'
import aviationTeamImage from './assets/an1nwtQlgmPN.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)

  const metrics = [
    { value: '$5.4B', label: 'Market Size', icon: DollarSign },
    { value: '35%', label: 'Increased Uptime', icon: TrendingUp },
    { value: '28%', label: 'Cost Reduction', icon: BarChart3 },
    { value: '92%', label: 'Customer Retention', icon: Award }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">AMMS Aviationware</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#opportunity" className="text-slate-600 hover:text-blue-600 transition-colors">Investment</a>
              <a href="#product" className="text-slate-600 hover:text-blue-600 transition-colors">Product</a>
              <a href="#market" className="text-slate-600 hover:text-blue-600 transition-colors">Market</a>
              <a href="#team" className="text-slate-600 hover:text-blue-600 transition-colors">Team</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Investors</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <a href="#opportunity" className="text-slate-600 hover:text-blue-600 transition-colors">Investment</a>
                <a href="#product" className="text-slate-600 hover:text-blue-600 transition-colors">Product</a>
                <a href="#market" className="text-slate-600 hover:text-blue-600 transition-colors">Market</a>
                <a href="#team" className="text-slate-600 hover:text-blue-600 transition-colors">Team</a>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Contact Investors</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Investment Opportunity
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Revolutionizing
                  <span className="text-blue-600"> Aviation Maintenance</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Digital transformation for streamlined aircraft maintenance operations. 
                  Seeking $150K to capture our share of the $5.4B aviation MRO market.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="text-2xl font-bold text-slate-900">3.2x</span>
                  </div>
                  <p className="text-sm text-slate-600">Projected ROI</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-2xl font-bold text-slate-900">24-36</span>
                  </div>
                  <p className="text-sm text-slate-600">Exit Timeline (months)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View Investment Deck
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Meeting
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
                <img 
                  src={dashboardImage} 
                  alt="AMMS Aviation Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-slate-200">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-lg font-bold text-slate-900">{metrics[currentMetric].value}</div>
                    <div className="text-xs text-slate-600">{metrics[currentMetric].label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section id="opportunity" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Investment Opportunity
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join us in capturing a significant share of the $5.4 billion aviation MRO software market
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span>Investment Sought</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">$150,000</div>
                <p className="text-slate-600">12-month expansion funding</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <span>Projected Revenue</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.7M</div>
                <p className="text-slate-600">By Year 3</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-purple-600" />
                  <span>Gross Margin</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">68%</div>
                <p className="text-slate-600">High-margin SaaS model</p>
              </CardContent>
            </Card>
          </div>

          {/* Use of Funds */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Use of Funds</CardTitle>
              <CardDescription>Strategic allocation for maximum growth impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Product Development</span>
                    <span className="text-slate-600">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  <p className="text-sm text-slate-600 mt-1">Enhance AI capabilities, expand mobile features</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Team Expansion</span>
                    <span className="text-slate-600">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                  <p className="text-sm text-slate-600 mt-1">Hire key technical and sales talent</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Marketing & Sales</span>
                    <span className="text-slate-600">20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                  <p className="text-sm text-slate-600 mt-1">Industry presence and strategic partnerships</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Operations & Infrastructure</span>
                    <span className="text-slate-600">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                  <p className="text-sm text-slate-600 mt-1">Scale cloud infrastructure and security</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Revolutionary Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unifying fragmented, manual processes into a predictive, integrated digital platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision & Mission</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Vision</h4>
                    <p className="text-slate-600">"Drive aviation excellence through intelligent automation."</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Mission</h4>
                    <p className="text-slate-600">"Revamp aircraft maintenance with a unified, predictive platform."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Predictive</h4>
                  <p className="text-sm text-slate-600">AI-powered maintenance</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Mobile-First</h4>
                  <p className="text-sm text-slate-600">Anywhere access</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Compliant</h4>
                  <p className="text-sm text-slate-600">Aviation standards</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <BarChart3 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Analytics</h4>
                  <p className="text-sm text-slate-600">Real-time insights</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Customer Segments */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Plane className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">Aviation Companies</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">Airlines</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">Maintenance Providers</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">Aircraft Owners</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Validation */}
      <section id="market" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Proven Market Validation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world implementations delivering measurable business value
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle>Fleet Maintenance Success</CardTitle>
                <CardDescription>25 aircraft fleet implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">35%</div>
                    <div className="text-sm text-slate-600">Increased Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">28%</div>
                    <div className="text-sm text-slate-600">Cost Reduction</div>
                  </div>
                </div>
                <blockquote className="text-slate-600 italic">
                  "AMMS has revolutionized how we approach maintenance, moving us from reactive to predictive operations."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle>MRO Service Enhancement</CardTitle>
                <CardDescription>Maintenance service provider transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-slate-600">Faster Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">40%</div>
                    <div className="text-sm text-slate-600">Paperwork Reduction</div>
                  </div>
                </div>
                <blockquote className="text-slate-600 italic">
                  "The mobile-first approach has empowered our technicians and dramatically improved our operational efficiency."
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Competitive Advantages */}
          <Card>
            <CardHeader>
              <CardTitle>Competitive Advantages</CardTitle>
              <CardDescription>Why AMMS leads the market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Feature</th>
                      <th className="text-center py-2">AMMS</th>
                      <th className="text-center py-2">AMOS</th>
                      <th className="text-center py-2">Traxxall</th>
                      <th className="text-center py-2">Ramco</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-2">Mobile-First Design</td>
                      <td className="text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">AI-Powered Predictive</td>
                      <td className="text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Implementation Time</td>
                      <td className="text-center font-semibold text-green-600">2-4 weeks</td>
                      <td className="text-center">3-6 months</td>
                      <td className="text-center">1-3 months</td>
                      <td className="text-center">3-6 months</td>
                    </tr>
                    <tr>
                      <td className="py-2">Small Operator Friendly</td>
                      <td className="text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals driving aviation innovation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  S
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Sam</h3>
                <p className="text-sm text-slate-600">CEO</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  F
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Fahmi</h3>
                <p className="text-sm text-slate-600">Vice CEO</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  H
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Huzairi</h3>
                <p className="text-sm text-slate-600">COO</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  H
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Harrith</h3>
                <p className="text-sm text-slate-600">CTO</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  A
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Arman</h3>
                <p className="text-sm text-slate-600">CIO</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={teamImage} 
                alt="Professional Aviation Team" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src={aviationTeamImage} 
                alt="Aviation Industry Professionals" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Financial Projections
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strong growth trajectory with high margins and customer retention
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">$2.7M</div>
                <p className="text-slate-600">Revenue by Year 3</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">68%</div>
                <p className="text-slate-600">Gross Margin</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
                <p className="text-slate-600">Months to Break-Even</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
                <p className="text-slate-600">Customer Retention</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Aviation Maintenance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in revolutionizing the $5.4B aviation maintenance market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
              Download Investment Deck
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Investor Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6" />
                <span className="text-lg font-bold">AMMS Aviationware</span>
              </div>
              <p className="text-slate-400">
                Digital transformation for streamlined aircraft maintenance operations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Features</li>
                <li>Technology</li>
                <li>Implementation</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>About</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Investors</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Investment Deck</li>
                <li>Financial Projections</li>
                <li>Market Analysis</li>
                <li>Contact Investors</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 AMMS Aviationware. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

