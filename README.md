# 🎓 Learning Management System (LMS)

A modern **Learning Management System (LMS)** built with the **MERN Stack**, enabling educators to create and publish courses while allowing students to enroll, purchase, and learn online. The platform features secure authentication with **Clerk**, online payments with **Stripe**, and a responsive, user-friendly interface.

## ✨ Features

- 🔐 Secure Authentication with Clerk
- 👨‍🏫 Educator Dashboard to Create & Manage Courses
- 📚 Course Publishing & Management
- 🎥 Video-Based Learning Experience
- 🛒 Course Enrollment & Purchase
- 💳 Secure Online Payments with Stripe
- 👤 Student Dashboard with Enrolled Courses
- 📈 Course Progress Tracking
- 🌐 Responsive Design for All Devices

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- React Router
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Authentication**
- Clerk

**Payments**
- Stripe

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lms-website.git

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Start the backend
cd ../server
npm run dev

# Start the frontend
cd ../client
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file in the server directory.

```env
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
WEBHOOK_SECRET=your_webhook_secret
```

## 👨‍💻 Author

**Kunal**

If you found this project helpful, don't forget to ⭐ the repository!