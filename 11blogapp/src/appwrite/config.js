
import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite"

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async getPost(slug){
        try {
           return await this.databases.getDocuments
            (conf.appWriteDatabaseId, conf.appWriteCollectionId, slug)
        } catch (error) {
            console.log("Appwrite service :: getPost() :: error : ", error);
            return false
        }

        async.getPost(queries = [Query.equal('status', 'active')]){
            try {
                return await this.databases.listDocuments(conf.appWriteDatabaseId, 
                    conf.appWriteCollectionId, queries)
                
            } catch (error) {
                console.log("Appwrite service :: getPost() :: error : ", error);
                return false
            }
        }
    }
    
    async createPost ({ title, slug, content, featuredImage, status }) {
        try {
            return await this.databases.createDocument 
            (conf.appWriteDatabaseId, conf.appWriteCollectionId, 'slug',
                 { title, content, featuredImage, status, userId }, [
                
            ])
        } catch (error) {
            console.log("Appwrite service :: createPost() :: error : ", error);
            return false
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
           return await this.databases.updateDocument
           (conf.appWriteDatabaseId, conf.appWriteCollectionId, slug,)
           { title, content, featuredImage, status, userId } 
        } catch (error) {
            console.log("Appwrite service :: updatePost() :: error : ", error); 
            return false

        }
    }
    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument
            (conf.appWriteDatabaseId, conf.appWriteCollectionId, slug,)
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost() :: error : ", error);
            return false
        }
    }
    //storage files

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId, 
                ID.unique(), 
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile() :: error : ", error);
            return false
        }
    }
     async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appWriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile() :: error : ", error);
            
        }
     }
     getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appWriteBucketId, 
            fileId).href
     }
}

const service = new Service()

export default service