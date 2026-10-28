## はじめて開発する人へ

このプロジェクトは React + TypeScript + Vite を使用しています。

「Gitを使ったことがない」「Reactを触ったことがない」という人でも参加できるように、このREADMEでは最初から説明します。

---

## 1. 必要なものを準備する

開発を始めるには、以下のソフトを使用します。

- Git
- Node.js
- VS Code
- GitHubアカウント

### Gitとは？

Gitは、ソースコードの変更履歴を保存するためのツールです。

例えば、

「昨日の状態に戻したい」

「誰がどこを変更したのか確認したい」

といったことができます。

### GitHubとは？

GitHubは、Gitで管理しているソースコードをインターネット上で共有できるサービスです。

このプロジェクトのコードもGitHubで管理しています。

---

## 2. GitHubからコードを自分のPCに持ってくる

最初にGitHubからプロジェクトを取得します。

ターミナルを開いて、プロジェクトを保存したい場所へ移動します。

例：

```bash
cd ~
```

次に以下を実行します。

```bash
git clone https://github.com/ne231186-oss/ishii-project-react.git
```

`git clone` は、

> GitHubにあるプロジェクトを自分のPCへコピーする

ためのコマンドです。

完了したら、プロジェクトのフォルダへ移動します。

```bash
cd ishii-project-react
```

---

## 3. VS Codeでコードを表示する

プロジェクトのフォルダで、

```bash
code .
```

を実行します。

`.` は「現在いるフォルダ」という意味です。

つまり、

```bash
code .
```

は、

> 今いるプロジェクトフォルダをVS Codeで開く

という意味になります。

### `code` コマンドが使えない場合

VS Codeを起動して、

**ファイル → フォルダーを開く**

から `ishii-project-react` を選択してもOKです。

---

## 4. 必要なパッケージをインストールする

GitHubから取得した直後は、Webサイトを動かすために必要なパッケージがまだ入っていません。

最初の1回だけ、

```bash
npm install
```

を実行します。

これによって `package.json` に書かれている必要なパッケージがインストールされます。

---

## 5. Webサイトを起動する

以下を実行します。

```bash
npm run dev
```

成功すると、ターミナルに次のようなURLが表示されます。

```text
Local: http://localhost:5173/
```

このURLをブラウザで開くと、ISHII PROJECTのWebサイトが表示されます。

開発中にコードを保存すると、基本的にはブラウザ側にも自動で変更が反映されます。

---

## 6. 開発を終了する

Webサイトを停止したい場合は、`npm run dev` を実行しているターミナルで、

```text
Control + C
```

を押します。

これで開発サーバーが終了します。

---

# ここまでの流れ

初めてプロジェクトを取得するときは、

```bash
git clone https://github.com/ne231186-oss/ishii-project-react.git
cd ishii-project-react
npm install
npm run dev
```

VS Codeで開く場合は、

```bash
code .
```

です。

つまり、

**GitHubから取得 → 必要なものをインストール → Webサイトを起動**

という流れです。
