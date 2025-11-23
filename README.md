# Modern Portfolio

A stunning, fully responsive, and interactive developer portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase your skills, experience, and projects with a premium, Netflix-inspired aesthetic.

![Portfolio Preview](https://i.imgur.com/your-preview-image.png)

## 🚀 Features

-   **Modern & Responsive Design**: Works seamlessly on desktop, tablet, and mobile.
-   **Dynamic Content**: All data (profile, experience, projects, skills) is driven by a single JSON file (`src/data/resume.json`).
-   **Smooth Animations**: Powered by Framer Motion for a polished user experience.
-   **Interactive UI**: Hover effects, smooth scrolling, and engaging micro-interactions.
-   **Contact Form**: Integrated with Formspree for easy email handling.
-   **SEO Optimized**: Built with Next.js for excellent performance and SEO.
-   **Dark Mode**: Sleek, dark-themed UI with vibrant accents.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
-   **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

### Prerequisites

-   Node.js 18+ installed
-   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

This portfolio is designed to be easily customizable. You don't need to touch the code to update your information!

1.  **Update Data**: Open `src/data/resume.json`. This file contains all the information displayed on the site.
    *   **personalInfo**: Name, title, contact info, social links.
    *   **education**: Your academic background.
    *   **experience**: Work history.
    *   **skills**: Technical skills categorized by type.
    *   **projects**: Your portfolio projects.
    *   **certifications**: Your certificates.

2.  **Update Images**:
    *   Place your profile picture in `public/` (e.g., `profile.jpg`).
    *   Update the reference in your code if you change the filename.

3.  **Contact Form**:
    *   Create a free form at [Formspree](https://formspree.io/).
    *   Get your Form ID.
    *   Update the `formId` in `src/components/Contact.tsx` or set it as an environment variable `NEXT_PUBLIC_FORMSPREE_ID`.

## 🚀 Deployment

The easiest way to deploy is using **Vercel**.

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and sign up/login.
3.  Click **Add New Project** and import your repository.
4.  Click **Deploy**.

Your site will be live in minutes!

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Created by [Neel Suthar](https://github.com/Neel1901dev)**
