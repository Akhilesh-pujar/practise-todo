import {Client, Account, Databases} from 'appwrite'


const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("651d2766175d9c25ff98")

export const account = new Account(client)

//data base

export const databases = new Databases(client ,"651d28ad24148b74a53a" )