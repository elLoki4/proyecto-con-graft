import { Injectable } from '@angular/core';

import {
  Firestore,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';

import { addDoc, collection } from '@firebase/firestore';
import { Observable, Subject } from 'rxjs';
import { listData } from '../interface/usuarios';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private datosNuevos = new Subject();
  constructor(private firestore: Firestore) {}

  addUser(data: listData) {
    const userReg = collection(this.firestore, 'crud');
    return addDoc(userReg, data);
  }

  getUser(): Observable<any[]> {
    const userReg = collection(this.firestore, 'crud');

    return collectionData(userReg, { idField: 'id' }) as Observable<any[]>;
  }

  deleteUser(data: listData) {
    const docReg = doc(this.firestore, `crud/${data}`);

    return deleteDoc(docReg);
  }
  getDataEdit(data: listData) {
    this.datosNuevos.next(data);
  }
  editData(data: listData) {}
  getData(): Observable<any> {
    return this.datosNuevos.asObservable();
  }
}
