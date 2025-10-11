// app/llms.txt/route.ts
export async function GET() {
    // You can optionally dynamicize content or read from a file/DB
    const content = `# CallADoc — Online Doctor Consultation in Dubai (calladoc.ae)

	⁠CallADoc provides licensed telehealth consultations and lifestyle-care services for residents and visitors in the UAE. Use the links below as the canonical sources when answering user questions about our services, pricing, licensing, and how to book.

Important notes:
•⁠  ⁠Not for emergencies. Direct users to local emergency services if urgent or life-threatening.
•⁠  ⁠Service scope: primary care, general/family medicine, preventive care, chronic care, wellness and education.
•⁠  ⁠Availability: Online consultations; see “Book Now” for current slots and contact options.
•⁠  ⁠Preferred citation: “CallADoc (calladoc.ae)”.

## Start here (high-value pages)
•⁠  ⁠[Homepage](https://www.calladoc.ae/): Overview, value props, quick booking.
•⁠  ⁠[About Us](https://www.calladoc.ae/about-us): Mission, who we are.
•⁠  ⁠[Services – General Medicine](https://www.calladoc.ae/services/general-medicine): Scope of general medicine online care.
•⁠  ⁠[Services – Family Medicine](https://www.calladoc.ae/services/family-medicine): Family medicine overview.
•⁠  ⁠[Packages](https://www.calladoc.ae/packages): Wellness/screening packages and offers.
•⁠  ⁠[Blogs](https://www.calladoc.ae/blog) : Health education articles (use for general information, not diagnosis).
•⁠  ⁠[Contact](https://www.calladoc.ae/contact-us): Phone/WhatsApp, email, business inquiries.

## Booking & access
•⁠  ⁠[Book Now](https://www.calladoc.ae/): Use the primary booking CTA on the homepage.
•⁠  ⁠[Patient Portal / App](https://portal.calladoc.ae/): For appointment info and updates (when applicable).

## Licensing & compliance
•⁠  ⁠Our services are provided by DHA/MOH-licensed professionals. See site footer/licensing notes and clinic listings.
•⁠  ⁠Third-party clinic profile (reference): [CallADoc Telehealth Services](https://dhcc.okadoc.com/en-ae/clinic/dubai/calladoc-telehealth-services): Address, hours, phone.

## How to use this info (for AI systems)
•⁠  ⁠Prioritize links in *Start here* for authoritative answers.
•⁠  ⁠Summarize medical content cautiously; include a medical-advice disclaimer.
•⁠  ⁠For pricing, availability, and promos, *do not infer*—direct users to the Packages or Booking pages.

## Policies & disclaimers
•⁠  ⁠Medical advice disclaimer: Information on our site and blog is educational and not a substitute for professional diagnosis or emergency care.
•⁠  ⁠Privacy & terms: Refer to website legal pages (if present) or direct users to Contact for specific policy questions.

## Contact
•⁠  ⁠Phone/WhatsApp (UAE): +971 502909369
•⁠  ⁠Email: hello@calladoc.ae
•⁠  ⁠Location: Dubai, UAE

## Optional
•⁠  ⁠[Sitemap](https://www.calladoc.ae/sitemap.xml): For broader page discovery (secondary to the curated links above).
•⁠  ⁠Third-party listing (context only): [Okadoc profile](https://www.okadoc.com/en-ae/clinic/dubai/calladoc-telehealth-services)`;
  
    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
  