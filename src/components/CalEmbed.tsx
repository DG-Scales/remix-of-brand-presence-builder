interface CalEmbedProps {
  showHeading?: boolean;
  className?: string;
}

export default function CalEmbed({ showHeading = true, className = "" }: CalEmbedProps) {
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
        <div className="glass-card p-2 md:p-4 rounded-2xl overflow-hidden">
          <iframe
            src="https://cal.com/dg-scales-7zcjon"
            title="Book a call with DG Scales"
            style={{ width: "100%", height: "800px", border: "0" }}
            allow="camera; microphone; autoplay; fullscreen; clipboard-write"
          />
        </div>
      </div>
    </section>
  );
}
