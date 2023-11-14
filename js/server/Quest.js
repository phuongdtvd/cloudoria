class Quest {
    constructor(name, testFunction, questGiver, rewards, failState, successState){ //Ran once you initalize class
        this.name = name;
        this.testFunction = testFunction;
        this.questGiver = questGiver;
        this.rewards = rewards;
        this.fail = failState
        this.success = successState
    }

    GetQuestName(){
        return this.name;
    }

    GetQuestGive(){
        return this.questGiver;
    }

    getRewards(){
        return this.rewards;
    }

    async GetQuestCompletion(){
        var result = await this.testFunction();
        if (result.completed === true){
            return {...result, state: this.success}
        } else{
            return {...result, state: this.fail}
        }
    }
}

module.exports = Quest