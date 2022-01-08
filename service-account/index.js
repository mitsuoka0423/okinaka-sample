const fs = require('fs');
const {google} = require('googleapis');
const privatekey = require("./privatekey.json");

async function main() {
  const jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ["https://www.googleapis.com/auth/drive"]
  );

  await jwtClient.authorize()
  
  const drive = google.drive({ version: "v3", auth: jwtClient });
  
  const fileMetadata = {
    //nameはDriveに保存する時のファイル名になります
    name: `photo.jpg`,
    parents: ["<アップロードしたいフォルダのID>"],
  };
  const media = {
    mimeType: "image/jpeg",
    body: fs.createReadStream('./Lenna.jpg'),
  };
  
  await drive.files.create(
    {
      resource: fileMetadata,
      media: media,
      fields: "id",
    },
    function (err, file) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        //file.data.idをアップロードされたファイルID
        console.log(file.data.id);
      }
    }
  );
};

main();
