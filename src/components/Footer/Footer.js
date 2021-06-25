import React from "react";
import { FooterContainer, FooterLink, SocialLogo } from "./FooterComponents";
import facebookLogo from '../../images/logoes/facebook.svg';
import twitterLogo from '../../images/logoes/twitter.svg';
import instagramLogo from '../../images/logoes/instagram.svg';
import linkedinLogo from '../../images/logoes/linkedin.svg';

const Footer = () => (
    <FooterContainer>
        <FooterLink href="#">
            <SocialLogo src={facebookLogo}></SocialLogo>
        </FooterLink>
        <FooterLink href="#">
            <SocialLogo src={twitterLogo}></SocialLogo>
        </FooterLink>
        <FooterLink href="#">
            <SocialLogo src={instagramLogo}></SocialLogo>
        </FooterLink>
        <FooterLink href="#">
            <SocialLogo src={linkedinLogo}></SocialLogo>
        </FooterLink>
    </FooterContainer>
);

export default Footer;