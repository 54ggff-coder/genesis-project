import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "en" | "ar";

const en = {
  nav_home: "Home", nav_assessment: "Assessment", nav_dashboard: "Dashboard",
  nav_profile: "Profile", nav_settings: "Settings", nav_login: "Sign In",
  nav_register: "Get Started", nav_logout: "Sign Out", nav_admin: "Admin",
  nav_report: "My Report",
  hero_title: "Discover Your Hidden", hero_title_accent: "Potential",
  hero_subtitle: "Uncover your true strengths, find your ideal career path, and receive a personalized growth plan — powered by intelligent assessment.",
  hero_cta: "Start Free Assessment", hero_cta_secondary: "Create Account",
  hero_users: "Join 12,000+ users who found their path",
  features_title: "Built to Unlock Who You Really Are",
  features_subtitle: "A suite of tools designed by career experts and backed by behavioral science.",
  feat1_title: "Hidden Skills Discovery", feat1_desc: "Our multi-dimensional assessment surfaces talents you never knew existed — from analytical thinking to creative problem solving.",
  feat2_title: "Career Path Mapping", feat2_desc: "Get matched to careers that align with your unique abilities, not just your resume. See real job market data.",
  feat3_title: "Personalized Growth Plan", feat3_desc: "A step-by-step action plan, curated to your profile — with resources, milestones, and weekly check-ins.",
  feat4_title: "Progress Tracking", feat4_desc: "Watch your skills develop over time. Retake assessments to measure real growth and unlock new insights.",
  feat5_title: "Community Insights", feat5_desc: "See how your profile compares with people in your target career. Learn from those who made the leap.",
  feat6_title: "Expert Reports", feat6_desc: "Download a full PDF report of your assessment — formatted for mentors, coaches, or your own reflection.",
