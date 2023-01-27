const CosmosClient = require('@azure/cosmos').CosmosClient;
const debug = require('debug')('todo-cosmos:task');

const partitionKey = undefined;
class Task {

    /**
     * Lee, a;ade y actualiza tareas en Cosmos DB
     * @param {CosmosClient} cosmosClient 
     * @param {string} databaseID 
     * @param {string} containerID 
     */
    constructor(cosmosClient, databaseID, containerID) {
        this.client = cosmosClient;
        this.databaseID = databaseID;
        this.containerID = containerID;

        this.database = null;
        this.container = null;
    }

    async init() {
        debug("Inicializando BD")

        const dbResponse = await this.client.databases.createIfNotExists( {
            id: this.databaseID
        });

        this.database = dbResponse.database;
        debug("iniciallizando contenedor...");
        const contResponse = await this.database.createIfNotExists({
            id: this.containerID
        });
        this.containter = contResponse.container;
    }
};