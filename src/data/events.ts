import type { ProjectEvent } from '../types/event'

export const events: ProjectEvent[] = [
  {
    id: 1,
    date: '2026.06.21',
    title: 'Processingでミニゲームを作ろう。',
    description: 'プログラミングで「作る」楽しさを体験するイベント。',
    image: '/images/events/event-01.png',
    status: 'COMPLETED',
    href: '/HAC1.html',
  },
  {
    id: 2,
    date: '2026.10.03',
    title: '第2回イベント',
    description: 'AIとWeb制作を通じて、Webエンジニアの仕事を体験。',
    image: '/images/events/event-02.png',
    status: 'COMPLETED',
  },
  {
    id: 3,
    date: '2026.11.21',
    title: '第3回イベント',
    description: '次の学びにつながる、新しい体験を準備中です。',
    image: '/images/events/event-03.png',
    status: 'UPCOMING',
  },
]
