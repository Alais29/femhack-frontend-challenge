

import { countriestLds } from "../assets/countryCodes.js";

export const getCountriesWithCode = (countries) => {

    const nuevoArray = countries.map((pais) => {
        const datoTld = countriestLds.find((dato) => dato.country === pais);

        const codigo = datoTld ? datoTld.tlds[0].substring(1) : '';
        return {
            country: pais,
            code: codigo
        };
    });

    return nuevoArray
}

