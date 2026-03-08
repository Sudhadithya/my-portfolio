// export const projects = [
//   {
//     title: "AI News Intelligence Platform",
//     description: "Built a Retrieval-Augmented Generation (RAG) system that answers questions about news articles. Leveraged LangChain and FAISS for vector storage and OpenAI embeddings for semantic search.",
//     tech: ["LangChain", "FAISS", "OpenAI API", "Python"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "Mini Go Game AI",
//     description: "Developed a Go game engine using PyGame with implemented core mechanics like liberties and captures. Designed a baseline AI agent to make legal strategic moves, setting the foundation for reinforcement learning.",
//     tech: ["Python", "PyGame", "Game AI", "Reinforcement Learning"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "OCR Web Application",
//     description: "Designed a text extraction system using Flask and OpenCV. Implemented advanced image preprocessing techniques like noise reduction and grayscale conversion to optimize Optical Character Recognition accuracy.",
//     tech: ["Python", "Flask", "OpenCV", "Gunicorn"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "Robotic Arm Kinematics (NN)",
//     description: "Created neural networks using PyTorch to predict joint angles for 2R/3R/7R robotic manipulators. Performed hyperparameter tuning and visualized inverse kinematics data to improve prediction models.",
//     tech: ["PyTorch", "NumPy", "Matplotlib", "Neural Networks"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "Full-Stack E-Commerce App",
//     description: "Developed a platform enabling customer and seller workflows. Engineered the MySQL database schema and stored procedures to optimize inventory management and order processing.",
//     tech: ["Flask", "MySQL", "SQL", "Web Dev"],
//     link: "#",
//     github: "#"
//   }
// ];


export const projects = [
  {
    title: "End-to-End LLM Fine-Tuning & Inference Pipeline", // formerly "E-Commerce Site Development" 
    description: "An end-to-end machine learning pipeline designed to fine-tune, evaluate, and deploy Large Language Models in resource-constrained environments. By leveraging LoRA adapters and 8-bit quantization, this platform efficiently fine-tunes the Microsoft Phi-2 model while achieving a 47% improvement in response quality.",
    tech: ["Python", "Hugging Face (PEFT)", "FastAPI", "Docker", "Weights & Biases"],
    link: "#",
    github: "https://github.com/Sudhadithya/llm-finetuning"
  },
  {
    title: "RAG News Intelligence Platform",
    description: "Architected a modular Retrieval-Augmented Generation (RAG) pipeline integrating semantic chunking, FAISS vector indexing, and embedding-based constrained retrieval. Deployed as a high-performance, Dockerized inference service for context-grounded LLM analytics.",
    tech: ["Python", "LangChain", "FAISS", "Prompt Engineering", "Docker"],
    link: "#",
    github: "https://github.com/Sudhadithya/RAG-System"
  },
  {
    title: "Neural Robotic Kinematics",
    description: "Engineered a deep learning engine using PyTorch to solve inverse kinematics via supervised nonlinear regression for complex manipulators. Built synthetic data generation pipelines and leveraged GPU-accelerated training workflows with systematic hyperparameter tuning to ensure robust cross-geometry generalization.",
    tech: ["PyTorch", "Python", "Neural Networks", "GPU Training"],
    link: "#",
    github: "https://github.com/finalforgasm/Manipulator-DL-models"
  },
  {
    title: "AI Game Agent (Go)", // formerly "Mini Go Game with AI Agents" [cite: 23]
    description: "Designed a strategic game algorithm with an AI agent capable of making legal, tactical moves. Built on PyGame, setting the foundation for advanced Reinforcement Learning experiments.",
    tech: ["Game AI", "Reinforcement Learning", "PyGame", "Python"],
    link: "#",
    github: "https://github.com/finalforgasm/AI-Agent-GO-"
  },
  {
    title: "Real-Time OCR Engine", // formerly "OCR and image processing web application" [cite: 28]
    description: "Developed a text extraction system using OpenCV and Flask. Implemented advanced image preprocessing (noise reduction, grayscale) to maximize recognition accuracy on raw input.",
    tech: ["OpenCV", "Flask", "Computer Vision", "Python"],
    link: "#",
    github: "https://github.com/Sudhadithya/Python-OCR "
  }
];