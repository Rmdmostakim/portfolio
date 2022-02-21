export default class RestapiLink {
    static baseUrl = 'http://localhost:8000/';

    static getBrandName = `${this.baseUrl}getBrandName`;

    static getAllServices = `${this.baseUrl}getAllServices`;

    static getAllProducts = `${this.baseUrl}getAllProducts`;

    static getAllSocialMedia = `${this.baseUrl}getAllSocialMedia`;

    static recentProducts = `${this.baseUrl}recentProducts`;
}
