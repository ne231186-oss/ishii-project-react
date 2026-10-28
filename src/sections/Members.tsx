import { MemberCard } from '../components/MemberCard'
import { members } from '../data/members'

export function Members() {
  return (
    <section
      className="members-section"
      id="members"
    >
      <div className="container">
        <div className="section-head">
          <div>
            <span className="kicker">03 / Team</span>
            <h2>Project Members</h2>
          </div>

          <p>
            企画、開発、広報、外部折衝。
            それぞれの得意分野を持ち寄り、
            9名でプロジェクトを進めています。
          </p>
        </div>

        <div className="member-grid">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  )
}