# 📩 SarahaApp Backend

A secure and scalable **Node.js + Express** backend for SarahaApp, supporting:
- 🔐 **User Authentication** (Local & Google OAuth)
- 📧 **Email Verification** & OTP-based Password Reset
- 📄 **Profile Management** (Update, Freeze, Delete, Restore)
- 💬 **Anonymous Messaging** with File Attachments
- ☁ **Cloudinary** integration for file uploads
- 🛡 **Security** features (JWT, bcrypt hashing, AES encryption, Rate Limiting, Helmet)

---

## 🚀 Features
### **Authentication & Authorization**
- **Signup/Login** with email & password
- **Google OAuth** signup/login
- **Email verification** via OTP
- **Forgot & Reset Password** with OTP
- JWT-based **access & refresh tokens**
- Token **revocation** for logout
- Role-based access control (**Admin/User**)

### **User Management**
- Get user profile
- Update profile details & password
- Upload **profile** and **cover** images
- Freeze, delete, and restore accounts

### **Messaging**
- Send anonymous or authenticated messages
- Support for **image attachments** (up to 3 files per message)

### **File Handling**
- **Cloudinary** for file storage
- **Multer** for local & cloud file uploads
- File type & size validation

### **Security**
- **Helmet** for HTTP security headers
- **Rate Limiting** (max 5 requests per 2 minutes per IP)
- **Bcrypt** password hashing
- **AES Encryption** for sensitive fields (e.g., phone numbers)
- **JWT** for secure authentication
- Admin system token separation

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/sarahaapp-backend.git
cd sarahaapp-backend

# Install dependencies
npm install
```

---

## ⚙️ Environment Variables

Create a `.env.dev` file in `src/config/`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/sarahaapp

# JWT
ACCESS_TOKEN_USER_SIGNATURE=your_access_secret
REFRESH_TOKEN_USER_SIGNATURE=your_refresh_secret
ACCESS_TOKEN_SYSTEM_SIGNATURE=your_admin_access_secret
REFRESH_TOKEN_SYSTEM_SIGNATURE=your_admin_refresh_secret
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

# Encryption & Security
SALT=12
ENCRYPTION_SECRET=your_encryption_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id

# Email
APP_GMAIL=your_email@gmail.com
APP_PASSWORD=your_email_app_password

# Cloudinary
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
APPLICATION_NAME=sarahaapp
```

---

## ▶️ Run the App

```bash
# Development
node src/index.js
```

---

## 📚 API Endpoints

### **Auth Routes** (`/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/signup` | Register new user |
| POST   | `/login` | Login user |
| POST   | `/signup/gmail` | Google signup |
| POST   | `/login/gmail` | Google login |
| PATCH  | `/confirm-email` | Confirm email with OTP |
| PATCH  | `/forgot-password` | Request password reset OTP |
| PATCH  | `/reset-password` | Reset password with OTP |

### **User Routes** (`/user`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/` | Get logged-in user |
| GET    | `/:userId/share-profile` | Public profile share |
| GET    | `/profile/refresh-token` | Get new access token |
| PATCH  | `/update` | Update profile |
| PATCH  | `/password` | Change password |
| DELETE | `/freeze-account/:userId` | Freeze account |
| DELETE | `/delete-account/:userId` | Delete account |
| PATCH  | `/restore-account/:userId` | Restore account (Admin) |
| POST   | `/logout` | Logout user |
| PATCH  | `/upload-file` | Upload profile picture |
| PATCH  | `/upload-cover-file` | Upload cover images |

### **Message Routes** (`/message`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/:receiverId` | Send anonymous message |
| POST   | `/:receiverId/sender` | Send authenticated message |

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, Google OAuth
- **File Storage:** Cloudinary, Multer
- **Security:** Helmet, bcryptjs, CryptoJS
- **Email Service:** Nodemailer with Gmail
- **Validation:** Joi
- **Logging:** Morgan

---

## 📌 Notes
- **Default CORS** settings are commented out but included for production setups.
- All **uploads** are stored in Cloudinary; local storage is available for dev testing.
- Make sure to configure **Google OAuth** and **Cloudinary** before using related features.
