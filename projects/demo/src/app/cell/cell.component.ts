import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
interface baseCalItem {
  startTime: any,
  endTime: any,
  name: string
}
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.less']
})
export class CellComponent implements OnInit {
  @Input() day:any
  @Input() holiday!:baseCalItem[]

  currnet:baseCalItem[] = []
  constructor(){

  }
  ngOnInit(): void {
    this.getCurrentDayHoliday(this.day.date)
  }
  getCurrentDayHoliday(date:Date){
    const perdayHoliday:baseCalItem []= []
    const today = moment(date)
    const perday = today.clone().subtract(1,'day')

    const current = this.holiday.filter(item=>{
      const startTime = moment(item.startTime)
      const endTime = moment(item.endTime)
      if (perday.isBetween(startTime,endTime,undefined,'[]')) {
        perdayHoliday.push(item)
      }
      return today.isBetween(startTime,endTime,undefined,'[]')
    })
    if (perdayHoliday.length !== current.length) {
      console.log('今天的节日和昨天的不一样');
    }
    this.currnet = current
    console.log(perdayHoliday,current);
  }

}
