import { Component } from '@angular/core';
import * as moment from "moment";
import { Moment } from 'moment';

interface baseCalItem {
  startTime: any,
  endTime: any,
  name: string
}

class MomentUtils{

  isMonthStart(moment:Moment){
    return moment.isSame(moment.clone().startOf('month'))
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demo';
  viewDate=moment().toDate()

  holiday:baseCalItem[] = [
    {
    startTime: '2023-11-05',
    endTime: '2023-11-05',
    name: '节日 1'
  },
  {
    startTime: '2023-11-05',
    endTime: '2023-11-18',
    name: '节日 2'
  },
  {
    startTime: '2023-11-10',
    endTime: '2023-11-20',
    name: '节日 3'
  }
]

constructor(){
  const utils = new MomentUtils();
  // const test = utils.isMonthStart(moment('2023-11-02'))
  console.info(this.getCurrentDayHoliday());

  // console.table(this.translate(this.holiday));

}

getCurrentDayHoliday(date = '2023-11-06'){
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
  console.log(perdayHoliday,current);
}

translate(array:baseCalItem[]){
  const newArray = []
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    const startTime = moment(element.startTime)
    const endTime = moment(element.endTime)
    if (startTime.isSame(endTime)) {
      newArray.push(element)
    }else{
      for (let j = i; j < array.length; j++) {
        const nextElement = array[j];
        const nextStartTime = moment(element.startTime)
        const nextEndTime = moment(element.endTime)
        if (nextStartTime.isSameOrBefore(endTime)) {
          newArray.push({
            startTime: nextElement.startTime,
            name: nextElement.name,
            endTime: element.endTime
          })
          newArray.push({
            startTime: element.endTime,
            name: nextElement.name,
            endTime: nextElement.endTime
          })

        }else{
          newArray.push(element)
        }
      }
    }

  }
  return newArray
}
}
