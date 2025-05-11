# Resume Builder Web App

A simple and responsive Resume Builder application built using **HTML**, **CSS**, and **JavaScript**. This project allows users to input personal and professional details, preview their resume, and download it as a PDF.

## 🔧 Features

- 🎯 User-friendly form for entering resume details
- 📸 Photo upload with validation (JPG, JPEG, PDF under 1MB)
- ⚠️ Real-time validation and error display
- ✨ Live preview of the resume before finalizing
- 📄 Resume downloadable as a **PDF**
- 🔁 Reset individual fields or the entire form
- 📱 Fully responsive design for all screen sizes

## 🚀 Technologies Used

- HTML5
- CSS3 (with Media Queries for responsiveness)
- JavaScript (Vanilla)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf) for PDF generation

## 📂 File Structure

resume-builder/
│
├── index.html # Main HTML file
├── style.css # Styling
├── script.js # Core functionality
└── README.md # Project documentation


## 📷 Screenshots

*(Add screenshots here if available)*

## 💡 How to Use

1. Clone this repository or download the ZIP file.
2. Open `index.html` in any modern browser.
3. Fill out your resume details and upload a profile photo.
4. Click **"Generate Resume"** to preview.
5. You can choose to **Edit**, **Confirm**, or **Download as PDF**.
6. Use **Reset** or **Clear All** to modify inputs as needed.

## ✅ Validations

- Email format check
- 10-digit phone number
- Required fields: name, email, phone, education, skills, summary, experience, photo
- File upload size and type restrictions

## 📄 PDF Generation

The resume is converted to a downloadable PDF using `html2pdf.js`.

> ⚠️ Note: This project is designed for academic and demo purposes. Further enhancements like local storage, multi-page resumes, and custom templates can be added.

