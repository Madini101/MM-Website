import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import sgMail from "@sendgrid/mail";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
  try {
    const contactData = insertContactSchema.parse(req.body);
    
    // Store in database/memory
    const contact = await storage.createContact(contactData);
    
    // Send email via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: 'info@madinimoyoni.co.uk',
        from: 'info@madinimoyoni.co.uk',
        subject: New Investment Inquiry - ${contactData.investmentType},
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a365d;">New Investment Inquiry</h2>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${contactData.fullName}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
            </div>
            
            <div style="background: #fef5e7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">Investment Details</h3>
              <p><strong>Investment Type:</strong> ${contactData.investmentType}</p>
              <p><strong>Investment Amount:</strong> ${contactData.investmentAmount}</p>
            </div>
            
            <div style="background: #f0fff4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${contactData.message}</p>
            </div>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px; color: #718096; font-size: 14px;">
              <p>This inquiry was submitted through the Madini Moyoni website contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      };
      
      try {
        await sgMail.send(msg);
        console.log('Email sent successfully to info@madinimoyoni.co.uk');
      } catch (emailError) {
        console.error('SendGrid email error:', emailError);
        // Continue anyway - form submission still saved
      }
    } else {
      console.warn('SENDGRID_API_KEY not configured - email not sent');
    }
    
    res.json({ 
      success: true, 
      message: "Thank you for your interest! We will contact you within 24 hours to discuss your investment.",
      id: contact.id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data", 
        errors: error.errors 
      });
    } else {
      console.error("Contact submission error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form. Please try again." 
      });
    }
  }
});