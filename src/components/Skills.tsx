"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Cloud,
  Brain,
  Zap,
  Network,
  Server,
  Shield,
  Cpu,
} from "lucide-react";

const Skills = () => {
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
        ease: "easeOut" as const,
      },
    },
  };

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-600",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "Go", level: 80 },
        { name: "C++", level: 75 },
        { name: "Rust", level: 70 },
      ],
    },
    {
      icon: Database,
      title: "Backend Technologies",
      color: "text-green-600",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Django", level: 75 },
        { name: "GraphQL", level: 85 },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-purple-600",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Elasticsearch", level: 75 },
        { name: "Neo4j", level: 70 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-600",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "Terraform", level: 75 },
        { name: "Azure", level: 80 },
        { name: "Google Cloud", level: 75 },
      ],
    },
    {
      icon: Brain,
      title: "AI/ML Technologies",
      color: "text-pink-600",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenAI API", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "Hugging Face", level: 75 },
      ],
    },
    {
      icon: Zap,
      title: "Automation Tools",
      color: "text-yellow-600",
      skills: [
        { name: "n8n", level: 90 },
        { name: "Zapier", level: 85 },
        { name: "GitHub Actions", level: 80 },
        { name: "Jenkins", level: 75 },
        { name: "Cron Jobs", level: 85 },
        { name: "Webhooks", level: 90 },
      ],
    },
    {
      icon: Network,
      title: "Networking & APIs",
      color: "text-cyan-600",
      skills: [
        { name: "REST APIs", level: 95 },
        { name: "WebSockets", level: 85 },
        { name: "TCP/IP", level: 80 },
        { name: "HTTP/HTTPS", level: 90 },
        { name: "Load Balancing", level: 75 },
        { name: "CDN", level: 70 },
      ],
    },
    {
      icon: Server,
      title: "System Administration",
      color: "text-red-600",
      skills: [
        { name: "Linux", level: 90 },
        { name: "Nginx", level: 85 },
        { name: "Apache", level: 80 },
        { name: "Monitoring", level: 85 },
        { name: "Security", level: 80 },
        { name: "Backup & Recovery", level: 75 },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Certified Kubernetes Administrator",
    "Microsoft Azure Fundamentals",
    "CompTIA Security+",
    "Cisco CCNA",
  ];

  return (
    <section id="skills" className="py-20">
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
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and expertise
              across various domains of software development and system
              administration.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <category.icon
                        className={`w-6 h-6 mr-3 ${category.color}`}
                      />
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 * skillIndex,
                            duration: 0.5,
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Certifications & Achievements
                  </h3>
                  <p className="text-muted-foreground">
                    Professional certifications that validate my expertise
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium hover:bg-muted transition-colors duration-200"
                      >
                        {cert}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Tools */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Cpu className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Additional Tools & Technologies
                  </h3>
                  <p className="text-muted-foreground">
                    Other tools and technologies I work with
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Git",
                    "VS Code",
                    "Postman",
                    "Docker Compose",
                    "Prometheus",
                    "Grafana",
                    "ELK Stack",
                    "RabbitMQ",
                    "Apache Kafka",
                    "Microservices",
                    "CI/CD",
                    "Agile/Scrum",
                  ].map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {tool}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
