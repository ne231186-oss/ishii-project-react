import type { ProjectEvent } from '../types/event'

export function EventCard({ event }: { event: ProjectEvent }) {
  const content = (
    <>
      <img src={event.image} alt="" loading="lazy" />
      <div className="event-body">
        <time>{event.date}</time>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <span className="status">
          {event.status}
          {event.href ? ' →' : ''}
        </span>
      </div>
    </>
  )
  return event.href ? (
    <a className="event-card" href={event.href}>
      {content}
    </a>
  ) : (
    <article className="event-card">{content}</article>
  )
}
