import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GetTemplateService } from '../get-template.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private getTemp: GetTemplateService) {}
  editable: any = '';
  form: any;
  selected: any = '3';
  ngOnInit(): void {
    this.getTemp.getTemplates().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {}
    );
  }
  clickedEdit(item: any) {
    this.editable = item;
  }
  // enterEditedValue(){
  //   document.querySelectorAll('.S1PPyQ')[0].innerHTML=
  // }
}
