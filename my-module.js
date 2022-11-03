export default name => console.log(`hello ${name}`);

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

const text = "Text";
const user = {
    name: "Ahmet Mert",
    surname: "Sakar"
};
const users = [
    {
        name: "Mehmet",
        surname: "Tarik"
    },
    {
        name: "Tayfun",
        surname: "Erbilen"
    },
];

export { topla, cikar, text, user, users };