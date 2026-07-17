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
  premium_badge: "⭐ Premium", premium_unlock: "Unlock Full Report",
  premium_desc: "Get your complete skill analysis, career matches, and personalized growth plan.",
  premium_price: "$9.99/month", premium_cta: "Upgrade to Premium",
  premium_free_limit: "You've used your free assessment. Upgrade to continue.",
  auth_login_title: "Welcome Back", auth_login_subtitle: "Sign in to your account",
  auth_register_title: "Create Your Account", auth_register_subtitle: "Start discovering your potential",
  auth_username: "Username", auth_username_placeholder: "e.g. john_doe",
  auth_display_name: "Display Name", auth_display_placeholder: "Your full name",
  auth_password: "Password", auth_password_placeholder: "At least 6 characters",
  auth_login_btn: "Sign In", auth_register_btn: "Create Account",
  auth_no_account: "Don't have an account?", auth_have_account: "Already have an account?",
  auth_signup_link: "Sign up free", auth_signin_link: "Sign in",
  auth_error_invalid: "Invalid username or password", auth_loading: "Please wait...",
  auth_username_rules: "Letters, numbers, underscores only (3–30 chars)",
  auth_forgot: "Forgot password?",
  dash_welcome: "Welcome back", dash_assessments: "Assessments Taken",
  dash_skills: "Skills Discovered", dash_progress: "Progress Score",
  dash_cta_title: "Ready to discover your potential?",
  dash_cta_desc: "Take the assessment to unlock your personalized growth plan and career matches.",
  dash_cta_btn: "Start Assessment", dash_recent: "Recent Activity",
  dash_no_activity: "No activity yet. Complete your first assessment!",
  assess_title: "Skills Assessment", assess_subtitle: "Answer honestly — there are no right or wrong answers.",
  assess_question: "Question", assess_of: "of", assess_complete: "Assessment Complete!",
  assess_complete_msg: "Your results are being analyzed. View your report below.",
  assess_next: "Go to Dashboard", assess_view_report: "View Report",
  opt_strongly_disagree: "Strongly Disagree", opt_disagree: "Disagree",
  opt_neutral: "Neutral", opt_agree: "Agree", opt_strongly_agree: "Strongly Agree",
  report_title: "Your Skills Report", report_no_report: "No report yet",
  report_no_report_desc: "Complete the assessment to generate your personalized report.",
  report_start: "Start Assessment", report_strengths: "Your Strengths",
  report_careers: "Recommended Careers", report_premium_lock: "Full report available with Premium",
  profile_title: "My Profile", profile_subtitle: "Manage your account and track your growth journey.",
  profile_info: "Account Information", profile_username: "Username",
  profile_display: "Display Name", profile_member_since: "Member Since",
  profile_skills: "Discovered Skills", profile_goals: "Growth Goals",
  profile_edit: "Edit Profile", profile_save: "Save Changes", profile_cancel: "Cancel",
  settings_title: "Settings", settings_subtitle: "Manage your preferences and account.",
  settings_account: "Account", settings_security: "Privacy & Security",
  settings_language: "Language", settings_theme: "Appearance",
  settings_signout: "Sign Out", settings_signout_desc: "You will be signed out of your account.",
  settings_signout_btn: "Sign Out", settings_danger: "Danger Zone",
  settings_delete: "Delete Account", settings_delete_desc: "This action is irreversible.",
  about_title: "About Project Genesis",
  contact_title: "Contact Us", contact_name: "Name", contact_email_label: "Email (optional)",
  contact_message: "Message", contact_send: "Send Message",
  contact_sent: "Message sent! We'll get back to you soon.",
  faq_title: "Frequently Asked Questions",
  privacy_title: "Privacy Policy", terms_title: "Terms of Service",
  admin_title: "Admin Panel", admin_users: "Total Users",
  admin_premium: "Premium Users", admin_assessments: "Total Assessments",
  admin_manage: "Manage Users",
  loading: "Loading...", error_generic: "Something went wrong. Please try again.",
  back: "Back", save: "Save", cancel: "Cancel", upgrade: "Upgrade",
  free: "Free", premium: "Premium",
  footer_rights: "© 2026 Project Genesis. All rights reserved.",
  footer_about: "About", footer_contact: "Contact", footer_privacy: "Privacy",
  footer_terms: "Terms", footer_faq: "FAQ",
  footer_tagline: "Helping you find your path since 2024.",
};

