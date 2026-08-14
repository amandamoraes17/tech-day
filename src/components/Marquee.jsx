export default function Marquee({ text, reverse = false }) {
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
      <div className="marquee__track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="marquee__item">{text}</span>
        ))}
      </div>
    </div>
  )
}
