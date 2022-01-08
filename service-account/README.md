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

### サービスアカウントにGoogleドライブのフォルダを共有

Googleドライブでフォルダを作成し、サービスアカウントと共有する。

[![Image from Gyazo](https://i.gyazo.com/4329509670015288ffb382f30c3767a3.png)](https://gyazo.com/4329509670015288ffb382f30c3767a3)

[![Image from Gyazo](https://i.gyazo.com/5545e4b7abc1fcab178856725ccbac41.png)](https://gyazo.com/5545e4b7abc1fcab178856725ccbac41)

こんな感じになっていればOK。

[![Image from Gyazo](https://i.gyazo.com/486b2c0d205fa9a879d5730ca18adaf5.png)](https://gyazo.com/486b2c0d205fa9a879d5730ca18adaf5)

### ソースコードにフォルダIDを記入

共有したフォルダのフォルダIDをコピーする。  

> フォルダIDはURLの最後のランダムな文字列です。
> [![Image from Gyazo](https://i.gyazo.com/d2f0d86e14b2cbaa60f0595bc70b9cf6.png)](https://gyazo.com/d2f0d86e14b2cbaa60f0595bc70b9cf6)

`index.js`の20行目あたりの`parents`に記入します。

```js
const fileMetadata = {
  //nameはDriveに保存する時のファイル名になります
  name: `photo.jpg`,
  parents: ["<アップロードしたいフォルダのID>"],
};
```

## インストール

```bash
npm i
```

## 実行

```bash
node index.js
```
