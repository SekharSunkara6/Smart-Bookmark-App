# 🚀 Smart Bookmark App

A **simple and modern bookmark manager** that allows users to save, view, and manage bookmarks in real-time. Built with **Next.js (App Router), Supabase (Auth & Realtime), and Tailwind CSS**.  

---

## 🌟 Features

✅ **Google OAuth Authentication**  
- Sign up and log in using **Google** only (no email/password).  

✅ **Add Bookmarks**  
- Users can add bookmarks with **URL and title**.  

✅ **Private Bookmarks**  
- Each user's bookmarks are **private**. User A cannot see User B's bookmarks.  

✅ **Realtime Updates**  
- Bookmark list updates **instantly across tabs** without page refresh.  

✅ **Delete Bookmarks**  
- Users can delete their own bookmarks.  

✅ **Responsive & Minimal UI**  
- Built with **Tailwind CSS** for a clean, responsive interface.  

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router)  
- **Authentication & Backend:** Supabase (Auth, Database, Realtime)  
- **Styling:** Tailwind CSS  
- **Deployment:** Vercel  

---

## 🔗 Live Demo

🌐 [https://smart-bookmark-app-coral-ten.vercel.app](https://smart-bookmark-app-coral-ten.vercel.app)  

---

## 📂 GitHub Repository

📦 [GitHub Repo](https://github.com/yourusername/smart-bookmark-app)  

---

## ⚙️ Setup & Local Development

1️⃣ **Clone the repo**  
```bash
git clone https://github.com/yourusername/smart-bookmark-app.git
cd smart-bookmark-app
````

2️⃣ **Install dependencies**

```bash
npm install
# or
yarn install
```

3️⃣ **Create `.env.local`**

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

4️⃣ **Run the development server**

```bash
npm run dev
# or
yarn dev
```

* Open [http://localhost:3000](http://localhost:3000)
* Test login with Google and bookmark functionality

---

## 🛠 Deployment on Vercel

1. Push your code to **GitHub**.
2. Import the repo in [Vercel](https://vercel.com/) → New Project → Select GitHub repo.
3. Add the following **Environment Variables** in Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your anon key>
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

4. Set your **Supabase Auth Redirect URLs**:

```
http://localhost:3000/auth/callback
http://localhost:3000/**
http://localhost:3000/dashboard
https://smart-bookmark-app-coral-ten.vercel.app/auth/callback
https://smart-bookmark-app-coral-ten.vercel.app/**
https://smart-bookmark-app-coral-ten.vercel.app/dashboard
```

5. Set your **Google OAuth Client URLs**:

* **JavaScript Origins:**

```
http://localhost:3000
https://smart-bookmark-app-coral-ten.vercel.app
```

* **Redirect URIs:**

```
http://localhost:3000/auth/callback
https://smart-bookmark-app-coral-ten.vercel.app/auth/callback
https://yctynwyftyoiptmojnab.supabase.co/auth/v1/callback
```

6. **Redeploy** on Vercel and test login + bookmark features.

---

## ⚠️ Problems Faced & Solutions

| Problem                                            | Solution                                                                                                                                        |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Google OAuth login failed on Vercel                | Updated **Supabase URL configuration** to include Vercel URLs and added **Vercel URL in Google Cloud OAuth JavaScript Origins & Redirect URIs** |                                        |
| Environment variables not recognized on deployment | Configured **Vercel Environment Variables** properly under **Production** environment                                                           |
| Localhost URLs hardcoded in Supabase               | Added both localhost and Vercel URLs in **Supabase Redirect URLs**                                                                              |

---

## 🧩 How it Works

1. User logs in with **Google OAuth** → Supabase handles authentication.
2. Authenticated users can **add, view, delete bookmarks**.
3. **Realtime subscription** ensures bookmarks update instantly across multiple tabs.
4. All data is **user-specific** — stored securely in Supabase DB.

---

## 📌 Notes

* No email/password authentication — **Google OAuth only**.
* The app is fully **responsive** and works on both desktop and mobile.
* Deployed via **Vercel** for easy access and testing.

---

## 👨‍💻 Author

**PurnaSekhar Sunkara**
📧 Contact: [20221a05b3@gmail.com](mailto:20221a05b3@gmail.com)

---

## ✅ Final Submission

* **Live URL:** [https://smart-bookmark-app-coral-ten.vercel.app](https://smart-bookmark-app-coral-ten.vercel.app)
* **GitHub Repo:** [https://github.com/yourusername/smart-bookmark-app](https://github.com/yourusername/smart-bookmark-app)
