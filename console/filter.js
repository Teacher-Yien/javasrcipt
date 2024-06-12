let Array = [
{Name:"Dara",Age:20,sex:"Male"},
{Name:"Nana",Age:18,sex:"female"},
{Name:"Momo",Age:24,sex:"male"},
{Name:"Nono",Age:12,sex:"female"},
{Name:"Kim no",Age:56,sex:"male"}
];
let result= Array.filter((ev)=>ev.Age>=18 && ev.sex=="male").map((e)=>e);
console.log(result);
