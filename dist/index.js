"use strict";var K=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var Z=K(function(W,S){
var p=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-floor/dist'),G=128;function L(e,n,v,m,f,q,w){var a,l,y,b,g,k,B,C,E,I,R,c,i,r,s;if(e<=0)return f;if(l=w,a=m,v===0)return p(n[a])||(f[l]+=n[a]*e,f[l+q]+=e),f;for(s=0;s<e&&(r=n[a],p(r)!==!1);s++)a+=v;if(s===e)return f;if(i=1,c=r,a+=v,s+=1,c===0)for(;s<e;s++){if(r=n[a],p(r)===!1){if(r!==0)break;c+=r,i+=1}a+=v}if(s===e)return f[l]+=c,f[l+q]+=i,f;if(e-s<8){for(;s<e;s++)r=n[a],p(r)===!1&&(c+=r,i+=1),a+=v;return f[l]+=c,f[l+q]+=i,f}if(e-s<=G){for(y=-0,b=-0,g=-0,k=-0,B=-0,C=-0,E=-0,I=-0,R=(e-s)%8;s<e-R;s+=8)r=n[a],p(r)===!1&&(y+=r,i+=1),a+=v,r=n[a],p(r)===!1&&(b+=r,i+=1),a+=v,r=n[a],p(r)===!1&&(g+=r,i+=1),a+=v,r=n[a],p(r)===!1&&(k+=r,i+=1),a+=v,r=n[a],p(r)===!1&&(B+=r,i+=1),a+=v,r=n[a],p(r)===!1&&(C+=r,i+=1),a+=v,r=n[a],p(r)===!1&&(E+=r,i+=1),a+=v,r=n[a],p(r)===!1&&(I+=r,i+=1),a+=v;for(c+=y+b+(g+k)+(B+C+(E+I));s<e;s++)r=n[a],p(r)===!1&&(c+=r,i+=1),a+=v;return f[l]+=c,f[l+q]+=i,f}return f[l]+=c,f[l+q]+=i,i=F((e-s)/2),i-=i%8,L(i,n,v,a,f,q,l),L(e-s-i,n,v,a+i*v,f,q,l),f}S.exports=L
});var M=K(function(Y,h){
var H=Z();function J(e,n,v,m,f,q,w){var a=w;return f[a]=-0,f[a+q]=0,H(e,n,v,m,f,q,a),f[a+q]===0&&(f[a]=0),f}h.exports=J
});var A=K(function(_,z){
var j=require('@stdlib/strided-base-stride2offset/dist'),P=M();function Q(e,n,v,m,f){return P(e,n,v,j(e,v),m,f,j(2,f))}z.exports=Q
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),U=M(),D=A();T(D,"ndarray",U);module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
