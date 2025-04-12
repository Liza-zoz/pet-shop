// src/data/socialLinks.ts

import { ReactElement } from "react";
import { IconFacebook, IconInsta, IconX, IconYouTube } from "../components/Icons";

type SocialLink = {
    icon: ReactElement;
    href: string;
    label: string;
};

export const socialLinks: SocialLink[] = [
    {
        icon: <IconFacebook />,
        href: "https://facebook.com",
        label: "Facebook",
    },
    {
        icon: <IconInsta />,
        href: "https://instagram.com",
        label: "Instagram",
    },
    {
        icon: <IconX />,
        href: "https://twitter.com",
        label: "Twitter",
    },
    {
        icon: <IconYouTube />,
        href: "https://youtube.com",
        label: "YouTube",
    },
];
