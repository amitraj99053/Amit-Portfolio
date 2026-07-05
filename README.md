# Amit Kumar - Full Stack Developer Portfolio

Welcome to the repository of my personal developer portfolio website. This is a premium, high-performance, and fully responsive single-page portfolio designed with a futuristic dark-mode glassmorphism aesthetic. It showcases my technical proficiency, academic highlights, professional experience, career path, and active projects.

## 🚀 Live Preview
The frontend of the portfolio is configured and ready for automated deployment on **Vercel** and connects to a backend API service running on **Render**.

* **Live Portfolio URL:** [https://amit-portfolio-lac.vercel.app/](https://amit-portfolio-lac.vercel.app/)
* **Local Preview Server:** [http://localhost:5173/](http://localhost:5173/)

---

## 🛠️ Tech Stack & Architecture

* **Frontend:** React 19, Vite (Fast HMR & Bundling), Tailwind CSS, Framer Motion (Smooth Micro-interactions & Entrances), Lucide Icons.
* **Backend Integration:** Connects dynamically to an Express/MongoDB backend service via a CORS-aware API layer ([apiConfig.js](src/apiConfig.js)).

---

## ✨ Features

1. **GitHub Profile Integration:** Directly fetches and renders my GitHub display avatar dynamically inside a glowing, circular holographic layout in the Hero section.
2. **Professional Education & Highlights:** Detailed summaries of my Master of Computer Applications (MCA) at GL Bajaj and Bachelor of Computer Applications (BCA) at VBU.
3. **Responsive Timeline Grid:** Custom experience cards tracking internships, remote positions, and freelance contracts.
4. **Career Aspirations Tracker:** Categorized goal cards outlining competencies in MERN Stack, Data Analysis, and Quality Assurance (QA).
5. **Secure Contact Portal:** A functional connection form that communicates with the Render API.
6. **Scroll-to-Top Flow:** Floating action trigger that fades in below 400px scroll depth for easy page resetting.
7. **Universal Device Responsiveness:** Custom padding ranges (`p-6 sm:p-8 md:p-10`) and fluid grid spans optimized for mobile (iPhone SE up), tablet, and UltraWide desktop displays.

---

## 🔒 Security Implementations

Adhering to secure software development lifecycle (SDLC) practices, the following protections have been applied:
* **Honeypot Spam Defense:** Embedded an invisible honeypot input trap in the contact form to reject bot submissions without consuming server compute.
* **XSS Attack Mitigation:** Sanitizes input strings by escaping dangerous HTML characters prior to transmitting payloads.
* **Double Submission Guard:** The submission button locks and disables dynamically during API requests to prevent rapid click spam.
* **Vercel Security Headers:** Configured custom HTTP headers in `vercel.json` to block **Clickjacking** (`X-Frame-Options: DENY`), prevent **MIME Sniffing** (`nosniff`), enforce browser-level **XSS protection**, and control referrer leaks (`Referrer-Policy`).
* **Reverse Tabnabbing Mitigation:** Anchored external links with `target="_blank" rel="noopener noreferrer"` to prevent malicious linked tabs from obtaining window parent control.

---

## 💻 Local Development Setup

To run this project on your computer:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amitraj99053/Amit-Portfolio.git
   cd Amit-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

4. **Build production assets:**
   ```bash
   npm run build
   ```
   Compiles optimized production-ready HTML, CSS, and JS bundles to the `/dist` directory.
