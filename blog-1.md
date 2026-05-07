## In TypeScript `any` labeled as type safety hole, But `unknown` is the safer choice for handling unpredictable data

TypeScrpt gives us type safety. It catches the mistake before running the code. We can easily define the type of any data. But some times, when we fetch data we don't know the response data type. In that case, we used `any`or `undefined`.

`any` and `undefinded` are useful for handling unpredictable data. But there is a hudge difference in type safety. When we used `any` we lost type safety.

`function userData(data:any){
data.toUpperCase(); // no error shows.
data.multiply(5)

}`

When we set data type any , We can do anything in the function.But do not get any error before run the code. But If we used `undefined` instead of any It will show the error. Because it does not know what is the type of the data. So undefinded show error before run the code.
`function userData(data:unknown){
    data.toUpperCase() // Error , 
}`

#Type Narrowing

## Type Narrowing helps TypeScript to understand values more precisely.

`function getStudent(data:unknown){
if(typof data === 'object'){ // we check the type of data then do something
console.log("do something")
}esle {
console.log("do something")
}
}

`

In the example code we check data type conditionaly then take action.
