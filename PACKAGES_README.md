# Packages System

This project now includes a complete packages system with listing and detail pages.

## Structure

### Pages
- `/packages` - Packages listing page
- `/packages/[slug]` - Individual package detail page

### Widgets
- `Packages` - Displays a grid of packages on the listing page
- `PackageDetail` - Shows detailed information about a single package

### API Routes
- `PACKAGES_PAGE` - `/api/packages-page` - For the packages listing page
- `PACKAGE_SINGLE` - `/api/packages` - For individual package data

## Usage

### 1. CMS Configuration
Set up your CMS with the following structure:

**Packages Page (`/api/packages-page`)**
```json
{
  "data": {
    "title": "Our Packages",
    "description": "Discover our comprehensive packages designed to meet your needs",
    "widgets": [
      {
        "__component": "widgets.packages",
        "items": [
          {
            "title": "Basic Package",
            "description": "Perfect for getting started",
            "slug": "basic-package",
            "price": "$99/month",
            "cover": {
              "url": "/images/basic-package.jpg",
              "alternativeText": "Basic Package"
            },
            "features": ["Feature 1", "Feature 2", "Feature 3"]
          }
        ]
      }
    ]
  }
}
```

**Individual Package (`/api/packages/[slug]`)**
```json
{
  "data": {
    "title": "Basic Package",
    "description": "Perfect for getting started",
    "slug": "basic-package",
    "price": "$99/month",
    "cover": {
      "url": "/images/basic-package.jpg",
      "alternativeText": "Basic Package"
    },
    "features": ["Feature 1", "Feature 2", "Feature 3"],
    "duration": "1 month",
    "category": "Basic",
    "difficulty": "Beginner",
    "additionalContent": "More detailed information about the package...",
    "widgets": [
      {
        "__component": "widgets.package-detail"
      }
    ]
  }
}
```

### 2. Widget Components
The system automatically renders the appropriate widgets based on the `__component` field in your CMS data.

### 3. Navigation
Add links to your navigation:
```jsx
<Link href="/packages">Packages</Link>
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Fully driven by CMS data
- **SEO Friendly**: Proper meta tags and structured data
- **Error Handling**: Graceful fallbacks for missing data
- **Breadcrumbs**: Navigation between listing and detail pages
- **Image Support**: Optimized image handling with fallbacks

## Customization

### Styling
- Modify `Packages.module.scss` and `PackageDetail.module.scss` for custom styles
- Use Tailwind CSS classes for quick styling changes

### Data Structure
- Extend the data model to include additional fields
- Add new widget types by following the existing pattern

### Components
- All components are built with accessibility in mind
- Follow the established widget pattern for consistency

## API Endpoints

- `GET /packages` - Packages listing page
- `GET /packages/[slug]` - Individual package page
- `GET /api/packages-page` - CMS data for packages listing
- `GET /api/packages/[slug]` - CMS data for individual package

## Development

The system is built using:
- Next.js 13+ with App Router
- React 18+
- Tailwind CSS for styling
- SCSS modules for custom styles
- Dynamic imports for performance