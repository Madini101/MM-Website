{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <form id="contactForm">\
  <label for="name">Full Name</label>\
  <input type="text" id="name" name="name" required />\
\
  <label for="email">Email Address</label>\
  <input type="email" id="email" name="email" required />\
\
  <label for="investmentType">Type of Investment</label>\
  <select id="investmentType" name="investmentType" required>\
    <option value="SESI">SESI</option>\
    <option value="General">General</option>\
    <option value="Strategic">Strategic</option>\
  </select>\
\
  <label for="message">Message</label>\
  <textarea id="message" name="message" rows="5" required></textarea>\
\
  <button type="submit">Submit</button>\
</form>\
\
<script>\
  const form = document.getElementById('contactForm');\
\
  form.addEventListener('submit', async (e) => \{\
    e.preventDefault();\
\
    const formData = \{\
      name: form.name.value,\
      email: form.email.value,\
      investmentType: form.investmentType.value,\
      message: form.message.value,\
    \};\
\
    try \{\
      const res = await fetch('/.netlify/functions/send-email', \{\
        method: 'POST',\
        headers: \{\
          'Content-Type': 'application/json',\
        \},\
        body: JSON.stringify(formData),\
      \});\
\
      const result = await res.json();\
      if (res.ok) \{\
        alert('Thank you! Your message has been sent.');\
        form.reset();\
      \} else \{\
        alert(`Error: $\{result.error || 'Failed to send message'\}`);\
      \}\
    \} catch (err) \{\
      alert('An unexpected error occurred.');\
      console.error(err);\
    \}\
  \});\
</script>\
}