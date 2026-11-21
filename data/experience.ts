export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  bullets: string[];
  technologies: string[];
  metrics?: { label: string; value: string };
}

export const experiences: ExperienceItem[] = [
  {
    id: "rumah-digicraft-intern",
    role: "Machine Learning Engineer Intern",
    company: "Rumah Digicraft (PT Rumah Digital Kreasi)",
    location: "Remote, Indonesia",
    period: "December 2025 - March 2026",
    type: "Internship",
    description: "Spearheaded computer vision character recognition pipelines and mobile model deployment for digital products.",
    bullets: [
      "Collected, cleaned, labeled, and prepared large-scale image datasets for computer vision model development, ensuring high data quality and annotation consistency across training and validation splits.",
      "Architected and trained deep neural networks for optical character and pattern recognition, achieving up to 92% evaluation accuracy on internal test benchmarks.",
      "Optimized model inference latency and integrated trained weights into production pipelines using Firebase ML for reliable deployment across client applications.",
      "Troubleshot data preprocessing bottlenecks and conducted systematic hyperparameter tuning, improving overall model stability and robustness in production."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Computer Vision", "Firebase ML", "OpenCV"],
    metrics: { label: "Benchmark Accuracy", value: "92% Accuracy" }
  },
  {
    id: "fastwork-freelance",
    role: "Freelance Machine Learning Engineer",
    company: "Fastwork Technologies Indonesia",
    location: "Remote, Indonesia",
    period: "February 2025 - October 2025",
    type: "Freelance",
    description: "Delivered customized machine learning solutions, predictive models, and comprehensive data engineering pipelines for commercial clients.",
    bullets: [
      "Successfully delivered 16+ commercial AI/ML projects end-to-end covering data mining, predictive analytics, Natural Language Processing (NLP), and computer vision model deployment.",
      "Designed bespoke machine learning and automated data engineering pipelines strictly aligned with client operational specifications and performance KPIs.",
      "Maintained a 100% project completion rate and achieved a consistent 5.0/5.0 client satisfaction rating through clear technical communication and on-schedule delivery."
    ],
    technologies: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "Pandas", "Streamlit", "Plotly"],
    metrics: { label: "Client Rating", value: "5.0 / 5.0 Rating" }
  },
  {
    id: "gdg-mentor",
    role: "GDG Mentor: AI/ML Weekly Class",
    company: "GDG on Campus UIN Syarif Hidayatullah Jakarta",
    location: "Jakarta, Indonesia (Hybrid)",
    period: "March 2025 - April 2025",
    type: "Mentorship",
    description: "Mentored university students in foundational and applied machine learning, guiding practical implementations and algorithmic understanding.",
    bullets: [
      "Mentored university students across weekly intensive sessions on practical AI and Machine Learning principles.",
      "Deconstructed complex mathematical concepts behind gradient descent, cost functions, decision trees, and neural networks into intuitive lessons.",
      "Guided students through hands-on laboratory exercises, including exploratory data analysis, feature engineering, and model evaluation in Python.",
      "Provided personalized code reviews, architectural advice, and debugging assistance for student final showcase projects."
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Jupyter Notebooks", "Teaching"],
    metrics: { label: "Cohort Focus", value: "Applied ML Curriculum" }
  }
];
