import { Directive, Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { testdir } from '../shared/index';
import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded AdditemComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-additem',
  templateUrl: 'additem.component.html',
  styleUrls: ['additem.component.css'],
  
  })
export class AdditemComponent implements OnInit {
  selectedItem: number = 0;
  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  qtyarr: number[]= [0,1,2,3,4,5];
  grandtotal: number = 0;
  /**
   * Creates an instance of the AdditemComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */

   onQtyChange( newValue , price: number ){
    this.grandtotal += newValue * price;

   }
  constructor(public nameListService: NameListService, private route: ActivatedRoute) {}
  id: number;
  private sub: any;
  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.grandtotal = 0;
   // this.getNames();
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.getNames( this.id );
       // In a real app: dispatch action to load the details here.
    });
  }

  /**
   * Handle the nameListService observable
   */
  getNames( theid : number) {
    this.nameListService.getDishes()
      .subscribe(
        names => {
            for(let key in names){
              if( names[key][0].resid == theid )
                this.names.push( names[key] )
            }
            console.log(this.names);
            //this.names = names
          },
        error =>  this.errorMessage = <any>error
      );
      var hello = 3;
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
