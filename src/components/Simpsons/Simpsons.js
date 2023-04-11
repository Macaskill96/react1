function Simpsons(props) {
    let simpsons = props.persons
    return (
        <div>
            {
                simpsons.map(value => <div>
                    <h1> {value.name} {value.surname}</h1>
                    <h4> Age: {value.age}</h4>
                    <p>{value.info}</p>
                    <hr/>
                </div>)
            }
        </div>
    );
}

export default Simpsons;