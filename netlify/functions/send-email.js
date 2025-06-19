{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const sgMail = require('@sendgrid/mail');\
\
exports.handler = async (event) => \{\
  if (event.httpMethod !== 'POST') \{\
    return \{\
      statusCode: 405,\
      body: 'Method Not Allowed',\
    \};\
  \}\
\
  const \{ name, email, message \} = JSON.parse(event.body);\
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);\
\
  const msg = \{\
    to: 'info@madinimoyoni.co.uk, \
    from: \'91info@madinimoyoni.co.uk,\
    subject: `New Investment Inquiry from $\{contactData.investmentType\}`,\
    text: \'91Thank you for your interest! We will contact you within 24 hours to discuss your investment.\'92,,\
    html: `<p><strong>Email:</strong> $\{email\}</p><p>$\{message\}</p>`,\
  \};\
\
  try \{\
    await sgMail.send(msg);\
    return \{\
      statusCode: 200,\
      body: JSON.stringify(\{ message: 'Message sent successfully' \}),\
    \};\
  \} catch (err) \{\
    return \{\
      statusCode: err.code || 500,\
      body: JSON.stringify(\{ error: err.message \}),\
    \};\
  \}\
\};\
}