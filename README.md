# Blackline Studio — Tattoo Studio Website

## 📌 About the Project
Blackline Studio is a full-stack responsive tattoo studio website built as a portfolio project.

The goal of this project was to create a modern business website with strong booking-focused UI/UX. 
The project combines a polished frontend with a simple ASP.NET Core Web API backend and SQL Server database for handling form submissions.

The website includes a complete studio-style user flow: browsing information about the studio, viewing tattoo categories in the gallery, reading FAQs, 
contacting the studio, and sending booking / consultation requests through working forms connected to the backend.

---

## 🚀 Features

### 🎨 Business Website Functionality
- Home page with hero slider and studio presentation
- Tattoo page with pricing information and service details
- Gallery page with category filtering
- FAQ page with animated accordion
- Contact page with contact information and contact form

### 🖼️ Gallery
- Category-based tattoo gallery
- "All" category with mixed preview layout
- Click from "All" into a specific category
- Responsive image grid
- Category labels on hover in preview mode

### 📝 Forms & Booking UX
- Global booking modal available from navbar and CTA buttons
- Working contact form
- Working consultation request form
- Working booking request form
- File upload support for reference images
- Data sent from frontend to backend API and stored in SQL Server

### ✨ UI / UX
- Responsive navigation with mobile burger menu
- Hero sections for multiple pages
- Custom reviews carousel
- Animated FAQ accordion
- Smooth modal open / close transitions
- Clean studio-style dark/light visual balance

### 📱 Responsive Design
- Desktop layout
- Tablet layout
- Mobile layout

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- Heroicons
- Vite

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core
- SQL Server

### Tools
- Git & GitHub
- VS Code
- Visual Studio
- SQL Server Management Studio

---

## 🎯 Project Goals
This project was created to practice:

- Building a polished responsive business website
- Structuring a React + TypeScript frontend project
- Creating reusable UI components
- Improving Tailwind CSS layout and responsive design skills
- Building a simple but real backend for form handling
- Working with Entity Framework Core migrations
- Connecting React forms to ASP.NET Core Web API

---

## 📂 Pages
- **Home** — hero slider, featured styles, gallery preview, reviews, mini FAQ, consultation section
- **Tattoo** — tattoo pricing, studio service information, booking CTA strip
- **Gallery** — category filter with blackwork, geometric, floral, fine line, color, anime
- **FAQ** — structured questions and answers with animated accordion
- **Contact Us** — hero section, contact info, contact form

---

## 📦 Backend Functionality
The backend handles **POST** requests for all website forms:

- Booking requests
- Consultation requests
- Contact requests

Submitted data is saved into SQL Server using Entity Framework Core.

### Database Tables
- `BookingRequests`
- `ConsultationRequests`
- `ContactRequests`

---

## ⚙️ Installation

### Clone repository
```bash
git clone https://github.com/20Amir04/tattoo-booking-website.git
cd tattoo-booking-website
```

### Run Backend
```bash
cd backend/TattooStudioApi/TattooStudioApi
dotnet restore
dotnet ef database update
dotnet run
```

### Run Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints
Base URL example:
```bash
http://localhost:5289/api
```

Available endpoints:
- `POST /api/BookingRequest`
- `POST /api/ConsultationRequest`
- `POST /api/ContactRequest`

## 📸 Screenshots
<img width="1920" height="1032" alt="Screenshot (1719)" src="https://github.com/user-attachments/assets/292cf860-f5f1-4b50-a7a9-1f924a390fa5" />
<img width="1920" height="1027" alt="Screenshot (1718)" src="https://github.com/user-attachments/assets/f4f5b902-eab7-4939-bad6-44e110bb941f" />
<img width="1920" height="1028" alt="Screenshot (1717)" src="https://github.com/user-attachments/assets/f6a3ad60-494c-4182-9436-3c63441767ab" />
<img width="1920" height="1028" alt="Screenshot (1716)" src="https://github.com/user-attachments/assets/a9dedeb7-b20f-4082-a8c3-a6339b43a68b" />
<img width="1920" height="1030" alt="Screenshot (1715)" src="https://github.com/user-attachments/assets/37f7aacc-95c4-449b-8231-d8351aae5bbb" />
<img width="1920" height="1028" alt="Screenshot (1714)" src="https://github.com/user-attachments/assets/19cda072-5d59-4638-9595-7a44b1c905c7" />
<img width="1920" height="1030" alt="Screenshot (1713)" src="https://github.com/user-attachments/assets/691fbeca-cbb2-44b5-892c-b04ecbbd8164" />
<img width="1920" height="1027" alt="Screenshot (1712)" src="https://github.com/user-attachments/assets/b114d45a-22e6-4362-9861-68a028e8478a" />
<img width="1920" height="1025" alt="Screenshot (1711)" src="https://github.com/user-attachments/assets/8019e6bb-232a-4841-b866-4224f9a20156" />
<img width="1920" height="1028" alt="Screenshot (1710)" src="https://github.com/user-attachments/assets/168535f2-313b-4656-80fe-9b9a7bc11356" />
<img width="1920" height="1025" alt="Screenshot (1709)" src="https://github.com/user-attachments/assets/981a4b0c-47c1-4b42-8970-935d10bc8a8c" />
<img width="622" height="909" alt="Screenshot (1708)" src="https://github.com/user-attachments/assets/6b505b1c-14a5-4fa7-92c3-4a9cf307cc34" />
<img width="1920" height="1025" alt="Screenshot (1707)" src="https://github.com/user-attachments/assets/586a5aa3-3b33-4843-bf0d-6b6f4eabb74f" />

## 👨‍💻 Author
**Amir Arabi**  
Software Engineering Student  
Junior / Intern Full-Stack Developer

GitHub: https://github.com/20Amir04
