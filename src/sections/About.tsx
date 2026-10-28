const stack = ['Processing', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Figma', 'VS Code']

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="kicker">01 / About</span>

            <h2>
              学びを、
              <br />
              体験に変える。
            </h2>
          </div>

          <p>
            従来の「ハッカソン」という枠だけにとらわれず、
            主に1年生を対象に、ネットワーク情報学部で学ぶ面白さを
            体験できるイベントを企画・運営しています。
          </p>
        </div>

        <div className="about-card">
          <p>
            Processingを使ったミニゲーム制作、趣味をテーマにしたWebサイト制作、
            2年生以降のコース別授業を先取りする企画などを実施。
            役割を分担し、企画から実施までをチームで進めています。
          </p>

          <div className="stack">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
