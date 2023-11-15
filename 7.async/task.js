class AlarmClock {
	constructor() {
		this.alarmCollection = []
		this.intervalId = null
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время')
		}
		const newAlarm = {
			callback: callback,
			time: time,
			canCall: true,
		}
		this.alarmCollection.push(newAlarm)
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(
			alarm => alarm.time !== time
		)
	}
	getCurrentFormattedTime() {
		const now = new Date()
		let hours = String(now.getHours())
		let minutes = String(now.getMinutes())
		if (hours.length < 2) {
			hours = '0' + String(hours)
		}
		if (minutes.length < 2) {
			minutes = '0' + String(minutes)
		}
		return `${hours}:${minutes}`
	}
	start() {
		if (this.intervalId) {
			return
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(alarm => {
					if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
						alarm.canCall = false
						alarm.callback()
					}
				})
			}, 1000)
		}
	}
	stop() {
		clearInterval(this.intervalId)
		this.intervalId = null
	}
	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true
		})
	}
	clearAlarms() {
		this.stop()
		this.alarmCollection = []
	}
}
