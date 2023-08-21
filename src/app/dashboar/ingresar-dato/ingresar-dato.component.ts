import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { listData } from '../interface/usuarios';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-ingresar-dato',
  templateUrl: './ingresar-dato.component.html',
  styleUrls: ['./ingresar-dato.component.css'],
})
export class IngresarDatoComponent {
  titulo = 'crear datos';
  form: FormGroup;
  constructor(
    private fire: ServiceService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = new FormGroup({
      inversiones: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      capital: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.fire.getData().subscribe((data) => {
      this.titulo = 'editar datos';
      console.log(data);
      this.form.patchValue({
        inversione: data.inversiones,
        valor: data.valor,
        capital: data.capital,
        fecha: data.fecha,
      });
    });
  }

  async addUser() {
    const datos: listData = {
      inversiones: this.form.value.inversiones,
      valor: this.form.value.valor,
      capital: this.form.value.capital,
      fecha: this.form.value.fecha,
    };
    const response = await this.fire.addUser(datos);
    this.route.navigate(['/inicio']);
    this.snackBar.open('el usuario fue agregado', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
