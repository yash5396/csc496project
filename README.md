# Gatsby Project: Blog & Recipe Site 🚀

This is a dynamic Gatsby site crafted as part of my Senior Seminar course at Eastern Kentucky University! With Docker, GraphQL, and automated deployment, this project delivers a seamless blog and recipe experience powered by modern web technologies.

## 🗂️ Overview
This site combines blog posts and recipe content through APIs, making it an ideal setup for managing diverse, content-rich pages. Key features include SEO optimization, a scalable architecture, and an automated CI/CD pipeline.

## Table of Contents
1. [Setup Instructions](#setup-instructions)
2. [Project Highlights](#project-highlights)
3. [Tech Stack](#tech-stack)
4. [Working with Content](#working-with-content)
5. [Testing Procedures](#testing-procedures)
6. [Deployment Process](#deployment-process)

## 🛠️ Setup Instructions
Here’s a quick guide to running the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yash5396/csc496project.git
   
2. **Navigate to the project directory**:
   ```bash
   cd my-first-gatsby-site
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   gatsby develop
   ```

## 🎨 Project Highlights

- Content-Driven Design: Fetches data dynamically for blog posts and recipes.
- SEO Ready: Uses a flexible Seo component for improved visibility on search engines.
- Containerized with Docker: Easy to deploy, maintain, and replicate across environments.
- Easy Blog Management: Write blog posts in .mdx files and add them to the /blog directory for instant publishing.

## 💻 Tech Stack

- Gatsby for static site generation and dynamic routing.
- GraphQL to manage and query data.
- Docker for deploying in consistent, portable environments.
- GitHub Actions for automated CI/CD processes.
  
## 📄 Working with Content
- To add new blog posts, create a new folder within /blog. Each folder represents a separate blog entry, making content updates straightforward and manageable.

## 🔍 Testing Procedures
This project includes a suite of tests to ensure quality and stability. Run tests with:

```bash
npm test
```

## Components Tested
- SEO Component: Ensures correct metadata for all pages.
- Mock Data: Tests data-driven components, like recipe ingredients.
- Collections: Validates the structure of content collections, such as articles.
## 🚀 Deployment Process
This project deploys automatically with GitHub Actions:

- Push code to the main branch.
- GitHub Actions runs tests, builds the project, and deploys it.
- The Docker container is updated on student10.wendell.tech, enabling smooth, zero-downtime updates.


