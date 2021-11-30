import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditOrderFormComponent } from 'src/app/components/edit-order-form/edit-order-form.component';
import { Orden } from 'src/app/models/orden';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Sort, SortDirection } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Orden[] = [
  {id: '1', mesa: 1, fecha: '11/29/2021', productos: ['Carrots']},
  {id: '2', mesa: 2, fecha: '11/29/2021', productos: []},
  {id: '3', mesa: 3, fecha: '11/29/2021', productos: []},
  {id: '4', mesa: 4, fecha: '11/29/2021', productos: []},
  {id: '5', mesa: 5, fecha: '11/29/2021', productos: []},
];

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  durationInSeconds = 5;
  private sortColumn: string = 'id';
  private sortDirection: SortDirection = 'desc';

  ordenes: Orden[] = ELEMENT_DATA

  displayedColumns: string[] = ['id', 'mesa', 'fecha','actions'];
  dataSource = this.ordenes;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }


  onBtnNewClick() {
    this.router.navigateByUrl('/buy')
  }

  async editOrder(element: Orden): Promise<void> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = { orden: element };

    const dialogRef = this.dialog.open(EditOrderFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(this.updateOrden.bind(this));
  }

  private async updateOrden(orden: Orden): Promise<void> {
    if (!orden) {
      return;
    }

    try {
      const index = this.ordenes.findIndex(a => a.id === orden.id);
      if (index >= 0) {
        this.ordenes[index] = orden
        this.ordenes = [...this.ordenes];
        //this.sortData({ active: this.sortColumn, direction: this.sortDirection });
      }
    } catch (error: any) {
    }
  }

  remove(orden: Orden) {
    this.removeOrden(orden.id)
  }

  private async removeOrden(id: string): Promise<void> {
    try {
      //await this.classifiedsService.removeClassified(id);
      const index = this.ordenes.findIndex(a => a.id === id);
      this.snackBar.open("Orden eliminada", "Cerrar");
      
      if (index >= 0) {
        this.ordenes.splice(index, 1);
        this.ordenes = [...this.ordenes];
        this.sortData({ active: this.sortColumn, direction: this.sortDirection });
        this.dataSource = this.ordenes
      }
     
    } catch (error: any) {
      this.snackBar.open(error, "Cerrar");
    }
  }

  sortData(ev: Sort): void {
    const data = this.ordenes.slice();
    if (!ev.active || ev.direction === '') {
      this.ordenes = data;
      return;
    }

    this.sortColumn = ev.active;
    this.sortDirection = ev.direction;

    const sortFn = (a: string | number, b: string | number, isAsc: boolean): number => {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };

    const isAsc = ev.direction === 'asc';

    this.ordenes = data.sort((a: Orden, b: Orden) => {
      switch (ev.active) {
        case 'id' : return sortFn(a.id, b.id, isAsc);
        //case 'pubdate' : return sortFn(a.publicationDate, b.publicationDate, isAsc);

        default: return 0;
      }
    });
  }
}

