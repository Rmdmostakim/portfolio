export default class ApiLink {
    static baseUrl = 'http://localhost:8000/';

    static getBrandName = `${this.baseUrl}getBrandName`;

    static addBrandname = `${this.baseUrl}addBrandName`;

    static getAllServices = `${this.baseUrl}getAllServices`;

    static addService = `${this.baseUrl}addService`;

    static editService = `${this.baseUrl}editService`;

    static deleteService = `${this.baseUrl}deleteService`;

    static getAllProducts = `${this.baseUrl}getAllProducts`;

    static addProduct = `${this.baseUrl}addProduct`;

    static editProduct = `${this.baseUrl}editProduct`;

    static deleteProduct = `${this.baseUrl}deleteProduct`;

    static getAllSocialMedia = `${this.baseUrl}getAllSocialMedia`;

    static addSocialMedia = `${this.baseUrl}addSocialMedia`;

    static getDashboardData = `${this.baseUrl}getDashboardData`;

    static getAllMails = `${this.baseUrl}getAllMails`;

    static readMail = `${this.baseUrl}readMail`;
}
