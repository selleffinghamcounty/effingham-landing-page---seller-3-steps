export default function RealEstateLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/JSYcOHI.jpg"
            alt="Brian Meyers"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="absolute left-6 top-6 text-xl font-extrabold md:text-2xl">
            BRIAN SELLS EFFINGHAM
          </div>

          <div className="max-w-2xl">
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
              MANY HOMES DON’T SELL — AND IT’S NOT THE MARKET. DON'T LET YOUR HOME BE A STATISTIC.
            </h2>

            <p className="mt-6 text-lg text-slate-200 md:text-xl">
              I help homeowners sell with a proven system built on honest pricing, high-impact marketing, and clear communication—so you don’t sit on the market or leave money on the table.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-form"
                className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-black shadow-lg"
              >
                Get Your 3-Step Home Sale Game Plan
              </a>

              <a
                href="tel:12176635885"
                className="rounded-2xl border border-white/30 px-8 py-4 text-center font-semibold text-white"
              >
                Call 217.663.5885
              </a>
            </div>

            <div className="mt-6 grid gap-4 text-lg text-slate-300 sm:grid-cols-2">
              <div>✓ Local market expert</div>
              <div>✓ Local 5-star reviews</div>
              <div>✓ Honest pricing guidance</div>
              <div>✓ Hundreds of buyers and sellers helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-center text-2xl font-bold text-slate-700 md:grid-cols-4">
          <div>Proven Seller Strategy</div>
          <div>5-Star Client Reviews</div>
          <div>Pre & Post-COVID Market Perspective</div>
          <div>Digital Domination Agent</div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <img
            src="https://i.imgur.com/CTRrn4F.jpg"
            alt="Brian Meyers branding"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Your 3-Step Home Sale Game Plan
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            This isn’t a generic home value. This is a real strategy built for today’s buyer’s market.
          </p>

          <ul className="mt-6 space-y-4 text-slate-700">
            <li>✔ Strategic pricing to avoid sitting and losing leverage</li>
            <li>✔ Professional photography, videography, and online exposure</li>
            <li>✔ Pre-market and launch strategy to generate demand</li>
            <li>✔ Step-by-step prep plan (staging, repairs, presentation)</li>
            <li>✔ Targeted digital + social media marketing</li>
          </ul>

          <a
            href="#lead-form"
            className="mt-8 inline-block rounded-2xl bg-black px-6 py-4 font-semibold text-white"
          >
            Get My Plan
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Most homes don’t fail because of the market—they fail because of poor planning and weak marketing.
          </h2>

          <form id="lead-form" className="mt-10 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl p-4 text-black" placeholder="Name" />
            <input className="rounded-xl p-4 text-black" placeholder="Email" />
            <input className="rounded-xl p-4 text-black" placeholder="Phone" />
            <input className="rounded-xl p-4 text-black" placeholder="Property Address" />

            <button className="rounded-xl bg-white p-4 font-bold text-black md:col-span-2">
              Send My Game Plan
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>

        <div className="space-y-6">
          <div className="border p-6 rounded-2xl">
            Brian is a 5-star realtor through and through...
          </div>
          <div className="border p-6 rounded-2xl">
            Absolutely above and beyond customer service...
          </div>
          <div className="border p-6 rounded-2xl">
            Brian was great and helped so much...
          </div>
        </div>
      </section>
    </div>
  );
}