const ar: typeof en = {
  nav_home: "الرئيسية", nav_assessment: "التقييم", nav_dashboard: "لوحة التحكم",
  nav_profile: "ملفي الشخصي", nav_settings: "الإعدادات", nav_login: "تسجيل الدخول",
  nav_register: "ابدأ الآن", nav_logout: "تسجيل الخروج", nav_admin: "الإدارة",
  nav_report: "تقريري",
  hero_title: "اكتشف إمكاناتك", hero_title_accent: "المخفية",
  hero_subtitle: "اكشف نقاط قوتك الحقيقية، وابحث عن مسار مهني يناسبك، واحصل على خطة نمو شخصية مصممة خصيصاً لك.",
  hero_cta: "ابدأ التقييم مجاناً", hero_cta_secondary: "إنشاء حساب",
  hero_users: "انضم إلى 12,000+ مستخدم وجدوا طريقهم",
  features_title: "صُمّم لاكتشاف من أنت حقاً",
  features_subtitle: "مجموعة أدوات طورها خبراء مهنيون ومدعومة بالعلوم السلوكية.",
  feat1_title: "اكتشاف المهارات الخفية", feat1_desc: "يكشف تقييمنا متعدد الأبعاد عن مواهب لم تكن تعرف بوجودها.",
  feat2_title: "رسم خارطة المسار المهني", feat2_desc: "احصل على تطابق مع المسارات المهنية التي تتوافق مع قدراتك الفريدة.",
  feat3_title: "خطة نمو شخصية", feat3_desc: "خطة عمل تدريجية مُصممة لملفك الشخصي — مع موارد ومعالم وتحقق أسبوعي.",
  feat4_title: "تتبع التقدم", feat4_desc: "شاهد تطور مهاراتك عبر الزمن وقِس نموك الحقيقي.",
  feat5_title: "رؤى المجتمع", feat5_desc: "قارن ملفك الشخصي مع أشخاص في مسارك المهني المستهدف.",
  feat6_title: "تقارير الخبراء", feat6_desc: "نزّل تقرير PDF كاملاً لتقييمك — مُعدّ للموجهين أو المدربين.",
  premium_badge: "⭐ مميز", premium_unlock: "افتح التقرير الكامل",
  premium_desc: "احصل على تحليل مهاراتك الكامل ومطابقة المسارات المهنية.",
  premium_price: "9.99$ / شهر", premium_cta: "الترقية إلى المميز",
  premium_free_limit: "لقد استخدمت تقييمك المجاني. قم بالترقية للمتابعة.",
  auth_login_title: "مرحباً بعودتك", auth_login_subtitle: "سجّل الدخول إلى حسابك",
  auth_register_title: "إنشاء حسابك", auth_register_subtitle: "ابدأ رحلة اكتشاف إمكاناتك",
  auth_username: "اسم المستخدم", auth_username_placeholder: "مثال: ahmed_99",
  auth_display_name: "الاسم المعروض", auth_display_placeholder: "اسمك الكامل",
  auth_password: "كلمة المرور", auth_password_placeholder: "6 أحرف على الأقل",
  auth_login_btn: "تسجيل الدخول", auth_register_btn: "إنشاء الحساب",
  auth_no_account: "ليس لديك حساب؟", auth_have_account: "لديك حساب بالفعل؟",
  auth_signup_link: "سجّل مجاناً", auth_signin_link: "تسجيل الدخول",
  auth_error_invalid: "اسم المستخدم أو كلمة المرور غير صحيحة", auth_loading: "جاري التحميل...",
  auth_username_rules: "أحرف وأرقام وشرطات سفلية فقط (3–30 حرفاً)",
  auth_forgot: "نسيت كلمة المرور؟",
  dash_welcome: "مرحباً بعودتك", dash_assessments: "التقييمات المنجزة",
  dash_skills: "المهارات المكتشفة", dash_progress: "درجة التقدم",
  dash_cta_title: "هل أنت مستعد لاكتشاف إمكاناتك؟",
  dash_cta_desc: "قم بالتقييم لاكتشاف خطة نموك الشخصية.",
  dash_cta_btn: "ابدأ التقييم", dash_recent: "النشاط الأخير",
  dash_no_activity: "لا يوجد نشاط بعد. أكمل تقييمك الأول!",
  assess_title: "تقييم المهارات", assess_subtitle: "أجب بصدق — لا توجد إجابات صحيحة أو خاطئة.",
  assess_question: "سؤال", assess_of: "من", assess_complete: "اكتمل التقييم!",
  assess_complete_msg: "يتم تحليل نتائجك. اطلع على تقريرك أدناه.",
  assess_next: "إلى لوحة التحكم", assess_view_report: "عرض التقرير",
  opt_strongly_disagree: "لا أوافق بشدة", opt_disagree: "لا أوافق",
  opt_neutral: "محايد", opt_agree: "أوافق", opt_strongly_agree: "أوافق بشدة",
  report_title: "تقرير مهاراتك", report_no_report: "لا يوجد تقرير بعد",
  report_no_report_desc: "أكمل التقييم لإنشاء تقريرك الشخصي.",
  report_start: "ابدأ التقييم", report_strengths: "نقاط قوتك",
  report_careers: "المسارات المهنية الموصى بها",
  report_premium_lock: "التقرير الكامل متاح مع الاشتراك المميز",
  profile_title: "ملفي الشخصي", profile_subtitle: "أدر حسابك وتتبع رحلة نموك.",
  profile_info: "معلومات الحساب", profile_username: "اسم المستخدم",
  profile_display: "الاسم المعروض", profile_member_since: "عضو منذ",
  profile_skills: "المهارات المكتشفة", profile_goals: "أهداف النمو",
  profile_edit: "تعديل الملف", profile_save: "حفظ التغييرات", profile_cancel: "إلغاء",
  settings_title: "الإعدادات", settings_subtitle: "أدر تفضيلاتك وحسابك.",
  settings_account: "الحساب", settings_security: "الخصوصية والأمان",
  settings_language: "اللغة", settings_theme: "المظهر",
  settings_signout: "تسجيل الخروج", settings_signout_desc: "سيتم تسجيل خروجك من حسابك.",
  settings_signout_btn: "تسجيل الخروج", settings_danger: "منطقة الخطر",
  settings_delete: "حذف الحساب", settings_delete_desc: "هذا الإجراء لا يمكن التراجع عنه.",
  about_title: "عن مشروع جينيسيس",
  contact_title: "تواصل معنا", contact_name: "الاسم", contact_email_label: "البريد الإلكتروني (اختياري)",
  contact_message: "الرسالة", contact_send: "إرسال الرسالة",
  contact_sent: "تم الإرسال! سنرد عليك قريباً.",
  faq_title: "الأسئلة الشائعة",
  privacy_title: "سياسة الخصوصية", terms_title: "شروط الخدمة",
  admin_title: "لوحة الإدارة", admin_users: "إجمالي المستخدمين",
  admin_premium: "المستخدمون المميزون", admin_assessments: "إجمالي التقييمات",
  admin_manage: "إدارة المستخدمين",
  loading: "جاري التحميل...", error_generic: "حدث خطأ ما. يرجى المحاولة مجدداً.",
  back: "رجوع", save: "حفظ", cancel: "إلغاء", upgrade: "ترقية",
  free: "مجاني", premium: "مميز",
  footer_rights: "© 2026 مشروع جينيسيس. جميع الحقوق محفوظة.",
  footer_about: "عن المشروع", footer_contact: "تواصل معنا",
  footer_privacy: "الخصوصية", footer_terms: "الشروط", footer_faq: "الأسئلة الشائعة",
  footer_tagline: "نساعدك في إيجاد طريقك منذ 2024.",
};

export const translations = { en, ar };
export type TranslationKey = keyof typeof en;

interface I18nContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en", setLang: () => {}, t: (k) => k, isRTL: false,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem("pg_lang") as Language) ?? "en";
  });

  function setLang(l: Language) {
    setLangState(l);
    localStorage.setItem("pg_lang", l);
  }

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (key: TranslationKey): string =>
    translations[lang][key] ?? translations.en[key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isRTL: lang === "ar" }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
