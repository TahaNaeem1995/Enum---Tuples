enum  Days {
    Monday = "sunny weather",
    Tuesday = "hot weather",
    wednesday = "dry weather",
} 
//let currentDays: Days = Days [0]
console.log(Days.Monday);
console.log(Days.Tuesday);
console.log(Days.wednesday);




let val:any;
val = 5
val = "abc"
val = true
val = undefined

let val2: unknown
val2 = 5
val2 = "num"
val2 = true
val2 = undefined
val2 = null
val2 = true
//type casting
let val3:string = val
let val4:unknown = val2


function abc():never{
    while(true){

    }
    return  0
    
}
abc()

//type allias


type abc = string & number


//type casting 
type data:unknown
let abc:boolean = data as boolean

// tuples
let trafficlight:string[]=
["green", "red","yellow",]
let tuples:[string,boolean,number]
= ["abc",true, 1]
// tuples.push

//function default parameter
function greet(sania?:string){
    console.log(`hello${sania}`);
}
greet()

//function default parameter
function greet(name: string, ...
    teacherNam:string[]){
    console.log(` hello ${name}, $
     {teacherNam}`);
}
greet("okasha","ubaid","naeem")

// function overload
function hello(message:string):string
function hello(message:number):number
function hello(message:any){
    return message;
}
hello("ubaid")