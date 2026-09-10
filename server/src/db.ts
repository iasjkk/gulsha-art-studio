import Database from 'better-sqlite3';
import path from 'node:path'; import fs from 'node:fs';
const dir=path.resolve('server/data'); fs.mkdirSync(dir,{recursive:true});
export const db=new Database(path.join(dir,'gallery.db'));
db.pragma('journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,slug TEXT UNIQUE NOT NULL,shortDescription TEXT,story TEXT,coverImage TEXT,driveFolderId TEXT,theme TEXT NOT NULL DEFAULT '{}',displayOrder INTEGER NOT NULL DEFAULT 0,active INTEGER NOT NULL DEFAULT 1);
CREATE TABLE IF NOT EXISTS paintings(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,slug TEXT UNIQUE NOT NULL,categoryId INTEGER,driveFileId TEXT,thumbnailUrl TEXT,previewUrl TEXT,highResolutionUrl TEXT,description TEXT,story TEXT,year TEXT,medium TEXT,dimensions TEXT,featured INTEGER NOT NULL DEFAULT 0,published INTEGER NOT NULL DEFAULT 0,displayOrder INTEGER NOT NULL DEFAULT 0,createdAt TEXT NOT NULL,updatedAt TEXT NOT NULL,FOREIGN KEY(categoryId) REFERENCES categories(id));
CREATE TABLE IF NOT EXISTS artist_profile(id INTEGER PRIMARY KEY CHECK(id=1),name TEXT NOT NULL,portraitUrl TEXT,biography TEXT,statement TEXT,philosophy TEXT,contact TEXT,socialLinks TEXT);
CREATE TABLE IF NOT EXISTS site_settings(id INTEGER PRIMARY KEY CHECK(id=1),background TEXT NOT NULL DEFAULT '#F5F0E6',texture REAL NOT NULL DEFAULT 0.035,accent TEXT NOT NULL DEFAULT '#8B6F47',ink TEXT NOT NULL DEFAULT '#25231F',logo TEXT,heroPaintingId INTEGER,footer TEXT);
CREATE TABLE IF NOT EXISTS drive_files(id INTEGER PRIMARY KEY AUTOINCREMENT,paintingId INTEGER,driveFileId TEXT NOT NULL,originalName TEXT,mimeType TEXT,size INTEGER,createdAt TEXT NOT NULL);
`);
if(!db.prepare('SELECT 1 FROM artist_profile WHERE id=1').get()) db.prepare('INSERT INTO artist_profile(id,name,biography,statement,philosophy,contact,socialLinks) VALUES(1,?,?,?,?,?,?)').run('Artist','An artist whose work explores memory, atmosphere and human connection.','Art begins where observation becomes emotion.','I work slowly, allowing material, light and gesture to guide each piece.','','{}');
if(!db.prepare('SELECT 1 FROM site_settings WHERE id=1').get()) db.prepare('INSERT INTO site_settings(id) VALUES(1)').run();
export const json=(v:any)=>{try{return v?JSON.parse(v):null}catch{return v}};
export function category(row:any){return row&&{...row,active:!!row.active,theme:json(row.theme)}}
export function painting(row:any){return row&&{...row,featured:!!row.featured,published:!!row.published}}
