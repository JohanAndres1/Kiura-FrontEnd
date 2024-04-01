import { useEffect, useState } from 'react';

export default function Cards() {
  const [profesionals, setProfesionals] = useState([]);

  useEffect(() => {
    fetch('https://6602f0839d7276a75554a537.mockapi.io/api/v1/profesionals')
      .then((resp) => resp.json())
      .then((data) => {
        setProfesionals(data);
      });
  }, []);

  return (
    <>
      {profesionals.map(({ avatar, name, id, email, tel, job, price }) => {
        return (
          <li
            key={id}
            className="list-none flex items-center justify-between h-28 w-full m-auto px-5 bg-white rounded-2xl"
          >
            <div className="flex items-center">
              <img src={avatar} alt={name} className="w-20 rounded-full" />
              <div className="">
                <a
                  className="text-textButton font-bold"
                  href={`profesionals/profesional-${id}`}
                >
                  {name}
                </a>
                <p>{job}</p>
              </div>
            </div>
            <p>{email}</p>
            <p>{tel}</p>
            <p>${price}</p>
          </li>
        );
      })}
    </>
  );
}
