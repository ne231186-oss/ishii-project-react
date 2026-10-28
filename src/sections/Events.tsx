import { EventCard } from '../components/EventCard'
import { events } from '../data/events'

export function Events() {
  return (
    <section id="events">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="kicker">04 / Events</span>
            <h2>Events & Activities</h2>
          </div>

          <p>
            学ぶだけではなく、実際に手を動かす。
            2026年度に企画・開催したイベントと、
            これからの予定です。
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  )
}