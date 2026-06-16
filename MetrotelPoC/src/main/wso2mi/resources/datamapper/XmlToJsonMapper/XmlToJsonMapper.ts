import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* title : "Person",
* inputType : "XML",
*/
interface Person {
id: number
firstName: string
lastName: string
email: string
age: number
address: {
street: string
city: string
country: string
}
}

/*
* title : "root",
* outputType : "JSON",
*/
interface Root {
id: number
firstName: string
lastName: string
email: string
age: number
address: {
street: string
city: string
country: string
}
}



/**
 * functionName : map_S_Person_S_root
 * inputVariable : inputPerson
*/
export function mapFunction(input: Person): Root {
    return {
    id: input.id,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    age: input.age,
    address: {
      street: input.address.street,
      city: input.address.city,
      country: input.address.country
    }
    };
}

