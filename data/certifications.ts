export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerBadge?: string;
  issueDate: string;
  validThrough?: string;
  credentialId?: string;
  description: string;
  skills: string[];
  image: string;
  pdfUrl?: string;
  verificationUrl?: string;
  isVerified: boolean;
  category: "Machine Learning" | "Data Science" | "Deep Learning";
}

export const certifications: CertificationItem[] = [
  {
    id: "idcamp-expert-ai-2025",
    title: "IDCamp 2025 Level Expert: AI Engineer",
    issuer: "Dicoding Indonesia & Indosat Ooredoo Hutchison",
    issuerBadge: "Level Expert",
    issueDate: "20 Agustus 2026",
    credentialId: "IDCAMP2025/L3-AI-002",
    description: "Successfully graduated from the intensive AI Engineer learning track at the Expert/Mahir level from the IDCamp 2025 program with an estimated total of 90 learning hours. Validates competencies in advanced machine learning, deep learning, SLM/LLM orchestration, and production MLOps.",
    skills: [
      "AI Engineering",
      "Deep Learning",
      "LLM / SLM Integration",
      "TensorFlow",
      "PyTorch",
      "MLOps & Deployment"
    ],
    image: "/certificates/idcamp-ai-engineer-2025.png",
    pdfUrl: "/certificates/idcamp-ai-engineer-2025.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/IDCAMP2025/L3-AI-002",
    isVerified: true,
    category: "Deep Learning"
  },
  {
    id: "lintasarta-mahir-ml-2024",
    title: "Machine Learning Developer (Level Mahir / Expert)",
    issuer: "Lintasarta Cloudeka Digischool 2023 & Dicoding",
    issuerBadge: "Level Mahir (Expert)",
    issueDate: "19 Juni 2024",
    credentialId: "Digischool/L2-ML-014",
    description: "Successfully completed coding training on the Machine Learning Developer Learning Path at the expert (mahir) level from the Lintasarta Cloudeka Digischool program. Validates deep capabilities in machine learning modeling, algorithm evaluation, and intelligent systems deployment.",
    skills: [
      "Machine Learning",
      "Model Evaluation",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Cloud Deployment"
    ],
    image: "/certificates/lintasarta-mahir.png",
    pdfUrl: "/certificates/lintasarta-mahir.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/Digischool/L2-ML-014",
    isVerified: true,
    category: "Machine Learning"
  },
  {
    id: "dcml-tensorflow-2026",
    title: "Dev Certification for Machine Learning with TensorFlow (DCML)",
    issuer: "dev.id Certification",
    issuerBadge: "Certified Developer",
    issueDate: "15 July 2026",
    validThrough: "15 July 2029",
    credentialId: "41VQDJRWM8",
    description: "Successfully passed all certification stages encompassing a rigorous examination, comprehensive machine learning project submission, and technical exit interview. Validates proficiency in TensorFlow, convolutional architectures, sequence modeling, and production deployment.",
    skills: [
      "TensorFlow",
      "Deep Learning",
      "Computer Vision",
      "Time-Series Forecasting",
      "Model Optimization",
      "Technical Exit Interview"
    ],
    image: "/certificates/dcml-tensorflow.png",
    pdfUrl: "/certificates/dcml-tensorflow.pdf",
    verificationUrl: "https://dev.id/certificate/verify/41VQDJRWM8",
    isVerified: true,
    category: "Machine Learning"
  },
  {
    id: "idcamp-data-scientist-2024",
    title: "IDCamp 2024 Level Expert: Data Scientist",
    issuer: "Dicoding Indonesia & Indosat Ooredoo Hutchison",
    issuerBadge: "Level Expert",
    issueDate: "2024",
    credentialId: "IDCAMP2024/L3-DS-014",
    description: "Comprehensive certification validating end-to-end data science pipelines: advanced exploratory data analysis, data cleaning, outlier imputation, feature engineering, and predictive modeling using Scikit-learn, Pandas, and Python.",
    skills: [
      "Data Science",
      "Scikit-learn",
      "Feature Engineering",
      "Pandas & NumPy",
      "Exploratory Data Analysis",
      "Model Evaluation"
    ],
    image: "/certificates/idcamp-data-scientist-2024.png",
    pdfUrl: "/certificates/idcamp-data-scientist-2024.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/IDCAMP2024/L3-DS-014",
    isVerified: true,
    category: "Data Science"
  }
];
