const CosmosClient = require('@azure/cosmos').CosmosClient;
const debug = require('debug')('todo-cosmos:task');

let partitionKey = undefined;

// ESTE ES EL MODELO DE DATOS
class Task {

    /**
     * Lee, anade y actualiza tareas en Cosmos DB
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
        debug("inicializando contenedor...");
        const contResponse = await this.database.createIfNotExists({
            id: this.containerID
        });
        this.containter = contResponse.container;
    }

    /**
     * Encuentra un objeto en la BD
     * @param {string} querySpec 
     */
    async find(querySpec) {
        debug("Buscando en la base de datos");
        if (!this.container) {
            throw new Error("Contenedor no se ha inicializado")
        };
        const { resources } = await this.container.items.query(querySpec).fetchAll();

        return resources;
    };

    /**
     * Crea el item enviado en cosmos DB
     * @param {*} item 
     * @returns {resource} Item creado en la BD
     */
    async additem(item) {
        debug("Anadiendo item a la BD");
        item.date = Date.now();
        item.completes = false;
        const { resource: doc } = await this.container.items.create(item);

        return doc;
    }

    /**
     * 
     * @param {string} itemID 
     * @returns 
     */
    async updateItem(itemID) {
        debug("Actualizando ITEM");
        const doc = await this.getITem(itemID);
        doc.completed = true;

        const { resource: replaced } = await this.container
            .item(itemID, partitionKey)
            .replace(doc)

            return replaced
    }

    /**
     * 
     * @param {string} itemID 
     * @returns 
     */
    async getItem(itemID) {
        debug("Buscando Item en la BD");
        const { resource } = await this.container.item(itemID, partitionKey);
        return resource
    };

};

module.exports = Task;