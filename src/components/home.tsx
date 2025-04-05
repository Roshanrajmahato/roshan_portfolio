import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import ProjectCard from "./ProjectCard";
import SkillBar from "./SkillBar";
import TimelineItem from "./TimelineItem";
import ContactForm from "./ContactForm";

const Home = () => {
  // Project data
  const projects = [
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
    },
    {
      id: 3,
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
    },
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
      <nav className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Jane Doe</div>
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
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
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
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Jane Doe"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
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
      {/* Experience Section */}
      <section id="experience" className="py-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
          <p className="text-muted-foreground mb-10">
            My journey in the field of data science and analytics
          </p>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <TimelineItem key={experience.id} experience={experience} />
            ))}
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
                      <span>jane.doe@example.com</span>
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
