class Timer {
    private targetTime: number

    constructor(inputSec: number)
    {
        const curTime = new Date().getTime()
        this.targetTime = curTime + (inputSec * 1000) // setting target time in miliseconds
    }

    async start(){
        while(this.targetTime > new Date().getTime()){
            let remTime = Math.ceil((this.targetTime - new Date().getTime())/1000) // converting remaining time in seconds
            console.log(`Remaining Time: ${remTime}`)
            await this.delay(1000)
        }
        console.log("Countdown is completed")
    }

    private delay(ms: number){ // method to pause code for 1 seconds (1000 Miliseconds)
        return new Promise<void>((resolve) => setTimeout(resolve, ms))
    }

}

export default Timer