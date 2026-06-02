import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victor — Backend Developer" },
      {
        name: "description",
        content:
          "Go backend developer focused on scalable APIs, distributed systems, and reliable backend services. HNG portfolio.",
      },
      { property: "og:title", content: "Victor — Backend Developer" },
      {
        property: "og:description",
        content: "HNG portfolio: Go, PostgreSQL, distributed systems, and cloud-native backend work.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    id: "01",
    name: "Smart Data Finder CLI",
    blurb:
      "Command-line client for managing user profiles on the Insighta Labs server. Auth, profile management, and data export, all from the terminal.",
    stack: ["Go", "Cobra", "REST", "OAuth"],
    role: [
      "Designed the command tree and auth flow (login, token refresh, logout).",
      "Implemented profile CRUD commands and paginated data export (JSON/CSV).",
      "Added a local config store for tokens and per-environment endpoints.",
    ],
    proof: "https://github.com/Taterbro/insighta",
  },
  {
    id: "02",
    name: "Intelligence Query Engine",
    blurb:
      "REST API that turns natural-language questions into database queries. OAuth, role-based access, and multi-client support across a CLI and web portal.",
    stack: ["Go", "PostgreSQL", "OAuth2", "RBAC", "NLP"],
    role: [
      "Built the NL→SQL translation pipeline with guardrails on allowed tables and columns.",
      "Implemented OAuth2 server flows and role-scoped middleware.",
      "Exposed the same endpoints to CLI and web clients with consistent error contracts.",
    ],
    proof: "https://github.com/Taterbro/backendStageZero",
  },
  {
    id: "03",
    name: "Retry Engine",
    blurb:
      "Small HTTP service that accepts outbound HTTP jobs, persists them to SQLite, and retries them on failure with exponential backoff and jitter.",
    stack: ["Go", "SQLite", "net/http", "goroutines"],
    role: [
      "Designed the job schema and state machine (pending → retrying → completed/failed).",
      "Built the background worker that ticks every 500ms and schedules retries with exponential backoff + jitter.",
      "Implemented the API surface (POST /request, GET /requests/:id, GET /requests?status=) with full attempt history.",
    ],
    proof: "Featured below",
    featured: true,
  },
];

