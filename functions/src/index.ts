import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Create a Nodemailer transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // e.g., 'smtp.gmail.com'
  port: 465,
  secure: true, // Set to true if your provider requires SSL
  auth: {
    user: "@gmail.com", // Your email address
    pass: "", // Your email password
  },
});

// Cloud Firestore onCreate trigger function
exports.notifyAdminOnNewUser = functions.firestore.document("users/{userId}").onCreate(async (snapshot) => {
  // Data of the new document (user) added to the "users" collection
  const newUser = snapshot.data();

  try {
    // Email the admin with information about the new user
    const mailOptions = {
      from: "firebase", // Sender's email address
      to: "@gmail.com", // Admin's email address
      subject: "New User Registration",
      text:
        "A new user was added to the \"users\" collection." +
        `\n\nUser Details:\nName: ${newUser.name}\nEmail: ${newUser.email}` +
        "\n\nPlease verify the user by visiting admin panel.",
    };

    await transporter.sendMail(mailOptions);
    console.log("Email notification sent to admin.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
});
