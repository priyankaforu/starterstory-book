export interface FounderStory {
  id: number
  title: string
  founder: string
  app: string
  revenue: string
  videoUrl: string
  videoId: string
  thumbnail: string
  postedDate: string
  keyInsight: string
  tags: string[]
  summary: string
}

export const founderStories: FounderStory[] = [
  {
    id: 1,
    title: "How I built my first SaaS without an audience ($25K/month)",
    founder: "Hassam",
    app: "LaunchFast",
    revenue: "$25K/mo",
    videoUrl: "https://www.youtube.com/watch?v=FCGpgPZqmkY",
    videoId: "FCGpgPZqmkY",
    thumbnail: `https://img.youtube.com/vi/FCGpgPZqmkY/maxresdefault.jpg`,
    postedDate: "Jan 4, 2026",
    keyInsight: "Trade equity for instant distribution. Built with Cursor in 48 hours.",
    tags: ["No-Code", "Distribution", "SaaS"],
    summary: `## The Story

Hassam is a non-technical founder who built **LaunchFast** - a SaaS tool that helps Amazon sellers automate their product research, inventory management, and competitor analysis. The app aggregates data from multiple sources and provides actionable insights to help sellers find winning products faster.

After failing at 10-12 different projects (AI video generators, job application tools), Hassam realized his mistake: he was building in spaces he didn't understand. This time, he leveraged his deep experience as an Amazon seller himself.

The breakthrough came when he remembered Legacy X, a coaching program he'd purchased 2 years ago that had thousands of Amazon sellers as customers. Instead of spending months building an audience from scratch, he pitched them a bold offer: "Give me 48 hours. If you like what I build, we partner. No strings attached."

Using Cursor (an AI coding assistant), Hassam built the entire MVP in just 48 hours - mapping their existing workflows, building core features, testing, and polishing. The partnership gave him instant access to thousands of potential customers, and LaunchFast quickly grew to $25K/month.

## Key Insights

### The Distribution Hack
- Hassam had zero audience and zero coding experience
- He remembered a coaching program he'd bought 2 years ago (Legacy X) that had his target customers
- He pitched them: "Give me 48 hours. If you like what you see, we partner. No strings attached."
- He traded equity for instant distribution access

### The 48-Hour Build Process
- **Hours 1-4:** Mapped existing systems and SOPs
- **Hours 5-12:** Built core features with Cursor
- **Hours 13-20:** Testing and bug fixes
- **Hours 21-30:** UI polish and branding
- **Hours 31-40:** Edge case testing
- **Hours 41-48:** Final polish and demo recording

### Why This Project Succeeded (vs. 10-12 failed ones)
- He had deep domain knowledge in Amazon selling
- Previous failures were in spaces he didn't understand (AI video generators, job applications)
- "If you can spend 1,000 hours on a project and implement your domain knowledge, you're going to be successful"

## 6-Step Playbook for Starting Over

1. **Identify your domain knowledge** - Write down 3-5 industries where you've personally solved problems
2. **Find validated markets** - Look for niches with successful SaaS tools already making money
3. **Deep dive on user pain points** - Go to Reddit, Facebook groups, Twitter, review sites
4. **Build the MVP** - One feature with highest ROI, easiest implementation
5. **Find distribution partners** - List 5 potential partners, reach out to 3 this week
6. **Ship daily** - Iterate fast based on real user feedback for 30 days

## Tech Stack
- Cursor (for coding)
- Vercel (hosting)
- Supabase (database, auth, storage)
- Resend (emails)
- Apify (data aggregation)
- TypeScript + Next.js

## Resources
- Follow Hassam: https://x.com/hasaamb
- Starter Story Build: https://build.starterstory.com`
  },
  {
    id: 2,
    title: "How I Used Twitter to Hit $10K/Month",
    founder: "Rob Hallam",
    app: "SuperX",
    revenue: "$13K/mo",
    videoUrl: "https://www.youtube.com/watch?v=VYT-ip21P08",
    videoId: "VYT-ip21P08",
    thumbnail: `https://img.youtube.com/vi/VYT-ip21P08/maxresdefault.jpg`,
    postedDate: "Dec 28, 2025",
    keyInsight: "Build in public. Vulnerability creates trust and drives sales.",
    tags: ["Build in Public", "X/Twitter", "SaaS"],
    summary: `## The Story

Rob built **SuperX** - an AI-powered tool that helps creators and founders grow on X (Twitter) by analyzing viral content patterns, suggesting optimal posting times, and generating content ideas based on what's working in their niche. The tool uses vector embeddings to find viral concepts and helps users systematize their content strategy.

Rob's journey to SuperX was paved with failure. He spent 2.5 years building 5 different products that made exactly $0. He was running out of money and hope. Then something unexpected happened.

Out of desperation, Rob wrote a vulnerable post on X about all his failures - the products that flopped, the money lost, the time wasted. That single honest post went viral with 150K views. Someone in the comments suggested he start a dev agency, and that comment turned into his first $3K client.

This experience taught Rob the power of building in public and authentic content. He started vlogging his journey, and one video about filming in public at Amsterdam airport hit 1 million views. He realized there was a system behind viral content - and that's when he started building SuperX to help others crack the code. The app now generates $13K/month.

## Key Insights

### The Breakthrough Moment
- After 5 failed products, Rob was running out of money
- He posted about all his failures - it went viral (150K views)
- Someone commented he should start a dev agency
- That single viral post got him his first $3K client
- "Vulnerability was what made it reach out to so many people"

### The Million-View Post
- Started vlogging in January 2025
- Posted about filming in public at Amsterdam airport
- Landed in Rio de Janeiro, opened phone - 1 million views
- This coincided with starting to build SuperX

## 7-Step Build in Public Playbook

1. **Set your foundation** - Profile photo (friendly, your face), bio (one clear sentence), pinned post (your goal/elevator pitch)

2. **Pick your goal and commit** - Document the process daily. This gives you consistency, storyline, and authenticity

3. **The Content Loop:**
   - Entertaining → Educational → Inspirational → Repeat
   - Start with viral/funny content to get attention
   - Follow with educational content or product pitch
   - Turn results into inspirational posts

4. **Systemize what works** - Use data to find viral concepts in your niche, then make them your own style

5. **Double down on hits, kill what doesn't work** - Track every post's performance, find patterns

6. **Build real connections** - Reply with real value, ask thoughtful questions, show up daily

7. **Leverage what the platform wants** - Right now X is pushing video (10x reach vs text)

## Tech Stack
- Next.js, Node.js, Tailwind
- SQLite
- X API ($2-3K/month)
- OpenAI + Claude API ($1K/month)
- AWS ($200/month)
- Zilliz Cloud (vector embeddings, $200/month)
- Claude Code ($200/month)
- Screen Studio ($10/month)
- Framer ($10/month)
- Stripe, PostHog

## Resources
- Follow Rob: https://x.com/robj3d3
- SuperX: https://superx.so/
- Personal Brand Playbook: https://build.starterstory.com/build/playbook-personal-brand`
  },
  {
    id: 3,
    title: "How to Validate Your App Idea Before Building Anything ($30K/month)",
    founder: "Alejandro & Mario",
    app: "PushScroll",
    revenue: "$30K/mo",
    videoUrl: "https://www.youtube.com/watch?v=ST2ROUFbdvU",
    videoId: "ST2ROUFbdvU",
    thumbnail: `https://img.youtube.com/vi/ST2ROUFbdvU/maxresdefault.jpg`,
    postedDate: "Dec 20, 2025",
    keyInsight: "Content first, product later. Validate with viral videos before coding.",
    tags: ["Content-First", "TikTok", "Mobile App"],
    summary: `## The Story

Alejandro and Mario built **PushScroll** - a mobile app that helps users break their doom-scrolling addiction by requiring them to do push-ups before they can continue scrolling on social media. The app uses AI-powered pose detection to count push-ups and only unlocks your phone after you complete the required exercises.

But here's what makes their story unique: they validated the idea BEFORE writing a single line of code.

Instead of building first and marketing later (the mistake most founders make), they created a fake product demo video using AI push-up detection footage from YouTube. The hook was simple: "What if you could stop your doom scrolling addiction by doing 20 push-ups?"

They posted it on TikTok. The video got 80K views and 500 comments from people literally begging them to build it. Only THEN did they start coding.

Their MVP was embarrassingly simple - just 3 screens. But it worked. PushScroll now has 300K downloads, 4,000 paying customers at $30/year, and generates $30K/month. All their initial revenue came from organic TikTok content - zero paid ads.

## Key Insights

### The Viral Validation Strategy
- Created a video showing the concept using AI push-up detection footage from YouTube
- Hook: "What if you could stop your doom scrolling addiction by doing 20 push-ups?"
- The video visualized the VALUE, not the features
- 80K views, 500 comments begging them to build it
- Only then did they build a 3-screen MVP in 2 weeks

### Content-First Philosophy
- "For consumer apps, it's extremely important to validate your idea first with virality"
- "The biggest mistake most founders make is they build first and then try to market later"
- All revenue at the beginning came from organic content

### App Stats
- 300K downloads across App Store and Play Store
- ~4,000 paying customers
- $30/year subscription (hard paywall)

## 6-Step Content-First Playbook

1. **Warm up TikTok account** - Watch videos in your niche, interact, comment, follow creators for 3 days

2. **Come up with viral ideas:**
   - App needs one visually heavy element
   - Must be explainable in 3 words
   - Must solve a fundamental human desire/problem

3. **Post daily videos** - Validate any idea until one takes off

4. **Create a waitlist/community** - Discord to keep everyone updated and convert to users

5. **Build embarrassingly simple MVP** - Their MVP was literally 3 screens

6. **Post organic content until 5-10K MRR** - Experiment with formats, find what goes viral, rinse and repeat

## Creating the Viral Video
- Hook must be clear enough for a 5-year-old
- Create a curiosity gap
- Must be novel and original
- Visualize the VALUE, not features
- Strong call to action: "Should I build this?"

## Tech Stack
- Compose Multiplatform (cross-platform)
- Supabase (backend, database, auth)
- Superwall (paywalls)
- Amplitude (analytics)
- Sentry (crash reports)
- Claude Code Max (coding)

## Resources
- Follow Alejandro: https://x.com/skyirezumi
- Follow Mario: https://x.com/null_deref
- Content-First Playbook: https://build.starterstory.com/build/playbook-validate-app-idea`
  },
  {
    id: 4,
    title: "My mobile app made $800K in 365 days",
    founder: "Louis",
    app: "GlowUp",
    revenue: "$800K/year",
    videoUrl: "https://www.youtube.com/watch?v=LYdJ3dfNCVs",
    videoId: "LYdJ3dfNCVs",
    thumbnail: `https://img.youtube.com/vi/LYdJ3dfNCVs/maxresdefault.jpg`,
    postedDate: "Dec 17, 2025",
    keyInsight: "Study TikTok comments to find ideas. One video = $12.5K in sales.",
    tags: ["TikTok", "Mobile App", "Viral"],
    summary: `## The Story

Louis built **GlowUp** - an AI-powered mobile app that lets users virtually try on makeup looks without buying any products. Users can see how different lipsticks, eyeshadows, and other cosmetics look on their face in real-time using AR technology. Think "Snapchat filters but for realistic makeup."

Before GlowUp, Louis had built 10 apps that all failed. The pattern was always the same: build something he thought was cool, then struggle to find users. For GlowUp, he flipped the script.

Louis spent hours studying TikTok makeup videos - not the videos themselves, but the COMMENT SECTIONS. He noticed people constantly asking: "Where can I try this look without buying everything?" and "I wish I could see how this would look on me first."

Instead of building immediately, he created content first to validate the idea. It went viral. Only then did he build the app.

The results were explosive. One single TikTok video got 48 million views and 2 million likes, generating $12.5K in sales and 60K downloads in ONE DAY. His secret weapon? An in-app referral system where users could "invite 3 friends for a free makeup look" - this drove users back to the viral video to share codes in comments, creating a feedback loop that boosted engagement even further.

GlowUp hit #1 in Lifestyle and #4 overall in the App Store, with ~2 million users and 70,000 paying customers generating $800K in its first year.

## Key Insights

### Finding the Idea
- Previous apps failed because he built first, marketed later
- For GlowUp: studied TikTok makeup videos and comment sections
- Found people asking for solutions to try makeup without buying
- Did content first to validate, it went viral, then built the app
- "By looking at comment sections, you really just feel what people are wanting"

### Viral Video Breakdown
- One video got 48 million views, 2 million likes
- Generated $12.5K in sales in ONE DAY with 60K downloads
- Secret: In-app referral system ("invite 3 friends for free makeup look")
- Users came back to the video to share codes in comments, boosting engagement
- Added anchor link at 500K views

### App Stats
- ~2 million total users
- ~70,000 paying customers
- #1 in Lifestyle, #4 in Free Apps
- $9.99/week or $39.99/year subscription

## TikTok Playbook

1. **Warm up account (3 days):**
   - Use USA SIM card + VPN if outside US
   - Scroll, like, comment 15-30 minutes daily
   - Look at hashtags to validate niche size

2. **Start posting:**
   - Replicate trends that work, add your app idea
   - Start with once a day
   - Once you see traction, post 4-6 times daily
   - Find trends that are easy to reproduce and faceless

3. **Add anchor link:**
   - Only when video hits good views (thousands or 100K+)
   - Don't add under 1K views - it kills the video

4. **Create multiple accounts:**
   - 2-3 accounts per phone
   - At peak: 7 accounts posting 8-12 times daily

## Tech Stack
- FlutterFlow (vibe coding, drag-and-drop)
- Firebase + Google Cloud Functions (backend)
- Superwall (payments)
- MixPanel (event tracking)

## Profit Margins
- ~90% profit margins
- Backend: ~$1K/month
- AI: ~$500/month
- Marketing: $0 if posting yourself, more for UGC/influencers

## Resources
- Follow Louis: https://x.com/LouisDavidPH
- GlowUp: https://www.useglowup.app/
- TikTok Playbook: https://build.starterstory.com/build/playbook-organic-short-form`
  },
  {
    id: 5,
    title: "How I grew my mobile app to $17K per month",
    founder: "George Lampropolis",
    app: "Wrestle AI",
    revenue: "$17K/mo",
    videoUrl: "https://www.youtube.com/watch?v=8kM-JcKpcDs",
    videoId: "8kM-JcKpcDs",
    thumbnail: `https://img.youtube.com/vi/8kM-JcKpcDs/maxresdefault.jpg`,
    postedDate: "Dec 14, 2025",
    keyInsight: "18-year-old vibe coded entire app with Rork. Influencer marketing is key.",
    tags: ["Vibe Coding", "Influencers", "Mobile App"],
    summary: `## The Story

George built **Wrestle AI** - a mobile app that uses AI to analyze wrestling matches and provide personalized training feedback. Users can record their wrestling sessions, and the AI breaks down their technique, identifies weaknesses, and suggests specific drills to improve. It's like having a wrestling coach in your pocket.

What makes George's story remarkable is that he's just 18 years old and doesn't know how to code.

At 15, George had a dream of building a social app. He spent all his savings hiring dev agencies, and after 1.5 years of development, the app flopped completely. He had to work at TJ Maxx just to recover financially.

Then he discovered "vibe coding" - using AI tools like Rork to build apps by describing what you want in plain English. In just one month, George went from idea to a live app in the App Store. He hired one developer on Fiverr for $250 to handle payments and authentication - everything else was vibe-coded.

George's key insight is the "gotcha moment" - every app needs that one feature that makes someone stop scrolling and say "whoa." For Wrestle AI, it's seeing the AI analyze your actual wrestling footage in real-time. He tested this theory: another app he launched with a 1M follower influencer got only 100 downloads from 1.8M impressions. Wrestle AI, with its novel gotcha moment, converted way better from similar impressions.

The app now generates $17K/month through aggressive influencer marketing - George DMs 100 people a day and negotiates deals based on view guarantees.

## Key Insights

### Background
- At 15, spent all savings on a social app that failed (took 1.5 years with dev agencies)
- Had to work at TJ Maxx to recover
- Discovered Rork (vibe coding platform) and built Wrestle AI in ~1 month
- Hired one developer on Fiverr ($250) for payments and authentication

### The "Gotcha Moment" Philosophy
- Every app needs a moment that stops someone from scrolling
- Three pillars: Uniqueness, Helpfulness, Gotcha Moment
- Launched another app with 1M follower influencer - got 100 downloads from 1.8M impressions
- Wrestle AI (novel idea) converted way better from similar impressions

### App Stats
- $17K/month ($8K monthly subs, rest yearly)
- 17,000 downloads
- 2 million+ social media impressions
- Launched September 26, 2025

## 6-Step Vibe Coding Process

1. **The Idea:**
   - Must have uniqueness (catches eyes)
   - Must have helpfulness (stickiness)
   - Must have gotcha moment (stops scrolling)

2. **Design the app:**
   - Answer: Who is it for? What UI fits them?
   - Build framework first, then functionality
   - Think: How could users organically share?

3. **Build core functionality:**
   - Set aside a week to prompt Rork morning to night
   - Learn Supabase, integrate external APIs
   - Use ChatGPT as your advisor for errors

4. **Onboarding (second most important):**
   - Copy what already works (study Opal, Cali, etc.)
   - Formula: Educate → Personalize → Create FOMO → Show gotcha moment before paywall
   - Longer onboarding = sunk cost fallacy = more conversions

5. **Hire out what you don't know:**
   - Sell them on your vision
   - Start with small tasks, expand if they excel
   - "AI is the great equalizer of education"

6. **Expand past vibe coding:**
   - After 5K/month, invest in product quality
   - Don't take money out until 100K MRR

## Influencer Marketing Playbook

1. **DM 100 people a day** when starting out

2. **First words: "Paid promo?"** - Influencers skip DMs that don't mention money

3. **Bot your personal Instagram + pay for verification** for credibility

4. **Get on the phone** - Negotiating is 1000x easier on calls

5. **Close the deal:**
   - 20-50% upfront for 4-5 videos
   - View guarantee based on $2-5 CPM
   - Example: 25K avg views → offer $225 for 100K view guarantee

## Tech Stack
- Rork (vibe coding platform, $25/month)
- Supabase (backend, $30/month)
- OpenAI (AI inference, $40-60/month)
- ChatGPT Premium ($20/month)

## Resources
- Follow George: https://x.com/GeorgeLampro20
- iOS Bootcamp: https://build.starterstory.com/build/the-ios-bootcamp`
  }
]
