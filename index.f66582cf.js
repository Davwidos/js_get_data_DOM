var t,o,e,n,a,r,l,u,c=(t=document.querySelectorAll(".population"),o={total:0,count:0,get avg(){return this.count>0?this.total/this.count:0}},t.forEach(function(t){var e=parseInt(t.textContent.split(",").join(""));!isNaN(e)&&(o.total+=e,o.count++)}),o);e=c.total,n=document.querySelector(".total-population"),a=e.toLocaleString("en-US"),n.innerHTML=a,r=c.avg,l=document.querySelector(".average-population"),u=r.toLocaleString("en-US"),l.innerHTML=u;//# sourceMappingURL=index.f66582cf.js.map

//# sourceMappingURL=index.f66582cf.js.map
