/* global fetch FormData ENDPOINT */
import {forEach, transform} from 'lodash';
export default class Http {
    static async get(url) {
        console.log(`${ENDPOINT}${url}`)
        const response = await fetch(`${ENDPOINT}${url}`, {
            credentials: 'same-origin',
            headers: {
                referrer: ENDPOINT
            }
        });
        return response.json();
    }

    static async post(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                referrer: ENDPOINT
            }
        });
        return response.json();
    }

    static async put(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'put',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                referrer: ENDPOINT
            }
        });
        return response.json();
    }

    static async delete(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'delete',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                referrer: ENDPOINT
            }
        });
        return response.json();
    }

    static async postFile(url, form) {
        const data = new FormData();
        const emptyForm = this.removeEmpty(form);
        forEach(emptyForm, (value, key)=>{
            data.append(key, value);
        })

        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'POST',
            credentials: 'same-origin',
            body: data,
            headers: {
                referrer: ENDPOINT
            }
        });
        return response.json();                                                                         
    }
    static removeEmpty(object){
        const newObject = transform(object, (result, value, key)=>{
            if(value){
                result[key]=value;
            }
        }, {});
        
        return newObject;
    }
}
