import { Component, OnInit, OnDestroy } from "@angular/core";
import { NbThemeService } from '@nebular/theme';

@Component({
selector: 'ngx-linecharts',
template:`<div echarts [options]="options" class="echart"></div>
`

})

export class LineComponent implements OnInit, OnDestroy {
options: any = {};
themeSubscription : any;

constructor(private theme: NbThemeService)
{


}

ngOnInit(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        this.options = {
            xAxis:{
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
    
            yAxis: {
                type: 'value'
            },
            series :[{
                data: [12, 23, 34, 45, 54, 67, 74],
                type: 'line'
            }]
        };
    })
  
}

ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
}

}