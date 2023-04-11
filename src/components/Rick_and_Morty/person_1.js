const person1 = {
id:175,name:'Jerry Smith', status: 'Alive', species:'Human', type:'', gender:'Male'}

function Person1() {
    const personArr = [person1];

    return (
        <div>
            {personArr.map((value) => (
                <div key={value.id}>
                    <h1>{value.name}</h1>
                    <p>status: {value.status}</p>
                    <p>species: {value.species}</p>
                    <p>{value.type}</p>
                    <p>gender: {value.gender}</p>
                    <p>{value.id}</p>
                </div>
            ))}
        </div>
    );
}

export default Person1;