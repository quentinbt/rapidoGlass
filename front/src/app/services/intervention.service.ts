import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Intervention } from '../interfaces/intervention'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class InterventionService {

  constructor(private http: HttpClient) {}

  public getInterventions(): Observable<Intervention[]> {
    const url = 'interventions.json'
    return this.http.get<Intervention[]>(url)
  }

  public create(intervention: Intervention): Observable<Intervention> {
    const url = 'interventions.json'
    return this.http.post<Intervention>(url, intervention)
  }
}
