# CONTRIBUTING

このプロジェクトへの貢献を歓迎します！  
以下のルールに従って、チーム全体で効率的に開発を進めましょう。

---

## ブランチ戦略

| ブランチ種別 | 用途 |
|--------------|------|
| `main`       | 常に安定している本番用ブランチです。 |
| `develop`    | 次のリリースに向けた開発の統合ブランチです。 |
| `feature/*`  | 新機能の開発用ブランチ。`feature/` に続けて機能名を記述します。 |
| `fix/*`      | バグ修正用ブランチ。 |
| `hotfix/*`   | 本番環境への緊急修正ブランチ。 |
| `docs/*`     | ドキュメントの変更用ブランチ。 |
| `refactor/*` | 機能追加やバグ修正を伴わないリファクタリング用ブランチ。 |
| `chore/*`    | ビルド・CI・依存関係更新など開発補助的な作業用。 |

### ブランチ命名例

- `feature/add-login-page`
- `fix/header-overlap-on-mobile`
- `docs/update-readme`
- `refactor/button-component`
- `chore/update-dependencies`

---

## コミットメッセージのルール

コミットメッセージは以下の形式に従ってください。

```
<type>(<issue>): <subject>
```

- **type**: 変更の種類（必須）
- **issue**: Issueのチケット番号（必須）
- **subject**: 簡潔な変更内容（必須）

### type 一覧

| type       | 説明 |
|------------|------|
| `feature`     | 新機能の追加 |
| `fix`      | バグ修正 |
| `docs`     | ドキュメントの変更 |
| `refactor` | リファクタリング（機能変更なし） |
| `style`    | スタイルの変更（フォーマットやスペース等） |
| `test`     | テストの追加や修正 |
| `chore`    | ビルド、CI、依存関係などの変更 |

### コミット例

- `feature(auth): #1 add login and signup functionality`
- `fix(button): #1 correct hover state on Safari`
- `docs(readme): #1 add usage instructions`
- `refactor(modal): #1 improve open/close handling logic`
- `chore:#1 update ESLint config and dependencies`

---

## その他のルール

- PR のタイトルもコミットメッセージと同様のフォーマットで記述してください。
- 大きな機能追加・変更を行う場合は、事前に Issue を作成してください。
- 他のコントリビューターが理解しやすいよう、必要に応じてコメントやドキュメントの整備もお願いします。

---

一貫性のあるコードベースと開発体験を保つため、ご協力をお願いいたします 🙏
