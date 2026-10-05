'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Copy,
  Check,
  Zap,
  TrendingUp,
  DollarSign,
  Play,
  Star,
  Users,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import Badge from '@/components/ui/Badge';

// ─── Data ─────────────────────────────────────────────────────────────────────

const platformGuides = [
  {
    id: 'facebook',
    platform: 'Facebook',
    year: '2026',
    color: 'blue',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-700',
    accentBorder: 'border-blue-100',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    methods: [
      {
        title: 'In-Stream Ads',
        description:
          'Earn revenue from ads shown before, during, or after your qualifying videos. Available in Professional Mode.',
        criteria: ['10,000 Page followers', '600,000 total minutes viewed', '5+ active videos'],
        earning: '$1 – $8 RPM',
      },
      {
        title: 'Reels Performance Bonuses',
        description:
          'Facebook's 2026 Reels incentive program pays creators monthly bonuses based on Reel views and engagement milestones.',
        criteria: ['5,000+ followers', 'Consistent posting (3+ Reels/week)', 'Located in eligible country'],
        earning: '$100 – $30,000/mo',
      },
      {
        title: 'Page Monetization Suite',
        description:
          'Unlock Fan Subscriptions, Stars (tipping), and Branded Content tools once you meet the eligibility thresholds.',
        criteria: ['10,000+ followers', 'No recent policy violations', 'Professional Mode enabled'],
        earning: 'Variable',
      },
    ],
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    year: '2026',
    color: 'rose',
    accentBg: 'bg-rose-50',
    accentText: 'text-rose-700',
    accentBorder: 'border-rose-100',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    methods: [
      {
        title: 'Shorts Feed Revenue Sharing',
        description:
          'YouTube's 2026 model pools ad revenue from Shorts and distributes it to creators based on their share of total views.',
        criteria: ['500+ subscribers (entry tier)', '3,000+ Shorts views / 90 days', 'YPP membership'],
        earning: '$0.03 – $0.06 / 1k views',
      },
      {
        title: 'Sponsorships & Brand Deals',
        description:
          'Partner with brands directly or through YouTube BrandConnect. Rates scale with niche authority and audience trust.',
        criteria: ['5,000+ engaged subscribers', 'Consistent upload schedule', 'Clear niche identity'],
        earning: '$200 – $50,000 / deal',
      },
      {
        title: 'Standard YPP (Long-Form)',
        description:
          'Classic AdSense revenue sharing on long-form content. Mid-roll ads on 8+ minute videos dramatically increase RPM.',
        criteria: ['1,000 subscribers', '4,000 watch hours / 12 months', 'AdSense account approved'],
        earning: '$2 – $20 RPM',
      },
    ],
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    year: '2026',
    color: 'purple',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-700',
    accentBorder: 'border-purple-100',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.87a8.16 8.16 0 0 0 4.77 1.52V8a4.85 4.85 0 0 1-1-.31z" />
      </svg>
    ),
    methods: [
      {
        title: 'Creator Rewards Program',
        description:
          'TikTok's 2026 premium monetization program. Pays significantly more than the old Creator Fund — based on RPM tied to qualified plays.',
        criteria: ['10,000+ followers', '100,000 views / 30 days', 'Videos 1+ min long', '18+ years old'],
        earning: '$0.40 – $1.00 / 1k views',
      },
      {
        title: 'TikTok Shop Integration',
        description:
          'Add shoppable links directly to your videos and live streams. Earn affiliate commissions on every product sold through your content.',
        criteria: ['1,000+ followers', 'TikTok Shop seller/affiliate approval', 'Product-relevant content'],
        earning: '5% – 20% commission',
      },
      {
        title: 'Live Gifting',
        description:
          'Go LIVE and receive virtual gifts from viewers. Gifts convert to Diamonds, then into real cash. Top creators earn thousands per stream.',
        criteria: ['1,000+ followers', '18+ years old', 'Account in good standing'],
        earning: 'Variable — up to $5,000/live',
      },
    ],
  },
];

