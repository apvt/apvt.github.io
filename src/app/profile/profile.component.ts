import { Component, OnInit } from '@angular/core';
import {Form,FormArray,FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenName } from '../forbidden-name';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

//done to specify content after ? is parameter on console ie - http://localhost:4200/profile?name=ap&id=1  o/p -{name: 'ap', id: '1'}
export class ProfileComponent implements OnInit {
  // name = new FormControl();

  profile = this.fb.group({
    name: ['apoorva', {
      validators: [Validators.required, Validators.minLength(6),
      forbiddenName(new RegExp(/xyz/)),
    ],
      nonNullable: true,
    }],

    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),

    mobiles: this.fb.array([
      this.fb.control(''),
      this.fb.control(''),
    ]),
    //mobile: [],
    // address: FormGroup({
    //   street: FormControl<null>;
    //   city: FormControl<null>;
    //   state: FormControl<null>;
    //   zip: FormControl<null>)};
      address: this.fb.group({
      street:[],
      city: [],
      state: [],
      zip: [],
    }),
  });

  submitForm(): void {
    console.log(this.profile.value);
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => console.log(params));
  }

  // updateName():void{
  //   this.name.setValue('xyz')
  // }

  //setValue

  // updateForm(): void {
  //   this.profile.setValue({
  //     name: 'xyz',
  //     email: null,
  //     mobile: null,
  //     address: { street: null, city: null, state: null, zip: null },
  //   });
  // }

  //patchvalue

  /*
  updateForm():void {
    this.profile.patchValue({
      name:'',
      // email:null,
      // mobile:null,
    })
    }
*/

  //reset value

  updateForm(): void {
    this.profile.reset();
  }

  get namectr(): FormControl {
    return this.profile.get('name') as FormControl;
  }

  get emailctr(): FormControl {
    return this.profile.get('email') as FormControl;
  }

  get mobiles(): FormArray {
    return this.profile.get('mobiles') as FormArray;
  }
  
  addMobile():void{
    this.mobiles.push(this.fb.control(''))
  }

}
