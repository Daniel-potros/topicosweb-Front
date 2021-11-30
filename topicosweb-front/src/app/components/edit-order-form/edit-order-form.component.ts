import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Orden } from 'src/app/models/orden';

@Component({
  selector: 'app-edit-order-form',
  templateUrl: './edit-order-form.component.html',
  styleUrls: ['./edit-order-form.component.css']
})
export class EditOrderFormComponent implements OnInit {

  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  orden: Orden

  basket = [''];

  private original: Orden

  constructor(
    private dialogRef: MatDialogRef<EditOrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: { orden: Orden })
  {
    this.orden = data?.orden || new Orden();
    this.original = JSON.parse(JSON.stringify(this.orden));
    this.basket = this.orden.productos
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
  }

  register(orderEditForm: FormGroup): void {
      this.dialogRef.close(this.orden);
  }

  close() {
    Object.assign(this.orden, this.original);
    this.dialogRef.close();
  }

}
