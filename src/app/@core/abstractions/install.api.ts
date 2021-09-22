import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { InstallModel } from '../models/install.model';

export abstract class  IInstallApi {
    abstract install(value: InstallModel): Observable<HttpResponse<any>>;
}