import React, {Fragment, useEffect, useState} from 'react';

const Greeting = (props) => {

    let [userData, setUserData] = useState({
        id: 1,
        name: "Cargando información...",
        username: "Cargando información...",
        email: "Cargando información...",
        address: {
          city: "Cargando información...",
        },
        phone: "Cargando información...",
        website: "Cargando información...",
        company: {
          name: "Cargando información...",
        }
      })
    let obtainData = async (id) => {
        let crude = await fetch('https://jsonplaceholder.typicode.com/users');
        let response = await crude.json();
        let finalData = await response[id]
        return await finalData
    }

    useEffect(() => {
        async function fetchData(){
            let userFinalData = await obtainData(props.id);
            setUserData(await userFinalData)
        }
        fetchData()
    }, [props.id])

    return(
        <Fragment>
            <h1> Hola de nuevo {userData.username}!</h1>
            <h2>Aquí esta tu información!</h2>
            <article className="info-box"><p>Nombre</p><p>{userData.name}</p></article>
            <article className="info-box"><p>Correo Electronico</p><p>{userData.email}</p></article>
            <article className="info-box"><p>Ciudad</p><p>{userData.address.city}</p></article>
            <article className="info-box"><p>Teléfono</p><p>{userData.phone}</p></article>
            <article className="info-box"><p>Sitio Web</p><p>{userData.website}</p></article>
            <article className="info-box"><p>Compañia</p><p>{userData.company.name}</p></article>
        </Fragment>
    )
}

export default Greeting;
