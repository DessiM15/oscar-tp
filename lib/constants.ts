export const SITE_CONFIG = {
  name: "Teacher's Pension",
  description:
    "Expert pension consulting and retirement planning for educators. Maximize your benefits and secure your future.",
  url: "https://tpensions.com",
  phone: "956-335-0488",
  email: "ogarcia@tpension.com",
  agent: {
    name: "Oscar Garcia",
    title: "Financial Educator",
    license: "1792345",
    phone: "956-335-0488",
  },
  locations: [
    {
      name: "San Juan Office",
      address: "502 N Veterans Blvd Suite A",
      city: "San Juan",
      state: "TX",
      zip: "78589",
    },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Districts", href: "/districts" },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
] as const;

export const CALENDAR_LINK = "https://calendly.com/ogarcia-19/new-meeting-with-oscar";
