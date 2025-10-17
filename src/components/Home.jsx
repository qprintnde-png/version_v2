import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, GraduationCap, BookOpen, Calendar, UserCheck, Shield, BarChart3 } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import LazyImage from './ui/LazyImage'

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-emerald-700" />,
      title: "Comprehensive Student Management",
      description: "Advanced student information system with complete academic lifecycle management, from enrollment to graduation."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-emerald-700" />,
      title: "Faculty Excellence Platform",
      description: "Integrated faculty management system enabling efficient curriculum delivery and performance tracking."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-700" />,
      title: "Analytics & Insights",
      description: "Data-driven decision making with comprehensive reporting and real-time performance analytics."
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-700" />,
      title: "Enterprise Security",
      description: "Bank-grade security infrastructure ensuring complete data protection and regulatory compliance."
    }
  ]

  const testimonials = [
    {
      name: "Dr. Rashida Begum",
      title: "Principal",
      company: "Dhaka Model School & College",
      content: "SchoolxNow has transformed our institutional operations with their enterprise-grade solution. The ROI has been exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Mohammad Karim",
      title: "Director",
      company: "Chittagong International School",
      content: "Outstanding technical excellence and professional service delivery. Their solution has streamlined our entire academic ecosystem.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Fatima Rahman",
      title: "Administrator",
      company: "Sylhet Grammar School",
      content: "The most comprehensive educational technology platform we've implemented. Exceptional support and measurable results.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ]

  const stats = [
    { number: "200+", label: "Educational Institutions", sublabel: "Across Bangladesh" },
    { number: "50,000+", label: "Active Students", sublabel: "Managed Daily" },
    { number: "3,000+", label: "Faculty Members", sublabel: "Connected" },
    { number: "99.9%", label: "System Uptime", sublabel: "Guaranteed SLA" }
  ]

  const benefits = [
    {
      title: "Operational Excellence",
      description: "Streamline administrative processes and reduce operational overhead by up to 40%"
    },
    {
      title: "Enhanced Communication",
      description: "Improve stakeholder engagement with integrated communication platforms"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and reporting capabilities"
    },
    {
      title: "Scalable Infrastructure",
      description: "Future-proof technology that grows with your institutional requirements"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Enterprise School
              <span className="text-emerald-700 block">Management Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-semibold mb-6 sm:mb-8 italic">
              "Intelligent Tools for the Next-Gen School Owner"
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Comprehensive digital transformation platform for educational institutions. 
              Streamline operations, enhance academic excellence, and drive institutional growth 
              with our enterprise-grade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link to="/get-started">
                <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 h-auto w-full sm:w-auto">
                  Schedule Consultation
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 h-auto border-2 border-gray-300 w-full sm:w-auto">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Complete Educational Ecosystem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Integrated solutions designed to optimize every aspect of educational institution management 
              and enhance stakeholder experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-6 sm:p-8 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  {feature.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Trusted by Leading Educational Institutions
            </h2>
            <p className="text-lg sm:text-xl text-emerald-100 px-4">
              Delivering measurable results across Bangladesh's educational landscape
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-emerald-100 text-base sm:text-lg font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-emerald-200 text-sm">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Leading Institutions Choose SchoolxNow
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Proven expertise in educational technology transformation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-700 mt-1 flex-shrink-0 mx-auto sm:mx-0" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Hear from educational leaders who have transformed their institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <LazyImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-emerald-700 font-medium text-sm sm:text-base">
                      {testimonial.title}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 italic leading-relaxed text-center sm:text-left">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join the growing network of educational institutions that have revolutionized their operations
            with our comprehensive school management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Link to="/get-started">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 h-auto w-full sm:w-auto">
                Request Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 h-auto text-white border-2 border-white hover:bg-white hover:text-gray-900 w-full sm:w-auto">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home