import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditOrderFormComponent } from 'src/app/components/edit-order-form/edit-order-form.component';
import { Orden } from 'src/app/models/orden';


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

  ordenes: Orden[] = []

  displayedColumns: string[] = ['id', 'mesa', 'fecha'];
  dataSource = ELEMENT_DATA;
  constructor(
    private router: Router,
    private dialog: MatDialog,
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
}

