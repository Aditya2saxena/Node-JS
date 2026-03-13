// url
// https:// - protocol
// glauniersity.in   -- domain
// /Uploadattendance.aspx -- path parm
// ?access_key= njvnsknss==&parm=value--  Query Param
// #key -> HAsh parm  particular line ke liye

/*
https:// -> Protocol
www.flipkart.com -> domain
/ajy/buh/~cs-7uh3ckj2jw/pr -  path parm
?sid=ajy%2Cbuh&collection-tab-name=Fire-Boltt&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=SNRYEPQ1UM8H_AD    -> Query Parm
 */

[
    "node" , 
    "add",
    "2",
    "5",
]
const[,,functionName, value1,value2]=process.argv;

console.log(functionName);
// const value1=process.argv[1];
console.log(value1);
// const value3=process.argv[3];
console.log(value2);
// const value4=process.argv[4];
//console.log(value4);

if(functionName ==="add"){
    console.log(Number(value1)+ Number(value2));
}
if(functionName ==="multi"){
    console.log(Number(value1) * Number(value2));
}
