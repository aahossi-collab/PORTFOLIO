
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const workExperience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Giant Inc.",
    period: "2021 - Present",
    description: "Led a team of 5 developers in building a scalable SaaS platform. Optimized database queries reducing load time by 40%.",
  },
  {
    title: "Product Engineer",
    company: "Creative Studio",
    period: "2019 - 2021",
    description: "Designed and implemented interactive user interfaces for Fortune 500 clients using React and Framer Motion.",
  },
];

const education = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Stanford University",
    period: "2017 - 2019",
    description: "Focused on Distributed Systems and Human-Computer Interaction. Graduated with honors.",
  },
  {
    degree: "B.Sc. in Software Engineering",
    institution: "MIT",
    period: "2013 - 2017",
    description: "Foundational studies in algorithms, data structures, and system design.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A chronological overview of my professional experience and academic achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Centered Decorative Line/Icon for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
            <div className="sticky top-1/2 -translate-y-1/2 bg-background p-2 rounded-full border border-border">
              <div className="h-4 w-4 bg-primary rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Briefcase className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            {workExperience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all border-l-4 border-l-primary group">
                  <CardHeader className="pb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-2">
                      {item.period}
                    </span>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <p className="text-md font-semibold text-muted-foreground">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <GraduationCap className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all border-l-4 border-l-accent group">
                  <CardHeader className="pb-2">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mb-2">
                      {item.period}
                    </span>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">{item.degree}</CardTitle>
                    <p className="text-md font-semibold text-muted-foreground">{item.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
