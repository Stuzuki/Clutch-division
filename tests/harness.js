// Harnais d'audit V4 (exécuté dans l'aperçu local, jamais sur les sauvegardes du joueur)
window.__RND=window.__RND||Math.random;
window.SEED=s=>{let a=s>>>0;Math.random=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};
window.UNSEED=()=>{Math.random=window.__RND};
window.AR=JSON.parse(localStorage.getItem("__audit")||"{}");
window.T=(id,ok,ev)=>{AR[id]={s:ok===true?"PASS":ok===false?"FAIL":ok,e:String(ev).slice(0,400)};localStorage.setItem("__audit",JSON.stringify(AR));return id+" "+AR[id].s};
window.__E=[];if(!window.__ceHooked){const oe=console.error;console.error=(...a)=>{__E.push(String(a[0]&&a[0].stack||a[0]).slice(0,240));oe(...a)};window.addEventListener("error",e=>__E.push("window: "+e.message));window.__ceHooked=1}
window.CLR=()=>{G.ivQ=[];G.mvpQ=[];G.annQ=[];G.cerQ=[];G.twQ=[];G.cupQ=[]};
window.FRESH=(i,seed)=>{if(seed!=null)SEED(seed);newGame(i==null?3:i,{manager:"T"});v4Init();return me()};
window.DAYS=(n,o={})=>{for(let k=0;k<n&&!G.summary;k++){CLR();if(G.mgr.crisis){v4CrisisPick(o.crisis??0);v4CrisisClose()}if(G.fired){act.firedPick({dataset:{v:G.fired.offers[0]}})}if(G.mgr.itv)G.mgr.itv=null;const mm=myMatchNow();if(mm)autoMatch(mm);resolveStep()}};
window.TOSUM=o=>{let k=0;while(!G.summary&&k++<1500)DAYS(1,o)};
window.INV=()=>{const bad=[],seen=new Map();G.teams.forEach(t=>t.players.forEach(p=>{if(seen.has(p.id))bad.push(`joueur ${p.nick} dans ${seen.get(p.id)} et ${t.name}`);seen.set(p.id,t.name)}));G.fa.forEach(p=>{if(seen.has(p.id))bad.push(`joueur ${p.nick} à la fois en club (${seen.get(p.id)}) et agent libre`);seen.set(p.id,"FA")});
 G.teams.forEach(t=>{if(!isFinite(t.budget))bad.push("budget invalide "+t.name);if(!isFinite(t.pts))bad.push("points invalides "+t.name);if(!v4Ctl(t.id)&&starters(t).length!==5)bad.push(`${t.name} : ${starters(t).length} titulaires`)});
 if(!G.teams[G.me])bad.push("G.me invalide");if(G.mgr){if(!G.mgr.ctl.includes(G.me))bad.push("section active hors responsabilités");G.mgr.ctl.forEach(id=>{if(!G.teams[id])bad.push("section inconnue "+id)});if(new Set(G.mgr.ctl).size!==G.mgr.ctl.length)bad.push("section en double")}
 const mid=new Set();G.mails.forEach(m=>{if(mid.has(m.id))bad.push("mail en double "+m.id);mid.add(m.id)});
 [...G.V,...Object.values(G.T).flatMap(x=>Object.values(x))].forEach(t=>{const k=new Set();t.ms.forEach(m=>{if(m.id!=null){if(k.has(m.id))bad.push("match en double "+t.name);k.add(m.id)}})});return bad};
window.RANK=(t,r)=>{const L=regRank(t).sort((a,b)=>ptsOf(b)-ptsOf(a)||b.pts-a.pts).filter(x=>x!==t);L.splice(r-1,0,t);L.forEach((x,i)=>{x.cp=1000-i*10;x.vp=0;x.gp=0})};
window.SUM=()=>{G.summary={year:G.year,job:{stay:true,pick:"stay",offers:[],rep:30,tries:3,asks:{}}}};
window.TWO=(seed)=>{FRESH(3,seed);const gc=G.teams.find(t=>t.gc&&t.region===me().region);v4Link(gc.id,me().oid);v4Grant(gc,"Test");G.mgr.deleg[gc.id].comp=false;return gc};
"harness ok"
window.SC=(c)=>{const gc=TWO(42);const v=me(),o=orgOf(v);if(c.sty)o.ceo.sty=c.sty;const cfg=[[v,c.vct],[gc,c.gc]];G.mgr.ctr.until=G.year+(c.untilRel??1);
 cfg.forEach(([t,x])=>{if(!x){G.mgr.ctl=G.mgr.ctl.filter(id=>id!==t.id);return}RANK(t,x.rank);if(t.id===G.me)G.expect=x.obj;else (G.sec[t.id]=G.sec[t.id]||{}).expect=x.obj;G.mgr.trust[t.id]=x.trust??55;if(x.rich){const L=regRank(t);t.budget=Math.max(...L.map(z=>z.budget))+1e5}if(x.poor){const L=regRank(t);t.budget=Math.max(0,Math.min(...L.map(z=>z.budget))-1e4)}G.mgr.snap[t.id]={ovr:(starters(t).length?avgOvr(t):60)-(x.prog||0),bud:t.budget}});
 if(c.prev)c.prev.forEach(sc=>G.mgr.reviews.push({kind:"bilan",y:G.year-1,per:cfg.filter(z=>z[1]).map(([t])=>({id:t.id,sc}))}));G.mgr.arr=-999;SUM();SEED(7);v4ReviewDo(c.opt??0);const r=G.summary.rv;return{dec:r.dec,per:r.per.map(p=>p.name+"("+p.sec+") "+p.sc+" → "+p.d),d:r.per.map(p=>p.d),sc:r.per.map(p=>p.sc),ctl:G.mgr.ctl.map(id=>G.teams[id].name),me:me().name,fired:!G.summary.job.stay,why:r.per.map(p=>p.why.join(", ")),until:G.mgr.ctr.until,y:G.year}};
"harness+SC ok"
