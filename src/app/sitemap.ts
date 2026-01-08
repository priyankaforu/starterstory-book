import { MetadataRoute } from "next"
import { getStories } from "@/lib/stories"

export default function sitemap(): MetadataRoute.Sitemap {
  const stories = getStories()
  const baseUrl = "https://saasideas.top"

  // Generate story URLs
  const storyUrls = stories.map((story) => ({
    url: `${baseUrl}/story/${story.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...storyUrls,
  ]
}
