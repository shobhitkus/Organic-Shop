import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {}
  create(product){
   return this.db.list('/products').push(product);
   }
   getAll() {
    return this.db.list('/products', ref => (ref.orderByChild('name')))
    .snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
      )
    );
}
   get(productId): Observable<any>{
    return this.db.object('/products/' + productId).valueChanges();
    
   }
   update(productId, product){
    return this.db.object('/products/' + productId).update(product); 
   }
   delete(productId){
     return this.db.object('/products/' + productId).remove();
   }
}
