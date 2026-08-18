import { useReveal } from '../hooks/useReveal'

// Wraps children and applies the 'reveal' / 'visible' classes on scroll.
export default function Reveal({ as: Tag = 'div', className = '', children, delay = 0, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
