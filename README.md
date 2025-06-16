
# Firas Ajengui – Resume Website

This project is a personal resume website built using **React** and deployed via **GitHub Pages**. It showcases professional experience, education, and skills in a clean and interactive layout. The app is animated using Framer Motion and responsive across devices.


---

## 🚀 Live Demo

🔗 [https://agfiras.github.io/resume](https://agfiras.github.io/resume)

---

## 🛠️ Tech Stack

- **React** – Frontend library
- **Framer Motion** – Animations
- **Tailwind CSS** – Utility-first CSS framework
- **GitHub Pages** – Hosting platform

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Agfiras/resume.git
cd resume
npm install
```

---

## 🧪 Development

Run the app locally:

```bash
npm start
```

---

## 🌐 Deployment

This app uses [`gh-pages`](https://www.npmjs.com/package/gh-pages) for deployment.

### 1. Add to `package.json`

```json
"homepage": "https://agfiras.github.io/resume",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 2. Deploy

```bash
npm run deploy
```

---

## 🖼️ Assets & Downloads

- Images and resume PDF are placed in the `public/Images/` directory.
- Resume download button uses:
```jsx
link.href = `${process.env.PUBLIC_URL}/Images/resume.pdf`;
```

---

## 📄 License

This project is licensed for personal use. Contact [Firas Ajengui](https://www.linkedin.com/in/firas-ajengui) for reuse or customization.
