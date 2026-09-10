import {google} from 'googleapis'; import fs from 'node:fs';
const configured=()=>!!(process.env.GOOGLE_CLIENT_ID&&process.env.GOOGLE_CLIENT_SECRET&&process.env.GOOGLE_REDIRECT_URI);
export class GoogleDriveService{
 private oauth(){const o=new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID,process.env.GOOGLE_CLIENT_SECRET,process.env.GOOGLE_REDIRECT_URI); return o;}
 isConfigured(){return configured()}
 authUrl(){if(!configured()) throw new Error('Google Drive is not configured'); const o=this.oauth(); return o.generateAuthUrl({access_type:'offline',scope:['https://www.googleapis.com/auth/drive.file'],prompt:'consent'});}
 async ensureFolder(name:string,parentId?:string){if(!configured()||!process.env.GOOGLE_REFRESH_TOKEN)throw new Error('Google Drive is not connected');const o=this.oauth();o.setCredentials({refresh_token:process.env.GOOGLE_REFRESH_TOKEN});const drive=google.drive({version:'v3',auth:o});const q=`name='${name.replace(/'/g,"\\'")}' and mimeType='application/vnd.google-apps.folder' and trashed=false`+(parentId?` and '${parentId}' in parents`:'');const found=await drive.files.list({q,fields:'files(id,name)',pageSize:1});if(found.data.files?.[0]?.id)return found.data.files[0].id;const r=await drive.files.create({requestBody:{name,mimeType:'application/vnd.google-apps.folder',parents:parentId?[parentId]:process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID?[process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID]:undefined},fields:'id'});return r.data.id||undefined;}
 async upload(filePath:string,name:string,mimeType:string,folderId?:string){
  if(!configured()) throw new Error('Google Drive is not configured');
  const token=process.env.GOOGLE_REFRESH_TOKEN; if(!token) throw new Error('Google Drive OAuth has not been connected');
  const o=this.oauth(); o.setCredentials({refresh_token:token}); const drive=google.drive({version:'v3',auth:o});
  const res=await drive.files.create({requestBody:{name,parents:[folderId||process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID!]},media:{mimeType,body:fs.createReadStream(filePath)},fields:'id,name,mimeType,size,webContentLink'});
  return res.data;
 }
 async stream(fileId:string){if(!configured()||!process.env.GOOGLE_REFRESH_TOKEN)throw new Error('Google Drive is not connected'); const o=this.oauth();o.setCredentials({refresh_token:process.env.GOOGLE_REFRESH_TOKEN}); const drive=google.drive({version:'v3',auth:o}); return drive.files.get({fileId,alt:'media'},{responseType:'stream'});}
 async delete(fileId:string){if(!configured()||!process.env.GOOGLE_REFRESH_TOKEN)return; const o=this.oauth();o.setCredentials({refresh_token:process.env.GOOGLE_REFRESH_TOKEN});await google.drive({version:'v3',auth:o}).files.delete({fileId});}
}
export const driveService=new GoogleDriveService();
