import { useState } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

type Question = { id: number; en: string; ar: string };

const QUESTIONS: Question[] = [
  { id: 1, en: "I enjoy solving difficult problems and puzzles.", ar: "أستمتع بحل المشكلات الصعبة والألغاز." },
  { id: 2, en: "I like helping and supporting other people.", ar: "أحب مساعدة الآخرين ودعمهم." },
  { id: 3, en: "I learn new things quickly and adapt well to change.", ar: "أتعلم الأشياء الجديدة بسرعة وأتكيف مع التغيير بسهولة." },
  { id: 4, en: "I prefer working in teams over working alone.", ar: "أفضل العمل ضمن فريق على العمل بمفردي." },
  { id: 5, en: "I often come up with creative and original ideas.", ar: "كثيراً ما أتوصل إلى أفكار إبداعية وأصيلة." },
  { id: 6, en: "I enjoy organizing, planning, and managing projects.", ar: "أستمتع بتنظيم المشاريع والتخطيط لها وإدارتها." },
  { id: 7, en: "I am comfortable speaking in front of groups.", ar: "أشعر بالراحة عند التحدث أمام مجموعات من الناس." },
  { id: 8, en: "I like working with data, statistics, and numbers.", ar: "أحب العمل مع البيانات والإحصاءات والأرقام." },
  { id: 9, en: "I enjoy building or repairing things with my hands.", ar: "أستمتع ببناء الأشياء أو إصلاحها بيدي." },
  { id: 10, en: "I am naturally good at persuading others.", ar: "أنا بطبيعتي جيد في إقناع الآخرين بوجهة نظري." },
  { id: 11, en: "I notice details others often miss.", ar: "ألاحظ التفاصيل التي يفوتها الآخرون في الغالب." },
  { id: 12, en: "I am comfortable taking calculated risks.", ar: "أشعر بالراحة عند اتخاذ مخاطر محسوبة." },
