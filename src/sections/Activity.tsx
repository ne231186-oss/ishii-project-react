import { activities } from '../data/activities'

export function Activity() {
  return (
    <section className="activity-section" id="activity">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="kicker">02 / Activity</span>

            <h2>
              アイデアを、
              <br />
              実際の体験へ。
            </h2>
          </div>

          <p>
            メンバー同士で企画・開発・運営を行いながら、
            学生が実際に手を動かして学べるイベントを作っています。
          </p>
        </div>

        <div className="activity-gallery">
          {activities.map((activity, index) => (
            <figure
              className={`activity-item activity-item-${index + 1}`}
              key={activity.id}
            >
              <img
                src={activity.image}
                alt={activity.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}