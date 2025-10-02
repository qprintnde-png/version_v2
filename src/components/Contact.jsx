import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Building2, Send } from 'lucide-react'
import { Button } from './ui/button'
import { contactApi } from '../lib/supabase'

// Analytics tracking function
const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4 (gtag)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'User Interaction',
      event_label: properties.label || '',
      page_location: window.location.href,
      page_title: document.title,
      ...properties
    })
  }
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, properties)
  }
  
  // Custom analytics or other tracking services
  console.log('Analytics Event:', eventName, properties)
}

// Add Calendly integration
const openCalendlyPopup = () => {
  // Track demo scheduling attempt from contact page
  trackEvent('contact_schedule_demo_clicked', {
    event_category: 'Lead Generation',
    event_label: 'Contact Page - Schedule Demo',
    source: 'contact_page',
    value: 1
  })
  
  // Scroll to contact form
  const contactForm = document.querySelector('#contact-form')
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' })
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    title: '',
    message: '',
    subject: 'consultation'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Handle URL parameters for pre-filling form
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const message = urlParams.get('message');
    
    if (subject) {
      setFormData(prev => ({ ...prev, subject }));
    }
    if (message) {
      setFormData(prev => ({ ...prev, message }));
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Track form submission attempt
      trackEvent('contact_form_submitted', {
        event_category: 'Lead Generation',
        event_label: 'Contact Form Submission',
        form_subject: formData.subject,
        institution_name: formData.institution || 'not_provided',
        inquiry_type: formData.subject,
        value: 3
      })

      // Submit the form
      const result = await contactApi.submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        institution: formData.institution,
        title: formData.title,
        subject: formData.subject,
        message: formData.message
      })

      setSubmitStatus({
        type: 'success',
        message: result.message
      })

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        title: '',
        message: '',
        subject: 'consultation'
      })

      // Track successful submission
      trackEvent('contact_form_success', {
        event_category: 'Lead Generation',
        event_label: 'Contact Form Success',
        form_subject: formData.subject,
        value: 5
      })

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to submit form. Please try again.'
      })

      // Track submission error
      trackEvent('contact_form_error', {
        event_category: 'Form Error',
        event_label: 'Contact Form Error',
        error_message: error.message
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Building2 className="h-6 w-6 text-emerald-700" />,
      title: "Corporate Headquarters",
      details: [
        "House 123, Road 15",
        "Dhanmondi, Dhaka 1209",
        "Bangladesh"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-700" />,
      title: "Business Inquiries",
      details: [
        "Sales: +880 01898-479067",
        "Support: +880 01734-222467",
        "Emergency: +880 01734-222467"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-700" />,
      title: "Email Communications",
      details: [
        "Sales: limonfazlerabbi080@gmail.com",
        "Support: sabbirhossainde@gmail.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-700" />,
      title: "Business Hours",
      details: [
        "Saturday - Thursday: 9:00 AM - 6:00 PM",
        "Friday: 9:00 AM - 5:00 PM"
      ]
    }
  ]

  const offices = [
    {
      city: "Dhaka",
      type: "Corporate Headquarters",
      address: "Uttara, Dhaka",
      phone: "+880 01898-479067",
      email: "limonfazlerabbi080@gmail.com",
      CEO: "Fazle Rabbi Limon(CEO)"
    }

  
  ]

  const faqs = [
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary based on institutional size and complexity, typically ranging from 4-12 weeks for complete deployment."
    },
    {
      question: "Do you provide comprehensive training programs?",
      answer: "Yes, we offer structured training programs for all user levels, including administrators, faculty, and support staff."
    },
    {
      question: "Is the platform available in local languages?",
      answer: "Our platform supports both Bengali and English interfaces to serve Bangladeshi educational institutions effectively."
    },
    {
      question: "What level of ongoing support is provided?",
      answer: "We offer multiple support tiers including 24/7 technical support, regular updates, and dedicated account management."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Contact Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Connect with our education technology experts to discuss your institutional requirements 
            and explore how SchoolxNow can drive your digital transformation journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Request Consultation</h2>
            
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Principal, Director, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@institution.edu"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your institution name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="consultation">General Consultation</option>
                    <option value="demo">Product Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Please describe your requirements, current challenges, or any specific questions you have about our solutions..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-emerald-600 hover:bg-emerald-700 w-full"
                onClick={(e) => {
                  trackEvent('contact_form_submit_clicked', {
                    event_category: 'Lead Generation',
                    event_label: 'Contact Form Submission',
                    form_subject: formData.subject,
                    institution_name: formData.institution || 'not_provided',
                    inquiry_type: formData.subject,
                    value: 3
                  })
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Request
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
                <Button 
                  variant="outline" 
                  className="text-sm flex items-center"
                  onClick={() => window.open('mailto:sales@schoolxnow.com?subject=Product Demo Request', '_blank')}
                >
                  Schedule Product Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="text-sm flex items-center"
                  onClick={() => window.open('https://wa.me/8801712345678', '_blank')}
                >
                  Live Chat Support
                </Button>
                <Button 
                  variant="outline" 
                  className="text-sm flex items-center"
                  onClick={() => window.open('mailto:sales@schoolxnow.com?subject=Proposal Request', '_blank')}
                >
                  Request Proposal
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <section className="mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Locations</h2>
          <p className="text-lg text-gray-600 text-center mb-8 sm:mb-12 px-4">
            Visit our offices across Bangladesh for in-person consultations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                    <p className="text-blue-700 font-medium text-sm">{office.type}</p>
                  </div>
                  <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                  <p className="text-gray-500 text-xs">{office.manager}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 text-center mb-8 sm:mb-12 px-4">
            Common questions about our solutions and services
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 sm:mt-20 lg:mt-24 bg-gray-900 rounded-lg p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Take the first step towards digital transformation. Our education technology experts are ready to discuss your specific requirements and develop a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-700 hover:bg-emerald-800 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                const link = document.createElement('a')
                link.href = 'data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsO4CjIgMCBvYmoKPDwKL0xlbmd0aCAzMyAvRmlsdGVyIC9GbGF0ZURlY29kZQo+PgpzdHJlYW0KeJzjMlAwULCx0XfOL80rzi9KLbJSUEjNyclXyOUCAB2ZB/EKZW5kc3RyZWFtCmVuZG9iago='
                link.download = 'SchoolxNow_Brochure.pdf'
                link.click()
              }}
            >
              Download Brochure
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact

