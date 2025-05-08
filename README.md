# PH-L2-Assignment-1

# question 1

# 1.What are some differences between interfaces and types in TypeScript?

=>interface gives access like objects ,like after declaring the properties can be add or modify but in type there will be error and type wont be declare by object .
interface Person {
id: number;
name: string;
age: number;
isActive: boolean;
}

interface Person {
role:string;
}
type Person = {
id: number;
name: string;
age: number;
isActive: boolean;
};
type Person={
cant assign here anything
}

# 2.What is type inference in TypeScript? Why is it helpful?

=> function add(a: number, b: number):number { return a + b; }
the return type is type inference in ts,the benefit of this that the return type will be sure not mixed up..if the return type is number then it must return numeber not any otehr type
