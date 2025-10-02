import { Users, Target, Award, TrendingUp, Heart, Globe, Lightbulb, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import LazyImage from './ui/LazyImage'

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-emerald-600" />,
      title: "Innovation",
      description: "We constantly push the boundaries of educational technology to deliver cutting-edge solutions that drive progress."
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Reliability",
      description: "Our commitment to quality and dependability ensures that educational institutions can trust us with their most critical needs."
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Education Focus",
      description: "Every decision we make is centered around delivering exceptional value and service to educational institutions."
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "Local Impact",
      description: "We strive to create solutions that make a positive difference in Bangladeshi educational institutions and communities."
    }
  ]

  const team = [
    {
      name: "Fazle Rabbi Limon",
      role: "Chief Executive Officer",
      description: "With over 5 years of experience in educational technology leadership, Limon drives our vision and strategic direction.",
      image: "/images/limon.jpg",
      alt: " Fazle Rabbi Limon- CEO"
    },
    {
      name: "Md. Sabbir Hossain",
      role: "Chief Technology Officer",
      description: "Sabbir Hossain leads our technical innovation with expertise in educational software and system architecture.",
      image: "/images/sabbir.jpg",
      alt: "Md. Sabbir Hossain - CTO"
    },
    {
      name: "Sumayea Chowdhury",
      role: "Relationship Officer",
      description: "Sumayea leads our client innovation with expertise in customer management and  relation.",
      image: "/images/sumayea.jpg",
      alt: "Sumayea - CRO"
    },
    {
      name: "Md Nahidul Islam Robin",
      role: "Chief Marketing Officer",
      description: "Nahid leads our marketing innovation with expertise in Digital marketing and  Customer Handling.",
      image: "images/nahid.jpg",
      alt: "Nahid - CMO"
    }
  ]

  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "SchoolxNow was established with a vision to revolutionize school management in Bangladesh."
    },
    {
      year: "2025",
      title: "First School Partnership",
      description: "Secured our first school client and delivered our flagship school management solution."
    },
    {
      year: "2025",
      title: "Regional Expansion",
      description: "Expanded operations across Bangladesh and opened offices in Chittagong and Sylhet."
    },
    {
      year: "2025",
      title: "Education Awards",
      description: "Received multiple education technology awards for innovation and customer satisfaction."
    },
    {
      year: "2025",
      title: "200+ Schools",
      description: "Reached the milestone of serving over 200 schools across Bangladesh."
    },
    {
      year: "2025",
      title: "Mobile Integration",
      description: "Launched mobile apps for parents and teachers, enhancing communication and accessibility."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SchoolxNow
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking educational technology company dedicated to empowering 
              Bangladeshi schools with innovative solutions that drive educational excellence, 
              efficiency, and success in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                <Target className="h-12 w-12 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To empower educational institutions across Bangladesh with cutting-edge school 
                management technology that streamlines operations, enhances learning outcomes, 
                and unlocks new opportunities for educational growth. We believe that the right 
                technology can transform any school and help them achieve their full potential.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                <TrendingUp className="h-12 w-12 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be Bangladesh's most trusted educational technology partner, known for delivering 
                innovative solutions that create lasting value for schools, teachers, students, and parents. 
                We envision a future where technology seamlessly integrates with educational processes 
                to create more efficient, effective, and successful learning environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth and evolution
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-md"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              The experienced professionals driving our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-64 bg-gray-200 overflow-hidden relative group">
                  <LazyImage
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-emerald-100 text-lg">Schools Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50,000+</div>
              <div className="text-emerald-100 text-lg">Students Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">3,000+</div>
              <div className="text-emerald-100 text-lg">Teachers Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-emerald-100 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

