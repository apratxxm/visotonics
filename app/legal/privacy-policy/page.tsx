import { LegalDoc } from "@/components/legal-doc";

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc
      kicker="LEGAL DOCUMENT"
      title="Privacy Policy"
      effective="A LEGAL DISCLAIMER"
      intro="At Visotonics, a brand of VisionXcel Technologies Pvt. Ltd., we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our services, website, and mobile applications."
      sections={[
        {
          heading: "Information We Collect",
          body: ["We may collect and process the following types of information:"],
          items: [
            "Personal Information: Name, email address, contact number, address, and other identifying details.",
            "Usage Data: Information about your interactions with our website and services, including IP address, browser type, pages visited, and usage patterns.",
            "Device Information: Device identifiers, mobile network information, and operating system details.",
            "Transaction Data: Payment and transaction details if you purchase any products or services through our platform.",
            "Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance user experience and gather information about your usage of our services.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: ["We use the collected information for the following purposes:"],
          items: [
            "To provide and improve our products and services.",
            "To personalize your experience on our platform.",
            "To communicate with you, respond to inquiries, and send updates.",
            "To process payments and manage transactions.",
            "To ensure the security and integrity of our services.",
            "For marketing purposes, with your consent, including delivering promotional materials and offers.",
          ],
        },
        {
          heading: "Sharing of Information",
          body: ["We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:"],
          items: [
            "Service Providers: Third-party vendors who assist us in operating our website, conducting business, or providing services (e.g., payment processors, IT service providers).",
            "Legal Requirements: If required by law or in response to legal requests, we may disclose your information.",
            "Business Transfers: In the event of a merger, acquisition, or sale of assets, your personal information may be transferred.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access control, and regular security audits. However, no data transmission over the internet can be guaranteed to be completely secure.",
          ],
        },
        {
          heading: "Your Rights",
          body: ["You have the following rights regarding your personal information:"],
          items: [
            "Access and Correction: You can request access to your personal data or ask us to correct any inaccurate information.",
            "Opt-Out: You can unsubscribe from marketing communications at any time.",
            "Deletion: You may request the deletion of your personal information, subject to certain legal requirements.",
          ],
        },
        {
          heading: "Children's Privacy",
          body: ["Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from minors."],
        },
        {
          heading: "Third-Party Links",
          body: [
            "Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of such third-party sites and encourage you to review their privacy policies.",
          ],
        },
        {
          heading: "Changes to This Privacy Policy",
          body: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.",
          ],
        },
      ]}
      contact="If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at contact@excl.ai"
    />
  );
}
