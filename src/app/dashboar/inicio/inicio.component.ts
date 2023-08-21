import { Component, OnInit } from '@angular/core';
import { listData } from '../interface/usuarios';
import { ServiceService } from '../service/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  constructor(
    private fire: ServiceService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  dataList: listData[] = [];

  ngOnInit(): void {
    this.fire.getUser().subscribe((data) => {
      this.dataList = data;
      this.dataSource = new MatTableDataSource<listData>(this.dataList);
    });
  }
  dataSource!: MatTableDataSource<listData>;

  displayedColumns: string[] = [
    'fecha',
    'inversiones',
    'capital inicial',
    'valor actual',
    'accion',
  ];

  async eliminarUsuario(dataId: any) {
    const response = await this.fire.deleteUser(dataId);
    this.snackBar.open('el usuario ya fue eliminado', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  editDatos(editarData: listData) {
    this.fire.getDataEdit(editarData);
    console.log('estoy enviando los datos de data');
    console.log(editarData);
    this.route.navigate(['/creardato']);
  }
}
