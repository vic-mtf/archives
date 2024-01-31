import { useState, useEffect, useMemo } from 'react';
import { faker } from '@faker-js/faker';

const useDate = (num = 7) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = Array.from({length: num}, () => ({
      id: faker.datatype.uuid(),
      createdAt: faker.date.past().toLocaleDateString(),
      designation: faker.commerce.productName(),
    //   origin: faker,
      destination: faker.address.city(),
      numeroDeClassement: faker.string.alphanumeric(5).toLocaleLowerCase(),
      numeroDeReference: faker.string.alphanumeric(5).toLocaleLowerCase(),
      status: faker.helpers.arrayElement(['Active', 'Inactive']),
      numeroEntreeServiceDisposition: faker.string.numeric(),
      code: faker.string.numeric(5),
      type: faker.commerce.productName(),
      sousType: faker.commerce.productName(),
      status: faker.helpers.arrayElement(['Active', 'Inactive']),
      folder: faker.datatype.boolean()
    }));
    setData(newData);
  }, []);

  const sortData = useMemo(() => {
    const folders = [];
    const files = [];
    data.forEach(data => {
        if(data.folder) folders.push(data)
        else files.push(data)
    });
    return [...folders, ...files];
  }, [data]);
  
  return sortData;
};

export default useDate;
