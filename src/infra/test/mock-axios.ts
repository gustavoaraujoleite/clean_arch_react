import axios from "axios";
import { faker } from "@faker-js/faker";

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.post.mockResolvedValue({
    data: faker.internet.password(),
    status: faker.number.int(),
  });

  return mockedAxios;
};
