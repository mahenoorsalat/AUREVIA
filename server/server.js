import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Allow frontend communication
app.use(cors());
app.use(bodyParser.json());

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// ========== JOB APPLICATION FORM ==========
app.post("/api/gmail", async (req, res) => {
  const { fullName, email, phone, country, role, experience, portfolio, coverLetter } = req.body;

  if (!fullName || !email || !phone || !country || !role || !experience || !coverLetter) {
    return res.status(400).json({ success: false, message: "Please fill in all required fields." });
  }

  // Email to you (the company)
  const mailOptions = {
    from: `"${fullName}" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `New Job Application: ${role} — ${fullName}`,
    text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Country: ${country}
Position: ${role}
Experience: ${experience}
Portfolio: ${portfolio || "N/A"}

Cover Letter:
${coverLetter}
    `
  };

  // Thank-you email to applicant
  const thankYouMail = {
    from: `"Aurevia Careers" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Thank You for Applying to Aurevia!",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2>Hi ${fullName},</h2>
        <p>Thank you for applying for the <strong>${role}</strong> position at Aurevia.</p>
        <p>We’ve received your application and our team will review it shortly. If your profile matches our requirements, we’ll reach out to you for the next steps.</p>
        <br/>
        <p>Meanwhile, feel free to explore more about us on our website or follow us on LinkedIn for updates!</p>
        <br/>
        <p>Warm regards,<br/>The Aurevia Team</p>
        <hr/>
        <p style="font-size: 12px; color: #888;">This is an automated message. Please do not reply.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(thankYouMail);
    res.json({ success: true, message: "Application submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send application." });
  }
});

// ========== CONTACT FORM ==========
app.post("/api/contact", async (req, res) => {
  const { fullName, email, phone, company, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "Please fill in all required fields." });
  }

  // Email to you (the company)
  const mailOptions = {
    from: `"${fullName}" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `New Contact Message: ${subject} — ${fullName}`,
    text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}

Message:
${message}
    `
  };

  // Auto-reply to sender
  const thankYouMail = {
    from: `"Aurevia Team" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Thank You for Reaching Out to Aurevia!",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2>Hi ${fullName},</h2>
        <p>Thank you for contacting us regarding <strong>${subject}</strong>.</p>
        <p>We’ve received your message and our support team will get back to you within 24 hours.</p>
        <br/>
        <p>We appreciate your time and interest in Aurevia!</p>
        <br/>
        <p>Best Regards,<br/>The Aurevia Support Team</p>
        <hr/>
        <p style="font-size: 12px; color: #888;">This is an automated message. Please do not reply.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(thankYouMail);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
