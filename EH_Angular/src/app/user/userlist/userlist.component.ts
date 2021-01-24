import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'mobileNo', 'dateOfBirth', 'isActive', 'action'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    var data: any = {};
    this.userService.ReadUser(data).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;


      console.log(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddUser(): void {
    this.router.navigate(["home/user"]);
  }

  onEdit(id): void {
 
    this.router.navigate(["home/user/edit", id]);

  }

  onDelete(id): void {
    if (confirm("Are you sure to delete")) {
      var data: any = {};
      data.id = id;

      this.userService.DeleteUser(data).subscribe((data: any) => {
        this.router
          .navigateByUrl("refresh", { skipLocationChange: true })
          .then(() => {
            this.router.navigate(["home/userlist"]);
          });
      });
    }

  }

}
