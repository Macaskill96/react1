const person5 = {id:382,name:'Worldender',status:'Dead',species:'Alien',type:'',gender:'Male'}

function Person5() {
    const personArr = [person5];

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

export default Person5;