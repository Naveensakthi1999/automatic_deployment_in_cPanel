# React + Node.js Deployment on cPanel

This project demonstrates how to deploy a React frontend and a Node.js backend on cPanel using GitHub integration.

## 📂 Project Structure
my-app/
├── backend/ # Node.js + Express server
│ ├── server.js
│ ├── package.json
│ └── routes/
│ └── index.js
│
├── frontend/ # React app
│ ├── public/
│ └── src/
│
└── .cpanel.yml # Deployment config for cPanel

## 🚀 Deployment Steps
1. Create a Git repo in cPanel (via **Git Version Control**).
2. Connect GitHub repo → cPanel.
3. Place `.cpanel.yml` in the root of your project.
4. Push code to GitHub.
5. cPanel will automatically:
   - Install backend dependencies
   - Restart Node.js app
   - Build frontend
   - Deploy frontend build into `public_html/`

## 🔗 Access
- **Frontend** → `https://yourdomain.com/`
- **Backend API** → `https://yourdomain.com/api`
