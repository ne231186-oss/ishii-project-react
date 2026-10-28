# Ishii Project 2026

石井プロジェクト公式サイトの React + TypeScript + Vite 版です。

## Stack
- React
- TypeScript (strict)
- Vite
- ESLint
- Prettier
- GitHub Actions CI

## Setup
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Architecture
- `components/`: 再利用可能なUI
- `sections/`: ページを構成するセクション
- `data/`: メンバー・イベント等のコンテンツ
- `types/`: TypeScript型定義
- `styles/`: グローバルスタイル

## Git workflow
1. Issueを作る
2. `feature/...` / `fix/...` ブランチを作る
3. 実装
4. lint / typecheck / build
5. Pull Request
6. Review
7. mainへmerge

CIはmainへのpushとPull Requestで自動実行されます。
