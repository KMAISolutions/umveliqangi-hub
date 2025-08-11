import { LucideIcon, Home, BarChart2, Star, Calendar, Info, BookOpen, Users, Landmark, GraduationCap, Trophy, Video, User, ClipboardList, Download, Heart, HandCoins, Building2, FileText, Image, Newspaper, PlayCircle, Radio, Award } from "lucide-react";

export type MenuLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type MenuGroup = {
  heading: string;
  links: MenuLink[];
};

export type MenuItem = {
  label: string;
  groups?: MenuGroup[];
  href?: string; // For direct links like Home if needed
};

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    groups: [
      {
        heading: "",
        links: [
          { label: "Overview / Welcome", href: "/", icon: Home },
          { label: "Quick Stats", href: "/#stats", icon: BarChart2 },
          { label: "Highlights", href: "/#highlights", icon: Star },
          { label: "Calendar", href: "/events", icon: Calendar },
        ],
      },
    ],
  },
  {
    label: "About",
    groups: [
      {
        heading: "About Us",
        links: [
          { label: "Our Story (History from 1983)", href: "/about#story", icon: Info },
          { label: "Mission, Vision & Values", href: "/about#mission", icon: BookOpen },
          { label: "Leadership Profiles", href: "/about#leadership", icon: Users },
          { label: "Interactive Timeline", href: "/about#timeline", icon: Landmark },
          { label: "Welcome Video", href: "/about#video", icon: PlayCircle },
        ],
      },
      {
        heading: "Our Facilities",
        links: [
          { label: "Mosque & Prayer Halls", href: "/facilities#mosque", icon: Landmark },
          { label: "Qur'an & Leadership Academy Classrooms", href: "/facilities#academy", icon: GraduationCap },
          { label: "Boys' Boarding House", href: "/facilities#boarding", icon: Home },
          { label: "Clinic & Wellness Center", href: "/facilities#clinic", icon: Heart },
          { label: "Library & Resource Center", href: "/facilities#library", icon: BookOpen },
          { label: "Sports & Recreation Grounds", href: "/facilities#sports", icon: Trophy },
          { label: "Multipurpose Community Hall", href: "/facilities#hall", icon: Building2 },
          { label: "Facilities Gallery", href: "/gallery#facilities", icon: Image },
        ],
      },
    ],
  },
  {
    label: "Education",
    groups: [
      {
        heading: "Academy Programs",
        links: [
          { label: "Qur'an & Leadership Programs", href: "/academy#programs", icon: GraduationCap },
          { label: "Boarding Program", href: "/academy#boarding", icon: Home },
          { label: "Youth Empowerment Workshops", href: "/academy#workshops", icon: Users },
          { label: "Skills Development Programs", href: "/academy#skills", icon: ClipboardList },
          { label: "Competitions & Guest Scholars", href: "/academy#competitions", icon: Trophy },
          { label: "Student Achievements & Stories", href: "/academy#stories", icon: Award },
        ],
      },
      {
        heading: "E-Learning",
        links: [
          { label: "Course Catalog", href: "/e-learning#courses", icon: BookOpen },
          { label: "Student Login & Registration", href: "/e-learning#auth", icon: User },
          { label: "Video Lectures & Downloads", href: "/e-learning#videos", icon: Video },
          { label: "Progress Tracking & Certificates", href: "/e-learning#progress", icon: BarChart2 },
          { label: "Hybrid Learning Options", href: "/e-learning#hybrid", icon: Radio },
          { label: "Downloads Hub", href: "/e-learning#downloads", icon: Download },
        ],
      },
    ],
  },
  {
    label: "Community",
    groups: [
      {
        heading: "Community Outreach",
        links: [
          { label: "Healthcare & Wellness Programs", href: "/community#healthcare", icon: Heart },
          { label: "Feeding Schemes & Social Outreach", href: "/community#feeding", icon: HandCoins },
          { label: "Volunteer & Mentorship Registration", href: "/community#volunteer", icon: Users },
          { label: "Entrepreneurship & Skills Hub", href: "/community#entrepreneurship", icon: ClipboardList },
          { label: "Kids & Family Corner", href: "/community#family", icon: Home },
        ],
      },
      {
        heading: "Events",
        links: [
          { label: "Interactive Calendar", href: "/events#calendar", icon: Calendar },
          { label: "Religious Events", href: "/events#religious", icon: Landmark },
          { label: "Community & Social Events", href: "/events#community", icon: Users },
          { label: "Youth & Academy Programs", href: "/events#youth", icon: GraduationCap },
          { label: "Skills Training & Workshops", href: "/events#training", icon: ClipboardList },
          { label: "Event Pages with RSVP / Maps", href: "/events#rsvp", icon: FileText },
          { label: "Upcoming Events Widget", href: "/events#upcoming", icon: Calendar },
          { label: "Social Media", href: "/community#social", icon: Users },
        ],
      },
    ],
  },
  {
    label: "Media",
    groups: [
      {
        heading: "",
        links: [
          { label: "Community Blog & News", href: "/media#blog", icon: Newspaper },
          { label: "Photo Gallery", href: "/gallery#photos", icon: Image },
          { label: "Video Gallery", href: "/media#videos", icon: Video },
          { label: "Live Stream Page", href: "/media#live", icon: Radio },
          { label: "Latest Facebook Feed", href: "/media#facebook", icon: Newspaper },
          { label: "Donor Appreciation Stories", href: "/media#donors", icon: Award },
        ],
      },
    ],
  },
  {
    label: "Donate",
    groups: [
      {
        heading: "Support",
        links: [
          { label: "Online Donations", href: "/#donate", icon: HandCoins },
          { label: "Sponsor a Student", href: "/#sponsor", icon: Heart },
          { label: "Support a Project", href: "/#projects", icon: ClipboardList },
          { label: "Waqf Contributions", href: "/#waqf", icon: Landmark },
          { label: "Downloadable Reports", href: "/#reports", icon: FileText },
          { label: "Donor Recognition", href: "/#recognition", icon: Award },
        ],
      },
    ],
  },
];
