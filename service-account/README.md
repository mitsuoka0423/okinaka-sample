## 準備

### `privatekey.json`の作成

1. [Create access credentials | Google Workspace for Developers | Google Developers](https://developers.google.com/workspace/guides/create-credentials#service-account)を参考に、サービスアカウントを作成しJSONをダウンロードする。
   - 中身はこんな感じ。
   - ```
     {
        "type": "service_account",
        "project_id": "xxxxxxxxxxxxxx",
        "private_key_id": "xxxxxxxxxxxxxx",
        "private_key": "-----BEGIN PRIVATE KEY-----\n(略)\n-----END PRIVATE KEY-----\n",
        "client_email": "xxxxxxxxxxxxxx@xxxxxxxxxxxxxx.iam.gserviceaccount.com",
        "client_id": "xxxxxxxxxxxxxx",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxxxxxxxxxxxx.iam.gserviceaccount.com"
      }
      ```
2. ファイル名を`privatekey.json`に変更する。
3. `privatekey.json`を`service-account`フォルダ直下にコピーする。

## インストール

```bash
npm i
```

## 実行

```bash
node index.js
```
