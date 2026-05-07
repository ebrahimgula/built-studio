import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resources, waLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, WhatsApp } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = resources.find((r) => r.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = resources.find((r) => r.slug === slug);
  if (!article) notFound();

  const others = resources.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-terracotta transition-colors mb-10"
            >
              <ArrowRight size={14} className="rotate-180" />
              All articles
            </Link>

            <p className="eyebrow mb-4">{article.category} · {article.readTime}</p>

            <h1 className="h-display text-4xl md:text-6xl leading-tight">
              {article.title}
            </h1>

            <p className="mt-6 text-xl text-ink/70 leading-relaxed border-b border-ink/10 pb-10">
              {article.excerpt}
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {article.body.map((block, i) => (
              <Reveal key={i} delay={i * 40}>
                {block.type === "h2" ? (
                  <h2 className="font-serif text-2xl md:text-3xl tracking-tightest mt-10 leading-snug">
                    {block.text}
                  </h2>
                ) : (
                  <p className="text-lg text-ink/80 leading-relaxed">
                    {block.text}
                  </p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl bg-terracotta text-cream p-8 md:p-10">
              <h3 className="font-serif text-2xl md:text-3xl tracking-tightest text-cream leading-snug">
                Ready to take the next step?
              </h3>
              <p className="mt-3 text-cream/80 leading-relaxed max-w-lg">
                Send us a WhatsApp — we'll give you an honest answer about what makes sense for your business, no sales pressure.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waLink("default")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsApp size={16} />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/packages"
                  className="btn-ghost border-cream/20 text-cream hover:bg-cream/10 hover:border-cream/40 inline-flex items-center gap-2"
                >
                  See packages
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {others.length > 0 && (
        <section className="pb-20 md:pb-28 border-t border-ink/10">
          <div className="container-x">
            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tightest mt-14 mb-8">
                More from the guide
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-5">
              {others.map((r, i) => (
                <Reveal key={r.slug} delay={i * 60}>
                  <Link href={`/resources/${r.slug}`} className="group block">
                    <article className="card hover:border-terracotta/30 transition-colors h-full flex flex-col">
                      <p className="eyebrow text-terracotta">{r.category}</p>
                      <h3 className="font-serif text-xl tracking-tightest mt-3 leading-snug group-hover:text-terracotta transition-colors flex-1">
                        {r.title}
                      </h3>
                      <span className="mt-4 text-xs text-muted">{r.readTime}</span>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