const prompts = [
  {
    id: 1,
    category: 'Viral FB Reel / TikTok Hook Generator',
    icon: Zap,
    color: 'amber',
    prompt: `Act as a viral social media strategist with 10+ years of experience in Facebook Reels and TikTok growth. Generate 5 ultra-high-retention video hooks for the niche: [YOUR NICHE]. Each hook must: (1) Open with a pattern interrupt in the first 2 seconds using shock, curiosity, or controversy. (2) Tease a specific, tangible outcome the viewer gains by watching. (3) Be under 8 words for the on-screen text. (4) Include a matching voiceover line that's conversational and direct. Format each as: ON-SCREEN TEXT: / VOICEOVER: / WHY IT WORKS: Include psychological trigger used (e.g., FOMO, curiosity gap, social proof).`,
  },
  {
    id: 2,
    category: 'High-Retention Tech & Coding Tutorial Script',
    icon: Play,
    color: 'blue',
    prompt: `You are an expert educational content creator specializing in tech tutorials for YouTube with an average 65%+ retention rate. Write a complete, 10-minute tutorial script on: [TOPIC/TECHNOLOGY]. Structure: (1) Hook (0:00–0:30): state the exact problem viewers will solve. (2) Setup (0:30–1:30): what tools/prerequisites are needed. (3) Core Content (1:30–8:30): step-by-step with code examples and common mistakes. (4) Results Demo (8:30–9:30): show it working in real-time. (5) CTA (9:30–10:00): subscribe + next video. Add [B-ROLL] and [CODE OVERLAY] cues throughout. Write in a conversational tone — avoid robotic phrasing. Include 3 retention hooks mid-video to prevent drop-off.`,
  },
  {
    id: 3,
    category: 'Digital Art & Illustration Time-lapse Storyboard',
    icon: Sparkles,
    color: 'rose',
    prompt: `Act as a professional digital art content strategist for YouTube and Instagram Reels. Create a detailed storyboard for a 60–90 second time-lapse video of creating: [ARTWORK DESCRIPTION]. Include: (1) Opening shot: finished artwork reveal for 2 seconds (hook), then cut to blank canvas. (2) Stage breakdown: sketch → line art → flat colour → shading → final details — mark timestamps and recommended playback speed (e.g., 4x, 8x, 16x). (3) On-screen text overlays: tool being used, brush settings, and technique name for each stage. (4) Background music mood: specify BPM range and genre. (5) Outro: 5-second credit card. Also suggest 5 SEO-optimised YouTube titles and 10 hashtags for TikTok/Instagram.`,
  },
  {
    id: 4,
    category: 'High-Octane Gaming Highlight Planner (Free Fire & CoD)',
    icon: Star,
    color: 'emerald',
    prompt: `You are a gaming content strategist who has grown channels to 1M+ subscribers. Plan a viral highlight reel video for [FREE FIRE / CALL OF DUTY — CHOOSE ONE]. The video must be 3–5 minutes long. Provide: (1) Clip selection criteria: what types of plays (clutch moments, insane kills, tactical plays) to include and why. (2) Edit pacing guide: timestamps and suggested cut speed per segment (chill intro → buildup → climax). (3) Sound design: specific SFX timing for kills, transitions, and bass drops with example tracks from royalty-free sources. (4) Title formula: 3 title options using power words, number hooks, and SEO terms. (5) Thumbnail strategy: describe the exact composition (facial expression, text overlay placement, colour scheme) for maximum CTR. (6) End-screen CTA script.`,
  },
  {
    id: 5,
    category: 'Faceless Channel (Cash-Cow) Video Blueprint',
    icon: DollarSign,
    color: 'navy',
    prompt: `Act as a faceless YouTube channel expert who builds cash-cow channels earning $3,000–$30,000/month. Create a complete video production blueprint for the niche: [NICHE]. Deliver: (1) Video concept with exact title (high CPM keyword-optimised). (2) Full script (intro, 5 main sections, outro) — written to be narrated by AI voice. (3) B-roll sourcing guide: list 5 specific free/paid sources for visuals matching each section. (4) AI voiceover recommendation: which tool (ElevenLabs, Murf, etc.) and which voice preset suits this niche's tone. (5) Editing timeline with free tools (DaVinci Resolve / CapCut). (6) Thumbnail text and image direction. (7) Monetisation potential estimate based on CPM for this niche. (8) Upload schedule for first 30 days.`,
  },
  {
    id: 6,
    category: 'Affiliate Marketing Tech-Product Review Script',
    icon: TrendingUp,
    color: 'purple',
    prompt: `You are a top-performing affiliate marketer specialising in tech product reviews with 7%+ conversion rates. Write a persuasive 8–12 minute review script for: [PRODUCT NAME]. Structure: (1) Hook: bold claim about who this product is (and isn't) for. (2) Unboxing/First Impressions: sensory descriptions — build desire. (3) Key Features (3–4 only — quality over quantity): tie each to a real user benefit, not just specs. (4) Honest Downsides: 1–2 real cons builds trust and kills objection. (5) Comparison: vs. 1 competitor — use a simple comparison table script. (6) Final Verdict: who should buy it, score out of 10, recommendation. (7) Affiliate CTA: 3 natural placements of the affiliate link — mid-roll, end, and pinned comment suggestion. Include transition phrases between sections and add [SHOW SCREEN / DEMO] cues.`,
  },
  {
    id: 7,
    category: 'Motivation & "Hustle" Short-form Reel',
    icon: Zap,
    color: 'amber',
    prompt: `You are a motivational content creator whose Reels consistently hit 1M+ views. Write a 30–45 second high-energy motivational short script on the theme: [THEME — e.g., "Stop Wasting Time", "Build in Silence"]. Requirements: (1) Opening line must cause immediate emotional response — use contrast, a statistic, or a provocative question. (2) Middle (3–4 punchy lines): build to a crescendo — each line shorter than the last. (3) Final line: memorable, quotable, shareable — the viewer must want to screenshot it. (4) On-screen text direction: which words to animate/bold. (5) Background music direction: energy level and BPM. (6) Voiceover pace: words per minute and tone guidance. (7) 5 caption variations (with emojis) optimised for Facebook Reels and TikTok discovery.`,
  },
  {
    id: 8,
    category: 'Educational Animation Explainer Setup',
    icon: MessageSquare,
    color: 'blue',
    prompt: `Act as an educational animation scriptwriter (think Kurzgesagt style). Write a complete 4–6 minute animated explainer video script and production guide for the topic: [TOPIC]. Deliverables: (1) Full narration script — written for a calm, authoritative voiceover. Include [ANIMATION CUE] tags for every key visual moment. (2) Scene-by-scene breakdown: describe the animation style (2D flat, motion graphics, whiteboard, etc.) and colour palette for each scene. (3) Character/icon list: enumerate all visual elements needed. (4) Music direction: mood per segment. (5) Software recommendations for DIY creation: free (Canva, Animaker) and paid (Adobe After Effects). (6) Distribution strategy: YouTube chapter markers, thumbnail design brief, and 3 recommended upload titles with keyword intent.`,
  },
  {
    id: 9,
    category: 'Trending Audio / Lip-Sync Concept Generator',
    icon: Play,
    color: 'rose',
    prompt: `You are a viral TikTok and Instagram Reels trend analyst. Generate 5 original lip-sync or trending audio concept videos for the niche: [NICHE]. For each concept provide: (1) Audio type: describe the sound/song vibe (trending, nostalgic, dramatic, comedic). (2) Visual concept: exact setting, wardrobe, and props. (3) Text overlay script: on-screen words synced to the audio (with approximate timing). (4) Emotion arc: what the viewer should feel at 0s, 5s, 10s, 20s. (5) Comment bait: embed a question or incomplete thought that forces engagement. (6) Best posting time for maximum reach. (7) Cross-platform adaptation: how to reformat the same video for Facebook Reels vs TikTok vs YouTube Shorts with different captions. Rate each concept's viral potential (1–10) with reasoning.`,
  },
  {
    id: 10,
    category: 'Community Q&A Engagement Video Script',
    icon: Users,
    color: 'emerald',
    prompt: `You are a YouTube community strategist. Write a complete 6–8 minute Community Q&A video script using these submitted questions: [PASTE 5–10 REAL COMMENTS/QUESTIONS FROM YOUR COMMUNITY]. Structure: (1) Warm intro: acknowledge your community personally — mention a specific comment or milestone. (2) For each question — answer format: restate the question naturally → give honest answer → add personal anecdote or example → tease next answer to maintain retention. (3) Mid-video hook: tease the "hardest question" saved for the end. (4) Final answer: make it the most valuable one — ends on a strong, shareable insight. (5) Outro: ask for the next batch of questions in comments + subscribe CTA. Include natural filler phrases and pauses [PAUSE] so the script sounds human when recorded. Suggest 3 thumbnail concepts for the Q&A format.`,
  },
];

