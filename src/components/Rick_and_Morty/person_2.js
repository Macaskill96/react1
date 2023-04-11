const person2 = {id:331,name:'Squanchy',status:'unknown',species:'Alien',type:'Cat-Person',gender:'Male'}

function Person2() {
    const personArr = [person2];

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

export default Person2;