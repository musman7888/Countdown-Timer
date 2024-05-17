class Timer {
    targetTime;
    constructor(inputSec) {
        const curTime = new Date().getTime();
        this.targetTime = curTime + (inputSec * 1000); // setting target time in miliseconds
    }
    async start() {
        while (this.targetTime > new Date().getTime()) {
            let remTime = Math.ceil((this.targetTime - new Date().getTime()) / 1000); // converting remaining time in seconds
            console.log(`Remaining Time: ${remTime}`);
            await this.delay(1000);
        }
        console.log("Countdown is completed");
    }
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
export default Timer;
