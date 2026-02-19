import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo = signal(100);
  contraste = signal(100);
  blur = signal(0);
  blancoNegro = signal(false);

  filtroScss = computed(() => {
    const base = `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px)`;
    const escala = this.blancoNegro() ? ' grayscale(100%)' : '';
    return base + escala;
  });

  actualizar(prop: string, evento: Event) {
    const valor = (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor);
  }

  toggleBlancoNegro() {
    this.blancoNegro.update(v => !v);
  }
}

