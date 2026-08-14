import { useReveal } from '../hooks/useReveal'

// Wraps children and applies the 'reveal' / 'visible' classes on scroll.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
