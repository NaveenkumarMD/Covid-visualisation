const impact=require('./impact.json')
const likelihood=require('./likelihood.json')
const relevance=require('./relevance.json')
var impactcount=[],likelihoodcount=[],relevancecount=[]
for(var i=0;i<3;i++){
    impactcount.push(impact.filter(x=>x==i+1).length)
}
for(var i=0;i<7;i++){
    relevancecount.push(relevance.filter(x=>x==i+1).length)
}
for(var i=0;i<4;i++){
    likelihoodcount.push(likelihood.filter(x=>x==i+1).length)
}

export {likelihoodcount,impactcount,relevancecount}