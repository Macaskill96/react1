const person4 = {id:262,name:'Photography Raptor',status:'Dead',species:'Alien',type:'Parasite',gender:'unknown'}

function Person4() {
    const personArr = [person4];

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

export default Person4;