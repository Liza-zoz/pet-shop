import { FooterLinkGroup as FooterLinkGroupType } from "../data/footerLinksData";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import {LineDivider} from "./Icons";

interface FooterLinkGroupProps extends FooterLinkGroupType { }

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
    <div className={styles.footer__column}>
        <p className={styles.footer__title}>{title}</p>
        <div className={styles.footer__divider}>
            <LineDivider className={styles.footer__line} />
        </div>
        <ul className={styles.footer__list}>
            {links.map((link) => (
                <li key={link.label} className={styles.footer__item}>
                    <Link to={link.href}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterLinkGroup;
