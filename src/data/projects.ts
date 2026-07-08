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
  accent: string;
}

export const categoryLabels: Record<Category, string> = {
  ml: "Machine Learning",
  fullstack: "Full-Stack",
  design: "Design",
};

export const projects: Project[] = [
  {
    slug: "aromallure",
    title: "Aromallure",
    tagline: "Elegance in a Bottle — a full-stack perfume e-commerce store",
    description:
      "A production e-commerce storefront built end-to-end on Django: product catalog, cart and checkout flow, admin dashboard for store management, cloud image storage, and transactional email. Designed the brand identity, logo, and homepage entrance animation myself, then engineered the backend to serve it.",
    categories: ["fullstack", "design"],
    stack: ["Django", "PostgreSQL", "Cloudinary", "Resend", "Whitenoise", "Render"],
    highlights: [
      "Full storefront: catalog, cart, checkout, and order management",
      "Custom brand identity and logo design, background-removed and composited by hand",
      "Homepage entrance animation respecting prefers-reduced-motion and working without JS",
      "Deployed to production with Postgres, Cloudinary media storage, and Gunicorn",
    ],
    liveUrl: "https://aromallure.store/",
    repoUrl: "https://github.com/eddy-jordan/aromallure",
    accent: "from-fuchsia-500 to-amber-400",
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
      "EDA and feature engineering on a 1,000-record clinical dataset — HbA1c and BMI identified as key predictors",
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
      "A Streamlit application that predicts loan approval outcomes with a confidence gauge, an EMI calculator, and a 'Why This Decision' panel that surfaces the feature importances behind each prediction — built to make a black-box model legible to a non-technical end user.",
    categories: ["ml"],
    stack: ["Python", "Streamlit", "Scikit-learn", "Random Forest"],
    highlights: [
      "Approve/Reject prediction with a visual confidence gauge",
      "'Why This Decision' explainability panel built on feature importance scores",
      "Built-in EMI (monthly repayment) calculator",
      "Reference statistics pipeline for comparing an applicant against the training distribution",
    ],
    liveUrl: "https://eddy-jordan-new-loan-app-s7or6j.streamlit.app/",
    repoUrl: "https://github.com/eddy-jordan/new_loan",
    accent: "from-cyan-400 to-emerald-400",
  },
];
