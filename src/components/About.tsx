"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Brain,
  Cloud,
  Network,
  Server,
  Zap,
  Award,
  Users,
  Clock,
} from "lucide-react";

const About = () => {
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

  const expertiseAreas = [
    {
      icon: Code,
      title: "Backend Development",
      description:
        "Building robust, scalable server-side applications using modern frameworks and technologies.",
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "Go",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Developing intelligent solutions using cutting-edge AI/ML technologies and frameworks.",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenAI API",
        "LangChain",
        "Pandas",
        "NumPy",
      ],
    },
    {
      icon: Zap,
      title: "Automation",
      description:
        "Creating automated workflows and processes using n8n and other automation tools.",
      technologies: [
        "n8n",
        "Zapier",
        "Python Scripts",
        "Cron Jobs",
        "API Integration",
        "Webhooks",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Designing and deploying scalable cloud solutions across multiple platforms.",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Serverless",
      ],
    },
    {
      icon: Network,
      title: "Computer Networks",
      description:
        "Expertise in network architecture, protocols, and security implementations.",
      technologies: [
        "TCP/IP",
        "HTTP/HTTPS",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Load Balancing",
      ],
    },
    {
      icon: Server,
      title: "System Administration",
      description:
        "Managing and optimizing server infrastructure and system performance.",
      technologies: [
        "Linux",
        "Windows Server",
        "Nginx",
        "Apache",
        "Monitoring",
        "Security",
        "Backup",
      ],
    },
  ];

  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Projects Completed", value: "50+" },
    { icon: Clock, label: "Hours Automated", value: "1000+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              II'mapos;m a passionate full-stack developer with expertise in backend
              development, AI/ML, automation, and cloud computing. I love
              building innovative solutions that solve real-world problems and
              improve efficiency.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise Areas */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <area.icon className="w-10 h-10 mb-4 text-blue-600" />
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {area.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Note */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Why I Love What I Do
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology has the power to transform businesses and improve
                  lives. II'mapos;m passionate about leveraging my skills in backend
                  development, AI/ML, and automation to create solutions that
                  make a real difference. Whether it's building scalable APIs,
                  implementing machine learning models, or automating repetitive
                  tasks, I approach every project with enthusiasm and attention
                  to detail.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
