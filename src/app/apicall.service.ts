import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class APIcallService {
  private itemsCollection: AngularFirestoreCollection<any>;
  private itemsCollection1: AngularFirestoreCollection<any>;

  items: Observable<any>;
  items1: Observable<any>;

  private taskDoc: AngularFirestoreDocument<any>;


  constructor(private afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();

    this.itemsCollection1 = this.afs.collection<any>('org');
    this.items1 = this.itemsCollection1.valueChanges();


    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );

    this.items1 = this.itemsCollection1.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );

  }

  public addItem(item: any, status: any) {

    this.itemsCollection.doc(item.firstName).set(item);
    this.itemsCollection1 = this.afs.collection<any>('org');
    this.itemsCollection1.doc(item.firstName).set(status);
    // this.itemsCollection1.doc('roadways' + item.firstName).set(status);


  }

  getdata(): Observable<any> {

    console.log(this.items)

    // this.itemsCollection.doc(s.id).update({name: 'name12'})


    // this.itemsCollection = this.afs.collection<any>('items');
    return this.items;


  }


  getdata1(): Observable<any> {

    // this.itemsCollection.doc(s.id).update({name: 'name12'})


    // this.itemsCollection = this.afs.collection<any>('items');
    return this.items1;


  }

  public updateTask(id, update) {

    this.taskDoc = this.itemsCollection1.doc<any>(id);

    this.taskDoc.update(update);

 }

}
