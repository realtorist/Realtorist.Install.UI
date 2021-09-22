import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IInstallApi } from "../abstractions/install.api";
import { InstallModel } from '../models/install.model';
import { apiServerUrl } from './serverUrl';

@Injectable()
export class InstallApi extends IInstallApi {
    private readonly apiBaseUrl = apiServerUrl() + '/api/install';
    constructor(private readonly httpClient: HttpClient) {
        super();
    }

    install(value: InstallModel): Observable<HttpResponse<any>> {
        return this.httpClient.post<HttpResponse<any>>(this.apiBaseUrl, value);
    }
}