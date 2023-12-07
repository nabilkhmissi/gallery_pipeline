import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({ providedIn: 'root' })
export class GalleryService {


    constructor(private _http: HttpClient) { }

    baseUrl = `${environment.apiUrl}/posts`;

    findAll(): Observable<{ _id: string, image: string }[]> {
        return this._http.get<ApiResponse>(this.baseUrl).pipe(
            map(response => response.data)
        );
    }
}


interface ApiResponse {
    data: any;
    message: string;
}