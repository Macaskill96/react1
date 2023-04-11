const person6 = {id:626,name:'Tammy Guetermann',status:'Alive',species:'Human',type:'Soulless Puppet',gender:'Female'}


function Person6() {
    const personArr = [person6];

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

export default Person6;