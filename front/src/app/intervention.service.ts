import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http: HttpClient) { }

  public getInterventions() {
    const url = 'interventions.json'
    return this.http.get(url);
  }
}
