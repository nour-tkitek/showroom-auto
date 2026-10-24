
import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar implements OnChanges {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = [];
  @Output() onSelectCar = new EventEmitter<Auto>();

  selectedAutos: Auto[] = [];
  selectedCar: Auto | null = null;

  ngOnChanges() {
    this.selectedAutos = this.autos;
  }

  selectAutos(selectedBrand: string) {
    const brand = selectedBrand.trim().toLowerCase();

    if (brand) {
      this.selectedAutos = this.autos.filter(auto =>
        auto.brand.toLowerCase().startsWith(brand)
      );
    } else {
      this.selectedAutos = this.autos;
    }
  }

  selectCar(auto: Auto) {
    this.selectedCar = auto;
    this.onSelectCar.emit(auto);
  }
}