const skills = [
  { name: "API design", evidence: "REST contracts in Query Engine + Retry Engine" },
  { name: "Authentication", evidence: "OAuth2 in Query Engine, token store in CLI" },
  { name: "Authorization (RBAC)", evidence: "Role-scoped middleware in Query Engine" },
  { name: "Databases", evidence: "PostgreSQL in Query Engine, SQLite in Retry Engine" },
  { name: "Background jobs", evidence: "Worker pool + scheduler in Retry Engine" },
  { name: "Resilience & retries", evidence: "Exponential backoff with jitter in Retry Engine" },
  { name: "CLI tooling", evidence: "Cobra command tree in Smart Data Finder CLI" },
  { name: "Logging", evidence: "Structured request/job logs across all services" },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-20">
          <div className="label mb-6">Portfolio · HNG</div>
          <h1 className="font-mono text-3xl md:text-4xl font-medium tracking-tight">
            Victor
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Backend Developer (Fullstack)
          </p>
          <p className="mt-8 text-base leading-relaxed max-w-prose">
            Go backend developer focused on building scalable APIs, distributed systems,
            and reliable backend services. Comfortable with Go, PostgreSQL, and
            cloud-native architectures, with an emphasis on clean design and performance.
          </p>
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <Meta label="Location" value="Abuja, Nigeria · Remote · WAT (UTC+1)" />
            <Meta label="Email" value="veecipher@proton.me" href="mailto:veecipher@proton.me" />
            <Meta label="GitHub" value="github.com/taterbro" href="https://github.com/taterbro" />
            <Meta label="Status" value="Open to backend roles" />
          </dl>
        </header>

        {/* Projects */}
        <Section label="01" title="HNG Projects">
          <ol className="space-y-12">
            {projects.map((p) => (
              <li key={p.id} className="group">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted-foreground">{p.id}</span>
                  <h3 className="font-mono text-lg font-medium">{p.name}</h3>
                </div>
                <p className="mt-3 ml-10 text-[15px] leading-relaxed text-foreground/90">
                  {p.blurb}
                </p>
                <div className="mt-4 ml-10 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2 py-0.5 border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 ml-10">
                  <div className="label mb-2">What I built</div>
                  <ul className="space-y-1.5 text-sm leading-relaxed">
                    {p.role.map((r) => (
                      <li key={r} className="flex gap-3">
                        <span className="text-muted-foreground">—</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 ml-10 label">
                  Proof ·{" "}
                  {p.proof.startsWith("http") ? (
                    <a
                      href={p.proof}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-foreground/80 normal-case tracking-normal"
                    >
                      {p.proof.replace("https://github.com/", "github.com/")}
                    </a>
                  ) : (
                    <span className="text-foreground/80 normal-case tracking-normal">{p.proof}</span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section label="02" title="Backend Skills">
          <ul className="divide-y divide-border border-y border-border">
            {skills.map((s) => (
              <li key={s.name} className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="font-mono text-sm sm:w-56 shrink-0">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.evidence}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Featured Project Deep Dive */}
        <Section label="03" title="Featured Project — Intelligence Query Engine">
          <div className="space-y-8">
            <Block label="Problem">
              <p>
                Non-technical analysts at Insighta needed answers from a relational
                database without writing SQL. Existing dashboards were rigid; raw DB
                access was unsafe. The engine accepts a plain-English question and
                returns structured results, scoped to what the requesting user is
                allowed to see.
              </p>
            </Block>

            <Block label="Architecture / Request flow">
              <pre className="font-mono text-xs leading-relaxed overflow-x-auto p-4 bg-card border border-border">
{`client (CLI / Web)
   │  Bearer <access_token>
   ▼
[ OAuth2 middleware ]  →  reject 401
   │
   ▼
[ RBAC guard ]         →  scope tables/columns to role
   │
   ▼
[ NL parser ]          →  intent + entities
   │
   ▼
[ Query planner ]      →  whitelisted SQL (parameterized)
   │
   ▼
   PostgreSQL          →  rows
   │
   ▼
[ Response shaper ]    →  JSON + pagination cursor`}
              </pre>
            </Block>

            <Block label="Key endpoints">
              <ul className="space-y-2 font-mono text-[13px]">
                <li><span className="text-muted-foreground">POST</span> /v1/auth/token — OAuth2 token exchange</li>
                <li><span className="text-muted-foreground">POST</span> /v1/query — submit a natural-language question</li>
                <li><span className="text-muted-foreground">GET </span> /v1/query/:id — fetch result + cursor</li>
                <li><span className="text-muted-foreground">GET </span> /v1/schema — role-filtered schema for client hints</li>
                <li><span className="text-muted-foreground">GET </span> /v1/health — liveness + DB ping</li>
              </ul>
            </Block>

            <Block label="Challenge — preventing unsafe queries">
              <p>
                The risk was obvious: NL→SQL can hallucinate tables, leak columns, or
                generate expensive scans. I solved it in three layers. First, the
                planner only emits SQL against a whitelist derived from the caller's
                role, so columns the user can't see never appear in the plan. Second,
                every query is parameterized and passed through a parser that rejects
                multi-statement input, DDL, and writes. Third, the planner enforces a
                row limit and a statement timeout at the connection level, so a bad
                plan degrades into a clean error instead of a stuck request.
              </p>
            </Block>
          </div>
        </Section>

        {/* Reflection */}
        <Section label="04" title="Learning Reflection">
          <div className="space-y-4 text-[15px] leading-relaxed max-w-prose">
            <p>
              HNG pushed me to think about backends as products other people depend on,
              not just code that runs. The biggest shift was treating error contracts,
              timeouts, and retries as first-class design — not things you bolt on after
              an outage.
            </p>
            <p>
              Concretely: I got much faster at Go's concurrency primitives (contexts,
              cancellation, worker pools), more disciplined about migrations and
              indexes, and more honest about what "done" means — a feature isn't done
              until it has logs, a health signal, and a sane failure mode. Writing the
              retry engine taught me how much reliability comes from a few small,
              boring decisions: jitter, max attempts, idempotency keys.
            </p>
            <p>
              I also learned to write less. Smaller PRs, smaller endpoints, smaller
              functions. Easier to review.
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section label="05" title="Contact">
          <div className="space-y-3 text-base">
            <p className="text-muted-foreground max-w-prose">
              Happy to talk about backend roles, freelance work, or anything Go,
              PostgreSQL, or distributed systems related.
            </p>
            <ul className="font-mono text-sm space-y-2 pt-2">
              <li>
                <span className="label mr-3">email</span>
                <a className="link-underline" href="mailto:veecipher@proton.me">
                  veecipher@proton.me
                </a>
              </li>
              <li>
                <span className="label mr-3">github</span>
                <a
                  className="link-underline"
                  href="https://github.com/taterbro"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/taterbro
                </a>
              </li>
            </ul>
          </div>
        </Section>

        <footer className="mt-24 pt-8 rule flex flex-col sm:flex-row justify-between gap-2 label">
          <span>Built with React + TanStack Start</span>
          <span>© {new Date().getFullYear()} Victor</span>
        </footer>
      </div>
    </main>
  );
}

function Meta({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <dt className="label mb-1">{label}</dt>
      <dd className="font-mono text-sm">
        {href ? (
          <a className="link-underline" href={href} target="_blank" rel="noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 pt-10 rule">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted-foreground">{label}</span>
        <h2 className="font-mono text-xl font-medium tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="label mb-3">{label}</div>
      <div className="text-[15px] leading-relaxed max-w-prose">{children}</div>
    </div>
  );
}
