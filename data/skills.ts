export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Specialized";
  highlight?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: "Code" | "Cpu" | "Brain" | "Server" | "BarChart3";
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages for machine learning, data engineering, and backend automation.",
    iconName: "Code",
    skills: [
      { name: "Python", level: "Advanced", highlight: "Primary ML/AI runtime, PyTorch, TensorFlow, Scikit-learn" },
      { name: "SQL", level: "Advanced", highlight: "Complex joins, indexing, query optimization, PostgreSQL" },
      { name: "TypeScript", level: "Proficient", highlight: "Type-safe full-stack web application development" },
      { name: "JavaScript", level: "Proficient", highlight: "Modern ES6+, async architectures, Node.js" }
    ]
  },
  {
    id: "machine-learning",
    title: "AI & Machine Learning",
    description: "Predictive modeling, deep neural networks, computer vision, audio processing, time-series forecasting, and MLOps.",
    iconName: "Cpu",
    skills: [
      { name: "PyTorch", level: "Advanced", highlight: "Deep learning architectures and custom training loops" },
      { name: "TensorFlow", level: "Advanced", highlight: "CNN, Bi-LSTM, TFX pipelines, DCML certified" },
      { name: "Scikit-learn", level: "Advanced", highlight: "Predictive modeling, preprocessing, cross-validation" },
      { name: "Convolutional Neural Networks (CNN)", level: "Advanced", highlight: "2D CNN for OCR (92% acc) and audio Mel-spectrograms" },
      { name: "Computer Vision (MTCNN, FaceNet, OpenCV)", level: "Advanced", highlight: "Face detection, 128-D metric learning, live streaming" },
      { name: "Time-Series Forecasting (LightGBM, XGBoost)", level: "Advanced", highlight: "Multi-horizon retail demand forecasting (13.09% WAPE)" },
      { name: "Audio Signal Processing (Librosa)", level: "Proficient", highlight: "Mel-spectrogram and MFCC acoustic feature extraction" },
      { name: "MLOps", level: "Proficient", highlight: "TFX pipelines, TF Serving, Prometheus & Grafana monitoring" },
      { name: "Pandas", level: "Advanced", highlight: "Large-scale data manipulation and feature engineering" },
      { name: "NumPy", level: "Advanced", highlight: "High-performance vectorized array computations" }
    ]
  },
  {
    id: "ai-engineering",
    title: "Generative AI, NLP & LLM Agents",
    description: "Large/Small Language Models, RAG architectures, agentic workflows, and natural language processing.",
    iconName: "Brain",
    skills: [
      { name: "Generative AI", level: "Specialized", highlight: "End-to-end AI application design and multimodal workflows" },
      { name: "LLMs / SLMs", level: "Specialized", highlight: "Qwen2.5-1.5B-Instruct, Gemini, prompt and context engineering" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Specialized", highlight: "Vector retrieval, semantic chunking, citation grounding" },
      { name: "LangChain", level: "Proficient", highlight: "LLM chaining, tool calling, document retrieval pipelines" },
      { name: "LangGraph", level: "Proficient", highlight: "Stateful multi-step agentic orchestration" },
      { name: "Natural Language Processing (NLP)", level: "Advanced", highlight: "Sentiment analysis, text vectorization, sequence modeling" }
    ]
  },
  {
    id: "backend-deployment",
    title: "Tools",
    description: "Asynchronous API services, distributed task queues, vector databases, and containerization.",
    iconName: "Server",
    skills: [
      { name: "FastAPI", level: "Advanced", highlight: "Asynchronous RESTful API deployment for ML serving" },
      { name: "Redis", level: "Proficient", highlight: "In-memory message broker and low-latency caching" },
      { name: "Celery", level: "Proficient", highlight: "Distributed asynchronous task queue for batch ML workloads" },
      { name: "PostgreSQL", level: "Advanced", highlight: "Production relational database modeling and querying" },
      { name: "ChromaDB", level: "Proficient", highlight: "Vector database for dense embeddings and RAG search" },
      { name: "Supabase", level: "Proficient", highlight: "Managed PostgreSQL data warehouse and backend services" },
      { name: "Firebase ML", level: "Proficient", highlight: "Production mobile/client ML model integration" },
      { name: "Docker & Docker Compose", level: "Proficient", highlight: "Containerized model serving and multi-service orchestration" },
      { name: "Streamlit", level: "Advanced", highlight: "Interactive ML prototyping and data web applications" },
      { name: "Linux & Git/GitHub", level: "Proficient", highlight: "Environment management, version control, CI/CD workflows" }
    ]
  },
  {
    id: "data-visualization",
    title: "Data Visualization & Analytics",
    description: "Translating complex analytical data into actionable visual stories and executive dashboards.",
    iconName: "BarChart3",
    skills: [
      { name: "Plotly", level: "Advanced", highlight: "Interactive multi-dimensional charts & distributions" },
      { name: "Streamlit", level: "Advanced", highlight: "Rapid deployment of interactive ML demo apps" },
      { name: "Metabase", level: "Proficient", highlight: "Self-service business intelligence & dashboards" },
      { name: "Excel", level: "Advanced", highlight: "Advanced data modeling, financial logic, pivot analysis" }
    ]
  }
];

