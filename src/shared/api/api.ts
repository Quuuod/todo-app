import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from "query-string";
import { environment } from "environments";

const Todo = axios.create({
  baseURL: environment.baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

interface IGet {
  url: string;
  query?: any;
}

interface IPost {
  url: string;
  params?: any;
}

interface IPut {
  url: string;
  params?: any;
}

interface IDelete {
  url: string;
  params?: any;
}

const get = async <T>({ url, query = null }: IGet): Promise<T> => {
  const queryString = query ? `?${qs.stringify(query)}` : "";

  const response = await Todo.get(`${url + queryString}`);

  return response.data;
};

const post = async <T>({ url, params = {} }: IPost): Promise<T> => {
  const response = await Todo.post(url, params);

  return response.data;
};

const put = async <T>({ url, params = {} }: IPut): Promise<T> => {
  const response = await Todo.put(url, params);

  return response.data;
};

const deleteMethod = async <T>({ url, params = {} }: IDelete): Promise<T> => {
  const response = await Todo.delete(url, params);

  return response.data;
};

const methods = { get, post, put, deleteMethod };

export default methods;
