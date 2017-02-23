import { Directive, Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { MovieFilterPipe } from './movieFilter.pipe';
import { ChildComponent } from './child.component';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  
  })

export class HomeComponent implements OnInit {

  dataarr = ['Milk', 'Bread', 'Beans'];
  childTitle:string = 'This text is passed to child';
  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  onNotify(message:string):void {
    alert(message.hello);
  }
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error =>  this.errorMessage = <any>error
      );
      var hellsd = 3;
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
