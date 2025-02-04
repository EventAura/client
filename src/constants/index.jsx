import { ShieldCheck } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { MailCheck } from "lucide-react";
import { LucideQrCode } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Lock } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/Contact-Us" },
];

export const workflow = [
  {
    title: "Visit the Event Registration Page",
    description:
      "Navigate to the HOST YOUR EVENT page to begin the registration process.",
  },
  {
    title: "Read Terms of Service and Data Privacy",
    description:
      "Carefully review the terms of service and data privacy policies before proceeding with registration.",
  },
  {
    title: "Enter Event Details to Register",
    description:
      "Fill in the required information to complete the event registration form.",
  },
  {
    title: "Receive Admin Panel Credentials",
    description:
      "After successful registration, you'll receive credentials to access the admin panel and event analytics.",
  },
  {
    title: "Access Secure Admin Panel",
    description:
      "Use the provided credentials to log in and access the secure admin panel and analytics dashboard for your event.",
  },
];

export const features = [
  {
    icon: <ShieldCheck />,
    text: "Payment Security",
    description:
      "Rest easy with our robust integration with PhonePay, ensuring secure transactions and peace of mind for both organizers and participants.",
  },
  {
    icon: <MailCheck />,
    text: "Automated Mailing System",
    description:
      "Effortlessly communicate event details to participants upon successful payment, including event information and unique QR codes for streamlined access.",
  },
  {
    icon: <LucideQrCode />,
    text: "Dynamic QR Ticketing",
    description:
      "Revolutionize event check-in with dynamic QR ticketing, enabling seamless onboarding and authentication for participants while simplifying the registration process.",
  },
  {
    icon: <BarChart2 />,
    text: "Analytics Dashboard",
    description:
      "Empower event managers with comprehensive insights into attendee demographics, ticket sales, and engagement metrics, facilitating data-driven decision-making for enhanced event success.",
  },
  {
    icon: <CalendarCheck />,
    text: "Event Creation and Management",
    description:
      "Streamline event organization and participant registration with our intuitive platform, providing secure online registration and customizable event management tools.",
  },
  {
    icon: <Lock />,
    text: "Security and Data Privacy",
    description:
      "Protect attendee data with robust security measures and ensure compliance with data privacy regulations, safeguarding sensitive information and enhancing trust.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "0 INR",
    features: [
      "Designed for Free Events",
      "Unlimited Participants Onboarding",
      "Basic Web Analytics",
      "Event Registration Management",
      "Standard Email Support",
    ],
  },
  {
    title: "Paid",
    price: "2% + 25 INR",
    features: [
      "Designed for Paid Events",
      "Unlimited Participants Onboarding",
      "Advanced Web Analytics",
      "Dynamic QR Code Ticketing",
      "Secured Admin Panel",
      "Secure Tunnel",
      "2% transaction fee (payment gateway fee)",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Tailored for Large Paid Events",
      "Unlimited Participants Onboarding",
      "Comprehensive Web Analytics",
      "Dynamic QR Code Ticketing",
      "Custom Payment Gateway Integration",
      "Enhanced Secure Tunnel",
      "2% transaction fee (payment gateway fee)",
    ],
  },
];

export const team = [
  {
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQH3m_VqfMjRXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690730441108?e=1738800000&v=beta&t=2uui8lnSKDFNuGto04GbTktgcuLVmdx0bLWmmLBgzmk",
    name: "Sindhu Ravuri",
    title: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/sindhu-ravuri/",
    twitter: "javascript:void(0)",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFVRgQq0ObZCg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697024171061?e=1738800000&v=beta&t=sn38uh8QC4Qvq6VRnGuWKJMCSa4_aWowNMnVOK0Ja9o",
    name: "Varun Harinath",
    title: "Co-founder & Lead Software Engineer",
    linkedin: "https://www.linkedin.com/in/varun-harinath/",
    twitter: "javascript:void(0)",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQESlx66wwEMJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708603457057?e=1738800000&v=beta&t=LCLypqcKTBRF6wC5V69ECmEniq9SEA6Zc1cvnD8c7Kk",
    name: "Sarthak Aitha",
    title: "CTO & Technology Team Lead",
    linkedin: "https://www.linkedin.com/in/sarthak-aitha-943534252/",
    twitter: "javascript:void(0)",
  },
  // {
  //   avatar:
  //     "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  //   name: "Reshmi Kumari",
  //   title: "Head of Business Development",
  //   linkedin: "https://www.linkedin.com/in/reshmi-kumari-b2887627a",
  //   twitter: "javascript:void(0)",
  // },
  // {
  //   avatar:
  //   "https://media.licdn.com/dms/image/v2/D5603AQEubDs8pd6pAQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718550925166?e=1729728000&v=beta&t=5OxsfwP0UdZ-sV1UT8tp0Q9EAdMTQn7wkEYWwhmorjk",
  //   name: "Selva Geeta Velan",
  //   title: "Social Media Manager",
  //   linkedin: "javascript:void(0)",
  //   twitter: "javascript:void(0)",
  // },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const footerNavs = [
  { href: "/about-us", text: "About Us" },
  { href: "/events", text: "Events" },
  { href: "/secure/v3/Event-On-Boadring", text: "Event Onboarding" },
  { href: "/company-eula", text: "Terms and conditions" },
  { href: "/Contact-Us", text: "Contact Us" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
