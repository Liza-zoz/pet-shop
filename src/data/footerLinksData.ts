export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterLinkGroup {
    title: string;
    links: FooterLink[];
}


export const footerLinks: FooterLinkGroup[] = [
    {
        title: "Navigation",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Features", href: "/features" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "Our Team", href: "/team" },
        ],
    },
    {
        title: "Quick Links",
        links: [
            { label: "Services", href: "/services" },
            { label: "FAQ", href: "/faq" },
            { label: "Blog", href: "/blog" },
            { label: "Help", href: "/help" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Join Our Team", href: "/careers" },
            { label: "Vet Consultations", href: "/consultations" },
            { label: "Extra Services", href: "/extras" },
            { label: "Contacts", href: "/contacts" },
        ],
    },
];
