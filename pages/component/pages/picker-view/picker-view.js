const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [999, 1, 1],
    openPicker: true
  },
  bindChange: function (e) {
    const val = e.detail.value
    console.log(e)
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  open: function(){
    var _this = this;
    this.setData({
      openPicker: false
    })
    console.log(_this.data.openPicker);
  },
  close: function(){
    var _this = this;
    this.setData({
      openPicker: true
    })
  }
})