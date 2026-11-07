// Gera docs/analise-quantitativa-defi.pdf a partir de ../index.html (requer: npm i playwright).
const {chromium}=require('playwright');const path=require('path');
const root=path.resolve(__dirname,'..');
(async()=>{const b=await chromium.launch();
const p=await b.newPage({viewport:{width:794,height:1123}});
await p.emulateMedia({media:'print',colorScheme:'light'});
await p.goto('file://'+path.join(root,'index.html'));await p.waitForTimeout(1500);
await p.evaluate(()=>{document.documentElement.removeAttribute('data-theme');
 document.getElementById('hk').remove(); document.getElementById('unlockAll').click();
 const c=document.getElementById('capa'),t=document.getElementById('toc');c.after(t);t.hidden=false;});
await p.pdf({path:path.join(root,'docs','analise-quantitativa-defi.pdf'),format:'A4',printBackground:true,preferCSSPageSize:true,
 displayHeaderFooter:true,outline:true,tagged:true,headerTemplate:'<span></span>',
 footerTemplate:'<div style="width:100%;font:7.5px monospace;color:#6B7786;display:flex;justify-content:space-between;padding:0 15mm"><span>Análise Quantitativa em DeFi · Solana Data Lab</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
 margin:{top:'16mm',bottom:'18mm',left:'15mm',right:'15mm'}});
await b.close()})();