const colorMap: Record<string, string> = {
  amber:  'bg-amber-50 text-amber-600 border-amber-100',
  blue:   'bg-blue-50 text-blue-600 border-blue-100',
  rose:   'bg-rose-50 text-rose-600 border-rose-100',
  emerald:'bg-emerald-50 text-emerald-600 border-emerald-100',
  purple: 'bg-purple-50 text-purple-600 border-purple-100',
  navy:   'bg-[#E8F4FD] text-[#1D3557] border-[#1D3557]/10',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all duration-200 focus-ring ${
        copied
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
          : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D3557]/30 hover:text-[#1D3557] hover:bg-[#E8F4FD]'
      }`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          Copy Prompt
        </>
      )}
    </button>
  );
}

function MonetizationCard({
  title,
  description,
  criteria,
  earning,
  accentBg,
  accentText,
  accentBorder,
}: {
  title: string;
  description: string;
  criteria: string[];
  earning: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
}) {
  return (
    <div className="card-base p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-gray-900 leading-snug">{title}</h4>
        <span
          className={`shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full border ${accentBg} ${accentText} ${accentBorder}`}
        >
          {earning}
        </span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      <div className="space-y-1.5">
        {criteria.map((c) => (
          <div key={c} className="flex items-center gap-2">
            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${accentText}`} />
            <span className="text-xs text-gray-600">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CreatorHubPage() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">

        {/* ── Page Header ──────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F4FD] border border-[#1D3557]/10 rounded-full text-xs font-semibold text-[#1D3557] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Updated for 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Creator Earning{' '}
            <span className="gradient-text">Hub</span>
          </h1>
          <p className="text-gray-500 leading-relaxed text-base max-w-2xl">
            The definitive 2026 guide to monetising your content on Facebook, YouTube, and TikTok — plus a library of 10 expert AI prompts to accelerate your video production.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION A — Monetisation Guides
        ════════════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-[#1D3557] flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">2026 Monetisation Guides</h2>
              <p className="text-sm text-gray-400">Platform-specific criteria, revenue ranges, and eligibility requirements</p>
            </div>
          </div>

          <div className="space-y-8">
            {platformGuides.map((platform, pIdx) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: pIdx * 0.08 }}
                className="bg-white border border-gray-100 rounded-3xl shadow-card overflow-hidden"
              >
                {/* Platform header */}
                <div className={`flex items-center gap-4 px-6 py-5 border-b border-gray-50`}>
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${platform.accentBg} ${platform.accentText}`}
                  >
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{platform.platform}</h3>
                    <p className={`text-xs font-semibold ${platform.accentText}`}>
                      {platform.year} Monetisation Programs
                    </p>
                  </div>
                  <Badge variant="muted" size="sm" className="ml-auto">
                    {platform.methods.length} methods
                  </Badge>
                </div>

                {/* Method cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-50">
                  {platform.methods.map((method) => (
                    <div key={method.title} className="bg-white p-5 md:p-6">
                      <MonetizationCard
                        {...method}
                        accentBg={platform.accentBg}
                        accentText={platform.accentText}
                        accentBorder={platform.accentBorder}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION B — 10 Master Prompts Library
        ════════════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-[#1D3557] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">10 Master AI Prompts Library</h2>
              <p className="text-sm text-gray-400">Copy and paste into ChatGPT, Claude, or Gemini — replace the [BRACKETED] fields with your details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {prompts.map((prompt, idx) => {
              const Icon = prompt.icon;
              const iconClass = colorMap[prompt.color] ?? colorMap.navy;
              return (
                <motion.div
                  key={prompt.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: idx * 0.045 }}
                  className="card-base flex flex-col gap-4 p-6"
                >
                  {/* Card header */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${iconClass}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                          #{String(prompt.id).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                        {prompt.category}
                      </h3>
                    </div>
                  </div>

                  {/* Prompt preview */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex-1">
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-5 font-mono">
                      {prompt.prompt}
                    </p>
                  </div>

                  {/* Copy action */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">
                      {prompt.prompt.split(' ').length} words
                    </span>
                    <CopyButton text={prompt.prompt} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            COMMUNITY CTA — Sanctuary Discord
        ════════════════════════════════════════════════════════════════ */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-[#1D3557] px-8 py-14 sm:px-16 text-center"
          >
            {/* Decorative background rings */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
            </div>

            {/* Discord icon */}
            <div className="relative inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>

            <h2 className="relative text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Join Sanctuary — The Ultimate Creator Community
            </h2>
            <p className="relative text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Connect with fellow creators, get verified, open support tickets, and ask anything. Sanctuary is where serious creators grow together.
            </p>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://discord.gg/xAZv3Q3Prh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-ring"
                style={{ backgroundColor: '#5865F2' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Sanctuary on Discord
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <p className="text-white/50 text-xs">Free to join · No spam · Creator-verified</p>
            </div>
          </motion.div>
        </section>

      </div>
    </PageWrapper>
  );
}
