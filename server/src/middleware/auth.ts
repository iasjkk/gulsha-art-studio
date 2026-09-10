import {Request,Response,NextFunction} from 'express'; import {jwtVerify,SignJWT} from 'jose';
const secret=()=>new TextEncoder().encode(process.env.JWT_SECRET||'development-only-secret');
export async function signAdmin(){return new SignJWT({role:'admin'}).setProtectedHeader({alg:'HS256'}).setSubject('admin').setIssuedAt().setExpirationTime('8h').sign(secret())}
export async function requireAdmin(req:Request,res:Response,next:NextFunction){try{const h=req.headers.authorization;if(!h?.startsWith('Bearer '))throw 0;const {payload}=await jwtVerify(h.slice(7),secret());if(payload.role!=='admin')throw 0;(req as any).admin=true;next()}catch{res.status(401).json({error:'Unauthorized admin access'})}}
