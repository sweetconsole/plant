import "./Footer.css"
import React from 'react';
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import FooterChapter from "./FooterChapter";

const Footer = () => {
	const linkNavigation = ["Home", "About", "Help & Support", "Product"]
	const linkAboutUs = ["Contact", "Address", "Blog", "About Us"]
	const linkHelp = ["Coustomers Services", "FAQs", "We Are Hiring", "Returns"]

	return (
		<div className="footer">
			<div className="footer-info">
				<p className="footer-name">Plant</p>
				<p className="footer-text Text">
					Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.
				</p>

				<a className="footer-networks" href="/"><img src={Facebook} alt="Facebook" /></a>
				<a className="footer-networks" href="/"><img src={Twitter} alt="Twitter" /></a>
				<a className="footer-networks" href="/"><img src={Instagram} alt="Instagram" /></a>
			</div>

			<div className="footer-chapters">
				<FooterChapter nameChapter="Navigation" nameLinks={linkNavigation} />
				<FooterChapter nameChapter="About Us" nameLinks={linkAboutUs} />
				<FooterChapter nameChapter="Help" nameLinks={linkHelp} />
			</div>
		</div>
	);
};

export default Footer;
