import { LegalDoc } from "@/components/legal-doc";

export default function TermsAndConditionsPage() {
  return (
    <LegalDoc
      kicker="LEGAL DOCUMENT"
      title="Terms & Conditions"
      effective="A LEGAL DISCLAIMER"
      intro="Welcome to Visotonics, a brand of VisionXcel Technologies Pvt. Ltd. By using our website, products, and services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully before accessing or using our services."
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            "By accessing or using our website, services, or any related content, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with these terms, please do not use our services.",
          ],
        },
        {
          heading: "Services Provided",
          body: [
            "Visotonics provides vision-based technology solutions, tools for data analysis, and related services. The details of these services are outlined on our website, and their availability is subject to change without notice.",
          ],
        },
        {
          heading: "User Obligations",
          body: ["When using our platform, you agree to:"],
          items: [
            "Use the services only for lawful purposes.",
            "Provide accurate and complete information when requested.",
            "Not attempt to interfere with or disrupt the functionality of our website or services.",
            "Comply with all applicable local, national, and international laws and regulations.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on the Visotonics website, including but not limited to text, design, graphics, logos, icons, images, and software, is the property of VisionXcel Technologies Pvt. Ltd. or its licensors. You are prohibited from copying, modifying, or redistributing this content without prior written permission.",
          ],
        },
        {
          heading: "Use of Services",
          body: ["You are permitted to use our services for personal or commercial purposes, provided you adhere to these Terms and Conditions. You may not:"],
          items: [
            "Repurpose our services or products for resale without a license.",
            "Attempt to reverse-engineer, decompile, or extract source code from our technology.",
            "Violate the intellectual property rights of Visotonics or any third party.",
          ],
        },
        {
          heading: "Pricing and Payment",
          body: [
            "All prices for products and services are listed on the website and are subject to change. Payment terms will be specified during the purchase process. Failure to complete payment may result in the suspension or termination of your access to services.",
          ],
        },
        {
          heading: "User Accounts",
          body: [
            "To access certain features of our services, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your password. You agree to notify us immediately of any unauthorized use of your account.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "To the fullest extent permitted by law, VisionXcel Technologies Pvt. Ltd. shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or inability to use, our services. This includes any loss of profits, data, or business opportunities.",
          ],
        },
        {
          heading: "Termination",
          body: [
            "We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to our business or users.",
          ],
        },
        {
          heading: "Warranties and Disclaimers",
          body: [
            'We make no guarantees regarding the accuracy, completeness, or reliability of the content and services provided on the Visotonics platform. All services are provided "as-is" without warranties of any kind, either express or implied.',
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal actions related to these terms must be brought in High Court, Lucknow.",
          ],
        },
        {
          heading: "Changes to Terms and Conditions",
          body: [
            "VisionXcel Technologies Pvt. Ltd. reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page, and it is your responsibility to review them regularly. Your continued use of our services constitutes acceptance of the revised terms.",
          ],
        },
      ]}
      contact="If you have any questions or concerns about these Terms and Conditions, please contact us at contact@excl.ai"
    />
  );
}
