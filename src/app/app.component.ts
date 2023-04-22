import { Component, OnInit } from '@angular/core';
import { WindowService } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent implements OnInit {
  
  constructor(
    private windowService: WindowService
  ) {}

  ngOnInit(): void {
    this.windowService.getInactivity().subscribe(isInactive => {
      console.log('isInactive', isInactive);
      if (isInactive) {
        console.log('El usuario está inactivo');
      }
    });
  }
  

}
