import axios from "axios";

const url = 'http://192.168.212.196:3333/'

export const api = axios.create({
  baseURL: url
})