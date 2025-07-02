import React, { useState } from 'react';
import { 
  FileText, 
  BarChart3, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Shield,
  Globe,
  Smartphone,
  Download,
  Share2,
  Eye,
  Edit3,
  PieChart,
  TrendingUp,
  Clock,
  Mail
} from 'lucide-react';

const OorbFormsLanding = () => {
  const [activeDemo, setActiveDemo] = useState('builder');

  const features = [
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Drag & Drop Builder",
      description: "Create beautiful forms with our intuitive visual builder. No coding required."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track responses, completion rates, and user behavior with detailed analytics."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Easy Sharing",
      description: "Share forms via link, embed on websites, or send through email campaigns."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Forms automatically adapt to any device for perfect mobile experience."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with GDPR compliance and data encryption."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Logic",
      description: "Conditional fields and branching logic for personalized form experiences."
    }
  ];

  const formTypes = [
    {
      title: "Contact Forms",
      description: "Capture leads and customer inquiries",
      icon: <Mail className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      title: "Surveys & Polls",
      description: "Gather feedback and opinions",
      icon: <PieChart className="w-8 h-8" />,
      color: "bg-green-500"
    },
    {
      title: "Event Registration",
      description: "Manage event signups and RSVPs",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      title: "Order Forms",
      description: "Process orders and payments",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-orange-500"
    }
  ];

  const benefits = [
    "Create unlimited forms and collect unlimited responses",
    "Advanced form logic and conditional fields",
    "Real-time collaboration with team members",
    "Custom branding and white-label options",
    "Payment integration with Stripe and PayPal",
    "File uploads and document collection",
    "Email notifications and autoresponders",
    "Export data to CSV, Excel, and PDF"
  ];

  const renderDemo = () => {
    switch (activeDemo) {
      case 'builder':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Form Builder</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600">Live Editor</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Edit3 className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Text Input Field</span>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Multiple Choice</span>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Long Answer</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-sm text-blue-800 font-medium mb-2">Preview Mode</div>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    readOnly
                  />
                  <div className="flex items-center space-x-2">
                    <input type="radio" className="text-blue-600" readOnly />
                    <span className="text-sm text-gray-700">Option 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h3>
              <div className="text-sm text-gray-500">Last 30 days</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-gray-600">Total Responses</div>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+12%</span>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">87%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+5%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Desktop</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">75%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Mobile</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">25%</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'responses':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Response Management</h3>
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Export</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">John Doe</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="text-sm text-gray-600">john@example.com</div>
                <div className="text-sm text-gray-600">Interested in premium plan</div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Sarah Smith</span>
                  <span className="text-sm text-gray-500">5 hours ago</span>
                </div>
                <div className="text-sm text-gray-600">sarah@company.com</div>
                <div className="text-sm text-gray-600">Product feedback submission</div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Mike Johnson</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <div className="text-sm text-gray-600">mike@startup.io</div>
                <div className="text-sm text-gray-600">Event registration complete</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Form Builder Platform
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Create Beautiful
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Forms & Surveys
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Build professional forms, collect responses, and analyze data with OORB Forms. 
                  The modern alternative to Google Forms with advanced features and beautiful design.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Building Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Quick Form Preview</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        What's your name? *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        How did you hear about us?
                      </label>
                      <div className="space-y-2">
                        {['Search Engine', 'Social Media', 'Friend Referral', 'Advertisement'].map((option, index) => (
                          <label key={index} className="flex items-center space-x-3 cursor-pointer">
                            <input type="radio" name="source" className="text-blue-600" />
                            <span className="text-slate-300">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                      Submit Response
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Create Amazing Forms
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful features that make form building simple, data collection efficient, and analysis insightful
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              See OORB Forms in Action
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our interactive demos to see how easy it is to build, analyze, and manage forms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Navigation */}
            <div className="space-y-4">
              {[
                { id: 'builder', title: 'Form Builder', description: 'Drag and drop interface for creating forms', icon: <Edit3 className="w-5 h-5" /> },
                { id: 'analytics', title: 'Analytics Dashboard', description: 'Real-time insights and response tracking', icon: <BarChart3 className="w-5 h-5" /> },
                { id: 'responses', title: 'Response Management', description: 'View and manage form submissions', icon: <Users className="w-5 h-5" /> }
              ].map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeDemo === demo.id
                      ? 'bg-blue-600/20 border-2 border-blue-500/50'
                      : 'bg-slate-800/50 border-2 border-slate-700/50 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeDemo === demo.id ? 'bg-blue-600' : 'bg-slate-700'
                    }`}>
                      {demo.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{demo.title}</h3>
                      <p className="text-slate-300 text-sm">{demo.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Demo Content */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative">
                {renderDemo()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Types Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From simple contact forms to complex surveys, OORB Forms adapts to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {formTypes.map((type, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${type.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose OORB Forms?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Built for modern teams who need more than basic form functionality. 
                Get advanced features, beautiful design, and powerful analytics.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Performance Metrics</h3>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Response Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-white">85%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Load Time</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-1/4 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-white">0.8s</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Mobile Friendly</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-white">100%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="text-sm text-slate-400 mb-2">Recent Activity</div>
                    <div className="space-y-2">
                      <div className="text-sm text-green-400">✓ 247 responses collected today</div>
                      <div className="text-sm text-blue-400">→ 15 new forms created this week</div>
                      <div className="text-sm text-purple-400">📊 Analytics updated in real-time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your First Form?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join thousands of teams already using OORB Forms to collect data and grow their business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Building for Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300">
              View Pricing Plans
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OorbFormsLanding;