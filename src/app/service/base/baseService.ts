import { environment } from "src/environments/environment";

/**
 * Clase base para llamar la url del servicio
 */

export class BackendBaseService {

    baseURL: string = environment.apiUrl;
  
    constructor(){}
  }