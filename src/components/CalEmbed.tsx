import { useEffect } from "react";

interface CalEmbedProps {
  showHeading?: boolean;
  className?: string;
}

// Cal.com inline embed for dg-scales-7zcjon
export default function CalEmbed({ showHeading = true, className = "" }: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      // @ts-ignore - Cal embed snippet
      (function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () { p(api, arguments); };
            const namespace = ar[1]; api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      // @ts-ignore
      window.Cal("init", "dg-scales", { origin: "https://cal.com" });
      // @ts-ignore
      window.Cal.ns["dg-scales"]("inline", {
        elementOrSelector: "#cal-inline-dg-scales",
        config: { layout: "month_view", theme: "dark" },
        calLink: "dg-scales-7zcjon",
      });
      // @ts-ignore
      window.Cal.ns["dg-scales"]("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="book" className={`section-padding relative ${className}`}>
      <div className="max-w-6xl mx-auto">
        {showHeading && (
          <div className="text-center mb-10">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Book a Call</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
              Pick a Time That Works
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              Grab a free strategy call directly on our calendar — no back-and-forth emails.
            </p>
          </div>
        )}
        <div
          id="cal-inline-dg-scales"
          style={{ width: "100%", height: "700px", overflow: "scroll" }}
          className="glass-card p-2 md:p-4 rounded-2xl"
        />
      </div>
    </section>
  );
}
