const STRENGTHS = [
  {
    icon: "🤝",
    title: "Trusted Suppliers",
    desc: "We ensure the highest quality by sourcing directly from spice farmers, certified growers and WHO-GMP partner plants.",
  },
  {
    icon: "🚢",
    title: "Global Shipping",
    desc: "Our expert logistics network guarantees timely and secure delivery to any part of the world.",
  },
  {
    icon: "🛡️",
    title: "Quality Assurance",
    desc: "We follow strict quality control and international standards to deliver only the best.",
  },
  {
    icon: "💬",
    title: "Dedicated Support",
    desc: "24/7 customer support to handle all your queries and requirements promptly.",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="relative bg-white py-20 lg:py-24">
      <div className="container-x">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-accent-600 sm:text-4xl">
          OUR STRENGTHS
        </h2>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {STRENGTHS.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center rounded-3xl bg-[#fdeadd] px-6 py-10 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-accent-500 text-3xl text-white shadow-md shadow-accent-500/30">
                {s.icon}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-accent-600">
                {s.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
