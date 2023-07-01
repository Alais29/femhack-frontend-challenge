import { useEffect, useState } from 'react';
import { getDataByCountry } from '../../services/getDataByCountry';


const useDataByCountry = (country) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getAllDataByCountry = async () => {
            const data = await getDataByCountry(country)
            const formatedData = Object.entries(data).map(([year, data]) => ({ year, data }));
            setData(formatedData);
        }
        getAllDataByCountry();
    }, [country]);
    return data;
}

export default useDataByCountry;