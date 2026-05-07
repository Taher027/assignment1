## Pick and Omit utility types prevent code duplication.

When we build a large application. We need to work with large data structure. Like If we create a student management system we need to create a large object which carries all information about student. But some time we need only some portions of that student information. In that case `Pick` and `Omit` helps us to create specialized "slices" of a student interface to keep our code DRY.

```
type Student ={
    id: number;
    name:string;
    email:string;
    password:string;
    department:string;

}

type studentProfile = Pick<Student, "name" | "department">


```

In the exaple code we see a See a 'Student' type. From the student type we create a new type 'studentProfile'. studentProfile will depend on 'Student'.

### How Pick works?

`Pick` craete na new type by selecting specific properties from an existing type.

## Omit

`Omit` does the opposite of Pick. `Omit` create a new type by excluding the specific properties from an existing type.

```
type Student ={
    id: number;
    name:string;
    email:string;
    password:string;
    department:string;

}

type studentDept =Omit<Student, 'id', 'name', 'email', 'password'


```

Here Omit only department to create `studentDept`

Finally we see that, we dont need to create same type repeatedly. We can create a new type with help of Pick and Omit from an existing type. It keep our code DRY.
