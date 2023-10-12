import type { FullPeopleType } from './types';

interface Props {
  pageNum: number;
}

export const getPeople = async ({
  pageNum,
}: Props): Promise<FullPeopleType[]> => {
  const dataResp = await fetch(`https://swapi.dev/api/people/?page=${pageNum}`);
  const data = await dataResp.json();
  return data.results;
};

interface GetPeopleCountResponse {
  peopleCount: number;
  peopleCountPerPage: number;
}

export const getPeopleCount = async (): Promise<GetPeopleCountResponse> => {
  const dataResp = await fetch('https://swapi.dev/api/people/');

  try {
    const data = await dataResp.json();
    return {
      peopleCount: data.count,
      peopleCountPerPage: data.results.length,
    };
  } catch (err) {
    console.log('Something went wrong', err);
    return {
      peopleCount: 0,
      peopleCountPerPage: 0,
    };
  }
};
