import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import ProjectCard from "./ProjectCard";
import SkillBar from "./SkillBar";
import TimelineItem from "./TimelineItem";
import ContactForm from "./ContactForm";

const Home = () => {
  // State for showing all projects in each category
  const [showAllMachineLearning, setShowAllMachineLearning] = useState(false);
  const [showAllDeepLearning, setShowAllDeepLearning] = useState(false);
  const [showAllNLP, setShowAllNLP] = useState(false);
  const [showAllGenerativeAI, setShowAllGenerativeAI] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Project data by category
  const projectCategories = {
    machineLearning: [
      {
        id: 1,
        title: "Student Performance Prediction",
        description:
          "Developed and deployed a machine learning model to forecast student academic performance.",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
        technologies: ["Python", "Pandas", "SVM"],
        methodology:
          "Managed data integrity by handling missing values and encoding categorical variables, enhancing quality by 33%.",
        results:
          "Achieved a 96% accuracy rate in forecasting student academic performance through extensive experimentation.",
        githubLink:
          "https://github.com/Roshanrajmahato/Student_Performance_mlproject.git",
      },
      {
        id: 2,
        title: "Credit Card Fraud Detection",
        description:
          "Analyzed transaction patterns to identify anomalies and distinguish between genuine and fraudulent activities.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        technologies: ["Python", "Pandas", "Logistic Regression"],
        methodology:
          "Developed and fine-tuned a logistic regression-based machine learning model for fraud detection.",
        results:
          "Achieved 87% accuracy rate, optimizing detection efficiency and contributing to the potential prevention of financial losses in real-world scenarios.",
        githubLink:
          "https://github.com/Roshanrajmahato/Credit-Card-Fraud-Detection",
      },
      {
        id: 3,
        title: "Stock Price Prediction",
        description:
          "Built a machine learning model to forecast stock market prices using historical data and technical indicators.",
        image:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        technologies: ["Python", "Scikit-learn", "LSTM"],
        methodology:
          "Implemented time series analysis and feature engineering to extract meaningful patterns from market data.",
        results:
          "Achieved 83% directional accuracy in predicting short-term price movements, providing valuable insights for investment decisions.",
        githubLink: "https://github.com/Roshanrajmahato/Stock-Price-Prediction",
      },
      {
        id: 13,
        title: "Loan Default Prediction",
        description:
          "Developed a predictive model to assess the likelihood of loan defaults based on borrower characteristics and loan attributes.",
        image:
          "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
        technologies: ["Python", "XGBoost", "Feature Engineering"],
        methodology:
          "Applied ensemble learning techniques and feature importance analysis to identify key risk factors in loan applications.",
        results:
          "Achieved 91% accuracy in predicting loan defaults, potentially saving financial institutions from significant losses.",
        githubLink:
          "https://github.com/Roshanrajmahato/Loan-Default-Prediction",
      },
    ],
    deepLearning: [
      {
        id: 4,
        title: "Pneumonia Detection and Classification",
        description:
          "Designed a Deep Learning Model using VGG16 with Transfer Learning to classify chest X-ray images.",
        image:
          "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
        technologies: ["Python", "Keras", "TensorFlow"],
        methodology:
          "Leveraged Keras and TensorFlow to build and train a Convolutional Neural Network for medical imaging diagnostics.",
        results:
          "Achieved 91% accuracy in classifying chest X-ray images as Pneumonia or Normal, enhancing medical imaging diagnostics through automated detection.",
        githubLink:
          "https://github.com/Roshanrajmahato/Pneumonia-Detection-and-Classification",
      },
      {
        id: 5,
        title: "Facial Emotion Recognition Using CNN",
        description:
          "Built a convolutional neural network to recognize human emotions from facial expressions in images and video.",
        image:
          "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800&q=80",
        technologies: ["Python", "Keras", "OpenCV"],
        methodology:
          "Trained a CNN on a diverse dataset of facial expressions to classify seven basic emotions with real-time processing capabilities.",
        results:
          "Developed a model with 89% accuracy in emotion recognition that works across different lighting conditions and facial orientations.",
        githubLink:
          "https://github.com/Roshanrajmahato/Facial-Emotion-Recognition",
      },
      {
        id: 6,
        title: "DeepFake Video Detection",
        description:
          "Created a deep learning system to identify manipulated videos and distinguish them from authentic content.",
        image:
          "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
        technologies: ["Python", "PyTorch", "Computer Vision"],
        methodology:
          "Combined convolutional and recurrent neural networks to analyze temporal inconsistencies in video frames that indicate manipulation.",
        results:
          "Achieved 92% detection rate of deepfake videos, helping combat misinformation and protect digital media integrity.",
        githubLink: "https://github.com/Roshanrajmahato/DeepFake-Detection",
      },
      {
        id: 14,
        title: "Emotion Recognition",
        description:
          "Developed a deep learning system for real-time emotion recognition from facial expressions in video streams.",
        image:
          "https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?w=800&q=80",
        technologies: ["Python", "TensorFlow", "OpenCV"],
        methodology:
          "Implemented a custom CNN architecture optimized for real-time performance on resource-constrained devices.",
        results:
          "Achieved 94% accuracy in recognizing 7 distinct emotions with processing speeds suitable for real-time applications.",
        githubLink: "https://github.com/Roshanrajmahato/Emotion-Recognition",
      },
      {
        id: 15,
        title: "Facial Recognition",
        description:
          "Built a facial recognition system capable of identifying individuals in images and video with high accuracy.",
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80",
        technologies: ["Python", "Dlib", "Face Recognition"],
        methodology:
          "Utilized deep metric learning and face embedding techniques to create robust facial representations.",
        results:
          "Developed a system with 97% accuracy in controlled environments and 89% accuracy in challenging lighting conditions.",
        githubLink: "https://github.com/Roshanrajmahato/Facial-Recognition",
      },
    ],
    naturalLanguageProcessing: [
      {
        id: 7,
        title: "Text Summarization",
        description:
          "Developed an NLP model that automatically generates concise summaries of long-form text content.",
        image:
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
        technologies: ["Python", "NLTK", "Transformers"],
        methodology:
          "Implemented both extractive and abstractive summarization techniques using state-of-the-art transformer models.",
        results:
          "Created a system that reduces document length by up to 80% while retaining key information and context.",
        githubLink: "https://github.com/Roshanrajmahato/Text-Summarization",
      },
      {
        id: 8,
        title: "Deepfake Text Detection",
        description:
          "Built an AI system to identify artificially generated text content from genuine human-written text.",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        technologies: ["Python", "BERT", "Hugging Face"],
        methodology:
          "Fine-tuned pre-trained language models to detect subtle patterns and inconsistencies in AI-generated content.",
        results:
          "Developed a detector with 88% accuracy in identifying AI-written content across various domains and writing styles.",
        githubLink:
          "https://github.com/Roshanrajmahato/Deepfake-Text-Detection",
      },
      {
        id: 9,
        title: "Sentence Autocomplete",
        description:
          "Created a predictive text system that suggests sentence completions based on partial input.",
        image:
          "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&q=80",
        technologies: ["Python", "GPT-2", "TensorFlow"],
        methodology:
          "Fine-tuned language models on domain-specific corpora to generate contextually appropriate sentence completions.",
        results:
          "Built a system with 78% user acceptance rate of suggestions, significantly improving text input efficiency.",
        githubLink: "https://github.com/Roshanrajmahato/Sentence-Autocomplete",
      },
      {
        id: 16,
        title: "Predict Closed Questions on Stack Overflow",
        description:
          "Developed an NLP model to predict which questions on Stack Overflow are likely to be closed based on content and metadata.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
        technologies: ["Python", "spaCy", "Scikit-learn"],
        methodology:
          "Combined text features with metadata analysis to create a comprehensive prediction model for question quality assessment.",
        results:
          "Achieved 83% accuracy in predicting question closure, helping improve content quality and user experience.",
        githubLink:
          "https://github.com/Roshanrajmahato/StackOverflow-Question-Predictor",
      },
      {
        id: 17,
        title: "Language Identification",
        description:
          "Built a system that can automatically identify the language of a given text from among 50+ supported languages.",
        image:
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
        technologies: ["Python", "FastText", "N-gram Analysis"],
        methodology:
          "Utilized character-level n-gram features and neural network classification to identify language patterns.",
        results:
          "Developed a model with 98% accuracy across major languages and 92% accuracy for less common languages.",
        githubLink:
          "https://github.com/Roshanrajmahato/Language-Identification",
      },
    ],
    generativeAI: [
      {
        id: 10,
        title: "Personalized Voice Assistant with GPT and Whisper",
        description:
          "Developed a voice-activated AI assistant that uses OpenAI's GPT for responses and Whisper for speech recognition.",
        image:
          "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
        technologies: ["Python", "OpenAI API", "PyAudio"],
        methodology:
          "Integrated speech recognition, natural language understanding, and text-to-speech to create a seamless voice interaction experience.",
        results:
          "Created a personalized assistant with 95% speech recognition accuracy and contextually relevant responses.",
        githubLink: "https://github.com/Roshanrajmahato/Voice-Assistant-GPT",
      },
      {
        id: 11,
        title: "Build your AI Translator",
        description:
          "Created a multilingual translation system powered by transformer models with support for over 50 languages.",
        image:
          "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800&q=80",
        technologies: ["Python", "Transformers", "Flask"],
        methodology:
          "Leveraged pre-trained multilingual models and fine-tuned them for specific language pairs to improve translation quality.",
        results:
          "Developed a translator with BLEU scores comparable to commercial solutions for major language pairs.",
        githubLink: "https://github.com/Roshanrajmahato/AI-Translator",
      },
      {
        id: 12,
        title: "Summarize Papers",
        description:
          "Built an AI tool that automatically generates concise summaries of academic and scientific papers.",
        image:
          "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&q=80",
        technologies: ["Python", "BART", "Scikit-learn"],
        methodology:
          "Combined extractive and abstractive summarization techniques specialized for scientific language and structure.",
        results:
          "Created a tool that reduces reading time by 75% while preserving key findings, methodologies, and conclusions.",
        githubLink: "https://github.com/Roshanrajmahato/Paper-Summarizer",
      },
      {
        id: 18,
        title: "AI-Driven Healthcare Applications",
        description:
          "Developed AI applications for healthcare that assist in diagnosis, treatment planning, and patient monitoring.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        technologies: ["Python", "TensorFlow", "Medical Imaging"],
        methodology:
          "Combined computer vision and natural language processing to analyze medical data and provide clinical decision support.",
        results:
          "Created systems that improved diagnostic accuracy by 22% and reduced treatment planning time by 35%.",
        githubLink: "https://github.com/Roshanrajmahato/AI-Healthcare",
      },
      {
        id: 19,
        title: "Image-to-Image Translation",
        description:
          "Built a generative model that can transform images from one domain to another while preserving content structure.",
        image:
          "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&q=80",
        technologies: ["Python", "PyTorch", "GANs"],
        methodology:
          "Implemented and optimized various GAN architectures including CycleGAN and Pix2Pix for different translation tasks.",
        results:
          "Developed models capable of realistic style transfer, photo enhancement, and domain adaptation with high visual quality.",
        githubLink: "https://github.com/Roshanrajmahato/Image-Translation",
      },
    ],
  };

  // Flatten projects for any code that expects the old format
  const projects = [
    ...projectCategories.machineLearning,
    ...projectCategories.deepLearning,
    ...projectCategories.naturalLanguageProcessing,
    ...projectCategories.generativeAI,
  ];

  // Mock data for skills
  const skills = [
    { name: "Python", proficiency: 95 },
    { name: "R", proficiency: 85 },
    { name: "SQL", proficiency: 90 },
    { name: "Machine Learning", proficiency: 88 },
    { name: "Deep Learning", proficiency: 80 },
    { name: "Data Visualization", proficiency: 92 },
    { name: "Statistical Analysis", proficiency: 87 },
    { name: "Big Data (Spark)", proficiency: 75 },
  ];

  // Mock data for experience timeline
  const experiences = [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "TechCorp Inc.",
      duration: "Jan 2021 - Present",
      description:
        "Leading data science initiatives and machine learning projects.",
      details: [
        "Developed predictive models that increased customer retention by 18%",
        "Led a team of 5 data scientists on various analytics projects",
        "Implemented MLOps practices reducing model deployment time by 40%",
        "Created executive dashboards for C-level decision making",
      ],
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Solutions",
      duration: "Mar 2018 - Dec 2020",
      description:
        "Worked on various machine learning and data analysis projects.",
      details: [
        "Built recommendation systems increasing user engagement by 25%",
        "Developed NLP models for text classification with 92% accuracy",
        "Created automated data pipelines reducing manual work by 60%",
        "Collaborated with product teams to implement data-driven features",
      ],
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "DataInsight Co.",
      duration: "Jun 2016 - Feb 2018",
      description:
        "Performed data analysis and created visualizations for business insights.",
      details: [
        "Analyzed customer behavior data identifying key purchase patterns",
        "Created interactive dashboards using Tableau and Power BI",
        "Automated weekly reporting saving 10+ hours of manual work per week",
        "Collaborated with marketing team to optimize campaign performance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        ref={navRef}
        className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border py-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">RRM</div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={(e) => {
                // Check if the mouse is moving to the dropdown menu
                if (!dropdownRef.current?.contains(e.relatedTarget)) {
                  setDropdownOpen(false);
                }
              }}
            >
              <button className="hover:text-primary transition-colors flex items-center">
                Categories
              </button>
              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-1 z-10"
                  onMouseLeave={(e) => {
                    // Only close if moving outside both button and dropdown
                    if (!dropdownRef.current?.contains(e.relatedTarget)) {
                      setDropdownOpen(false);
                    }
                  }}
                >
                  <a
                    href="#machine-learning"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element =
                        document.getElementById("machine-learning");
                      const navHeight = navRef.current
                        ? navRef.current.offsetHeight
                        : 0;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navHeight - 20,
                        behavior: "smooth",
                      });
                      setShowAllMachineLearning(true);
                      setDropdownOpen(false);
                    }}
                  >
                    Machine Learning
                  </a>
                  <a
                    href="#deep-learning"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("deep-learning");
                      const navHeight = navRef.current
                        ? navRef.current.offsetHeight
                        : 0;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navHeight - 20,
                        behavior: "smooth",
                      });
                      setShowAllDeepLearning(true);
                      setDropdownOpen(false);
                    }}
                  >
                    Deep Learning
                  </a>
                  <a
                    href="#nlp"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("nlp");
                      const navHeight = navRef.current
                        ? navRef.current.offsetHeight
                        : 0;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navHeight - 20,
                        behavior: "smooth",
                      });
                      setShowAllNLP(true);
                      setDropdownOpen(false);
                    }}
                  >
                    NLP
                  </a>
                  <a
                    href="#generative-ai"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("generative-ai");
                      const navHeight = navRef.current
                        ? navRef.current.offsetHeight
                        : 0;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navHeight - 20,
                        behavior: "smooth",
                      });
                      setShowAllGenerativeAI(true);
                      setDropdownOpen(false);
                    }}
                  >
                    Generative AI
                  </a>
                </div>
              )}
            </div>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#education"
              className="hover:text-primary transition-colors"
            >
              Education
            </a>
            <a href="#resume" className="hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="about" className="py-20 container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Roshan Raj Mahato
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Data Scientist & ML Engineer
            </h2>
            <p className="text-lg mb-8">
              I'm a passionate data scientist with expertise in machine
              learning, statistical analysis, and data visualization. With over
              7 years of experience, I specialize in turning complex data into
              actionable insights and building predictive models that solve
              real-world problems.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="https://drive.google.com/uc?export=view&id=1Uh8WYFQv-f_6uiTyBlyLQGKGk7zftLJX"
                alt="Roshan Raj Mahato"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <Separator className="container mx-auto" />
      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground mb-10">
            A selection of my data science and machine learning projects
          </p>

          <div className="space-y-12">
            {/* Machine Learning Projects */}
            <div id="machine-learning">
              <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories.machineLearning
                  .slice(
                    0,
                    showAllMachineLearning
                      ? projectCategories.machineLearning.length
                      : 3,
                  )
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
              {projectCategories.machineLearning.length > 3 && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() =>
                      setShowAllMachineLearning(!showAllMachineLearning)
                    }
                  >
                    {showAllMachineLearning ? "Show Less" : "More Projects"}{" "}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Deep Learning Projects */}
            <div id="deep-learning">
              <h3 className="text-2xl font-semibold mb-4">Deep Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories.deepLearning
                  .slice(
                    0,
                    showAllDeepLearning
                      ? projectCategories.deepLearning.length
                      : 3,
                  )
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
              {projectCategories.deepLearning.length > 3 && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => setShowAllDeepLearning(!showAllDeepLearning)}
                  >
                    {showAllDeepLearning ? "Show Less" : "More Projects"}{" "}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Natural Language Processing Projects */}
            <div id="nlp">
              <h3 className="text-2xl font-semibold mb-4">
                Natural Language Processing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories.naturalLanguageProcessing
                  .slice(
                    0,
                    showAllNLP
                      ? projectCategories.naturalLanguageProcessing.length
                      : 3,
                  )
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
              {projectCategories.naturalLanguageProcessing.length > 3 && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => setShowAllNLP(!showAllNLP)}
                  >
                    {showAllNLP ? "Show Less" : "More Projects"}{" "}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Generative AI Projects */}
            <div id="generative-ai">
              <h3 className="text-2xl font-semibold mb-4">Generative AI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories.generativeAI
                  .slice(
                    0,
                    showAllGenerativeAI
                      ? projectCategories.generativeAI.length
                      : 3,
                  )
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
              {projectCategories.generativeAI.length > 3 && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => setShowAllGenerativeAI(!showAllGenerativeAI)}
                  >
                    {showAllGenerativeAI ? "Show Less" : "More Projects"}{" "}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>
      <Separator className="container mx-auto" />
      {/* Skills Section */}
      <section id="skills" className="py-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
          <p className="text-muted-foreground mb-10">
            My proficiency in various data science and programming technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <Separator className="container mx-auto" />
      {/* Education Section */}
      <section id="education" className="py-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <p className="text-muted-foreground mb-10">
            My academic background and qualifications
          </p>

          <div className="space-y-8">
            <Card className="w-full mb-6 bg-white border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Computer Science & Engineering
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1">
                    <span className="font-medium">
                      Ramgarh Engineering College
                    </span>
                    <span className="hidden sm:block sm:mx-2">•</span>
                    <span className="text-sm">Jun 2021 - Jul 2025</span>
                  </div>
                  <p className="mt-3 text-gray-700">7 CGPA</p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full mb-6 bg-white border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Intermediate (Class XII)
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1">
                    <span className="font-medium">
                      D.A.V Public School, Moonidih (Dhanbad)
                    </span>
                    <span className="hidden sm:block sm:mx-2">•</span>
                    <span className="text-sm">Jun 2018 - Jul 2020</span>
                  </div>
                  <p className="mt-3 text-gray-700">89%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full mb-6 bg-white border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Matriculation (Class X)
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1">
                    <span className="font-medium">
                      D.A.V Public School, Moonidih (Dhanbad)
                    </span>
                    <span className="hidden sm:block sm:mx-2">•</span>
                    <span className="text-sm">April 2018</span>
                  </div>
                  <p className="mt-3 text-gray-700">85%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
      <Separator className="container mx-auto" />
      {/* Resume Section */}
      <section id="resume" className="py-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <p className="text-muted-foreground mb-10">
            Download my complete resume to learn more about my experience and
            qualifications
          </p>

          <div className="flex justify-center">
            <Card className="w-full max-w-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Roshan Raj Mahato
                  </h3>
                  <p className="text-gray-600">Data Scientist & ML Engineer</p>
                </div>
                <p className="text-center mb-8">
                  My resume contains detailed information about my professional
                  experience, technical skills, certifications, and academic
                  achievements.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <a
                    href="https://drive.google.com/file/d/1Dt2TRrsRVm6tM-0QDfmIJXhuTxBP7sOu/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
      <Separator className="container mx-auto" />
      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-muted-foreground mb-10">
            Feel free to reach out for collaborations or just a friendly chat
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <ContactForm />
            </div>
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span>jroshanrajmahato1234@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-primary transition-colors"
                      >
                        github.com/janedoe
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-primary transition-colors"
                      >
                        linkedin.com/in/janedoe
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Location</h3>
                    <p>San Francisco, California</p>
                    <p className="text-muted-foreground mt-2">
                      Available for remote work and relocations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:jane.doe@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
