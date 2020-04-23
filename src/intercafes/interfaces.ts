import { TYPE } from './types';

export interface Action<T> {
    type: TYPE;
    payload: T
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface Geo {
    lat: number;
    lng: number;
}

interface Adress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: Adress;
}