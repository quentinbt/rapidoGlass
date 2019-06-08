import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Intervention } from '../interfaces/intervention'
import { Observable } from 'rxjs'
import { ToastrService } from 'ngx-toastr'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class InterventionService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  public getAll(): Observable<Intervention[]> {
    const url = 'interventions.json'
    return this.http.get<Intervention[]>(url)
  }

  public create(intervention: Intervention): Observable<Intervention> {
    const url = 'interventions.json'
    return this.http.post<Intervention>(url, intervention)
    .pipe(
      tap(res => {
        this.toastr.success('', "Demande d'intervention enregistré!")
      })
    )
  }

  public show(interventionId: number): Observable<Intervention> {
    const url = `interventions/${interventionId}.json`
    return this.http.get<Intervention>(url)
  }

  public update(intervention: Intervention): Observable<Intervention> {
    const url = `interventions/${intervention.id}.json`
    return this.http.put<Intervention>(url, intervention)
    .pipe(
      tap(res => {
        this.toastr.success('', 'Modification enregistré!')
      })
    )

  }
}
