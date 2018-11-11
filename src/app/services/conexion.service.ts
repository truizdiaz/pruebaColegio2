import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Colegios { nombre: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private colegiosCollection: AngularFirestoreCollection<Colegios>;
  colegios: Observable<Colegios[]>;

  constructor(private afs: AngularFirestore) {
    this.colegiosCollection = afs.collection<Colegios>('colegios');
    this.colegios = this.colegiosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Colegios;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaColegios() {
    return this.colegios;
  }
}
