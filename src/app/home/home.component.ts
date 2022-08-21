import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GetTemplateService } from '../get-template.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private getTemp: GetTemplateService, private data: DataService) {}
  editable: any = '';
  form: any;
  selected: any = '3';
  image: any;
  ngOnInit(): void {
    this.getTemp.getTemplates().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {}
    );

    this.getImage();
  }
  getImage() {
    this.data.getImage().subscribe((res: any) => {
      this.image = res;
      console.log(res);
    });
  }
  clickedEdit(item: any) {
    this.editable = item;
  }
  // enterEditedValue(){
  //   document.querySelectorAll('.S1PPyQ')[0].innerHTML=
  // }
}
