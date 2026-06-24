// Premium named photo placeholder. Replace each with a real <Image /> later —
// the `slot` label documents exactly which shot belongs here.
export default function Placeholder({ slot, hint, shape = "portrait", mono = "FD" }) {
  return (
    <div className={`ph ${shape}`} role="img" aria-label={slot}>
      <div className="mono">{mono}</div>
      <div className="ph-cap">
        {slot}
        {hint ? <small>{hint}</small> : null}
      </div>
    </div>
  );
}
