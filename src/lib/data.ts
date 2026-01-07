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
  },
  {
    id: 6,
    title: "I make $10K/month from 28 apps",
    founder: "Max",
    app: "28 Apps Portfolio",
    revenue: "$10K/mo",
    videoUrl: "https://www.youtube.com/watch?v=vw2Yc4Y1PsU",
    videoId: "vw2Yc4Y1PsU",
    thumbnail: `https://img.youtube.com/vi/vw2Yc4Y1PsU/maxresdefault.jpg`,
    postedDate: "Dec 11, 2025",
    keyInsight: "Ship fast, don't get attached. Build a portfolio of tiny bets instead of one big app.",
    tags: ["Portfolio", "Ship Fast", "Mobile Apps"],
    summary: `## The Story

Max is a full-time iOS developer who builds apps before and after work. His philosophy is radically different from most founders: instead of perfecting one app, he ships dozens of simple apps really fast. In just 8 months, he built and shipped 28 apps, going from $200/month to $10,000/month.

For years, Max had a "pet project" mobile app that he poured all his time into, trying different growth techniques. Nothing worked. Then he discovered a video by Adam Slles that changed his entire approach: instead of obsessing over one app, ship many simple apps, see what sticks, and double down on winners.

His record? Building and submitting an app to the App Store in just 2 hours. The 80/20 rule plays out perfectly in his portfolio - about 4 apps generate $1,500 each, while the rest make small amounts. But together, they create a sustainable $10K/month income stream.

Max's secret weapon is Astro, an ASO (App Store Optimization) tool that helps him find keywords with good popularity (20%+) and manageable difficulty (60-70%). He validates ideas by checking if competitors make at least $100-200/month - if there's no money in the market, he moves on.

## Key Insights

### The Portfolio Mindset
- Don't get attached to any single app
- Ship fast, let data decide which apps sink or float
- Return to winners and scale with ads
- Most apps will fail - that's expected

### Finding App Ideas
- Use Astro to find keywords with 20%+ popularity and 60-70% difficulty
- Check competitor revenue using Sensor Tower (benchmark: $100-200/month minimum)
- Look for related keywords targeting the same user group (e.g., physics AI, chemistry AI, math AI for students)

## 6-Step Building and Shipping Process

1. **Find strong keywords** - Make sure popularity/difficulty ratio is good and top apps make real revenue
2. **Study competitors** - Define the single core feature that solves the main user problem
3. **Plan fast with AI** - Use Cursor or Claude to generate development roadmap and UX structure
4. **Build lean and ship quickly** - Focus on clean MVP with only necessary features
5. **Release and move on** - Let it go, move to next project, let data decide
6. **Return to winners** - Revisit apps with organic traction, polish them, add ads to scale

## Tech Stack
- Flutter (app development)
- FastLane (shipping automation, free)
- Cursor ($20/month)
- Firebase (backend, $5-10/month)
- OpenAI ($200/month)
- Gemini ($50/month)
- MixPanel (analytics, free tier)
- Astro ($10/month)
- Fox Data (free tier)

## Resources
- Follow Max: https://x.com/maks6361`
  },
  {
    id: 7,
    title: "I shipped my app in 12 hours and now it makes $15K/month",
    founder: "Louis Pereira",
    app: "AudioPen",
    revenue: "$15K/mo",
    videoUrl: "https://www.youtube.com/watch?v=k2jecxFu2as",
    videoId: "k2jecxFu2as",
    thumbnail: `https://img.youtube.com/vi/k2jecxFu2as/maxresdefault.jpg`,
    postedDate: "Dec 9, 2025",
    keyInsight: "Build many things for fun. The cost of experimentation is so low - you're bound to get lucky.",
    tags: ["12-Hour Build", "Voice-to-Text", "SaaS"],
    summary: `## The Story

Louis Pereira is a part-time indie hacker from India who built **AudioPen** - a voice-to-text AI tool that transforms fuzzy spoken thoughts into clear, polished text. Users simply speak into the app, and it transcribes and transforms their words into any writing style they choose.

After failing with 15 different projects, Louis decided to try something radical. He joined a "Half Day Build" hackathon where builders try to go from idea to MVP to revenue in just 12 hours. The goal: start at noon, get at least $1 by midnight.

During one hackathon, Louis built 4-5 tiny tools on his personal website. AudioPen was one of them. To his surprise, it got way more love on Twitter than expected. He saw the signal, built a full version, put a price tag on it, and launched.

The results were wild: before the 12 hours was up, Stripe notifications started coming in from beta testers who weren't even asked to pay - they just wanted to support the product. AudioPen now has 200,000 users, 5,000+ paying customers, and generates $15K/month with a simple $99/year pricing model.

## Key Insights

### The Half Day Build Philosophy
- The cost of experimentation is incredibly low today
- Build many things, see what sticks, double down on winners
- "I was bound to get lucky at some point" after 15-20 failed projects
- Luck favors those who ship consistently

### Why AudioPen Succeeded
- Very early to market when AI voice tools were new
- Focuses on doing ONE thing extremely well
- Resisted temptation to expand into adjacent markets
- "Slow consistency" - kept improving the core experience

## 4-Step Playbook for Building Fast

1. **Build small things for fun** - Test ideas without negative consequences to users
2. **Design before you build** - Figure out exactly what you want it to look like and why
3. **Build in public** - Share designs, get feedback, spin up an email list if people resonate
4. **Launch the simplest version** - Ship early, raise prices as you refine, behave like an indie hacker (not a big company)

## Tech Stack
- Bubble ($130/month for web app)
- Xano ($260/month for backend/logic)
- DraftBit ($300/year for native app)
- Loops ($800/month for email)
- Plausible Analytics ($19/month)
- Various AI APIs (variable costs)

## Resources
- Follow Louis: https://x.com/louispereira
- AudioPen: https://audiopen.ai/`
  },
  {
    id: 8,
    title: "I Built 4 SaaS Apps to $100K MRR: Here's My Exact Playbook",
    founder: "Tibo",
    app: "Revid, Outrank, SuperX, Feather",
    revenue: "$700K/mo",
    videoUrl: "https://www.youtube.com/watch?v=xeUhKuJbeWQ",
    videoId: "xeUhKuJbeWQ",
    thumbnail: `https://img.youtube.com/vi/xeUhKuJbeWQ/maxresdefault.jpg`,
    postedDate: "Dec 7, 2025",
    keyInsight: "Do the hard thing - talk to users every day. Most builders are too shy to do this.",
    tags: ["Portfolio", "SaaS", "$100K MRR"],
    summary: `## The Story

Tibo is a French founder who has built not one, but FOUR separate SaaS products each doing over $100,000 MRR. His portfolio includes **Revid.ai** (AI video creation, $400K/mo), **Outrank** (SEO tool, $200K/mo), **SuperX** (X/Twitter growth, $13K/mo), **Postsyncer** (multi-platform posting, $1.5K/mo), and **Feather** (Notion-to-blog, $10K/mo).

Combined, his products generate around $700K/month with 50,000 paying customers and 20% month-over-month growth for 6+ months straight.

Tibo previously built and sold Tweet Hunter and Tapio for $8 million. But what makes him different isn't just his success - it's his systematic approach. He failed for 5 years before figuring out the one big thing most builders get wrong: they stay in their cave coding instead of talking to customers.

His philosophy: "People who can build software are often the most shy people. The entire framework is about doing the hard things that feel uncomfortable - talking to people every day to understand their true pain."

## Key Insights

### The One Big Thing
- Builders love adding features because it's comfortable
- What they DON'T do is talk to people - the hard, uncomfortable thing
- Success comes from deeply understanding user pain through daily conversations

### Why Portfolio Strategy?
- Fear of AI disruption (OpenAI could kill any single product overnight)
- When Elon took over X, it almost killed Tweet Hunter at $200K/month
- Multiple products = resilience for family and company

## 12-Step SaaS Playbook

**Product-Market Fit (Steps 1-8):**
1. **Build MVP in days/weeks** - Use no-code, boilerplates, take shortcuts. 90% failure rate means you can't spend a year on each idea
2. **Find 5-10 relevant people** - Not your mom, but actual target users
3. **Build true relationships** - Understand their life, pain, and workflow deeply
4. **Talk to them every day** - Look for recurring usage patterns
5. **Understand ultimate goals** - How far can you help them? 10x or 100x the value
6. **Fix users' problems, not yours** - Be the user of your own product
7. **Iterate constantly** - Maintain relationships, stay active on socials
8. **Repeat until they can't live without it** - Don't go broad too soon, focus on retention

**Distribution (Steps 9-12):**
9. **Go broad** - Try many acquisition channels, see what works
10. **Become a media company** - Create content engine (socials, SEO, or paid)
11. **Do sustainable things** - SEO, ads, affiliations that can scale
12. **Scale what works, kill what doesn't** - Double down on 1-2 winning channels

## Tech Stack
- Various depending on product
- Direct Twitter DMs for support (until $10K MRR)
- Heavy focus on SEO and content

## Resources
- Follow Tibo: https://x.com/tibo_maker`
  },
  {
    id: 9,
    title: "I make $120K/year from 3 mobile apps",
    founder: "Presh",
    app: "GoPolar, SunSeek, Posture AI",
    revenue: "$10K/mo",
    videoUrl: "https://www.youtube.com/watch?v=SJOFUBNHYqU",
    videoId: "SJOFUBNHYqU",
    thumbnail: `https://img.youtube.com/vi/SJOFUBNHYqU/maxresdefault.jpg`,
    postedDate: "Dec 4, 2025",
    keyInsight: "Build for problems you personally experience. If you care about it, ship it.",
    tags: ["Health Apps", "Personal Problem", "Portfolio"],
    summary: `## The Story

Presh has built three niche health tracking apps that together generate $120K/year ($10K/month). His apps include **GoPolar** (cold plunge & sauna tracking), **SunSeek** (morning light exposure & vitamin D), and **Posture AI** (posture correction for desk workers).

What makes Presh's approach unique is that every app solves a problem he personally experiences. He grew up with his mom teaching him about meditation and wellness, and he's always been passionate about health tracking. When he couldn't find a good app to track his cold plunge sessions, he built one himself.

Presh dropped out of college after realizing school wasn't for him. He cold-emailed entrepreneurs and investors he found on Twitter and podcasts, landing a job at an angel investment firm where he spent 7 years watching thousands of founders pitch their products. This gave him the confidence to know he could do it too.

His strategy is brilliant: all three apps serve the same health-conscious audience, so users of one app often become users of his other apps. No need to build a new audience from scratch - he's cross-selling to existing customers who already trust him.

## Key Insights

### The Personal Problem Advantage
- If you experience the pain yourself, you'll build a better product than competitors
- You'll care more and put in extra details to craft a better experience
- Building apps is hard - loving what you build makes the effort sustainable

### Portfolio Strategy for Same Audience
- All apps target health & wellness enthusiasts
- Large audience overlap means easy cross-marketing
- Users aren't cold leads - they already use and trust your products

### App Stats
- 20,000+ total downloads (mostly organic)
- 1,500+ paying subscribers
- 8% free-to-paid conversion (high for niche apps)
- 61% day-30 retention

## 5-Step Playbook

1. **Find your passion/deep interest** - What makes you feel better, more energized, more fulfilled?
2. **Identify problems within that passion** - Pay attention to friction points you naturally encounter
3. **Build the solution quickly** - Use Lovable, Replit, or Bolt for fast MVP
4. **Think distribution on day zero** - Find creators in your niche or become one yourself
5. **Put in the reps** - First product rarely breaks out; it's the 3rd, 4th, 5th iteration that wins

## Tech Stack
- Figma (design)
- Claude Code + Xcode (mobile development)
- Supabase (backend/database)
- iMessage (customer support - keep it simple!)
- RevenueCat (subscriptions/paywall)
- Sentry (crash logs)
- PostHog (analytics)
- Linear (project management)
- Lovable (MVP testing)
- Total tools cost: ~$300/month
- Apple takes 15% cut (under $1M revenue)
- Margins: 80-85%

## Resources
- Follow Presh: https://x.com/preshdkumar
- The Wellness Company: https://thewellness.company/`
  },
  {
    id: 10,
    title: "How I Built It: $30K/month Micro-SaaS (Subscribr Breakdown)",
    founder: "Gil Hildebrand",
    app: "Subscribr",
    revenue: "$30K/mo",
    videoUrl: "https://www.youtube.com/watch?v=7KqlwjBM_tM",
    videoId: "7KqlwjBM_tM",
    thumbnail: `https://img.youtube.com/vi/7KqlwjBM_tM/maxresdefault.jpg`,
    postedDate: "Dec 2, 2025",
    keyInsight: "Pre-sell first, THEN build. Made $20K before writing a single line of code.",
    tags: ["Pre-Sale", "YouTube", "Validation"],
    summary: `## The Story

Gil Hildebrand built **Subscribr** - an AI script writing tool for YouTube creators that generates $30K/month. But what makes his story remarkable isn't just the revenue - it's HOW he validated the idea: he made $20,000 before the product even existed.

Gil is a serial entrepreneur who co-founded Squidoo (grew to $10M revenue, acquired), then built a crypto accounting startup (raised millions from VCs, sold). After exiting the VC world, he wanted to try bootstrapping.

While exploring YouTube and faceless channels, Gil realized script writing was a massive bottleneck. ChatGPT wasn't good enough for quality scripts. He bet that his experience as an entrepreneur and developer could help him build something better.

Instead of building first, Gil started a brand new X account with zero followers, followed everyone in the YouTube space, and created free valuable content. He ran viral giveaways to build an email list of 1,000+ people. Then he reached out individually to talk about his app idea.

When he felt confident, he launched a pre-sale: 50 lifetime licenses at an "absurdly low" price, with prices increasing every 10 licenses to create FOMO. It sold out in 2-3 days, generating $20K. The catch? He told buyers they could get a full refund anytime - even after the 60-day build period. This gave him validation AND pressure to deliver.

## Key Insights

### Why Pre-Sales Work
- "The curse of being a software developer is falling in love with an idea"
- Friends saying "I'd pay $20/month" is NOT real validation
- The ONLY way to validate is to collect actual money
- Pre-sales force you to build something people truly want

### The Painkiller vs Vitamin Test
- Vitamins are nice-to-have; painkillers are must-have
- Pre-sales reveal if your product is a painkiller
- If people won't pay upfront, they probably won't pay later

## Pre-Sale Playbook

1. **Build an audience first** - Post raw, build-in-public content to establish trust
2. **Set up email list** - Communicate weekly, start dialogues, get feedback on ideas
3. **Do the math** - Calculate how many buyers you need, what conversion rate you need, how big your list needs to be
4. **Execute the pre-sale aggressively:**
   - 7-day email sequence teasing benefits (not features)
   - Multiple emails on launch day
   - Reminders when pre-sale is ending
   - Fire on all social channels
5. **Make an offer so good they can't say no** - First 10 licenses might not even be profitable, but they validate demand
6. **Offer money-back guarantee** - Removes risk, increases conversions

## Tech Stack
- Claude Code (90% of code written with AI)
- Laravel (PHP framework)
- Digital Ocean (hosting)
- AI compute: ~$3,500/month
- Ads: ~$2,000/month
- Other (web scraping, hosting, email): ~$1,500/month

## Resources
- Follow Gil: https://x.com/gilhildebrand
- Subscribr: https://subscribr.ai/`
  },
  {
    id: 11,
    title: "My Apps Failed Until I Discovered This Playbook ($35K/month apps)",
    founder: "Loïc Berthelot",
    app: "Minia, Drop Magic, Infuspy",
    revenue: "$35K+/mo each",
    videoUrl: "https://www.youtube.com/watch?v=-OPKa8DIzKU",
    videoId: "-OPKa8DIzKU",
    thumbnail: `https://img.youtube.com/vi/-OPKa8DIzKU/maxresdefault.jpg`,
    postedDate: "Nov 30, 2025",
    keyInsight: "Partner with YouTube creators as promoters or co-founders. 60%+ of customers come from YouTube.",
    tags: ["YouTube Creators", "SaaS", "E-commerce"],
    summary: `## The Story

Loïc is a French founder who built three successful SaaS apps in the e-commerce space: **Infuspy** (influencer discovery for e-commerce), **Minia** (product research for dropshippers that peaked at $750K MRR), and **Drop Magic** (AI-powered store builder now at $45K MRR).

But it didn't start this way. Loïc spent the first 5 years of his professional life building a SaaS that literally no one ever used - zero customers, zero revenue for 5 years. He made every bad decision possible.

The turning point came when an e-commerce owner approached him with a specific problem. Loïc realized this person wasn't alone - many others had the same issue. Instead of building in the dark, he followed a simple path: started with a newsletter to validate traction, then a no-code app to validate product-market fit, then a real app to scale.

His secret weapon? YouTube creators. More than 60% of his customers come from YouTube partnerships. He works with over 500 YouTube creators across his apps, either paying them with cash/affiliate revenue or bringing them on as co-founders with equity.

## Key Insights

### Why YouTube Creators Work
- Best ROI-positive investment for a SaaS business
- Outcomes are predictable (minimum guaranteed views vs. hoping for TikTok virality)
- Long-form video lets creators actually show how they use the app
- Videos stay relevant for years - still getting conversions from 3-year-old videos
- Can repurpose long-form into short-form and ads

### 4-Step Creator Partnership System
1. **Find creators** - Search YouTube keywords, study competitors' influencer strategies
2. **Evaluate metrics** - Engagement rate over 10%, minimum 100 comments per video, check if brands work with them repeatedly (3+ times = profitable)
3. **Reach out** - 7-email campaign with different marketing angles, blast on Instagram and Twitter
4. **Deal making** - Fixed fee + commission, lowball initial offer by 30%, offer two packages (high upfront/low commission vs. low upfront/high commission)

### Why Creator Co-Founders Work
- De-risks distribution when launching (secured 10K MRR from day one with Drop Magic)
- Provides product insights - they're power users who get direct community feedback
- Marketing insights - iterate fast on scripts, funnels, pricing, marketing angles

## Tech Stack
- Supabase (database)
- Next.js + Vercel (frontend/hosting)
- Sentry (debugging)
- Trigger Dev (big compute)
- Cursor + Claude Code (development)
- Nanobana (AI image generation)
- Gemini + OpenAI (copywriting)
- Blime (creator discovery)
- Loops (email marketing)

## Resources
- Follow Loïc: https://x.com/LoicBerthelot`
  },
  {
    id: 12,
    title: "How he makes $250K per month from a simple app (Letterly Breakdown)",
    founder: "Anton",
    app: "Letterly",
    revenue: "$250K/mo",
    videoUrl: "https://www.youtube.com/watch?v=wvYej-2KWDg",
    videoId: "wvYej-2KWDg",
    thumbnail: `https://img.youtube.com/vi/wvYej-2KWDg/maxresdefault.jpg`,
    postedDate: "Nov 24, 2025",
    keyInsight: "Simplicity is the secret sauce. Every feature you add might be killing your sales.",
    tags: ["Simplicity", "Voice-to-Text", "UX"],
    summary: `## The Story

Anton built **Letterly** - a voice-to-text app that turns your speech into well-written text. The app makes $250,000/month with 30K monthly active users, 20K paid subscribers, and 150,000 total downloads over 2 years.

But here's the thing: Anton spent 15 years trying to create startups before this one worked. He tried 6-7 different startups, and all of them failed. What changed with Letterly?

The idea came while building something else. Anton noticed apps using ChatGPT and OpenAI transcription were powerful but poorly implemented - they felt like prototypes. He thought: "This is something I need, but I can't use these apps because they're not implemented well enough."

Instead of adding more features, Anton obsessed over simplicity. Every screen, every interaction is about eliminating friction. This is their competitive advantage. "Everyone can build a product. But there are really few that are very simple and easy to use."

When they asked early customers why they used Letterly instead of ChatGPT (which is free), everyone said the same thing: "It just feels much easier to start recording with Letterly - click a button, click stop, and the text is ready."

## Key Insights

### The Simplicity Philosophy
- User experience is a multiplier to everything you do
- Helps onboard users, retain them, convert to sales, and attract referrals
- Every feature you add might be killing your sales
- Find something that's already working and make it much better and simpler

### The Iteration Process
1. **Prototype iteration** - Draw, discuss, try out, simplify
2. **Build iteration** - Before release, stop and ask: "Is it really as simple as we dreamed?"
3. **Release iteration** - Get feedback, see people using it, understand what you missed
4. Repeat constantly - sometimes postpone promised features to make existing ones better

### What Makes Letterly Different
- One-click recording widget
- Real-time transcription (text appears instantly)
- Multiple rewrite options with favorites for quick access
- One-click copy and share to Google Docs, Notion, etc.
- Add to existing notes seamlessly

## Tech Stack
- React Native → Swift (iOS)
- Python (backend)
- Team of 10 people (~$30K/month salaries)
- AI costs: ~$5K/month
- Advertising: ~$200K/month (heavy investment in growth)

## Advice for Builders
- Work with co-founders from day one
- Build something you can launch in 1-2 months
- Choose an idea that's novel but validated by someone else
- Don't spend lots of money validating completely new ideas
- When you see traction, go all in - leave your job and focus 100%
- Build something that generates money from day one

## Resources
- Follow Anton: https://x.com/Samarsky
- Letterly: https://letterly.app/`
  },
  {
    id: 13,
    title: "Our Mobile App Made $85K in 8 months",
    founder: "Jack & Nick Sweeney",
    app: "Coherence",
    revenue: "$11K/mo avg",
    videoUrl: "https://www.youtube.com/watch?v=nsn94Ad47GY",
    videoId: "nsn94Ad47GY",
    thumbnail: `https://img.youtube.com/vi/nsn94Ad47GY/maxresdefault.jpg`,
    postedDate: "Nov 20, 2025",
    keyInsight: "Content before product. Validate with viral content, then build the app.",
    tags: ["Content-First", "Brothers", "Health App"],
    summary: `## The Story

Jack and Nick Sweeney are two brothers who built **Coherence** - a breathwork app that helps users regulate their nervous system through guided breathing exercises. In just 8 months, they've hit 15,000 downloads, 2,000+ paying users, and $85,000 in revenue (averaging $11K/month with a peak of $22K).

What makes their story unique is they did the exact opposite of most founders: content before product.

Nick's background is athletic - he was a Division 1 cross-country skier until injury ended his career. Doctors said he wouldn't walk normally again. Out of desperation, he started doing breathwork and was walking within 3 months, training full-time 6 months later. This personal transformation drove him to help others through breathwork.

Jack had a content background with a 20K subscriber YouTube channel. After COVID, he started building simple web apps with no-code tools - the first few flopped, but he kept iterating.

Instead of building the app first, they started making content about things that genuinely excited them. Jack wrote threads on spiritual topics, Nick focused on breathwork. They used X (Twitter) as an "idea battleground" - when a post got traction, they'd turn it into an Instagram/TikTok short, then a YouTube video if those did well.

The breakthrough came with the "Vortex Breath" tweet that went viral. That's when they knew what to build. Using Cursor, they coded the MVP and launched in February 2025.

## Key Insights

### The Content-First Playbook
1. **Pick a painful niche** - Make content about a problem people experience
2. **Batch ideas weekly** - Present yourself as a solution through consistent content
3. **Film in bulk** - Pump out 30-60 videos in one session (2 months of content)
4. **Amplify winners** - Put ad money behind validated content pieces
5. **Outmarket everyone** - Post like a madman, hire clippers, use every means available

### The Viral Content Strategy
- Use X as idea validation - see what gets traction
- Replicate winning X posts on Instagram/TikTok
- Move upstream to longer formats (YouTube) for proven content
- Frame content in polarizing ways: "Do you want to know something they don't want you to know?"
- One piece of content got 8 million views across platforms

### App Details
- 6 main breathing techniques: Coherence, Vortex Energy, Focus, Stress Relief, Sleep
- Simple minimal interface with timer and volume controls
- Gamification with streak counter
- 3-day free trial on yearly plan ($40/year) or $10/month

## Tech Stack
- React Native Expo (framework)
- Supabase (database/backend)
- Claude Code + Codeex (coding agents)
- MixPanel (analytics)
- RevenueCat (subscriptions)
- Vercel + Next.js (marketing site)
- Figma + Rot (design/3D)
- ManyChat (Instagram DM automation)

## Costs & Margins
- Video editors: $2.5K/month
- Influencer partnerships: $1-2K/month
- Ghostwriter: $800/month
- Virtual assistant: $500/month
- Coding agents: $300/month
- RevenueCat + other tools: $200/month
- **Total: $5-6K/month, operating at ~50% margin**

## Resources
- Coherence: https://www.coherencebreath.com/`
  },
  {
    id: 14,
    title: "My website makes $35K/month (built in 3 hours)",
    founder: "Pontus Abrahamsson",
    app: "Cursor Directory",
    revenue: "$35K/mo",
    videoUrl: "https://www.youtube.com/watch?v=LWPN-PAhtLA",
    videoId: "LWPN-PAhtLA",
    thumbnail: `https://img.youtube.com/vi/LWPN-PAhtLA/maxresdefault.jpg`,
    postedDate: "Nov 16, 2025",
    keyInsight: "Directories aren't dead. Build fast, ship fast, and catch the wave at the right time.",
    tags: ["Directory", "3-Hour Build", "Developer Tools"],
    summary: `## The Story

Pontus and his co-founder Victor built **Cursor Directory** - a directory for Cursor AI rules and MCPs - in just 3 hours. It now makes $35K/month with 99.8% profit margins, 49,000 registered users, and 2.2 million unique visitors since launch. They only spend 3 hours per month maintaining it.

The idea came during a 3-hour flight to France. Pontus was watching tech videos about Cursor and discovered this common pattern about "rules" - but there was no central place to find them. You could Google and find obscure GitHub gists or forum posts, but no clear answer.

The moment he landed, Pontus called Victor: "We need to build this directory for Cursor rules." Within minutes, Victor spun up Figma to design while Pontus created the initial Next.js project with a hard-coded JSON file of rules he found online. In half an hour, they had something live on Vercel.

They bought the cursor.directory domain, completed the build in 3 hours, and posted it on X. It instantly took off - one post got 1 million impressions. They also hit the front page of Hacker News, and YouTubers started covering it.

The second wave came when MCPs (Model Context Protocol) launched - they quickly added MCP search functionality, which drove another huge adoption spike.

## Key Insights

### Why Directories Still Work in 2025
- Directories solve a timeless problem: finding things you're interested in
- In the AI world, people are looking for how to do things and find right answers
- If you catch the wave at the right time and own the space, it's super powerful
- Design is more important than ever - it's what sets you apart when everyone can build fast

### The 3-Hour Build Process
- Stick with tools you already know (Next.js, TypeScript, Vercel)
- Start with hard-coded data, iterate from there
- Having a co-founder with complementary skills (design + code) helps massively
- Don't overthink - just ship and see what happens

### Revenue Model
- Featured listings for MCPs and rules (paid placement)
- Job board for companies to post developer jobs
- AI-generated custom Cursor rules (upload package.json, get tailored rules)

### Design Philosophy
- Keep it simple
- Find websites you love and learn from them
- Stay with a consistent design system
- Design is the differentiator when AI makes building easy

## Tech Stack
- Next.js (fully TypeScript)
- Shadcn components
- Resend (email)
- Open Panel (analytics)
- Vercel (hosting)
- Polar (payments - great for European companies)
- Cursor (coding)
- Notion (product management)
- GitHub (version control, open source contributions)
- **Total cost: $525/month with 99.8% gross margin**

## Advice
- Just start. When you commit to something, you create your own luck
- Ship, share, and iterate - one thing leads to another
- There's no such thing as failure when building - worst case, you learn
- Find ideas by being dialed into what you're doing while staying aware of opportunities

## Resources
- Follow Pontus: https://x.com/pontusab
- Cursor Directory: https://cursor.directory/`
  },
  {
    id: 15,
    title: "How I Built It: $400K/Month Mobile App (Gravl)",
    founder: "Julian Gargicevich",
    app: "Gravl",
    revenue: "$440K/mo",
    videoUrl: "https://www.youtube.com/watch?v=2dfMUtHlQik",
    videoId: "2dfMUtHlQik",
    thumbnail: `https://img.youtube.com/vi/2dfMUtHlQik/maxresdefault.jpg`,
    postedDate: "Nov 13, 2025",
    keyInsight: "Clone something that works but do it better. Reddit for validation, paid ads to scale.",
    tags: ["Fitness App", "Paid Ads", "Clone Better"],
    summary: `## The Story

Julian is a developer from Argentina who built **Gravl** - an AI fitness app that provides smart, personalized gym workouts. The app now has 70,000+ subscribers and made over $440,000 last month.

Julian grew up around fitness - his dad owned a fitness center. He got into software engineering, moved to Australia, and worked at companies from small startups to Atlassian. During COVID, he and his partners started an influencer marketing platform for mobile games, which evolved into a marketing agency. Not what they signed up for, but they learned a lot about user acquisition and saw the revenue numbers fitness apps were making.

The turning point came when a friend showed him Fitbot, one of the biggest workout apps. Julian thought it was amazing at first - it provided workouts on the spot without much effort. But as he used it more, he noticed the workouts were weird, sometimes even dangerous. That's when it clicked: "We need to build Fitbot's UI/UX with an actual proper workout engine."

The initial MVP took 2-3 months. For validation, Julian posted on Reddit about how he built the app (then called Games AI). The post got hundreds of likes, 300,000+ impressions, and thousands of users. Many were developers who found the gym intimidating - perfect early adopters who provided bug reports and feature requests.

Once they validated product-market fit, they added subscriptions and started running Meta ads. They got their first subscription within 10 minutes of activating ads. They also translated to Spanish and ran cheaper ads in South America to test and learn.

## Key Insights

### The "Clone Better" Strategy
- Find an app that's crushing it but has obvious flaws
- Don't just copy - identify what's actually broken
- Build the same great UX with a better core product
- Julian's insight: Fitbot had great UI but bad/dangerous workout logic

### Reddit Launch Strategy
- Post in relevant subreddits about HOW you built it (technical angle)
- Developers make great early adopters - they give detailed feedback
- Use Reddit to validate before spending money on ads
- The post got 300K+ impressions and thousands of first users

### Paid Ads Playbook
- Start small ($50/day or less)
- Test in cheaper markets first (South America vs. US)
- UGC content is king - most successful ads are user-generated
- Use AI tools to create test videos cheaply
- Copy competitors - Meta Ads Library shows what's working for them

### 5 Tips for Building Mobile Apps
1. Validate before spending on ads - not just that it works, but that people will PAY
2. Start in cheaper markets to learn before scaling to US
3. Start small with content - $50 influencer posts, AI-generated videos, CapCut edits
4. UGC is king - real people using your app converts best
5. Copy what works - Meta Ads Library is public, study your competitors

## Tech Stack
- React Native + Expo (mobile)
- .NET (backend core functionality)
- Next + React (internal admin dashboards)
- Cursor (AI coding - very specific about which files to touch)
- 24/7 human support chat (not AI - users value real responses)

## Costs & Margins
- Meta/TikTok/Google/Apple ads: ~1/3 of revenue
- Team salaries (13-14 people): $50-80K/month
- Apple's 15% revenue cut
- MMP tools: ~$1K/month
- Infrastructure (servers, AI, tools): ~$1K/month

## Advice
- Be proud of what you build - motivation from loving your work can't be matched
- Keep pushing, don't give up too soon - building is not even half of it
- Be ready for punches - ads that don't work, bugs, setbacks
- But also know when to give up - don't drag a failing product for an extra year

## Resources
- Follow Julian: https://x.com/julian_gargi`
  },
  {
    id: 16,
    title: "I Built 3 SaaS Apps to $200K MRR",
    founder: "Mike",
    app: "Senja, Testimonial.to, Clipbot",
    revenue: "$200K/mo",
    videoUrl: "https://www.youtube.com/watch?v=67zh8_yiPh4",
    videoId: "67zh8_yiPh4",
    thumbnail: `https://img.youtube.com/vi/67zh8_yiPh4/maxresdefault.jpg`,
    postedDate: "Nov 9, 2025",
    keyInsight: "Build a portfolio of apps. Diversification protects you when AI disrupts any single product.",
    tags: ["Portfolio", "SaaS", "Testimonials"],
    summary: `## The Story

Mike is an Australian founder who built three SaaS apps that together generate $200K MRR: **Senja** (testimonial collection and display), **Testimonial.to** (video testimonials), and **Clipbot** (social media automation). His approach is all about building a portfolio of products rather than betting everything on one.

Mike's journey started with freelancing and consulting. He noticed that collecting and displaying customer testimonials was a pain point for many businesses. Instead of building one massive product, he created focused tools that each solve a specific part of the testimonial workflow.

The portfolio approach came from watching other founders get wiped out when a single product failed or got disrupted by AI. By having multiple revenue streams, Mike sleeps better at night knowing that if one product takes a hit, the others keep generating income.

## Key Insights

### The Portfolio Philosophy
- Don't put all eggs in one basket
- Each app should be simple and focused on one job
- Cross-sell between products serving similar audiences
- Diversification is insurance against AI disruption

### Why Testimonials as a Niche
- Every business needs social proof
- It's a "boring" problem that's always relevant
- Low churn - once integrated, businesses rarely switch
- Multiple angles to attack the same market

## 10-Step Playbook for Building SaaS

1. **Start with a problem you've experienced** - Mike struggled with testimonials for his own projects
2. **Validate with a landing page** - Collect emails before building
3. **Build the simplest version** - One core feature that solves the main pain
4. **Price from day one** - Free users don't give real feedback
5. **Focus on retention over acquisition** - Happy customers refer others
6. **Build in public** - Share progress on X/Twitter for organic reach
7. **Create content around your niche** - SEO and social content compound
8. **Listen to paying customers** - They tell you what to build next
9. **Automate everything possible** - Time is your scarcest resource
10. **Consider building adjacent products** - Same audience, new revenue streams

## Tech Stack
- Next.js (frontend)
- Node.js (backend)
- PostgreSQL (database)
- Vercel (hosting)
- Stripe (payments)
- Resend (email)

## Resources
- Follow Mike: https://x.com/mike_andreuzza
- Senja: https://senja.io/`
  },
  {
    id: 17,
    title: "I vibe coded a $12K/month mobile app (Stoppr)",
    founder: "David Attias",
    app: "Stoppr",
    revenue: "$12K/mo",
    videoUrl: "https://www.youtube.com/watch?v=orYTlk_BhW8",
    videoId: "orYTlk_BhW8",
    thumbnail: `https://img.youtube.com/vi/orYTlk_BhW8/maxresdefault.jpg`,
    postedDate: "Nov 5, 2025",
    keyInsight: "Clone successful apps in different niches. The 'quit sugar' market is massive and underserved.",
    tags: ["Vibe Coding", "Health App", "App Cloning"],
    summary: `## The Story

David Attias built **Stoppr** - a mobile app that helps people quit sugar addiction. The app now generates $12K/month, and David built it using "vibe coding" - describing what he wanted to AI tools and letting them generate the code.

David's approach is refreshingly honest: he doesn't try to reinvent the wheel. He studies successful apps in one category (like quit smoking apps), then applies the same proven mechanics to a different but similar niche (quit sugar). The psychology of addiction is the same - only the substance changes.

The "quit sugar" niche is massive. Sugar addiction affects millions of people, but unlike smoking or alcohol, there are far fewer apps targeting it. David saw this gap and moved fast.

Using vibe coding tools, David went from idea to App Store in weeks, not months. He focused on the core features that make quit apps work: streak tracking, community support, progress visualization, and motivational content.

## Key Insights

### The App Cloning Playbook
- Find apps making money in one addiction niche (smoking, alcohol)
- Study their features, onboarding, and monetization
- Apply the same formula to an underserved niche (sugar)
- The psychology of quitting is universal - only the substance differs

### Why Sugar is a Great Niche
- Massive market - sugar addiction is everywhere
- Less competition than smoking/alcohol apps
- Growing health consciousness drives demand
- Recurring problem = recurring revenue

### Vibe Coding Advantages
- Speed: weeks instead of months
- No deep coding knowledge required
- Iterate fast based on user feedback
- Focus on product, not technical details

## 6-Step App Cloning Process

1. **Research successful apps** - Find apps making $50K+/month in adjacent niches
2. **Identify transferable mechanics** - What features drive retention and conversion?
3. **Pick an underserved niche** - Same problem, different market
4. **Build with AI tools** - Use Cursor, Replit, or similar for fast development
5. **Copy the monetization model** - If weekly subscriptions work for quit smoking, they'll work for quit sugar
6. **Launch and iterate** - Get real users, listen to feedback, improve

## Tech Stack
- React Native (mobile)
- Supabase (backend)
- RevenueCat (subscriptions)
- Cursor (vibe coding)
- Figma (design)

## Resources
- Follow David: https://x.com/davidattias
- Stoppr: Available on App Store`
  },
  {
    id: 18,
    title: "I flipped 4 apps and made $500,000",
    founder: "Lotts",
    app: "Multiple Flipped Apps",
    revenue: "$500K total",
    videoUrl: "https://www.youtube.com/watch?v=PmyXmpkTIdc",
    videoId: "PmyXmpkTIdc",
    thumbnail: `https://img.youtube.com/vi/PmyXmpkTIdc/maxresdefault.jpg`,
    postedDate: "Nov 1, 2025",
    keyInsight: "Build apps specifically to sell them. The exit is the goal, not passive income.",
    tags: ["App Flipping", "Exits", "Strategy"],
    summary: `## The Story

Lotts has made $500,000 by building and selling 4 mobile apps. Unlike most founders who build for passive income, Lotts builds with the explicit goal of selling. Each app is designed from day one to be attractive to buyers.

The app flipping strategy is different from traditional indie hacking. Instead of trying to build a lifestyle business, you're building an asset that someone else will want to buy. This changes everything - from feature selection to growth strategy to how you document your business.

Lotts discovered that many buyers are looking for apps with proven revenue, clean code, and growth potential. They don't want to build from scratch - they want to buy something that's already working and scale it further.

The key insight: apps sell for 2-4x annual revenue. So an app making $10K/month could sell for $240K-$480K. Build a few of these, and you're looking at life-changing money.

## Key Insights

### The Build-to-Flip Mindset
- Design for exit from day one
- Document everything - buyers want clean handoffs
- Focus on metrics that matter to buyers (MRR, churn, growth rate)
- Keep the tech stack simple and maintainable

### What Buyers Look For
- Consistent monthly revenue (not one-time spikes)
- Low owner involvement (automated or outsourced)
- Growth potential (untapped markets or features)
- Clean codebase and documentation
- Transferable assets (no personal brand dependency)

### Valuation Multiples
- Apps typically sell for 2-4x annual revenue
- Higher multiples for: growing revenue, low churn, automated operations
- Lower multiples for: declining revenue, high owner involvement, technical debt

## Build-to-Flip Playbook

1. **Choose a proven niche** - Don't innovate on the idea, innovate on execution
2. **Build lean** - Minimum features, maximum value
3. **Document from day one** - SOPs, tech docs, financial records
4. **Automate operations** - Buyers want hands-off businesses
5. **Grow to $5-10K MRR** - Sweet spot for individual buyers
6. **List on marketplaces** - Acquire.com, Flippa, MicroAcquire
7. **Negotiate and close** - Be prepared for due diligence

## Where to Sell Apps
- Acquire.com (best for SaaS)
- Flippa (broad marketplace)
- MicroAcquire (startup-focused)
- Direct outreach to strategic buyers
- Indie hacker communities

## Resources
- Follow Lotts: https://x.com/LottsApps`
  },
  {
    id: 19,
    title: "My 2 apps made $1.5M",
    founder: "Kelechi",
    app: "Social Wizard",
    revenue: "$1.5M total",
    videoUrl: "https://www.youtube.com/watch?v=9WWvLj-NqEE",
    videoId: "9WWvLj-NqEE",
    thumbnail: `https://img.youtube.com/vi/9WWvLj-NqEE/maxresdefault.jpg`,
    postedDate: "Oct 28, 2025",
    keyInsight: "Target streamers and content creators. They have money and need tools to grow.",
    tags: ["Creator Tools", "Streamers", "Distribution"],
    summary: `## The Story

Kelechi built **Social Wizard** and another app that together generated $1.5M in revenue. His secret? Targeting streamers and content creators - a market with money to spend and constant need for growth tools.

Kelechi's background is in the streaming world. He understood that streamers are essentially small business owners who need tools to grow their audience, engage viewers, and monetize their content. But most tools were either too expensive or too complicated.

Social Wizard helps streamers grow their social media presence by automating content repurposing, scheduling posts, and analyzing what works. The key insight: streamers create hours of content daily but struggle to turn that into social media growth.

The distribution strategy was genius. Instead of traditional marketing, Kelechi partnered with mid-tier streamers who would showcase the tool to their audiences. Streamers trust other streamers - so recommendations converted incredibly well.

## Key Insights

### Why Streamers as a Market
- They have disposable income (from donations, subs, sponsorships)
- They're always looking for growth tools
- They're vocal - good products get recommended
- They create content that can feature your product naturally

### The Streamer Distribution Strategy
- Partner with mid-tier streamers (1K-10K viewers)
- Offer free access in exchange for honest reviews
- Streamers showcase tools naturally during streams
- Viewers see the tool in action and convert

### Building for Creators
- Solve time problems - creators are always busy
- Automate repetitive tasks
- Show clear ROI (more followers, more engagement)
- Make it dead simple - creators aren't technical

## Creator Tool Playbook

1. **Immerse yourself in the community** - Understand creator pain points firsthand
2. **Build for a specific creator type** - Streamers, YouTubers, TikTokers have different needs
3. **Solve one problem extremely well** - Don't try to be an all-in-one platform
4. **Partner with creators for distribution** - They're your best marketers
5. **Offer generous free tiers** - Creators talk, and free users become paid users
6. **Listen and iterate fast** - Creator needs change quickly

## Tech Stack
- React (web app)
- Node.js (backend)
- PostgreSQL (database)
- Various social media APIs
- Stripe (payments)

## Resources
- Follow Kelechi: https://x.com/kaboratech
- Social Wizard: https://socialwizard.app/`
  },
  {
    id: 20,
    title: "I vibe coded a $20K/month mobile app in 14 days",
    founder: "Connor Burd",
    app: "Fitness App",
    revenue: "$20K/mo",
    videoUrl: "https://www.youtube.com/watch?v=CwHD6Fg-Mjs",
    videoId: "CwHD6Fg-Mjs",
    thumbnail: `https://img.youtube.com/vi/CwHD6Fg-Mjs/maxresdefault.jpg`,
    postedDate: "Oct 24, 2025",
    keyInsight: "Facebook ads + vibe coding = fast path to revenue. Spend money to make money.",
    tags: ["Vibe Coding", "Facebook Ads", "14-Day Build"],
    summary: `## The Story

Connor Burd built a fitness mobile app that generates $20K/month - and he did it in just 14 days using vibe coding. His secret weapon? Aggressive Facebook advertising from day one.

Connor's approach is different from the typical indie hacker playbook. Instead of building in public and hoping for organic growth, he treated the app like a direct response business: build fast, launch ads immediately, and let the data tell you what works.

The 14-day timeline forced extreme focus. No fancy features, no perfect code - just the core functionality that users would pay for. Connor used AI coding tools to move fast, describing features in plain English and iterating rapidly.

Once the app was live, Connor immediately started running Facebook ads. He tested multiple ad creatives, audiences, and offers. Within days, he found winning combinations that brought in paying users profitably.

## Key Insights

### The Speed Advantage
- 14 days forces ruthless prioritization
- Ship ugly, iterate based on real data
- Perfect is the enemy of profitable
- AI tools make this timeline possible

### Facebook Ads from Day One
- Don't wait for organic growth
- Paid ads give you immediate feedback
- Test multiple creatives and audiences
- Scale what works, kill what doesn't

### Vibe Coding for Speed
- Describe features in plain English
- Let AI generate the code
- Focus on product, not technical perfection
- Iterate based on user feedback, not code quality

## 14-Day Launch Playbook

1. **Day 1-2: Idea validation** - Research competitors, identify gaps, define core feature
2. **Day 3-7: Build MVP** - Use vibe coding tools, focus only on must-have features
3. **Day 8-10: Polish and test** - Fix critical bugs, improve onboarding
4. **Day 11-12: Prepare launch** - App store assets, ad creatives, landing page
5. **Day 13-14: Launch and ads** - Submit to stores, start Facebook campaigns
6. **Day 15+: Optimize** - Double down on winning ads, iterate on product

## Facebook Ads Strategy

1. **Start with broad targeting** - Let Facebook's algorithm find your users
2. **Test multiple creatives** - Video, static, carousel - see what resonates
3. **Use UGC-style content** - Authentic beats polished
4. **Optimize for purchases, not installs** - Quality over quantity
5. **Scale winners aggressively** - When you find a winning ad, increase budget fast

## Tech Stack
- React Native (mobile)
- Supabase (backend)
- RevenueCat (subscriptions)
- Cursor (vibe coding)
- Facebook Ads Manager
- Figma (quick designs)

## Costs & ROI
- Facebook ads: Variable (start with $50-100/day)
- Target: 2-3x ROAS (return on ad spend)
- Break even quickly, then scale

## Resources
- Follow Connor: https://x.com/connorburd`
  },
  {
    id: 21,
    title: "How I built a $30K/month mobile app",
    founder: "John McEvoy",
    app: "Momego",
    revenue: "$30K/mo",
    videoUrl: "https://www.youtube.com/watch?v=T5zMsTw8GWQ",
    videoId: "T5zMsTw8GWQ",
    thumbnail: `https://img.youtube.com/vi/T5zMsTw8GWQ/maxresdefault.jpg`,
    postedDate: "Oct 23, 2025",
    keyInsight: "App Store Optimization is free and powerful. Target hyper-local keywords to rank #1.",
    tags: ["ASO", "Solo Founder", "Transit App"],
    summary: `## The Story

John McEvoy is a self-taught developer from Scotland who built **Momego** - a bus and train tracking app that covers over 160 cities worldwide. The app has been downloaded over 5 million times and generates $30K/month, all built and maintained by John alone.

John started his career in graphic design but became curious about development. He taught himself JavaScript, backend systems, and databases. The idea for Momego came from a personal problem: he wanted to see where his bus was on a map, similar to how Uber shows your taxi approaching. He was tired of standing at bus stops in the Scottish rain for 10-20 minutes.

The first versions were built in Xamarin using C#.NET, which was a tough process with months of building, failing, and tweaking. Later, he rebuilt the app in native Swift for iOS and Flutter for Android, which took just 2-3 months.

The real breakthrough came from App Store Optimization (ASO). John discovered that by targeting hyper-local keywords like "New York subway" or "Chicago CTA L train," he could rank at the top of search results for free. He also used multiple localizations (like Mexican Spanish) to index keywords for the US App Store.

## Key Insights

### App Store Optimization Strategy
- Find location-specific keywords (New York subway, Chicago train, etc.)
- Different cities use different terminology - research local terms
- Use multiple localizations to index more keywords
- Create location-specific screenshots for each market
- Ask for ratings at "golden moments" when users are delighted

### The Pivot to Subscriptions
- Started with banner ads making ~$8K/month
- Pandemic killed ad revenue overnight
- Rebuilt with subscriptions and premium features in August 2020
- Used A/B testing to optimize paywall - increased conversion from 0.5% to 8%
- Revenue jumped from $8K to $30K/month

### The Reverse Trial Unlock
- Users who tap "close" on paywall get 7 days free automatically
- No commitment required - just starts the trial
- This significantly increased conversions

## 3-Step ASO Playbook

1. **Find location-specific keywords** - Add city names, local transit terminology to title and metadata
2. **Use Apple Search Ads or manual research** - Type keywords into App Store search to see autocomplete suggestions
3. **Ask for ratings at golden moments** - When users see real-time bus tracking, that's the perfect time to request a review

## Tech Stack
- Flutter (mobile app)
- Laravel PHP (backend)
- Adobe Creative Suite (graphics)
- Lottie (animations)
- App Figures (ASO research)
- RevenueCat (subscription management)
- MixPanel (event analytics)
- Cloudflare (load balancing, ~$90/month)
- ChatGPT ($20/month)
- ~20 dedicated servers (~$2,500/month)
- Third-party APIs like mapping (~$1,000/month)

## Resources
- Follow John: https://x.com/johnmarkerpen
- Momego: https://travelwhiz.app/`
  },
  {
    id: 22,
    title: "I made $1M flipping apps",
    founder: "Domenico Gagliardi",
    app: "Multiple Micro-SaaS + Softgen",
    revenue: "$1M+ total",
    videoUrl: "https://www.youtube.com/watch?v=plrni3IBEyI",
    videoId: "plrni3IBEyI",
    thumbnail: `https://img.youtube.com/vi/plrni3IBEyI/maxresdefault.jpg`,
    postedDate: "Oct 21, 2025",
    keyInsight: "Build and sell micro-SaaS in 30 days. Validate with landing pages, build with feedback loops.",
    tags: ["Build & Sell", "Micro-SaaS", "Side Projects"],
    summary: `## The Story

Domenico (Dom) is an Italian founder who made over $1 million by building and selling apps using a systematic 30-day challenge. While working a full-time 9-to-5 job, he built and sold 6 Microsoft projects, then applied the same strategy to Softgen.ai, growing it from $20K ARR to $500K ARR in just 3 months before selling it for nearly 3x ARR.

Dom's journey started between 2017-2019 when he tried launching different projects while at university studying economics. In 2019, he launched a physical business in micromobility but had a co-founder dispute and left. He then worked as an analyst while always building side projects to escape the 9-to-5.

The "Build and Sell Challenge" was simple: launch, validate, and sell a micro-business in 30 days. His first product, Pitch 2.0 (a pitch deck generator), made $300 in 45 days and sold for $2,500. This proved the concept worked.

His portfolio includes: OneUp.ai (Excel formula generator, $7K revenue, sold for $25K), YourCoverLetter.com (sold for $7K after 40 days), RecapG.com (AI summarizer, sold for $34K after 6 months), QuizBot.io (sold for $5K), WebDesigner.io (sold for $12K), and finally Softgen.ai (the first AI vibe coding app, sold for ~$1.5M).

## Key Insights

### The Build and Sell Framework
1. **Set your goals** - Decide if you want to sell in 3, 6, or more months
2. **Validation stage** - Use a landing page (yep.so), distribute on X, collect emails, aim for 15% conversion rate
3. **Building stage** - Use feedback loop approach: build one key feature → send to email list → get feedback → improve → repeat
4. **Growth stage** - Apply building in public strategy for organic growth
5. **Selling stage** - Package business as an asset with key metrics: ARR, gross margins, ARPU, LTV, CAC, churn rate

### Why Projects Succeed or Fail
- Everything started from X (Twitter) - all projects were based on trends
- Timing is the main difference between successful and unsuccessful projects
- Sentiment analysis on X helps identify what's trending

### Working While Having a 9-to-5
- Organized everything in calendar
- Used Pomodoro technique (25-minute focused intervals with short breaks)
- Quit job only when Softgen showed real potential

## Tech Stack
- Bubble (quick development for first projects)
- Cursor (AI coding)
- Mailtrap (email marketing)
- Futurebase (public roadmap)
- Hunter.io (outreach)
- Make UGC AI (UGC creators)
- Attio.com (CRM)
- Stripe (payments)
- TinyAdz.com (advertising)
- Creator.io (influencer marketing)
- Ledit.co (Reddit marketing)
- Suna.so (general agent tasks)

## Resources
- Follow Dom: https://www.linkedin.com/in/domenicogagliardi/
- Current project: https://www.kortix.ai/`
  },
  {
    id: 23,
    title: "I Found a Business for Sale and Rebuilt It Into $20K/Month",
    founder: "Adrian Horning",
    app: "Scrape Creators",
    revenue: "$20K/mo",
    videoUrl: "https://www.youtube.com/watch?v=4BsxnGRbF4k",
    videoId: "4BsxnGRbF4k",
    thumbnail: `https://img.youtube.com/vi/4BsxnGRbF4k/maxresdefault.jpg`,
    postedDate: "Oct 19, 2025",
    keyInsight: "Don't invent ideas - copy validated ones from Acquire.com and execute better.",
    tags: ["Idea Validation", "API", "Copying Strategy"],
    summary: `## The Story

Adrian Horning is a solo developer from Austin who built **Scrape Creators** - a social media scraping API that generates $20K/month. But here's the twist: he didn't come up with the idea himself. He found a successful scraping API listed for sale on Acquire.com (formerly MicroAcquire), saw it was making $30K MRR with less than 100 customers, and decided to build his own version instead of buying it.

Adrian's background: he moved to San Francisco wanting to be in tech, learned to code at App Academy (a bootcamp), worked as an engineer in Utah for 3 years, then quit with $30,000 in savings. He freelanced, built a course, and tried various products without success until Scrape Creators.

A Twitter follower DM'd him about the Acquire.com listing because Adrian already had a product related to social media. When he saw the numbers - $30K MRR, only SEO for customer acquisition, less than 100 customers - he knew he could replicate it. He had been studying scraping for 3 years and already had the technical skills.

The MVP took just a couple of weeks because he already had scrapers built from previous experience. He hosted them on Render.com, put documentation in a Notion doc, built a basic website, and got his first customer a few weeks later.

## Key Insights

### Why This Idea Worked
- Pre-validated market (existing business making $30K MRR)
- Technical skills already developed (3 years of scraping experience)
- Small customer base meant room for competition
- SEO-based acquisition meant he could compete with his Twitter presence

### The Copying Framework
- If something is working, you have a "moral obligation" to copy it
- Don't copy word for word - copy the concept and idea
- Find the website by Googling parts of the listing description
- Look for "[competitor] alternative" blog posts

## 9-Step Playbook for Copying Ideas

1. **Visit Acquire.com marketplace**
2. **Filter by SaaS**
3. **Filter by asking price ($300K+) or ARR** - looking for pre-validated ideas
4. **Look for markets you know** - niche down to your expertise
5. **Find the actual website** - Google the listing description or search "[competitor] alternative"
6. **Reverse engineer customer acquisition** - How are they getting customers? SEO? Ads? Content?
7. **Build the product**
8. **Don't copy literally** - Copy the concept, not the exact implementation
9. **Do something every day** - Promote or improve the product daily

## Business Model
- Credit-based system (pay as you go, no subscription)
- 600 paying customers
- ~20 million API requests per month
- Pricing: $10 for 5K credits, $50 for 25K credits, $500 for 500K credits
- ~80% profit margins

## Tech Stack
- Node.js/JavaScript (everything)
- Impit package by Apify (HTTP requests)
- Proxies: Evomi, Core Residential, Webshare, Massive (~$1,500/month)
- Render.com (hosting)
- AWS Lambda (some scripts)
- Cursor ($20/month)
- Supabase (database)
- Astro + React (frontend)
- Developer in Philippines for overnight monitoring (~$500/month)
- Server costs: ~$400/month

## Resources
- Follow Adrian: https://x.com/adrian_horning_
- Scrape Creators: https://scrapecreators.com/`
  },
  {
    id: 24,
    title: "I rebuilt a $1B app and now make $14K/month",
    founder: "Denis Yurchak",
    app: "Yadaphone",
    revenue: "$14K/mo",
    videoUrl: "https://www.youtube.com/watch?v=88BbTpbWVpY",
    videoId: "88BbTpbWVpY",
    thumbnail: `https://img.youtube.com/vi/88BbTpbWVpY/maxresdefault.jpg`,
    postedDate: "Oct 16, 2025",
    keyInsight: "When giants fall, opportunity rises. Build in proven markets with dinosaur competitors.",
    tags: ["Timing", "VoIP", "Weekend MVP"],
    summary: `## The Story

Denis Yurchak is a self-taught developer who built **Yadaphone** - a browser-based international calling service - after seeing a tweet from Pieter Levels about Skype shutting down. In just 7 months, he went from zero to $14K MRR with 10,000 registered users, 4,500 paying customers, and 20 enterprise clients.

Denis has no technical background - he's actually a trained diplomat who studied for diplomatic work in Russia. After moving to Austria, he taught himself to code in two months using books and courses. He started working at a startup but quickly realized he wanted his own business. He freelanced to support himself while always working on side projects.

His first projects were ugly with no users, but with each one, he learned something new - better design, more reliable code. When Microsoft announced Skype was shutting down in March 2025, Denis saw Pieter Levels tweet about it and thought "why not me?"

He built a prototype over the weekend, launched on Reddit and X, and got his first sales in MINUTES - something that had never happened with any of his previous projects. This was clear validation.

## Key Insights

### Why Yadaphone Succeeded
- **Validated market** - Pieter Levels' tweet proved demand existed
- **Perfect timing** - Skype shutdown created immediate need for alternatives
- **Accumulated skills** - Years of failed projects built the skills needed
- **Pay-as-you-go model** - Different from competitors' subscription model

### The Reddit Launch Strategy
- Posted screenshots of core functionality with simple, clean interface
- Targeted traveler subreddits first (got blocked but still got sales)
- Moved to entrepreneur subreddits where self-promotion is allowed
- Got 150 users in the first week
- First sales came in MINUTES after posting

### The SEO Opportunity
- When big competitors leave, their articles still rank
- Reached out directly to authors of "Skype alternative" articles
- Asked them to add or replace Skype with Yadaphone
- This drove massive traffic from high-authority sites

## 5-Step Playbook for Building in Proven Markets

1. **Find markets with dinosaur competitors** - Old, slow-moving companies that haven't adapted
2. **Build MVP fast and post everywhere** - X, Reddit, LinkedIn. Nail design and usability, have a compelling story
3. **Capitalize on competitor exits** - Reach out to authors of articles mentioning the old competitor
4. **Keep iterating** - Text every paying customer for feedback for the first 6 months
5. **Create B2B offering ASAP** - Enterprise has bigger checks and lower churn

## Business Model
- Pay-as-you-go international calling (not subscription)
- Individual customers and enterprise clients
- Enterprise plan created overnight when a customer asked for it
- One enterprise customer pays ~$1,000/month

## Tech Stack
- Next.js (full-stack framework)
- Cursor (coding + copy writing)
- Vercel (hosting)
- Ahrefs (keyword research)
- Stripe (payments)
- Twilio (call handling, ~35% of monthly earnings)
- Custom support system built with Cursor

## Key Advice
- Do SEO from day one - it takes weeks/months but pays off immensely
- Check your sitemap has www prefix - Google may ignore pages without it
- Be patient with SEO - it's not like code where you see instant results

## Resources
- Follow Denis: https://x.com/denisyurchak
- Yadaphone: https://www.yadaphone.com/`
  },
  {
    id: 25,
    title: "Teen From Kazakhstan Makes $1M/Year Online",
    founder: "Mark Vassilevskiy",
    app: "Skale Solutions",
    revenue: "$80K/mo",
    videoUrl: "https://www.youtube.com/watch?v=YtyJ4reSQY0",
    videoId: "YtyJ4reSQY0",
    thumbnail: `https://img.youtube.com/vi/YtyJ4reSQY0/maxresdefault.jpg`,
    postedDate: "Oct 14, 2025",
    keyInsight: "Free redesigns for big brands = viral posts = overnight client bookings.",
    tags: ["Design Agency", "Free Work Strategy", "Build in Public"],
    summary: `## The Story

Mark Vassilevskiy is a 19-year-old from Kazakhstan who built **Skale Solutions** - one of the biggest design agencies in Silicon Valley - scaling to a team of 20 people and $80K/month revenue in just 10 months. His clients include major AI companies like Bolt, Lovable, Cursor, and he's partnered with Contra and W.

Mark started designing in Figma over 5 years ago, switching from frontend development. He worked with local clients in Kazakhstan, slowly gaining experience. In January 2024, he opened his X account and started posting consistently. After a few months of engagement, he had 5-6K followers.

The breakthrough came from a "free redesign" strategy. After getting rejected from every UX/UI job he applied for in summer 2024, Mark decided to do free redesigns for big brands and post them publicly. His first was for Atlassian - he redesigned their hero section and posted it. The post blew up to 110K views overnight. Even though Atlassian didn't notice him, he got 10-12 call bookings overnight and closed most of them.

He repeated this with Bolt (met the team in person, they became clients), and Acquisition.com (Alex Hormozi himself responded to the tweet). The Acquisition.com post was his highest-converting ever - 15-16 call bookings overnight.

## Key Insights

### The Free Work Strategy
- Do high-quality redesigns for trending/viral brands
- Post the work publicly on X
- Even if the brand doesn't notice, potential clients will
- One viral post can generate 10-15+ sales calls overnight

### Building an Audience from Zero
1. **Engage first** - Leave 50 comments a day on other designers' posts
2. **Do giveaways** - Give away knowledge, products, or services in exchange for follows/comments/retweets
3. **Use Tweet Hunter extension** - Find viral content in your niche to replicate
4. **Experiment at 3-5K followers** - Big enough to go viral, small enough that failures don't hurt reputation
5. **Target trending brands** - Find what people are talking about NOW and create amazing work for them

### Volume Negates Luck
- Ask yourself: "How many times do I need to repeat this task for the chances of NOT getting a client to be close to zero?"
- Apply this to DMs, content posting, outreach
- Most people underestimate the work required

## Business Numbers
- $80K/month revenue (aiming for $100K next month)
- Doubles revenue every 2 months ($10K → $20K → $40K → $80K)
- 25K followers on X
- 25+ million views on X throughout the year
- 6-7 clients per month (mix of one-off and retainers)
- Average retainer: ~$20K/month
- Team of 20 people

## Services Offered
- Websites
- Launch videos
- Times Square billboards
- Focus on making things go viral, not just conversions

## Tech Stack
- Figma (design, free)
- Blender (3D)
- After Effects (motion)
- Cinema 4D (3D motions)
- Slack (communication)
- Notion (organization)
- X Verified Organization (highest level for brand purposes)
- Framer ($30/month for website hosting, optional)

## Resources
- Follow Mark: https://x.com/markknd
- Skale Solutions: https://skale.solutions/`
  },
  {
    id: 26,
    title: "I built a $100K/month AI app",
    founder: "Dustin Stout",
    app: "Magai",
    revenue: "$100K/mo",
    videoUrl: "https://www.youtube.com/watch?v=DV7bBCAABg4",
    videoId: "DV7bBCAABg4",
    thumbnail: `https://img.youtube.com/vi/DV7bBCAABg4/maxresdefault.jpg`,
    postedDate: "Oct 11, 2025",
    keyInsight: "Build a personal brand for 10 years, then launch. Affiliate programs with recurring commissions drive growth.",
    tags: ["AI Aggregator", "No-Code", "Personal Brand"],
    summary: `## The Story

Dustin Stout built **Magai** - an AI platform that aggregates all major AI models (GPT, Claude, Gemini, image generators) into one subscription. The app now makes almost $100K/month with over $1M in total revenue in just 2.5 years.

Dustin's background is unconventional. He grew up in small-town Pennsylvania, moved to California to pursue acting, hated waiting tables, and started a business instead. He discovered he had a knack for social media and technology, taught himself web design and marketing, and started an agency.

But agency work didn't scale well for a perfectionist like Dustin. He pivoted to digital products in 2014, starting a WordPress plugin company. After some partner disputes and a couple of failed products, he found himself at a low point - not sure if he had anything left to give.

Then ChatGPT launched. Dustin saw the writing on the wall and realized the world was about to change. He noticed ChatGPT was missing features he wanted - search, folders, quality of life improvements. More importantly, he saw that people would need 5-6 different AI subscriptions to get the best tools. What if he could solve that problem?

With no money and no coding experience, Dustin taught himself no-code development through an online course. In just 8 weeks, he built a full MVP using Bubble. He launched thinking nobody would buy it - but made $3K in the first month, $10K by month three, and $30K/month after one year.

## Key Insights

### Why Magai Succeeded
- Solved subscription fatigue - one subscription for all AI models
- Quality of life features ChatGPT was missing
- Built on 10 years of personal brand and 100K email subscribers
- Generous recurring affiliate program drove word-of-mouth

### The 8-Week No-Code Build
- Learned no-code development through online courses
- Built MVP entirely on Bubble
- Launched with minimal features, iterated based on feedback
- No coding experience required

### Growth Strategy
- 10 years of personal brand building = built-in audience
- 100K email subscribers from personal blog
- Building in public - people want to see the journey
- Generous affiliate program with recurring commissions (not one-time)
- Friends in the industry who are great marketers

## What Magai Does
- Access all top AI models in one dashboard (GPT-5, Claude, Gemini, etc.)
- Switch between models mid-conversation
- Image and video generation (DALL-E, Flux, Ideogram)
- Quality of life features: search chats, folders, organization

## Pricing Model
- $20/month for solo users
- $40/month for teams (up to 5 users)
- Additional team members: $20/user/month
- Pay for extra usage as needed
- No freemium - strictly paid model

## Tech Stack
- Bubble (frontend, no-code)
- Stripe (payments)
- ConvertKit (email marketing)
- OpenRouter (unified API for LLMs)
- Fal.ai (image/video/audio models)
- Direct API connections to OpenAI (highest tier)
- Google Analytics (user tracking)
- Ahrefs (SEO monitoring)

## Key Advice
- Don't let past failures define you
- People rejected the products, not you
- Build something you need yourself
- Leverage personal brand if you have one
- Affiliate programs with recurring revenue drive sustainable growth

## Resources
- Follow Dustin: https://x.com/dustinwstout
- Magai: https://magai.co/`
  },
  {
    id: 27,
    title: "My app failed, then I changed one thing, and made $80K",
    founder: "Praneeth Pike",
    app: "Rabbit Holes AI / Canvas Mode",
    revenue: "$80K total",
    videoUrl: "https://www.youtube.com/watch?v=hYW9YDwHE20",
    videoId: "hYW9YDwHE20",
    thumbnail: `https://img.youtube.com/vi/hYW9YDwHE20/maxresdefault.jpg`,
    postedDate: "Oct 8, 2025",
    keyInsight: "Lifetime deals beat subscriptions for bootstrappers. Bring-your-own-keys eliminates AI costs.",
    tags: ["Pricing Pivot", "Lifetime Deal", "Desktop App"],
    summary: `## The Story

Praneeth Pike quit his $250K/year software engineering job to go all-in on building apps. He built **Rabbit Holes AI** (now Canvas Mode) - a canvas-first AI interface that lets users branch conversations into nodes instead of linear chats like ChatGPT.

The first version launched with a typical freemium/subscription model. It got downloads but almost nobody converted to paid after the trial. Praneeth was stuck at $1-2K MRR for months with no clear path forward.

Then he made one critical change: he switched from subscription to lifetime deal, converted from web app to desktop app, and made it "bring your own keys" (BYOK). This eliminated his AI costs and server costs entirely.

The result? $80K in revenue over the next 6 months with 1,200+ users and ~75% profit margins.

## Key Insights

### Why the First Version Failed
- Subscription model in a saturated market
- Target users (Power AI users) already had multiple AI subscriptions
- No personal brand to drive initial traction
- Web app meant ongoing server and AI costs

### The $80K Pivot
1. **Lifetime deal instead of subscription** - Bootstrappers can't afford to wait for subscription revenue to compound
2. **Bring your own keys (BYOK)** - Users pay for their own AI usage, eliminating costs
3. **Desktop app instead of web** - No server costs, runs on user's computer
4. **Progressive pricing** - Started at $29, raised to $49 after 100 users

### Why Every Bootstrapper Should Do LTDs
- VC-backed companies can delay product-market fit with funding
- Bootstrappers need immediate validation
- LTDs provide cash injection + morale boost
- LTD users give better feedback and are more engaged
- Can always add subscription later once validated

## Pricing Strategy
- Started at $29 (under 100 users)
- Raised to $49 after 100 users
- Planning to raise higher and add recurring model at 1,200+ users
- 60% lifetime users, 40% annual (renew for updates)

## Growth Strategy
- Nail the landing page copy - call out your ICP directly
- Reply to relevant conversations on Twitter
- Don't just promote - hint at solutions related to your product
- Target Power AI users specifically in messaging

## Business Numbers
- ~$80K gross revenue
- ~$75K profit (after refunds)
- 1,200 users
- 38,000 unique website visitors
- Near-zero operating costs

## Tech Stack
- Cursor (AI coding)
- Next.js (landing page)
- Electron + React + TypeScript (desktop app)
- Cloudflare (hosting)
- Vercel AI SDK (abstraction for multiple AI providers)
- Costs: ~$50/month (Vercel) + $200/month (Cursor for new features)

## Key Advice
- Stop operating as a "skillsman" - your goal is product-market fit
- Don't build to impress peers - build to make users' lives better
- LTDs are truth-seeking - they validate demand immediately
- BYOK model works great for AI products

## Resources
- Follow Praneeth: https://x.com/praneethpike
- Rabbit Holes AI: https://www.rabbitholes.ai/`
  },
  {
    id: 28,
    title: "I Built a $1M SaaS Using YouTube",
    founder: "Vasco",
    app: "Arvow",
    revenue: "$70K/mo",
    videoUrl: "https://www.youtube.com/watch?v=VZ1XspToV1E",
    videoId: "VZ1XspToV1E",
    thumbnail: `https://img.youtube.com/vi/VZ1XspToV1E/maxresdefault.jpg`,
    postedDate: "Oct 4, 2025",
    keyInsight: "YouTube builds trust like nothing else. One video a day for 45 days = guaranteed $5K or Vasco pays you $500.",
    tags: ["YouTube", "SEO Tool", "Content Marketing"],
    summary: `## The Story

Vasco built **Arvow** - an AI-powered SEO tool that helps marketing agencies and business owners do SEO faster. The app scaled from zero to $70K MRR fully organically, using just one platform: YouTube.

Vasco's journey started in 2015-2016 when he discovered Alex Becker's videos about rank-and-rent SEO. He started doing local SEO, got clients, then moved to selling SEO services on Fiverr and Upwork. He noticed these marketplaces were missing features, so he built his own SEO marketplace called Vetted and sold it.

When the AI wave hit, Vasco knew he wanted to build something in SEO with AI. He built Arvow as an AI writer for SEO content. But the real magic was his growth strategy: YouTube.

His philosophy: "The way you get people to buy from you is if they know, like, and trust you. The best way to have someone know, like, and trust you is if they see your face and hear your voice for long periods of time."

## Key Insights

### Why YouTube Beats Everything
- Long-form content builds deep trust
- Videos rank on both YouTube AND Google
- Videos get recommended in LLMs (ChatGPT, etc.)
- Evergreen content keeps generating views for years
- Better effort-to-results ratio than TikTok, blogging, or Twitter

### The 3-Step YouTube Playbook

**Step 1: Produce Money-Making Assets**
- Evergreen videos (still get views 2 years later)
- News-relevant videos (spike in first 2-3 days, good for subs)
- Viral/Mr. Beast style videos (harder but high impact)

**Step 2: Multiply Yourself**
- Create multiple YouTube channels in your niche
- Find potential creators on Upwork (look for video in profile)
- Pay per performance or per video
- Expand to other languages (Portuguese, Spanish)

**Step 3: Scale with Paid Ads**
- Use YouTube infeed ads on videos that performed well
- Infeed ads appear on homepage and sidebar (look organic)
- Revive videos that got views/sales but stagnated

### Tracking YouTube ROI
- Dedicated UTM in each video description
- Dedicated coupon code per video
- Welcome questionnaire asking which creator they came from

### CTA Optimization
- Move CTA to beginning/middle (not end - most don't watch through)
- Make CTAs interactive and specific (not generic "check out the website")

## The $5K Challenge
Vasco's bold claim: "If any viewer posts a video on YouTube every day for 45 days and doesn't make at least $5,000, I'll PayPal you $500."

## Business Numbers
- $70K MRR
- ~600 paying clients
- Pricing: $99/month to ~$700/month
- Fully organic growth (no paid ads initially)

## Tech Stack
- Loom Premium (HD recording)
- Miro (whiteboard for tutorials)
- Camtasia (video editing)
- Good mic (Shure SM7B)
- Good camera and lighting

## Key Advice
- Post a video every single day for 45 days
- Videos don't need to be polished - just valuable
- Consistency + volume = success
- To be in the 1%, do what the 99% won't do
- 20-30 minute videos daily for almost a year

## Resources
- Follow Vasco: https://x.com/vascoabm
- Arvow: https://arvow.com/`
  },
  {
    id: 29,
    title: "My two apps made $30M",
    founder: "Will Cannon",
    app: "UpLead & Signaturely",
    revenue: "$30M+ total",
    videoUrl: "https://www.youtube.com/watch?v=w8oUlfgvcTI",
    videoId: "w8oUlfgvcTI",
    thumbnail: `https://img.youtube.com/vi/w8oUlfgvcTI/maxresdefault.jpg`,
    postedDate: "Oct 1, 2025",
    keyInsight: "Copy proven markets, find your twist in 1-star reviews, acquire customers profitably with cold email and SEO.",
    tags: ["B2B Data", "E-Signature", "Cold Email"],
    summary: `## The Story

Will Cannon built two SaaS companies doing over $30M in combined sales: **UpLead** (B2B data provider with real-time verified emails and phone numbers) and **Signaturely** (simple e-signature alternative to DocuSign). He did it all without raising funding, by copying already successful businesses and adding his own twist.

Will's journey started at 19 when he and his girlfriend (now wife) started a mortgage company during the subprime boom. They made incredible money in 2005-2007, then got crushed when the mortgage crisis hit.

While rebuilding, Will noticed they had been selling data lists on the side. He turned that into a 10-year agency business. But the constant problem was data quality - vendors were only 50-60% accurate. That's when the idea for UpLead hit: why isn't there a tool that verifies emails and phone numbers in real-time?

For Signaturely, Will saw DocuSign crushing it but noticed their product was complicated. He built a simpler version that "your grandmother could use."

## Key Insights

### The 4-Step Framework for Building $30M Businesses

**Step 1: Find markets with proven product-market fit**
- Don't try to be Steve Jobs
- Look for markets where companies are already making money
- Easier to compete than to create a new category

**Step 2: Find your unique twist**
- Can't just be "cheaper" - needs real differentiation
- Read 1-star and 2-star reviews of competitors
- What do people hate about the market leaders?
- That's your twist and your easiest customers to acquire

**Step 3: Acquire customers profitably**
- This is the hardest part
- Need a skill: cold email, cold calling, SEO, or ads
- Learn through books, YouTube, practice

**Step 4: Execute relentlessly**
- Most people talk about building, few actually do it
- You will fail - get back up
- Will failed at 15-20 businesses before these two worked

### The Cold Email That Made $1M ARR
Subject: "Hi, [First Name]"
Body: "I was checking out your LinkedIn profile and thought this could be of value to you. We built a tool called UpLead, which is like ZoomInfo but with real-time email verification, and we're really affordable. Are you open to trying it out at no cost?"

Why it works:
- Subject looks like it came from a real person
- Intro is neutral and direct
- Value prop is clear and familiar (framed against market leader)
- States the twist (real-time verification)
- Ask is so easy it's hard to say no

### SEO Strategy for Signaturely (0 to 1.6M users)
- Built free tools (online signature generator)
- Created templates (marketing agreements, construction contracts, landlord agreements)
- Ranked for "[type] agreement template" keywords
- Tools and templates drive traffic → convert to product users

## Business Numbers
**UpLead:**
- $30M+ in sales
- 4,000+ customers
- 100,000+ monthly website visits

**Signaturely:**
- 1.6M+ users
- $1.5M+ in sales
- 800,000+ monthly website visits

## Ideas Worth Building in 2025
1. **Super simple CRM** - Big market, fragmented, multiple billion-dollar players
2. **Payroll software for small businesses** - Copy FreshBooks' SEO strategy around templates/tools
3. **Website analytics tool** - Every business needs it, tie in AI/LLM mentions

## Key Advice
- Have big, hairy, audacious goals (moonshots)
- Don't sweat the small stuff - think big picture
- Keep going - you'll fail many times before success
- The playbooks are already out there - most people just don't study them

## Resources
- Follow Will: https://x.com/iamwillcannon`
  },
  {
    id: 30,
    title: "How We Built It: $30K/month Mobile App",
    founder: "Eyal & Yahli Hazan",
    app: "PropGPT",
    revenue: "$30K/mo",
    videoUrl: "https://www.youtube.com/watch?v=rCV-TVCnF6Q",
    videoId: "rCV-TVCnF6Q",
    thumbnail: `https://img.youtube.com/vi/rCV-TVCnF6Q/maxresdefault.jpg`,
    postedDate: "Sep 28, 2025",
    keyInsight: "Distribution doesn't matter if your product sucks. Rebuild based on data, not assumptions.",
    tags: ["Sports Betting", "Product Rebuild", "Analytics"],
    summary: `## The Story

Eyal and Yahli Hazan are two college students who built **PropGPT** - a sports betting analytics platform that uses machine learning to analyze picks. They launched, got great initial traction with 20 downloads/day, but were stuck at $1-2K MRR for months. Almost nobody stayed after the trial.

Instead of pushing harder on marketing, they did something counterintuitive: they shut down all marketing and spent 4 months completely rebuilding the product from scratch.

After relaunching, they hit $30K MRR in just 10 weeks, with a peak of $40K MRR and 2,000 downloads in a single day.

## Key Insights

### The Problem: Great Distribution, Bad Product
- Had influencer marketing figured out
- 20 downloads/day right off the bat
- High conversion to free trial (48%)
- But only 13% converted from trial to paid
- Stuck at $1-2K MRR

### What the Data Told Them
- High trial conversion = people liked the IDEA
- Low paid conversion = the PRODUCT wasn't delivering
- Users wanted answers, not tools to find answers themselves
- Original app made users do too much work

### The 4-Month Rebuild
- Shut down all marketing
- Pure engineering and design work
- Rebuilt to give users what they actually wanted
- Relaunched April 15th at $1,700 MRR
- Hit $40K MRR peak 2.5 months later

## 4-Step Playbook for Building Great Products

**Step 1: Understand your ICP and their pain points**
- Who exactly are you building for?
- What problems do they actually have?

**Step 2: Listen to your data**
- Track conversion at every step
- High trial, low paid = product problem
- Be humble about your product

**Step 3: Obsess over analytics**
- Track where users drop off in onboarding
- Track every feature click
- Identify your most compelling value prop
- Use that in marketing

**Step 4: Scale with influencer marketing**
- Followers engage deeply and convert faster
- One viral video can change your entire business
- Their 70th video hit 600K views → ARR jumped from $8K to $38K in 3 days

## Business Numbers
- $30K/month revenue
- 40,000+ downloads
- 3,000+ paying customers
- 48% conversion to trial
- $3.30 revenue per download
- ~50% profit margins

## Tech Stack
- React Native (mobile app)
- TypeScript + Python (ML algorithms)
- Neon (database, ~$10/month)
- RevenueCat (revenue dashboards)
- Superwall (paywalling, 20 cents per conversion)
- PostHog (analytics)
- Data APIs (~$100/month)
- LLM costs (~$20/month)
- Marketing (~$10K/month)

## Key Advice
- Have a co-founder to lean on when things get hard
- Be honest and scientific about demand
- If your product sucks, no amount of distribution will save it
- Use analytics to understand what users actually do, not what you think they do

## Resources
- Follow Eyal: https://x.com/eyali__
- Follow Yahli: https://x.com/YahliHazan`
  },
  {
    id: 31,
    title: "How We Built a $10K/mo SaaS",
    founder: "Josef & Timo",
    app: "Setter AI",
    revenue: "$10K/mo",
    videoUrl: "https://www.youtube.com/watch?v=3eY71OS4MFw",
    videoId: "3eY71OS4MFw",
    thumbnail: `https://img.youtube.com/vi/3eY71OS4MFw/maxresdefault.jpg`,
    postedDate: "Sep 27, 2025",
    keyInsight: "Get paid before building anything. A fake landing page and demo can validate your idea and generate revenue.",
    tags: ["Validation", "SEO", "B2B SaaS"],
    summary: `## The Story

Josef quit freelancing as a software engineer to start indie hacking. Timo lives in Bangkok. They met at a coworking space and decided to partner up. But they were burned out from what Josef calls "builder's disease" - spending months building projects that got zero customers.

"I quit my job and spent a whole year building without any traction," Josef admits.

So they came up with a better strategy: get paid before building anything. They built **Setter AI** - an AI appointment setter that follows up and qualifies leads instantly. It's a high-ticket agentic B2B SaaS targeting the solar industry, coaches, and financial services - anywhere you need to replace sales reps.

But here's the genius part: they made $500 before writing a single line of code using a fake landing page and demo.

## Key Insights

### The Fake Landing Page Strategy
- Set up a landing page on a warm domain (already indexed by Google from a previous business)
- Created a completely fake demo video using 11 Labs
- Used basic SEO research on Ahrefs to find keywords with search volume but no difficulty
- Put "cold call automation" as the H1 keyword
- Added a Calendly link as the call to action
- Requested indexing through Google Search Console - indexed within 24 hours
- "Super super simple. One H1 keyword and then the demo on the right side and then a book demo button. There was really nothing else on this page."

### When Is It Validated?
- "The only way to validate is when buyers swipe their credit card"
- Got first $500 Stripe payment in February 2024 before the product existed
- "There was even a company with a billion dollar revenue booking a call with me. For me, that was a clear sign. That is insane. Nobody else is doing this. This is an underserved opportunity."

## 5-Step Validation Playbook

**Step 1: Have a job**
- "The best pain point to find B2B ideas is not look around on Reddit because business owners, frankly, they don't really check Reddit"
- "Having a job is actually an absolute advantage compared to indie hackers who never had a job because they don't really know all the processes that happen in a business"

**Step 2: Set up a landing page**
- Do basic SEO research on Ahrefs or free SEO tools
- Search for keywords buyers would search for

**Step 3: Set up a Calendly link**
- "They see your face on a call. They know you're a real human. They trust you."
- Try to close them on a call and swipe their credit card

**Step 4: The Deposit Framework**
- "Don't say 'Please pay for my non-existing solution'"
- Offer 100% refundable deposit (e.g., $500)
- Creates urgency: "This secures you a spot in the first launch of the product"
- "Go high ticket. If you go this route, don't charge them $20 or something. Charge them something serious so you know they are in."

**Step 5: Give it time to incubate**
- SEO route takes time but brings serious buyers
- "They search for a solution. So give it a little bit of time to incubate."

## Business Numbers
- $10K MRR (August was slow - "August is always a slow month in B2B")
- 2,000 total signups
- 38 paying customers (focused on high-value)
- Subscription starts at ~$50/month
- Some pay over $500/month
- Biggest customer pays up to $5,000/month
- Applied to YC 5 times, got 1 interview
- YouTube channel has 600 subscribers
- Recently received acquisition offers

## Tech Stack & Tools

### Marketing Tools
- Ahrefs (SEO research)
- Answer the Public (YouTube video ideas)
- Zapier (automation)
- Beehiiv (email automation and newsletters)
- Calendly (scheduling)
- Webflow (landing page and CMS)
- YourBusinessNumber.com (phone numbers)

### Development Stack
- TypeScript + SvelteKit
- Postgres (Render + Supabase, ~$150/month combined)
- OpenAI for AI
- Puppeteer for browser automation
- Brandfetch API
- Plausible Analytics ($29/month) - "Just so much easier to use and better than Google Analytics"
- Netlify for hosting
- Cursor for AI-assisted coding

## Cost & Margins
- 90%+ margins without ads
- ~80% margins with ads and freelancers
- Highest cost: OpenAI API (~$250/month)
- Upwork freelancers (~$500/month occasionally)

## Growth Strategy
- Pure inbound through SEO and content
- Free tools (e.g., free sales script generator)
- Comparison blog articles (e.g., "HubSpot alternatives")
- "Within a week, we ranked on page one on Google and now ranked number one worldwide for this keyword"
- YouTube long format - "Most of the customers we closed came through watching at least one YouTube video before jumping on a call"
- "YouTube and watching long format content by nature has this high intent from the watcher, but then also creates insane trust into your business already. Also, it's the second biggest search engine after Google."

## Ideas Worth Building in 2025
- "Lovable for mobile apps" - Lovable is great for web apps but mobile apps aren't as easy to build
- "If someone can figure out a builder like Lovable but for Swift apps, I think that is one of the biggest opportunities... could even be bigger than Lovable itself which has like a billion dollar valuation"
- Gluing softwares together or automating workflows for non-technical people

## Key Advice
- "Charge early on. Don't be afraid to charge because charging creates urgency and commitment not only from you but also your customer."
- "Go high ticket. It makes your life easier."
- "Sell to rich people, they pay better" - Alex Hormozi

## Resources
- Follow Josef: https://x.com/josefbuettgen
- Follow Timo: https://x.com/timonikolai`
  },
  {
    id: 32,
    title: "This app replaced my 9-5 ($150K/year)",
    founder: "Christian Konnerth",
    app: "Wishlists",
    revenue: "$150K/year",
    videoUrl: "https://www.youtube.com/watch?v=w3zxMrwWrt0",
    videoId: "w3zxMrwWrt0",
    thumbnail: `https://img.youtube.com/vi/w3zxMrwWrt0/maxresdefault.jpg`,
    postedDate: "Sep 24, 2025",
    keyInsight: "Build a simple side project while keeping your job. It took 6 years, but now it's a $150K/year business.",
    tags: ["Side Project", "Mobile App", "Patience"],
    summary: `## The Story

Chris turned a simple wishlist app into a $150K/year business without a team, without funding, and with zero marketing. As he puts it: "I turned a really simple wishlist app into a 150K a year business and now 2 months ago I quit my job."

**Wishlists** is a mobile app that lets users create and share wishlists for Christmas, birthdays, and other occasions. The idea came from a simple observation: "I was still using an Excel sheet for my own wish list because I thought there was no nice and pretty wish list app out there."

The journey started with rejection. In 2019, Chris applied for an app developer job at a bike company he admired. They declined, but said they liked his enthusiasm. "That just gave me the boost. That's when I decided to get into app development because I wanted to have these kind of jobs."

Instead of building yet another to-do list app (there are 2 million of them), Chris built something similar but different - a wishlist app. Six years later, it's a $150K/year business that let him quit his full-time job.

## Key Insights

### The 6-Year Marathon
- **2019:** Started building in university after job rejection
- **2020:** Released first version of the app
- **2021:** Got first job as app developer (because of the app he built)
- **2023:** Relaunched Wishlists 2.0, hit 100K registered users
- **2024:** Full-time job + side project simultaneously
- **2025:** Quit job, went full-time on Wishlists

As Chris reflects: "Nowadays, everyone would just vibe coded on a weekend, but for me, it took 6 years. So, for me, it was a marathon and not just a vibe coding weekend."

### Building Alongside a 9-5
- **Morning (8-9am):** Small tasks - support emails, analytics
- **Day (9am-6pm):** Full-time job
- **Evening (6-8pm):** Personal time, sports
- **Night (8-11pm):** Development work
- **2025:** Negotiated 4-day work week for extra dev time

"In the summer I couldn't really motivate myself to keep developing after a full day of developing, so the start of 2025 I negotiated to have a 4 day week to have another full day for Wishlists."

### The Zero Marketing Approach
"Being a developer also means that I'm naturally bad at marketing. So, I just didn't do any marketing the standard way. Also, I simply didn't have the money for it."

Instead, Chris focused on:
1. **Friends and family reviews** - "I just asked everyone I know for reviews. That was super awkward at first, but that's what has helped me a lot."
2. **Strategic review timing** - "I'm just showing it after the user has accomplished something. For example, has added a wish or fulfilled a wish. So when the user feels good."
3. **Personal support emails** - "Every time I shipped a feature or just fixed a bug for someone specific user, I would text these users, 'Hi John, I just fixed your issue.'"

## 4-Step Side Project Playbook

**Step 1: Start small with an actual problem**
- "I guarantee you if you have this problem there's at least one more person on this earth with the same problem and that should be enough to start this project."

**Step 2: Set correct goals**
- "If I had set my goal 6 years ago to have 150K a year, I would have thrown away that project. So my first goal was not to get the million dollars but to have a random person who I don't know download the app."
- "Users first, monetization later."

**Step 3: Be honest with your employer**
- "Be upfront about your side project because that's mutual beneficial. You learn so much at your work... But having a side project means you have to do everything and that's also super beneficial for your work."
- "Use every free time you get. Car rides, train rides."

**Step 4: Use winter wisely**
- "In winter, no one's going to say, 'Oh, look how nice the weather is outside. How can you be inside coding?' That will not happen in winter."
- "I really started to like working holidays because that just combines being social and being productive. Find a small group of friends or colleagues... It just helps a lot being around other motivated people."

## Business Numbers
- $150K/year (~$6K/month in low season, 5x in high season)
- 1.1 million registered users
- 4,000+ paying customers
- 110K monthly active users
- 99% profit margins ("I don't really have the costs beside my server costs")

## Revenue Model
- **In-app purchases:** Premium features like custom wishlist images
- **Affiliate links:** Amazon links converted to affiliate links ("Once I open this link from within Wishlists, I get money because I'm changing it to an affiliate link")

## Tech Stack
- Flutter (cross-platform)
- Firebase (backend, analytics)
- Cursor IDE
- ChatGPT
- RevenueCat (in-app purchases)
- Thrill (user feedback)
- OneLink (deep links)
- SelfDesk (accounting)

## Key Advice
"Do not over complicate things. Not everyone has to fly to Mars. You don't have to build the next Facebook. You don't need VC funding. Find a problem you can solve by yourself. Find an actual problem you or someone else has and just give it a try. Even if that just means making a prettier version of an existing app."

## Resources
- Follow Chris: https://www.linkedin.com/in/christian-konnerth-9a3432200/
- Wishlists: https://www.wishlists-app.com/`
  },
  {
    id: 33,
    title: "The $1M Mobile App Playbook",
    founder: "Steven Cravotta",
    app: "Posted",
    revenue: "$40K/mo (sold)",
    videoUrl: "https://www.youtube.com/watch?v=hKqLceTPLWM",
    videoId: "hKqLceTPLWM",
    thumbnail: `https://img.youtube.com/vi/hKqLceTPLWM/maxresdefault.jpg`,
    postedDate: "Sep 20, 2025",
    keyInsight: "Marketing first, product second. Validate content organically, then scale winners with paid ads.",
    tags: ["Marketing Playbook", "TikTok", "Paid Ads"],
    summary: `## The Story

Steven built, scaled, and exited multiple mobile apps for millions in revenue. His quit vaping app **Puff Count** scaled to $44K MRR before being sold to a European mobile app studio. His secret? A marketing-first approach where he validated content organically before spending a dollar on ads.

As Steven explains: "Every mobile app that you build should be approached from a marketing first standpoint because as long as you can market your product, you will make money. And if your product is not marketable, you could have the best product in the world, but if no one knows about it, you're never going to make any money."

The idea came from personal experience: "Vaping was a problem that I experienced in my daily life. When I was in college, all my friends got addicted to vaping. I got swept up in the habit. So, I knew it was a painful problem. And I also saw vaping going mega viral on TikTok. It's controversial. It's viral. And I was solving a problem for people."

## Key Insights

### The 3-Phase Marketing Framework
1. **Market Research** - Understand what goes viral in your niche
2. **Organic Growth** - Post volume, find viral formats
3. **Paid Ads** - Scale winners with paid advertising

"This is exactly what I did for PuffCount. This is the entire reason that I was successful with PuffCount is because I did market research in the quit vaping niche on TikTok and I simply took inspiration from those videos."

## Phase 1: The $1M Spreadsheet Method

### Step-by-Step Market Research
1. Go to TikTok, type keywords related to your niche
2. Filter by "most liked videos of all time"
3. Document everything in a spreadsheet

"Before I posted a single video on the Puff Count TikTok, I scrolled for 7 days straight. I saved all the videos to the market research just like this. And after 7 days of scrolling, analyzing, and understanding what goes viral in your niche and why it goes viral in your niche, you will be so much better at creating content."

### For Each Viral Video, Document:
- **The hook** (first 3 seconds)
- **How they shot it** (holding camera, walking, setting camera down)
- **The storyline/problem**
- **The call to action/solution**

"These small little details in the video are actually very important. You want to replicate and take inspiration from these as close as possible. There's a reason she started this video while walking and then set it down in front of her."

## Phase 2: Organic Growth Framework

### Content Structure
Every viral video has three key points:
- **Hook** - Capture attention in 3 seconds
- **Problem/Storyline** - Present clearly
- **Solution/Call to Action** - Quick 2-second CTA

"The 2-second call to action, simply showing the product in your video, works so well because if people miss that, they have to rewatch your video again and it creates an engagement loop."

### Posting Strategy
- **Volume negates luck** - Post as much as possible
- **Don't be a perfectionist** - "Don't worry about the time that you post the content, all the small little details of the content."
- **When a video pops off, recreate that concept** - "The most viral people on TikTok, on YouTube, they do the same style of video over and over and over again."
- **Post on ALL platforms** - TikTok, Instagram Reels, YouTube Shorts, Twitter

"Twitter is so slept on. Do not sleep on Twitter as a distribution."

### Results
- 120,000 followers
- 50 million views
- Hundreds of thousands of installs
- All for $0

### High-Converting Video Types
- Public interviews
- Simple product demos
- Trend hijacking
- Problem-solution narratives

"One video got 11.6 million views, close to a million likes, and it drove me close to no installs... I'm not really talking about any pain points here. There's not a lot going on. It was kind of a bad video in terms of conversions."

## Phase 3: Paid Ads - The Funnel Approach

### The Funnel Steps
1. **Views** (top of funnel)
2. **Clicks**
3. **Installs**
4. **Trials**
5. **Subscriptions** (bottom of funnel)

"When you're starting on paid ads, it's very important that you fill up each step of the funnel first before you start to optimize for the bottom."

### Key Strategy
- Start optimizing for top of funnel, work down
- Use proven organic content for ads
- Track CAC (Customer Acquisition Cost) vs LTV (Lifetime Value)
- Need an MMP (Mobile Measurement Partner) like Adjust or Appsflyer

### Puff Count Results
- **$82K total ad spend**
- **CAC:** $20-24
- **LTV:** $55-70
- **Cost per click:** 3-35 cents
- Scaled from $3K to $44K MRR

"We got these results almost like day one of running ads because we had this library of proven content. We knew exactly what videos we were going to upload to the paid ads dashboard because we had validated it all organically."

### Platform Strategy
- **TikTok:** Cheaper traffic, slightly lower quality
- **Meta:** More expensive, higher quality
- Focus on one platform first until you nail it

"For me personally, we scaled most of our spend on TikTok ads. And that was because all of our content that we used on our paid ads was made for TikTok."

## The Golden Ratio
"If you can get to a 3:1 CAC to LTV ratio, congratulations. You've built a money printing machine."

## Tech Stack
- Adjust or Appsflyer (MMP for tracking)
- Superwall (paywalling)
- RevenueCat (subscriptions)
- Posted (creator marketplace Steven built)

## Key Advice
"Marketing should always come first. If your product is not marketable, it doesn't matter how good it is."

"A lot of people are scared of paid ads and they don't want to do it. But Facebook and TikTok are some of the most profitable companies in the world for a reason. It's because paid ads work."

## Resources
- Follow Steven: https://x.com/stevencravotta
- Posted: https://postedapp.com/`
  },
  {
    id: 34,
    title: "My app makes $41K/month",
    founder: "Joe Rozek",
    app: "Waitly",
    revenue: "$41K/mo",
    videoUrl: "https://www.youtube.com/watch?v=a1EXyJlSx9g",
    videoId: "a1EXyJlSx9g",
    thumbnail: `https://img.youtube.com/vi/a1EXyJlSx9g/maxresdefault.jpg`,
    postedDate: "Sep 13, 2025",
    keyInsight: "You don't need a new idea. Improve on existing solutions and find an underserved niche.",
    tags: ["Solo Founder", "B2B SaaS", "Niche Down"],
    summary: `## The Story

Joe went out for brunch on a busy Saturday morning and got put on a waitlist. When he clicked the link to see his wait time, it wanted him to download Yelp and sign up for an account. As Joe recalls: "By the time that I signed up for an account and everything, I got a text that my table was ready. So I thought to myself, this link should just take me to a page where I could see my wait time. I shouldn't have to sign up for an account."

That frustrating experience became a $41K/month business. His wife suggested: "Maybe you could build a wait list app."

**Waitly** is a waitlist and reservations platform for any business with waiting customers. It's simpler and cheaper than giants like Yelp and OpenTable.

Joe's background: "I was always into computers growing up... Came out of college and started a career as a software engineer. But in 2008, I landed a job with Shutterfly, the online photo gift company. And it was the first time in my career that I thought I was building something fun and cool."

When he moved into management, he missed building: "I was building teams rather than apps. So I started looking for a side project where I could learn how to build iOS apps."

## Key Insights

### The Brunch Moment
- Got put on waitlist at restaurant
- Link required downloading Yelp and creating account
- "This link should just take me to a page where I could see my wait time"
- Wife suggested building a waitlist app

### The 7-Year Growth Timeline
- **Year 1:** $0 (free version only, 10 downloads in first week)
- **Year 2:** $14,500 (launched in-app purchases)
- **Year 3:** $116,000 (took off)
- **Year 4:** $186,000
- **Year 5:** $307,000
- **Year 6:** $354,000
- **Year 7:** $445,000
- **Year 8:** On pace for $500K+

"6 months in, I was really fired up. Had a working prototype. I could add people to the list. I couldn't text anyone yet. And about a year and a half in, I really dug deep and said, 'All right, I'm going to get to the point where I could launch this in the app store.'"

## How to Compete with Billion-Dollar Companies

### 1. Price
- **Waitly:** $100/month flat fee
- **Yelp/OpenTable:** Hundreds/month + cover fees per reservation

### 2. Simplicity
- Only does waitlist and reservations
- Works for other industries beyond restaurants

"During COVID, we had a bunch of retail chains who had limited capacity in their stores want a wait list so people could wait outside for their turn. And we put Waitly in over 700 locations around the United States and that 10x'd our business that year."

### 3. Customer Service
"Anytime that someone calls our support line, someone answers immediately. They're always surprised that someone picked up right away to answer their call."

## 4-Step Idea Framework

**Step 1: You don't need a new idea**
"There's plenty of ideas out there, problems that have been solved that you could improve upon. And while you're improving upon that, you might find a niche within that industry. Waitly is a perfect example of that. I competed with the giants like Open Table and found a little niche within that industry where I can serve the small restaurants that are underserved."

**Step 2: Use AI to build MVP quickly**
"Nowadays, you could do that in just a couple weeks. Get something out there quickly."

**Step 3: Get feedback from early customers**
Iterate based on real usage.

**Step 4: Expect the unexpected**
"Get ready to adapt because things never go as you expect and you're going to have to adapt."

## Business Numbers
- $41K/month revenue (on pace for $500K+ this year)
- 15,000+ businesses have tried Waitly
- 700 paying customers (US and Canada)
- 59 million parties waitlisted since launch
- CAC: ~$130
- LTV: $750-1,000

## Growth Strategy
- **Apple Search Ads** (main driver) - "As much money as we can put into those ads, there's definitely ROI there"
- Email nurturing with tips and quick start videos
- Zoom onboarding and staff training
- End-of-trial promotions

## Tech Stack
- **Google Firebase** (hosting, auth, database) - $700/month
- **Node.js** (backend)
- **Swift** (iOS app)
- **ReactJS** (web version)
- **Twilio** (business texts) - $2,500/month
- **RevenueCat** (iOS subscriptions) - 1% of revenue
- **Stripe** (web payments) - 3%
- **Survey Monkey** - $35/month
- **Hive** (project management) - $25/month
- **Freshdesk** (support) - $40/month
- **Claude Code** - $200/month
- **ChatGPT** - $20/month
- **Calendly** - $12/month

## Joe's App Ideas Worth Building
1. **Pickleball league management app** - "The spreadsheets that we keep to keep track of everyone's points is getting out of hand"
2. **AI support chatbot** - Trained on specific products or websites
3. **New social media platform** - "Social media today is run by corporations and influencers and everyone's doom scrolling and I think people are really itching to connect with friends and family again like they did in the early days of social media"

## Key Advice
"Keep going. Definitely. When that self-doubt creeps in, when you're competing with giants, you're not sure if you can actually go forward, just keep going. Acknowledge that your doubts have no basis in reality because you cannot predict the future. Launch your product and see what the future holds."

## Resources
- Follow Joe: https://www.linkedin.com/in/joseph-rozek/`
  },
  {
    id: 35,
    title: "How I Made $65K in 3 Days",
    founder: "Deven Bhooshan",
    app: "SuperGrow",
    revenue: "$19K/mo",
    videoUrl: "https://www.youtube.com/watch?v=BNr1JOQdSN0",
    videoId: "BNr1JOQdSN0",
    thumbnail: `https://img.youtube.com/vi/BNr1JOQdSN0/maxresdefault.jpg`,
    postedDate: "Sep 10, 2025",
    keyInsight: "Lifetime deals are a cheat code for cash infusion, validation, and early feedback - if done right.",
    tags: ["Lifetime Deal", "LinkedIn Tool", "Validation"],
    summary: `## The Story

Deven was a struggling entrepreneur from India with only a handful of users and no idea how to build distribution. As he admits: "I was always a struggling entrepreneur. I didn't know how to build distribution."

Then he discovered lifetime deals. Using this strategy, he generated $65,000 in just 3 days and jumpstarted **SuperGrow** - a SaaS that helps professionals build their personal brand on LinkedIn.

The idea came from studying competitors: "I actually tried their tool out and I actually was not happy with the content creation piece. Around the same time, GPT-3 was launched and it actually changed the whole content creation game because it was really good at mimicking the writing style of the user."

As Deven puts it: "Lifetime deals are a cheat code because it gives you cash infusion, validation, and early feedback."

## Key Insights

### The Validation Strategy
"One thing which I always tell indie hackers is don't try to create new market, just work on the validated market."

- Study competitors deeply (Taplio, ContentIn, AuthorUp)
- "Deeply understand your competitors, use their product day in day out and try to understand what are their core flows"
- Find what their core flows are missing
- "Once you are able to come up with a sort of a 1% increment in the quality of the product, you can just go ahead and build an MVP"

### The $65K Launch
- Had only 2-3 customers and ~600 Twitter followers
- RocketHub co-founder Charlie reached out after seeing their journey on LinkedIn
- "We would love to help you launch Supergrow on RocketHub"
- Generated $65K in 3 days ($40K after 40% platform cut)

"Initially to be honest with you I was really skeptical, but after talking to Charlie I kind of get it like why people do LTDs."

## Lifetime Deal Pricing Structure
- **Tier 1:** $79 (basic plan)
- **Tier 2:** $199 (pro plan)  
- **Tier 3:** $299 (agency plan)
- "Whoever bought the product back then, they were getting like 4 to 5 years of value just by paying $299, $199"

## What RocketHub Did
"They actually do everything for you apart from the product."

- Emailed hundreds of thousands of LTD buyers
- Created Instagram and Facebook ads
- Built all marketing assets (screenshots, videos they still use today)
- "Essentially our role was build the product and support"
- Took 40% cut

"Obviously, it's a big cut. 40% is a huge cut. But if you think about it, at that moment, we had only like one or two customers. We had almost close to $0, but just by launching our product through them, we were able to generate $40,000."

## Pros and Cons of Lifetime Deals

**Pros:**
- "The biggest benefit of LTD is cash infusion, validation and early feedback"
- Creates ambassadors who evangelize your product
- "We had like 10 to 15 really happy LTD customers who actually talked about us on LinkedIn, on Twitter, on Product Hunt"

**Cons:**
- High platform cut (40%)
- "We got a lot of angry customers reaching out to you for feature requests, for missing features, for bugs"
- "When you launch LTD, you attract a lot of cheap customers also"
- Only ~10% of LTD customers actively use product long-term

## LTD Objections Answered

**"LTDs are cope for bad products"**
"Actually LTD exposes bad products really faster because these LTD customers are going to give very brutal feedback to you."

**"Why not just offer it for free?"**
"Free users don't actually validate your product. They will just consume it and if something doesn't work, they will just ghost you. But paying customers, because they have put real money into your business, they are going to give you good feedback."

**"Won't it kill long-term growth?"**
"You don't want to launch LTD for a long period of time. We launched LTD only for 3 days... limit the time frame and also limit the number of users. We limited that to 300 users."

## The Product Hunt Strategy
"One of the key things - these LTD customers actually helped us make our Product Hunt launch better because they actually evangelized our product everywhere. I was not the only person talking about my product that day."

Result: Became Product of the Week and got 50 new customers.

## Business Numbers
- $230K/year total revenue
- $19K/month recurring
- 800+ recurring customers
- 15,000+ monthly landing page visits
- 60-70% profit margins

## Tech Stack
- Rails, React, Tailwind (app)
- Postgres (database)
- Supabase (auth, assets)
- Railway (hosting)
- Framer (landing page)
- Intercom (live chat)
- Mixpanel (analytics)
- Stripe (payments)
- Microsoft Clarity (session recordings)

## Costs
- Marketing/affiliates: ~$3K/month
- Freelancers (design/product): ~$1K/month

## Key Advice
"My one piece of advice would be don't work in an unvalidated market and don't think of creating a very unique solution in a unique market. I think it's okay to build a better version of an existing product that's getting traction. As an indie hacker, it's very hard for us to educate users on the problem. Focus on validated markets."

## Resources
- Follow Deven: https://x.com/devenbhooshan
- SuperGrow: https://www.supergrow.ai/`
  },
  {
    id: 36,
    title: "Our simple app made $100K in 90 days",
    founder: "Nikita & Evgeniy",
    app: "Natural Write",
    revenue: "$100K in 90 days",
    videoUrl: "https://www.youtube.com/watch?v=1nfPvJKrYYQ",
    videoId: "1nfPvJKrYYQ",
    thumbnail: `https://img.youtube.com/vi/1nfPvJKrYYQ/maxresdefault.jpg`,
    postedDate: "Sep 6, 2025",
    keyInsight: "Find a problem you personally experience, build fast, and leverage TikTok for explosive organic growth.",
    tags: ["AI Writing", "TikTok Growth", "Mobile App"],
    summary: `## The Story

Nikita and Evgeniy built **Natural Write** - an AI-powered app that helps users rewrite AI-generated text to sound more human and bypass AI detection. In just 90 days, they went from idea to $100K in revenue, primarily through viral TikTok content.

As Nikita explains: "User just passed a generated text, click humanize button and receive 100% human written text and this text usually bypass most AI detectors."

The idea came from market research: "During our research we noticed that there are so many videos about humanizers and I just thought that okay we can do the same, it's much easier to promote it on TikTok because it's hot topic."

Their results were explosive: "First months, $41K, second months, $32K, and third months, $27K... total $100K in revenue."

## Key Insights

### The Origin Story
- Found the idea through TikTok research
- "We came to that idea a little bit randomly"
- Noticed humanizer videos were trending
- Built product in two weeks, started promoting immediately
- "It worked out, yeah"

### Failed First Attempt
"Firstly we tried hiring influencers and paying them to make videos for us but it was unsuccessful experience because they generated just some views and almost no conversions."

### The Pivot to Self-Made Content
"After that we decided to create our own accounts on TikTok and we started filming ourselves. We started posting videos every day. Just from the first video, we got the first sale."

## 7-Step TikTok Marketing Playbook

**Step 1: Niche Research**
"Do your niche research before you even start coding because you need to find proofs. Proof that you have competitors on TikTok and proof that these competitors have viral videos on TikTok as well."

**Step 2: Create TikTok Account**
- If not in target location: buy VPN, need iPhone, phone number from target location, new email, new Apple ID
- "It is very important your first TikTok account should be registered on your phone number"

**Step 3: Warm Up**
"You have to spend 30-50 minutes a day for 3-5 days engaging with content in your niche. Like videos, leave comments, follow creators, use search to find videos in your niche."

**Step 4: Recreate What Works**
"Start by making one-to-one high-quality copies of viral videos in your niche. It is very important to add captions in TikTok editor as well."

**Step 5: Posting**
"Start with posting just one video per day at optimal time for your target audience. Usually it will be the second half of the day."

**Step 6: Innovate**
"When your videos start going viral and you figure out how everything works on TikTok, you can begin experimenting with your own ideas and your own formats."

**Step 7: Scale**
"Once you having success and getting views, you can scale your operation by creating more accounts and hiring creators."

## Viral Video Examples

**Video 1: Jim Carrey Comedy Clip**
"You have an essay to submit in 5 minutes... This video took couple of hours to make and in the beginning we didn't expect like this video will reach 4 million views. This format was already proven by other creators. So we just copy it and it works really well."

**Video 2: Before/After Demo**
"We show exactly the problem like you have 100% generated text. You do this and you have like 100% human written text. Once it gets viral, we start getting a lot of sales immediately."

"Funny stuff here. That original video has around 150K views, but the copy from Yini gets 1.5 million views."

## Business Numbers
- Total TikTok views: ~9 million (from all accounts)
- Total website visits: ~300K
- Signups: 250K
- **Conversion rate (visit to signup): 80%** - "That is crazy"
- Revenue: $100K in 3 months

## Tech Stack
- Next.js
- Postgres
- Coolify (hosting)
- NextAuth + Resend (auth/email)
- Server cost: $35/month
- Resend: $20/month
- VPN: $5/month per 5 devices
- US phone numbers: $5/month per number

"Other than cost of our time, the cost to run this business is very low."

## Key Advice
"You need to start your TikTok journey by yourself. Try find out what works and only then start thinking about delegate or hiring other people."

"Don't over complicate it. Skip inventing your own TikTok format and just replicate what's already going viral."

## Resources
- Natural Write: Available on App Store and Google Play`
  },
  {
    id: 37,
    title: "This app made over $1M",
    founder: "Ania Wysocka",
    app: "Rootd",
    revenue: "$1M+",
    videoUrl: "https://www.youtube.com/watch?v=VfNRd5Rk0cM",
    videoId: "VfNRd5Rk0cM",
    thumbnail: `https://img.youtube.com/vi/VfNRd5Rk0cM/maxresdefault.jpg`,
    postedDate: "Aug 31, 2025",
    keyInsight: "Build from personal pain. Ania created Rootd after experiencing panic attacks and not finding an app that actually helped.",
    tags: ["Mental Health", "Solo Founder", "Personal Pain"],
    summary: `## The Story

Ania Wysocka built **Rootd** - a panic attack and anxiety relief app - after experiencing debilitating panic attacks herself. As she shares: "In my fourth year of university, I actually got a panic attack seemingly out of nowhere. I had no idea what they were before and I was far away from home."

When she searched for apps to help: "I realized that there's nothing that really spoke to me. Things were really either clinical or there were hypnosis based apps and it just really wasn't what I was looking for. So that's why I figured I had something to launch here."

What started as a personal project has grown into a million-dollar business: "Since launching in 2019, it's been downloaded over 4 million times and made over a million in revenue."

## Key Insights

### The Personal Origin
"I don't have any technical background. So, I basically started taking what I thought would be helpful and I started drawing it out in a notebook."

### Building Without Technical Skills
"I was thinking about the way I wanted the information to be presented, what would be most helpful for me in that moment of a panic attack. How do I keep things super simple in the app when somebody's really overwhelmed as they're using it?"

Process:
1. Drew ideas in notebooks
2. Taught herself wireframes in Photoshop/Illustrator
3. Approached an agency (couldn't afford)
4. Found a student developer willing to work with her
5. "I just put in all my savings"

### The Core Feature That Never Changed
"The first prototype of Rootd was essentially the panic attack button that would walk you through a panic attack. And that actually hasn't changed a ton over the years because it's really the core of Rootd. It's the aha moment that really resonates with users."

## Growth Timeline
- **Year 1:** ~10,000 downloads
- **Year 2:** ~100,000 downloads
- **Year 3:** 1 million downloads
- **Now:** 4+ million downloads, $1M+ revenue

"It started off quite slow... It wasn't until year two or so that we reached 100,000 downloads."

### Building While Working Full-Time
"When I first started Rooted, I was working 4 days a week... I'm doing Rooted 3 days a week and this other job 4 days a week. So I basically had no weekends or social life for quite a few years. I don't think there's any shortcuts though."

## 4-Step Growth Playbook

**Step 1: Build a Product That Delivers**
"Build a product that actually delivers what your page promises. That'll lead not only to more positive downloads, but people will also then share it."

**Step 2: Listen to Your Users**
"User reviews are super important. Oftentimes everything you need to know is written in the user reviews and sometimes your own assumption of what a user needs might not actually be what they do need."

**Step 3: Optimize App Store Presence Continuously**
"Doing a release frequently shows that you continue to work on the app. I do one once every week and that shows you're constantly working on fixing bugs, improving the user experience."

**Step 4: Partner Strategically**
"We've done a few B2B contracts... a ton of different therapy groups and psychologist offices are recommending and using Rooted."

## 3 Tactics That Drove Growth

**1. Active Social Media Engagement**
"I used to spend literal hours going through posts, writing helpful comments, leaving links back to Rooted, and really trying to be helpful in what I wrote."

**2. Press Releases & Cold Outreach**
"I would find people online, journalists that wrote about mental health and then I would reach out to them either on LinkedIn or try to get their email and send pitches."

Results: Featured in Cosmopolitan, Women's Health, and Time magazine - "All of that really happened from these organic cold emails."

**3. App Store Optimization (ASO)**
"I focused a lot on making sure that the product matches what the users are looking for. They see on your product page, they download the app, they use it, and then they use the same keywords to describe their experience via the user reviews. That was like the holy circle."

## The App Features
- **SOS Button:** Walks you through a panic attack in the moment
- **Ron:** Blue app mascot that guides users
- **Deep Breathing Tool**
- **Lessons:** Understanding anxiety, causes, theories
- **Journal Tool:** Share feelings, accomplishments, gratitude
- **100+ Visualizations and Sleep Sounds**
- **Simple Relaxing Games:** For anxious moments

"We're able to now take a panic attack and users are feeling better from the panic attack within under 2 minutes."

## Key Metrics
- 4.8 out of 5 rating maintained
- "Users leave comments about how Rooted has helped them go back to work, go back to school, and just reclaim confidence in their lives."

## Key Advice
"Listen to users very closely. They will have the answers you need. They'll help you know what to focus on."

"I'd also recommend taking care of yourself along the way... Looking back I wish I celebrated a few of the smaller moments more because now I realize that those were like the most awesome moments."

## Resources
- Rootd: https://www.rootd.io/
- Follow Ania: https://x.com/aniawysocka`
  },
  {
    id: 38,
    title: "How I Built a $4M Business (Simple Strategy)",
    founder: "Shaan Arora",
    app: "Alia",
    revenue: "$4M ARR",
    videoUrl: "https://www.youtube.com/watch?v=MLAH5OZ5FO8",
    videoId: "MLAH5OZ5FO8",
    thumbnail: `https://img.youtube.com/vi/MLAH5OZ5FO8/maxresdefault.jpg`,
    postedDate: "Aug 27, 2025",
    keyInsight: "Positioning is everything. By reading one book and repositioning their product, they went from 0 to $4M ARR in a year.",
    tags: ["Positioning", "E-commerce", "SaaS"],
    summary: `## The Story

Shaan is the co-founder and CEO of **Alia** - a pop-up tool for e-commerce brands. By reading one specific book and repositioning their company, they went from $0 in revenue to $4 million ARR in just one year.

As Shaan explains: "Before the book, we had no product market fit, no revenue, and no happy customers."

The company started as a loyalty/education tool, but customers kept using it as a pop-up tool. "The difficulty in me being able to describe to you what it was kind of shows the issue with positioning."

Once they embraced that positioning, everything changed: "Last year, we went from $0 in revenue to 4 million ARR once we figured out our position."

## Key Insights

### The Early Struggle
"When we started, I was in college. I actually built this at my university for a club, like a fintech club on campus."

"We had two customers. One was my co-founder's cousin and the other was this girl from my class at university. People were like, 'Hey, this is cool, but where does it fit in my tech stack? What do I replace with it? And who are you?'"

"It took us about 6 months to get from two customers to about 20 customers."

### The Book That Changed Everything
"My co-founder reads a book called Obviously Awesome. We read it and we understood that the customers had perceived us differently than what we were selling. And it was a hard pill to swallow, but it was an important one."

"I wanted to believe my best customers thought of us as an innovative new customer education tool. The hard truth is that they didn't think of us as that. They actually thought of us as a pop-up tool."

"If our best customers think of us as a pop-up tool and they pay us for that, you can extrapolate and say that a bunch of other customers who think of us as a pop-up tool might pay us some money."

## 4 Ways to Reposition Your Business

**1. Change Website Copy**
"The biggest thing is what can this tagline say? As you can see right here, 'the next generation of pop-ups.' And when I click on product, this says 'pop-up features.' It doesn't say 'product features' because these are only features that exist inside of the pop-up, which is all that we do."

**2. Create Content About Your Position**
"I actually have a bookmarked post right here: 'We're at 3.5 million ARR. Pop-ups. That's all we do.' Pop-ups equals Alia. Alia equals pop-ups. I pinned it to my profile. If someone wants to look me up, this is the first thing they're going to see."

**3. Sales Calls**
"When you're in sales calls, I hop on a call and say, 'Hey, I'm Sean. I'm the CEO. We do pop-ups.' That's how I start my calls. Right away when you hop on the call, it's like, 'Hey, I'm Sean. We do pop-ups and we care about pop-ups.' And they're like, 'Okay, cool. Thanks.' They know what they're here for."

Result: "I noticed very quickly on the calls, they were shorter, they were more succinct, and they closed more often."

**4. Internal Language**
"Everyone on the team needs to understand that we were a company before. We are still this company, but we focus on this new thing. This is all we care about."

## The Gradual Pivot Process
"It wasn't all at once. We didn't do all four at once."

1. Started with sales calls - saw better close rates
2. Then content - performed better than before
3. Then website
4. Then internal language
5. "Then everyone was like, 'Oh, okay. This makes sense. Let's flip everything now.'"

## 3-Step Framework for Repositioning

**Step 1:** Read the book "Obviously Awesome" (no affiliation)

**Step 2:** Do the positioning exercises - "Ask yourself these questions. If you have co-founders, do it with your co-founders."

**Step 3:** Test on sales calls - "See the live reaction of those customers. See if those close more often. See if they understand the product better and see if they're more excited about it."

## Business Numbers
- $4M ARR
- ~1,500 brands using Alia
- Notable customers: Nike Strength, Tom's Shoes
- Team of 12 (3 co-founders)

## Goal-Setting Philosophy
"We had two customers. My only goal was to get a third. Once we got a third, my goal was to get a fourth, a fifth, so on. It's not your job to get there right away. It's your job to get to a third, to get to a fourth, to get to a fifth, and understand how you got to those five."

## Key Advice
"Do one thing and do that one thing phenomenally."

"When you're a younger founder, the one currency you have that the incumbents of your industry don't have is speed and urgency. When it comes to the incumbents, they can't move as quick as you."

"We're now in an industry where folks have been there for 15-20 years and they're going to move slower than us inherently because they're a larger company. You have that advantage."

## Resources
- Alia: https://www.alia.com/
- Book: "Obviously Awesome" by April Dunford`
  },
  {
    id: 39,
    title: "How I Finally Built a $10K/Month SaaS (30 Failures)",
    founder: "Thomas Sanlis",
    app: "Uneed",
    revenue: "$10K/mo",
    videoUrl: "https://www.youtube.com/watch?v=rPguT9z6kRQ",
    videoId: "rPguT9z6kRQ",
    thumbnail: `https://img.youtube.com/vi/rPguT9z6kRQ/maxresdefault.jpg`,
    postedDate: "Aug 23, 2025",
    keyInsight: "After 30+ failed projects, success came from timing, persistence, and knowing how to sell your idea before building it.",
    tags: ["30 Failures", "Persistence", "Launch Platform"],
    summary: `## The Story

Thomas is the founder of **Uneed** - a Product Hunt alternative that makes $10K/month. But before this success, he launched more than 30 projects that all failed.

As Thomas admits: "I failed way more often than I ever succeeded."

His GitHub is a graveyard of abandoned repositories: "We can have a look at my GitHub account and yeah, as you can see, I have a lot of repositories and most of them are abandoned."

The key difference with Uneed? Timing, persistence, and finally understanding what makes an idea worth building. "Yeah, it started to grow step by step until I reached $10,000 of revenue last month."

## Key Insights

### The 30+ Failed Projects
- **Gum Affiliates:** "Marketplace to connect Gumroad sellers with affiliates. I think I made something like $500 from it, but I just gave up after 2 years."
- **Frisbee:** "A platform to exchange feedback about your product, but never published it"
- **Gidley:** Simple website builder (abandoned)
- **Cidi:** "A simple web app to manage your plans. Actually, I used it for maybe a year or two for myself."
- Bookmark manager (abandoned)
- Simple Twitter feed (abandoned)
- "And yeah, there are a lot of things on my GitHub profile."

### The Uneed Pivot
- Started as a simple directory for front-end tools
- "I think I reached to $200 per month at some point, but that was my best month"
- Pivoted to a launch platform (Product Hunt alternative)
- "At first, it was a huge failure. I was scared because my revenue went down a lot."
- "A few months after the pivot, my revenue started to grow up again"

## 5 Reasons Why Projects Fail

**1. Giving Up Too Early**
"I often see people launching a project and giving up after a week or two because they haven't had any registrations or sales. But I don't think a product will ever work overnight. We have to make sure the market exists and we have to kind of iterate and iterate again."

**2. Unclear Purpose**
"I've seen hundreds of landing pages that may look great with a lot of animation details, but if people don't understand exactly what your product is offering when they read your headline, it's a lose and lose situation. Nobody's going to scroll down if they don't understand your headline."

**3. Loss of Momentum**
"If you build in public, every time you post about your product on social media, you create momentum. Step by step, people will see the name of your product, your name in their feed. They'll end up remembering you. If you stop talking about your project for a few weeks or a month, you have to start again to build this momentum."

**4. "Build It and They Will Come" Mentality**
"I just hate that phrase and I think it's very wrong. People won't come to see your product because it has amazing features. No matter what your product is, if you don't do any marketing, if you don't talk about it, no one will come to your website."

**5. Bad Timing**
"Timing is important when launching a project. If your project doesn't work in January, it doesn't mean it won't work in July. Stay consistent and don't give up because you don't have the right timing."

### The Timing That Made Uneed Work
"If I had pivoted Uneed from a directory to a launch platform maybe a year before I did it, it could have been a huge failure. I took advantage of drama around Product Hunt and a few indie hackers who were complaining on social media about the fact that they couldn't be featured on Product Hunt... That was the right moment to launch an alternative. I don't think it would have worked without this timing."

## What Makes a Good Idea

**1. You Know How to Sell It**
"The better thing that makes an idea a good one is that you know how to sell it. That could be because you know the market, because you have a huge distribution channel, or because you have a great marketing idea. But if you don't know how to sell your idea, it's a bad one."

"With Uneed, it was a bit different because I knew Product Hunt, I knew indie hackers, I knew launch platforms, I knew the market. I started to have a great distribution channel, my Twitter account. I knew how to sell my idea."

**2. You Have Competitors**
"Not having competitors means that there's no market. So, you won't be able to sell anything to anyone. You're not Steve Jobs. Creating a new market is nearly impossible. So if you don't have competitors, you don't have a market and your idea won't sell."

## Business Numbers
- $8K-10K/month revenue (fluctuates based on marketing)
- 40,000 users on platform
- 2,000 paying customers
- 30,000 unique visitors/month
- 10,000 clicks redirected to listed products last month

## Tech Stack
- Next.js (full stack - frontend and backend)
- Supabase (database)
- Bentop (emails and automation)
- Hetzner VPS with Coolify (hosting)
- Plausible (self-hosted analytics)
- Ferno (customer support)
- Typefully (social media scheduling)
- Polar (merchant of record)

## Key Advice
"You don't have to lock down in your bedroom and code and market for months without seeing anyone. You just have to pick your time and find a way to make it sustainable in the long run."

"Don't forget your personal life and realize you're in this game for the long run and you have as much chances of becoming rich in a month as winning the lottery. You can think of it as a marathon, not a sprint."

## Resources
- Uneed: https://www.uneed.best/
- Follow Thomas: https://x.com/music_music_`
  },
  {
    id: 40,
    title: "How We Built It: $900K Open Source SaaS",
    founder: "Iuliia & Marc",
    app: "Papermark",
    revenue: "$75K MRR (~$900K ARR)",
    videoUrl: "https://www.youtube.com/watch?v=F8i0kkrQ8_o",
    videoId: "F8i0kkrQ8_o",
    thumbnail: `https://img.youtube.com/vi/F8i0kkrQ8_o/maxresdefault.jpg`,
    postedDate: "Aug 16, 2025",
    keyInsight: "Open source is a genius business model - it's defensible, scalable, builds community-driven R&D, and creates trust through transparency.",
    tags: ["Open Source", "Document Sharing", "Bootstrapped"],
    summary: `## The Story

Iuliia and Marc are the husband-and-wife co-founders of **Papermark** - an open-source alternative to DocSend for sharing documents and data rooms securely. They bootstrapped the company to $75K MRR (close to $900K ARR) in just 1.5 years.

As Marc explains: "Papermark started as an open-source project on the side without the idea to actually go commercial."

The entire business started with a single tweet: "I pushed out a tweet and I basically said like I'm going to build an open source alternative to DocSend and it went just like crazy. Within a couple hours it got like 40,000 views."

"So over the weekend, I actually built it, at least the first MVP, the first version that was usable and pushed out on Monday the launch tweet and it got like 100K views. And then soon after, the first customers came and were asking like, 'Can we give you money to buy the service?' And that's kind of how it kicked it off."

## Key Insights

### What Papermark Does
"Papermark is a document analytics and sharing platform. You kind of turn your document into the link which you later can share, protect with the password, with the watermark, and then get all the analytics so you can see exactly okay someone was on my document for 5 minutes on this slide, 1 minute here."

"Papermark is essentially alternative to DocSend and other data room providers which exist already for 10 years or more but they like don't innovate anymore. They don't produce anything new. They mostly focus on the enterprise customers. That's why the open-source kind of new solution was needed in this market."

### What Open Source Means
"Open source, like the name says, the source code that's powering the project is publicly available. So anyone can look at it, anyone can contribute to it. And the cool thing is that the entire history of the project is also publicly available."

"A lot of developers these days, they want to show off their work. Maybe they can't find a job but they can do open source projects. They can contribute to open source in order to advance their own career."

## 4 Benefits of Building Open Source

**1. Highly Defensible**
"You have nothing to hide behind. You essentially give away the core product for free. There's no need for anyone else to kind of build the same project and charge anything for it because it's essentially already as low as it can get."

**2. Very Scalable**
"There's essentially zero barrier to entry. We have people coming to our project every day, looking at it, either contributing to it, running it for their small teams, or then seeing the open source project and converting actually to papermark.com because they don't want to deal with the self-hosting of it."

**3. Community-Driven R&D**
"Incumbents only have like their employees that basically maintain the software. We have the community that basically looking through the projects, monitoring it, seeing where they can contribute new features. If they find issues, they can immediately swoop in and provide a solution for it. The velocity with the community is just immense."

**4. Secure and High Trust**
"The code can be audited by any third party. You're not hiding behind proprietary software that we need to grant access to someone at a bank that is trying to evaluate whether it would be a great fit for the infrastructure. They can do that very easily by just auditing our open source code and seeing that nothing nefarious is going on."

## Open Source Business Model
"The business model for Papermark is basically you can either self-host it for free or for many of the users that maybe not be tech-savvy that don't want to host it themselves because they don't want to deal with the overhead or the maintenance, we have a hosted version that we charge for."

"Our core software of Papermark is open source and self-hostable. And then if you need advanced features, you can acquire a license and still run it on your infrastructure as a self-hosted version, but just with our enterprise license attached to it."

## Growth Strategy
"I think off the bat, being open source was the right bet for us. Building in public with open source is extremely natural because you have nothing to hide behind already. There's no downside to sharing the small progress even that you're making, even if the features are not 100% complete. Share that on Twitter, on LinkedIn, just with anyone and you'll slowly gather community around that."

"We also participated in this month-long open-source hackathon called Hacktoberfest. There's like a cycle where we build faster, more customers notice that we're building and shipping features whereas the incumbents are slow and like sleeping and then they start switching."

## Open Source Opportunities in 2025
"With the era of AI, founders can target much smaller niches and smaller markets. It just makes it so easy to create a very small differentiated business off of an existing incumbent."

"The key markets that I see today that are being rebuilt is anything that has to do with like a CRM. They have become so large that the software itself is very complex... Why not build a very targeted CRM for veterinarians or office building managers that have a very specific use case?"

"Think about reducing complexity in what existing businesses are there and just build it very simple. Think to yourself: Is there an open source alternative? Does it make sense to build an open source alternative? Is the market massive?"

## Business Numbers
- **Year 1:** $20K MRR
- **Year 1.5:** $75K MRR ("we are getting closer to our first million")
- ~30,000 users (many free)
- ~1,000 paying customers
- 60 contributors
- 7,000 GitHub stars
- 800,000 document views on platform

## Tech Stack
- Next.js with TypeScript (two projects: marketing site + open source app)
- Cursor (AI IDE)
- GitHub
- Vercel (hosting)
- PlanetScale (Postgres database)
- Trigger (background jobs)
- Resend (transactional emails)
- Stripe (payments)

## Cost Breakdown
- 80% on freelancers and founder salaries
- 15% on marketing/growth experiments
- 5-6% on tools

## Key Advice
"Being an open-source alternative to any big incumbent isn't a surefire success. You need to reach at least feature parity with the existing tools in the market and then you need to out-ship them. You need to be better than the current offering in the market. You want to become the clear successor to the incumbents, not just be an alternative that's also there."

From Iuliia: "I didn't know how to code at all and I decided okay I'm going to build the first project. I took existing open source to build on top of and then what I build I also made open source and I feel so much push and support from the open source community and contributors... Just do it open source from the beginning. Try to be part of the community. Help people contribute and they will do the same and you will see how your project grow."

## Resources
- Papermark: https://www.papermark.io/
- Follow Marc: https://x.com/mfts0
- Follow Iuliia: https://x.com/IuliiaDev`
  },
  {
    id: 41,
    title: "How I Built It: $23K/month micro-saas",
    founder: "Andy Cloak",
    app: "Data Fetcher",
    revenue: "$23K/month",
    videoUrl: "https://www.youtube.com/watch?v=NvtsM8Nk72c",
    videoId: "NvtsM8Nk72c",
    thumbnail: `https://img.youtube.com/vi/NvtsM8Nk72c/maxresdefault.jpg`,
    postedDate: "Aug 9, 2025",
    keyInsight: "Build where the users already are - Airtable's marketplace gave instant distribution without needing to build an audience first.",
    tags: ["Micro-SaaS", "Airtable", "API Integration"],
    summary: `## The Story

Andy Cloak built **Data Fetcher**, an Airtable extension that lets users import data from any API directly into their Airtable bases. He grew it to $23K/month with 600 paying customers as a solo founder by leveraging Airtable's built-in marketplace for distribution.

As Andy explains: "I studied engineering at university, but I never loved it. I always wanted to launch my own projects and so I taught myself to code."

Before Data Fetcher, Andy built and sold a TikTok influencer directory: "I was scraping TikTok, selling that data as a SaaS business and that got to a few thousand dollars a month in MRR and I sold it."

The idea came from his own problem: "I was kind of trying to launch like an IPO's newsletter. I was pulling financial data into Airtable to manage it all there and that really sowed the seed for what would then become Data Fetcher years later."

## Key Insights

### The Platform Strategy
"I saw a very similar add-on for Google Sheets called API Connector and they were doing super well. They had like 100,000 users and seemed to be like smashing it. Kind of the perfect lifestyle business."

"The main benefit I guess is distribution, right? So, being on the marketplace, especially being early to a marketplace like that, on a growing platform, you've just got this steady stream of super qualified leads and they trust you because you've been approved by the platform themselves."

### The Sweet Spot
"It's big enough to kind of change my life financially, but it's not such a big opportunity that there's loads of people raising loads of money to come and build like a $100 million business. So it's kind of in this perfect indie hacker opportunity space where it just like sits in that sweet spot."

## 6-Step Framework for Finding Platform Ideas

**Step 1:** Find a growing platform using tools like Exploding Topics

**Step 2:** Find a pain point on that platform - "You can look in their forums, on Reddit, on Twitter. You just want to find that use case."

**Step 3:** Borrow a proven add-on or pattern from a more established platform - "For me that was obviously Google Sheets and Airtable"

**Step 4:** Check you can integrate - "Is there a public API? Is there a marketplace? An extension SDK?"

**Step 5:** Do napkin math - "Work out how many users does this platform have? How common is this problem? And then how much are people willing to pay for it."

**Step 6:** Assess platform risk - "How likely is this platform to build this into their feature set?"

### Platforms to Build On Now
- **Notion:** "It's not the newest tool, but it's still growing like crazy and the API is relatively new"
- **Figma:** "Loads of little opportunities with things like exporting Figma to Webflow to Framer"
- **Avoid ChatGPT/Claude:** "Everyone and their dog is building for ChatGPT and Claude just because there's so much competition"

## Growth Strategy
"I got the first customer after a few days. As I said earlier, just the benefit of being on a platform so early."

"I found that I could see certain use cases coming up again and again, certain APIs that people connecting to. So, I started doing content marketing around those use cases. So writing blog posts, creating YouTube videos on the most popular integrations."

Growth timeline:
- 1K MRR after a few months
- 3K after a year
- 10K MRR after first year (after adding no-code integrations)
- 20K after 3 years

## Business Numbers
- $23K MRR
- 600 paying customers
- 85% profit margin
- Solo founder

## Tech Stack & Costs
- TypeScript and React (extension)
- TypeScript, Postgres, GraphQL, Node (backend)
- Next.js and Tailwind (marketing site)
- Heroku (hosting) - $2,500/month
- HTNA (workers)
- Help Scout (support)
- Plausible (analytics)
- Mailer Lite (newsletter)
- ChartMogul (analytics)
- Total SaaS tools: ~$1,000/month
- Co-working: $150/month

## Key Lessons
"The biggest lesson has been the power of focus over chasing shiny objects. So, over the few years, I've wasted probably 6 months trying to launch side businesses."

"What I do now, it's a bit weird, but I use Claude as kind of like a business coach. So, every time I start to get distracted or I'm not working hard enough, I literally go to Claude and I say, 'Be my business coach and make me focus on the thing that's working and talk me out of trying to launch something new.' And I'm embarrassed to say that it actually works pretty well."

## Key Advice
"I'd tell young Andy to do proper user testing. Do it early and do it often because I wasted almost an entire year without ever speaking to the people that are using what I'd built. And in one afternoon, I found all of these UX issues and solving those, you know, increased the revenue, increase the usage, increased everything almost overnight."

## Resources
- Data Fetcher: https://datafetcher.com/
- Follow Andy: https://x.com/andycloak`
  },
  {
    id: 42,
    title: "How I Used Reddit To Build a $25K/Month Business",
    founder: "Ovnish",
    app: "Save Wise",
    revenue: "$25K/month",
    videoUrl: "https://www.youtube.com/watch?v=3X4VneEHvig",
    videoId: "3X4VneEHvig",
    thumbnail: `https://img.youtube.com/vi/3X4VneEHvig/maxresdefault.jpg`,
    postedDate: "Aug 2, 2025",
    keyInsight: "Reddit is an underrated goldmine - provide genuine value in communities, and users will naturally discover your product.",
    tags: ["Reddit Marketing", "Personal Finance", "Bootstrapped"],
    summary: `## The Story

Ovnish built **Save Wise**, a platform that helps people earn credit card points and airline miles for things they're already buying online. He grew it to $25K/month in just 15 months using Reddit and Facebook groups as his primary marketing channels.

As Ovnish explains: "I've always worked in the tech industry. I've worked at companies like Microsoft and Instagram, Foursquare, and Dropbox. But I eventually left because I always had this voice in the back of my head where I knew I wanted to build something from scratch."

The idea came from his own expertise: "I am really good at figuring out how to find deals and stack coupons and promo codes and earn credit card points online. And at some point it sort of hit me that this is such an incredibly manual process. There had to be a better way to do it."

## Key Insights

### The Failed Marketing Attempts
"I posted on Product Hunt. I posted on Hacker News. I posted on Indie Hackers and I actually got tons of traffic and then quickly realized that none of those people stuck. I think the bounce rate was like 95-96%."

"I probably sent 300, 400 different emails and messages to influencers. I got a single email back out of all of those. Nobody who has an audience or influence cares about a product that is not ready."

### The Breakthrough
"I needed to take a very different approach, a very targeted approach, and to find the people that this product was specifically designed for."

"There were two main platforms that really worked for me. The first was Reddit and the other was Facebook groups specifically."

## 5-Step Reddit & Facebook Playbook

**Step 1: Brainstorm Keywords**
"Brainstorm 5, 10, 15 different keywords, interests, demographics that are the kind of people who would actually use your product online."

Tool recommendation: "The Map of Reddit - you basically enter a single subreddit, and it will search all of Reddit and visually map out all of the different subreddit communities that are related to that particular subreddit."

**Step 2: Observe Before Posting**
"When you join these Reddit and Facebook groups, do not initially post in those groups. What were the kinds of things people were talking about? How were they talking about them?"

**Step 3: Identify Your Goal**
"For each community, you want to identify the goal for posting in that community. It could be that you're trying to understand what other products people use or what other problems people have. You could just be trying to actually get people to try your product for the first time."

**Step 4: Set Up Keyword Alerts**
"Set up keyword alerts on a product like F5bot for anytime people are talking about your product or topic areas. I would get a real-time alert and I would go and read that entire post on Reddit and Facebook."

**Step 5: Be Helpful First**
"Just be as helpful as possible when you're posting online. Once I figured out a way to just organically and naturally be helpful by giving tips to people on how to earn credit card points online, that then earned me the right to also mention my product."

### The Facebook Group Win
"I stumbled upon this group called Rakuten Stacks. How to double dip with Rakuten. And what I realized was there were thousands of people in this group manually looking for these offers that my product could do with a single query."

"I had over 1,500 people visit the website just from posting this spreadsheet in this Facebook group."

### The Reddit Strategy
"Every week or so, I would join that weekly comment thread, post the website, and ask for feedback. And after about three and a half months, I had built out all of the core functionality that members of the community were just straight up telling me about."

"I messaged the moderator back and said, 'Hey, are you still okay with me doing a top-level post?' They said yes. And I went ahead and posted, and it blew up."

## Business Numbers
- $25K MRR
- ~1,500 paying customers
- Tens of thousands of users
- 97% of revenue from lifetime plans (not subscriptions)

### Pricing Insight
"I learned consumers hate subscriptions. The day that I launched a subscription product, I had several emails from members who wanted to buy the pro product asking for a lifetime membership where they were willing to pay for two plus years worth of the pro membership all upfront."

## Tech Stack
- Next.js (frontend)
- Vercel (hosting)
- Azure (data processing, database)
- Retool (data management)
- Clerk (authentication)
- V0 (design) - "the biggest unlock for me in the last 6 months"
- PostHog (analytics)
- ChatGPT and Cursor (AI tools)
- Google Analytics

## Key Advice
"Understanding your target customer and everything about them is even more useful for the marketing part of it and going to market figuring out where do my target customers hang out on the internet. It has been way more impactful for that."

## Resources
- Save Wise: https://savewise.app/
- Follow Ovnish on Twitter`
  },
  {
    id: 43,
    title: "How I Built a $10K/Month SaaS (Beginner Strategy)",
    founder: "Abhishek",
    app: "EUform",
    revenue: "$10K/month",
    videoUrl: "https://www.youtube.com/watch?v=_KaFS4Dxs5k",
    videoId: "_KaFS4Dxs5k",
    thumbnail: `https://img.youtube.com/vi/_KaFS4Dxs5k/maxresdefault.jpg`,
    postedDate: "Jul 26, 2025",
    keyInsight: "Don't invent - find the gap in existing products. Build a simpler, cheaper alternative to validated tools that already have users.",
    tags: ["Micro SaaS", "B2B SaaS", "Typeform Alternative"],
    summary: `## The Story

Abhishek built **EUform**, a Typeform alternative that now makes $11,000 MRR. He discovered the opportunity while working on a previous project and used a simple "find the gap" strategy that anyone can replicate.

As Abhishek explains: "I think anyone can build a business like mine."

## The Origin Story

"I was working on my previous SaaS which was a no code chatbot builder. It was called Bflow and it had 200 users or so. Majority of them were using it because they wanted a conversational form. And when I talked to them and found that they were using it as an alternative to Typeform, I found that Typeform recently raised their pricing."

"So then I found there was like a gap in the market. But pricing is something that I found like that can't be the only reason. So I then searched Twitter, Reddit, Typeform's own forum and all. I found there are like some other features as well that users want and Typeform is not providing."

## The "Find the Gap" Strategy

"In my opinion, the best approach to build a SaaS is you should not invent things. As an indie hacker, as a bootstrap, you can't create the next Uber. You can't create the next Facebook. You need a lot of money for that and VC funding."

"In fact, you should approach the market which is already validated like there are already big players there. So, people are actually using it and then just find the gap."

### The 4-Step Framework

**Step 1:** "Look for a popular tool and search social platforms like Twitter and Reddit with keywords like 'X alternative' where X is basically the product with lots of users."

**Step 2:** "Find the pain points or gaps which they are not solving. It is fine if the pain point is pricing but only if pricing is too high."

**Step 3:** "Reach out to those users with your solution with just a basic landing page explaining your solution. Messaging is the key here."

**Step 4 (Bonus):** "Have a tool to simply easily migrate your competitor's user to your platform with a one click. In EUform we have a landing page where you can paste your Typeform URL and it will generate a EUform within few seconds."

## Building the MVP

"My approach was simple. I didn't actually make all the features that Typeform was providing. We initially didn't do anything which might be like a fancy landing page or a logo or anything like that."

"The first version of EUform had just you can collect some data using fields like name, email, star rating and all. And apart from that you can just download your data as a CSV. There was no integrations with Google Sheet API etc. Nothing was available there."

"This was an MVP that I think I built in 2 weeks and the landing page was a basic landing page that time which just had a 'start using EUform' which used to take you to the EUform builder."

## Business Numbers
- $11,000 MRR
- 35,000+ registered users
- ~500 paying customers
- 35,000 unique visitors per month
- 4 million+ form submissions
- 1.5-2% conversion rate (freemium model)
- 90%+ features are free

## Tech Stack & Costs
- Laravel (backend framework)
- AWS (hosting)
- Cloudflare (security and storage)
- Stripe (payments)
- OpenAI (fraud detection)
- Slite (help docs)
- Gmail (bug tracking)
- Simple Analytics (web analytics)
- Canny (feedback management)
- Mailgun (email)
- Total monthly expenses: ~$1,200

## Ideas Worth Building (From Abhishek)

1. **Canny Alternative:** "This is my personal pain point I have faced because we are a small startup and Canny has recently been trying to go up market. I searched for a lot of Canny alternatives in the market but none as simple as Canny."

2. **Forest App Alternative:** "This is an app where you can build your forest, the digital forest, by doing some habits. And why you should build an alternative right now is if you search with the latest reviews, most of them are one star."

## Key Lessons

"First of all the messaging is important with your app. The message about what your product does should resonate with basically your ideal customer."

"After that it is all about how good your product is and your customer support which will not only keep your existing customers but they will also refer others to your product."

## Advice for Beginners

"If you are young, take risk early because you have less responsibilities and don't neglect marketing. That is important thing."

"Don't build things because you can. If you really want a SaaS business to support your lifestyle, then I think you should first search for what people are looking for and then build it."

## Resources
- EUform: https://euform.com/
- Follow Abhishek on Twitter`
  },
  {
    id: 44,
    title: "My AI App Makes $100K/Month",
    founder: "Nico",
    app: "Neural Frames",
    revenue: "$100K/month",
    videoUrl: "https://www.youtube.com/watch?v=miEUhwSR2-0",
    videoId: "miEUhwSR2-0",
    thumbnail: `https://img.youtube.com/vi/miEUhwSR2-0/maxresdefault.jpg`,
    postedDate: "Jul 19, 2025",
    keyInsight: "AI video generation is the future - being early to a technology wave and building a great product can lead to explosive growth.",
    tags: ["AI", "Video Generation", "Creative Tools"],
    summary: `## The Story

Nico built **Neural Frames**, an AI-powered platform to create music videos. He left his career as a physicist to build this tool, and it now makes $100K/month with a team of five.

As Nico shares: "I've been a physicist in my previous life and was also always an active musician. And in the end of 2022, I started building Neural Frames. It was kind of my first full stack software project ever. And the first year I built it as a solopreneur and now we are a team of five and last month we made $100,000."

## Key Insights

### The Career Change
"Deep down I must say I was never ultra passionate about physics. I was good in it and so I kept on doing it. But I always had the feeling that there would be more for me somehow and I wanted to build something that affects people in the real world."

"In 2018, I ran the first scientific simulations and discovered that I really like programming. When I was done with my PhD in 2020, I joined a deep tech startup working kind of at the intersection of computer vision and physics."

### What Neural Frames Does
"Neural Frames is a tool to create AI music videos. If you're a musician, you need lots of visual content. For every song that you put out, you need visual content to go along with it. And traditionally, visual content is actually kind of hard to produce. So, we try to make this easier."

"Most of our users are hobby or indie musicians, some professional musicians, too. And then there's a lot of people actually that create music now with AI music tools and come to Neural Frames to make music videos for these songs."

### Finding the Idea
"I believe very strongly in the 'around find out' principle. So meaning just do many random things all across the board. Then something magical happens actually when multiple of these things that you've done in the past combine. For instance, in my case, I was doing computer vision and then music a lot. And turns out that these two can meet in the field of AI animation for music videos."

### SEO Validation Tip
"What I find useful to spot ideas is I use SEO tools such as Ahrefs. If you have an idea, try to find a keyword that people might be looking for this idea. If it has a certain volume, let's say more than thousand monthly searches or something and a low difficulty, it means you're on to something because people are searching for something and there's not already thousand solutions for it."

### The Power of Niching Down
"Niching down was a huge unlock for us actually. I had no clear use case. The tagline on the landing page was 'text to video for everyone' which is really not great to be honest."

"Imagine the following scenario. You're a musician. You come to a site, it says 'text to video for everyone' or 'AI video generator' and then you already need to do a mental step. 'Hm, maybe I can do music videos here,' right? Some people will not do this. So, you lose already some people versus you come to a site, it says, bam, 'this is the platform to create music videos.' This is what you've been waiting for, dear musician."

## Growth Strategy

### The Hacker News Launch
"The first internet money I made with a post on Hacker News. I posted on Hacker News kind of a week after I set this live. The whole product looked terrible. I think this actually resonated with the crowd on Hacker News who are kind of, you know, a bit nerdy and it didn't look like a commercial product at all."

"It reached, I think, top six on a Sunday which just blew up my phone. I was having dinner with friends and saw 350 people in the last 30 minutes on the site and ran home to try to keep the GPUs alive."

### The Indie Hacker Card
"I played the indie hacker, solopreneur card aggressively. In the footer of the site that says 'no VC money, just a tiny company in love with text to videos.' I tried to keep it very personal. My photo was everywhere. I recorded the YouTube tutorials and I think there is some value in that. I think people buy from people and not from companies."

## Business Numbers
- $100K/month revenue
- ~1,500 paying customers
- ~100,000 monthly active visitors
- 1.5 million videos generated on the platform
- Team of 5

## Tech Stack & Costs
- Cursor (coding)
- Python (backend)
- Next.js (frontend)
- RunPod (GPUs)
- Fal (text-to-video APIs)
- PostHog (analytics)
- Slack (communication)
- Linear (task tracking)
- Notion (documentation)
- Ahrefs (SEO)
- Intercom (customer support)
- Email Octopus (newsletters)
- Custom Telegram bot (server alerts)

### Monthly Costs
- GPUs and text-video APIs: ~$45,000/month
- Servers, storage, hosting: ~$5K/month
- Cursor: ~$1,000/month
- Email Octopus: $300/month
- Fal: $200/month
- PostHog: $120/month
- Ahrefs: $110/month
- Intercom: $100/month

## AI Opportunities in 2025
"Customizable media at the moment is very interesting. I would love to have an AI podcast generator."

"Voice mode and audio interface is very interesting. I would love to have an executive coach who I can talk to on my way to the office and just it has access to my calendar and knows what's up."

## Key Advice
"Don't be scared. There's really no reason to be scared to be honest because there's nothing to lose. You will learn so much by switching careers, by building something your own that you will easily make up for it later on, even if it doesn't work out."

"People should also not be scared of the technical challenges. It's never been easier to build something. It's incredible. With these AI tools, you feel like a superhuman."

"The most important part is try to solve a problem and just focus on solving the problem for somebody. Somebody pays for a problem solved. They don't pay for the tech around it. They don't care about this."

## Resources
- Neural Frames: https://www.neuralframes.com/
- Follow Nico on Twitter`
  },
  {
    id: 45,
    title: "I cloned 3 apps and now make $35K/month",
    founder: "Samuel Rondo",
    app: "Multiple Apps",
    revenue: "$35K/month",
    videoUrl: "https://www.youtube.com/watch?v=8BtHk-oNlN0",
    videoId: "8BtHk-oNlN0",
    thumbnail: `https://img.youtube.com/vi/8BtHk-oNlN0/maxresdefault.jpg`,
    postedDate: "Jul 12, 2025",
    keyInsight: "Cloning successful apps for different markets or with improvements is a valid strategy - you don't need to invent something new.",
    tags: ["App Cloning", "Portfolio Strategy", "Multiple Products"],
    summary: `## The Story

Samuel Rondo runs three apps making $35K/month combined. He taught himself to code on YouTube and built his business by finding successful apps and making them slightly better.

As Samuel explains: "I used to be an optician and I had zero coding experience. At the time I wanted to rebuild a tool I was using for Instagram, but this time I wanted to build it myself using code. I ended up following a 15-hour course on YouTube."

His philosophy: "If it's already successful, I know it's validating."

## Key Insights

### Learning to Code
"Every time I learn something new in the course, I immediately try to apply it to that tool I was building. So if you just watch a course, most of the time it's not enough because you end up losing yourself in the languages that you will probably never use."

### Modern Approach to Learning
"If I were 18 years old now, I don't think I would learn to code the traditional way. I would probably just use AI coding tools. And with AI today, you can literally build like 90% of most apps."

## The Clone Strategy

### Core Philosophy
"I'm someone a bit lazy and I don't have unlimited energy. So I have one rule that is really crucial for me is to never build something that doesn't already exist and isn't already successful or at least getting some traction. So this way I reduce my chance of failure and I increase my chances of success."

### 4 Key Filters
1. **"I will use it myself"**
2. **"I can see that it already works"**
3. **"They are not spending thousands on marketing, meaning there is a true demand"**
4. **"The product is simple enough to maintain"**

### Validation Process
"The most important thing I look for is traction. The best signal you can find on Twitter is when founders share their MRR screenshot or Stripe screenshot. It's the ultimate proof that the tool is working and that people are paying for it."

"I use Ahrefs to check their traffic sources. Are they getting customers only from ads or are they also ranking on SEO? If they are growing with both ads and SEO, that's a very good sign because it shows a strong demand and it's usually easier to replicate their success."

### Story Short Case Study
"I saw a post from a guy building a tool to automate posting faceless video on YouTube, TikTok, etc. And the numbers were crazy. So I started to investigate - is it hard to build and where is the traffic coming from?"

"The really good thing with this one is all the traffic was from Facebook ads which means I can replicate it literally in a week because Facebook ads you just have to start it and you have the traffic. So I went for it. I built the tool, launched ads and Story Short grew very fast."

## The Three Apps

1. **Usimus.com** - LinkedIn scraping tool
   - $15,000/month
   - ~10,000 customers
   - Costs: ~$4,000/month

2. **StoryShort.ai** - AI video generator for TikTok and YouTube
   - $20,000/month
   - ~4,000 customers
   - Costs: ~$5,000/month

3. **Capacity.so** - AI coding tool
   - $900/month (brand new)
   - ~50 users

## Growth Stack

**Step 1: Start with Ads**
"I always start by running ads. It's always the first thing I do. So I do it on Google and Meta depending on the product. It's the fastest way to validate and test the market."

**Step 2: Build SEO**
"As soon as I get some traction with ads, I move to the second part of the growth, which is SEO. I think too many apps rely only on ads and never got a single visitor from Google. Of course, SEO takes time, but once it works, it's almost free traffic and it compounds."

**Step 3: Faceless YouTube Channels**
"I even created a feature inside Story Short for this. The idea is that Story Short will automatically publish daily UGC style video about your product on YouTube channels, TikTok and Instagram. You can create multiple channels that talk about your product every day on autopilot."

**Step 4: Affiliate Marketing**
"Not only does it bring clients at a fixed cost, but it also creates virality because I have many people doing a YouTube video about Story Short, writing articles. So it brings SEO results and people are more likely to share your product if they earn a commission."

## Tech Stack
- Next.js and Node.js (coding)
- Ahrefs (SEO analysis)
- Outrank.so (automated article writing)
- Vercel (deployment)
- Stripe (payments)

## Key Lessons
"What really surprised me is that you don't need to innovate. You just need to see what is working on X, in communities, on forums, and build your own alternative, your own version of a product."

"If you like the product and see that it's working, just clone the idea, build an MVP in two weeks and launch ads immediately. I think people are always over complicating this but simple boring tools are what makes the most money I think."

## Advice for Beginners
1. Use AI coding tools
2. Spend time learning Google Ads and Meta Ads
3. Launch as soon as possible - "Skip the boring parts of building a SaaS like the password reset pages, settings pages. Just launch the minimal basic product and run ads to test demand right away."
4. Once you get traction, focus on SEO
5. Automate as much as you can

## Resources
- Usimus: https://usimus.com/
- Story Short: https://storyshort.ai/
- Capacity: https://capacity.so/
- Follow Samuel on Twitter`
  },
  {
    id: 46,
    title: "My Side Project Makes $15K/Month (Quit My 9-5)",
    founder: "Ben Boz",
    app: "Tech Lockdown",
    revenue: "$15K/month",
    videoUrl: "https://www.youtube.com/watch?v=ZGwQoRw7mh8",
    videoId: "ZGwQoRw7mh8",
    thumbnail: `https://img.youtube.com/vi/ZGwQoRw7mh8/maxresdefault.jpg`,
    postedDate: "Jul 5, 2025",
    keyInsight: "Digital wellness is a growing market - helping people block distractions and control their tech usage is a real problem worth solving.",
    tags: ["Digital Wellness", "Productivity", "Side Project"],
    summary: `## The Story

Ben Boz built **Tech Lockdown**, a platform that helps adults block websites and apps and be more intentional with their internet use. What started as a side project grew to $15K/month, allowing him to quit his 9-5 after being laid off.

As Ben explains: "Tech Lockdown is a platform that helps adults block websites and apps and just be more intentional with their internet use. It started out as a side project, but I was actually laid off in 2023, and I had to make the decision to either go full-time on my side project or accept a job offer."

## Key Insights

### The Origin Story
"It ultimately started back in 2020 when work from home became normalized and everyone was just getting way too much internet time. So, I decided to set up guardrails around my own internet use. I found out that it's just really hard to do that."

"I spent a ton of time researching and kind of putting together my own system that would work well for me. And then from that, I just distilled that into a YouTube video and a Reddit post. And I was shocked by how many people were messaging me and emailing me and asking me to consult."

### Failed Side Projects Before Tech Lockdown
1. **Lead generation platform for freelance developers:** "I just got way too obsessive over like the colors on the website and the logo and the name of it and I just didn't think about the business model enough or how I would get customers."

2. **Landing page builder:** "I didn't really think about how I'd launch it and I burnt myself out before launching it. I over complicated it."

3. **Web agency:** "Did that for about 2 and a half years, but it was just really difficult, a hard business to run."

### What Made Tech Lockdown Different
"I didn't start off trying to make a side project. It was genuinely something that I was passionate about and I was trying to solve a problem."

"I also didn't over complicate the logo and the marketing and all that. I actually didn't have a logo until I had a few hundred customers."

"It was actually really helpful to have an audience who was really focused on that topic, too. So, that when I actually worked on something, I felt like I wasn't just like throwing something out there into the ether. I knew that someone would use it eventually."

### The Layoff Decision
"I got laid off and I had kind of already planned to leave in September of that year. The income from Tech Lockdown was like $3,000 at that point, which would not have covered my expenses."

"My natural instinct was to go back to this like safety net, which is a W2 income. But I figured I'm only going to get this opportunity probably once. Let me give it a good shot."

"I ended up doubling down on Tech Lockdown, and I'm glad I did that because it's grown by 5x since I was laid off."

## Building with Limited Time

### Morning Routine
"I've formed a habit of waking up really early in the morning, prioritizing like development tasks and stuff that just required more focus and attention in the morning. So, I would do that, you know, between like 5:30 and 8:00, 8:30."

### Evening Work
"If I worked on anything in the evening, it might be more like marketing related because I could do those kinds of tasks without having to be hyperfocused and alert."

### Pick Your Channel
"If you're juggling a full-time job and you're also trying to do customer acquisition through marketing, you should pick a channel that is energizing to you and that you can do reliably and that you don't dread doing. So for me, that was content marketing."

## Growth Strategy

### Content Marketing
"My core strategy was just to write really well researched and helpful content. I'm going to give it away for free and it made it really easy for people to just share the stuff that I was writing."

### The Viral Guide
"I made a guide on how you can convert an iPhone into a dumb phone cuz I know there's this audience of people that are just kind of fed up with their smartphone and they're tired of being addicted to it. That article alone, it's one of the top performing guides that I've ever published and it's been read hundreds of thousands of times."

### Reddit Strategy
"The thing with Reddit is you can't be overly promotional. So you have to be a little bit more subtle. So if I made like a YouTube video or I made a guide, I would put like all of the good stuff in that Reddit post. I would kind of just tack on a reference to like the YouTube video or the guide."

"More people engaged with it. So it was more likely to go to the front page. And then at the same time, there's a lot of people that want to explore the topic further."

### Authenticity
"A lot of my competitors are kind of these faceless apps or companies. They look really corporate but maybe don't look so trustworthy. It helps to just put your face on it and own what you're building. And when I write about content, I'm not saying 'we', I'm saying 'I'. I'm not pretending to be a big company when it's just me working on a project."

## Business Numbers
- $15K MRR
- 1,300 customers
- 2 million+ organic visitors in last 2 years
- 20,000 email contacts
- Pricing: $15/month or $10/month (annual)

## Tech Stack
- Supabase (database and authentication)
- SvelteKit (web framework)
- Vercel (hosting) - $20/month
- Mail Gun and Elastic Email (~$150/month)
- Google Gemini
- Ahrefs (light plan)
- Plausible Analytics
- 70%+ profit margin

## Playbook for Finding Side Project Ideas
1. Pick an idea you can make a very simple version of
2. Start by building an audience before the product
3. Build an audience interested in that specific topic
4. Choose something you're genuinely passionate about

## Key Advice
"Make sure that you have a way to get customers. I think the customer acquisition problem is a thing you have to solve before you leave your job. And you have to have a plan that you can kind of throw gasoline on."

"I wouldn't start a side project just because you hate your job and you just want to work for yourself. It's really not that glamorous being your own boss. If you have a problem with your job, maybe just make your full-time job getting a better one."

"Start a side project when it's something you're genuinely passionate about, but you would almost work on for free if you couldn't make money with it."

## Key Lesson
"It's actually not that hard to make money with a side project. The hard part is making it into a viable business. There's a lot of side projects that are basically just selling a dollar for 90 cents and when they actually go to scale, it doesn't work out."

"It's less about being really innovative or inventive. It's just coming up with a smart strategy where your customer acquisition cost is low enough that you can build it into a sustainable business."

## Resources
- Tech Lockdown: https://techlockdown.com/
- Follow Ben Boz on Twitter`
  },
  {
    id: 47,
    title: "I make $40K/month with this one website",
    founder: "Angus Chang",
    app: "Bank Statement Converter",
    revenue: "$40K/month",
    videoUrl: "https://www.youtube.com/watch?v=EF3uyvHHBfM",
    videoId: "EF3uyvHHBfM",
    thumbnail: `https://img.youtube.com/vi/EF3uyvHHBfM/maxresdefault.jpg`,
    postedDate: "Jun 28, 2025",
    keyInsight: "Simple, boring tools can make serious money. Build an MVP fast, get real users, and improve based on feedback - not social media hype.",
    tags: ["Utility Tool", "Finance", "Solopreneur"],
    summary: `## The Story

Angus Chang built **Bank Statement Converter**, a website that does just one thing - converts PDF bank statements to Excel. He launched it in 2021 and today it makes $40,000/month as a completely solo operation.

As Angus explains: "I built a website that literally does one thing. I bootstrapped this entire business by myself."

## The Origin Story

"I had just quit my job and I knew I was going to build some sort of product. On the side, I was thinking, I've got X amount of money in the bank. I want to know how long I can continue living the way I'm living."

"To do that, I wanted multiple years of bank data. I wanted it all in a nice Excel spreadsheet. And that was a lot harder than I thought it would be because my bank only provided PDF bank statements."

"So, I wrote some code to get the transaction data out of the bank statements and that was also really hard. So, I figured it must be a real problem."

## The Validation Approach

"Often I like to just make an MVP as quickly as possible, get it into production and then get it in front of real users. Me and a friend worked on it for about a week. We got a domain, we launched it, and then we bought Google ads to get people to start clicking into the domain."

"Immediately people started uploading bank statements, which kind of validated the problem."

## Finding Simple Ideas

"I think a good way is if you encounter the problem yourself or a pain point yourself. Another way is your colleagues or friends complain about stuff at work."

"But sometimes I just get ideas and I just think of the smallest possible way to implement that idea. Get it out there and see if people will use it. If it takes you like one or two weeks to make an MVP, it's not that much of a risk anyway. So, you might as well just build it."

## The Marketing Journey

"At first, I bought Google search ads. These were good for getting the initial users, but I was never able to run an ad campaign profitably. I would spend maybe $1,000 on ads and bring in about $300 in sales."

"I tried blogging and building in public. That gets quite a lot of attention. However, I don't think I get many users from doing that because my users don't seem to be using Twitter or reading my blog."

"I also tried sending out cold emails and in 3 months of doing that, I got one sale and I also annoyed a lot of people."

### The Turning Point

"After about 6 months of running Google search ads, I decided I'm just not going to do this anymore. I cut the ads and I thought maybe go back to work."

"Interestingly, I stopped paying for ads. So, I knew everyone who was clicking on the website was an organic user. And I noticed I started getting new users. I'd get like two or three new signups a day."

"From that point on, I kind of focused on improving the product. When customers complained about things, I would fix them. I just basically focused on doing what the customers wanted."

## Business Numbers
- 2021: Launched
- 2022: $6,000 MRR
- 2023: $14,000 MRR
- 2024: $27,000 MRR
- Today: $40,000 MRR
- 75,000 total users
- ~1,000 paying customers
- 40,000 monthly traffic
- ~$39,000 profit (out of $40K revenue)

## Tech Stack
- Kotlin (core engine, JVM language)
- Next.js (frontend)
- Brevo (transactional emails)
- AWS EC2 (backend hosting)
- Netlify (frontend hosting)
- Stripe (payments)

## The Solopreneur Reality

"When you work for a company, you kind of spend a lot of time playing, refactoring code, trying out databases you think are cool. But when you work for yourself, you quickly realize these things don't make any money and potentially are a waste of time."

"Being a solopreneur can be pretty depressing. When you go from making maybe like $10,000 a month to $200 a month and you're basically hanging out with no one."

"In the first two years, I was working extremely hard on the business and making basically no money. What I realized was that those first two years of hard work, you don't get paid much, but you kind of get the money for that hard work in like years four and onwards."

## Key Advice

"SaaS is an excellent business model. Make sure you save enough money to survive multiple years of no income. If you only have enough money for a few months of runway, you're probably not going to make it. It took me two or three years before I could pay rent with the revenue I was getting in."

"Ignore social media. A lot of people think they need to build a following on social media before building a business. I think it's a waste of time. Just focus on the business. Focus on the product. Get some real users. Improve the product."

"Don't make a Facebook, Instagram, and Twitter page for your business. I see a lot of people do this, and I think it's a waste of time as well."

## Resources
- Bank Statement Converter: https://bankstatementconverter.com/
- Follow Angus Chang on Twitter`
  },
  {
    id: 48,
    title: "How I Used Reddit to Hit $17K MRR (With ZERO Audience)",
    founder: "Diego",
    app: "App Alchemy",
    revenue: "$17K/month",
    videoUrl: "https://www.youtube.com/watch?v=BaWUPamqWlA",
    videoId: "BaWUPamqWlA",
    thumbnail: `https://img.youtube.com/vi/BaWUPamqWlA/maxresdefault.jpg`,
    postedDate: "Jun 21, 2025",
    keyInsight: "You don't need an audience to grow a SaaS. Reddit gives you precise targeting and massive reach for zero cost - if you provide value first.",
    tags: ["Reddit Marketing", "Zero Audience", "AI Tools"],
    summary: `## The Story

Diego built **App Alchemy**, an AI tool for designing mobile apps, to $17K MRR in just 4 months with less than 100 followers on X. His secret? A killer Reddit marketing playbook.

As Diego explains: "I think anyone can build a successful business without an audience. I got my first $1K MRR and even more purely off Reddit."

## The Origin Story

"A few months ago, I actually wanted to build my own mobile app and I paid a designer on Upwork for a decent design and it was hundreds of dollars and every time I wanted to make like a little change, I had to pay him extra."

"I thought that if I could build an AI tool around this, I could save people a lot of time and money."

## What App Alchemy Does

"My app is called App Alchemy and it allows you to build mobile app designs very fast using AI. It's like Cursor but for designing mobile apps."

## Building Fast

"I built the simplest MVP. I ended up building the MVP in about 2 weeks and I started marketing right away on Reddit."

### Tips for Building Quickly

"I don't use the newest libraries or frameworks because AI is always going to be a lot better at the libraries that are the most used on the web."

"I use a lot of UI component libraries like Chakra UI or Ant Design. This allows you to prototype a lot faster and to make your website look nicer, too."

## The Reddit Marketing Playbook

"Reddit is probably the most underrated marketing channel for two different reasons. One, you can get a lot of reach for no cost. The other reason is that compared to all the other platforms, you can get very precise targeting."

"In Reddit, there is a subreddit or community for pretty much everything. So, you can choose a lot of different communities that are related to the product you're selling and target the actual users that are interested in what you're building."

### Step 1: Become an Active Reddit User

"If you're not using Reddit already, start using it daily. This has two different purposes. The first one is becoming familiar with the platform and seeing what kind of posts do well. The second one is warming up your account because any posts that come from a newly created account will be automatically filtered out by Reddit."

### Step 2: Create a List of Subreddits

"This one is very important because you need volume for this to work. The more the better and you can go broad and narrow."

"The one I recommend the most is using a Reddit ads tool, and you don't need to pay for any ads for this. You just go to the Reddit ads page, create a new campaign, and when you go to the targeting section, you can look for communities."

### Step 3: Create a Killer Organic Post

"The reason that most people fail on Reddit is that their posts don't feel natural. They feel very pushy and they make it completely around their own product."

"What you want to do instead is provide a little bit of value in your niche and then you can plug or link your product in the middle of the post."

"Every successful post starts with a catchy attention grabbing headline. What most people do instead is that they mention their new product or they announce it like they announced the launch. And this is not what you want to do."

"After the catchy headline, you still don't want to mention the product immediately. You want to provide some value in your niche first."

### Step 4: Post on Multiple Subreddits

"Volume here is super important because that increases the chances of one of your posts getting to the Reddit front page and that is going to give you like a lot of traffic."

"Even if that doesn't end up happening, let's say that you post on 10 different subreddits and each of the posts gets on average around 10K views. That's a total of like 100K views already, which is really good."

### Step 5: Repeat and Experiment

"You should be trying different types of posts to see what does better in your niche. You can try videos, you can try case studies, and you can try other types of posts as well."

"A good rule of thumb is posting two to three times per week. Anything more than that will probably get you banned."

### Pro Tip for Strict Subreddits

"For more stricter subreddits that don't allow you to link your product, I would recommend linking an extra product beside yours. Plug like a complimentary product. So for example, for mine is like a design tool. So Cursor complements it very well because it's for development. So I usually plug that one after mine and that way your chances of getting banned or your post being removed for self advertisement is a lot lower."

## Business Numbers
- $17K MRR
- 1,000+ paying customers
- 20,000+ signups (purely from Reddit)
- 20,000 monthly traffic
- 1 million+ eyes on product
- $0 spent on marketing
- ~70% profit margins

## Tech Stack & Costs
- Cursor (development) - $20/month
- Next.js and React (frameworks)
- Firebase (auth and database)
- Vercel (hosting) - $40/month
- AI API backends - ~$2,500/month

## Key Lessons

"When it comes to building a SaaS, you should be solving a problem in a growing market. A good example is building a SaaS tool for newspaper owners which like newspapers are in decline, or you can build a tool for vibe coding which only in the last months has been exploding and it's going to keep growing."

"Even at the start, you should be spending a lot of your time marketing instead of adding more features no one asked for."

"As a solo founder or small company, speed is one of your major advantages. So take advantage of that whenever possible."

## Advice for Beginners

"Right now is the best time to build. If you have an idea, get a simple MVP out there and start marketing it as soon as possible."

## Resources
- App Alchemy: https://appalchemy.dev/
- Follow Diego on Twitter`
  },
  {
    id: 49,
    title: "How I Built A $1M Business in 117 Days",
    founder: "Yasser",
    app: "Chatbase",
    revenue: "$6.8M ARR",
    videoUrl: "https://www.youtube.com/watch?v=E_sPvPHwpuk",
    videoId: "E_sPvPHwpuk",
    thumbnail: `https://img.youtube.com/vi/E_sPvPHwpuk/maxresdefault.jpg`,
    postedDate: "Jun 14, 2025",
    keyInsight: "You don't need an audience to go viral. Launch fast, frame every update as a new launch, and ride technology waves before everyone else.",
    tags: ["AI", "Chatbots", "Viral Growth"],
    summary: `## The Story

Yasser built **Chatbase** from zero to $1M ARR in just 117 days, and it's now at $6.8M ARR with 10,000+ paying customers. He launched to just 16 Twitter followers and it went viral.

As Yasser explains: "I built Chatbase to 7 million in ARR with no funding. I launched it 2 and a half years ago as a solopreneur to my 16 followers on Twitter and it went viral."

## The Origin Story

"I followed the bootstrapping movement on X like Peter Levels, all those guys. I was doing actually internships in FAANG companies but once I got there I realized maybe it's not for me. I looked at people five, ten years ahead of me in their career and it was not something that I was looking up to."

"I saw people doing demos of how you can build a ChatGPT for your data and stuff like that but no one was building a product around it. I knew like this is a good idea. I didn't do any validation or anything. I just said if I don't do this someone else will."

"All of this was happening in my final year of university. When I saw the first sale and then like it kept going... I had like two or three sales every day and I dropped out."

## The Viral Tweet Breakdown

"I think this was like my third tweet ever in my life. Three things made it work well:"

**1. Familiar Interface:** "The streaming interface where the text is streaming in a chat interface. This was like a very ChatGPT thing which at the time was going viral."

**2. Minimize Seconds to Aha Moment:** "It's a very simple demo, right? But it just shows you exactly what I built was capable of in like the first 20 seconds."

**3. Mention Your Tools:** "2 and a half years ago, there was a bunch of new AI companies, AI tools starting out. No one had any customers because they're all new. When I mentioned LangChain and Pinecone and stuff like that, it made sense for them to push it too because no one else was building stuff like this on their platforms yet."

## The Build in Public Playbook

"The easiest thing is just to share what you're doing every day. First two or three months if you're not lucky, it will just be you practicing what works and what doesn't."

"People need to see your face a lot. Preferably, if you can do videos too, post them on X. A few people in the build in public space are doing that and they're doing very well because not enough people are doing that so you stand out more."

"Frame it as like I'm building something. I'm learning a lot along the way. I'm going to take you on that journey."

"An important part is not to be boring. I think it's better to be more personal. Share your personal story. Have a personality, have controversial takes maybe if it's something you actually believe in because that's how you get people to notice you."

## Growth Tactics

### Frame Every Launch as New
"After the first initial viral moment, I kept adding more features and with every new release, I would frame it as a new launch. Some people when they tweet, they frame the second or third launch as feature launches. So if someone new is looking at that, they don't have any context. I try to frame every single launch to make it make sense to new people that don't know me, that don't know Chatbase."

### Creative Viral Strategies
"I was going into subreddits of books, I would create a ChatGPT for their book. It was for free. I was losing money on this. The only point of doing this is to have my domain opened by a lot of people so I get more domain authority."

"I did that for a lot of influencers too. I did this for Paul Graham, for Naval."

### Sponsored Posts
"Sponsored posts were very big. If I'm not launching something today, then I have to do a sponsored post with a big page. We did one with a page on LinkedIn that day. I think we did $4,000. Sponsored posts, if you structure them well, they're a very good way to get your product out there."

## Business Numbers
- $6.8M ARR (and growing fast)
- 10,000+ paying customers ($40-$500/month)
- ~600,000 registered users
- Zero to $1M ARR in 117 days
- 100% PLG (product-led growth)
- No funding

## Tech Stack
- Vercel (hosting)
- Vercel AI SDK (AI infrastructure)
- Supabase (database)
- OpenAI, Anthropic, Cohere, Google Gemini, Groq (AI models)
- Stripe (billing)
- Dub (affiliates)
- Mintlify (documentation)

## Advice on Building AI Agents

"If you want to build products, go to sources like OpenAI's cookbooks or their documentation. Read about their agents SDK. Do the same with Vercel's AI SDK which is very powerful."

"Maybe a good idea is to find something that you can't build yet and the only bottleneck is the AI model itself. Start building that and bet that in a year you're going to have GPT-5 which is capable of doing that and then you're going to have one full year head start on everyone else."

## Key Lessons

"There's so many different ways to build a good company. This is actually good because this means that you don't need a lot of experience to start a company."

"The people that give good advice will tell you the same thing. They would give you what they think is right, but in the end they will say actually you should trust your gut mostly because you know your situation more than me."

## Advice for Beginners

"I wasn't thinking big enough in the beginning. My goal was to just get my 10K, move to Bali, live the indie hacker lifestyle. I just realized like why not shoot for the stars? Why not build the first 100 million ARR bootstrap company."

"I was too worried because everyone was saying it's like a ChatGPT wrapper. It's not going to work. I think I wasn't aggressive enough. I was too shy about what I'm building. Just aim higher."

## Resources
- Chatbase: https://www.chatbase.co/
- Follow Yasser on Twitter`
  },
  {
    id: 50,
    title: "This App Makes $25,000/Month",
    founder: "Lucas Herman",
    app: "Stage Timer",
    revenue: "$25K/month",
    videoUrl: "https://www.youtube.com/watch?v=HBCwzfFbopE",
    videoId: "HBCwzfFbopE",
    thumbnail: `https://img.youtube.com/vi/HBCwzfFbopE/maxresdefault.jpg`,
    postedDate: "Jun 7, 2025",
    keyInsight: "Simple tools can make serious money. A countdown timer sounds trivial, but professionals in video production need it constantly and will pay for reliability.",
    tags: ["Events", "Presentations", "Family Business"],
    summary: `## The Story

Lucas Herman built **Stage Timer**, a simple countdown timer app for live events and video production, into a $25,000/month business. He runs it as a family business with his wife in Germany.

As Lucas explains: "I turned a simple idea into a SaaS business and eventually was able to quit my job and work full-time. We have reached $25,000 revenue per month and we have a total of 20,000 users."

## The Origin Story

"It was a bit of an accident. I was in my friend's studio and he used this very old flash app on an old laptop and he remote controls everything from his nice table. And then to start a timer, he has to get up, walk into the other room and hit a button and walk back."

"My web developer mind immediately says surely there's a better way."

## What Stage Timer Does

"Imagine you are on a TED talk and you have the speaker on stage and they want to know how much time do I have left in my presentation. So you put this in front of them and on my computer I have the control interface for this very timer."

"You're holding your microphone too far away. It's not loud enough. So I show you this message like 'hey hold your microphone closer.' It's much easier like this to communicate with your person on stage than holding up a paper sign."

## Validation on Reddit

"I did it on Reddit. I'm building something for people that I don't know. I'm building it for people that are in a video production industry. Where are they? Where do they hang out? I'm looking for a subreddit."

"I put a link in here and I say, 'Hey, try it out. Give me some feedback. What do you think? Is this useful to you?' And people make literally lists that they tell me, 'No, do this. Do this. I've been waiting for such an app.'"

"Because there's no price attached to it on the website, it's also not 'he just wants to have our money.' It works really well. And then the other thing is I don't spam it. One post per subreddit."

## Building the MVP

"My first MVP had basically just one feature which was click on a button here and a timer starts counting over there."

"I use all the technologies I already know. I use JavaScript, I use Vue.js, I use Node.js. If I would have used new unknown technologies, I would have had to learn them, understand them, find out they have limitations I didn't know before."

"I could ship my MVP in 3 days and then build upon it slowly and comfortably in the 1 hour that I had in the evening instead of building on it for 3 months just to have something that is usable."

"Because it was a side project, it took me 224 days to actually get my first dollar. And that's totally okay. It grew from there."

## The Family Business

"After I earned the first dollar and we had our first customers, I thought, well, there's also marketing we need to do and we need to answer these customer service emails."

"My wife was at a point that she didn't want to do her old job anymore teaching. And I said, why don't you join me? Why don't you learn marketing and take over these parts of the business?"

"She does Google ads, she does all the sales emails, she does all the customer support emails and we have an amazing support. I do the product, the finances, the development and kind of the overall direction."

"Sometimes we walk over the street and talk about how we grow Stage Timer or sometimes we just look at any business like how would you grow this shoe business over there. We think about these business terms together which is really fun."

## Growth Strategy

### SEO and Niche Keywords
"We have about 50% of our traffic comes from Google and then a third of our traffic really comes from people recommending our tool to others."

"We have a niche tool, right? Very niche, a niche small enough that most big companies wouldn't really bother with it. But for us as solopreneurs, perfect."

"If you look for 'countdown timer stream deck companions', we created a documentation page that shows very precisely how you use our tool together with this integration for this physical device."

"The trick is the people that do search for this on YouTube, they want to have their question answered. They have a concrete problem and they want to have a solution for it. So they find you and they're so much more likely to purchase."

### Product-Led Growth
"From the beginning I wanted to be like Dropbox. I just made sure every single link that people share, my logo is on it. And not only is my logo just like a picture, it has the name stagetimer.io in the logo. It's literally written there."

"We make it a freemium model. By doing this we capture a lot of freelancers that work in this space and they bring it along to the events that they're invited to."

## Business Numbers
- $25,000 MRR
- 20,000 total users
- 4,400 paying/have paid customers
- 86,000 unique visitors per month
- 80-90% profit margin

## Timeline
- November 2020: First commit (during COVID)
- 224 days later: First dollar
- 2022: Wife encouraged him to quit ($3K/month)
- September 2023: Hit $10K MRR

## Tech Stack & Costs
- JavaScript, Vue.js, Node.js
- Sublime Text and Sublime Merge (development)
- Airtable (CRM)
- Postmark (email sending)
- Server/infrastructure: $280/month
- Tools/services: $250/month
- Paid ads: $1,400/month

## Who Uses Stage Timer

"We had TV broadcasts that do broadcast for elections and they need to time every speaker. We had horse races buy it. Turns out almost everybody needs a timer and the iPhone timer won't cut it because it's just on your little iPhone screen and you need something that one person clicks start and five other people can see it."

## Key Lessons

"There's more opportunities out there than we think. There's so many solutions that still have interfaces from 1999. Ugly as heck to use. People complain about it all the time, especially if you go outside the developer bubble."

"I believe there's so many like $1 million niches with little apps that you can build. The only hard thing is to find them. Once you found them, it's just this great opportunity that's open before you to build a simple app."

## Advice for Beginners

"Just get started. There's a way even in this country to build a simple business, to scale it up and to understand how it works. Everybody is just like getting by somewhere and you can do it too."

## Resources
- Stage Timer: https://stagetimer.io/
- Follow Lucas Herman on Twitter`
  },
  {
    id: 51,
    title: "How I Built It: $15K/month Mobile App",
    founder: "Sebastian Ro",
    app: "Habit Kit",
    revenue: "$15K/month",
    videoUrl: "https://www.youtube.com/watch?v=gpn1jEoWT4A",
    videoId: "gpn1jEoWT4A",
    thumbnail: `https://img.youtube.com/vi/gpn1jEoWT4A/maxresdefault.jpg`,
    postedDate: "May 31, 2025",
    keyInsight: "App Store Optimization (ASO) is a powerful growth lever - ranking for the right keywords can drive massive organic traffic without a big marketing budget.",
    tags: ["Mobile App", "ASO", "Habit Tracking"],
    summary: `## The Story

Sebastian Ro built **Habit Kit**, a visually appealing and simple habit tracking mobile app, to $15K/month. He quit his corporate programming job to pursue indie development, struggled for 6 months, went back to work, then finally hit $15K MRR and quit again for good.

As Sebastian explains: "I quit my job with no idea, just 12 months of runway."

## The Journey

"After 3 years of being stuck in the same project at my regular job, I decided it was time to quit my job and focus on indie development for at least 12 months."

"The first 6 months were really challenging. I didn't have a lot of revenue so I kept in touch with the people at my old job and after my 12 month deadline was over I decided to go back to my old job and continue doing my app business on the side."

"I felt like a failure and like a success because I had at least some revenue. It's already a huge success if you have a side business with $1,000 revenue."

### The Timeline
- End of 2023: Reached $3,000 MRR
- End of 2024: Achieved $15,000 MRR
- Start of 2024: Quit job the second time

"I'm finally able to have complete control over my time and work on whatever I want."

## What Habit Kit Does

"It's a visually appealing and very simple habit tracking mobile app that helps users build and maintain their daily habits."

"When I started, I focused on the core functionality. It was a tile-based grid chart for the users' habits with a clean and super simple interface."

"I built it with privacy in mind. All data is stored locally on the device. There's no sign in required, no authentication. The users have complete control over their data."

## Building the MVP

"I had the idea for Habit Kit in summer of 2022. I immediately started building the app and I used Flutter for this. That's a cross-platform framework that allows you to deploy your apps to iOS and Android with a single codebase."

"I also decided to share the development progress on my social media. And after posting the first screenshots and seeing a positive reception, I knew that I should really hurry up and bring the app to the app store."

"I kept it really simple and clean and just banged it out in 2 months."

## App Store Optimization (ASO)

"App Store optimization is basically editing your app store metadata like keywords, app name, or subtitle or even the screenshots in the way that you're more likely to rank in the top spots when people search for certain keywords."

"I'm focusing on the habit tracker keyword and that's why I put it right at the start of my app name."

### Gathering Reviews
"I instantly show the native review dialogue right after the first habit was checked off for a user. So that's their first success moment, and I asked them right at this situation and most people just gave it five stars and you gain a lot of reviews and ratings."

## Growth Strategy

"In the beginning, building in public was huge for me. I shared my journey and development process across multiple platforms like X, LinkedIn, Blue Sky, and Threads."

"I tried to create authentic content, share about my wins, failures, successes and so on that led to unexpected opportunities, being guest on podcasts, being featured on videos or having good connections to other app developers."

"I run a super simple and low-budget Apple Search Ads campaign. I only spent $100 per month on it. I just used this as a potential ranking boost strategy because I have the hope that Apple favors developers who also run ads on their platform."

## Business Numbers
- $15,000 MRR
- 300,000+ downloads (iOS and Android combined)
- 2,000+ reviews and ratings
- Top 5 ranking for "habit tracker" in multiple countries

## Tech Stack
- Flutter (cross-platform framework)
- Cursor (AI-powered IDE)
- Astro (keyword research for ASO)
- App Figures (analytics and marketing)
- Revenue Cat (subscriptions and purchases)

## Costs
- Revenue Cat: 1% of revenue
- Other tools: ~$200-300/month
- No employees, solo operation
- 90%+ profit margins

## Key Lessons

"I was super surprised that I was able to compete in the App Store and Google Play with bigger companies or people that are super long on the app store. I reached top five in super important keywords which drives a ton of organic traffic to my apps."

"If you manage to secure a good ranking on the app store, you don't need a big marketing budget and you can compete with bigger brands."

## Advice for Beginners

"Save money for sabbatical to focus on development of your app business like I did. I saved some money and I just quit my job and set myself a deadline for 12 months to do something that works."

"I couldn't find motivation to code on my own apps after I programmed for 8 hours on my regular job. So quitting my job was actually the only chance to get this started."

"At the end of the day, you can just go back and get another job."

## Resources
- Habit Kit: App Store/Google Play
- Follow Sebastian on Twitter`
  },
  {
    id: 52,
    title: "I Make $100K/Year From 2 AI Side Projects",
    founder: "Ramsri",
    app: "SuperMeme & Question.ai",
    revenue: "$8.5K/month (~$100K/year)",
    videoUrl: "https://www.youtube.com/watch?v=CoqAxV6b6j4",
    videoId: "CoqAxV6b6j4",
    thumbnail: `https://img.youtube.com/vi/CoqAxV6b6j4/maxresdefault.jpg`,
    postedDate: "May 24, 2025",
    keyInsight: "You can build profitable AI side projects while keeping your full-time job - consistency and 1-2 hours daily is enough to build something substantial.",
    tags: ["AI", "Side Projects", "Full-Time Job"],
    summary: `## The Story

Ramsri built two profitable AI apps - **SuperMeme** (AI meme generator) and **Question.ai** (AI quiz creator) - while keeping his full-time job. Combined, they make $8,500/month with 1.5M+ users, and he only spends 1-2 hours per week maintaining them.

He chose to keep his job for lifestyle reasons - family, retired parents, and not wanting the roller coaster of full-time entrepreneurship.

## Key Insights

### Building While Employed
- 1-2 hours daily learning and development initially
- Now only 2 hours on Saturday afternoons
- Apps run on complete autopilot
- AI tools make maintenance easier
- No VC funding, no team needed

### Why Keep the Full-Time Job
- Family stability (kid, retired parents)
- Avoid emotional roller coaster
- Don't want hiring/team responsibilities
- Lifestyle over growth at all costs

### Finding AI Ideas Framework
- Find manual tasks people currently pay for
- Look for tasks AI can enhance or substitute
- Keep tab on where generative AI is headed
- Identify use cases new AI unlocks
- Build before the technology fully matures

## Business Numbers
- SuperMeme: $130K lifetime revenue, 1.5M+ users
- Question.ai: $100K lifetime revenue, 150K+ users
- Combined: $8,500 MRR (~$100K ARR)
- 400 paying customers (SuperMeme)
- 180-200 paying customers (Question.ai)

## Growth Strategy
- Build distribution before building product
- Write blogs and create YouTube videos
- Build in public on LinkedIn daily
- Product Hunt launch (#1 for SuperMeme)
- Social media founder content sharing

## Tech Stack
- Next.js (full stack framework)
- Supabase (backend)
- Typedream (no-code landing pages)
- Windsurf/Cursor (AI coding tools)
- 70-75% profit margins

## Key Advice
- Think like a builder from day one
- Use no-code tools like Lovable, Bolt, Make
- Follow tech updates closely for new use cases
- Chain together existing tools vs months of R&D
- Consistency is the only thing that helped

## Resources
- SuperMeme: https://supermeme.ai/
- Question.ai: https://question.ai/
- Follow Ramsri on Twitter`
  },
  {
    id: 53,
    title: "I Built a $1M SaaS 100% with No Code (Bubble)",
    founder: "Jacob & Alex",
    app: "Faceless Video",
    revenue: "$1M+ ARR",
    videoUrl: "https://www.youtube.com/watch?v=x9TUDb4sLE0",
    videoId: "x9TUDb4sLE0",
    thumbnail: `https://img.youtube.com/vi/x9TUDb4sLE0/maxresdefault.jpg`,
    postedDate: "May 17, 2025",
    keyInsight: "You don't need coding experience to build a million-dollar SaaS - Bubble translates programming into human language that anyone can understand.",
    tags: ["No-Code", "Bubble", "AI Video"],
    summary: `## The Story

Jacob built **Faceless Video** to over $1M ARR using 100% no-code with Bubble. The SaaS automates faceless social media channels - users provide a topic, and the platform writes content, creates videos, and posts daily on autopilot.

As Jacob explains: "My name is Jacob and I built a million-dollar business with no code. I'm a self-taught developer and the co-founder of Faceless Video. It's 100% bootstrapped and I built it from scratch with Bubble and it's now doing over a million dollars a year in ARR."

## The Origin Story

Jacob's co-founder Alex explains how they found the idea: "I was getting a lot of faceless videos on my TikTok algorithm. I had seen a lot of these videos go extremely viral, and my goal originally was just to go viral."

"I realized that consistency was a huge problem. Coming up with new ideas, editing every day became something that was actually pretty difficult to stick to."

"I had an idea because I realized with the advancements in tech that were going on, these videos were simple enough that this could be done automatically. I reached out to Jacob and then Jacob had the idea to make this into a SaaS product instead of an internal tool."

"Looking back, I'm really glad that I let the algorithm guide me. We all are on TikTok and Instagram reels and we see these trends in videos and most of the time we scroll past. But if you take a second to actually analyze what's going on, there are plenty of good business ideas in there."

## What Faceless Video Does

"It's a SaaS that automates faceless social media channels and the user only needs to provide their channel topic. Our platform writes the video content, creates the video, and posts that video on the user's behalf every single day, entirely on autopilot."

"We're generating thousands of videos every single day for users. Some of which had well over a million views, plenty of which have had hundreds of thousands of views."

## Why Bubble Works

"In its simplest form, it translates programming into human language. So you don't need to know how to actually code. You don't need to know code syntax. It's plain English."

"That's the best part of it - anyone can get started and understand the basic frameworks even of programming. Because now that I actually know how to code, I see that it is actually still very much programming just in a more visual human-friendly way."

"They also handle plenty of other important aspects of actually running a web app such as security, scalability, privacy rules, backend management, all these other things that I would not have even known where to begin if I was just coming at it completely fresh or custom."

### Why Stay on Bubble at $1M ARR?

"If it ain't broke, don't fix it. It's kind of as simple as that. We haven't run into any issues that would require a dramatic shift."

"Realistically, all the bells and whistles that developers get through custom code is not necessary for building a successful business. All you need is a great idea, a functioning product, and a great go-to-market strategy, and you can validate really quickly and scale based on that."

## Growth Strategy

"To have success as a B2C app, you need to have viral potential. Your CAC, customer acquisition costs, is pretty low. And so, to spend a lot on ads or other methods of promotion is not really viable for a B2C app."

"We do all of the usual stuff - SEO, ads, influencers, organic content - but the key is really getting your messaging right. It's nothing fancy. It's just good execution."

### The First Viral Moment

"Our first advertisement for Faceless Video was a Twitter thread that we spent like $200 on and we got hundreds of thousands of views and kind of instantly went viral."

"Our biggest growth came when influencers who saw our ads that we'd never even reached out to started promoting Faceless.video on their own because they genuinely believe that their audience would like the product."

"Word of mouth is consistently one of our top five attribution sources. People will just type in 'friend' on our customer attribution thing."

## Business Numbers
- $1M+ ARR
- 1.1M+ total users signed up
- Videos with millions of views
- 10 months to reach $1M ARR
- 6 failed SaaS ideas before this one

## Tech Stack
- Bubble (100% no-code)
- APIs for video generation
- Framer for design
- Standard payment processing

## Key Advice

**Build for scale from day one:** "Build from day zero optimizing for the best case scenario. If 100,000 people signed up today, could your app handle it? Or would you have to rethink your pricing model and your technical debt when that starts to happen?"

**Don't get attached:** "If I didn't go through six ideas before Faceless, I probably still would have been trying to make that first idea work, and it just may not have worked at all. Failing fast is a win-win. There's no lose scenario with that."

**Stay bootstrapped:** "Staying bootstrapped forces you to build lean and really focus on your value. If your idea is valuable to others, then you can scale healthfully. And if it's not, then you can move on and adapt quickly. You have options."

## Resources
- Faceless Video: https://faceless.video/
- Follow Jacob and Alex on Twitter`
  },
  {
    id: 54,
    title: "How I Built It: $9K/Month Micro-SaaS",
    founder: "Leandro",
    app: "Sync to Sheets",
    revenue: "$9K/month",
    videoUrl: "https://www.youtube.com/watch?v=npcL7oRZQlI",
    videoId: "npcL7oRZQlI",
    thumbnail: `https://img.youtube.com/vi/npcL7oRZQlI/maxresdefault.jpg`,
    postedDate: "May 10, 2025",
    keyInsight: "Build one thing that does one thing really well - Sync to Sheets just syncs Notion databases to Google Sheets, and that's enough for $9K/month.",
    tags: ["Micro-SaaS", "Google Sheets", "Notion"],
    summary: `## The Story

Leandro built **Sync to Sheets**, a Google Sheets add-on that syncs Notion databases to Sheets. He built it in just 2 weeks, and after 4 years, it makes $9K/month with 70K+ users.

As Leandro explains: "My name is Leandro and I built an app that does only one thing and makes $9K per month. Sync to Sheets is an add-on that runs on the sidebar of Google Sheets and allows users to sync their Notion databases to Sheets. I built it in two weeks and it has been around for four years now."

## The Origin Story

"Four years ago I was building an integration between Google Sheets and another service. I was working with the Sheets API. So I gained a lot of knowledge about it. And at that time Notion released their official Notion API."

"There was a gap between what users needed and what's available in Notion. So I said okay I need to validate if there's going to be a need for that kind of integration to sync Google Sheets with Notion."

### Reddit Validation

"I went to Reddit, I checked the subreddit of Notion and searched for keywords like sheets, Google Sheets, Excel, CSV, all related keywords to what I was trying to build and validate."

"I found a lot of people trying to export the information from Notion into Sheets to work with the data. I was confident to build an MVP in two weeks. So I just built MVP and started to find users and beta testers."

## Finding Plugin Ideas with Zapier

"I believe Zapier is a good place to go and find those kind of opportunities. If you go to Zapier and you check for example the most common zaps, you will see that pair of two applications - for example QuickBooks and Sheets."

"There's a lot of companies and small businesses using QuickBooks for accounting and they need to move that information to check the invoices, the payment orders and everything and work with that data."

"Doing that in Zapier is kind of messy. You need to create different zaps for updates, for creates, deletes, and everything. So, if you're able to build that in just one piece of software that does everything, you're going to be solving a huge pain point for customers."

## Background

"I first studied electronics engineering. College made me literally hate electronics. So I said, 'Okay, I need to learn by myself.' I chose JavaScript because in JavaScript you can build mobile apps, web apps and everything."

"I did freelancing for 8 years. It's kind of hard. You have an entrepreneur spirit. You want to make the decisions and sometimes you're not in charge."

"I was kind of tired of that kind of work. I wanted to create my own schedule for the day, just be able to build things, be with a computer, and solve problems."

"It was during COVID that I decided to take that step. I quit everything. No more clients, no more anything. And just decided to build my own thing."

## Building the MVP

"The add-on is built using Apps Script. Apps Script is a language from Google services that allows you to extend Google Docs, Sheets, Slides and all Google services."

"It took me two weeks. No AI, just Stack Overflow, Google and searching for everything there."

"First, I need to be able to transfer the information from one place to the other. No formatting, no anything. I just wanted the data to be there in Sheets."

"Then I started to think about the user experience and what users could want the data to look like. I realized they could want the data to look similar to how it looks in Notion. So that's when I added conditional formatting, data validation for selects, for dropdowns and everything."

## Growth Strategy

### Marketplace Distribution
"The first source of installs was of course the marketplace. That was super important."

### SEO
"I realized I needed to do SEO stuff. I started to think about what kind of blog posts I could write that users can find interesting and related to Notion and Google Sheets. That's right now one of our main traffic channels."

### Reddit Tracking
"I use Reddit a lot. I have a service called F5 bot that is free that lets you track different keywords on Reddit. I set up some keyword tracking related to CSV, Sheets in that subreddit and every time I get an email with a notification that a new post or comment was added, I just go there and reply."

"Of course you need to try to be not spammy and really give value to the users and if your product can be a solution for their problems, then you recommend your product. You say you are the founder."

### Product Hunt & Hacker News
"I also did a launch on Product Hunt a year and a half after launching the product for the first time. That's also was a really nice source of traffic, not paying customers, but yes, traffic and visibility."

"I also posted on Hacker News. I got to the front page. The spike you get in traffic is amazing. But again, it doesn't translate into paying customers. It's just visibility, backlinks that improve domain rating."

## Business Numbers
- $9K MRR
- 70K+ users
- 450+ paying customers
- 5K visitors/month
- ~$120K lifetime revenue
- 90% profit margins

## Tech Stack
- Apps Script (Google's language)
- VS Code (editor)
- Google Cloud and Firebase (infrastructure)
- SendGrid (emails)
- Mixpanel (analytics)
- Paddle (payments - Stripe not available in Argentina)
- Tidio (customer support chat)

## Key Lessons

"It was crazy to realize how small changes affect the business. Moving a button, changing a text or just moving things around in the UI can have such a profound impact."

### Removing the Free Plan
"At the beginning, we had a free plan. I realized that a lot of users were just using the free plan and that was enough for them. They didn't need to pay."

"I made a decision to remove the free plan. It was risky. There were a lot of people angry about that. But basically in that moment we went from $5K to $8K in a few months. Just a small decision that makes a huge difference to the business."

## Advice for Beginners

"It's super important to at least find your first user that is willing to pay for your application. What happened to me with some other products is that you build it for free first, you have a lot of usage and as soon as you start charging, then they don't use the application anymore."

"Charging from the beginning, I think, is super important. Do not waste time building something that no one is going to be willing to pay for."

## Resources
- Sync to Sheets: Google Workspace Marketplace
- Follow Leandro on Twitter`
  },
  {
    id: 55,
    title: "How to Use AI to Find a $1M Idea [Reddit, Claude]",
    founder: "Steph France",
    app: "Gold Mining Framework",
    revenue: "Framework/Tutorial",
    videoUrl: "https://www.youtube.com/watch?v=L_FY6aW9cJ4",
    videoId: "L_FY6aW9cJ4",
    thumbnail: `https://img.youtube.com/vi/L_FY6aW9cJ4/maxresdefault.jpg`,
    postedDate: "May 3, 2025",
    keyInsight: "AI can now do the heavy lifting of idea generation - use Reddit as a gold mine for customer pain points and let AI process the data into business ideas.",
    tags: ["AI", "Idea Generation", "Framework"],
    summary: `## The Story

Steph France demonstrates the **Gold Mining Framework** - a systematic approach to finding million-dollar business ideas using AI. In 45 minutes, you can go from nothing to a validated business idea with a complete landing page, without writing code or copy.

As Steph explains: "The human brain is not wired to come up with a good business idea. Ego, bias, and overthinking often gets in the way. So, what if you could outsource the whole process to AI?"

## The Framework Overview

"Six tools, five prompts, 45 minutes. We'll go from nothing to a potential million-dollar business idea and a complete landing page to go with it without writing a single line of code or copy."

## Step 1: Find a Market to Explore

"The idea is to start with what you have some edge or what you are interested in within the three core markets which are health, wealth and relationship - which are markets where for sure people are okay to spend money. So you are already reducing the risk."

### Using the Market Idea Expander Prompt

"If you put a subniche, any subniche or subcategory, it will continue to expand in the category you want to dig into."

"Markdown is a language that needs to be used as much as possible when we talk with LLMs. Instead of just copy and paste, it works as well, but it's really better if we copy as markdown. So we keep the structure of the prompt."

"I tend to prefer working with Claude for different reasons. The first is that I think it's the most human-like LLM. The copywriting is good and there is more emotion in the copywriting."

## Step 2: Validate Demand

"When we first pick a market, we don't know if it's a good market to go in. We use Google as well as a Chrome extension which is Keywords Everywhere to quickly find the volume of search and all related keywords."

### Using Google Trends

"We use Google Trends which is one of the best tools to use when it comes to market research to know if we have a trending market or at least a stable market."

"Here we are not talking about all the AI huge trends that go up and down and the tool comes up and it dies 3 months after. Here we are talking about human needs. Society changes that create needs that are growing and growing and growing and those markets are big."

## Step 3: Gather Data from Reddit

"We want to find where are the people talking about their frustrations, their pain about the topic specifically and the best mine we actually have is Reddit."

"Reddit is literally the place on the internet where the world is talking and the world is sharing their problems because there is this anonymous kind of mindset and long conversation on Reddit that makes it a real gold mine when it comes to finding customer pain points."

### Advanced Google Search for Reddit

"We go on Google to find Reddit threads. But we will use a special query with advanced search on Google to surface the Reddit threads where people are talking about their problem, expressing their pain."

## Step 4: Process the Data with AI

"We have three major prompts that we are going to use one after the other."

### Pain Point Extractor
"The first one will extract all the pain points and refine them. So we have different categories and we have quotes from the people attached to the specific pain point."

"The cool thing is we have quotes from the conversation that are related to this pain point. Those are deep conversations and they are all related to this specific pain point."

### Market Gap Generator
"The Market Gap Generator will take all those pain points and a framework which includes new paradigm, new technology, differentiation - basically how to find good business ideas in a saturated market, which like every market is saturated."

### Landing Page Prompt Creator
"When we pick a business idea, we have the Landing Page Prompt Creator which will take all the learnings we have, the business idea we want to create, and transform it into prompts that we are going to use in Lovable to create our landing page."

## Step 5: Create Landing Page with Lovable

"This prompt is basically made from research specifically on Lovable, the tool that allows you to create apps very fast. The research went out there on the internet and looked for all the best practices to create prompts for Lovable as well as all the documentation about Lovable."

## The Result

"This is a landing page for a co-parenting app. The landing page was created only with this framework A to Z. And if you have some knowledge in marketing, you can see that this is really good marketing copy."

"This landing page was created in an hour. And before starting the process, I had absolutely no idea about any problem in this niche."

"The cool thing is that it takes all the pain points, all the wording from the people in this industry and puts them in the landing page. So it's literally telling the customer their pain point in their own language."

## Tools Used
- Claude (most human-like LLM)
- Google Trends
- Keywords Everywhere (Chrome extension)
- Reddit (via Google advanced search)
- Lovable (landing page builder)
- Markdown formatting for prompts

## The AI Prompts
1. Market Idea Expander - expand into subniches
2. Pain Point Extractor - extract and categorize pain points with quotes
3. Market Gap Generator - generate business ideas using differentiation frameworks
4. Landing Page Prompt Creator - create Lovable-optimized prompts

## Next Steps After the Framework

"Even though you have the perfect landing page with the perfect copy for a very specific problem in a trendy market, going from there to having the business, having an app running is still a lot of work."

"Before you go into that, you can validate again. I love to use quizzes. You simply tell people, show the page and then on the page there is a popup that says 'Thank you for being here. The app is in development right now. Would you mind answering a few questions?'"

"You ask a few questions and you say, 'Do you want us to let you know when the app is out there?' Most people would say yes. And then you have a list."

## Resources
- Framework available for free
- Follow Steph France on YouTube`
  },
  {
    id: 56,
    title: "I Make $250K/Month From 20 Apps",
    founder: "John Rush",
    app: "Unicorn Platform + Portfolio",
    revenue: "$250K/month ($3M ARR)",
    videoUrl: "https://www.youtube.com/watch?v=En34iY-rQc0",
    videoId: "En34iY-rQc0",
    thumbnail: `https://img.youtube.com/vi/En34iY-rQc0/maxresdefault.jpg`,
    postedDate: "Apr 26, 2025",
    keyInsight: "Build a portfolio of interconnected apps - some drive traffic, some drive revenue, and cross-promotion compounds growth across all products.",
    tags: ["Portfolio", "Cross-Promotion", "Bootstrapped"],
    summary: `## The Story

John Rush runs 26 startups simultaneously doing $3M ARR combined. After 10 years building VC-backed startups, he switched to bootstrapping and bought Unicorn Platform for almost $1M. The seller mentored him for a year on how to be an indie maker.

As John explains: "My name is John Rush and I'm running 26 startups at the same time after quitting the VC world and joining the bootstrap movement. All my businesses have combined around 1 million users in B2B and combined 3 million ARR where seven products bring most of the revenue and the other products are bringing the audience and they channel to the paid products."

## The Origin Story

"It all started when I was little. My father was entrepreneur. He would involve me into everything he was doing just for fun. And by 2020 I was 10 years into building VC-backed startups and that's when I kind of felt that it was something against my nature."

"I was so obsessed with users. I was so obsessed with the products and the love from the users for my products. But in the VC-backed world, I felt like the whole obsession was kind of different."

### Buying Unicorn Platform

"In 2022, I decided to enter the bootstrap scene. I found the one tool that I like the most called Unicorn Platform. And I reached out to the founder and I said, 'Do you want to sell this product to me, the whole startup, and also when you sell it you will join me for a year and you will teach me how to be a bootstrapper and how to be an Indie maker?' And he said yes."

"So I paid almost a million dollars for that startup and then he guided me on everything. So he was my mentor for a year. I went from being VC-backed founder who knows nothing about bootstrapping to becoming a pretty prominent bootstrapper in the scene."

## The Validation Process

"I use the same process over and over again for all my 20+ products. It all starts with my own pain at work that I want to solve and then I look for solutions for that pain. And if I don't find the solutions on the market, then I go and talk about this pain on the internet."

"And if I see other people resonate with my pain and they say, 'Yeah, I have the same pain and I wish there was a solution,' then that's kind of a grand signal for me to go to the next step."

### The Pre-Sale Strategy

"I launch a waitlist and I see whether I am able to generate 100 signups. I email them all and I offer them 90% discount on a pre-sale before I build anything. And then if I get five sales, I build the first MVP."

"I don't even build a product. I actually deliver the solution manually. At this stage, I don't care about the margins yet. I just care about the solution being delivered to the customers and whether they actually satisfied with that."

"It's easier to iterate when there is no product, when there's no code. It's much easier because I just have to change my own routine and my own service. And once I find a sweet spot where it satisfies the users, I go and find a co-maker."

## The Co-Maker Strategy

"Finding a co-maker is really hard, same as finding a co-founder. So I usually talk to other makers and I become friends with them and that runs for years or months and then eventually when I'm looking for a co-maker it's not that difficult for me to figure out who to reach out to."

"We share the ownership 50/50. It's just regular co-ownership where I take care of all the operation, legal parts, accounting and the co-maker takes care of the coding and support."

"If you want to be the co-maker people want to work with, the best thing to do is to build things in public because that makes it so easy for anyone else to evaluate you and to just see whether you have things in common."

## Top Products
- Unicorn Platform: 600K users, website builder
- SEO Bot: $100K MRR, AI SEO agent
- Listing Bot: finds and lists on directories

## Growth Strategy

"I think that the key essence of good marketing is good product. The ideal marketing is where the product just drives the sales and drives the word of mouth. But it's difficult to build a great product right away."

"So usually you start with an average product and you have to do the boring marketing methods to bring first users and then use those users to improve your product and make it great."

### Marketing Channels

"Before my product is great, I usually go for SEO. And then the second most popular method I have is social media marketing. So I run that on X, on LinkedIn, on Substack, on Facebook, everywhere. I repurpose the same content on all platforms and I do that every day. So I share at least 30 tweets a month and sometimes more."

"Then the third one is the listings on directories. This is very very good way to grow your product if your product is hot and interesting."

### Cross-Promotion

"Every user that tries one of my products ends up trying at least one more product and often I have people who try all of my products. The cross promo works really really well because people trust you already and they know you deliver."

"I have over 20 tools where some tools are premium tools I make money on and some tools are just to bring traffic in and channel it to my premium tools."

"For example, in SEO bot, I have a button called 'boost my domain rating.' And if you click that, then it brings you to my other tool called listing bot that helps you to boost your domain rating. I have these integrations across all the products. So users natively float from product to product and end up using my entire ecosystem."

## VC vs Bootstrap

"In the VC world, I think people have to understand the game. And I did not understand the game. I was all about building great products, making happy users. But the game was about exits. So everything has to be optimized for an exit."

"In a bootstrap world, it's totally different. You optimize for profits rather than for the next funding round. In a VC world, you pay for growth. In a bootstrap world, you want to have product-led growth."

"In a VC world, you have many people working for you and you want to grow the headcount as much as possible because that increases your valuation. And in a bootstrap world, you want to cut the headcount as much as possible. Ideally, you want to be solo because then there are no costs at all."

## Tech Stack
- JavaScript and Tailwind (AI is perfect for these)
- Grok for learning (real-time Twitter access)
- Discord for chats and project management
- Apple Notes for writing
- Claude, Gemini, OpenAI APIs

## Business Numbers
- $3M ARR combined
- 1M+ users across products
- 90% margins on non-AI tools
- 70% margins on AI tools (API costs)

## Day in the Life

"I live in a forest and I have no social life. I have family and children and animals. So, I wake up in the morning. I go outside. I take care of animals. I change their water. I bring them food. I cut some grass. I do some exercise outside and after 1 hour I come back and I work for 5 hours."

"Then my kids come from studying and then we spend time together for 2-3 hours. Then they go to sleep. Then I go back to work for another 5 hours. Then I go to sleep at 4:00 a.m. and I wake up at 10:00 a.m. So I sleep 6 hours a day."

## Key Lessons

"The first time when I seen build in public, I thought it's all about marketing. So people do that to get more eyeballs on their products and that's free marketing. And that's true. But I realized that even the bigger value of building in public is that you build up a direct channel with the audience and the users that helps you to build great products."

"Before building in public, my failure rate was really high. 90% of the things I've done failed. And when I start building in public, it flipped. So now only 10% of my products fail and 90% don't fail because I adjust them before I ship them just because I build in public."

## Key Advice

"The most important thing when you build a startup is the idea and the founder idea fit. People start looking for random ideas in random spaces and I think that's wrong. I think people should try to build something they understand."

"In my case, I went into the extreme and I built things for my own work. And that's something I understand really really well. But I think people should build for their own work. They should solve their own problems. And I'm sure at any job in the world, there are hundreds of things you can solve with software."

"Don't go too far. Don't look for random things. Just look around you and see what are the pain points in your job."

## Resources
- Unicorn Platform: https://unicornplatform.com/
- Follow John Rush on Twitter`
  },
  {
    id: 57,
    title: "I Built an App with Cursor, Made $30K, and Quit My Job",
    founder: "Polus",
    app: "Creator Hunter",
    revenue: "$30K+ total",
    videoUrl: "https://www.youtube.com/watch?v=jpSY4MlWX50",
    videoId: "jpSY4MlWX50",
    thumbnail: `https://img.youtube.com/vi/jpSY4MlWX50/maxresdefault.jpg`,
    postedDate: "Apr 19, 2025",
    keyInsight: "You can prompt your way to $30K without writing code - use Perplexity for research, Bolt for MVP, and Cursor to finish, all on your daily commute.",
    tags: ["Cursor", "Vibe Coding", "Build in Public"],
    summary: `## The Story

Polus made $30K from an app he built on his morning commute using Cursor and Bolt. **Creator Hunter** matches startups with influencers, and he built, launched, and marketed it solo in about 30 days.

As Polus explains: "My name is Polus and I used AI to build an app that made me 30K. It's an app that matches startups with influencers and I built and launched it 7 months ago. It's got over 1,000 users at the moment with over 350 paid users. I used Bolt and Cursor to make it and I use Framer for design. I did it all myself without needing a team, all in my daily commute."

## The Origin Story

"It started when I was 18 and I needed to make money to get my way through college and the only job that I could get was door to door sales and one day I ended up knocking on the wrong door and someone literally grabbed me and held a knife to my throat."

"After that, I just had enough and I wasn't really employable as a student. So, I dove into every side hustle that I could. So I did web design, I did copywriting, sales funnels. I became kind of like a generalist. It paid enough to get my way through university."

### Why AI Changed Everything

"When I was in university, I did computer game development. But funny story, I actually completely sucked at code. I was very visual and I just couldn't understand it. But now AI can actually code for you. And so the limitations that I had before are kind of removed. AI can do the heavy lifting in terms of code and kind of patch up the area where I'm not the best at."

## Finding the Idea

"I was going through kind of a rough patch because I tried all these different business models and I wasn't making enough money to break free from a 9 to 5. I got really frustrated one day that none of the things that I did really got me where I wanted to be."

"So I was pursuing creator-led services and products, just work with creators, and the idea of a database came to my mind and I just started building it out because it's something I'd use myself and I figured with AI I could turn this into a fully-fledged SaaS if enough people wanted it."

### The First Sales

"When I launched my application, I remember I was sitting with my girlfriend and we were just having dinner. I pull up my phone. I just see sale after sale. I was like, 'Okay, how long is this going to keep going for?' And that night got about like 20 or 30 different sales. So it was very nice feeling that just motivated me to just keep going and pursue this further cuz now I felt like that was a validation that this could be a real product."

## The AI Building Process

"If I'm a complete beginner, I would recommend everyone to use Perplexity. It's what I did. I just asked Perplexity because it has the most up-to-date information. So it has all the documentation, anything that you want, any tool, any library, just tell it you're a complete noob and absolutely don't know how to do anything and it'll give you really detailed step by step."

### Step-by-Step Playbook
1. Use Perplexity for the game plan
2. Pull up Bolt and implement one step at a time
3. If there's errors, throw the error back at the AI
4. Use Bolt until you get a nice looking MVP with functionality
5. Download the project, put it into Cursor
6. Hook up Supabase for backend
7. Add Clerk for authentication

"Perplexity is a great starting point. Bolt is a great way to make the MVP and then you move to Cursor to dial in the details. So you're 80% of the way there and Cursor will then just get you to the final finish line."

## Design Without Designers

"It's really the simplest it can be. First thing I do is I pull up Framer and I pick a free template. So any template that you see on there that you like. It's simple enough and clean for you to edit. And then you just have to pick a nice font and a nice button. And then the rest just needs to be simple and clean."

### Landing Page Strategy

"I focus 80% of my time on everything that's above the fold. We'd call this the hero section. This is the first thing that people see when they open the website and has to have your full message just out there and people really need to grab an understanding of what it is within the first couple seconds."

"Anything that you can save them time with, save them money. Anything that solves a painful problem, you should have in a headline and a subheading, and then just a big call to action."

### UI Design with AI

"When I'm building it out in Cursor, you get the basic thing done and then you add some things to it. For everything UI related, I just ask it to make it clean, functional, and modern. And I try to have it use shadCN components and they're all free."

"When I have ideas for how I want onboarding flow to be or some other elements of the app, what I would suggest is just creating something in Figma, you can doodle if you want. You just plug it into Cursor and just explain the behavior that you want and then it'll spit out a nice looking page for you."

## Growth Strategy

"This post did the most in terms of numbers. It got close to 500K impressions. And I think the reason it worked is because I found an angle to attach it to trends happening in the space."

"A lot of people when they're building in public never go viral because they never join the bigger conversation and human attention span is limited. So it's 100 times easier to just bring your ideas to where the focus is already happening."

### Building in Public

"For me what's worked is just shipping often. Don't just have like one big video release like a lot of VC startups. What's not worked for me and what I see is there's been like a lot of competitors and copycats that come up, but they never really take off because either they're copying the exact same thing and people see right through that and you need an edge that no one can easily copy with AI tools nowadays."

## Business Numbers
- $30K revenue
- 1,000+ users
- 350+ paid users
- Built in ~30 days
- 90% profit margins

## Tech Stack
- Perplexity (research)
- Bolt (MVP)
- Cursor (production)
- Vercel (free hosting)
- Supabase (free backend)
- Framer (design)

## Day in the Life

"It's a big change. More traveling and more work. When I was building out the MVP I was at the same time traveling to China, New York, France, and seeing revenue while you're out and about exploring is a nice feeling. It's a real blessing."

"I've been working on it full-time on Creator Hunter since the 24th of December when I quit the job. So some days there's more hours that I put in this than my 9 to 5. But I don't feel exhausted at all."

## Key Advice

"I think never underestimate how much you can do solo. AI as your CTO is like a superpower. I don't know how long this period of time will last, but we need to take advantage of it."

"Whatever ideas you have, you can probably execute it in a weekend. If you just figure out the most scrappy idea possible in the most scrappy way possible, you can get it out there. And then if you put a buy button on it, share it on Twitter in the most scrappy way or TikTok, I think you'll be surprised by the amount of people that actually want to get it."

"I think people underestimate the knowledge they already have. So like if you have deep domain knowledge, you probably have tons of ideas already on what to build and you probably have like a winning idea already that you could just prompt your way and start building."

## Resources
- Creator Hunter: https://creatorhunter.io/
- Follow Polus on Twitter`
  },
  {
    id: 58,
    title: "From Zero to $42K/Month in 90 Days with AI",
    founder: "CJ (Sajila Mazafir)",
    app: "Code Guide",
    revenue: "$42K/month",
    videoUrl: "https://www.youtube.com/watch?v=0T55DRYqeeA",
    videoId: "0T55DRYqeeA",
    thumbnail: `https://img.youtube.com/vi/0T55DRYqeeA/maxresdefault.jpg`,
    postedDate: "Apr 12, 2025",
    keyInsight: "Validate before building - CJ got 1,800 waitlist signups with just a landing page before writing any code, then built the product in 2 weeks.",
    tags: ["AI Coding", "Validation", "Tutorial Marketing"],
    summary: `## The Story

CJ built **Code Guide** from $0 to $42K MRR in just 90 days. The tool helps AI developers write detailed documentation for AI coding models, solving the hallucination problem. He launched on December 24, 2024, and is projecting $90K MRR.

As CJ explains: "My name is Sajila Mazafir and people on X know me by the name of CJZ. I'm the founder of Code Guide, an AI startup that helps AI developers write detailed documentation for AI coding models. So we launched on 24th of December and in just last 3 months we've grown Code Guide to 42K MRR with a community of more than 4,800 AI developers and we're projecting to cross around 90K this month."

## The Problem Code Guide Solves

"Basically Code Guide fixes a core problem in AI coding which is AI coding models are not ready yet. They hallucinate, they assume things. So I just tried to fix just one problem which is AI hallucinations by building a knowledge base around the user's idea."

"Our core users are pretty much beginners to semi-developers and they can attach this knowledge base to these AI coding tools. So you can say Code Guide is just a bridge between two parties and that's why it is growing really fast because I'm not reinventing my own audience. I'm just utilizing the AI coding tools audience and we're just making the AI coding workflow better."

## The Origin Story

"I moved to Canada in 2018 and I did my first 9 to 5 and that was like a horrible experience for me. I knew like I can't do any 9 to 5. So I went back to the drawing board and stick to my basics which is like just build stuff, just do something."

"In 2022, I was actually writing a lot of tweets about AI prompting and I knew that AI coding is actually blowing up at the back end and people are not noticing it. So I wanted to force myself to actually learn the craft, build and code with AI coding tools for like 10 to 12 hours per day."

### 12 Startups in 12 Months

"I publicly announced that I'll be doing 12 startups. And I ended up building 11 products of my own. Unfortunately, 10 collapsed. They didn't perform well, but one of them grew really fast, which is Code Guide. And then in the end, you know, it was just like an overnight success after like all these seven years."

## Finding the Idea

"I was just trying to solve my own problem with Code Guide. I was running an MVP agency and for each project, I had to chat with ChatGPT for like 9 to 10 hours to create all these technical documentations to create a knowledge base that I can attach to these AI coding tools."

"So, I turned my prompts into like a sequence using make.com and I literally saved seven hours out of those nine hours and that was magical for me."

## Validation Before Building

"Twitter is actually a really great platform to launch products. All you need to do is just share your screen, create a simple screen recording demo, and you just post it and this type of content usually goes viral."

"In this tweet, I'm just talking about like what is my ideal Cursor workflow. I just tweeted that out and I was just mind blown that how many people were actually struggling with hallucination problem with AI."

### The Landing Page Test

"I just turned this thing into a landing page in like 20 minutes max using Bolt and actual validation for me was when people starting to sign up. So I got more than 1,800 waitlist emails in like two weeks. That was the first stage of validation for me that people actually want this solution."

"I was just talking to all the beta users. I was trying to DM every single one that was commenting me just to asking them either they are using some other flow to remove or fix the AI hallucinations and nobody was actually tackling in a better way than what we were trying to do."

"So I didn't build any product. I didn't have anything. I just had a glimpse of what a product can look like in a landing page and people were signing up from left and right. And that was the moment when I decided, okay, now I need to take this and create like a proper tool that solves this problem."

## Building the Product

"When I tweeted that and we got like 400 retweets and I got like 300 signups, that was a different feeling for me and I knew like okay I am up to something. So what I did was I just sat for next 10 to 12 hours just documenting what can be the best UI and how I can take this thing to the production stage."

"I realized I can't do it myself because I have to launch it fast. So I just reached out to my friend and I said, 'Hey, I'll take care of the front end and the marketing side, can you do the back end and just the customer service?' And he was very stoked about this idea."

"So now he takes care of the back end, still we're just team of two and I take care of the front end. So it took us just two weeks to actually from that raw UI to have a proper responsive web app launched for our users and we got 100 users the first day of launch."

## Tutorial Marketing Strategy

"I coined this term called tutorial marketing. And what I do every single day is I just write a tutorial in the form of thread or long form tweet. And what I do is I write four threads per week and three long form posts."

"I just pick one topic, write a draft and then the next day I just edit that draft with clear mind. Then I design assets using Canva and Figma."

"In the hook you actually talk about the problem and then you show them the exact blueprint, what's the ideal solution, and then you position your SaaS in between just a part of the solution. That type of content actually performs really well because that's bookmarkable content and shareable content. If your content is bookmarked, algorithm is in your side and people love that and you build credibility and trust."

## Content Audience Fit

"If I have to go all over again, I would do this playbook which is content audience fit approach. You need to talk to users. What is the core problem and how you can fix it?"

"I would literally go push content for next 14 days, warm up my audience and then from there I pick up what are their main core pain points and for those pain points what is the major one and then I just build a product that fixes just one problem."

"Then I push that product to that core group that gave me my initial users and from their own words I would just double down on the content that works and I will find more people like the core audience and that's how you can grow."

## Business Numbers
- $42K MRR in 90 days
- 4,800+ AI developers in community
- 100 users on launch day
- 1,800 waitlist signups before building
- Projecting $90K MRR
- Team of 2 (CJ + backend co-founder)

## Tech Stack
- Next.js (frontend)
- Claude 3.7 for UI design ($20)
- Cursor ($20/month)
- Windsurf ($15/month)
- Supabase ($25/month)
- Vercel ($48/month)
- OpenAI API ($2,800/month)
- Claude API ($300+/month)
- Clerk Dev (authentication)
- ConvertKit ($45/month)
- Total costs: ~$3,500/month

## Day in the Life

"I wake up super early, like 5:00 a.m. and I just take a shower, go for prayer, and start my 2 hours of deep work session. Then I just go for a walk and start my second session which involves research, coding, writing content."

"Then I take networking calls in the afternoon and then in the evening I listen to my favorite podcast, read a book for 10 minutes and then write my schedule for the next day. Super simple, no fancy routines, but I'm sticking with this routine for the last one year now."

## Key Advice

"We are living in the best time to build software or any sort of product online. All you need to do is just make yourself AI native. The first step can be just go on ChatGPT and have a chat with this AI and you will know like how amazing this thing is."

"English is the hottest programming language right now. So all you need to do is use AI for research about the market, then write code, then write content, and then distribute the product. So every single thing or every piece of the puzzle is just right there for you. All you need to do is create your own canvas."

## Resources
- Code Guide: https://codeguide.dev/
- Follow CJ on Twitter`
  },
  {
    id: 59,
    title: "I Got Rejected From YC, Then Built a $200M Startup",
    founder: "Saba Kenned",
    app: "VEED.io",
    revenue: "$40M+ ARR",
    videoUrl: "https://www.youtube.com/watch?v=PSx0vcUY-sk",
    videoId: "PSx0vcUY-sk",
    thumbnail: `https://img.youtube.com/vi/PSx0vcUY-sk/maxresdefault.jpg`,
    postedDate: "Apr 5, 2025",
    keyInsight: "Rejection is fuel - after YC rejected them twice, Saba and Tim used the feedback to start charging users and went from $0 to $40M+ in revenue.",
    tags: ["YC Rejection", "Video Editing", "Persistence"],
    summary: `## The Story

Saba and Tim built **VEED.io**, an online video editing platform, to $40M+ ARR after being rejected by Y Combinator twice. They started with no money, no validation, got kicked out of their office, had interns quit, and couldn't afford train fare.

As Saba explains: "I grew up in the middle of nowhere and I was one of those people because I lived in the middle of nowhere who just spent a lot of time on the internet. Everything I read about technology was like super exciting."

## The Origin Story

"After I graduated from university, I got a job like you're told to. And in my first week at the job, I wanted to quit and actually just do my own thing. I didn't want to be on the treadmill. I didn't want to have a job. I didn't want to have a normal, semi-detached house in the suburbs."

"I wanted to just do what I wanted to do. I wanted to own my own time. And I felt like starting the company was probably the only way to actually do that."

"And then I read in a free newspaper, the app Candy Crush made a million pounds a day. And I was like, I think I could make an app."

### Meeting Tim

"I met my co-founder Tim a year after university through this like global hackathon thing. We met online, met up for a coffee, decided to work on some stuff. When you're young, you want to build something."

"The first thing you need to work out how to do is actually are we capable of putting something together. And I know that might sound silly, but like the first thing you've got to do is actually go through the cycle once of, hey, we bought a domain. Cool. We know how to make a back end, great. We know how to make a landing page. Perfect."

## The Idea

"The early days were really simple. It was like me and him in a co-working space at his university being like, cool, we know we want to make something in video because we're both really passionate about that space."

"The idea was like super simple, like you know, video editing, I've done it for years. I'm a really technical person, but I find it quite hard. Can we like build basic video editing tools in the browser? Like super basic."

"I was really inspired by Giphy's GIF editor. It was just like upload a video, add text, trim it, done. I was like, can we do something similar like that for video?"

"We just thought that if other people have done it, why are they so special? Why can't we do it? And yeah, we went all in."

## The Struggle Phase

"We probably had about enough runway for a year. We literally made like no progress. I'd normally wake up at 6:00 in the morning, get on my bike, head to the office at 6:30, get there for about 7."

"And again, just to let you know how frugal we were. When I say office, I mean co-working space. And when I mean co-working space, I mean me and Tim shared the entry card."

"We'd do that until 7, 8 at night, go to the gym, cycle on the bike furiously for an hour, come back, work again, and then try and pick up some discount food on the way home because it was late and you get half price in different places in London."

### Nickel and Diming Everything

"We were using this like Crisp chat and I remember emailing them being like, 'Hey guys, we can't afford 100 bucks a month. Can you do less?' They're like, 'Yeah, $20 a month, fine.' So like everything we would nickel and dime every single purchase to just keep operating expenses as low as possible."

### Rock Bottom

"We ended up in this VC's office working and those VCs then kicked us out of their office. So we're now like officeless. The interns that we hired both quit on the same day and we were like stuck."

"We tried to get funding and we got rejected like many many many times and we both had crypto fortunately and we had to sell it to keep the company going."

"Two years of no money, no validation, nothing, no funding, kicked out of your office, your interns quit. It felt like it all unraveled. It was like a really, really tough time."

"Even like going to see friends for their birthdays, not being able to afford the train, all commuting around the city was on a bike. Lunch every day was like pre-made. I couldn't go out and see friends on Friday because they'd want to go for dinner or go for drinks, and I couldn't afford that. Just totally scraping by."

## The Pivot

"We both now have jobs at this point. And that was nice because, you know, finally I can do normal things with normal people again and visit my friends and go for dinner."

"But at the same time, we still even at that point took half of our salaries every month religiously, put it back into the company account and then used that money to hire two other engineers who would build for us who really helped us build the company today."

"And over the next like 8-9 months, things started to really take off. We went from like zero users to 30,000 monthly users in like 9 months."

## The YC Rejection

"We've got some money saved up now. We've got users. They're not paying, but maybe we're on to something. We apply to Y Combinator and to our amazement, we get into this interview round."

"We go into the interview, we come out. The way that Y Combinator works is really simple. If you get in, they give you a call. If you don't get in, they send you an email rejection letter."

"That evening, we're like refreshing our phone, waiting for the email, and we think to ourselves, I think we got it. I think we got it. And I looked at this email and it was like, sorry. That first line, the rejection just gets you. Unfortunately this batch you haven't been selected."

### Implementing the Feedback

"We're looking at this rejection email that we got and there's another line that stood out to me and it says 'we don't understand why you haven't charged your users' or something like that."

"So we thought to ourselves, why don't we try and implement their feedback over the weekend and then email them on Monday. Bang on 9:00 a.m. Monday morning, we sent them an email like, 'Hey guys, thank you so much for your feedback. We implemented it. We got 20 paid users. Would you reconsider?'"

"You know what happened? We got another rejection email. And still to this day I help kill them on Twitter. But at that point there was pre-Y Combinator which is a company that makes no revenue and now there's post - a company that makes some revenue."

## Growth Through SEO

"Once we got back to the UK after California I did one thing which was only focus on growth. Like the only thing I had to do was make traffic higher than the day or the week before and make revenue higher than the day or the week before."

"The skill set that really made it fly was SEO. I had to work out how to do marketing. Because I had no money, it was only like SEO."

"People search for things like trim video, crop video. There's actually about 500 of these search terms. So, I built a landing page for every single one of those things. And then I'd record YouTube videos for every single landing page. It was just brute force, like absolutely brute force."

## The Growth

"After that journey, things just started growing super fast. At that point, it was just like off to the races. 0 to 1 million in the first year. 4 months later 2 million. 2 months later 3 million and then 6 months after that it was 6 million. So it was 0 to 1, 1 to 6."

"This like proper growth phase of the company going from 10, 20, 30, 40 million in revenue. I don't know, it was like a bit of a middle finger to all the people who didn't want to invest in me or YC turning me down. It was a bit of a hey, we're good."

## Business Numbers
- $40M+ ARR
- 0 to $1M in year 1
- $1M to $6M in next 6 months
- Continued growth to $40M+
- Started with shared co-working card

## The Reality of Running a Business

"The founding and the starting of the company is definitely like the most interesting part of the journey. And it becomes this like marathon. This is like an endurance sport, right? You're not on the roller coaster anymore. You're in like day-to-day combat."

"I feel like at the start it's more like jumping through hoops and trying to work out the next trick and how to get around that corner. And then once it starts going and scaling, it's more like how can I just keep drumming the beat of the company and keep things moving and keep growth up."

"It's just really hard to run a business like dealing with people and directing them and trying to do whatever you can that's in the best interest of them, but also the company at the same time. Like it's genuinely really really challenging and the bigger you get, the harder it is and you only feel more and more vulnerable."

## Key Lessons

"The company could have failed at so many points. It could have failed when the two interns quit. It could have failed when we ran out of money. It could have failed when we got kicked out of our office. It could have failed when we didn't get into YC, right?"

"Like there are so many points where I could have been or we could have been like, 'Nah, it's over. It obviously doesn't work.' But every single time we kept going. And I'm so grateful for all of those learnings."

## Resources
- VEED.io: https://www.veed.io/
- Follow Saba on Twitter`
  },
  {
    id: 60,
    title: "My Coding Game Makes $1M Per Month",
    founder: "Lane Wagner",
    app: "Boot.dev",
    revenue: "$1M/month",
    videoUrl: "https://www.youtube.com/watch?v=tMkpiFIW8Xg",
    videoId: "tMkpiFIW8Xg",
    thumbnail: `https://img.youtube.com/vi/tMkpiFIW8Xg/maxresdefault.jpg`,
    postedDate: "Mar 29, 2025",
    keyInsight: "Differentiate hard in saturated markets - Boot.dev looks and feels completely different from competitors, inspired by Seth Godin's Purple Cow strategy.",
    tags: ["EdTech", "Coding Education", "Purple Cow"],
    summary: `## The Story

Lane Wagner built **Boot.dev**, an interactive online learning platform for software engineers, to almost $1M/month. The platform focuses on back-end development (databases, infrastructure) - an underserved market compared to front-end dominated online learning.

As Lane explains: "I built an online learning platform for software engineers to almost $1 million in monthly revenue, sitting usually around 30K a day at the moment. It's an online learning platform for software engineers and it's very interactive. That's kind of the defining unique trait of it. Really, we're just trying to get you doing as close to what you would be doing in the real world as a software engineer."

## The Business Model

"It's a coding first platform where you write a ton of code both on your local machine and in the browser. And all of our content is free. There's about 30 courses, but you lose interactivity after a certain point if you're not a paying member. And we're currently sitting at 25,332 active paying members."

## The Origin Story

"I was making about 200K total comp at the time leading just a small team of three. I've always wanted to build a business. I've always wanted to get out of the 9 to 5 employee work."

"The business Boot.dev had just started making about $2,000 a month. So multiply that by 12, it's like 24K, right? And then take into account any expenses, like you're basically not making any money."

### Getting Angel Funding

"I'm talking with my wife about this. I'm like, you know, it's making 2K a month. Like that's not so bad. And I really like it. And I feel like if I put more time into it, we could grow this thing. She was incredibly nervous about that idea cuz obviously I'm earning 200K. We've got our second child on the way. She did not like the risk."

"As it happens, the CFO at the company I was working at went to go work with an ex CEO of mine, so a mutual friend, and I went and pitched him and his partner on the idea of investing in Boot.dev. And so, he gave me the angel funding. It was 330K, but it gave me enough of like assurance that okay, we could at least have a couple years of runway to try this new business."

## Finding the Idea

"I was a back-end engineering manager and the impetus for the whole thing was I was trying to hire Go developers. This is back in 2020. I was having a hard time. Like, I'd open up a job position and I'd get like five, six, seven people applying for the job."

"It really just seemed to be that people getting into coding were gravitating towards the front end side and almost being pushed to the frontend side by online learning platforms. So it just seemed to me like there's this huge vacuum in the market where if you wanted to learn back-end stuff, you want to learn databases, infrastructure, it's very hard to do it online."

## The Purple Cow Strategy

"In this market, online learning, you've got to differentiate pretty hard because there's a lot of competition in the space. We kind of had different differentiators along the way as we grew the business over the last four years."

"The first was a content differentiation. So, we're serving this market of people that want to learn back-end technologies and just aren't finding the resources because front-end is so dominant in the online learning space."

"The next differentiator was you should make your thing feel totally different, totally unique. And I was really inspired by Seth Godin's book, The Purple Cow. Fantastic marketing book. But the basic idea is when someone lands on your site, as a new entrepreneur, it can be really tempting to go look at a bunch of competitors websites and like, 'Oh man, they're so beautiful. They're so well-designed. I should make my website look like theirs.' Absolutely. You should not do that."

## Building the Product

"You should have a very good idea of who you're building for and what problem you're solving and you should just solve that problem, but you should solve it really well because if you don't have a great solution, you're not going to break into the space."

"But you should tightly scope what you're building. I see this mistake all the time, too. The idea of just packing on new features, solving different problems. You should only be listening to what problems your customers have, and then you should be filtering out any problems from customers that aren't exactly the type of customer that you want to serve."

"In my opinion, the most dangerous thing you can do is try to serve multiple customer personas."

### MVP Philosophy

"I think a lot of people even myself as I launched Boot.dev think about this incorrectly. MVP doesn't mean shitty product and it can't mean that. If it does mean that for you, your product is going to flop pretty hard. You should shoot for minimum quantity, not minimum quality."

## Growth Strategy

"From zero to about 2K a month, we really grew from my blog. It was great for finding people that were really interested in the product and we did a ton of product development over those first 12 months."

"But then we weren't growing, right? We started to feel a lot more confident in what we were building, but we just weren't getting enough people in the door for it to make sense as a business."

### Influencer Marketing

"What we quickly found was that trust building, especially in the education space, is extremely important. So, working with influencers was like a cheat code because the influencers are already trusted by their audience. So, if you can get an influencer to try your thing and like it, you kind of unlock a new little section of the market because now their followers will naturally trust you a lot more."

"From 10K to 30K, we really grew a lot off the back of these Free Code Camp collabs, which was basically me recording an 8-hour course, giving it to Free Code Camp for free so they can publish on their YouTube channel and us getting some exposure through that."

### Scaling to $1M/Month

"Going from 30K up to where we're at now, which is almost a million a month. We had to scale what we were doing. Like I wasn't going to be able to create all this video content that was going to drive that amount of traffic."

"YouTube integrations, YouTube marketing, we've been able to scale that with other creators. And the unique kind of cheat code that we have as Boot.dev is that we have such strong affinity with gaming audiences. So, we've actually done most of our YouTube influencer marketing to gaming audiences rather than coding audiences."

### Finding the Right Influencers

"The most important thing is finding the right several influencers to test with. And the easiest way to find the right ones is to talk to your existing customers. Hopefully, you have some. Go ask them who they watch, right? Who they listen to. This has been the best way for us to source new influencers to work with."

"Also, if you're going to work with influencers, there's one giant exploit that you can take advantage of that doesn't work in most other channels, which is if you're incredibly easy to work with and you do a lot of work for the influencer, you can get better deals. If you can shoot your own B-roll for the influencer, there's a lot more room for arbitrage when doing one-off deals with influencers."

## Product vs Marketing

"I think the right way to think about where you should be spending your time, whether it's on the product or marketing, assuming you're a small team, is that the product is the thing that really is non-negotiable. You need the product to be good and you need to have confidence in the product before you spend a lot of time and money marketing the product."

"There's a minimal amount of marketing you do need to do to get some initial users to get product feedback. But in that first, pre-product market fit cycle, all your focus should be on the product and making the product solve the very specific problem for very specific person that you're trying to get it to solve."

## Business Numbers
- ~$1M/month revenue
- 25,332 active paying members
- 30 courses (all content free)
- $5.7M revenue in 2024
- $2.5M profit after expenses
- $2M spent on marketing
- $300K cost of goods sold

## Tech Stack
- Golang (backend)
- PostgreSQL (database)
- Google Cloud + Cloudflare
- Kubernetes, Docker
- Vue, Nuxt, JavaScript, TypeScript
- PostHog (analytics)
- SendGrid (email)
- Stripe (payments)

## Day in the Life

"I've been working from home since the pandemic. Most days I have one meeting. And when I say meeting, I actually often mean something like this. Like something on my calendar where I'm hopping on a call with somebody. Maybe we're recording a podcast. Maybe we're recording something for YouTube."

"And the rest of my time I'm spending writing courses. Like, and it really is that simple. I wake up, I get my coffee, I start writing courses. Later in the day, I have a meeting. Maybe it's an internal one. I honestly only have like three of those a week these days."

"I've got a two-year-old and a four-year-old. Third one on the way next month. So, writing courses and trying to spend time with the kids and family."

## Key Advice

"There's really two mistakes I see people making. The first one, I think, is to think about your business education as a content consumption phase and then an action phase. I think that's absolutely the wrong way to approach business. The biggest mistake is not taking action early, not starting a side project."

"The second biggest mistake I think is just focusing on kind of general content consumption about business and not digging into something really hard and specific."

"I think a lot of founders get way ahead of themselves thinking like, I'm going to be the CEO. I'm the idea guy, right? I'm going to delegate everything. I'm going to hire that salesperson, hire that marketer, hire that developer. But omitting the hard skills is a big mistake."

"If you're a developer, it may be really important to go and learn that marketing thing. Or if you're a marketer, it may be really important to go and learn that developer thing depending on your business."

## Resources
- Boot.dev: https://boot.dev/
- Follow Lane Wagner on Twitter`
  },
  {
    id: 61,
    title: "I Spent 24 Hours With Roblox Millionaires",
    founder: "Cole, Ian & Jake",
    app: "Roblox Games",
    revenue: "$70K+/mo combined",
    videoUrl: "https://www.youtube.com/watch?v=8xgnm6SynH4",
    videoId: "8xgnm6SynH4",
    thumbnail: `https://img.youtube.com/vi/8xgnm6SynH4/maxresdefault.jpg`,
    postedDate: "Apr 23, 2025",
    keyInsight: "Roblox has 400M monthly users - 1 in 2 US kids under 16 play daily. The formula: make games that are clickable, social, and replayable.",
    tags: ["Roblox", "Gaming", "Platform Business"],
    summary: `## The Story

Pat flew to Austin, TX to spend 24 hours with three Roblox millionaires - Cole, Ian, and Jake - who all live in the same apartment building and make millions from Roblox games and services.

Cole started playing Roblox at age 8-9 in 2013 and skipped college to go full-time at 18. He's now one of the top 50 biggest Roblox developers in the world with 1 million daily active users across his games. His main game "Hide or Die" makes $45K/month, and with consulting work for other developers, he's on track for $70K/month.

Ian is Cole's twin brother who made a game called "Bake the Baby" (later renamed "Bathe the Baby") during winter break in college. It went viral - IShowSpeed played it, generating around 100 million views. He dropped out of college after the game blew up. It now has 150K daily active users and makes $25K/month.

Jake runs Vector 3, a marketing agency for brands coming to Roblox. They've worked with Nicki Minaj and Spongebob, creating trailers and social media campaigns. They've made 450+ videos with over 100 million views. The agency does $36K/month with $10-15K in costs.

## The Roblox Opportunity

### Platform Stats
- 400 million monthly active users
- 1 in 2 kids under 16 in the US play Roblox every day
- Kids spend 2x more time on Roblox than TikTok
- Half the time kids are on TikTok, they're finding their next Roblox game
- Mr. Beast is now making games on Roblox - a sign of where things are going

### Why It's Growing
- New demographics being unlocked (e.g., "Dress to Impress" brought in older girls - over 1 million concurrent players, 1 billion+ plays)
- Kids growing up on Roblox continue playing as they age
- Platform keeps expanding to cover all demographics

## Cole's Game: Hide or Die

### Business Model
- Top 100 game on Roblox
- ~1 million daily active users
- $45K/month from in-game purchases
- 50/50 split with programmer/business partner
- ~$5K/month on contractors (modelers, graphics)

### The Failure Before Success
- Spent $300K and 3 years on a game that failed
- Tried to remake all the best games into one "grand thing"
- Watched his brother Ian make Bake the Baby in a winter break and succeed
- Lesson learned: "Test first, then build. Don't build then test."
- Made Hide or Die in 2 weeks with lower expectations - it took off

## The Formula for Roblox Success

### Three Pillars
1. **Clickable** - Is the game title/concept dramatic or unique enough to click?
   - "Bake the Baby" was crazy enough to go viral
   - "Hide or Die" is dramatic and attention-grabbing

2. **Social** - Can you play with friends?
   - Roblox is all about playing with friends
   - Games playable with or against friends perform better

3. **Replayable** - Is there curiosity to come back?
   - Build progression systems (level 10 → level 100 to unlock content)
   - Create curiosity about what's behind the next door
   - Same psychology as YouTube videos

## Ian's Game: Bathe the Baby

### Business Model
- 150K daily active users (top 200 game)
- $25K/month revenue
- Average revenue per paying user: ~$1.50 (very high)
- Revenue from daily shops (skins like pigeon, cow) and coins for abilities
- 50/50 split with business partner
- ~$5K/month in brand deals

## Jake's Agency: Vector 3

### Business Model
- Marketing agency for brands entering Roblox
- Creates trailers, social media campaigns, video content
- $36K/month revenue
- $10-15K/month in costs (2 full-time employees + contractors)
- 95% of clients come from LinkedIn

### How He Built It
- Started playing Roblox in 2011 (14 years ago)
- Bounced between interests: graphic design, working in Roblox cafes, programming
- Made montage edits in middle school - discovered love for video production
- The editors from those middle school days now work at his company

### Client Acquisition Strategy
- Built LinkedIn presence with educational content and portfolio
- No cold outreach or cold calls
- Uses paid consulting calls as lead generation
- "I'm getting paid for the lead" - consulting converts to execution contracts

### Operations
- Runs remotely via Discord
- 45-step templated project plan for each trailer
- Every step has an SOP with recorded video instructions

## Day in the Life

### Work Philosophy
- "You're either working or you're resting - there's no in between"
- Work 4-5 hours of focused deep work
- No phones during work time
- Sit outside at sunset with no phones, just hanging out
- Creating space for thoughts makes you a 10x better entrepreneur

### Finding Your People
- Cole and Jake met online, scheduled weekly Google Calendar calls just to talk
- "It takes awkwardness" - embrace scheduling conversations
- Set clear boundaries: friends vs. business relationships
- "These are my people that I would do anything for and vice versa"

## Key Advice

### For Aspiring Roblox Developers
- Expect it to take a few attempts to hit a game
- Test ideas quickly before investing heavily
- Focus on clickability, social features, and replayability

### For Building Any Business
- Take everything that interests you and put your head down
- Get a little better than average, see if you enjoy it
- Work as a freelancer, build expertise
- Don't think about building a business - just do the thing
- "I bounced around between a hundred different skills. The difference was that because I did them all, I know what I like and how to be good at it."

## Resources
- Follow Cole: https://x.com/1Coal
- Follow Ian: https://x.com/Vamonoz4
- Follow Jake: https://x.com/cheekyvisuals`
  },
  {
    id: 62,
    title: "My Apps Make $4.5M/Year With $0 Marketing",
    founder: "Erikas Malisauskas",
    app: "Kaching Bundles (Shopify Apps)",
    revenue: "$4.5M/year",
    videoUrl: "https://www.youtube.com/watch?v=vLLBzUZr6-s",
    videoId: "vLLBzUZr6-s",
    thumbnail: `https://img.youtube.com/vi/vLLBzUZr6-s/maxresdefault.jpg`,
    postedDate: "Apr 19, 2025",
    keyInsight: "Customer support drives 95% of reviews. Gamify your support team's bonus system around getting 5-star reviews - it's the key to App Store growth.",
    tags: ["Shopify Apps", "Platform Business", "Zero Marketing"],
    summary: `## The Story

Erikas is a designer-turned-entrepreneur from Lithuania (now living in Paris) who built 5 Shopify apps generating $4.5M/year with 90% profit margins - all with zero marketing spend. His main app, Kaching Bundles, alone does $400K MRR.

He started his journey making just $2/hour at a local web design agency right after school. While freelancing, he stumbled upon the Shopify Partners page and saw that the top 25% of Shopify app developers make nearly $300K/year. That number seemed huge compared to his freelance income, so he decided to build in the Shopify ecosystem.

Since launching in August 2022, his apps have generated over $400 million in additional revenue for merchants using them.

## The Shopify App Opportunity

### Why Platforms Work
- Shopify App Store does all the marketing for you
- Built-in distribution to millions of merchants
- Platform handles payments and trust
- Focus on product, not marketing

### The Gap Erikas Found
- Solo developers/indie hackers: Great technical skills but poor UX
- VC-backed companies: Great UX but move slowly (months/years for new features)
- His opportunity: Combine great UX with fast iteration

## Finding Winning Ideas

### Three Criteria
1. **Easy to build** - Must be buildable in a couple months max
2. **Broad market** - Useful for any Shopify store (easier to market)
3. **Low competition** - Space to squeeze in

### Validation Process
- Joined Discord communities of dropshippers
- Joined e-commerce Facebook groups
- Posted a screenshot of his app design (not even built yet)
- Post blew up: 100+ likes, tons of comments asking where to download
- That was his validation signal

## The Apps

### Kaching Bundles (Main App)
- $400K MRR
- Helps merchants create product bundles to increase average order value

### Other Apps
- Kaching Post Purchase Upsell
- Kaching Pop-up Upsell
- Kaching Card Drawer Upsell
- All in the discount/upsell category

## The Review Strategy (Game Changer)

### Why Reviews Matter
- Reviews drive App Store rankings
- Rankings drive organic installs
- Organic installs = $0 marketing spend

### How to Get Reviews
1. **In-app prompts** - Ask for reviews directly in the product
2. **Monthly emails** - Show merchants how much revenue the app generated, then ask for review
3. **Customer support** - 95% of reviews come from support interactions

### The Gamified Bonus System
- Monthly leaderboard tracking who gets most reviews
- "Persuader of the Month" award
- Calculate conversion rate: times asked for review → reviews received
- Bonuses for each review obtained
- Creates healthy competition among support team

### Support Quality
- 24/7 customer support
- All agents are highly technical (can dig into merchant's code)
- Top-notch support = happy customers = 5-star reviews

## Building Without Technical Skills

### Finding a Co-Founder
- Treat it like sales - you're selling someone on your vision
- Posted in local developer Facebook group
- Pitched his value: Shopify experience, design skills, existing client base
- Found technical co-founder who believed in the vision

### Design Process
1. Study competitors deeply
2. Go through their UX, take notes on likes/dislikes
3. Create design that's objectively better
4. Build with co-founder

## Monetization Strategy

### Launch Free First
- Reduces friction for installs
- More installs → more reviews → better rankings
- Grandfather early users when you add pricing
- Only monetize new users

### Pricing Model
- Subscription tiers based on usage
- Always offer free trial
- Full refunds, no questions asked (risk of 1-star review too high)

## Tech Stack & Tools
- Slack (team communication)
- Intercom (customer support)
- Features.vote (feature suggestions from users)
- Linear (internal task management)
- Mantle (Shopify-specific metrics, funnels, affiliate partnerships)

## Business Numbers
- $4.5M ARR
- 90% profit margins
- 5 Shopify apps
- $0 marketing spend
- 2 years to scale

## Day in the Life
- Wake up whenever (no alarms)
- Check emails in bed, scroll Twitter
- Differentiate tasks: quick wins (30 min) vs. deep work
- Doesn't feel like work - passionate about what he does
- Doesn't count time

## Key Advice

### For Starting Out
- Two people are enough: designer + developer
- Do customer support yourself initially to understand pain points
- Scale team only after you start getting more tickets

### For Finding Ideas
- Build on platforms with built-in distribution
- Look for gaps between indie hackers (bad UX) and big companies (slow)
- Validate with real users before building

### Community
- Hang around other builders
- Learn from their mistakes
- Find co-founders in communities

## Resources
- Follow Erikas: https://x.com/malisauskasLT`
  },
  {
    id: 63,
    title: "I Make $60K/Month with 4 Apps",
    founder: "Jure Sotosek",
    app: "Rummer, Parakeet AI, Optivase, AI Apply Agent",
    revenue: "$60K/month",
    videoUrl: "https://www.youtube.com/watch?v=KpVPST_P4W8",
    videoId: "KpVPST_P4W8",
    thumbnail: `https://img.youtube.com/vi/KpVPST_P4W8/maxresdefault.jpg`,
    postedDate: "Apr 12, 2025",
    keyInsight: "Organic short-form content is the great equalizer. 200 million views, $300K revenue, $0 ad spend. If you have a phone, you can make a TikTok that gets a million views.",
    tags: ["Multiple Apps", "Content Marketing", "Fast Shipping"],
    summary: `## The Story

Jure is a 26-year-old developer who runs 4 different businesses making $60K/month combined. He grew up watching The Social Network and always dreamed of entrepreneurship. After working at Microsoft for 1.5 years, he realized the corporate structure limited him - no matter if you put in 2x, 5x, or 10x effort, you get the same salary and wait the same time for promotions.

His breakthrough insight: most programmers know how to build but don't know how to market. The marketing side is just as big and complex as building the product itself.

## The Four Businesses

### 1. Rummer ($300K revenue, 200M views)
- A device that plugs into your car's OBD2 port
- Generates fake engine sounds through speakers
- Launched 2 years ago, sold 6,000 units last year
- All growth from organic short-form content (TikTok, Instagram, YouTube)

### 2. Parakeet AI ($35K/month)
- Real-time AI interview assistant for job interviews
- Transcribes what's happening and generates answers with ChatGPT
- Launched 6 months ago
- Credit-based pricing (not subscription) - big differentiator

### 3. Optivase ($6.5K MRR)
- B2B SaaS - A/B testing tool for Webflow
- Launched 1 year ago
- Growth from Webflow app store, Google, word of mouth

### 4. Parakeet AI Apply Agent ($1K in first 2 weeks)
- AI agent that applies to jobs for you
- Just launched

## Finding Ideas

### The Rummer Origin Story
- Was building Shopify stores, amazed by how much money e-commerce makes
- Simultaneously buying a used car, purchased a car diagnostics device
- Discovered it could read live RPMs
- Idea: generate fake engine sounds through speakers
- Perfect for short-form content: cheap device, funny concept, controversial, easy to package into a story

### What Makes a Good Idea for Short-Form
- Must spark interest in a 10-second video
- Boring products won't work on TikTok
- Needs to be a compulsive buy (not something requiring lots of consideration)

## Validation Strategy

### Evaluate Competition
- Someone has probably done your idea before
- Ask: Can I make a better product OR do marketing better?
- If yes to either, there's opportunity

### Why Organic Short-Form
- Most marketing channels are saturated
- Organic short-form is the great equalizer
- Only constrained by willingness to work hard
- A phone + good content = million views = thousands in revenue

## Building Fast

### MVP Philosophy
- MVP = Minimum VIABLE Product (viable = can make first sale)
- If you can build zero to first sale in 2 weeks vs. 6 months, you have 12x more chances to succeed
- Speed is a competitive advantage

### Parakeet AI Build Timeline
- Proof of concept: web app that transcribes in real-time + generates ChatGPT answers
- Turning POC into product: 2 weeks
- Landing page, marketing, digestible for end customer

## The 200 Million Views Marketing Strategy

### Content Creation Process
1. Co-founder (Urban) creates batches of content
2. Write 5-10 ideas for hooks, main parts, and endings
3. Example: 3 hooks × 5 main parts × 3 endings = 45 video combinations
4. When a concept works, keep remaking it

### Finding Urban (Content Co-Founder)
- Sent hundreds of emails to TikTok content creators
- Pitched the product idea
- Urban believed in it, second video went viral
- Work on revenue split (aligned incentives)

### Results for Rummer
- 200 million organic views in one year
- 600,000 page visits
- 6,000+ orders
- $300,000 revenue
- $0 ad spend

## Marketing Channel Selection

### The Framework
1. Write down 10 possible marketing channels
2. Evaluate which has highest chance of success
3. Pick ONE and dedicate full attention for 2 months
4. Double down on what works

### What Jure Tested
- Facebook ads: didn't work
- Google ads: didn't work
- Organic short-form: worked incredibly well

## Monetization Insights

### Fit Pricing to Product Usage
- Big tendency to make everything a subscription
- Parakeet AI uses credit-based pricing (one-time payment)
- "No subscription" is a selling point vs. competitors
- Make sure monetization fits the nature of the product

### Retention Strategy
- For Rummer (physical product): consistency in marketing, always chasing next sale
- For Parakeet AI (SaaS): just have a good product
- No amount of retargeting beats a product people are happy with

## Tech Stack
- Next.js + React (web apps)
- Speechmatics (transcription) - ~$1/hour, $2-3K/month
- ChatGPT API - $1-2K/month

## Day in the Life
- Wake up, think: "What's the most effective thing to push business forward?"
- Last week: revamped landing page (identified as bottleneck)
- Varies day to day - that's the charm of entrepreneurship

## Key Lessons

### Context Switching is Hard
- Morning: fixing super niche technical issue
- Evening: deciding which stupid TikTok hook to use
- The range of contexts in a short period is a big challenge

### Believe in Yourself
- Long journey from nothing to making money
- Biggest hurdle: giving up because of how long and hard it is
- Lots of random advice from well-meaning people who don't know what they're talking about
- Unlike school (clear path), entrepreneurship is unknown
- "There's a chance you're going to hustle for 10 years and get nothing"

## Resources
- Follow Jure: https://x.com/JureSotosek`
  },
  {
    id: 64,
    title: "I Locked Myself In A Room, Made 17 Apps, & Sold 2 for $265,000",
    founder: "Nico Jeannen",
    app: "Make Logo AI, Tor Notes",
    revenue: "$265K (exits)",
    videoUrl: "https://www.youtube.com/watch?v=zPijWd9uk-I",
    videoId: "zPijWd9uk-I",
    thumbnail: `https://img.youtube.com/vi/zPijWd9uk-I/maxresdefault.jpg`,
    postedDate: "Mar 31, 2025",
    keyInsight: "Don't try to make $100K on your first project. Just make your first dollar online. Compound small wins until you get a bigger one at the end of the slope.",
    tags: ["Self-Taught", "App Flipping", "Paid Ads"],
    summary: `## The Story

Nico built and sold two apps for $265,000 after teaching himself to code in just 2 months. He locked himself in a hotel room, learned to code, then built 17 apps in one year. Most failed, but two succeeded spectacularly.

His journey started at 19 when he quit a summer job at a bank after just 3 days because he hated it. He tried various things: a tie brand (failed - no one wears ties anymore), dropshipping (learned Facebook ads), freelance marketing for a Belgian clothing brand. When that client dropped him for someone cheaper and his e-commerce wasn't profitable, he made a radical decision: lock himself in a hotel room for 2 months and learn to code.

## The Two Successful Apps

### Make Logo AI
- AI-powered logo generator
- One-time payment model (packs of 5, 10, or 15 logos)
- Customization options (add text, change position)
- Built November → Sold March (~6 months)
- Revenue: $26K in sales + $65K exit = ~$85K total
- Customers: Curious AI enthusiasts + small entrepreneurs who didn't want to pay designers

### Tor Notes
- Voice note to formatted text converter
- Started with one-time payments (1-year pass)
- Switched to subscription: $60/year or $12/month
- ~10,000 users
- Revenue: $77K in sales + $200K exit = $277K total
- Target users: People who brainstorm ideas and need to write them down

## The 4 Criteria for Finding Ideas

1. **Perceived Value** - Is this valuable to others? Or just a slight inconvenience they don't care about?
2. **Scale** - Is there a market? Or just 3 people worldwide?
3. **Your Skills** - Can you build it yourself?
4. **Distribution** - Is there a way to reach users profitably?

Most successful ideas came organically - problems Nico needed solved himself.

## Building Process

### Step 1: Set a Hard Deadline
- Without time constraints, there's always something to add
- Forces focus on only what's necessary

### Step 2: App Prototype
- Planning phase: write down ONLY essential features
- Look for design inspiration on Dribbble, Google Images
- Use v0 to generate interfaces
- Either prototype in Figma (complex UI) or code directly

### Step 3: Add SaaS Layers
- Authentication, payments, etc.
- This is boilerplate code you copy between projects

### Step 4: Landing Page
- Make it as compelling as possible
- This is your sales page

### Step 5: Optimization
- SEO optimization
- Fix small issues
- Mobile optimization

## Launch Hack: The Typeform MVP

For Make Logo AI, Nico used Typeform to:
- Collect project name
- Get information about desired logo
- Collect payment

No backend at all. Not automated. Not scalable. But got first sales and validated the idea before building properly.

## The Paid Ads Strategy (What Actually Worked)

### Two Types of Platforms
1. **Search platforms** (Google): Give people what they want at the right time
2. **Interruption platforms** (Facebook/Instagram): Catch attention while people scroll

### What Worked for Tor Notes
- Started with organic validation → got to $1,500 MRR
- Then started running ads
- Spent $20-100/day (limited by resources for creatives + customer support)

### The Winning Ad Formula
- NOT professional studio quality
- Looks organic, like something you'd see scrolling your feed
- Paid a guy to record himself reading the script in his office
- People more inclined to watch because it doesn't look like an ad

### Ad Structure
- Focus on the PROBLEM first
- Don't mention app name until way later
- Keep giving reasons to watch
- Call to action at the end: "If you have all these problems and want a solution, check this out"

### Specific Landing Pages
- Created landing pages for specific audiences
- Created ads targeting those specific audiences
- That's when it "really blew up"

## Selling on Acquire.com

### Listing Strategy
- Treat your listing like a landing page
- Showcase your startup as a product
- Make it compelling

### Negotiation Tips
- Enterprising your startup gets buyers interested
- Ego plays a role in bidding
- Make Logo AI example:
  - Got $50K offer, then $55K
  - Then $65K paid over a year
  - Final offer: $65K cash, close in 2 weeks
  - Buyer didn't want to waste time bidding against others

## Tech Stack
- Nuxt (JavaScript framework) - "much better on every aspect"
- NextUI (component library) - codes 3x faster
- Cursor (AI coding) - embedded Nuxt/NextUI documentation
- v0 (interface generation)
- Ahrefs (SEO)
- Feedback Widget (user feedback - built it himself)
- Hottest (A/B testing - built it himself)

## Day in the Life

### Normal Mode
- Wake up 7am
- Work in morning
- Afternoon: work if needed, or hobbies/video games with friends

### Grind Mode (specific goal)
- Wake up 5:30-6am
- Gym
- Work until 7-8pm
- "Try hard then rest to assess and find what to work on next"

## Key Advice

### Don't Get Emotionally Attached
- Make technical prototypes quickly
- Talk to users as soon as possible

### Start Small
- Don't try to make $100K or even $10K on first project
- Just make your first dollar online
- Forget about scalability
- Compound small wins
- "You need this first little win to push the snowball until you get a bigger one at the end of the slope"

## Resources
- Follow Nico: https://www.youtube.com/@Jeannen
- Website: https://jeannen.com/`
  },
  {
    id: 65,
    title: "I Built a $10K/Month App from My Mom's Basement",
    founder: "Jack Friks",
    app: "Curiosity Quench & PostBridge",
    revenue: "$10K/month",
    videoUrl: "https://www.youtube.com/watch?v=qeY283nBhIA",
    videoId: "qeY283nBhIA",
    thumbnail: `https://img.youtube.com/vi/qeY283nBhIA/maxresdefault.jpg`,
    postedDate: "Mar 25, 2025",
    keyInsight: "1 hour a day marketing = 300 million views. Find a winning template, then recreate it over and over. Milk it till it's dry.",
    tags: ["Self-Taught", "Bootstrapped", "Organic Marketing"],
    summary: `## The Story

Jack Friks taught himself to code and built two apps to $10K/month - all from his mom's basement. He dropped out of college and quit his McDonald's job because he "would rather be homeless than work a job."

After 3 years of failed attempts (writing a book, selling t-shirts, crypto YouTube channel), he landed on learning to code. His first app, Curiosity Quench, took 4 months to build because he was learning while building. Everything broke constantly - he just kept putting errors into ChatGPT until he had a working product.

His secret weapon: spending just 1 hour a day on marketing, generating over 300 million views and making 1,000+ videos.

## The Two Apps

### Curiosity Quench ($3K MRR, $60K+ total)
- Helps people scroll less on their phones
- Gives users hobbies and action plans to do instead
- $30/year subscription with 7-day free trial
- 100,000+ downloads
- Built in 4 months while learning to code

### PostBridge ($7K MRR, $40K in first 5 months)
- Social media scheduling tool
- Post to all platforms from one place
- Starting plan: $9/month (multiple tiers now)
- Built because Jack was spending 30 min/day posting the same content everywhere
- Existing tools cost 10x more than he wanted to pay

## Finding Ideas

### The Best Ideas Solve Your Own Problems
- Curiosity Quench: Jack was scrolling hours a day, existing apps weren't great
- PostBridge: Spending 30 min of his 1-hour marketing time just posting to platforms

### Validation Process
1. Ask yourself: Would I pay to solve this problem?
2. If yes, it's more likely to be a painful problem worth solving
3. Post a 60-second TikTok talking about the idea
4. If 15+ people comment "I need this" - that's validation
5. Keep making videos, see if pattern continues
6. Eventually: "Hey, I should probably make this thing hundreds of people say they want"

## Building Process

### Pure Chaos Method
- Jump into code editor
- Open ChatGPT
- Ask how to build the thing
- Use boilerplate for landing page
- Make small improvements week over week

### Learning to Code
- Went in head-on with Curiosity Quench as first project
- Everything broke almost every time
- Kept putting errors into ChatGPT
- Eventually had a working product

## The 1-Hour-a-Day Marketing Strategy

### Account Warm-Up (First 2 Days)
1. Open TikTok and Instagram accounts
2. Scroll 15 minutes/day on each
3. This tells algorithms you're a real human, not a bot
4. Save viral videos you see
5. Comment and follow people in your niche
6. DO NOT post content during this time

### Content Creation
1. Download CapCut (learn it in an hour)
2. Post videos based on proven examples you saved
3. Add your app as call to action (3 seconds or less at end)
4. OR don't put app in video - use caption and first comment as CTA

### The Winning Template
- 2x2 images with caption
- 6 seconds long (100-200% watch time)
- Pinned comment: "Go download and try our app"
- Intentional mistakes to drive engagement (e.g., mixing up astrology/astronomy makes people angry → comments)

### Results
- Posted 2x2 template 300+ times on 2 accounts
- 60-70K signups from these simple templates
- Hundreds of millions of views

### When You Find a Winner
- Double down on it
- Recreate the video in different ways
- Post it over and over
- "Milk it till it's dry"

### Multiple Accounts Strategy
- Runs 3 Instagram accounts
- Spreads videos out by 3-4 hours
- Prevents algorithm from thinking you're spamming
- Always different videos (algorithms detect same metadata)

### Daily vs. Batching
- Posts same day, doesn't schedule far out
- Reason: Can iterate way faster
- Every day = try something new
- Batching = same stale content for a month without knowing if it works

## Content Philosophy

### What Makes Content Work
- Must provide value, connection, or laughs
- Can be entertainment or education
- If it's directly an ad, people scroll
- Algorithm loves watch time
- 6-second videos = easy 100-200% watch time

## Building in Public on X/Twitter

### How to Grow
- Don't try to grow a personal brand
- Just build cool things, do cool things, share them
- "Cool things" = tangible output (app, book, organizing your house)
- Most people share aphorisms and quotes no one cares about
- Share what you're actually doing - 10x more interesting

### Getting Over Fear
- Made new social media accounts to escape real-life people
- Only way to get over fear: just do it
- Realize no one really cares if you fail or win
- People are paying attention to themselves, not judging you
- Authenticity matters - people can feel if you're being real

## Monetization

### Mobile App (Curiosity Quench)
- Paywall (can skip, but offers trial)
- Best features behind paywall
- Key: Onboarding before paywall
  - Tell them the problem you're solving
  - Explain how you'll solve it
  - Get them excited
  - They're more primed to pay

### Web App (PostBridge)
- 7-day free trial (no free version)
- Credit card required to try
- Can cancel anytime
- 40% discount on yearly pricing
- These two things drove revenue up significantly

### Pricing Strategy
- Priced at what he thinks is fair
- What he was willing to pay himself
- Still makes healthy profit at that price
- Undercuts competitors who charge 10x more

## Retention

### The Key
- Make a product so useful they need it daily
- Stickiness comes from the initial idea
- Problem must be painful enough to pay monthly

## Tech Stack
- Next.js (web)
- React Native with Expo (mobile)
- ShipFast boilerplate (from Marc Lou)
- Supabase (database)
- Apple Notes / Trello (internal use)
- Timer for focused work sessions (inspired by Pat)

### Costs
- Twitter API: $200/month
- Hosting/database: ~$400/month
- Total: ~$600/month
- Margins: 95%+

## Day in the Life
- Wake up early, get 8 hours sleep (doesn't sacrifice sleep)
- Read a bit
- 2-4 hours focused work
- Lunch
- 2-4 hours focused work
- Stop at dinnertime (sleep better, excited to work next day)

### Focus Strategy
- Start timer, block in
- Focus on ONE task
- 1 hour, 90 minutes, or 2 hours at a time
- "When you're focused you get a lot more done"

## Key Advice

### Keep Going
- Many times wanted to give up or was doubtful
- Few months later, figured out the hurdle because he kept going

### Solve Real Problems
- Easiest way to make a successful business
- Both successful apps solved his own problems

### For Aspiring Solopreneurs
- Keep trying different things even when something doesn't work
- Get through the haze of "this isn't going to work out"
- Won't happen overnight - may take 3-4 years (that's average)
- Ability to not give up is the #1 thing

## Resources
- YouTube: https://www.youtube.com/@jackfriks0
- Twitter: https://x.com/jackfriks
- Curiosity Quench: https://www.curiosityquench.com/
- PostBridge: https://www.post-bridge.com/`
  },
  {
    id: 66,
    title: "The $10M AI SaaS Playbook",
    founder: "David Park",
    app: "Jenni AI",
    revenue: "$10M ARR",
    videoUrl: "https://www.youtube.com/watch?v=KcCnqLBhvXY",
    videoId: "KcCnqLBhvXY",
    thumbnail: `https://img.youtube.com/vi/KcCnqLBhvXY/maxresdefault.jpg`,
    postedDate: "Mar 18, 2025",
    keyInsight: "One viral video series can do hundreds of millions of views. Post the same video 2x/week for 6 months - that's $500K+ in revenue from one concept.",
    tags: ["AI SaaS", "Short-Form Content", "Influencer Marketing"],
    summary: `## The Story

David Park is the founder and CEO of Jenni AI, a collection of edtech tools that helps researchers research and write with AI assistance. They do over $10M/year, are profitable, and have over 5 million users. The vast majority of growth came in the last 2 years using the short-form content playbook he shares.

## The Three Pillars of Growth

1. **Distribution** - How do you get users to know about your product?
2. **Conversion** - How do you get them to pay?
3. **Retention** - How long do they continue using?

Even conquering ONE pillar can make a very profitable business. This playbook focuses entirely on distribution through short-form content.

## The 3-Step Process

### Step 1: Gathering Ingredients
- Figure out as much as you can about your users
- Skip months of iteration by understanding them first
- Ask users for their Instagram handles, see who they follow
- Find influencers your ideal demographic follows

### Finding Influencers
- Use Instagram/TikTok's "suggest similar accounts" feature
- Check hashtags influencers post on
- Create a new Instagram account that follows these influencers
- The algorithm will deliver you new potential partners

### What to Look For in Influencers
- **Ceiling matters more than floor** - Do they have 1-2 videos with 1M+ views?
- Consistent 5K-10K views doesn't matter as much as viral potential
- Check if their sponsored content flops vs. regular content
- If sponsor content always fails, reconsider

### Step 2: Explore
- Try different hypotheses, content types, creators
- Test different people on camera
- Test different hooks ("Top 10 reasons...", "The worst thing is...", "I hate when...")
- Test different accounts (some get stuck in 100-300 view hell)
- Test different editing (fast-paced vs. slow)
- Test different lighting (casual/homemade vs. cinematic)

### Step 3: Exploit
- Once something works, squeeze as much value as possible
- Turn winning content into series
- Repost across platforms
- Transition to paid ads

## Finding Content Ideas

### Sources
1. What are influencers your users follow posting?
2. What sponsored content have they posted that popped off?
3. What tools do your users use? What content do those tools post?
4. Scroll your TikTok account - what naturally grabs YOUR attention?
5. Emulate hooks that stop you, tweak for your product

## Influencer Outreach

### Mindset
- Be ready for rejection (50%+ won't respond)
- Don't give up after one email
- The hardest part was always yesterday - skills compound

### Tactics
- Send BOTH emails AND DMs (DMs have higher response rate)
- Follow up within a few days if no response
- Be detailed and tailored, but super concise
- Demonstrate genuine enthusiasm for their content
- Show why their audience will love your product
- DON'T mention: employee count, funding round, TechCrunch features

### What Influencers Care About
- Creating good content
- Natural-feeling partnerships
- NOT your startup metrics

## Structuring Influencer Deals

### Align Incentives
- Avoid paying 100% upfront (lose leverage, risk half-assed videos)
- Split payment: base + conversions (track via coupon code or UTM)
- Offer bonuses for view milestones or link clicks

### Reduce Price Per Video
- Buy in bundles (3 videos for $1,200 instead of $500 each)
- Even if first video flops, you have 2 more chances
- Builds real relationship with influencer

### Don't Pay Based on Followers
- Someone with 50 followers can get more views than someone with 10M
- Only question: Will their audience convert?

### Negotiation Tactics
- Start by "juicing up" the price with extras (exclusivity, Instagram story, link in bio for a month, usage rights)
- Get their price for the full package
- Then remove items one by one to get to your actual needs
- Ask for 30-40% bulk discount
- Offer 30% more to post on TikTok too (same video, minimal extra work)

## UGC Deals (In-House Content Creators)

### Structure
- Base salary: ~$2,000/month
- Incentive bonus on top (coupon redemptions, view milestones, % of LTV)
- Total usually shakes out to ~$3,000/month
- Influencers-turned-UGC: $3,000-5,000/month + incentives

### Why UGC Works
- Post 20-30 videos/month
- Fine if 10 flop, just need a few to do well
- More stable than sponsored deals
- Less pressure per video

### Important
- Always include incentives (prevents phoning it in)
- Let them write scripts first, then tweak

## Posting Strategy

### Cross-Platform
- Repost ALL videos on Reels, TikTok, YouTube Shorts
- Same video can do great on one platform, poorly on another
- Rewrite hook text natively for each platform (helps SEO)
- Remove TikTok watermarks

### Frequency
- Post at least one video every single day
- Farm hooks, find what works, learn each time
- Keep a spreadsheet of ideas
- Cut off branches that don't work
- Pull on threads that do work

### Shadowban Reality
- Tempting to blame shadowban
- But if posting 10-20 days with same quality as competitors getting 1M views...
- Maybe try new account with new SIM card
- Or have influencer create account on their phone, send you password

## What "Viral" Really Means

- NOT just views, comments, shares
- True virality: infects the people you REALLY wanted to see it
- 10K views hitting the right pocket > 1M views on lukewarm meme
- Worth infinitely more when viewers become evangelized customers

## Milking a Viral Video (The Real Money)

### Turn It Into a Series
- Once you find a viral video, don't restart the cycle
- Milk that discovery into 10x or 100x the initial views
- Slightly tweak and repost multiple times a week
- People are creatures of habit - they like seeing the same things

### Jenni AI's "POV" Series
- "POV: You have a paper due" or "POV: An essay due"
- Ridiculous plot: realize essay is due → run to computer → showcase Jenni AI
- Just swap first 10 seconds (sleeping vs. walking dog vs. at restaurant)
- Second half completely the same
- Posted 2x/week for 6 months
- Hundreds of millions of views
- Tens of thousands of paid users
- Over $500K in revenue from ONE series

### Maximizing Further
- Post series on multiple accounts (Jenni AI USA, Jenni AI Germany, Jenni AI Australia)
- Translate to different languages (Mandarin account)
- When video is fading, reach out to meme pages ($50-100 to repost)
- Eventually copycats copy it, it gets played out
- Then restart at Step 1 for new viral series

## Multi-Account Strategy

### Why It Works
- Account with 48 followers can get more views than main account with 55K followers
- Same video might only hit engineering students on one account
- Recreate on multiple accounts to hit different pockets (poly-sci majors, literature majors)
- At one point: 5 Jenni accounts × 3 platforms = 15 videos/day

### How to Execute
- Once you find viral series, create new accounts
- Don't need big creators - find charismatic UGC people
- Have them remake the proven viral video

## Key Advice

### Influencer Marketing Rewards Extra Effort
- Hard-to-find emails = less competition once you get through
- Niche influencers = better deals than huge creators with agents
- Write scripts tailored to their tone of voice
- Let them write first, then tweak

### The Compound Effect
- First emails will be cringe and get ignored
- First partnerships will be painful, might lose money
- Skills compound, you get more data, you get better
- One amazing influencer makes up for 10 failed partnerships
- You keep the learnings even from losses

## Resources
- Follow David: https://x.com/Davidjpark96`
  },
  {
    id: 67,
    title: "The Underdog: From $200K in Debt to $1M App Maker",
    founder: "Adam Lyttle",
    app: "Mobile Apps Portfolio",
    revenue: "$50K/month",
    videoUrl: "https://www.youtube.com/watch?v=h9R6ZeNruuI",
    videoId: "h9R6ZeNruuI",
    thumbnail: `https://img.youtube.com/vi/h9R6ZeNruuI/maxresdefault.jpg`,
    postedDate: "Feb 26, 2025",
    keyInsight: "ChatGPT made me a 9x developer - I tried to build 10 apps in one month and released 9. That portfolio approach got me out of $200K debt.",
    tags: ["Underdog Story", "Debt Recovery", "Mobile Apps"],
    summary: `## The Story

Adam Lyttle went from $200,000 in debt to making $50,000/month with a portfolio of mobile apps. His journey is one of the most dramatic turnarounds in the indie hacker world.

Adam grew up in a troubled home with drug and alcohol use in his family. He gravitated toward computers - he could understand them better than people. As a kid, he'd roleplay having his own software business. In high school, he started a shareware business making a few dollars on the side, but piracy killed his revenue.

## The Rise and Fall

### The Web Agency ($300K/year)
- After high school, started a web agency building websites for businesses
- This was before Wix and Squarespace
- At peak: $300K profit per year
- "I thought I was balling. I thought I was invincible."

### The Debt Spiral
- Used debt as a tool to live a lavish lifestyle
- Accumulated $200K in credit card and car loan debt
- Too focused on business, deadlines, clients
- Wasn't there for kids and family
- "Everyone around me just had to fall into line to accomplish the goals I wanted"

### The Collapse
- Wix and Squarespace disrupted his business
- Couldn't charge $10K for websites when people could use Wix for $10/month
- Business collapsed "pretty much overnight"
- Tried to work harder, lowered prices, worked more hours
- Total burnout - couldn't even sit at a desk
- Started defaulting on debts
- Cars taken away, accounts frozen
- Lost everything: business, possessions, relationships, identity

## The Lawn Mowing Pivot

### Rock Bottom
- Couldn't sit in front of a computer
- Needed to just walk and not be in the house
- Idea: "If I put a lawn mower in front of me, I could get paid to walk"
- Posted on Airtasker: "Can you mow my lawn for $20?"
- Said yes to everything
- Started rebuilding confidence

### The App Idea
- Problem: Had to manually plot routes on Google Maps for mowing jobs
- Asked other mowers how they organized - "piece of paper, week 1 on one side, week 2 on the other"
- Asked: "Why don't you use an app?"
- Answer: "No app exists. Someone should make it."
- Thought: "I could be that someone"

## The One App Per Month Challenge

### First App Failure
- Spent 6 months building lawn mowing app
- Released it - didn't do well
- Had clear intention, use case, and need - but still failed
- Needed to learn why

### The Challenge
- Set challenge: Create one app every single month
- Best way to learn: throw yourself in and start building
- Mowed lawns 6am-6pm, then built apps at night
- Intention: "Give back more to the world than I had taken"

### The Miracle
- One of the first apps became hugely successful
- Generating ~$11K/month
- Buyer reached out: "I'll buy it for 2x annual revenue" = $224K
- Used money to pay back debts and avoid bankruptcy
- Kept the dream alive

## The Business Model Flip

### From Creative Outlet to Revenue Machine
- Realized: "I can create an app every month and generate 2 years of revenue from one app"
- Thought of it like runway
- Sell an app → extend runway → try to release another successful app before runway runs out
- Did this for 2 years

### The Pepsi Max Moment
- Went to restaurant, wanted a Pepsi Max
- Couldn't afford it
- Realized: "What am I doing with my life? Am I following a dream that isn't going to come to fruition?"
- Decided to change strategy

### The Portfolio Approach
- Instead of building to sell, build to keep
- Even if each app makes only $200-500/month
- Total revenue is enough to pay debts and provide for family

## The ChatGPT Breakthrough

### The 10x Developer Joke
- ChatGPT came out with the joke that it makes you a 10x developer
- Adam's challenge: If I'm a 10x developer, I should build 10 apps this month
- Worked as hard as possible
- Result: Released 9 apps (ChatGPT made him a 9x developer)

### The Turning Point
- No longer needed to sell apps to keep pipeline going
- Had enough apps in portfolio for consistent monthly revenue
- Could pay down debts, pay rent, take family out for dinner

## The $50K/Month Breakthrough

### YouTube Experiments
- July: Started YouTube channel
- Tested different things with apps, shared feedback
- Created new paywall and onboarding flow
- Revenue jumped from $10K/month to $50K/month "pretty much overnight"
- Consistently $50-60K/month since

### Debt Free
- Last month: Paid down ALL debts
- No longer in hardship payments
- No longer 4 years of debt payments ahead
- Can provide comfortable lifestyle for family
- Gets to do what he's passionate about: building and creating

## Key Insights

### On Finding Ideas
- "Nine times out of 10, the motivator is 'I want to make money'"
- But without passion, creativity, and drive, you'll be stuck
- Best way: Live life, go out there, find where there's a need
- Look for apps that aren't doing a good enough job

### On Building
- Lost track of how many apps built - over 50
- Sold quite a few, kept quite a few
- The more you put out with positive impact, the more money flows as a byproduct

### On Mental Health
- At lowest point: couldn't get out of bed
- Felt overburdened - no matter what, still had debt, people chasing him
- Discovery: "Creating something seems to be the antidote to depression"
- "The antidote to feeling alone and lost"

## Key Advice

- Follow motivating passions that are actionable
- Passions that make you want to learn and build
- You don't need perfect situation to get started
- Show up every day, good things can happen
- Building is the antidote to depression and feeling lost

## Resources
- YouTube: https://www.youtube.com/@adamlyttleapps
- Twitter: https://x.com/adamlyttleapps`
  },
  {
    id: 68,
    title: "The Underdog: From Life Changing Accident to $100M/Year",
    founder: "Ryan Chen & Kent Yoshimura",
    app: "NeuroGum",
    revenue: "$100M/year ($10M/month)",
    videoUrl: "https://www.youtube.com/watch?v=BeRKQkU5Ceo",
    videoId: "BeRKQkU5Ceo",
    thumbnail: `https://img.youtube.com/vi/BeRKQkU5Ceo/maxresdefault.jpg`,
    postedDate: "Feb 7, 2025",
    keyInsight: "After being paralyzed at 19, Kent built a $100M/year functional gum company - adversity became his superpower.",
    tags: ["Underdog Story", "CPG", "Shark Tank", "Adversity"],
    summary: `## The Story

Kent Yoshimura was paralyzed from the waist down at 19 years old in a motorcycle accident. While recovering, he and his best friend Ryan Chen created NeuroGum - a functional gum with caffeine and L-theanine. They went on Shark Tank, nearly got sued out of existence, and built it into a $100M/year company doing $10M/month.

## The Origin Story

### The Accident That Changed Everything
- Kent was 19, riding motorcycles with friends
- Crashed and was paralyzed from the waist down
- Doctors said he'd never walk again
- Spent months in rehabilitation learning to walk again
- "The accident gave me a new perspective on life"

### How NeuroGum Was Born
- Kent and Ryan were best friends since childhood
- Both were into biohacking and nootropics
- Noticed energy drinks and coffee had downsides (crashes, jitters)
- Idea: Put functional ingredients in gum for faster absorption
- Gum absorbs through mouth lining - hits bloodstream in 5 minutes vs 20-30 for drinks

### The First Product
- Caffeine + L-theanine combination
- L-theanine smooths out caffeine's jittery effects
- Clean energy without the crash
- Started making it in Kent's apartment
- First batches were terrible - "tasted like chemicals"

## The Shark Tank Journey

### Getting on the Show
- Applied to Shark Tank in 2016
- Got accepted after multiple rounds
- Went in asking for $100K for 5% ($2M valuation)

### The Pitch
- Demonstrated the product
- Showed early traction
- Multiple sharks interested
- Mark Cuban made an offer

### The Deal
- Mark Cuban invested $100K for 15%
- Also got a deal with guest shark (Daniel Lubetzky, founder of KIND bars)
- Daniel's involvement would later save the company

## The Near-Death Experience

### The Lawsuit That Almost Killed Them
- After Shark Tank, a major gum company sent cease and desist
- Claimed NeuroGum infringed on their patents
- Lawsuit could have bankrupted them
- Legal fees were mounting

### Daniel Lubetzky Saves the Day
- Daniel had experience with big CPG companies
- Made phone calls to the company's executives
- Negotiated a settlement
- "Without Daniel, we would have been done"

## Scaling to $100M/Year

### The Growth Playbook
- Started DTC (direct-to-consumer) on their website
- Expanded to Amazon
- Got into retail: Target, Walmart, CVS, 7-Eleven
- Now in 30,000+ retail locations

### Revenue Breakdown
- $10M/month in revenue
- 60% retail, 40% DTC
- Profitable and bootstrapped after Shark Tank
- Never raised additional funding

### Product Line Expansion
- Original NeuroGum (energy)
- NeuroMints (same formula, mint form)
- Calm line (with GABA for relaxation)
- Focus line (with Alpha-GPC)

## Key Business Insights

### Why Gum Works as a Delivery System
- Buccal absorption (through cheek lining)
- Faster than pills or drinks
- More convenient - no water needed
- Discrete - can use anywhere

### The CPG Playbook
- Start DTC to prove concept
- Use data to pitch retailers
- Retail is where the volume is
- But DTC has better margins

### Retail Strategy
- Started with natural/health stores
- Proved velocity (sales per store)
- Used data to get into bigger chains
- Now in mass retail everywhere

## Lessons from Kent's Journey

### On Adversity
- "The accident was the best thing that happened to me"
- Gave him perspective and drive
- Made him appreciate every day
- Turned pain into purpose

### On Partnership
- Kent and Ryan have been friends since age 5
- Trust is everything in a co-founder relationship
- Complementary skills: Kent = marketing, Ryan = operations
- "We've never had a real fight"

### On Persistence
- Got rejected by 100+ investors before Shark Tank
- Almost went bankrupt from lawsuit
- Kept going through every obstacle
- "You have to be delusional to be an entrepreneur"

## Key Advice

### For CPG Founders
- Start with DTC to validate
- Get your unit economics right before retail
- Retail is a different game - need capital for inventory
- Relationships matter in retail

### For Anyone Facing Adversity
- Your lowest point can become your launching pad
- Perspective is everything
- Channel pain into purpose
- "The obstacle is the way"

## Resources
- NeuroGum: https://www.getneuro.com
- Kent's Instagram: https://www.instagram.com/kentyoshimura/
- Ryan's Instagram: https://www.instagram.com/ryanchenn/
- NeuroGum Instagram: https://www.instagram.com/neurogum/`
  },
  {
    id: 69,
    title: "He Made $10M with 3 iPhone Apps",
    founder: "Blake Anderson",
    app: "Riz GPT, Umax, Cal AI",
    revenue: "$10M+ total revenue",
    videoUrl: "https://www.youtube.com/watch?v=5u9u8yzPEpA",
    videoId: "5u9u8yzPEpA",
    thumbnail: `https://img.youtube.com/vi/5u9u8yzPEpA/maxresdefault.jpg`,
    postedDate: "Dec 29, 2024",
    keyInsight: "A 22-year-old who taught himself to code with ChatGPT built 3 AI apps generating $10M - spent only $100 on influencer marketing to get 500K downloads.",
    tags: ["iPhone Apps", "AI Apps", "App Store", "Self-Taught"],
    summary: `## The Story

Blake Anderson is 22 years old and has made over $10M from just 3 iPhone apps: Riz GPT (AI dating assistant), Umax (AI attractiveness rating), and Cal AI (calorie tracking). He taught himself to code using ChatGPT, spent only $100 on his first influencer campaign that got 500K downloads, and now runs a team building AI-powered mobile apps.

## The Three Apps

### 1. Riz GPT - The AI Dating Assistant
- First app, launched in early 2023
- Helps users craft pickup lines and dating messages
- Uses GPT to generate contextual responses
- Went viral on TikTok
- Revenue: Multi-millions

### 2. Umax - AI Attractiveness Rating
- Rates your attractiveness and gives improvement tips
- Uses AI to analyze facial features
- Gives personalized advice (haircut, skincare, etc.)
- Extremely viral - "looksmaxxing" trend
- Revenue: Multi-millions

### 3. Cal AI - Calorie Tracking
- Take a photo of food, AI estimates calories
- Simpler than manual logging
- Targets health-conscious users
- Newest app in the portfolio
- Growing rapidly

## The Origin Story

### How Blake Learned to Code
- Was a business major at USC
- Had app ideas but couldn't code
- ChatGPT came out in late 2022
- Used ChatGPT to teach himself React Native
- "I would just ask it how to do everything"
- Built first app in about 2 months

### The $100 Marketing Hack
- Couldn't afford big influencer campaigns
- Found small TikTok creators (10K-50K followers)
- Paid them $10-20 per video
- Spent $100 total on first campaign
- One video went viral - 500K downloads in a week
- "The ROI was insane"

## The Tech Stack

### Development
- React Native + Expo for cross-platform
- Started with just iOS, added Android later
- Cursor AI for coding assistance
- "Cursor is like having a senior developer"

### AI/Backend
- OpenAI GPT-4 for text generation
- Various AI models for image analysis
- Firebase for backend
- RevenueCat for subscriptions

### Why React Native
- One codebase for iOS and Android
- Faster iteration
- Easier to find developers
- Good enough performance for AI apps

## Growth Strategies

### TikTok Influencer Marketing
- Focus on micro-influencers (10K-100K followers)
- Pay per video, not per follower
- Look for creators in your niche
- Authenticity matters more than polish
- "One viral video can change everything"

### App Store Optimization (ASO)
- Keywords in title and subtitle
- Screenshots that show the value
- Respond to all reviews
- Regular updates boost ranking

### Viral Mechanics Built Into Apps
- Umax: People share their ratings
- Riz GPT: People share funny pickup lines
- Built-in sharing features
- "Make it easy to go viral"

## Business Model

### Monetization Strategy
- Freemium model
- Free tier with limits
- Weekly subscription ($6.99/week)
- Yearly subscription (better value)
- No ads - pure subscription

### Revenue Numbers
- $10M+ total revenue across 3 apps
- Mostly from subscriptions
- iOS generates 80%+ of revenue
- High margins (mostly AI API costs)

### Team Structure
- Started solo
- Now has small team (5-6 people)
- Developers, designers, marketers
- Still very lean operation

## Key Lessons

### On Learning to Code
- "You don't need a CS degree"
- AI tools make coding accessible
- Start with a real project, not tutorials
- Learn by building, not reading

### On Finding Ideas
- Look for viral trends
- "Looksmaxxing" was trending → built Umax
- Dating apps were frustrating → built Riz GPT
- Health tracking was tedious → built Cal AI

### On Speed
- First mover advantage is real
- Ship fast, iterate later
- "Done is better than perfect"
- Can always improve after launch

### On Marketing
- Micro-influencers > big influencers for ROI
- TikTok is the best platform for app discovery
- Viral mechanics should be built into the product
- Authenticity beats polish

## Advice for Aspiring App Developers

### Getting Started
- Pick one idea and commit
- Use AI tools to learn and build
- Don't overthink the tech stack
- Ship something in 30-60 days

### Marketing on a Budget
- Start with $100 in micro-influencer spend
- Find creators who actually use similar apps
- Test multiple creators, double down on winners
- Content > production value

### Scaling
- Reinvest revenue into marketing
- Hire slowly, stay lean
- Focus on one app until it's working
- Then consider expanding

## Resources
- Twitter: https://x.com/blaborwit
- YouTube: https://www.youtube.com/@blaborwit
- Riz GPT: App Store
- Umax: App Store
- Cal AI: App Store`
  },
  {
    id: 70,
    title: "The Underdog: He Turned His Last $1,000 Into $150M",
    founder: "Guillaume Moubeche",
    app: "Lemlist",
    revenue: "$30M/year ($150M valuation)",
    videoUrl: "https://www.youtube.com/watch?v=ZEIPj7QbZeI",
    videoId: "ZEIPj7QbZeI",
    thumbnail: `https://img.youtube.com/vi/ZEIPj7QbZeI/maxresdefault.jpg`,
    postedDate: "Dec 17, 2024",
    keyInsight: "With just $1,000 left in the bank, you can still build a $150M company - resourcefulness beats resources.",
    tags: ["Underdog Story", "SaaS", "Email Outreach"],
    summary: `## The Story

Guillaume Moubeche grew up in Paris with parents who came from a farm in southwest France with no money. They sacrificed everything so he could get a good education. During university, he worked shitty job after shitty job to pay for life - he even got rejected from McDonald's when all his friends got accepted.

That rejection lit a fire in him. He decided he needed to be his own boss, live by his own rules, and prove everyone wrong.

His first venture was a t-shirt business with his dad. After months of work creating the website and building a community, they sold exactly 6 t-shirts. The failure was so painful that Guillaume and his dad didn't speak for a year and a half.

Next, he joined a friend's lead generation agency where he became an expert at sales prospecting. But he wanted something scalable - his own software. He moved to Russia with his last $4-5K to hire junior developers for a LinkedIn visitor tracking tool. Then LinkedIn changed one line of code and the entire project went to trash.

Back in France with only $1,000 left, his girlfriend was paying rent and asking him to get a job. His friends would invite him to restaurants and he'd lie, saying he was busy - the "plans" were cooking pasta alone because it was cheap.

But Guillaume had a voice inside that wanted to prove everyone wrong. He pivoted from "blue ocean" ideas to "red ocean" - if competitors exist and make money, there's product-market fit. All you have to do is be better. He built **Lemlist**, focusing on one key differentiator: making sales more human through personalization that no other platform offered.

## Key Insights

### The Red Ocean Strategy
- Blue ocean (no competitors) = too complex, risky
- Red ocean (many competitors) = proven product-market fit
- "These guys are making shit tons of money. All you have to do is be better."
- Focus on ONE key differentiator tied to customer ROI

### The Growth Loop
1. Use your own product daily
2. Help customers with their campaigns
3. Create success stories and content
4. Push content into community
5. Get insights from complaints
6. Improve the product
7. Repeat with new templates and improvements

### The Risky Pivot
- Activation rate was only 15% (people signing up but not launching campaigns)
- Decided to rebuild the entire product from scratch
- Half of customers publicly said "Yesterday I loved Lemlist, today I fucking hate it"
- Instead of reverting, Guillaume got on Zoom calls with every unhappy user until 4am
- Fixed issues based on feedback
- Growth dropped from 40% to 0% that month
- But activation rate jumped from 15% to 35%
- Next month grew 60% because new users converted at much higher rates

### The Magnet Persona
- When growth plateaued at $10M ARR, Guillaume discovered the "magnet persona"
- Find the persona that never churns and attracts other customers
- Apple's magnet persona was designers (designers are cool)
- Lemlist's magnet persona was sales reps (they drive revenue)
- Becoming "the sales tool for sales teams" was a game changer

## The Journey Timeline
- Year 1: $0 to $250K ARR
- Year 2: $250K to $1M ARR
- Year 3: $1M to $8M ARR
- Year 3.5: $10M ARR (plateau)
- After rebuilding: $30M ARR, $10M EBITDA

## Business Numbers
- $30M ARR (annual recurring revenue)
- $10M EBITDA (profit)
- ~100 employees
- Customers in 100+ countries
- $150M+ valuation
- First MVP built in 2 weeks
- First 100 customers closed through live demos and outbound

## The Unfair Advantage
- Be among the target audience of what you're building
- If you use your product daily and bugs drive you crazy, you'll improve it 100x faster
- Guillaume personally wrote campaigns for early customers in exchange for success stories

## What Product-Market Fit Feels Like
- "It's like poetry. It's like magic."
- "Everything you do works"
- "You're in a state of bliss"
- "You feel like a superhero"
- Growing 15-25% month over month for 6-8 months straight
- "It becomes the norm for you"

## Key Advice
- "Be patient with results, but impatient with action"
- Always optimize for learning, not outcomes
- Work on yourself harder than anything else
- Document your journey, never give up
- The outcome you can never control - only how you work on yourself
- "It's an overnight success story that took 10 years"

## Resources
- Twitter: https://x.com/GuillaumeMbh
- Lemlist: https://www.lemlist.com/`
  },
  {
    id: 71,
    title: "I Make $15K/Month With 2 AI Apps",
    founder: "Fernando Pessagno",
    app: "aiCarousels & ResumeMaker",
    revenue: "$15K/month",
    videoUrl: "https://www.youtube.com/watch?v=G4nsGvL4Fo0",
    videoId: "G4nsGvL4Fo0",
    thumbnail: `https://img.youtube.com/vi/G4nsGvL4Fo0/maxresdefault.jpg`,
    postedDate: "Dec 10, 2024",
    keyInsight: "Building multiple small AI apps can create a diversified income stream - you don't need one big hit.",
    tags: ["AI Apps", "Multiple Products", "Solo Founder"],
    summary: `## The Story

Fernando Pessagno is a 35-year-old Argentinian product designer currently based in Sweden. After running a web design studio in Argentina for over 10 years, he got bored with client work and transitioned to working at Envato in Mexico, then became head of design at an AI startup in Estonia.

Today, he runs two profitable SaaS products: **aiCarousels** and **ResumeMaker.Online**. Together, they generate over $15K/month and attract 150,000+ unique users monthly.

The story of aiCarousels is particularly remarkable. Just one day before Fernando was supposed to go on vacation, he got worrying news - his full-time job might be in danger. As a foreign worker in Sweden relying on a work visa, losing his job was his biggest nightmare.

Instead of panicking, Fernando turned to his passion for coding. He embarked on a 10-day #buildinpublic challenge on X and YouTube during his vacation. His goal was simple: create and ship something within 10 days. That "something" became aiCarousels, which now generates $5,000+ MRR with 95% profit margins.

## Key Insights

### The 10-Day Build Challenge
- Started as a distraction from job anxiety
- Built and launched aiCarousels in just 10 days
- Launched on Product Hunt: 9th place, 154 upvotes, 64 comments
- Got 5 paid users on launch day ($50 MRR immediately)
- Reached 12-month revenue goal ($2,500/mo) in just 6 months

### The Problem He Solved
- Noticed carousel posts were becoming popular on LinkedIn
- Creating good-looking carousels is time-consuming, even for designers
- Built a tool that automates the design work
- Users only do the minimum to get polished results

### First-Mover Advantage
- First AI-powered carousel generator in the market
- Strong domain name and SEO from early backlinks
- Featured on HackerNoon and Indie Hackers
- Medium post got nearly 20,000 views

## The Two Products

### aiCarousels ($5K+ MRR)
- AI-powered carousel generator for LinkedIn, Instagram, TikTok
- Helps non-designers create professional carousels
- Features: auto-resize text, color palettes, font pairings, custom templates
- AI Content Generator: creates content from topics, URLs, or YouTube videos

### ResumeMaker.Online ($2K+ MRR)
- AI-powered resume builder
- WYSIWYG editor for non-tech-savvy users
- Over 700K+ resumes downloaded
- 35,000+ newsletter subscribers
- 80,000 unique users per month

## Tech Stack
- Basic coding (no fancy frameworks)
- Outseta (authentication, billing, customer support)
- AI APIs for content generation
- Focus on simplicity and speed

## Customer Retention Strategy

### Personal Touch
- Responds quickly to support requests
- Fixes issues immediately
- Follows customers on LinkedIn, likes their posts
- Openly communicates he's a one-person team

### Weekly Updates
- Sends weekly emails summarizing improvements
- Written in casual, personal tone
- Builds trust that issues will be resolved

## Growth Channels
- Product Hunt launches
- LinkedIn personal brand (3,000+ followers)
- Building in public on Twitter
- YouTube videos documenting the build process
- SEO from backlinks and strong domain

## Key Advice
- Chaos creates the muse - tough times can spark creativity
- Ship fast, even if imperfect
- Personal customer support builds loyalty
- First-mover advantage matters in new categories
- Multiple products = diversified income and lower risk

## Resources
- aiCarousels: https://aicarousels.com/
- ResumeMaker: https://resumemaker.online/
- Follow Fernando: https://x.com/potherca`
  },
  {
    id: 72,
    title: "How I Built It: $12K/Month Micro SaaS",
    founder: "Dmytro Krasun",
    app: "ScreenshotOne",
    revenue: "$12K/month",
    videoUrl: "https://www.youtube.com/watch?v=TCGXT7ySco8",
    videoId: "TCGXT7ySco8",
    thumbnail: `https://img.youtube.com/vi/TCGXT7ySco8/maxresdefault.jpg`,
    postedDate: "Dec 3, 2024",
    keyInsight: "A simple API that solves one problem well can become a profitable micro-SaaS business.",
    tags: ["Micro SaaS", "API", "Developer Tools"],
    summary: `## The Story

Dmytro Krasun, 32, thought having a baby was the perfect time to launch a SaaS business. Despite the pressure of raising a newborn, he built **ScreenshotOne** - a screenshot API for developers - and grew it to $12K+ MRR as a solo founder.

Dmytro has a master's degree in computer science and has been writing code for over 17 years. He worked as a software developer for about a decade, becoming passionate about building APIs. He led API development at companies, managed documentation, and wrote API services from tiny to highly loaded ones.

The idea came from his experience building APIs and encountering problems. He thought it would be cool to do something with browser automation. He didn't even check out competitors (of which there were many), but luckily found his niche in the market.

After discovering IndieHackers.com and listening to the podcast, Dmytro realized he could build everything on his own without funding. When his partner had a baby, he decided to bootstrap both - a new baby and a new business.

## Key Insights

### The Product
- Screenshot API for developers
- Turns any website URL into a screenshot
- Use cases: competitor intelligence, open graph images, personalized videos at scale
- Serves businesses from small to enterprise

### New Baby, New Business
- Launched while raising a newborn
- "I didn't think about how hard that would be at the time"
- Curiosity drove him to see how far he could go
- Found a gig to cover family expenses while building

### The Positioning Breakthrough
- Started consciously positioning to ideal customer profile
- All features, marketing, designs, and content focused on specific customer
- "Define your ideal customer profile and this will make your life so much easier"

## Tech Stack
- Next.js (dashboard)
- Astro (marketing website)
- Puppeteer (rendering screenshots)
- Go (API key management, rate limiting)
- DigitalOcean managed Kubernetes
- Cloudflare (edge caching, computing, storage)
- Hetzner GPU servers
- Google Cloud Run (scaling backup)

### Why Multiple Servers?
- Started with $5 server
- Moved to Render for scaling
- Then Google Cloud (free credits)
- Became too expensive, moved to DigitalOcean
- "It might look like over-engineering" but necessary for reliability

## Business Model

### Pricing Structure
- Three paid plans based on user needs
- Higher plans = more screenshots + costlier features (video generation)
- Pay-as-you-go option added to each plan
- Had to raise prices to cover server costs

### Growth Timeline
- Launched just over two years ago
- Now at $10K-12K+ MRR
- Publishes monthly reports on X

## Growth Strategy

### Product Hunt Launch
- Made it to top products of the day
- Brought credibility and customers
- Improved SEO significantly
- Main acquisition channel is now SEO

### Building in Public
- Shares monthly reports publicly
- Engages with indie hacker community
- Daniel Nguyen helped change his thinking patterns

## The Mental Game

### Thinking About Quitting
- "I thought about quitting every week when I started"
- Had 2+ year runway but still stressed
- "You see your money burning daily"
- Curiosity became his superpower

### Freedom Trade-offs
- More freedom: Can fly to Italy for a week without asking permission
- Less freedom: Still worked on laptop during vacation
- "Don't be delusional, you won't have complete freedom"
- But you choose who to serve and what problems to solve

## Key Advice
- Define your ideal customer profile early
- Curiosity is a superpower - stay curious about how far you can go
- Get a gig to cover expenses while building (wish he'd started earlier)
- Don't give up - determination matters
- Connect with other indie hackers for support

## Resources
- ScreenshotOne: https://screenshotone.com/
- Follow Dmytro: https://x.com/nicklockwood`
  },
  {
    id: 73,
    title: "How I Built It: $37K/Month Notion App",
    founder: "Julien Nahum",
    app: "NoteForms",
    revenue: "$37K/month",
    videoUrl: "https://www.youtube.com/watch?v=WuzxmeUP6ro",
    videoId: "WuzxmeUP6ro",
    thumbnail: `https://img.youtube.com/vi/WuzxmeUP6ro/maxresdefault.jpg`,
    postedDate: "Nov 26, 2024",
    keyInsight: "Building on top of popular platforms like Notion can unlock massive distribution and customer acquisition.",
    tags: ["Notion", "Forms", "Platform Play"],
    summary: `## The Story

Julien Nahum, a 28-year-old software engineer, turned a grueling 3-hour daily commute into an opportunity. Rather than letting that time go to waste, he dedicated it to working on side projects. After years of experimentation, he struck gold with **NoteForms** when Notion released its API.

He spotted a gap: Notion users needed a form builder like Airtable had, but tailored specifically for Notion. He built the first version in just 6 days. Today, NoteForms has over 100,000 registered users and generates $37,000 in monthly recurring revenue (~$400K/year).

## Key Insights

### The 6-Day MVP
- Spent just 6 days developing a functional prototype
- Addressed a specific problem within Notion's ecosystem
- Launched quickly, gathered feedback early
- "It's fine to start small. As soon as you get users and feedback, you can iterate much faster."

### Building on Existing Platforms
- Targeted Notion's existing user base instead of building audience from scratch
- "Notion already had a huge community—tons of Facebook groups, an active subreddit, and loyal fans"
- Leveraged this community for a head start in gaining traction
- "Cannibalized" part of Notion's audience into NoteForms users
- Minimized marketing efforts while maximizing reach

### Platform Dependency Trade-off
- Risk: Dependent on Notion's platform
- Benefit: Instant access to dedicated user base
- For new entrepreneurs, benefits outweigh drawbacks
- Solve specific problems within larger ecosystems

## Marketing Strategy

### Community-First Approach
- Promoted in Notion-related communities
- Reddit and Facebook groups drove early awareness
- Offered tool for free initially to sidestep promotional resistance
- Community members more receptive to free tools

### Viral Growth Loop
- Forms created with NoteForms include embedded links back to website
- Users of forms inadvertently become marketers
- Natural sharing mechanism creates growth loop
- Think creatively about how users can spread the word

## Monetization Strategy

### Gradual Monetization
- Started by adding premium features marked as "Pro"
- Allowed free access during beta phase
- When subscriptions launched, rewarded early users with lifetime discounts
- Revenue climbed steadily after initial launch nerves

### Pricing Evolution
- Started by undercutting competitors (fewer features = lower price)
- Incrementally raised prices as product evolved
- Introduced higher-tier plans over time
- Flexible approach to find balance for users and business

## Customer-Centric Development
- "Since the beginning, I've only built what people asked me to build"
- Handled all customer support himself in early days
- Answered questions at all hours
- Gained invaluable insights into user needs
- Now uses AI chatbot + small team for support

## Business Numbers
- $37K MRR (~$400K ARR)
- 100,000+ registered users
- Built MVP in 6 days
- Started during 3-hour daily commute
- Years of side project experimentation before success

## Key Advice

### For Aspiring Entrepreneurs
- Start small, ship fast, embrace feedback
- Action over endless planning
- "The most important thing you can do is start"
- "Don't overthink it. Build a simple MVP and get it in front of customers"

### Platform Strategy
- Seek out existing communities where target audience is active
- Solve specific problems within those ecosystems
- Gain traction faster while minimizing risks
- Don't build from scratch if you don't have to

## Tech Stack
- Notion API integration
- Modern web stack
- Focus on UX and reliability
- AI chatbot for support

## Resources
- NoteForms: https://noteforms.com/
- Follow Julien: https://x.com/JhumanJ`
  },
  {
    id: 74,
    title: "The Day I Hit Reset on My Life",
    founder: "Pat Walls",
    app: "Starter Story",
    revenue: "$1.8M/year",
    videoUrl: "https://www.youtube.com/watch?v=xZDofUHbZHA",
    videoId: "xZDofUHbZHA",
    thumbnail: `https://img.youtube.com/vi/xZDofUHbZHA/maxresdefault.jpg`,
    postedDate: "Nov 19, 2024",
    keyInsight: "Sometimes you need to hit rock bottom before you can build something meaningful - your lowest point can become your launching pad.",
    tags: ["Personal Story", "Starter Story", "Founder Journey"],
    summary: `## The Story

Pat Walls started Starter Story in 2017 as a side project while working a full-time software engineering job. He had many failed projects before this one - the hardest part about building a side project is not giving up.

He built the original website and, of course, nobody visited it. But he kept going. He was publishing great case studies, but nobody knew his website existed. He needed a distribution channel.

He tried a lot of things and finally found something that worked: posting case studies on Reddit. The Reddit posts helped find first sponsors, advertisers, and more businesses to interview.

In early 2020, Pat made a pivotal decision: drop all other projects and go full-time on Starter Story. Coincidentally, this was when COVID hit - which became a "boom" for entrepreneurs. More people than ever were sitting at home wanting to find side hustles. In 2020-2021, records were set for new startups created.

His sister was laid off during the pandemic, so he asked her to help write articles. One thing led to another, and she came on full-time. She gave the business life and pushed forward projects that took Starter Story to the next level.

## Key Insights

### Early Traction: Celebrate Small Wins
- The best way to not give up is to achieve small positive reinforcement early
- Traction doesn't have to be life-changing
- Could be a few dozen people on an email list
- Or one happy customer sending a note about loving your product

### Distribution Beats Product 99% of the Time
- Great content means nothing if nobody knows you exist
- Reddit was the first scalable distribution channel
- Later pivoted to SEO for 10x organic traffic growth
- Reached 1M+ visitors per month through SEO

### Create Content You Can't Find Anywhere Else
- Made case studies super in-depth - nothing else like it on the Internet
- Competition: 500-word fluff articles on Forbes about $20M Series A raises
- Starter Story: Thousands of words showing how people ACTUALLY built businesses
- Unique angle: Always shared how much money people were making
- Revenue transparency was rare back then - helped stand out

### Document the Journey (Build in Public)
- Wrote monthly progress reports about building Starter Story
- Blogged, tweeted, created videos about strategies and results
- Helped build a better business AND make connections online
- Built a small personal brand

## Business Numbers
- $1.8M/year revenue
- 1.6M+ monthly visitors
- 85,000 newsletter subscribers
- 2,500 premium members
- Team grew from solo to multiple people

## Revenue Breakdown
- Premium memberships: ~38% (~$30K/month)
- Advertising & sponsorships: ~57%
- Affiliate revenue: ~5%

## Growth Timeline
- 2017: Launched, nobody visited
- Early days: Reddit distribution
- 2020: Went full-time, COVID boom
- 2020: Hired sister (key hire)
- 2020-2021: SEO strategy, 10x traffic growth
- Now: $1.8M/year

## Key Lessons
- What got you from 0 to $10K/month is different than $10K to $20K
- Had to reinvent the business multiple times
- Eventually need to pick one idea and go all in
- Hire smart people, let them become "mini-founders"
- Diversify revenue streams (don't rely on single source)
- Build systems and automations for everything possible

## Key Advice
- Distribution beats product 99% of the time
- Create unique content that can't be found elsewhere
- Document your journey publicly
- Go all in when you find something working
- Hire to fill gaps in your attention

## Resources
- Starter Story: https://www.starterstory.com/
- Pat's site: https://patwalls.com/
- Twitter: https://x.com/thepatwalls`
  },
  {
    id: 75,
    title: "9 Things That Make Me $1.8M/Year",
    founder: "Pat Walls",
    app: "Starter Story & Tools",
    revenue: "$1.8M/year",
    videoUrl: "https://www.youtube.com/watch?v=GFnBp8lMIf4",
    videoId: "GFnBp8lMIf4",
    thumbnail: `https://img.youtube.com/vi/GFnBp8lMIf4/maxresdefault.jpg`,
    postedDate: "Nov 12, 2024",
    keyInsight: "Building multiple income streams around a core brand creates stability and compounds growth over time.",
    tags: ["Multiple Revenue Streams", "Tools", "Content Business"],
    summary: `## The Story

Pat Walls breaks down the revenue streams that contribute to Starter Story's $1.8M/year income. It's a masterclass in building multiple revenue streams around a core content brand while staying bootstrapped and lean.

## The Revenue Streams

### 1. Premium Memberships (~38% of revenue, ~$30K/month)
- 2,500+ active paying members
- Yearly subscription fee
- Unlimited access to all case studies
- Access to databases (business ideas, etc.)
- Similar model to New York Times paywall

### 2. Advertising & Sponsorships (~57% of revenue)
- Companies pay to advertise in articles
- Newsletter sponsorships
- Niche audience = brands come to them
- Also pitch brands proactively

### 3. Affiliate Revenue (~5% of revenue)
- Case studies mention tools founders use (Shopify, Klaviyo, etc.)
- Readers click links → commission on sales
- Smaller but growing revenue stream

### 4. Email Marketing ($30K/month)
- Most effective way to make extra money
- Sends regular newsletters
- Monetized through sponsors and affiliates
- 85,000+ newsletter subscribers

### 5. SEO Content
- Repackaged content for high-level search keywords
- 10x organic traffic growth
- 1.6M+ monthly visitors
- Long-term sustainable traffic

### 6. Free Tools & Lead Magnets
- Business ideas database
- Attracts new users
- Converts to premium members
- Builds email list

### 7. YouTube Content
- Video case studies
- Drives traffic to main site
- Additional ad revenue
- Builds personal brand

### 8. Community
- Premium member community
- Networking opportunities
- Retention driver
- Word of mouth growth

### 9. Automations & Systems
- Developer skills as competitive advantage
- Automated every piece possible
- Operates with lower costs
- Lean team, high output

## Business Numbers
- $1.8M/year total revenue
- 1.6M+ monthly visitors
- 85,000 newsletter subscribers
- 2,500+ premium members
- Super lean team

## Key Insights

### Why Multiple Streams Matter
- Bootstrapped = no millions in the bank for emergencies
- Single revenue source is risky
- "Plug could be pulled at anytime"
- Diversification = stability over pure growth

### The Content Flywheel
- Case studies attract visitors (SEO)
- Visitors join email list
- Email converts to premium members
- Premium members provide recurring revenue
- Revenue funds more content
- Cycle repeats

### Reinventing Over Time
- What worked at $0-$10K/month differs from $10K-$20K
- Had to reinvent multiple times
- Reddit → SEO → YouTube → Email
- Always finding new distribution channels

## Tech Stack & Tools
- Custom automations (developer advantage)
- SEO tools for keyword research
- Email marketing platform
- Membership/paywall system
- Analytics for optimization

## Key Advice

### For Content Businesses
- Distribution beats product 99% of the time
- Create unique content you can't find elsewhere
- Build email list from day one
- Diversify revenue streams early
- Automate everything possible

### For Bootstrappers
- Don't rely on single revenue source
- Reliable revenue > maximum growth
- Hire smart people for ambitious projects
- Let team members become "mini-founders"
- Build systems and processes for scale

## Resources
- Starter Story: https://www.starterstory.com/
- Pat's site: https://patwalls.com/
- Twitter: https://x.com/thepatwalls`
  },
  {
    id: 76,
    title: "How I Built It: $10K/Month AI Image Generator",
    founder: "Pauline Clavelloux",
    app: "Virtual Staging AI (IACrea)",
    revenue: "$10K/month",
    videoUrl: "https://www.youtube.com/watch?v=mjCa8IFjM2E",
    videoId: "mjCa8IFjM2E",
    thumbnail: `https://img.youtube.com/vi/mjCa8IFjM2E/maxresdefault.jpg`,
    postedDate: "Nov 5, 2024",
    keyInsight: "Applying AI to a specific industry niche (real estate staging) can create a highly profitable vertical SaaS.",
    tags: ["AI", "Real Estate", "Vertical SaaS"],
    summary: `## The Story

Pauline Clavelloux, 33, built **IACrea** (Virtual Staging AI) - an AI-powered virtual staging product for real estate agents - despite having zero experience in real estate. She grew it to $8,638/month as a side hustle while working other jobs.

The product helps real estate agents digitally furnish empty rooms within seconds using AI. Traditional home staging is expensive and time-consuming. Virtual staging with AI costs a fraction of the price and delivers results instantly.

What makes Pauline's story unique is that she entered an industry she knew nothing about. She learned everything from scratch by immersing herself in real estate communities and listening to what agents actually needed.

## Key Insights

### Building in an Unfamiliar Industry
- Had zero real estate experience
- Learned by joining communities where agents hang out
- Simply answered questions related to virtual staging
- Posted about new product improvements
- "About 30% of our revenue comes from these communities"

### The Product
- AI-powered virtual staging for real estate
- Upload empty room photos → Get virtually staged images
- Results in seconds (vs. days with traditional staging)
- Starting at $16/month for 6 images
- Unlimited regenerations included

### Why Virtual Staging Works
- 82% of buyers say staging helps visualize property as future home
- Staged homes sell faster
- Homes with virtual staging sell for more on average
- Traditional staging costs thousands; AI staging costs dollars

## Growth Strategy

### Community Marketing (30% of revenue)
- Joined real estate Facebook groups and subreddits
- Answered questions genuinely (not spammy promotion)
- Posted about product improvements
- Built trust before selling

### Partnership Strategy (20% of revenue)
- Partnered with real estate professionals who don't sell houses
- Photographers, coaches, consultants
- They recommend IACrea to their agent clients
- Win-win referral relationships

### Personal Brand on Twitter
- Grew to 18K+ followers
- Tweets daily about data science, entrepreneurship, SaaS
- Shares successes, failures, and story
- Audience doesn't overlap with IACrea customers directly
- But helps with backlinks, referrals, finding talent
- "When I needed a freelancer, I got 300 applications in my DMs"

### SEO Focus
- Building for long-term organic traffic
- People outside social circle can find the product
- Tried ads but they didn't work (yet)

## Retention Strategy
- Higher quality product than competitors
- Develops features requested by users
- Low churn through customer satisfaction
- Continuous improvement based on feedback

## Influencer Marketing Challenge
- Considered influencer marketing
- Couldn't find influencers for real estate agents specifically
- Real estate influencers show fancy houses to individuals, not agents
- "The influencer's audience needs to match the target customer"

## Business Numbers
- $8,638/month MRR (growing)
- Part of Harvard Innovation Labs
- 4,500+ monthly paid subscribers (industry-wide for virtual staging AI)
- Over half a million renders per month (industry)
- Bootstrapped to $1M ARR in 10 months (industry leader)

## Key Lessons
- You don't need industry experience to build for an industry
- Communities are goldmines for customer acquisition
- Partnerships with adjacent professionals work well
- Personal brand helps even if audience doesn't overlap
- Quality product + requested features = low churn

## Key Advice
- Enter unfamiliar industries by listening first
- Answer questions genuinely in communities
- Partner with professionals who serve your target market
- Build personal brand for indirect benefits
- Focus on product quality for retention

## Resources
- IACrea: https://www.iacrea.com/
- Follow Pauline: https://x.com/paulineclavell`
  },
  {
    id: 77,
    title: "How I Built It: $40K/Month iPhone App",
    founder: "Steven Cravotta",
    app: "Puff Count",
    revenue: "$40K/month",
    videoUrl: "https://www.youtube.com/watch?v=loXc0Tyi4R4",
    videoId: "loXc0Tyi4R4",
    thumbnail: `https://img.youtube.com/vi/loXc0Tyi4R4/maxresdefault.jpg`,
    postedDate: "Oct 29, 2024",
    keyInsight: "95% of a mobile app's success is in the marketing - not the product. Use TikTok for organic growth, then scale winners with paid ads.",
    tags: ["iOS Apps", "TikTok Marketing", "Quit Vaping"],
    summary: `## The Story

Steven Cravotta is doing $40,000 MRR from his mobile app **Puff Count** - and he's not even a coder. The app helps people quit vaping by tracking their usage and providing motivation to reduce consumption.

Steven's approach begins with finding a problem worth solving. Rather than following trends, he bases his ideas on issues he encounters in daily life. For Puff Count, he noticed the vaping epidemic among college students (himself included) and realized there were no good tools to help people quit this new habit.

Before building anything, he validated the concept by researching similar apps on Sensor Tower and Google Trends. He also observed viral TikTok content on vaping, which confirmed the topic's potential popularity.

## Key Insights

### The Non-Coder's Approach
- Used 99designs for UI mockups (designers submit based on requirements)
- Hired developer from Eastern Europe on Upwork (quality + cost efficiency)
- Started simple, used existing templates
- MVP cost under $5,000

### The 95% Rule
- "95% of a mobile app's success is in the marketing"
- Product quality matters less than distribution
- Focus energy on getting eyeballs, not perfecting features

## TikTok Marketing Strategy

### Content Philosophy
- Research successful vaping-related content first
- Mirror viral elements that appeal to broad audience
- Entertainment-first, NOT sales-first
- Subtle call-to-action only at the end
- Videos should NOT feel like ads

### Organic to Paid Pipeline
1. Post organic TikTok content
2. Identify which videos perform best
3. Repurpose high-performing content for paid ads
4. Facebook/Instagram algorithms optimize effectively with proven content

## Monetization Strategy

### Hard Paywall Approach
- Users commit to free trial before accessing ANY features
- No freemium - forces commitment upfront
- Creates sunk cost psychology

### A/B Testing with Superwall
- Test different price points
- Test different paywall styles
- Identify optimal pricing for maximum LTV (lifetime value)
- Data-driven decisions shifted revenue "drastically upward"

## Business Numbers
- $40K MRR (monthly recurring revenue)
- Tens of thousands of downloads from TikTok
- MVP built for under $5K
- Zero coding experience required

## The Validation Process
1. Identify problem you personally experience
2. Research on Sensor Tower (competitor revenue)
3. Check Google Trends (search interest)
4. Observe TikTok content (viral potential)
5. Only build after validation confirms opportunity

## Key Advice

### For Non-Coders
- Success is possible with the right team
- Start with straightforward MVP
- Collect user feedback before expanding features
- Build trusted team to fill skill gaps
- Treat team members well

### For Marketing
- Don't sell directly in content
- Entertain first, convert second
- Use organic content to find winners
- Scale winners with paid ads
- Let algorithms optimize proven content

## Tech Stack
- 99designs (UI design)
- Upwork (development)
- Superwall (paywall A/B testing)
- TikTok (organic marketing)
- Facebook/Instagram (paid ads)

## Resources
- Puff Count: App Store
- Follow Steven: https://x.com/stevencravotta`
  },
  {
    id: 78,
    title: "How I Built It: $20K/Month Chrome Extension",
    founder: "Saeed Ezzati",
    app: "Superpower ChatGPT",
    revenue: "$20K/month",
    videoUrl: "https://www.youtube.com/watch?v=ty9ZcimL6VE",
    videoId: "ty9ZcimL6VE",
    thumbnail: `https://img.youtube.com/vi/ty9ZcimL6VE/maxresdefault.jpg`,
    postedDate: "Oct 22, 2024",
    keyInsight: "Chrome extensions can be highly profitable businesses - they're easy to distribute and solve problems where users already are.",
    tags: ["Chrome Extension", "ChatGPT", "AI Tools"],
    summary: `## The Story

Saeed Ezzati spent nearly a decade as a software engineer at various startups before venturing into solopreneurship. Today, he earns $20,000-$30,000 per month with **Superpower ChatGPT**, a Chrome extension that enhances ChatGPT's capabilities with features users didn't even know they needed.

The idea was born when Saeed identified gaps in the original ChatGPT interface. Like many successful entrepreneurs, he began by solving his own problems. But he didn't stop there - he immersed himself in online communities where potential users hung out: subreddits, Discord channels, Slack groups, and Facebook communities. By listening to what people were asking for, he continually refined his extension.

## Key Insights

### Community-Driven Development
- Join the conversation where users hang out
- Identify needs through active listening
- Build solutions based on real requests
- Satisfied users spread the word organically

### The Platform Strategy
- Most entrepreneurs focus on standalone websites or SaaS
- Chrome Web Store is a less crowded marketplace
- Established user base = easier reach
- Avoid competitive noise of broader internet
- Consider smaller platforms: Zoom, Salesforce extensions

### Build and Launch Quickly
- Built first version in just a few days
- Used basic JavaScript, HTML, and CSS
- Philosophy: Validate quickly by putting it in front of users
- Rapid development cycle allows quick adaptation
- Don't be bogged down by perfectionism

## Growth Strategy

### Organic Growth (Zero Ad Spend)
- Never spent a dime on advertising
- User base grew through word of mouth
- Occasional posts on Reddit
- Quality product + timing = natural growth
- Being early to market gave significant advantage
- "When your product solves a real problem, users become your best marketers"

### Monetization Journey
- First 9 months: Completely free
- Focus: Build large, loyal user base first
- Then introduced paid features
- Core functionalities remained free
- Experimented with different pricing models

### Newsletter Revenue First
- Started newsletter for user base
- Engaged users through regular content
- Secured sponsorships
- Generated income BEFORE monetizing extension
- $150K annual revenue in just 5 months on Beehiiv

## Platform Risk Management
- Risk: Platform could change or shut down
- OpenAI controls ChatGPT
- Saeed's approach: Don't dwell on it
- Focus on continuously improving product
- Explore other platforms to replicate success

## Business Numbers
- $20K-$30K MRR
- $150K+ annual revenue
- Built in days, not months
- Zero advertising spend
- Solo operation

## Key Lessons for Aspiring Entrepreneurs

### 1. Validate Quickly
- Launch MVP as soon as possible
- Test idea in real world
- Don't wait for perfection

### 2. Engage with Communities
- Best ideas come from direct engagement
- Listen to potential users
- Build what they're asking for

### 3. Leverage Existing Platforms
- Reduces competition
- Easier access to large user base
- Chrome Web Store, Zoom, Salesforce, etc.

### 4. Monetize Wisely
- Start by offering value for free
- Build trust first
- Introduce paid features that enhance (not replace) core product

### 5. Stay Agile
- Be prepared to pivot
- Platform rules can change
- Have backup plans

## Tech Stack
- JavaScript, HTML, CSS
- Chrome Extension APIs
- Newsletter platform (Beehiiv)
- Community engagement tools

## Key Advice
- Start small, think strategically
- Take action over planning
- Solve real problems
- Let users become your marketers
- Build on platforms with existing audiences

## Resources
- Superpower ChatGPT: Chrome Web Store
- Superpower Daily Newsletter
- Follow Saeed on Twitter`
  },
  {
    id: 79,
    title: "The Underdog: From $10/hr to $1.5M/Year",
    founder: "Marc Lou",
    app: "ShipFast & Products",
    revenue: "$1.5M/year",
    videoUrl: "https://www.youtube.com/watch?v=WGVxAmmJUmY",
    videoId: "WGVxAmmJUmY",
    thumbnail: `https://img.youtube.com/vi/WGVxAmmJUmY/maxresdefault.jpg`,
    postedDate: "Oct 15, 2024",
    keyInsight: "Building in public and shipping fast can transform a $10/hr worker into a millionaire - consistency and speed beat perfection.",
    tags: ["Underdog Story", "Build in Public", "Indie Hacker"],
    summary: `## The Story

Marc Lou grew up in a family of engineers in France where the only thing that mattered was good grades and going to university. He was a bad kid with bad grades who didn't feel like he belonged. After barely attending lectures for four years, he graduated and watched The Social Network - and decided he was the next Mark Zuckerberg.

He lived with his parents, working as a waiter part-time for $10/hour, while spending a year building a "Tinder for sports lovers" app. He was so arrogant he wouldn't even tell people what he was working on because it was "too brilliant." After 365 days, he realized the app would never exist because he didn't have the skills to build it and it would never make money.

Everything crumbled. He threw away all the code in 24 hours, quit his girlfriend, and moved to South Korea.

In Korea, he joined a friend's AI startup with VC funding. They spent 6 months building a product that got zero customers. After that failed, Marc was broke - living in a 12 square meter apartment with cockroaches in the bathroom.

He tried selling couple mittens on the street (made $0 online, sold 30 in person). Then he built VirallyBot, a tool for escape rooms to get more customers. A marketer friend told him to sell before building. His first sales call lasted 42 minutes - he was sweating so much his armpits were drenched. The customer said "send me the invoice, I'll pay." He made her confirm twice.

VirallyBot grew to $4K/month. He moved to Bali, learned to surf, life was beautiful. Then COVID hit. Revenue went from $4K to $0 in 24 hours. Everything he built for two years disappeared.

Back in France at 28, married, zero revenue, he had a breakdown. One morning he started crying for no reason, then punched his wall four times without thinking. He'd never felt that bad before.

He applied for software engineering jobs and got one paying $9K/month - 9x what he'd been making. For the first time, he felt worthy. But after 6 months, he saw tweets from indie hackers building tiny projects solo and felt the desire for freedom again.

Then he got fired. Perfect timing.

## The Transformation

Marc built a new identity: entrepreneur again, but different rules:
- Never spend more than a month on a product
- Never raise money
- Never have employees
- Build in public so even failures create an audience

He shipped 6 projects in 7 months: Mood2Movie, Habits Garden (10K users), a productivity tips ranker, a landing page generator, a link-in-bio tool. Revenue: $1K/month.

Then he shifted to "painkillers" (solving real problems) instead of "vitamins" (nice-to-haves). He started making viral skits - fake podcasts with Joe Rogan, fake movies with Leonardo DiCaprio. Revenue jumped to $4K/month.

## The ShipFast Breakthrough

After building 10-15 products, Marc realized he was doing the same setup every time: landing page, payment button, email, accounts. He built a reusable code base in less than a week.

He told his wife: "Maybe we'll make $100."

He shipped it, went skating, came back 2 hours later: $500. Next day: $3-4K. First month: $40K. Black Friday: $8K in one day.

"When product-market fit hits, you can feel it. People were asking to pay me in crypto because their credit cards didn't work. Usually I'm trying to convince people to give me money. This time they were begging."

He couldn't sleep - just watching the Stripe dashboard go up. Pure bliss.

## Revenue Growth
- Month 1: $40K
- Month 2 (Black Friday): $65K
- Steady: ~$50K/month
- After YouTube feature: $85K → $135K → $135K
- Current: ~$80K/month
- Total: $1.5M/year

## Growth Strategy
- Free tools marketing (logo generators with ShipFast banners)
- Building in public on Twitter
- Viral skits and content
- YouTube features
- Product Hunt launches

## Key Insights

### The Failure Reframe
- "Each failure is not a failure if you don't give up"
- "Each failure is a learning or a frustration for a future success"
- "Unless I quit in the middle, all those failures will bring success later"
- Failed 30 startups before winning

### Painkillers vs Vitamins
- Painkillers: People know their struggle, easy to sell
- Vitamins: Fun but not necessary, hard to sell
- Habits Garden (vitamin): 10K users, hard to monetize
- ShipFast (painkiller): $1.5M/year

### The Voice in Your Head
- "There's a voice that's always overthinking, blocking you from making the first step"
- "He's gonna find a good excuse for this idea to not work"
- "He's gonna tell you the idea isn't perfect enough to launch"
- Solution: Start anything. Make the smallest version as fast as you can.

## Key Advice
- Start now, ship fast
- Build in public so even failures create audience
- Learn where you're comfortable sharing (Twitter for text, TikTok for video, Instagram for images)
- Blend building and sharing together
- "If you don't quit, at some point you'll win. It's just a matter of not quitting before you win."

## Resources
- Twitter: https://x.com/marc_louvion
- ShipFast: https://shipfa.st`
  },
  {
    id: 80,
    title: "I Turned $150 into $2M/Year",
    founder: "Jozef Gherman",
    app: "StealthGPT",
    revenue: "$2M/year",
    videoUrl: "https://www.youtube.com/watch?v=8yCXyCN_NR0",
    videoId: "8yCXyCN_NR0",
    thumbnail: `https://img.youtube.com/vi/8yCXyCN_NR0/maxresdefault.jpg`,
    postedDate: "Oct 8, 2024",
    keyInsight: "Starting with almost nothing ($250) and building consistently can lead to massive success - resourcefulness and persistence beat capital.",
    tags: ["AI", "Undetectable AI", "Bootstrap"],
    summary: `## The Story

Jozef Gherman grew up comfortably in a conservative household with parents who taught him the power of the dollar. But at 29 years old, he was working paycheck to paycheck with nothing in the bank, lingering credit card debt from college, and a string of failed products.

Then he invested $250 into what would become **StealthGPT** - an undetectable AI service that helps users create content that bypasses AI detection tools. A little over a year later, he's making $190,000+ per month.

Jozef is a self-taught developer since 2017. He built the prototype in the evenings using NextJS/React, Vercel, Tailwind, Planetscale, Resend, and Clerk. It took about six months before he was making enough money to pay himself.

## Key Insights

### The $250 Start
- Invested $250 of his own money (no funding initially)
- Built prototype in evenings while working freelance jobs
- 6 months before making enough to pay himself
- Now at $190,170/month MRR

### The Product
- StealthGPT: Undetectable AI content generator
- Transforms AI-generated text to bypass AI detectors
- Subscription-based with tiered pricing
- Each plan offers increasing "Stealth Word" limits

### The Free Tier Mistake
- Initially made free tier too generous
- Helped with adoption but killed revenue
- A/B tested and eliminated free tier completely
- Result: 50% revenue spike that month
- Bonus: Reduced support emails significantly

## Business Numbers

### Revenue Breakdown
- StealthGPT: $190K+/month
- Also launched 3 smaller AI products to validate new features
- Small products bring additional revenue + test demand

### Expenses: $175,308/month
- Very high operational costs
- Keeps $220K liquid in business account
- Needs cash for expenses and runway

### Personal Finances
- Still paying off credit card debt from college ($3.5K left)
- Keeps money liquid rather than investing
- "You never know when it's all going to come crashing down"
- Plans to invest after saving $100K personal rainy day fund

## Tech Stack
- NextJS/React (frontend)
- Vercel (hosting)
- Tailwind (styling)
- Planetscale (database)
- Resend (notifications)
- Clerk (authentication)

## Investment Strategy

### AI Stocks Only
- Invested only $600 total (up 40% to $860)
- Microsoft and Nvidia only
- "I firmly believe AI will take over the internet and, soon, the physical world"
- Interested in Amazon, Apple, Meta for AI leadership
- No ETFs, no mutual funds, no diversification

### On Crypto
- Following crypto for nearly a decade
- Doesn't invest - calls 99% of it "BS" or scams
- "Crypto is the easiest scam instrument in the world"
- Only possible exceptions: Bitcoin and Ethereum
- "Everything else is noise"

## Funding Approach

### Angel Investors Over VCs
- Raised $400K from angel investors and family offices
- Gave up 8% of company
- Spent about $300K of investment so far
- VCs are "out of their minds" - system is dysfunctional
- "No wonder why 99% of VC companies go belly up"

### Why Angels Work Better
- More leniency in processes
- Longer time horizon for investments to mature
- Very hands-off
- Help when asked but don't interfere

## Personal Habits

### Saving Money
- Pays premium for rent (needs 2,000+ sq ft, homebody who paces while working)
- Saves on coffee: $10 jar of instant coffee lasts a month
- Previously spent $300/month on premade iced coffee
- Uses Rocket Money to track subscriptions

### Financial Philosophy
- "Spend only what you can afford"
- Okay to take on debt if you pay it off quickly
- Building/rebuilding credit is important
- Secure present before securing future

## Key Advice

### For Aspiring Founders
- You do NOT need funding to start a company
- Development tools are free, social media is free
- Hosting is free (Vercel free tier)
- Just buy a domain (cheap) and launch
- "There has never been easier to build a multi-million dollar business"

### On Failure
- If product fails, either product or market didn't fit
- Adjust accordingly and try again
- "The opportunities are endless, and the cost is hilariously low"
- "Do not miss this opportunity!"

## Resources
- StealthGPT: https://www.stealthgpt.ai/
- Follow Jozef: https://x.com/jozaborhani
- Personal site: https://jozefgherman.com/`
  },
  {
    id: 81,
    title: "They Make $1.4M/Year With AI",
    founder: "Ramone, Blaine & Justin",
    app: "Cast Magic",
    revenue: "$120K/mo",
    videoUrl: "https://www.youtube.com/watch?v=b5JhfGHafZA",
    videoId: "b5JhfGHafZA",
    thumbnail: `https://img.youtube.com/vi/b5JhfGHafZA/maxresdefault.jpg`,
    postedDate: "Oct 1, 2024",
    keyInsight: "Solve your own problem first. Distribution partnerships like AppSumo can springboard your brand to 10,000 users in days.",
    tags: ["AI", "SaaS", "Podcasting"],
    summary: `## The Story

Three friends - Ramone, Blaine, and Justin - went from $0 to $120,000 MRR with an AI app in less than 10 months. They all came from VC-backed startups but grew sick of the system and decided to build something for themselves.

Blaine hosts DTC Pod with Ramone and noticed a painful problem: writing show notes from podcasts. He couldn't assign it to a VA who wouldn't understand the context. When AI emerged, they realized it could solve this problem.

- "The real lesson there for any founder is just by doing something and putting yourself in a situation where you're constantly doing, you're going to unearth problems that are worth solving."

They built Cast Magic - an AI tool that leverages AI to create content from videos, audio files, and conversations. Any media can be repurposed into show notes, social posts, and more.

## The AppSumo Launch

When AppSumo approached them with a 2-week deadline to launch, they took the opportunity despite the tight timeline.

- "AppSumo was a sort of like a great springboard for us in order to establish a solid brand."

Results from the AppSumo launch:
- One of the most successful launches ever on AppSumo
- ~$350,000 in revenue generated
- ~10,000 users acquired
- Offered lifetime deals to build brand and get feedback

## Growth Strategy

### Creator Partnerships
- Started incentivizing people to create content on socials
- Some paid, some affiliate arrangements
- Scraped Instagram and platforms to find adjacent industries
- Built volume of outreach, then negotiated rates based on responses

### One-Person Marketing Team
Ramone runs marketing with contractors for specific verticals. His approach:
- Research how similar companies got distribution
- Map out their affiliate strategies
- Create systems (like a Notion doc of content concepts) to scale

- "Something people don't do enough is research. You can actually go and map out how did this company that is similar to us get distribution."

## Why Cast Magic Won

Three key reasons for success:
1. Solved their own problem
2. Built a brand by partnering with the right creators
3. Continuously invested in product quality

- "In an AI product it's not just how does a platform work but what is the quality of the output that I'm getting here."

## Business Numbers

- $120,000+ MRR
- Growing 20%+ month over month
- Single-digit net churn
- Marketing spend always under 20% of revenue
- Profitable from early on

## Tech Stack
- Elixir with Phoenix and LiveView (full-stack in one language)
- Webflow for landing page
- LLMs and transcription services

## Team Structure

Three co-founders with complementary skills:
- Ramone: Marketing (Fort Lauderdale)
- Blaine: Product (Miami)
- Justin: Engineering (Austin)

How they work:
- Mostly async during work week
- Monday and Friday 30-minute standup calls
- Quarterly in-person meetups for at least a week
- Focus on shipping, not being stuck on calls

- "Find a great group of people wherever they are in the world and do your own thing but make sure you also get together to get really aligned."

## On VC Funding

The team is anti-VC this time around:

- "We spent all the time we would have spent talking to VCs explaining the broad vision for our product and we just spend it talking to customers and building crap for ourselves."

Ramone's previous experience: Tried raising for 4 years for his business Trend.io. Learned that fundraising is a skill set that can distract from building.

## Key Advice

- Accept building an imperfect product
- Embed yourself into existing workflows
- Remove friction from barrier to entry
- Build something customers want and are willing to pay for
- Don't seek validation elsewhere - solve real problems

## Resources
- Cast Magic: https://www.castmagic.io/
- DTC Pod (Blaine & Ramone's podcast)`
  },
  {
    id: 82,
    title: "I Make $1M/Year As An Introvert",
    founder: "Marcos",
    app: "The Birdhouse",
    revenue: "$65K/mo",
    videoUrl: "https://www.youtube.com/watch?v=trNGj1BN1GU",
    videoId: "trNGj1BN1GU",
    thumbnail: `https://img.youtube.com/vi/trNGj1BN1GU/maxresdefault.jpg`,
    postedDate: "Sep 24, 2024",
    keyInsight: "Ghost writing is the perfect introvert business. Play to your strengths and have the discipline to stick it out.",
    tags: ["Agency", "Ghost Writing", "Twitter"],
    summary: `## The Story

Marcos built a $1 million/year ghost writing business in just 2 years - and he did it as a self-proclaimed introvert. He's the CEO of The Birdhouse, a Twitter ghost writing agency that went from $0 to $65K/month in one year.

- "I've never been a sales guy. I'm an introvert, which is why I became a writer."

Before finding ghost writing, Marcos tried every business model under the sun: drop shipping, affiliate marketing, crypto, day trading, blogging. His first introduction to "internet money" came at 19 during Army basic training when a friend showed him day trading on his phone.

## Finding Ghost Writing

Marcos realized his strengths aligned perfectly with ghost writing:
- Played video games (introvert)
- Had a blog
- Did marketing in college
- Been on Twitter since 2011

- "When I chose copywriting I probably had like $2,000 to my name. It was a challenging time."

He bought a $50/month course that taught the ins and outs of ghost writing. After signing his first two clients at $1,000 each, he reinvested all $2,000 into a bigger $2,000/month course ($12,000 total). That investment led to a $3,000/month client.

## The Service

The Birdhouse writes tweets, threads, and repurposes client videos for Twitter. They focus on coaches, consultants, and education companies because these clients can monetize faster.

Services include:
- Tweets and threads
- Long-form posts
- Articles
- Replies
- Spaces setup
- Video repurposing

## Getting First Clients

### The Cold-Warm-Hot DM Strategy

**Cold DMs (100-200/day):**
- Compliment based on their profile
- Give your offer
- Say "if interested let me know, if not you're good"

**Warm DMs:**
- DM people following you
- DM people engaging with your content

**Hot DMs:**
- People already interested
- They're DMing you first

- "Using those three and having a happy balance, that's how you can really accelerate the clients that you land."

### First Client Journey
1. Started on Upwork
2. Used that job as social proof for Twitter DMs
3. Sent 100-200 DMs a day, tracked in Notion
4. Landed first $1K/month client
5. Got testimonial: "I got seven free trial subscribers"
6. Used that to land $3K/month coach client
7. Crushed it - viral every week, drove sales

- "He's paying me $3K a month and this thread probably made him like $20-30K. So he just made enough money to pay me for 10 months."

## The Closer Framework

For introverts who struggle with sales, Marcos used "The Closer Framework":

- "If you can just get on a call, tell someone how you actually are going to help them and be honest and be a human, most people actually vibe with that."

Key insight: Sales is about conviction. If you believe you can help someone make more money, it's easy to sell.

## Scaling to $50K+/Month

Two big shifts:
1. **Mindset shift**: From tactic hunting to implementing
2. **Hiring**: Decided to be an entrepreneur, not solopreneur

- "Implementing is actually going out and doing it not just once, not just for a week, but for 6 months, 12 months straight."

## Differentiation

Instead of promising followers (what everyone else did), Marcos differentiated:

- "I quickly realized there's a much better way to do it. If I just make somebody more money than they pay me, then I'll have a client forever."

His offer: Help you monetize with Twitter, not just grow. Growth is a byproduct.

## Current Business

- ~$70K/month revenue
- ~60% margins
- Team of 5-6:
  - 2 senior writers
  - 1 junior writer
  - 1 ops manager (started as assistant)
  - 1 sales representative

## Tools
- Google Docs/Sheets
- Canva for design
- Hemingway (writing grade level checker)
- Hypefury (tweet scheduling with client access)
- Notion (dashboards, CRMs, client hubs)

## Day in the Life

Marcos themes his days:
- **Mondays**: 12-15 meetings, 7am-5pm, then Jiu-Jitsu
- **Tuesdays**: Blank calendar - editing content, sourcing clients, working on business
- **Wednesdays**: Calls and content day

- "I don't really go out, I don't really party. I'm usually just either working in or around my business or going to Jiu-Jitsu, gym, watch TV, play video games."

## Key Advice

- "Play to your strengths and have the discipline to just stick it out. I would have succeeded 5 years earlier."

Biggest struggle was shiny object syndrome - seeing people flex Rolexes and Lambos online. The solution: shut out the noise and stick to one thing.

## Resources
- The Birdhouse: Twitter ghost writing agency
- Follow Marcos on Twitter`
  },
  {
    id: 83,
    title: "The Multipreneur: He Makes $10M/Year With 6 Businesses",
    founder: "Greg Eisenberg",
    app: "Late Checkout (Holding Company)",
    revenue: "$10M/year",
    videoUrl: "https://www.youtube.com/watch?v=akM6P97_0B8",
    videoId: "akM6P97_0B8",
    thumbnail: `https://img.youtube.com/vi/akM6P97_0B8/maxresdefault.jpg`,
    postedDate: "Sep 17, 2024",
    keyInsight: "The ACP Funnel: Audience → Community → Product. Build trust first, then sell. Charge $1.5M/year per client instead of $1,500/month.",
    tags: ["Holding Company", "Agency", "Community"],
    summary: `## The Story

Greg Eisenberg runs Late Checkout, a holding company doing eight figures in revenue with mid-seven figures in profit. He's been part of companies that raised billions of dollars, but makes more money and works less as CEO of his own holding company.

His origin story includes a life-changing moment at 17 - a school shooting where 19 people were shot. That experience made him realize life is short and he wanted to do big things.

- "I realized as a 17-year-old that life is short and I wanted to do big things."

Greg later sold his company Islands (Discord for college students) to WeWork and became head of product strategy. When WeWork went from $47 billion valuation to near-bankruptcy, he vowed his next venture would be profitable from day one.

## The Six Businesses

Late Checkout owns six companies:

1. **LCA** - Innovation agency working with Nike, Dropbox, Shopify, TikTok
2. **YouProbablyNeedARobot.com** - One of the biggest AI communities online
3. **DesignScientist.com** - Design agency
4. **Boring Holdings** (another holding company):
   - BoringMarketing.com - AI-assisted SEO business
   - BoringAds.com - AI-assisted ads agency
5. **Multipreneur.co** - Community for multipreneurs

## The ACP Funnel

Greg's secret sauce for the last 15 years:

**A = Audience**
Build a social media audience (Twitter, Instagram, TikTok). Greg built a Twitter account of 10,000+ followers.

- "10,000 people - anyone can get to 10,000 followers."

**C = Community**
Convert audience members to a place you own (emails, SMS, community). Greg hosted "orange wine disco parties" in Williamsburg basements and met his first clients there.

**P = Product**
Create the product they want most. After building trust at parties, he told people about LCA and they said "come into my office first thing Monday."

- "The ACP funnel is the secret sauce that I've used for the last 15 years that I'm only now sharing with the world."

## The $1.5M/Year Client Model

Instead of charging $1,500/month like most agencies:

- "We charge on average $1.5 million a year. Why? Because if we come up with a whole new vision for where to take your company, often times those products generate 9 to 10 figures of revenue. $1.5 million sounds like a pretty good trade."

First year: $1.5M revenue with one big client and one half client
Second year: $5M+ revenue with a few clients at $1M each

## Why Multipreneurship

Instead of one company doing $100K/month, have multiple companies doing $25K/month each:
- Built-in insurance if one struggles
- Protection from platform changes (Google, Instagram)
- Compounding effects are "next level"
- Cheaper and faster than ever to build with AI

- "Not only is it cheaper than ever to build, faster than ever to build with AI, the compounding effects are super real."

## Building Multiple Businesses

### The Nice Break Failure
Started with product first - wrong approach. Closed it down.

### Design Scientist Success
1. Started Twitter account around design inspiration
2. Got to a few thousand followers in weeks
3. Saw opportunity
4. Whipped up landing page, brand, and team in 72 hours
5. First year: 7 figures revenue, $450K profit

### Boring Marketer Success
1. Started Twitter account about "boring" marketing (ads, SEO)
2. Built community
3. Created AI-assisted keyword research and SEO content tool
4. First year: $350K profit
5. Second year projection: $2-3M profit

## Hiring Strategy

Two methods:
1. **From communities**: Reach out to most active "nerds in residence" - experts who care
2. **Cold DMs**: Find interesting people online, get their email, DM them

- "The best people to hire actually work a job."

## Idea Finding Tools

- **RedditList.com** - Shows how fast subreddits are growing
- **GummySearch.com** - Takes a subreddit and shows biggest problems

- "It's your job as the entrepreneur, as the multipreneur, to solve them."

## Other Tools
- Framer (landing pages)
- ConvertKit (email with automations)
- VidIQ (YouTube competitive analysis + top questions in comments)
- Slack (team communication)
- Notion (entire team runs on it)
- Figma (designs)
- Loom (quick video updates)

## Day in the Life

- Wake up 6am
- French press coffee
- Watch sun come up outside
- Plan 2-3 things that would make the day successful
- 45-minute afternoon workout
- After work: activities without phone to reset

## Key Advice

- "I made the mistake of listening to the top entrepreneurs of my day who said go build a venture-backed company and scale it and be Mark Zuckerberg. I was living someone else's life."

Greg spent 12-13 years working 7am to 2am, 7 days a week.

- "Everyone deep down knows what's for them and life is about getting to that truth. Find your truth, don't listen to what anyone says, and go after it."

## Resources
- Late Checkout: https://latecheckout.co/
- Follow Greg: https://twitter.com/gregisenberg`
  },
  {
    id: 84,
    title: "I Make $1M/Month From Bed",
    founder: "Colin McIntosh",
    app: "Sheets & Giggles",
    revenue: "$1M/mo",
    videoUrl: "https://www.youtube.com/watch?v=dphK9rh2F5U",
    videoId: "dphK9rh2F5U",
    thumbnail: `https://img.youtube.com/vi/dphK9rh2F5U/maxresdefault.jpg`,
    postedDate: "Sep 10, 2024",
    keyInsight: "Business model first, product second. Capture 11,000 emails before launch, convert at 4.5%, and do $284K in your first 30 days.",
    tags: ["E-commerce", "DTC", "Bedding"],
    summary: `## The Story

Colin McIntosh built Sheets & Giggles into a $1 million/month bed sheet company - and he literally runs it from bed.

- "I work from bed all the time actually. This is definitely the office."

Colin was fired twice and laid off once before starting his own company. After losing his job, a friend called about helping with a Kickstarter for wearable tech. That experience and the mentorship he received changed his life.

- "My best advice I can give people is if you think someone's going to be a good mentor, say 'Hey, do you have an hour a week that I can spend with you and buy you lunch every week and ask you questions?'"

He had three mentors he bought lunch for every week.

## The Business

Sheets & Giggles is a direct-to-consumer brand selling eucalyptus bed sheets. Started in October 2017, shipped first box October 2018, hit first $1M month in November 2020 (25 months later).

Current product line:
- Sheets, comforters, duvet covers, pillowcases
- Throw blankets, pillows, crib sheets
- Mattress protectors
- Mattresses (launched late 2022)
- 7 sizes, 17 colors, hundreds of SKUs

Sales split: 80-90% Shopify, 10-20% Amazon

## Finding the Idea

Colin's approach was unconventional - business model first, product second:

- "I really encourage people to build a business model first that they really feel strongly about that makes sense for them, their skill set, what they're best at in the world."

He wrote his business model before knowing what the product would be. He wanted something in a big space where he could carve his own niche.

## The $284K Launch

### Email List Building
- Built landing page: "Sign up now and on May 1st when we launch, you'll get the best price"
- Regular price: $100/set
- Early signup price: $69
- Captured 11,000 emails at 46% email capture rate
- Sent surveys: What colors? How much would you pay?

- "If you get people feeling like they're building a product with you, they become emotionally invested."

### Crowdfunding Math
To hit $100K campaign:
- Need 30% of goal on day one ($30K)
- Need 300 customers at $100 each
- Need 10,000 emails (3% conversion rate)

### Actual Results
- Email list converted at 4.5% (not 3%)
- Got 450 customers at $100 AOV
- Did $45,000 on day one
- Snowballed into $284,000 campaign in 30 days

- "I attribute a lot of that to the content we were sending out. It was so different than any email they'd ever gotten."

## Four Rules for Brand Names

1. **Spell-able, shareable, and memorable**
2. **Connote or denote what you do** (Sheets & Giggles = bed sheets)
3. **Good SEO** - Don't pick words where searches find competitors
4. **Have a .com** - Americans don't buy from anything else

- "If you have four for four, you're a bullseye. Three for four, go forward. Two for four, try again."

## Marketing Strategy

What works:
- Facebook, Instagram, Google, Amazon ads
- Podcast sponsorships
- YouTube channel sponsorships

The secret sauce:

- "I sponsor podcasts that I love and I sponsor YouTube channels that I watch."

Why this works: If you love something, people who also like it are like you. They'll resonate with your brand personality. You can make inside jokes, write compelling copy, build landing pages in that brand voice.

- "The conversion rate on that is insane versus every other page on our website."

## Brand Differentiation

In a crowded, boring space (bedding), Colin differentiates by:
- Using friends as models (cheaper + can't fake chemistry)
- Never ironing sheets in photos
- Being willing to piss off 20% of people

- "You can't be everything for everyone, so make sure that you're at least something for someone."

## Personal Touch

Colin personally handled everything in early days:
- Answered every social media comment
- Responded to every customer care email
- Wrote every email and website copy for years

- "I can't recommend enough that founders take the time to engage with people extremely personally on a granular level."

## Tools
- Shopify
- Google Analytics & AdWords
- Rebuy (in-cart upsells)
- AfterSell (post-purchase upsells)
- Okendo (reviews)
- Tracking More (order tracking)
- SiteGPT (AI chatbot - $50/month, cut customer care tickets by 30%)
- Stockimg (image creation)
- DALL-E
- ChatGPT (for blank page problem)

## Team

About 40 people touch the business daily:
- Logistics and warehousing
- Amazon ad agencies
- Performance marketing agencies
- Affiliate agencies
- Full-time: marketing, product, operations, customer care
- Mile High Workshop (Denver) - helps lower recidivism and homelessness rates

## Day in the Life

- "I work from bed all the time. I go out to the river with Harvey my little Jack Russell, sit right in the water up to my chest, put my laptop on a rock, set up hotspot, and just work from the river probably 3 days a week in summer."

His job now: meetings, coordination, follow-ups, analytics, reporting, content creation.

## Key Advice

- "Kindness plus hard work plus intelligence leads to good things. You're kind and smart, so keep working hard and eventually it'll pay off. Stay with it."

## Resources
- Sheets & Giggles: https://sheetsgiggles.com/
- Amazon: amazon.com/sheets`
  },
  {
    id: 85,
    title: "I Turned One Website Into $1M/Year",
    founder: "Matt Giovanisci",
    app: "Swim University",
    revenue: "$1M/year",
    videoUrl: "https://www.youtube.com/watch?v=7pCgbhUWW54",
    videoId: "7pCgbhUWW54",
    thumbnail: `https://img.youtube.com/vi/7pCgbhUWW54/maxresdefault.jpg`,
    postedDate: "Sep 3, 2024",
    keyInsight: "Content is the entire business model. Keep making content - blog posts, videos, emails. When you stop, the business suffers.",
    tags: ["Content", "Education", "Niche Site"],
    summary: `## The Story

Matt Giovanisci makes over $1 million a year with one website - Swim University - teaching people how to take care of their pools and hot tubs. He built it while working at his 9-to-5 job until his boss found out and fired him.

- "My boss found out about that and fired me. I was like 'oh okay, I'm going to put everything I have into making this work.' And then from there it just kept going up."

Matt worked at pool companies since he was a kid, eventually becoming a marketing director. He realized he could scale the advice he gave customers in-store by writing blog posts and making videos.

- "I thought I could do this at scale if I just wrote this as a blog post or made a video about this."

## The Business Model

Swim University is a media company focused on pool care education:
- Blog posts (SEO-driven)
- YouTube channel: 225,000 subscribers
- Newsletter: 100,000 pool owners, 2-3 emails/week
- Courses: 3 pool courses, 1 hot tub course
- Physical book (launched last year)

Revenue streams:
- YouTube AdSense
- Affiliate marketing (mostly Amazon)
- Courses (bulk of revenue)
- Book sales

## The Early Days

Matt was self-admittedly a terrible writer:

- "My grammar was terrible. There was no periods, nothing, no commas. It was just poorly written from someone who knows how to talk but doesn't know how to stop. Kind of like written by a third grader."

But he could build websites in pure HTML and make them look professional. He worked hard to improve his writing.

First year after getting fired: $20,000 (supplemented with website design)
Second year: $40,000

- "I was like, I have a real business."

## Monetization Journey

1. **Started with AdSense** - Easiest first dollar
2. **Moved to affiliate marketing** - Didn't like how ads looked
3. **Created first product** - PDF for $50 (no sales), dropped to $24 (lots of sales)
4. **Pool Care Handbook** - Video course + ebook combination
5. **Printed book** - Now the majority of revenue

- "The majority of how we make money is through the course material and the books."

## Content Strategy

The same strategy since day one:

- "It's the same exact thing I've been doing since day one. It's just content. Put out as much content as I possibly can create."

The content flywheel:
1. Start with long-form video script
2. Record long-form video (1/week)
3. Re-record bits for short-form (3/week)
4. Post shorts on YouTube, Instagram, TikTok, Pinterest, Twitter, LinkedIn
5. Turn scripts into blog posts for Google
6. Capture emails from traffic
7. Send 2-3 emails/week to newsletter
8. Run ads to supplement

His best-performing video is a simple PowerPoint with no script - just his thoughts on pool care from start to finish.

- "What that tells me is it doesn't matter how good your video is, it just matters if the content is good."

## Building in a Boring Niche

- "No one wants to get good at taking care of their pool or skimming a pool. They just want to swim in the pool."

Matt's approach:
- Be short and punchy
- Be entertaining to keep attention
- Get people from "pool's disgusting" to "pool's clear and safe" quickly

- "This is not a hobby business. I can't do an hour-long podcast where we're just riffing about pool care because no one's going to listen."

## Finding Your Niche

Matt's advice: Walk around your house and write down things in your room.

- "Pick something that you know and that you're at least interested in. Because when the going gets tough, at least you like the topic a little bit."

## Tools
- **Asana** - Everything is in it (even when to take out trash, pay credit cards)
- **Google Drive** - All files in cloud
- **WordPress** - Website
- **Semrush** - SEO
- **Rank Math** - WordPress SEO plugin
- **Lasso** - Affiliate links
- **ChatGPT** - Business partner for decision-making
- **Klaviyo** - Email list ("the best")

- "I use ChatGPT as a business partner. I talk to it like a human and ask it questions to help make decisions on things that I don't think about."

## Family Business

The team is just three people - all family:
- **Matt**: Everything else (on-camera, email marketing, podcasts, articles, website, admin)
- **Steph (wife)**: Long-form scripts, short-form content, edits/publishes YouTube
- **Brother**: Short-form edits, customer service

Everyone gets paid the same:

- "Nobody feels super inferior. I don't feel like a boss. I don't need to make more than everybody else just because I own the company. I want everyone to be taken care of."

## Day in the Life

- Wake up 7-8am
- Stay in bed until 9am watching TikToks
- Make breakfast, coffee
- Work around 10-11am
- Done by 5-6pm
- Sometimes work in the brewery (behind the house)
- No weekends unless super pumped about an idea

## Challenges

- "Just the slowness of it. It doesn't want to skyrocket. It's just like a huge boulder that I've been slowly pushing up a mountain for 20 years."

Matt struggles with wanting to push hard and then burning out. The business "just needs what it needs and does what it does."

## Side Projects

- **Roasty Coffee** - Applied Swim University playbook, got to 100K uniques/month in 2 years, sold it
- **Money Lab** - Podcast for documentation
- **Brew Cabin** - Passion project he doesn't want to monetize

- "The thing that I'm really actually passionate about should just be my thing for me. As soon as you turn it into a business, as soon as the financials bleed in, it starts to become a little bit... yeah."

## Key Advice

- "Keep making content. Just keep making content. Get better at writing. Keep making videos. Because I keep stopping, I keep shifting, I keep thinking 'oh this will solve the problem.' But no - every time I make content, business moves, business is good. When I don't, that's when it suffers."

On lifestyle vs. business:

- "Think about lifestyle over business. I don't think about money as the outcome. There's a million things I could have done to make way more money, and that would have been a nightmare to manage and I would have hated my life."

## Resources
- Swim University: https://www.swimuniversity.com/
- Money Lab Podcast
- Brew Cabin`
  },
  {
    id: 86,
    title: "I Make $5M/Year With 3 Businesses",
    founder: "Tim Stoddard",
    app: "Stazzi Internet Marketing, Recovery Local, Copy Blogger",
    revenue: "$5.5M/year",
    videoUrl: "https://www.youtube.com/watch?v=zTKYJWAEl78",
    videoId: "zTKYJWAEl78",
    thumbnail: `https://img.youtube.com/vi/zTKYJWAEl78/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Build a portfolio of cash-flowing assets. Agencies are the best business to start - you just need one client.",
    tags: ["Agency", "Portfolio", "SEO"],
    summary: `## The Story

Tim Stoddard runs a portfolio of businesses generating over $5 million a year. His main company is **Stazzi Internet Marketing**, an SEO lead generation agency doing about $2.5 million annually. He also owns **Recovery Local** (parent company for sober.com, yourfirststep.com, detox.com, medicallyassisted.com) and **Copy Blogger**, which teaches people how to write for the internet.

Tim's journey started from rock bottom. He grew up blue-collar, got in trouble as a kid, and developed a drug problem. When he went to rehab and got sober, a mentor bought him a subscription to Success Magazine. He heard Seth Godin say "start a blog, don't tell anybody about it, and write in it every day." That simple advice changed everything.

He started a BlogSpot writing about his recovery journey. People found it through search, which led him to discover SEO. He read Copy Blogger every day to improve his writing. Eventually, treatment centers started reaching out asking how he built his community - and that became his first business.

## Key Insights

### The Multipreneur Strategy
- Build a portfolio of assets that do the hard work for you
- Use cash from your agency to reinvest into cash-flowing businesses
- Three criteria for investments: Do I like the founder? Is it cash flowing? Is it evergreen?

### Why Agencies Are the Best Starting Business
- No upstart capital required
- You just need one client to be profitable
- Hard to scale (every new client = more work), but great for generating cash to invest elsewhere

### Sales Tips for Closing Deals
1. Learn to ask questions so the person tells you their pain points
2. Get the price out of the way early - avoid "let me think about it"
3. Ask for the deal: "Are you ready to get started?" Then shut up and wait

## Building a Team

Tim hired people straight out of halfway houses - people in recovery who he's built the business with over 10 years.

Key advice: Read "The E-Myth Revisited" - realize you're the biggest problem in the company. Document processes, teach, then get out of the way.

## Day in the Life
- Wake up at 4am, chug water, coffee, record assignments
- Take kids to school around 8am
- Gym from 8:30-10am
- Mornings: Logistics and task assignment
- Afternoons: Deal making, follow-ups, phone calls, proposals

## Tools
- **Slack** - Communication
- **Loom** - Record assignments (underutilized tool)
- **Todoist** - Personal task management
- **HubSpot** - CRM for leads and network
- **ClickUp** - Agency task management
- **Google Drive** - Everything else

## Key Advice

"The solution to every problem in my life is I'm just going to get through the day. I'm just going to make it till midnight. I live my life one day at a time."

## Resources
- Follow Tim: https://x.com/timstodz
- Stazzi Internet Marketing
- Copy Blogger: https://copyblogger.com`
  },
  {
    id: 87,
    title: "I Made $2.5M Selling A Digital Product",
    founder: "Thomas Frank",
    app: "Ultimate Brain & Creators Companion (Notion Templates)",
    revenue: "$100K+/mo",
    videoUrl: "https://www.youtube.com/watch?v=OKl0C3zg0LU",
    videoId: "OKl0C3zg0LU",
    thumbnail: `https://img.youtube.com/vi/OKl0C3zg0LU/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Study successful founders instead of taking courses. Build products you use yourself, then package and sell them.",
    tags: ["Digital Products", "Notion", "YouTube"],
    summary: `## The Story

Thomas Frank has made over $2.5 million selling Notion templates. His main channel has nearly 3 million subscribers with 180 million lifetime views, but his smaller niche channel **Thomas Frank Explains** (230K subscribers) drives most of his template sales.

Thomas started blogging in college after getting rejected from writing for Hack College. He took that rejection and started his own site, College Info Geek. He started YouTube in 2014, posting weekly videos until the channel hit 1 million subscribers. But success brought pressure - every video needed 100-200K views, sponsors expected results, and it stopped being fun.

In 2020, he made some Notion videos that did well. He wanted to make more niche tutorials but they didn't fit the main channel's brand. So he started a brand new channel from scratch - and started having fun again.

## Key Insights

### The Launch Strategy
- **Creators Companion**: Started at $3K/month, scaled to $15K/month in 6 months
- **Ultimate Brain**: $90K from a waitlist of just 3,200 people in 30 days
- Made a 45-minute video walking through the template - "the whole video is an ad but it's still educational"
- Revenue jumped to $100K/month after that video

### Learning by Observation
- Thomas never takes courses - he deeply observes people he admires
- "When you do that over time you just kind of observe what people are actually doing at a world class level"

### Building Products You Use
- Creators Companion was an evolution of their own YouTube management system from 2018-2021
- Ultimate Brain started as a task management template Thomas made for himself
- Just polish it up, add features, package it, and sell it

## The Customer Funnel

1. **YouTube Content Types**:
   - Build guides (teach how to build something, include free template)
   - New feature releases
   - Fundamentals/beginner content
   - Listicles ("10 ways you're using Notion wrong")

2. **Call to Actions**:
   - Pitch paid template
   - Pitch free template → email list
   - Resource page → email list

3. **Email Autoresponder**:
   - Send free templates
   - Offer discount code for premium templates

## Pricing Strategy
- Started at $99/$149 for Creators Companion
- Now $149 for Ultimate Brain alone, $229 for full bundle
- Did a price increase - volume dipped but overall revenue went up

## The Power of Niche Channels

"The power of a niche channel is you're not trying to interest people in you. You're building content about something they're already interested in."

Thomas models his strategy after Zapier - cast a slightly wider net around your niche to bring people in, then show them your specific solution.

## Tools
- **Notion** - Product and internal use
- **Circle.so** - Customer support/community
- **Lemon Squeezy** - Point of sale (handles taxes as merchant of record)
- **ConvertKit** - Email marketing
- **Pipedream** - Automation (like Zapier but for developers)

## Key Advice

"It doesn't matter if you get harsh feedback because you're going to learn from it. Start building friendships with other ambitious people. Become a fan first - share their stuff, comment, and eventually those lead to friendships and a network that helps you succeed."

## Resources
- Thomas Frank: https://www.youtube.com/@ThomasFrank
- Thomas Frank Explains: https://www.youtube.com/@ThomasFrankExplains`
  },
  {
    id: 88,
    title: "I Built A $1M App In 5 Hours",
    founder: "Dawson",
    app: "Earni.fi",
    revenue: "$1M+ ARR",
    videoUrl: "https://www.youtube.com/watch?v=u8sW-NhGfXw",
    videoId: "u8sW-NhGfXw",
    thumbnail: `https://img.youtube.com/vi/u8sW-NhGfXw/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Wait until ideas are crystal clear before building. Then execute fast - 4-5 hours from start to finish.",
    tags: ["Crypto", "Solo Developer", "Hackathon"],
    summary: `## The Story

Dawson built **Earni.fi**, a crypto app that helps Ethereum users find and claim money they didn't know they had through airdrops. He grew it to 250,000 free users, 5,000 paid users, over $1M ARR, then had a successful exit to Bankless. The crazy part? He built the initial version in just 4-5 hours.

Dawson's path to entrepreneurship wasn't straightforward. As a kid, he wrote programs to help cheat on geometry tests - his first taste of product-market fit. But college killed his excitement for software. He almost dropped out until he discovered hackathons, which reignited his passion for building products real people use.

He worked at Uber in 2016 but became disillusioned with big tech inefficiency. He quit, traveled the world for a year as a digital nomad, and met people in Australia using Ethereum for nonprofit financial aid distribution. That pulled him back into tech and crypto.

## Key Insights

### The Ideation Process
- Dawson knew the pain points as a user in the crypto community
- He waited 2-3 weeks of a month-long hackathon just letting ideas bounce around
- "Once I have conviction, the idea just flows more easily"
- Built the entire solution in 4-5 hours once he started coding

### The Viral Launch
- Published a tweet with a video showing an address with tons of airdrops
- Created FOMO: "This is what's possible out there"
- People wanted to help others find free money - easy to retweet
- **10,000 organic signups in 48 hours**

### The Anti-Email Strategy
- Dawson hates spam, so he only sent emails when users had money to claim
- Open rates were through the roof
- Eventually paywalled all airdrops - you see "$793 unclaimed" but need to pay to access

### Viral Marketing Campaigns
- "25 Days of Christmas": Tagged someone publicly on Twitter every day showing their unclaimed amount
- Created community pressure - others wished they had airdrops to claim
- Became a "fiend" for conferences and in-person networking

## Differentiation in a Crowded Space
- Obsessive about quality - only notified users about high-value airdrops
- Competitors included too much, lowering quality and trust
- Trust is huge in crypto due to hacking/phishing risks
- Being early + providing quality = no one can catch up

## The Exit
- Got a Twitter DM from David Hoffman of Bankless podcast
- Bankless had helped Dawson get into Ethereum originally
- After 2 years of solo growth, Earni.fi was acquired by Bankless

## Post-Exit Life
- Living in a Sprinter van in Colorado, skiing
- Felt a "freefall" after the dopamine wore off
- Realized meaning comes from community and sharing experiences
- Now doing consulting, open source projects, and building in public again

## Tech Stack
- **TypeScript** full stack
- **Node.js** backend
- **React** frontend
- **Next.js** framework
- **VS Code** editor
- Maxed out MacBook Pro, split keyboard, 32" monitor

## Key Advice

"Enjoy the process more. Don't have as much anxiety or worry - it will all work out."

## Resources
- Follow Dawson on Twitter/Farcaster`
  },
  {
    id: 89,
    title: "I Make $1M/Year With One Website",
    founder: "Alex",
    app: "Fin vs Fin (Affiliate Marketing)",
    revenue: "$1M+/year",
    videoUrl: "https://www.youtube.com/watch?v=7LZ0MTkNr34",
    videoId: "7LZ0MTkNr34",
    thumbnail: `https://img.youtube.com/vi/7LZ0MTkNr34/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Go after low competition, longtail keywords in new niches. Partner directly with brands instead of using affiliate networks.",
    tags: ["Affiliate Marketing", "SEO", "Side Hustle"],
    summary: `## The Story

Alex built **Fin vs Fin**, a product review site in the health and wellness space that generates over $1 million a year through affiliate marketing. He started it as a side hustle in 2018 while working a full-time job, and didn't quit until his side income replaced his $150K salary.

Alex always knew he wanted to be an entrepreneur - both parents were entrepreneurs. But working at early-stage startups wasn't a 9-to-5; it required founder mentality. His aha moment: he needed a true 9-to-5 at a larger company so he could close his laptop at 5pm and side hustle.

The original idea was "Fin vs Fin" comparing fintech companies. But he noticed $100M Series A rounds going to telemedicine companies with zero content online about them. He pivoted to health and wellness, wrote the first 60 articles himself while learning WordPress, and waited 6 months before seeing significant organic traffic.

## Key Insights

### Finding Your Niche
- Can't win in a crowded space when you're new and not authoritative
- CAN win queries nobody has ever written about
- Look for: New industries + High margin products + Lots of momentum
- Alex was among the first to review telehealth platforms that are now household names

### The Direct Partnership Model
- Instead of using affiliate networks, Alex partnered directly with brands
- Pitch: "I'm pretty sure we're driving you sales. There could be more if we work together."
- Brands name their price for customers you drive
- This was the "smart, innovative moment" that scaled the business

### Keyword Research Strategy
- Go after low competition, longtail keywords
- If you're in the audience you serve, queries are intuitive
- Recognize high-intent query patterns
- Write the very best thing online about each brand
- Sometimes that means more depth, sometimes more concise
- Match the true intent behind the query

### Content Strategy
- Be there first - write the first thing online about it
- Write the best thing
- Fresh content wins - stale content erodes rankings
- Stay within your topical authority (don't go outside your lane)

## Scaling to a Portfolio
- Now runs 6 sites in the portfolio
- Economies of scale: one partner can be on five sites
- Each site focuses on a narrower niche within health/wellness

## Diversifying Traffic
- Started testing paid advertising
- Pitch to partners: "I have an idea for more growth. It will cost a test spend of a few thousand."
- If it works, it's extremely scalable

## Team Structure
1. First hire: Writers
2. Virtual assistant for publishing tasks
3. Full-time editor
4. Designer
5. Web developer

This freed Alex to focus on partnerships - highest leverage for revenue.

## Day in the Life
- Start around 8:30-9am
- Weekly team meetings
- Brand partnership meetings
- Review content, tweak ad campaigns
- Stop around 4pm for family time
- Evening window after kids sleep for emails and team coordination

## Key Advice

"You can't see around very many corners and you're going to have to pivot a bunch. Just get started. Pick a broad-based audience and figure out their problems. Where you start is not where you end."

## Resources
- Fin vs Fin: https://finvsfin.com`
  },
  {
    id: 90,
    title: "I Built This $5M/Year Business From A Van",
    founder: "Jeremy (Van Man)",
    app: "Van Man Natural Products",
    revenue: "$5M+/year",
    videoUrl: "https://www.youtube.com/watch?v=6iqo7lNR_m0",
    videoId: "6iqo7lNR_m0",
    thumbnail: `https://img.youtube.com/vi/6iqo7lNR_m0/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Document your journey on Twitter. Let your community teach you what products to build, then give it back to them.",
    tags: ["E-commerce", "Twitter", "Natural Products"],
    summary: `## The Story

Jeremy, known as "Van Man" online, built a $5M/year natural products business selling toothpaste and balms - all started from a $2,000 van he bought on Craigslist. His products are handmade, scooped by hand with a spoon, and shipped from his San Diego warehouse.

Jeremy was down on his luck, wanted to reset his life. He sold all his belongings, quit his job, and bought a van. He started an account called "Van Man" on Twitter, posting about random health things. He got into the anti-fluoride movement, bought fluoride-free toothpaste by accident, then just started brushing with baking soda.

Baking soda was too harsh and salty, so he started adding stuff to it. He documented everything on Twitter. People said "I'll try that!" Then he saw an Arnold Schwarzenegger video about putting eggs in protein shakes, started researching eggshells for teeth, found eggshell powder, added it to his tooth powder. When he launched, he sold a couple hundred units in the first hour.

## Key Insights

### Building in Public
- Documented his entire journey on Twitter
- The community taught him the knowledge, he gave them the product back
- "The customers taught me this knowledge and then I gave them this product"

### Top Products
1. **Tallow Honey Balm** - The breakout product. Reviews went nuts, people share it for free because they love it
2. **Mint Bone Toothpaste** - Second best seller
3. Coming soon: Soap (expected to be a top seller)

### Meme Marketing Strategy
- Most divisive posts on Instagram generate comments and traction
- Use recognizable faces with memes to make content relatable and shareable
- Example: Picture of Mel Gibson talking to Mark Wahlberg, write what the voice would be
- Timing matters: Get current events and turn them into memes the next day while fresh
- "Getting good at meme marketing isn't 20 minutes a day - it's being perpetually online"

### The Power of Product Expansion
- Started with tooth powder under $20
- Added mouthwash, deodorant, hair oil
- When you have 5-6 products under $20, average order goes up
- Higher average orders = shipping costs go down, processing goes down
- "That's when we actually started to have free cash flow"

## Operations
- Ships 500-600 orders per day
- Everything handmade in San Diego warehouse
- Tallow scooped by hand with a spoon since day one
- "I think we'll just keep doing it by hand forever"

## The Vision
- 40% of customers come back (lifetime value focus)
- Goal: Own their own cows and bison
- Make more money per animal, take better care of animals
- Eventually sell premium meat for Walmart prices
- "Extremely affordable high quality meat and eggs and dairy"

## Day in the Life
- Morning: Check for fires, make sure ingredients aren't running out
- Lots of time being online: commenting, answering DMs, emails
- Come up with posts that resonate
- After posting: Stay in comments for hours
- "That's when you're getting the pulse of what everyone thinks"

## Key Advice

"Etsy is the best place to start. Browse for product ideas, put your own spin on it, sell it right back on Etsy. Always be testing ads on different products. Find that one winning ad that could float your next month. Never stop - some people get a couple failures and give up. Just never accept that life and try anything to get out."

## Resources
- Follow Van Man on Twitter: @vanaborat`
  },
  {
    id: 91,
    title: "I Made $30M With My Side Project",
    founder: "Kevin Espiritu",
    app: "Epic Gardening",
    revenue: "$30M+/year",
    videoUrl: "https://www.youtube.com/watch?v=uBGbvKScavk",
    videoId: "uBGbvKScavk",
    thumbnail: `https://img.youtube.com/vi/uBGbvKScavk/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Curiosity is what propels you as an entrepreneur. Follow rabbit holes - they often lead somewhere years later.",
    tags: ["Content Creator", "E-commerce", "Gardening"],
    summary: `## The Story

Kevin Espiritu is the founder of **Epic Gardening**, the world's most followed gardening brand. What started as a hobby blog in 2013 has grown into a business doing tens of millions in revenue per year - bootstrapped to $7.3 million and beyond.

Kevin grew up in San Diego, really into science and math. When he was 13, his dad passed away in a swimming accident - a moment that made him exceptionally independent and stopped caring what anyone thought he should do. After graduating college with no clear direction, he spent months trying random hobbies: night photography, drumming 6-8 hours a day, video games.

In 2013, he started gardening with his brother just to break the pattern and get outside. He fell in love with it and registered a blog - not thinking it would be anything but a hobby. He moved in with his mom's ex, then a friend, spending 12 hours a day writing blog articles and trying to get traffic. Within 2-3 months, the blog was making $2-3K/month. By late 2016, it hit $4-5K/month - an accountant's salary. That's when Epic Gardening became "a real thing."

## Key Insights

### The Power of Curiosity
- "Curiosity as an entrepreneur is what propels you"
- Kevin is innately curious about everything: how to grow plants, how e-commerce works, how to lead a team, how to hire
- Sometimes you go down rabbit holes that seem purposeless, then "lo and behold a year later, two years later, there it is"

### Revenue Growth Timeline
- 2016 (first 6 months full-time): $70,400
- 2017: $75,000
- 2018: $225,000
- 2019: $540,000
- 2020: $2.8 million
- 2021: $7.3 million
- Roughly tripled or more every year

### The Product Lightbulb Moment
- As a creator, brands wanted to sponsor his content
- Realization: "Why would I not just be the brand who would sponsor my own content?"
- Noticed everyone kept asking about a specific product: corrugated metal raised beds
- The product existed overseas but not in America
- Put up a "crappy Shopify store," posted an Instagram story, sold all 250 units in 2 weeks
- 2019: $250K media revenue + $250K product revenue
- "The actual business is beneath the educational mat I was putting out"

## Day in the Life
- Some days: Making lots of content and videos
- Some days: Meetings (product development, executive, partnerships)
- Has to block schedule for actual gardening time with no agenda
- Hard to turn the brain off: "Oh that'd be a cool video, that'd be a cool concept"

## The Homestead
- Third of an acre in suburban San Diego
- 1,000 sq ft house with girlfriend
- Nine hens, 300+ plants, 25 fruit trees
- Epic Gardening HQ: filming content, testing products, growing seed varieties

## Key Advice

"A lot of beginners will say 'I need to know stuff before I do stuff.' You don't need to know as much as you think. You don't need a fully baked business plan, business cards, and website registration before figuring out if anyone wants what you're selling. Consume some knowledge, but immediately put it into action. I spent so many times spinning my cycles on learning without doing - you're really just treading water doing nothing in the real world."`
  },
  {
    id: 92,
    title: "The Underdog: From Dead Broke to $30,000,000",
    founder: "Casey Holiday",
    app: "Qalo (Silicone Wedding Rings)",
    revenue: "$100M+ total sales",
    videoUrl: "https://www.youtube.com/watch?v=GGxUH6EXF9I",
    videoId: "GGxUH6EXF9I",
    thumbnail: `https://img.youtube.com/vi/GGxUH6EXF9I/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Find a painful problem and create a solution the market needs. Don't be paralyzed by what people think - they're not thinking about you at all.",
    tags: ["E-commerce", "Product", "Bootstrapped"],
    summary: `## The Story

Casey Holiday is the co-founder and president of **Qalo**, a company that has sold over $100 million worth of silicone wedding rings. He went from working at a restaurant, living in his mom's house, to building a $30 million company - all from a simple problem he and his business partner Ted both experienced.

Casey moved to LA to become an actor but ended up bartending at a restaurant in Beverly Hills where Ted was the manager. Both had just gotten married and realized they were experiencing the same problem: traditional wedding rings were a pain. You take them off at the gym, playing golf, doing anything active - and constantly lose them.

They searched for a silicone alternative and found nothing existed. Despite having zero business experience, they decided to give it a shot. Ted had savings, Casey had time and energy. They crashed a meeting with a manufacturer at a fancy hotel and asked: "Can you make these out of silicone?" The answer was yes.

## Key Insights

### The Devastating Start
- Emptied their savings accounts for the first batch of inventory
- Casey was so broke he didn't look at his bank account
- Moved in with his mom; his wife slept in their Fiat in the restaurant parking lot
- When the rings arrived: the product quality was awful, every ring unsellable
- Solution: Hand-trimmed 50,000 rings with eyebrow scissors while watching all 6 seasons of Lost

### The Viral Moment
- Sent a ring to Andy Dalton (Cincinnati Bengals QB) through his wife
- Months later: HBO's Hard Knocks featured 10 minutes about Andy wearing the rubber ring
- "We could not have sent him a script that was a better way of articulating our positioning"
- Next day: 3-4x sales, orders lined up all the way to the end of the house

### Scaling the Business
- Casey quit the restaurant to go full-time (Ted said they couldn't afford it)
- Recognized they were first movers - had to go fast before competitors with more money crushed them
- Grew to 13 people in a 200 sq ft office
- Eventually: $30 million revenue, ~100 employees, 20% profit margin

## The Philosophy

### On Starting
- "You don't really know what you don't know"
- Best way to learn: talk to people who know what you don't
- Focus on being better as a company, not bigger

### On Fear of Judgment
- "We are so concerned with other people's perception that it paralyzes us"
- "It's really freeing to realize that people actually aren't thinking about you at all"
- "You're being selfish by NOT solving the problem you know people have"

## Key Advice

"Communicate the problem you're solving. Determine the product to solve it. Even if it's terrible, focus on getting it to customers instead of making it perfect. Talk to as many customers as possible about how to make it better."`
  },
  {
    id: 93,
    title: "I Make $2.4M/Year With 6 YouTube Channels",
    founder: "Charlie Chang",
    app: "YouTube Channel Portfolio + Paired (Staffing)",
    revenue: "$200-300K/month",
    videoUrl: "https://www.youtube.com/watch?v=G5cbMnFXcj0",
    videoId: "G5cbMnFXcj0",
    thumbnail: `https://img.youtube.com/vi/G5cbMnFXcj0/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Focus on searchable evergreen content, not just viral videos. Pivot your content to match what's trending.",
    tags: ["YouTube", "Content Creator", "Affiliate Marketing"],
    summary: `## The Story

Charlie Chang is a 31-year-old entrepreneur in Southern California who runs 6+ YouTube channels generating $200-300K per month. His main channel has 1.1 million subscribers. Despite being an introvert, he's built a media empire through strategic content creation and smart monetization.

Charlie grew up in a non-entrepreneurial household - his parents wanted him to be a doctor. After graduating college, he couldn't find a job and started doing every side hustle imaginable: photography, video, print modeling, acting, a clothing brand, marketing agency, real estate, mortgages.

In 2020, his YouTube channel started taking off. He made $750 in a single day from AdSense and knew "this could be something big." He started learning everything about YouTube, making videos almost every day. Growth was fast: 500-1,000 subscribers per day, $10-20K/month in AdSense.

## Key Insights

### Revenue Breakdown (Across All Channels)
- Affiliate marketing: 50-55%
- Brand sponsorships: 20-25%
- AdSense: 20-25%
- Best month ever: Close to $300K

### The YouTube Channels
- Charlie Chang (main): 1.1M subscribers
- Sarwise: ~50K subscribers
- Charlie Chang Show, The Penthouse, My First Website, and others

### Content Strategy
- Focus on searchable evergreen SEO content, not just virality
- Example: "How to invest in stocks" - something people actively search for
- Pivot content to match trends: crypto when crypto boomed, stocks when stocks boomed, side hustles when side hustles boomed
- Titles that work: Age people relate to + big number + dollar amount = curiosity

### Viral Video Formula
- Perfect blend of: exclusive experience + good thumbnail + trending topic + storytelling
- Example: "Asking Coachella VIPs what they do for a living"

## Team & Operations
- 26 people on the media business team
- Structure: Charlie → COO → 2-3 Project Managers → Video editors, thumbnail people, graphics, website
- Team cost: ~$20-25K/month (heavily using overseas talent)
- Hiring sources: Upwork, Fiverr, OnlineJobs, and Paired (his own staffing company)

### Tools & Software
- ClickUp: Content planning
- Frame.io: Footage uploads and editor drafts
- One of 10 & Creator Hooks Pro: Thumbnail and title ideas
- Slack: Team communication
- HubStaff: Time tracking
- AI tools: Submagic, Descript, Opus for short-form content

## The Staffing Business (Paired)
- Started to build something with equity that could be acquired
- Helps find overseas talent (Philippines)
- One-time placement fee model
- Full-time positions: $600-1,000/month

## Key Advice

"Don't overanalyze. Pick something. If it's wrong, you'll learn and won't make that mistake. If it's right, you made a fast decision. Speed is a universal trait for successful people. If you're in a rut, completely change your environment or routine. If you're stuck in a city where you're not growing, move to a different city."`
  },
  {
    id: 94,
    title: "I Built a $1M AI App [No Code]",
    founder: "David Brusser",
    app: "Formula Bot",
    revenue: "$26K/month MRR",
    videoUrl: "https://www.youtube.com/watch?v=IZsQqarWXtY",
    videoId: "IZsQqarWXtY",
    thumbnail: `https://img.youtube.com/vi/IZsQqarWXtY/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Scratch your own itch. The cost of no-code is so low - what took weeks would have taken months with traditional coding.",
    tags: ["No-Code", "AI", "SaaS"],
    summary: `## The Story

David Brusser built **Formula Bot** (formerly Excel Formula Bot), an AI app now valued at over $1 million - all with no code. He built it while working a full-time job, with a family, working just a couple hours a day. The app helps people work faster with data through AI-powered spreadsheet tools.

David had a full-time job since graduating college in 2011 and always had an entrepreneurial itch. In July 2022, his youngest was about to be born, giving him 6 weeks of paternity leave. He decided to build something.

His problem: Junior analysts constantly knocked on his door asking for Excel formula help. He asked OpenAI's API for app name suggestions, checked GoDaddy, found "Excel Formula Bot" available, and couldn't find any competitors. He built the entire MVP in just a couple weeks using Bubble.io - no coding required.

## Key Insights

### The Product Suite
1. **AI in Spreadsheets**: ChatGPT inside Excel and Google Sheets
2. **Formula Generators**: Translates text into formulas with AI
3. **Data Analyzer**: Upload data, get answers/analysis/charts through natural language

### Stats
- ~750,000 users
- ~5,000 paying customers
- $26K monthly recurring revenue
- Built in ~2 weeks

### The No-Code Journey
- Used Bubble.io as the main platform
- Learned through YouTube tutorials and official documentation
- "If you were to code it, it would take much longer"
- App was 100% no-code until 4-5 months ago (now 5-10% code)

### The Viral Launch
- First users: Coworkers at his full-time job
- Posted on Reddit's Excel subreddit: "AI Excel Formula Generator" (free)
- Became top post of the day, then week
- Someone suggested posting to "Internet is Beautiful" subreddit
- Got 10,000+ upvotes, thousands of comments, went viral for months

### The $5,000 Crisis
- Viral success = massive OpenAI API costs
- Blew through $5,000 in days
- Decision: Shut down or keep going?
- Put up a Stripe donation link, made a few thousand back
- Ran a beta ad for ESPN's Excel competition
- Eventually launched with paywall and logins

### Competing with Microsoft & ChatGPT
- Microsoft reached out twice (Cease & Desist + Add-on partnership)
- Realized Microsoft would eventually build this into Office
- ChatGPT is free and unlimited
- Early advantage: Convenience (don't leave spreadsheet) + Customization (language preferences)
- New strategy: Build features that can't be replicated in ChatGPT or Microsoft

## Customer Development
- Would help users with their Excel files for free - but only on a phone call
- Used those calls to ask what they liked/disliked about the product
- "The culmination of scratching my own itch, leaning on my network, and impromptu phone calls revolutionized the product"

## Key Advice

"Scratch your own itch - solve your own problem. The power of no-code is that what took me a couple weeks would have taken months with traditional coding. When you're starting, you don't know what you don't know. The best way to learn is to talk to people who know what you don't."`
  },
  {
    id: 95,
    title: "The Underdog: From His Parent's Basement to $25M",
    founder: "David Park",
    app: "Jenny AI",
    revenue: "$3M+ ARR",
    videoUrl: "https://www.youtube.com/watch?v=Gv2fzC96Z40",
    videoId: "Gv2fzC96Z40",
    thumbnail: `https://img.youtube.com/vi/Gv2fzC96Z40/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "A decade of failing is normal. Put your all into it, sacrifice everything for many years, and then you have a shot.",
    tags: ["AI", "SaaS", "Persistence"],
    summary: `## The Story

David Park built **Jenny AI** to a $25 million valuation in just 2 years - after a decade of failing. He started his first company at 16, and at 27, that's 11 years of gut punches before finding success in the last 18 months.

David grew up in a family of entrepreneurs. In seventh grade, he dreamed of being a founder. His parents gave him $20,000 for college, hoping he'd become a lawyer or doctor. But he didn't fit in anywhere - not in his fraternity, not with people in his major. He dropped out to chase his startup dreams.

He met his co-founder Henry, who loved AI while David loved writing. Together they failed at 9-10 startups. Then they stumbled upon GPT-2, asked it to tell a story, and it spit out: "Nothing is darker than a butthole." That profound/hilarious line convinced them to create Jenny AI - a tool to help agencies write better content with AI.

## Key Insights

### The Painful Beginning
- Cold called agencies 8 hours a day for weeks
- 99% rejection rate
- Worked from parents' bedroom day and night
- Had to ask mom for her card to buy Chipotle
- "I was a real loser" - but parents never made him feel that way

### The $100K Miracle
- Went on a random podcast with few listeners
- A scout for Jason Calacanis happened to listen
- Got a $100,000 check
- First thing: Booked flight to Malaysia to cut burn rate by 75%
- "I didn't feel successful - now the real dirty work was getting started"

### The Viral Breakthrough
- Stuck at $2,000/month for a while
- Key learning: Talk to users, ask difficult questions
- "Why do you dislike my product? What do you love about OTHER products?"
- Zay Khan posted a viral Twitter thread featuring Jenny AI
- Went from $2K to $10K MRR in one month

### Scaling with Social Media
- Brought on college buddy for TikTok/Instagram Reels
- Experienced second wave of virality
- Strategy: Start TikTok account → Try different formats → Find one that works → Turn into series → Multiply accounts with multiple creators
- Pay creators baseline + incentives for views/conversions

### The Cancer Diagnosis
- At $50-80K MRR, got thyroid cancer diagnosis
- "Dreams and nightmares happening at the same time"
- Surgery complications, fever, rescheduled
- Saw Bible verse on ceiling: "Leave everything to God" - same verse his mom wanted to tell him
- Voice recovered after surgery

### The Decision Not to Sell
- Shopped Jenny for acquisition after cancer
- Could have cashed out for a few million
- "It didn't feel right to throw my cards in early"
- Within 6 months: More than doubled the business
- Would have sold for $3M → Now worth $10-30M

## Growth Timeline
- $2K → $10K MRR (viral Twitter thread)
- $10K → $50-80K MRR (social media scaling)
- $80K → $250K+ MRR (post-cancer doubling)
- Current: $3M+ ARR, $25M valuation

## Key Advice

"I started my first company at 16, I'm 27 now - that's a decade of failing. I only got any semblance of success in the last 18 months. You can't give it a one-week shot. You can't even give it a year shot. You have to put your all into it, sacrifice everything for many years, and then you have a shot - maybe a chance at success. Even if you put your all into it, there's a chance you will fail. If you still try despite knowing you could lose everything, that must mean you really care about what you're building."`
  },
  {
    id: 96,
    title: "The $1.8M Solopreneur Playbook",
    founder: "Brett Williams",
    app: "DesignJoy",
    revenue: "$1.8M/year",
    videoUrl: "https://www.youtube.com/watch?v=vedkm3ZmHIE",
    videoId: "vedkm3ZmHIE",
    thumbnail: `https://img.youtube.com/vi/vedkm3ZmHIE/maxresdefault.jpg`,
    postedDate: "Jan 2025",
    keyInsight: "Undercharge at first to get reps, then raise prices as demand increases. Create boundaries to protect your time.",
    tags: ["Solopreneur", "Productized Service", "Design"],
    summary: `## The Story

Brett Williams is the highest-paid solopreneur on the internet, making over $1.8 million per year with **DesignJoy** - a productized design service. He has zero employees, zero contractors, and only works 6 hours a day.

Brett started as a graphic designer working a normal 9-to-5, doing landing pages, logos, and brand designs. One day he came across a subscription service offering "unlimited graphic design" for businesses - charging a recurring flat fee instead of per project. He decided to do the same thing, but as a one-man operation.

12 hours and $29 later, Brett put up a simple landing page. Within 24 hours, he got his first paying client. The secret? He grossly undercharged at $449/month for unlimited design requests. This got him in the door, let him put in thousands of reps, and eventually turned him into a world-class designer.

## Key Insights

### The 5-Step Playbook

**Step 1: Demand-Based Pricing**
- Started at $449/month (too good to be true)
- Got first customer in less than 24 hours
- Put ego aside to get reps, even working basically for free
- As demand increased, raised prices: $449 → $1,000 → $3,000 → $5,000 → $8,000/month
- Now only needs 16 clients at $5K/month to make ~$1M/year

**Step 2: Boundaries**
- Clients must submit requests asynchronously via Trello board
- Clients can only have ONE design request at a time
- No calls, no meetings - all requests in writing
- Clients spend more time fleshing out requests = fewer requests overall
- Protects his precious time so he can focus on creating

**Step 3: The $5,000 Client**
- $500 clients: cheap, waste time, ask for refunds, don't make money
- $5,000 clients: rich, won't bother you, always pay, don't churn after 1 month
- Target businesses that see $5K/month as a steal compared to alternatives:
  - Hiring a $200K/year designer
  - Paying $30-40K for a fancy agency
  - Sorting through thousands on Upwork/Fiverr

**Step 4: High Demand, Low Touch**
- Website design is HIGH IMPACT (first impression, conversion rates)
- Website design is LOW TOUCH (build once, don't touch for a while)
- Brett can turn around a world-class landing page in a couple hours
- Almost zero dollar expenses as a solopreneur

**Step 5: Build Once, Sell Forever**
- Created "Scribbles" - downloadable templates for $4.99 (25,000+ downloads)
- Created "Productize Yourself" course teaching others to start productized services
- Info products now make up 29% of his income
- Doesn't have to trade hours for these dollars

## The Math
- 16 clients × $5,000/month = $80K/month = ~$1M/year
- Plus info products = $1.8M/year total
- 6 hours of work per day
- Zero employees

## Key Advice

"Put your ego aside so you can put in thousands of reps. These reps are the ones that eventually turn you into world-class. Your niche starts to notice, your services become more in demand, and when demand increases - you raise your prices."`
  },
  {
    id: 97,
    title: "How I Built A $1M Business From This Starbucks",
    founder: "Pat Walls",
    app: "Starter Story",
    revenue: "$1M+/year",
    videoUrl: "https://www.youtube.com/watch?v=T_wEmB5MapE",
    videoId: "T_wEmB5MapE",
    thumbnail: `https://img.youtube.com/vi/T_wEmB5MapE/maxresdefault.jpg`,
    postedDate: "2 years ago",
    keyInsight: "Deep work in 2-hour blocks. The most important thing was just going inside that Starbucks and taking action every single day.",
    tags: ["Deep Work", "Side Hustle", "Content"],
    summary: `## The Story

Pat Walls built **Starter Story** - a library of 4,000+ case studies and business breakdowns - into a million-dollar business. The crazy part? He built it from inside a Starbucks while working a full-time job, with only 2 hours a day.

In 2017, Pat was 26 years old with a great six-figure job in New York City. But something wasn't right. Every day felt empty - clock in, Zoom meetings, lunch, write code, clock out. Secretly, he dreamed about quitting and starting his own business, but he had no idea where to start.

That's when he had his lightbulb moment: turn these questions into a product. Research successful businesses, write about findings on a blog, share with others who want to learn. But for months, he procrastinated. Every day he walked by a Starbucks on his way home, told himself he'd stop in and work on the idea, then walked home and watched Netflix instead.

Everything changed when he read "Deep Work" by Cal Newport. He made a contract with himself: tomorrow, walk into Starbucks, order coffee, set a timer for 2 hours, and just focus.

## Key Insights

### The Deep Work Contract
- Day 1: Walked in, set timer, got started - 2 hours flew by in flow state
- Day 2: Did it again
- Day 3: Did it again
- Never stopped - every single day, 2 hours of deep work
- Started waking up at 6am to get deep work in BEFORE his full-time job

### The Timeline
- **Month 1**: Came up with name "Starter Story," bought domain for $12/year, launched with a few stories
- **Month 2**: Published dozens of stories, started newsletter, got first 100 subscribers
- **Month 4**: First big break - story went viral on Reddit, thousands crashed the site
- **Month 6**: Started monetization - newsletter sponsorship, affiliate revenue

### The $12,000 Moment
- Got an email from Klaviyo's CEO saying he loved Starter Story
- Conversation led to sponsorship discussion
- The number: $12,000
- "More money than I'd ever seen in my life"
- Got the notification while at Starbucks - heart beating out of chest
- Direct result of all those 6am mornings and 2-hour deep work sessions

### The Decision
- $12,000 represented a choice: keep playing it safe or go all in?
- Remembered why he started: build something for himself, not someone else's dream
- "If I don't make this decision right now, I might never do it"
- Walked into work and handed in his resignation

## 5 Years Later
- Never had a regular job again
- Never got another paycheck
- Built Starter Story into a million-dollar business

## Key Advice

"The most important thing I did was just going inside that Starbucks, getting to work, and taking action every single day. I was giving myself a chance to become lucky."`
  },
  {
    id: 98,
    title: "I Quit My $250K Job To Become an Author",
    founder: "Paul Millerd",
    app: "The Pathless Path (Self-Published Book)",
    revenue: "$249K/year",
    videoUrl: "https://www.youtube.com/watch?v=lWwZ-fsD8gM",
    videoId: "lWwZ-fsD8gM",
    thumbnail: `https://img.youtube.com/vi/lWwZ-fsD8gM/maxresdefault.jpg`,
    postedDate: "2 years ago",
    keyInsight: "You can't escape work - you need to find work that sustains your soul. Remove money from the equation as long as possible when searching.",
    tags: ["Self-Publishing", "Writing", "Lifestyle"],
    summary: `## The Story

Paul Millerd quit his $250,000 consulting job to break free from what he calls "the default path" - aka the rat race. At 32, he quit Corporate America with no plan. He just started writing every day, and eventually wrote a book called **The Pathless Path** that has now sold 25,000+ copies and generated $125-130K in royalties.

Paul desperately wanted to break into fancy, prestigious companies early in his career. But that never quite fulfilled him. Before quitting, he was still applying for other jobs - one offered much less, others rejected him. So he just quit. "It was the first time in my life that I just let life emerge."

The next few months were hard. His company informed him he had to pay back $24,000 in signing bonus and relocation expenses because he hadn't stayed 3 years. "I had to buy my freedom." But with $50-60K in savings, he gave himself permission to wander.

## Key Insights

### Book Revenue
- Year 1: ~$50,000 (10,000 copies at ~$5/book)
- Year 2 (first 5 months): ~$75,000 (15,000 copies)
- Total royalties: $125-130K profit
- Last year: $100K → $249K in revenue

### Why Self-Publish (Turned Down Penguin Random House)
1. **Creative control** - Not willing to give up any, even for more sales
2. **Better royalties**:
   - Traditional: 10% of list price (~$2/book for hardcovers)
   - Self-published: $7-8/book for paperbacks, $8/book for hardcovers

### The Writing Journey
- Started writing on Quora every day before work for 100 days
- "I was a writer from that moment on"
- Started a blog called "Lyme Sucks" about his health issues
- Publishing frequency: every 3 months → 2 months → 1 month → every week → all the time

### The Pathless Path Philosophy
- "You can't actually escape work"
- "You ultimately need to find work that can sustain your soul"
- The pathless path = committing to finding that work without knowing when it will arrive

### Finding Your Life's Work
- Remove money from it as long as possible
- The key is mostly just QUITTING things
- If it's not lighting you up, get it out of your life
- Take a 1-3 month sabbatical to disconnect from "worker mode"
- "The only thing that will let deeper things emerge is creating space in your life"

## Self-Publishing Costs
- Editing/coaching: $3,900
- Book cover (99designs): $742
- Publishing fee (Ingram Spark): $250
- Audiobook production: $1,280
- **Total investment: ~$6,200**
- **Total profit: $125-130K**

### Royalty Breakdown
- Hardcover (Amazon): $8.24
- Paperback (Amazon): $7.45
- Audiobook: $3.98
- Kindle: $4.28
- Sales mix: 50% ebook, 29% print, 21% audio

## Other Revenue Streams
- Freelancing
- Course (Strategy U)
- Workshop business
- Coaching

## Key Advice

"Just trust. Trust yourself. Writing is important. Don't give away the fun of the journey - the journey has been so fun because it's been so uncertain. That is adventure."`
  },
  {
    id: 99,
    title: "I Became A Venture Capitalist With Only $1,000",
    founder: "Alex Pattis",
    app: "Syndicate (Angel Investing)",
    revenue: "$60M deployed",
    videoUrl: "https://www.youtube.com/watch?v=p3xa6mpxvOY",
    videoId: "p3xa6mpxvOY",
    thumbnail: `https://img.youtube.com/vi/p3xa6mpxvOY/maxresdefault.jpg`,
    postedDate: "2 years ago",
    keyInsight: "Build relationships by sharing deals with VCs first. Most won't care about you until you source a deal they actually do.",
    tags: ["Venture Capital", "Investing", "Side Hustle"],
    summary: `## The Story

Alex Pattis turned $1,000 into a $60 million investment fund through a loophole called "The Syndicate." He's invested in over 275 private startups - all as a side hustle while working a full-time job. It's a 70/30 split: 70% day job, 30% VC world.

A Syndicate is an alternative approach to venture capital. Instead of investing in a fund that deploys on your behalf, it provides direct access to specific deals and allows limited partners to participate with as little as $1,000. Platforms like AngelList, Sidecar, and Carta enable individuals with zero AUM to set up SPVs (Special Purpose Vehicles) and invest alongside tier-one VCs.

Alex's first deal: invested $1,000 in a company raising $2M at a $6M valuation. That company recently raised at a $500M valuation - a 2,000-3,000% return.

## Key Insights

### How Syndicates Work
- You identify a great founder/company to invest in
- Set up an SPV through platforms like AngelList
- Reach out to accredited investors to participate
- Bundle checks to meet minimum thresholds
- If you invest $1K in a $100K SPV, you own 1% of the entity on the cap table

### The Business Model
- Make money through "carried interest" (carry)
- After an exit/IPO, take 20% of returns above principal
- Investors get 80% of profits
- "I only make money if I return capital to my limited partners"

### 5 Ways to Source Deals
1. **Co-syndicating** with other syndicate leads who have larger allocations
2. **Relationships with VCs** - built "deal flow hustle guy" brand, shared deals for years
3. **Portfolio founders** - invested founders refer their founder friends
4. **Angel investors** - share deals both ways
5. **Investor base** - LPs are often founders, CEOs, heads of product who see deals

### How to Evaluate Deals
- Founder/CEO relevance to the business (most important)
- Are they in it for the long run?
- Market fit based on previous roles/companies
- Multi-time founder? Previous success?
- How big is the market? Is it growing?
- Early signs of product-market fit
- Who is co-investing? (Piggyback on institutional funds' diligence)

### The Deal Process
1. Secure allocation from founder
2. Put together deal memo (2 days)
3. Set up SPV in parallel
4. Send materials to investor base
5. Give 1-2 weeks for decisions
6. Close SPV and wire capital to company

### Time Investment
- Morning person - gets up early for a couple hours before day job
- Late evening meetings
- Weekend coffee with founders
- "70/30 split of full-time job vs side hustle VC world"

## Key Advice

"Start building a network of folks who have unique access to deals. Have a Pay It Forward mentality. Most VCs won't give a shit about you - your check is small, you're insignificant. But if you share high-quality deals or source a deal they actually do, you'll see the relationship change. I sent 10-20 deals to some VCs before they participated in one - now they share deals they're leading with me."`
  },
  {
    id: 100,
    title: "The Multipreneur: He's Building A $10M Portfolio of Income Streams",
    founder: "Alex Lieberman",
    app: "Story Arb (Ghost Writing Agency) + Personal Holding Company",
    revenue: "$1M+/year",
    videoUrl: "https://www.youtube.com/watch?v=nzVcbrLl9VU",
    videoId: "nzVcbrLl9VU",
    thumbnail: `https://img.youtube.com/vi/nzVcbrLl9VU/maxresdefault.jpg`,
    postedDate: "2 years ago",
    keyInsight: "Don't sit on a couch thinking of business ideas. Be a magnet for problems, then think of novel solutions.",
    tags: ["Holding Company", "Ghost Writing", "Portfolio"],
    summary: `## The Story

Alex Lieberman started **Morning Brew** in his dorm room and sold it for millions. But after selling, he felt lost for 12 months doing "every cliche thing an entrepreneur does when looking for meaning" - reading stoicism, taking long walks with his dog.

He landed on a new identity: the **Multipreneur**. His vision: launch a bunch of tiny businesses and hire CEOs to run them. Over the next 5-10 years, he wants a dozen+ companies where he's the CEO of NONE but co-founder and chairman of ALL.

His first business in the holding company: **Story Arb** - a ghost writing agency for B2B executives. He put $0 into it. Current stats: 12 clients paying $7,000/month = ~$1M/year annualized revenue. Goal: $10M business with $3.5M profit.

## Key Insights

### The Morning Brew Background
- Started in college at University of Michigan
- 200-person company doing $75M+/year in revenue
- Sold in October 2020 to Axel Springer
- Stepped down as CEO 6 months later - "hardest professional moment ever"

### Why Personal Holding Companies Are Taking Off
1. Increased emphasis on lifestyle balance and health
2. Cost of failure in entrepreneurship has never been lower
3. Easier than ever to ideate/test ideas (Product Hunt, Kickstarter)
4. Cheaper to run businesses (Shopify, Beehive)
5. New image of success: cash-flowing 6-7 figure businesses vs. swinging for $1B

### How Story Arb Started
- Saw short-form video agencies popping up
- Thought: text platforms (Twitter/LinkedIn) haven't been given enough love
- Put out a tweet: "If you're an executive who believes in building audience but don't have time/skill, DM me"
- Got 25 DMs - validated demand before building product
- Connected clients with ghost writers, set up Slack channels
- 2-3 months in: hired a CEO (doesn't want to be CEO himself)

### Story Arb Structure
- 12 clients at $7K/month = $84K/month = ~$1M/year
- 2 full-time employees (CEO + content strategist)
- 3 freelance ghost writers
- Profit margin: 30-35%
- Goal: 110 clients = $10M/year with $3-3.5M cash flow

### Defining Product-Market Fit
1. What % of clients would recommend to their network? (Target: 50%+)
2. Retention: Average ghost writing agency retains 3-5 months. Goal: 10 months average

### How to Find Great CEOs
Look for "unteachables":
- Obsessive brain (goes to sleep/wakes up thinking about the business)
- Great critical thinker
- Values aligned (high integrity, strong communicator)
- Great work ethic
- Humility and self-awareness

### CEO Compensation
- Salary: $100-200K/year
- Equity: 10-50% of the business
- After product-market fit: quarterly profit distributions to equity holders

### Finding Business Ideas
- "Never just sit on a couch thinking of business ideas - worst way to do it"
- Be a magnet for problems
- Hoard people's problems, then think of novel solutions
- Next idea: Workflow automation agency (Notion, Airtable, Zapier, Make, AI, offshore talent)

### Testing Ideas
- Start with a tweet
- If interest → tweet thread
- If interest → newsletter
- If interest → video
- Same concept for business: step pebble to pebble, not leap across the river

## Key Advice

"Find the suck. Find great problems to solve. Immerse yourself in industries you're interested in. Identify problems that are especially painful with no good solution. Then think about how you can provide a better solution."`
  }
]
