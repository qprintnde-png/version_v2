import { CheckCircle, Clock, Users, Headphones, Settings, BookOpen, GraduationCap, Calendar, Shield, BarChart3, Cog } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: <Cog className="h-12 w-12 text-emerald-700" />,
      title: "Enterprise Implementation",
      description: "Comprehensive deployment and configuration of our school management platform tailored to your institutional requirements.",
      features: [
        "Requirements analysis and system design",
        "Custom configuration and setup",
        "Data migration and integration services",
        "User provisioning and security setup",
        "Quality assurance and testing",
        "Go-live support and monitoring"
      ],
      duration: "4-12 weeks"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-emerald-700" />,
      title: "Professional Training",
      description: "Structured training programs designed to ensure successful adoption and maximize platform utilization across your institution.",
      features: [
        "Executive and administrative training",
        "Faculty development workshops",
        "Technical administrator certification",
        "End-user training programs",
        "Train-the-trainer sessions",
        "Ongoing education resources"
      ],
      duration: "2-4 weeks"
    },
    {
      icon: <Headphones className="h-12 w-12 text-emerald-700" />,
      title: "Managed Support Services",
      description: "Comprehensive support services ensuring optimal system performance and continuous operational excellence.",
      features: [
        "24/7 technical support desk",
        "Proactive system monitoring",
        "Performance optimization",
        "Regular system updates",
        "Incident management",
        "Escalation procedures"
      ],
      duration: "Ongoing"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-emerald-700" />,
      title: "Curriculum Integration",
      description: "Specialized services for seamless integration with national curriculum standards and examination systems.",
      features: [
        "National curriculum alignment",
        "Examination board integration",
        "Assessment framework setup",
        "Grading system configuration",
        "Academic calendar management",
        "Compliance verification"
      ],
      duration: "2-6 weeks"
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-700" />,
      title: "Stakeholder Engagement",
      description: "Comprehensive communication and engagement solutions connecting all institutional stakeholders effectively.",
      features: [
        "Parent portal implementation",
        "Mobile application deployment",
        "Communication workflow setup",
        "Notification system configuration",
        "Feedback mechanism integration",
        "Community platform setup"
      ],
      duration: "2-3 weeks"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-emerald-700" />,
      title: "Analytics & Business Intelligence",
      description: "Advanced analytics implementation providing actionable insights for strategic decision-making and performance optimization.",
      features: [
        "Dashboard design and configuration",
        "Custom report development",
        "Key performance indicator setup",
        "Predictive analytics implementation",
        "Data visualization tools",
        "Executive reporting systems"
      ],
      duration: "3-6 weeks"
    }
  ]

  const supportTiers = [
    {
      name: "Standard Support",
      price: "৳10,000/Year",
      features: [
        "Business hours email support",
        "Standard response time (24-48 hours)",
        "Basic system maintenance",
        "Monthly system updates",
        "Documentation access",
        "Community forum support"
      ],
      recommended: false
    },
    {
      name: "Professional Support",
      price: "৳25,000/Year",
      features: [
        "Priority phone and email support",
        "Enhanced response time (4-8 hours)",
        "Proactive system monitoring",
        "Weekly health checks",
        "Priority updates and patches",
        "Quarterly training sessions",
        "Custom reporting assistance"
      ],
      recommended: true
    },
    {
      name: "Enterprise Support",
      price: "Custom Pricing",
      features: [
        "Dedicated account management",
        "24/7 premium support (1-2 hours response)",
        "On-site support visits",
        "Custom development services",
        "Advanced analytics implementation",
        "Third-party system integration",
        "Service level agreement (SLA)"
      ],
      recommended: false
    }
  ]

  const methodology = [
    {
      phase: "Discovery",
      title: "Requirements Analysis",
      description: "Comprehensive assessment of institutional needs, current processes, and strategic objectives to develop a tailored implementation roadmap."
    },
    {
      phase: "Design",
      title: "Solution Architecture",
      description: "Custom system design and configuration planning, including integration requirements and data migration strategies."
    },
    {
      phase: "Deploy",
      title: "Implementation",
      description: "Systematic deployment with rigorous testing, user training, and change management to ensure successful adoption."
    },
    {
      phase: "Optimize",
      title: "Continuous Improvement",
      description: "Ongoing optimization, performance monitoring, and enhancement to maximize return on investment and operational efficiency."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Professional Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive professional services ensuring successful implementation, adoption, 
              and optimization of your educational technology investment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Service Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end services designed to maximize your technology investment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-700 font-medium">{service.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-emerald-700 hover:bg-emerald-800">
                  <Link to="/get-started" className="w-full">
                    Learn More
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Service Tiers
            </h2>
            <p className="text-xl text-gray-600">
              Flexible support options designed to meet your institutional requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden relative border-2 ${
                tier.recommended ? 'border-blue-700' : 'border-gray-200'
              }`}>
                {tier.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-emerald-700 text-white px-6 py-2 rounded-b-md text-sm font-semibold">
                    Recommended
                  </div>
                )}
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                  <div className="text-3xl font-bold text-emerald-700 mb-8">{tier.price}</div>
                  
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full py-3 ${
                    tier.recommended 
                      ? 'bg-emerald-700 hover:bg-emerald-800' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}>
                    <Link to="/get-started" className="w-full">
                      {tier.name === "Enterprise Support" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600">
              Proven approach ensuring successful project delivery and institutional transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.phase}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Service Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Commitment to quality and customer success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Shield className="h-16 w-16 text-emerald-700 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes and testing procedures ensuring reliable and robust implementations.
              </p>
            </div>

            <div className="text-center p-8">
              <Users className="h-16 w-16 text-emerald-700 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with extensive experience in educational technology and institutional transformation.
              </p>
            </div>

            <div className="text-center p-8">
              <Clock className="h-16 w-16 text-emerald-700 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                Structured project management approach ensuring on-time delivery and adherence to agreed timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with our professional services team to discuss your requirements and develop
            a customized implementation strategy for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/get-started">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-lg px-10 py-4 h-auto">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-auto text-white border-2 border-white hover:bg-white hover:text-gray-900">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services