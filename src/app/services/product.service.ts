import { Injectable } from '@angular/core';
import { BehaviorSubject,concat,delay,filter,interval,map,max,min,Observable,of,pipe,Subject,Subscription,take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  value$ = of(1,2,3);
  // create own observable
  myobservable$ = new Observable(observer =>{
    observer.next(10);
    observer.next(20);
    // throw new Error('error occured');
    observer.complete();  //stops further execution
    observer.next('hello');
    observer.next([2,3,4]);

  })

  // subject$ = new Subject<number>();

  numbers$ = of(7,8,9);
  myinterval$ = interval(1000);
  sub$! : Subscription

  subject$ = new BehaviorSubject<number>(0); //creating subject
  private cartCount = 0;
  cartCount$ = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) {
    // console.log(this.value);
    // this.value$.subscribe(val => console.log(val))
    // this.myobservable$.subscribe(val => console.log(val))

    // for complete method
    // this.myobservable$.subscribe({
    //   next : val => console.log(val),
    //   error : err => console.log(err),
    //   complete : () => console.log('completed')
    // });

    //concat
    // const timer = interval(1000).pipe(take(2));

    // map(), pipe
    // this.numbers$
    // .pipe(
    //   //order matters while performing below operations in case of filter() before map() changes tha ans.
    //   map(val => val + val),
    //   filter(val => val % 2 == 0),

    //   //delay(5000),
    //   min(),
    //   max(),

    // )
    // .subscribe(val => console.log(val))
    // this.sub$=this.myinterval$.subscribe(val => console.log(val))

    //unsubscribe()
    // setTimeout(()=>{
    //   if(this.sub$){
    //     this.sub$.unsubscribe();
    //  }
    // },5000);

    // concat(timer, timer) // concatenating the same Observable!
    // .subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('...and it is done!')
    // });

    //subscribe subject

    this.subject$.subscribe((val) => console.log('A-', val));  //subscribe subject
    this.subject$.next(1); //pass data using next method
    this.subject$.next(2);
    this.subject$.next(3);
    this.subject$.subscribe((val) => console.log('B', val));
    this.subject$.next(4);
    this.subject$.next(5);
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }

 getProductsById(id:number):Observable<Product>{
  return this.http.get<Product>(`http://localhost:3000/products/${id}`);
    
}
 
  increment(): void {
    this.cartCount += 1;
    console.log(this.cartCount);
    this.cartCount$.next(this.cartCount);
  }
}
