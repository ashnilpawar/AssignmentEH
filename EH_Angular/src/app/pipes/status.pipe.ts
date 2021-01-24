import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "status" })
export class Status implements PipeTransform {
  transform(val: number) {
    if (val == 1) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}
