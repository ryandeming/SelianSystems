import { useEffect } from "react";

interface MetaTagsProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export function useMetaTags({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: MetaTagsProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateOrCreateMeta("og:title", ogTitle || title);
    updateOrCreateMeta("og:description", ogDescription || description);
    if (ogImage) {
      updateOrCreateMeta("og:image", ogImage);
    }

    // Update Twitter tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateOrCreateTwitterMeta("twitter:title", ogTitle || title);
    updateOrCreateTwitterMeta("twitter:description", ogDescription || description);
    if (ogImage) {
      updateOrCreateTwitterMeta("twitter:image", ogImage);
    }
  }, [title, description, ogTitle, ogDescription, ogImage]);
}

