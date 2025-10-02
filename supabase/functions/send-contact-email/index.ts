import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactSubmission {
  name: string
  email: string
  phone?: string
  institution: string
  title?: string
  subject: string
  message: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, institution, title, subject, message }: ContactSubmission = await req.json()

    // Validate required fields
    if (!name || !email || !institution || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create email content
    const emailSubject = `New Contact Form Submission: ${subject}`
    const emailBody = `
      New contact form submission from SchoolxNow website:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Institution: ${institution}
      Title: ${title || 'Not provided'}
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      Submitted at: ${new Date().toISOString()}
    `

    // In a real implementation, you would send the email here
    // For now, we'll simulate email sending
    console.log('Email would be sent:', {
      to: 'sabbirhossainnde@gmail.com',
      subject: emailSubject,
      body: emailBody
    })

    // You can integrate with email services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Mailgun
    // - AWS SES
    
    // Example with Resend:
    /*
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@schoolxnow.com',
          to: ['sabbirhossainnde@gmail.com'],
          subject: emailSubject,
          text: emailBody,
        }),
      })
      
      if (!emailResponse.ok) {
        throw new Error('Failed to send email')
      }
    }
    */

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: 'Failed to process contact form submission'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})