import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  // Solo necesitamos saber si está activo o no
  esBlancoNegro = signal(false);

  toggleFiltro() {
    this.esBlancoNegro.update(estado => !estado);
  }
}
