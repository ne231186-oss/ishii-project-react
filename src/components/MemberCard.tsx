import type { Member } from '../types/member'

export function MemberCard({ member }: { member: Member }) {
  return (
    <article className="member-card">
      <div className="member-image-wrapper">
        <img
          className="member-image"
          src={member.image}
          alt={`${member.name}のプロフィール写真`}
          loading="lazy"
        />

        <div className="member-role-badge">
          {member.role}
          {member.course && <span>{member.course}</span>}
        </div>
      </div>

      <div className="member-content">
        <h3 className="member-name">{member.name}</h3>

        <p className="member-message">「{member.message}」</p>
      </div>
    </article>
  )
}
