import { Component, OnInit } from '@angular/core';
import { UnidadP } from '../../model/models';
import { UnidadPService } from '../../services/unidad-p.service';


@Component({
  selector: 'app-unidadp',
  templateUrl: './unidadp.component.html',
  styleUrls: ['./unidadp.component.scss']
})
export class UnidadpComponent implements OnInit{
  unidadp: UnidadP[] = [];

  constructor(private unidadPService: UnidadPService) { }
  ngOnInit(): void {
    this.cargarUnidad();
  }

  cargarUnidad():void{
    this.unidadPService.getUnidadP().subscribe(unidadp => {
      this.unidadp = unidadp;
      console.log(unidadp);
    });
  }

}
