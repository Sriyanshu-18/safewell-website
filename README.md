# Safewell Brand Website

A responsive brand-storytelling website for **Safewell**, a sanitary pad brand of **S.S. Industries**, owned by proprietor **Anjana Sahoo**. The manufacturing unit is in Jagatsinghpur, Odisha.

This is **not an e-commerce website**. It is intended to tell the brand story, present product details, recognise the women employees, and invite retail/institutional partnership enquiries.

## Tech stack
- Java 21
- Spring Boot 3.5.7
- Spring MVC
- Thymeleaf
- HTML, CSS and JavaScript
- Maven

## Pages included
- Home
- About Safewell
- Our Story
- Women Behind Safewell
- Manufacturing
- Product
- Impact
- Retail & Institutional Partnerships
- Contact

## Run locally in Eclipse
1. Extract this ZIP to a folder.
2. Open Eclipse and choose **File → Import → Maven → Existing Maven Projects**.
3. Select the extracted `safewell-website` folder and finish the import.
4. Confirm Eclipse is using **JDK 21**. If necessary: **Window → Preferences → Java → Installed JREs**.
5. Wait for Maven dependencies to finish downloading.
6. Open `src/main/java/com/safewell/SafewellApplication.java`.
7. Right-click → **Run As → Java Application** (or Spring Boot App if Spring Tools is installed).
8. Open `http://localhost:8080` in your browser.

## Before launch — important checklist
This project deliberately uses labelled placeholders rather than invented company assets or claims.

1. Replace the temporary “S” brand mark with the official Safewell logo.
2. Replace all image placeholders with real photos of the product, manufacturing unit and team. Obtain permission before publishing employee photos or stories.
3. Replace the illustrated product packet with a clear photograph of the actual Safewell packet.
4. Add the official business phone, email and/or WhatsApp number to the Contact page.
5. Confirm the exact wording and provider for the **Sanitary Napkin Manufacturing Project** training.
6. Ask the proprietor to approve the story, business details and any mention of Tejaswinee Charitable Trust before publication.
7. Add verified product packaging, specifications and any supported manufacturing/quality information. Do not publish unverified certifications or health claims.
8. Confirm the current official tagline, if any. “Care with purpose” is currently a design phrase, not a confirmed registered/official tagline.

## Current limitations
- No database is configured.
- There is no admin dashboard or content management system.
- The contact page is informational only; it does not send or store enquiries yet.
- Google Fonts require an internet connection; system fallbacks are included.
- The CSS product packet is only a mock-up and must not be presented as the actual packaging.

## Routes
- `/`
- `/about`
- `/our-story`
- `/women`
- `/manufacturing`
- `/product`
- `/impact`
- `/partnerships`
- `/contact`

## Suggested next steps
1. Replace the placeholders and confirm copy.
2. Add a working enquiry method (business email/WhatsApp, or a validated form with email delivery).
3. Test on mobile and desktop.
4. Put the project in Git/GitHub.
5. Deploy to a Java-hosting provider and connect a custom domain with HTTPS. Deployment will require your own hosting/domain account and configuration.
