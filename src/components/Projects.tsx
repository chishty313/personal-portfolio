"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Brain,
  Zap,
  Cloud,
  Network,
  Server,
} from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "AI-Powered Document Processing System",
      description:
        "Built a comprehensive document processing system using machine learning to extract, analyze, and categorize documents automatically.",
      image: "/api/placeholder/600/400",
      category: "ai-ml",
      technologies: [
        "Python",
        "TensorFlow",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      features: [
        "OCR text extraction",
        "Document classification",
        "Entity recognition",
        "Automated workflows",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "Completed",
    },
    {
      id: 2,
      title: "Microservices E-commerce Platform",
      description:
        "Developed a scalable e-commerce platform using microservices architecture with real-time inventory management and payment processing.",
      image: "/api/placeholder/600/400",
      category: "backend",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Kubernetes",
        "Docker",
      ],
      features: [
        "User authentication",
        "Product catalog",
        "Order management",
        "Payment integration",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "Completed",
    },
    {
      id: 3,
      title: "Automated DevOps Pipeline",
      description:
        "Created a comprehensive CI/CD pipeline with automated testing, deployment, and monitoring using modern DevOps tools.",
      image: "/api/placeholder/600/400",
      category: "automation",
      technologies: [
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Prometheus",
        "Grafana",
      ],
      features: [
        "Automated testing",
        "Blue-green deployment",
        "Infrastructure as code",
        "Real-time monitoring",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "Completed",
    },
    {
      id: 4,
      title: "Cloud-Native Data Analytics Platform",
      description:
        "Built a serverless data analytics platform on AWS that processes large datasets and provides real-time insights.",
      image: "/api/placeholder/600/400",
      category: "cloud",
      technologies: [
        "AWS Lambda",
        "S3",
        "DynamoDB",
        "Kinesis",
        "CloudFormation",
        "Python",
      ],
      features: [
        "Real-time data processing",
        "Scalable storage",
        "Data visualization",
        "Cost optimization",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "In Progress",
    },
    {
      id: 5,
      title: "Network Monitoring Dashboard",
      description:
        "Developed a comprehensive network monitoring solution with real-time alerts and performance analytics.",
      image: "/api/placeholder/600/400",
      category: "networking",
      technologies: [
        "Python",
        "SNMP",
        "InfluxDB",
        "Grafana",
        "Docker",
        "Linux",
      ],
      features: [
        "Real-time monitoring",
        "Performance metrics",
        "Alert system",
        "Historical data",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "Completed",
    },
    {
      id: 6,
      title: "System Administration Automation Suite",
      description:
        "Created a suite of automation tools for system administration tasks including backup, monitoring, and maintenance.",
      image: "/api/placeholder/600/400",
      category: "system-admin",
      technologies: [
        "Python",
        "Bash",
        "Ansible",
        "Cron",
        "Logrotate",
        "Systemd",
      ],
      features: [
        "Automated backups",
        "System monitoring",
        "Log management",
        "Maintenance tasks",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "Completed",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Code },
    { id: "backend", label: "Backend", icon: Database },
    { id: "ai-ml", label: "AI/ML", icon: Brain },
    { id: "automation", label: "Automation", icon: Zap },
    { id: "cloud", label: "Cloud", icon: Cloud },
    { id: "networking", label: "Networking", icon: Network },
    { id: "system-admin", label: "System Admin", icon: Server },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work across different domains including
              backend development, AI/ML, automation, cloud computing, and
              system administration.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mb-8 h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 p-2 sm:p-3 text-xs sm:text-sm"
                  >
                    <category.icon className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="text-center leading-tight">
                      {category.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <Code className="w-16 h-16 text-muted-foreground/50" />
                          </div>
                          <Badge
                            className="absolute top-4 right-4"
                            variant={
                              project.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {project.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-foreground mb-2">
                              Key Features:
                            </h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() =>
                                window.open(project.github, "_blank")
                              }
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() =>
                                window.open(project.demo, "_blank")
                              }
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to work on new projects and challenges.
                  Let's discuss how we can bring your ideas to life.
                </p>
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Start a Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
