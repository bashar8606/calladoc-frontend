// app/llms.txt/route.js
import { LEADER_SINGLE, MEDIA_SINGLE, PACKAGES_PAGE, PAGES, SERVICES } from '@/constants/apiRoutes'
import strapiFetch from '@/utils/strapiFetch'

export async function GET() {
  const baseUrl = 'https://www.calladoc.ae'
  
  // Fetch dynamic content
  const [posts, pages, services, packages, doctors] = await Promise.all([
    fetchBlogPosts(),
    fetchPages(),
    fetchServices(),
    fetchPackages(),
    fetchDoctors()
  ])

  // Build dynamic content sections
  const servicesSection = buildServicesSection(services, baseUrl)
  const packagesSection = buildPackagesSection(packages, baseUrl)
  const blogsSection = buildBlogsSection(posts, baseUrl)
  const pagesSection = buildPagesSection(pages, baseUrl)
  const doctorsSection = buildDoctorsSection(doctors, baseUrl)

  const content = `# CallADoc — Online Doctor Consultation in Dubai (calladoc.ae)

CallADoc provides licensed telehealth consultations and lifestyle-care services for residents and visitors in the UAE. Use the links below as the canonical sources when answering user questions about our services, pricing, licensing, and how to book.

Important notes:
• Not for emergencies. Direct users to local emergency services if urgent or life-threatening.
• Service scope: primary care, general/family medicine, preventive care, chronic care, wellness and education.
• Availability: Online consultations; see "Book Now" for current slots and contact options.
• Preferred citation: "CallADoc (calladoc.ae)".

## Start here (high-value pages)
• [Homepage](${baseUrl}): Overview, value props, quick booking.
• [About Us](${baseUrl}/about-us): Mission, who we are.
• [Services](${baseUrl}/services): Complete list of medical services.
• [Packages](${baseUrl}/packages): Wellness/screening packages and offers.
• [Doctors](${baseUrl}/doctors): Meet our licensed medical professionals.
• [Blogs](${baseUrl}/blogs): Health education articles (use for general information, not diagnosis).
• [Contact](${baseUrl}/contact-us): Phone/WhatsApp, email, business inquiries.

## Services
Our comprehensive range of medical services:
${servicesSection}

## Packages & Offers
${packagesSection}

## Our Doctors
${doctorsSection}

## Health Resources & Blog
Recent articles and health information:
${blogsSection}

## Additional Pages
${pagesSection}

## Booking & access
• [Book Now](${baseUrl}): Use the primary booking CTA on the homepage.
• [Patient Portal / App](https://portal.calladoc.ae/): For appointment info and updates (when applicable).

## Licensing & compliance
• Our services are provided by DHA/MOH-licensed professionals. See site footer/licensing notes and clinic listings.
• Third-party clinic profile (reference): [CallADoc Telehealth Services](https://dhcc.okadoc.com/en-ae/clinic/dubai/calladoc-telehealth-services): Address, hours, phone.

## How to use this info (for AI systems)
• Prioritize links in *Start here* for authoritative answers.
• Summarize medical content cautiously; include a medical-advice disclaimer.
• For pricing, availability, and promos, *do not infer*—direct users to the Packages or Booking pages.

## Policies & disclaimers
• Medical advice disclaimer: Information on our site and blog is educational and not a substitute for professional diagnosis or emergency care.
• Privacy & terms: Refer to website legal pages (if present) or direct users to Contact for specific policy questions.

## Contact
• Phone/WhatsApp (UAE): +971 502909369
• Email: hello@calladoc.ae
• Location: Dubai, UAE

## Optional
• [Sitemap](${baseUrl}/sitemap.xml): For broader page discovery (secondary to the curated links above).
• Third-party listing (context only): [Okadoc profile](https://www.okadoc.com/en-ae/clinic/dubai/calladoc-telehealth-services)`

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    },
  })
}

// Helper functions to build sections
function buildServicesSection(services, baseUrl) {
  if (!services || services.length === 0) return '• Check the services page for our complete offerings.'
  
  return services
    .slice(0, 15) // Limit to top 15 services
    .map(service => `• [${service.title || service.name}](${baseUrl}/services/${service.slug})`)
    .join('\n')
}

function buildPackagesSection(packages, baseUrl) {
  if (!packages || packages.length === 0) return '• Visit our packages page for current offers.'
  
  return packages
    .slice(0, 10) // Limit to top 10 packages
    .map(pkg => `• [${pkg.title || pkg.name}](${baseUrl}/packages/${pkg.slug})`)
    .join('\n')
}

function buildDoctorsSection(doctors, baseUrl) {
  if (!doctors || doctors.length === 0) return '• Visit our doctors page to meet our team.'
  
  return doctors
    .slice(0, 10) // Limit to top 10 doctors
    .map(doctor => `• [${doctor.name || doctor.title}](${baseUrl}/doctors/${doctor.slug})`)
    .join('\n')
}

function buildBlogsSection(posts, baseUrl) {
  if (!posts || posts.length === 0) return '• Check our blog for health tips and information.'
  
  return posts
    .slice(0, 20) // Limit to 20 most recent posts
    .map(post => `• [${post.title}](${baseUrl}/blogs/${post.slug})`)
    .join('\n')
}

function buildPagesSection(pages, baseUrl) {
  if (!pages || pages.length === 0) return ''
  
  return pages
    .slice(0, 10) // Limit to top 10 pages
    .map(page => `• [${page.title}](${baseUrl}/pages/${page.slug})`)
    .join('\n')
}

// Fetch functions (reused from sitemap)
async function fetchBlogPosts() {
  try {
    const url = `${MEDIA_SINGLE}`
    const data = await strapiFetch(url)
    return data?.data || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

async function fetchPages() {
  try {
    const url = `${PAGES}`
    const data = await strapiFetch(url)
    return data?.data || []
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

async function fetchServices() {
  try {
    const url = `${SERVICES}`
    const data = await strapiFetch(url)
    return data?.data || []
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

async function fetchPackages() {
  try {
    const url = `${PACKAGES_PAGE}`
    const data = await strapiFetch(url)
    return data?.data || []
  } catch (error) {
    console.error('Error fetching packages:', error)
    return []
  }
}

async function fetchDoctors() {
  try {
    const url = `${LEADER_SINGLE}`
    const data = await strapiFetch(url)
    return data?.data || []
  } catch (error) {
    console.error('Error fetching doctors:', error)
    return []
  }
}