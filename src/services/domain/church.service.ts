import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { API_CONFIG } from "../../config/api.config";
import { ChurchDTO } from "../../models/church.dto";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChurchService {
    constructor(public http: HttpClient){

    }
    
    findAll() : Observable<ChurchDTO[]>  {
        return this.http.get<ChurchDTO[]>(`${API_CONFIG.baseUrl}/churches`);
    }
}