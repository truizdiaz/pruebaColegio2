import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Colegios { nombre: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private colegiosCollection: AngularFirestoreCollection<Colegios>;
  colegios: Observable<Colegios[]>;

  private colegioDoc: AngularFirestoreDocument<Colegios>;

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

  addColegio(colegio: Colegios) {
    this.colegiosCollection.add(colegio);
  }

  eliminarColegio(colegio){
    this.colegioDoc = this.afs.doc<Colegios>(`colegios/${colegio.id}`);
    this.colegioDoc.delete();
  }

  editarColegio(colegio){
    this.colegioDoc = this.afs.doc<Colegios>(`colegios/${colegio.id}`);
    this.colegioDoc.update(colegio);
  }


}
