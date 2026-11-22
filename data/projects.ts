export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectArchitectureNode {
  layer: string;
  component: string;
  role: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category:
    | "Predictive ML"
    | "Computer Vision"
    | "Generative AI & RAG"
    | "Conversational AI"
    | "Audio Deep Learning";
  featured: boolean;
  statusBadge: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solutionHighlights: string[];
  metrics: ProjectMetric[];
  architecture?: ProjectArchitectureNode[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "smartdist-ai",
    title: "SmartDist AI",
    subtitle: "Intelligent Distribution & Retail Management System",
    category: "Predictive ML",
    featured: true,
    statusBadge: "253 Tests Passed • Production ML",
    image: "/projects/smartdist-ai.png",
    shortDescription:
      "Enterprise retail forecasting platform combining LightGBM & XGBoost (13.09% WAPE) across 54 stores with inventory optimization.",
    fullDescription:
      "SmartDist AI is a data-driven distribution and retail operations platform that integrates multi-horizon machine learning demand forecasting (7, 14, and 30 days) on 648,648 historical daily sales records across 54 stores, operations-research inventory procurement optimization, multi-evidence anomaly detection, and a deterministic offline-first business assistant.",
    problemStatement:
      "Retail distribution networks struggle with multi-store stockouts, overstocking, and volatile regional demand across dozens of product categories.",
    solutionHighlights: [
      "Trained and validated LightGBM & XGBoost forecasting pipelines on 648,648 historical daily sales records across 54 stores and 33 product families.",
      "Achieved 13.09% validation WAPE across 7-day, 14-day, and 30-day forecasting horizons (+25.9% improvement over baseline).",
      "Engineered Operations Research inventory procurement optimization and multi-evidence anomaly detection.",
      "Built full-stack production architecture with FastAPI, Next.js 14, PostgreSQL 16, Redis 7, Celery 5.4, and Docker (253 automated tests passing)."
    ],
    metrics: [
      { label: "Records Modeled", value: "648,648" },
      { label: "Validation WAPE", value: "13.09%" },
      { label: "Retail Stores", value: "54 Stores" },
      { label: "Test Suite", value: "253 Passed" }
    ],
    architecture: [
      {
        layer: "Data & Feature Store",
        component: "PostgreSQL 16 + Pandas ETL",
        role: "648K daily records with lag, rolling window, and calendar features"
      },
      {
        layer: "ML & Optimization Engine",
        component: "LightGBM + XGBoost + OR",
        role: "Multi-horizon forecasting (7d/14d/30d), anomaly detection & stock optimization"
      },
      {
        layer: "Backend & Async Workers",
        component: "FastAPI + Celery 5.4 + Redis 7",
        role: "REST API microservices, background batch inference, and caching"
      },
      {
        layer: "Frontend & Deployment",
        component: "Next.js 14 + Docker",
        role: "Interactive executive dashboard & non-root multi-stage containers"
      }
    ],
    technologies: [
      "Python",
      "LightGBM",
      "XGBoost",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker"
    ],
    githubUrl: "https://github.com/azharzuhro12/smartdist-ai"
  },
  {
    id: "bizintel-ai",
    title: "BizIntel AI",
    subtitle: "Agentic Business Intelligence & Decision Support Platform",
    category: "Generative AI & RAG",
    featured: true,
    statusBadge: "Live Demo • LangGraph Agent",
    image: "/projects/bizintel-ai.png",
    shortDescription:
      "Agentic business intelligence combining LangGraph tool calling, revenue forecasting, operational RAG, and 296 passing tests.",
    fullDescription:
      "BizIntel AI is a business intelligence and decision-support platform that combines a PostgreSQL 17 analytics layer, machine-learning revenue forecasting, anomaly detection, Retrieval-Augmented Generation (RAG), and a LangGraph agentic workflow with tool calling, per-session conversation memory, audit logging, and a deterministic evaluation harness inside a custom Next.js 16 dashboard.",
    problemStatement:
      "Business decision-makers need an AI assistant that queries real relational metrics, forecasts revenue, detects anomalies, and cites policies without hallucinating numbers.",
    solutionHighlights: [
      "Engineered a LangGraph agentic workflow with deterministic tool calling, session conversation memory, and audit logging.",
      "Integrated ML revenue forecasting, statistical anomaly detection, and RAG over operational documents.",
      "Built a Next.js 16 BI dashboard and FastAPI backend backed by PostgreSQL 17 and Docker Compose.",
      "Verified reliability with 226 backend + 70 frontend automated tests and deployed a live cloud demo."
    ],
    metrics: [
      { label: "Automated Tests", value: "296 Passed" },
      { label: "Agent Framework", value: "LangGraph" },
      { label: "Database", value: "PostgreSQL 17" },
      { label: "Deployment", value: "Live on Vercel" }
    ],
    technologies: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "RAG",
      "Docker"
    ],
    githubUrl: "https://github.com/azharzuhro12/BizIntelAI",
    demoUrl: "https://bizintelai-frontend.vercel.app"
  },
  {
    id: "catat-ai",
    title: "CatatAI",
    subtitle: "Multimodal AI Financial Assistant for MSMEs (UMKM)",
    category: "Generative AI & RAG",
    featured: true,
    statusBadge: "Live Demo • Multimodal Voice & OCR",
    image: "/projects/catat-ai.png",
    shortDescription:
      "Multimodal bookkeeping web app turning colloquial Indonesian chat, Whisper voice notes, and receipt photos into financial dashboards.",
    fullDescription:
      "CatatAI helps micro and small merchants record daily finances effortlessly using natural Indonesian warung expressions ('utang galon', 'kulakan', 'bon', 'bayar separo'). Users can type via chat, speak via voice recording (Whisper transcription), or snap receipt photos (multimodal vision OCR) to automatically log transactions and generate financial insights.",
    problemStatement:
      "Small merchants rarely use complex accounting software and need a natural chat, voice, and receipt-photo interface that understands everyday colloquial language.",
    solutionHighlights: [
      "Built natural language transaction parsing capable of understanding colloquial Indonesian merchant terms.",
      "Integrated speech-to-text voice recording via Whisper and multimodal receipt image scanning.",
      "Developed interactive daily, weekly, and monthly net-profit dashboards with automated AI financial insights.",
      "Deployed live frontend and FastAPI backend microservices on Vercel."
    ],
    metrics: [
      { label: "Input Modes", value: "Chat, Voice, OCR" },
      { label: "Speech Model", value: "Whisper AI" },
      { label: "Frontend", value: "Next.js 14" },
      { label: "Status", value: "Live Demo" }
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "Whisper",
      "Multimodal LLM",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/azharzuhro12/catat-ai",
    demoUrl: "https://catat-ai-azhars-projects-da34b643.vercel.app"
  },
  {
    id: "researchflow-ai",
    title: "ResearchFlow AI",
    subtitle: "Autonomous AI Research & Citation Validation Platform",
    category: "Generative AI & RAG",
    featured: false,
    statusBadge: "Vector RAG • Server-Validated Citations",
    image: "/projects/researchflow-ai.png",
    shortDescription:
      "Autonomous research pipeline executing query decomposition, vector indexing, server-side citation validation, and PDF export.",
    fullDescription:
      "ResearchFlow AI transforms a single research question into a multi-stage research plan, searches and extracts sources into a local vector database, synthesizes grounded reports with server-validated inline citations in Markdown and PDF formats, and supports scheduled automated delivery to Discord.",
    problemStatement:
      "Standard LLMs frequently fabricate citations; researchers need an autonomous pipeline that indexes real sources and verifies every inline citation server-side.",
    solutionHighlights: [
      "Built an end-to-end RAG pipeline from automated query planning and web extraction to local vector database indexing.",
      "Implemented server-side citation validation so every generated claim links to a verified source chunk.",
      "Added automated Markdown & PDF report generation plus scheduled research jobs with Discord notifications."
    ],
    metrics: [
      { label: "Retrieval", value: "Vector DB + RAG" },
      { label: "Citations", value: "Server-Validated" },
      { label: "Export", value: "Markdown & PDF" },
      { label: "Automation", value: "Scheduled + Discord" }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Next.js",
      "TypeScript",
      "Docker"
    ],
    githubUrl: "https://github.com/azharzuhro12/ResearchFlow-AI"
  },
  {
    id: "tahsin-qiroah-ai",
    title: "Tahsin Qiro'ah AI",
    subtitle: "2D CNN Audio Classification & Qwen2.5 SLM Feedback",
    category: "Audio Deep Learning",
    featured: false,
    statusBadge: "790 Audio Records • 2D CNN + SLM",
    image: "/projects/tahsin-qiroah.png",
    shortDescription:
      "Deep learning speech assessment system combining 2D CNN Mel-spectrograms with Qwen2.5-1.5B SLM pedagogical feedback.",
    fullDescription:
      "Developed as a bachelor's thesis at Universitas Darussalam Gontor, this system evaluates Arabic ghunnah pronunciation from audio recordings. It extracts Mel-spectrograms and MFCCs from 790 curated recordings across 200 speakers, classifies pronunciation accuracy using a 2D Convolutional Neural Network (70.51% test accuracy), and integrates Qwen2.5-1.5B-Instruct SLM to generate natural pedagogical feedback in Indonesian.",
    problemStatement:
      "Self-directed Quranic recitation learners lack immediate, objective feedback on nasalized phonetic rules (ghunnah) outside live teacher sessions.",
    solutionHighlights: [
      "Curated and preprocessed 790 verified audio recordings from 200 speakers with STFT Mel-spectrogram and MFCC feature extraction.",
      "Benchmark-compared 1D CNN, 2D CNN, and CRNN architectures, achieving 70.51% test accuracy and 70.47% macro F1-score with 2D CNN.",
      "Integrated Qwen2.5-1.5B-Instruct Small Language Model to translate acoustic confidence scores into clear Indonesian learning feedback."
    ],
    metrics: [
      { label: "Audio Dataset", value: "790 Recordings" },
      { label: "Speakers", value: "200 Contributors" },
      { label: "Test Accuracy", value: "70.51% (2D CNN)" },
      { label: "SLM Engine", value: "Qwen2.5-1.5B" }
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "2D CNN",
      "Librosa",
      "Qwen2.5-1.5B",
      "Audio Processing"
    ],
    githubUrl: "https://github.com/azharzuhro12/skripsi-ghunnah-slm"
  },
  {
    id: "mlops-tfx-pipeline",
    title: "End-to-End MLOps Pipeline",
    subtitle: "TFX Orchestration, TF Serving, Prometheus & Grafana Monitoring",
    category: "Predictive ML",
    featured: false,
    statusBadge: "TFX + Docker • 97.16% Binary Accuracy",
    image: "/projects/mlops-pipeline.png",
    shortDescription:
      "Automated TFX MLOps pipeline for sentiment classification with Bi-LSTM (97.16% acc), TF Serving Docker, and Prometheus/Grafana.",
    fullDescription:
      "An end-to-end MLOps pipeline for automated customer sentiment classification across 7,920 product tweets. Orchestrated using TensorFlow Extended (TFX) and Apache Beam with SQLite metadata tracking, the pipeline automates data ingestion, schema validation, TensorFlow Transform preprocessing, KerasTuner RandomSearch, Bidirectional LSTM training (97.16% Binary Accuracy, 0.73 AUC), TFMA model blessing gates, and containerized TensorFlow Serving monitored in real time via Prometheus and Grafana.",
    problemStatement:
      "Technology brands receive thousands of unstructured customer tweets daily; manual model deployment causes training-serving skew and lacks real-time production observability.",
    solutionHighlights: [
      "Orchestrated a 9-stage TFX pipeline (CsvExampleGen, Transform, Tuner, Trainer, Evaluator, Pusher) with Apache Beam and SQLite metadata tracking.",
      "Trained a Bidirectional LSTM model with KerasTuner RandomSearch achieving 97.16% binary accuracy and 0.0897 loss.",
      "Packaged the blessed SavedModel into Dockerized TensorFlow Serving with Prometheus scraping and Grafana observability dashboards."
    ],
    metrics: [
      { label: "Orchestrator", value: "TFX + Beam" },
      { label: "Binary Accuracy", value: "97.16% (Bi-LSTM)" },
      { label: "Serving", value: "TF Serving Docker" },
      { label: "Observability", value: "Prometheus & Grafana" }
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "TFX",
      "Docker",
      "Prometheus",
      "Grafana",
      "MLOps"
    ],
    githubUrl:
      "https://github.com/azharzuhro12/Proyek-AI-DS-Dicoding/tree/main/proyek%20MLops"
  },
  {
    id: "edutech-dropout-prediction",
    title: "Edutech Dropout Prediction",
    subtitle: "Student Retention Machine Learning, Supabase & Metabase BI",
    category: "Predictive ML",
    featured: false,
    statusBadge: "Live Streamlit App • Random Forest + Metabase",
    image: "/projects/edutech-dropout.png",
    shortDescription:
      "Edutech student retention analytics and early-warning model deployed live on Streamlit Cloud solving a 32.1% dropout rate.",
    fullDescription:
      "Developed to address a 32.1% student dropout challenge at Jaya Jaya Institut, this project combines exploratory academic and socio-economic analysis, a Supabase PostgreSQL data warehouse, an interactive Metabase executive dashboard, and a deployed Random Forest classification web application on Streamlit Cloud for early at-risk student intervention.",
    problemStatement:
      "High student dropout rates (32.1%) impact institutional graduation outcomes and require early identification of at-risk students from first-semester academic and financial indicators.",
    solutionHighlights: [
      "Ingested and modeled student academic, scholarship, and socio-economic data in Supabase PostgreSQL via SQLAlchemy.",
      "Designed an interactive Metabase business dashboard tracking graduation (49.9%), dropout (32.1%), and enrolled (17.9%) cohorts.",
      "Trained a Random Forest classification pipeline and deployed an interactive prediction prototype on Streamlit Cloud."
    ],
    metrics: [
      { label: "Dropout Rate Analyzed", value: "32.1% Cohort" },
      { label: "ML Algorithm", value: "Random Forest" },
      { label: "BI Dashboard", value: "Metabase + Supabase" },
      { label: "Deployment", value: "Streamlit Cloud" }
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Supabase",
      "Metabase",
      "Pandas",
      "SQL"
    ],
    githubUrl:
      "https://github.com/azharzuhro12/Proyek-AI-DS-Dicoding/tree/main/Proyek%20Penerapan%20Data%20Science",
    demoUrl:
      "https://menyelesaikan-permasalahan-institusi-pendidikan-2nrbycsjcd3mla.streamlit.app/"
  },
  {
    id: "app-review-sentiment-analysis",
    title: "App Review Sentiment Analysis",
    subtitle: "58.3K Play Store Reviews, Indonesian NLP, LSTM & Bi-GRU",
    category: "Predictive ML",
    featured: false,
    statusBadge: "58.3K Shopee Reviews • 92.20% LSTM Accuracy",
    image: "/projects/sentiment-analysis.png",
    shortDescription:
      "NLP sentiment analysis on 58.3K Shopee reviews comparing Stacked LSTM (92.20% acc), Bi-GRU, Logistic Regression, and DNN.",
    fullDescription:
      "A comprehensive Natural Language Processing (NLP) workflow analyzing 58,300 cleaned Indonesian user reviews (from 90,000 scraped records) of the Shopee application on Google Play Store. Features Indonesian slang normalization, lexicon-based polarity labeling (Positive, Negative, Neutral), and multi-architecture benchmarking across Stacked LSTM (92.20%), Bidirectional GRU (92.11%), Logistic Regression with RandomizedSearchCV (91.37%), and Deep Neural Networks (90.42%).",
    problemStatement:
      "E-commerce mobile applications receive tens of thousands of informal Indonesian reviews daily where star ratings often conflict with written feedback.",
    solutionHighlights: [
      "Scraped 90,000 raw reviews via google-play-scraper and curated 58,300 clean records with slang normalization, stopword removal, and Indonesian lexicon labeling.",
      "Benchmarked 4 architectures across Word Embedding and TF-IDF schemes, achieving 92.20% accuracy with Stacked LSTM and 92.11% with Bidirectional GRU.",
      "Exported a serialized TF-IDF + Logistic Regression (91.37% test accuracy) inference pipeline for fast multi-class sentiment prediction."
    ],
    metrics: [
      { label: "Cleaned Dataset", value: "58,300 Reviews" },
      { label: "Best Model (LSTM)", value: "92.20% Accuracy" },
      { label: "Bi-GRU / LogReg", value: "92.11% / 91.37%" },
      { label: "Classes", value: "Positive / Neutral / Negative" }
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
      "LSTM & Bi-GRU",
      "TF-IDF",
      "Sastrawi"
    ],
    githubUrl:
      "https://github.com/azharzuhro12/Proyek-AI-DS-Dicoding/tree/main/Proyek%20Sentiment%20Analisis"
  },
  {
    id: "customer-churn-analytics",
    title: "Customer Churn Analytics",
    subtitle: "Leakage-Safe Retention ML & Campaign ROI Backtesting",
    category: "Predictive ML",
    featured: false,
    statusBadge: "7,043 Customers • SQL + Streamlit",
    image: "/projects/customer-churn-analytics.png",
    shortDescription:
      "Retention analytics on 7,043 telecom customers with SQL cohort analysis, Scikit-learn risk modeling, and a Streamlit ROI simulator.",
    fullDescription:
      "An end-to-end retention analytics system analyzing 7,043 subscription customers ($456,116 monthly revenue, 26.54% churn rate). It combines SQL and Pandas cohort analysis to isolate high-risk segments (42.71% churn in month-to-month contracts), trains a leakage-safe Scikit-learn probability model to rank at-risk customers, and delivers an interactive Streamlit dashboard for retention worklists and campaign ROI backtesting.",
    problemStatement:
      "Subscription businesses lose significant recurring revenue to churn and need both segment-level root-cause analysis and customer-level prioritization.",
    solutionHighlights: [
      "Analyzed 7,043 customer accounts representing $456.1K in monthly recurring revenue using SQL and Pandas.",
      "Built a leakage-safe Scikit-learn churn probability pipeline to rank individual customers for retention outreach.",
      "Created an interactive Streamlit dashboard with prioritized retention worklists and transparent campaign ROI simulation."
    ],
    metrics: [
      { label: "Sample Size", value: "7,043 Customers" },
      { label: "Revenue Analyzed", value: "$456.1K / mo" },
      { label: "Key Insight", value: "15.1x Contract Split" },
      { label: "Dashboard", value: "Streamlit BI" }
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "SQL",
      "Pandas",
      "Streamlit",
      "Data Science"
    ],
    githubUrl: "https://github.com/azharzuhro12/customer-churn-analytics"
  },
  {
    id: "face-recognition-vision",
    title: "Real-Time Face Recognition",
    subtitle: "MTCNN Detection & FaceNet 128-D Embedding Verification",
    category: "Computer Vision",
    featured: false,
    statusBadge: "MTCNN + FaceNet • 30 FPS OpenCV",
    image: "/projects/face-recognition.png",
    shortDescription:
      "Real-time facial identity verification with MTCNN face alignment, pretrained FaceNet 128-D embeddings, and OpenCV at 30 FPS.",
    fullDescription:
      "An end-to-end computer vision pipeline for real-time facial identity verification. It detects and crops faces from images or live webcam streams using Multi-task Cascaded Convolutional Networks (MTCNN), standardizes inputs to 160x160 pixels, extracts 128-dimensional L2-normalized embedding vectors via pretrained FaceNet, and verifies identity using Cosine Distance thresholding.",
    problemStatement:
      "Reliable biometric verification requires accurate multi-scale face alignment and illumination-invariant embedding comparisons in real time.",
    solutionHighlights: [
      "Implemented multi-stage MTCNN face detection and automatic 160x160 bounding-box cropping with pixel whitening.",
      "Extracted 128-dimensional facial embeddings using pretrained FaceNet (Inception-ResNet-v1) in Keras/TensorFlow.",
      "Built real-time OpenCV webcam inference matching embeddings via Cosine Distance (< 0.40 threshold)."
    ],
    metrics: [
      { label: "Embedding Dim", value: "128-D Vector" },
      { label: "Detector", value: "MTCNN" },
      { label: "Similarity Metric", value: "Cosine (< 0.40)" },
      { label: "Video Stream", value: "Real-Time OpenCV" }
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "FaceNet",
      "MTCNN",
      "OpenCV",
      "NumPy"
    ],
    githubUrl: "https://github.com/azharzuhro12/face-recogniiton"
  }
];
