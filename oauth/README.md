## 準備

### `credentials.json`の作成

1. [Create access credentials | Google Workspace for Developers | Google Developers](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id)を参考に、OAuthクライアントIDを作成する。
2. 承認済みのリダイレクトURIに`http://localhost:3000/oauth`を追加する。
3. JSONをダウンロードする。
    - 中身はこんな感じ。
    - ```
      {
        "web": {
          "client_id": "xxxxxxxxx-xxxxxxxxxxxxxxxxx.apps.googleusercontent.com",
          "project_id": "xxxxxxxxxxxx",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_secret": "xxxxxxxxxxxxxxxxxxxxxx",
          "redirect_uris": [
            "http://localhost:3000/oauth"
          ]
        }
      }
      ```
4. ファイル名を`credentials.json`に変更する。
5. `oauth`フォルダ直下にコピーする。


## インストール

```bash
npm i
```

## 実行

```bash
node index.js
```
