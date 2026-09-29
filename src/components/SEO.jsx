import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Universal SEO component for dynamic head metadata updates across routes.
 * Injects and updates document title, description, keywords, canonical links,
 * Open Graph, and Twitter metadata dynamically.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://atikunorthernyouthvanguard.com/logo.png',
  ogType = 'website'
}) {
  const location = useLocation()

  useEffect(() => {
    // 1. Dynamic Document Title
    const baseTitle = 'Atiku Northern Youth Vanguard (ANYV)'
    const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} — Official National Platform`
    document.title = fullTitle

    // Helper to set or create meta tag
    const setMetaTag = (attributeName, attributeValue, content) => {
      if (!content) return
      let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attributeName, attributeValue)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // Helper to set or create link tag
    const setLinkTag = (rel, href) => {
      if (!href) return
      let link = document.querySelector(`link[rel="${rel}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    // 2. Standard Metadata
    const defaultDesc = 'Official platform of the Atiku Northern Youth Vanguard (ANYV). Uniting Northern Nigerian youths across 19 Northern states and the FCT into a continuous force for grassroots mobilization, civic leadership, and national progress.'
    const activeDesc = description || defaultDesc
    setMetaTag('name', 'description', activeDesc)
    setMetaTag('name', 'title', fullTitle)

    if (keywords) {
      setMetaTag('name', 'keywords', keywords)
    }

    // 3. Canonical URL
    const currentCanonical = canonical || `https://atikunorthernyouthvanguard.com${location.pathname}`
    setLinkTag('canonical', currentCanonical)

    // 4. Open Graph Metadata
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', activeDesc)
    setMetaTag('property', 'og:url', currentCanonical)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:site_name', baseTitle)

    // 5. Twitter Card Metadata
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', activeDesc)
    setMetaTag('name', 'twitter:image', ogImage)
    setMetaTag('name', 'twitter:card', 'summary_large_image')

  }, [title, description, keywords, canonical, ogImage, ogType, location.pathname])

  return null
}
