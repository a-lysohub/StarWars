import { useEffect, useState } from 'react';

import { FullPeopleType, getPeople } from '../../../services';

interface Props {
  pageNum: number;
}

interface Response {
  people: FullPeopleType[];
  isLoading: boolean;
}

export const useGetPeople = ({ pageNum }: Props): Response => {
  const [people, setPeople] = useState<FullPeopleType[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPeople() {
      setLoading(true);
      const data = await getPeople({ pageNum });
      setPeople(data);
      setLoading(false);
    }

    loadPeople();
  }, [pageNum]);

  return { people, isLoading };
};
