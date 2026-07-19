export type Category = "ml" | "fullstack" | "design";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  categories: Category[];
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Use when a project ships more than one live demo (e.g. multiple deployed services). */
  demos?: { label: string; url: string }[];
  featured?: boolean;
  accent: string;
}

export const categoryLabels: Record<Category, string> = {
  ml: "Machine Learning",
  fullstack: "Full-Stack",
  design: "Design",
};

export const projects: Project[] = [
  {
    slug: "mlops-portfolio",
    title: "MLOps Portfolio, Credit Risk & Medical Imaging",
    tagline: "Two production ML systems, one self-updating MLOps pipeline",
    description:
      "A leakage-safe credit risk classifier and a chest X-ray pneumonia detector, both served through Dockerized FastAPI APIs behind a GitHub Actions pipeline that retrains, evaluates against the live production baseline, and only redeploys a new model when it actually improves.",
    categories: ["ml", "fullstack"],
    featured: true,
    stack: ["Python", "PyTorch", "Scikit-learn", "MLflow", "Docker", "FastAPI", "ONNX Runtime", "Evidently AI", "GitHub Actions"],
    highlights: [
      "Leakage-safe preprocessing pipeline; tracked 12 training runs in MLflow, selecting a Gradient Boosting classifier at 93.4% accuracy and 0.949 AUC-ROC",
      "Fine-tuned a ResNet50 (PyTorch transfer learning) for pneumonia detection from chest X-rays, reaching 95% recall with early stopping and LR scheduling",
      "Converted the model to ONNX Runtime, cutting inference latency 72.9% (366ms → 99ms) with no loss in accuracy",
      "Containerized the FastAPI prediction service with Docker and added automated data drift detection with Evidently AI",
      "Self-updating GitHub Actions CI/CD pipeline: retrains, evaluates against the production baseline, and auto-deploys only if the new model improves",
    ],
    demos: [
      { label: "Credit Risk Demo", url: "https://jobkaton.onrender.com" },
      { label: "Pneumonia X-Ray Demo", url: "https://pneumonia-api-ffo7.onrender.com" },
    ],
    repoUrl: "https://github.com/eddy-jordan/jobkaton",
    accent: "from-blue-500 to-violet-500",
  },
  {
    slug: "aromallure",
    title: "Aromallure",
    tagline: "Elegance in a Bottle, a full-stack perfume e-commerce store",
    description:
      "A freelance client project: a full-stack Django + HTMX + Alpine.js e-commerce storefront processing real customer orders through Mobile Money, with an admin dashboard, cloud image storage, and transactional email. Designed the brand identity, logo, and homepage entrance animation myself, then engineered the backend to serve it.",
    categories: ["fullstack", "design"],
    stack: ["Django", "HTMX", "Alpine.js", "PostgreSQL", "Cloudinary", "Resend", "Render"],
    highlights: [
      "Full storefront: catalog, cart, checkout, and order management, processing real orders via Mobile Money integration",
      "Custom brand identity and logo design, background-removed and composited by hand",
      "Custom admin dashboard, Cloudinary media pipeline, and automated transactional email system",
      "Deployed to production on Render with a custom domain",
    ],
    liveUrl: "https://aromallure.store/",
    repoUrl: "https://github.com/eddy-jordan/aromallure",
    accent: "from-fuchsia-500 to-amber-400",
  },
  {
    slug: "stride-shoe-store",
    title: "STRIDE",
    tagline: "Full-stack shoe store with role-based admin and live payments",
    description:
      "A production e-commerce shoe store built on Next.js and Postgres, with a category and size filtered catalog, cart, Paystack checkout, customer order history, and a role-gated admin dashboard for inventory and orders.",
    categories: ["fullstack"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Auth.js", "Paystack", "Vercel Blob"],
    highlights: [
      "Checkout re-validates every price and stock level server-side inside a transaction, never trusting client-submitted totals",
      "Payment confirmation runs through two independent, idempotent paths, a webhook and a redirect callback, both converging on the same order-fulfillment logic",
      "Role-based access (CUSTOMER/ADMIN) enforced in middleware and again server-side on every admin route",
      "Scheduled cron job sweeps abandoned pending orders to failed after an hour",
    ],
    liveUrl: "https://shoe-store-six-nu.vercel.app/",
    repoUrl: "https://github.com/eddy-jordan/shoe_store",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    slug: "cloth-store",
    title: "Cloth Store",
    tagline: "Clothing storefront with a custom glassmorphism theme system",
    description:
      "A full-stack clothing e-commerce platform (T-shirts, hoodies, outerwear, African wear) with guest checkout, an admin dashboard, and a hand-built glassmorphism design system with a persistent light/dark toggle.",
    categories: ["fullstack", "design"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL (Neon)", "NextAuth", "Paystack", "Vercel Blob"],
    highlights: [
      "Guest-friendly checkout, no order is created in the database until Paystack payment actually succeeds",
      "Idempotent dual-path order fulfillment (webhook + success-page verification) safely races without double-fulfilling",
      "Custom glassmorphism theme system with a light/dark toggle driven by a data-theme attribute, not just prefers-color-scheme",
      "Admin product image uploads go straight from the browser to Vercel Blob, bypassing serverless body-size limits",
    ],
    liveUrl: "https://cloth-store-plum.vercel.app/",
    repoUrl: "https://github.com/eddy-jordan/cloth_store",
    accent: "from-rose-500 to-pink-400",
  },
  {
    slug: "diabetes-risk-predictor",
    title: "Diabetes Risk Predictor",
    tagline: "Full-stack ML app predicting diabetes risk from clinical data",
    description:
      "Trained and benchmarked three classification models on a clinical dataset, then shipped the winner behind a Flask REST API with a custom frontend for real-time predictions. Random Forest was selected after evaluating accuracy, recall, and F1-score, reaching 99.5% accuracy.",
    categories: ["ml", "fullstack"],
    stack: ["Python", "Scikit-learn", "Flask", "HTML/CSS/JS", "Render"],
    highlights: [
      "99.5% accuracy Random Forest classifier, benchmarked against Logistic Regression and Decision Trees",
      "EDA and feature engineering on a 1,000-record clinical dataset, HbA1c and BMI identified as key predictors",
      "Model serialized with joblib and served through a Flask REST API",
      "Custom frontend for real-time risk prediction, deployed live on Render",
    ],
    liveUrl: "https://predict-qbb5.onrender.com/",
    repoUrl: "https://github.com/eddy-jordan/predict",
    accent: "from-violet-500 to-cyan-400",
  },
  {
    slug: "loan-approval-predictor",
    title: "Loan Approval Predictor",
    tagline: "ML-powered loan decisioning with an explainability panel",
    description:
      "A Streamlit application that predicts loan approval outcomes with a confidence gauge, an EMI calculator, and a 'Why This Decision' panel that surfaces the feature importances behind each prediction, built to make a black-box model legible to a non-technical end user.",
    categories: ["ml"],
    stack: ["Python", "Streamlit", "Scikit-learn", "Random Forest"],
    highlights: [
      "Random Forest classifier reaching 83.7% accuracy on Approve/Reject prediction, with a visual confidence gauge",
      "'Why This Decision' explainability panel built on feature importance scores",
      "Built-in EMI (monthly repayment) calculator",
      "Reference statistics pipeline for comparing an applicant against the training distribution",
    ],
    liveUrl: "https://eddy-jordan-new-loan-app-s7or6j.streamlit.app/",
    repoUrl: "https://github.com/eddy-jordan/new_loan",
    accent: "from-cyan-400 to-emerald-400",
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    tagline: "XGBoost regression with a 79-feature preprocessing pipeline",
    description:
      "A regression model predicting house prices, built around a heavily engineered 79-feature preprocessing pipeline and tuned through regularization to control overfitting on a high-dimensional feature set.",
    categories: ["ml"],
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    highlights: [
      "XGBoost regression model reaching an R² of 0.90",
      "79-feature preprocessing pipeline covering encoding, scaling, and feature engineering",
      "33% RMSE improvement through regularization tuning",
    ],
    accent: "from-orange-400 to-amber-300",
  },
];
