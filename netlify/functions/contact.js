const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { fullName, email, phone, investmentType, investmentAmount, message } = JSON.parse(event.body);

    // Validate required fields
    if (!fullName || !email || !investmentType) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Set SendGrid API key
    if (!process.env.SENDGRID_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'SendGrid API key not configured' }),
      };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Format investment amount
    const formattedAmount = investmentAmount 
      ? `£${parseInt(investmentAmount).toLocaleString()}` 
      : 'Not specified';

    // Create email content
    const emailContent = {
      to: 'info@madinimoyoni.co.uk',
      from: 'info@madinimoyoni.co.uk',
      subject: `New Investment Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #223F5E 0%, #B8860B 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Madini Moyoni</h1>
            <p style="color: #F4E5B1; margin: 10px 0 0 0; font-size: 16px;">New Investment Inquiry</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #223F5E; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">Contact Details</h2>
            <table style="width: 100%; margin: 20px 0;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #223F5E; width: 150px;">Full Name:</td>
                <td style="padding: 8px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #223F5E;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #B8860B;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #223F5E;">Phone:</td>
                <td style="padding: 8px 0;">${phone}</td>
              </tr>
              ` : ''}
            </table>

            <h2 style="color: #223F5E; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">Investment Interest</h2>
            <table style="width: 100%; margin: 20px 0;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #223F5E; width: 150px;">Investment Type:</td>
                <td style="padding: 8px 0;">${investmentType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #223F5E;">Investment Amount:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #B8860B;">${formattedAmount}</td>
              </tr>
            </table>

            ${message ? `
            <h2 style="color: #223F5E; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">Message</h2>
            <div style="background: white; padding: 20px; border-left: 4px solid #B8860B; margin: 20px 0;">
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding: 20px; background: #223F5E; border-radius: 8px; text-align: center;">
              <p style="color: white; margin: 0; font-size: 14px;">
                This inquiry was submitted through the Madini Moyoni investment website.<br>
                Please respond within 24 hours to maintain our commitment to investor service excellence.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await sgMail.send(emailContent);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Thank you for your interest in Madini Moyoni. We will contact you within 24 hours to discuss your investment inquiry.' 
      }),
    };

  } catch (error) {
    console.error('SendGrid error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send email. Please try again or contact us directly at info@madinimoyoni.co.uk' 
      }),
    };
  }
};