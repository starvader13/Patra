import createUser from "../../utils/createUser";

test('create user success returns User Created Successfully', async ()=>{
    const response = await createUser({username: "Starvader", email:"ashutoshgupta1311@gmail.com", password:"starvader1234", isAdmin: true});
    expect(response).toBe("User Created Successfully");
})

test('create user fails returns Failed Creating User', async()=>{
    const response = await createUser({username: "Starvader", email:"ashutoshgupta1311@gmail.com", password:"starvader1234", isAdmin: true});
    expect(response).toBe("Failed Creating User");
})