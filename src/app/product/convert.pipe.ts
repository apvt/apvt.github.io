import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convert'
})

// include Convert in app.module.ts -->declarations

export class Convert implements PipeTransform {
    transform(value: string, replacewith = ''):string {
        return value.replace('-',replacewith);


    // transform(value: string):string {
    //     return value.replace('-',' ');

        //using reverse method use split().reverse().join();
        //return value.split('').reverse().join('');

    }

}